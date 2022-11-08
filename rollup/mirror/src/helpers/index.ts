import path from 'path';
import fs from 'fs-extra';

export const walk = (dir: string) => {
  const getFileList = async (
    dir: string,
    fileList: Array<string> = [],
  ): Promise<string[]> => {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filepath = path.join(dir, file);
      const stat = await fs.stat(filepath);
      if (stat.isDirectory()) {
        fileList = await getFileList(filepath, fileList);
      } else {
        fileList.push(filepath);
      }
    }
    return fileList;
  };

  return getFileList(dir);
};

export const replaceDir = ({
  filepath,
  src,
  target,
}: {
  filepath: string;
  src: string;
  target: string;
}) => {
  const filepathArray = filepath.split(path.sep);
  const clearPath = filepathArray.splice(
    src.split(path.sep).length - 1,
    filepathArray.length,
  );

  return path.join(target, ...clearPath);
};
