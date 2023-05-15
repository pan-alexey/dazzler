import build from './components/build';
import watch from './components/watch';

import { PluginImpl } from 'rollup';

export interface Options {
  src: string;
  target: string;
  filter: (filepath: string) => boolean;
}

const plugin: PluginImpl<Options> = (options: Options) => {
  let wasEmit = false;
  const { src, target, filter = () => true } = options;

  return {
    name: 'rollup-css-mirror',
    buildStart() {
      if (wasEmit) return;
      const watchMode = Boolean(this.meta.watchMode);

      const fn = watchMode ? watch : build;
      fn({ src, target, filter });
      wasEmit = true;
    },
  };
};

export default plugin;
