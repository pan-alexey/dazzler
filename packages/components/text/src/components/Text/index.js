import React from 'react';
import style from './style.module.css';
import colorStyle from '../../common/color.module.css';
import alignStyle from '../../common/align.module.css';
import subsetStyle from '../../common/subset.module.css';
const Text = React.forwardRef((props, ref) => {
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
        decoration ? subsetStyle[`decoration-${decoration}`] : '',
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
    return (React.createElement("span", { ref: ref, ...restProps, className: memoClassName }, children));
});
Text.displayName = 'Text';
// Alias for usage
const Span = Text;
export { Text, Span };
//# sourceMappingURL=index.js.map