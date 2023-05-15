import React from 'react';
import { Text, Link } from '@dazzler/text';
import { useTheme } from '../../context/theme';
import { Preview } from '../../common/preview';
import style from './index.module.css';

import { HeadingExample } from './sources/Heading';
import { ColorExample } from './sources/Color';

const AlignExample: React.FC = () => {
  return (
    <div className={style.headingExample}>
      <Text align='start'>Text example align start</Text>
      <Text align='center'>Text example align center</Text>
      <Text align='end'>Text example align end</Text>
    </div>
  );
};

const LinkExample: React.FC = () => {
  return (
    <div className={style.headingExample}>
      <Link href='#' bold>
        Link example bold
      </Link>
      <Link href='#' uppercase>
        Link example uppercase
      </Link>
      <Link href='#' lowercase>
        Link example lowercase
      </Link>
      <Link href='#' decoration='through'>
        Link example decoration through
      </Link>
      <Link href='#' decoration='wavy'>
        Link example decoration wavy
      </Link>
      <div>
        <Link style={{ width: '120px' }} href='#' ellipsis>
          Link example ellipsis. Link example ellipsis. Link example ellipsis
        </Link>
      </div>
    </div>
  );
};

const StyleExample: React.FC = () => {
  return (
    <div className={style.headingExample}>
      <Text bold>Text example bold</Text>
      <Text uppercase>Text example uppercase</Text>
      <Text lowercase>Text example lowercase</Text>
      <Text decoration='through'>Text example decoration through</Text>
      <Text decoration='under'>Text example decoration under</Text>
      <Text decoration='wavy'>Text example decoration wavy</Text>

      <div>
        <Text style={{ width: '120px' }} ellipsis>
          Text example ellipsis
        </Text>
      </div>
    </div>
  );
};

// https://raw.githubusercontent.com/pan-alexey/dazzler/main/LICENSE
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

export const TextPage: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={[style.root, `css-color-${theme}`].join(' ')}>
      <div className={style.example}>
        <Preview code={exampleCode} title='Heading & Text'>
          <div className={style.block}>
            <HeadingExample />
          </div>
        </Preview>
      </div>

      <div className={style.example}>
        <Preview code={exampleCode} title='Color example'>
          <div className={style.block}>
            <ColorExample />
          </div>
        </Preview>
      </div>

      <div className={style.example}>
        <Preview code={exampleCode} title='Align example'>
          <AlignExample />
        </Preview>
      </div>

      <div className={style.example}>
        <Preview code={exampleCode} title='Style example'>
          <StyleExample />
        </Preview>
      </div>

      <div className={style.example}>
        <Preview code={exampleCode} title='Style example'>
          <LinkExample />
        </Preview>
      </div>
    </div>
  );
};
