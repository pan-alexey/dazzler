import React from 'react';
import { checkComponentChild } from '@dazzler/utils-react-children';
import './ListGroup.scss';

type ListGroupRef = HTMLDivElement;
interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  hovering?: boolean;
  divider?: boolean;
}

const ListGroup = React.forwardRef<ListGroupRef, ListGroupProps>(
  (props, ref) => {
    const { hovering, divider, className, children, ...restProps } = props;

    const memoClassName = React.useMemo(
      () =>
        [
          'dzl-list-group',
          hovering ? 'dzl-list-hovering' : '',
          divider ? 'dzl-list-divider' : '',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [className, hovering, divider],
    );

    React.useEffect(() => {
      checkComponentChild({
        children,
        childName: 'ListItem',
        parentName: 'ListGroup',
      });
    }, []);

    return (
      <div ref={ref} {...restProps} className={memoClassName}>
        {children}
      </div>
    );
  },
);

ListGroup.displayName = 'ListGroup';

export { ListGroup };
