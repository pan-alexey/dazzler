import React from 'react';
import { checkComponentItems } from '@dazzler/utils-react-children';
import './ListGroup.scss';

type ListRef = HTMLDivElement;
interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  itemHover?: boolean;
  itemDivider?: boolean;
}

const List = React.forwardRef<ListRef, ListProps>((props, ref) => {
  const { itemHover, itemDivider, className, children, ...restProps } = props;

  const memoClassName = React.useMemo(
    () => ['d-list', className].filter(Boolean).join(' '),
    [className, itemHover, itemDivider],
  );

  React.useEffect(() => {
    // checkComponentItems
  }, []);

  return (
    <div ref={ref} {...restProps} className={memoClassName}>
      {children}
    </div>
  );
});

List.displayName = 'List';

export { List };
