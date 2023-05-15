import * as React from 'react';
import styles from './list-item.module.scss';

import { RiMeteorFill } from 'react-icons/ri';

export type DividerRef = HTMLDivElement;
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  // align?: 'default' | 'start' | 'end' | 'center';
  active?: boolean;
  // color?: 'default' | 'secondary';
}

const ListItem = React.forwardRef<DividerRef, DividerProps>((props, ref) => {
  const { active, className, ...restProps } = props;

  const memoClassName = React.useMemo(
    () => [styles.root, active ? styles.active : '', className].filter(Boolean).join(' '),
    [className],
  );

  // if (children === undefined) {
  //   return (
  //     <div ref={ref} className={memoClassName} {...restProps}>
  //       <div className={styles.line} />
  //     </div>
  //   );
  // }

  return (
    <div ref={ref} className={memoClassName} {...restProps}>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.pre}>
            <div className={styles.pre__container}>
              <RiMeteorFill style={{ fontSize: '24px' }} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.content__container}>
              <div className={styles.content__headline}>Typography</div>
              <div className={styles.content__support}>Text and links</div>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.post__container}>
              <RiMeteorFill style={{ fontSize: '24px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ListItem.displayName = 'Divider';

export { ListItem };
