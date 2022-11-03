import React from 'react';
import style from './style.module.css';
import colorStyle from '../../common/color.module.css';
import alignStyle from '../../common/align.module.css';
import subsetStyle from '../../common/subset.module.css';
import decorationStyle from '../../common/decoration.module.css';
const Paragraph = React.forwardRef((props, ref) => {
    const { color = 'default', size, align, bold, uppercase, lowercase, ellipsis, decoration, className, children, ...restProps } = props;
    const memoClassName = React.useMemo(() => [
        style.root,
        colorStyle[color],
        size ? style[size] : '',
        align ? alignStyle[`align-${align}`] : '',
        bold ? subsetStyle.bold : '',
        uppercase ? subsetStyle.uppercase : '',
        lowercase ? subsetStyle.lowercase : '',
        ellipsis ? subsetStyle.ellipsis : '',
        decoration ? decorationStyle[`decoration-${decoration}`] : '',
        className,
    ]
        .filter(Boolean)
        .join(' '), [
        color,
        size,
        align,
        bold,
        uppercase,
        lowercase,
        ellipsis,
        decoration,
        className,
    ]);
    return (React.createElement("p", { ref: ref, ...restProps, className: memoClassName }, children));
});
Paragraph.displayName = 'Text';
// Alias for usage
const P = Paragraph;
export { Paragraph, P };
//# sourceMappingURL=index.js.map