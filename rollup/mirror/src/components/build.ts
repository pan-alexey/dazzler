import fs from 'fs-extra';
import { replaceDir, walk } from '../helpers';
import { BuildOptions } from './types';

export default async (buildOptions: BuildOptions) => {
  const { src, target, filter } = buildOptions;
  const files = await walk(src);
  const sourceFiles = files.filter(filter);
  for (let i = 0; i < sourceFiles.length; i++) {
    const filepath = sourceFiles[i];
    fs.copy(filepath, replaceDir({ filepath, src, target }));
  }
};
