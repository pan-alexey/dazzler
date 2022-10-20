import * as React from 'react';
import './ListItem.scss';

type ListItemRef = HTMLDivElement;
interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  description?: React.ReactNode;
  active?: boolean;
  size?: 'default' | 'small' | 'large';
  before?: React.ReactNode;
  after?: React.ReactNode;
  childrenOffset?: 'default' | 'after' | 'before';
}

const ListItem = React.forwardRef<ListItemRef, ListItemProps>((props, ref) => {
  const {
    size = 'default',
    active,
    content = '',
    before,
    after,
    description,
    childrenOffset = 'default',
    className,
    children,
    ...restProps
  } = props;

  const memoClassName = React.useMemo(
    () =>
      [
        'dzl-list-item',
        `dzl-size-${size}`,
        active ? `dzl-active` : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [className, active, size, className],
  );

  return (
    <div ref={ref} {...restProps} className={memoClassName}>
      <div className='dzl-grid'>
        <div className='dzl-before'>
          {before && <div className='dzl-before-content'>{before}</div>}
        </div>
        <div className='dzl-main'>
          <div className='dzl-content'>{content || ''} </div>
          <div className='dzl-description'>{description || ''}</div>
        </div>
        <div className='dzl-after'>
          {after && <div className='dzl-after-content'>{after}</div>}
        </div>
        {children && (
          <div className={`dzl-children-${childrenOffset}`}>{children}</div>
        )}
      </div>
    </div>
  );
});

ListItem.displayName = 'ListItem';

export { ListItem };
