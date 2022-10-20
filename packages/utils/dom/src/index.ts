export function isElement(el: unknown): el is Element {
  return (
    el != null &&
    typeof el == 'object' &&
    'nodeType' in el &&
    (el as { nodeType: unknown }).nodeType === Node.ELEMENT_NODE
  );
}

export function isHTMLElement(el: unknown): el is HTMLElement {
  if (!isElement(el)) return false;
  const win = el.ownerDocument.defaultView ?? window;
  return el instanceof win.HTMLElement;
}
