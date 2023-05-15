import React from 'react';
import { Divider } from '@dazzler/divider';
import { useTheme } from '../../context/theme';
import { Preview } from '../../common/preview';
import style from './index.module.css';

const HeadingExample: React.FC = () => {
  return (
    <div className={style.block}>
      <Divider />
      <Divider variant='dashed' />
      <Divider variant='dashed'>Title divider</Divider>
    </div>
  );
};

const ButtonTest: React.FC = () => {
  return (
    <div className={style.block}>
      123 <div className={style.button}>Title button</div> 123
    </div>
  );
};

const exampleCode = `
import React, { useState } from "react";

const a: string = 'b';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {a}
      </button>
    </div>
  );
}
`.trim();

export const DividerPage: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={[style.root, `css-color-${theme}`].join(' ')}>
      <div className={style.example}>
        <Preview code={exampleCode} title='Divider'>
          <HeadingExample />
        </Preview>
      </div>
      <div className={style.example}>
        <Preview code={exampleCode} title='Divider'>
          <ButtonTest />
        </Preview>
      </div>
    </div>
  );
};
