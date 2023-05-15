import React from 'react';
import styleModule from './index.module.scss';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

export const CodePreview: React.FC<{ code: string }> = ({ code }) => (
  <div className={styleModule.code}>
    <Highlight {...defaultProps} theme={theme} code={code} language='tsx'>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={[className, styleModule.pre].join(' ')} style={style}>
          {tokens.map((line, tokenKey) => (
            <div
              {...getLineProps({ line, key: tokenKey })}
              key={tokenKey}
              className={styleModule.line}
            >
              <div className={styleModule.lineNo}>{tokenKey + 1}</div>
              <div className={styleModule.lineContent}>
                {line.map((token, lineKey) => (
                  <span
                    key={lineKey}
                    {...getTokenProps({ token, key: lineKey })}
                  />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
    <code>123</code>
  </div>
);
