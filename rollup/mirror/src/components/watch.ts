import fs from 'fs-extra';
import chokidar from 'chokidar';
import { replaceDir, walk } from '../helpers';
import { BuildOptions } from './types';

export default async (buildOptions: BuildOptions) => {
  const { src, target, filter } = buildOptions;
  chokidar.watch(src).on('all', async (event, filepath) => {
    const dist = replaceDir({ filepath, src, target });

    if (event === 'unlink' || event === 'unlinkDir') {
      fs.remove(dist);
      return;
    }

    if (!filter(filepath)) {
      return;
    }

    fs.copy(filepath, replaceDir({ filepath, src, target }));
  });
};
