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
        'ListItem',
        `ListItem_size_${size}`,
        active ? `dzl-active` : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [className, active, size, className],
  );

  return (
    <div ref={ref} {...restProps} className={memoClassName}>
      <div className='ListItem__grid'>
        <div className='ListItem__before'>
          {before && <div className='ListItem__before__content'>{before}</div>}
        </div>
        <div className='ListItem__main'>
          <div className='ListItem__content'>{content || ''} </div>
          <div className='ListItem__description'>{description || ''}</div>
        </div>
        <div className='ListItem__after'>
          {after && <div className='ListItem__after__content'>{after}</div>}
        </div>
        {children && (
          <div
            className={`ListItem__children ListItem__children_${childrenOffset}`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
});

ListItem.displayName = 'ListItem';

export { ListItem };
