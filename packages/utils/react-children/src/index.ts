import React from 'react';

export const isDevMode: boolean = '_self' in React.createElement('div');

export const allowChildComponents = (
  children: React.ReactNode,
  name: string,
): boolean => {
  let result = true;

  React.Children.forEach(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (child?.type?.displayName !== name) {
      result = false;
    }
  });

  return result;
};

export const checkComponentItems = (
  items: React.ReactNode[],
  childName: string,
  parentName: string,
): boolean => {
  if (!isDevMode) return false;

  for (let i = 0; i < items.length; i++) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (items[i].type?.displayName !== name) {
      console.log(
        `[debug] All items component for ${parentName} must match the ${childName}`,
      );
      return false;
    }
  }
  return true;
};

export const checkComponentChild = ({
  children,
  childName,
  parentName,
}: {
  children?: React.ReactNode;
  childName: string;
  parentName: string;
}): boolean => {
  if (!children) return false;
  if (!isDevMode) return false;
  if (!allowChildComponents(children, childName)) {
    console.log(
      `[debug] All child component for ${parentName} must match the ${childName}`,
    );

    return false;
  }

  return true;
};
