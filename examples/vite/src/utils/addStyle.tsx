export const addStyleInHeader = (selector:string, cssVaribles: Record<string, string> ) => {
  const rules = Object.keys(cssVaribles);
  const styles = rules.map((rule) => {
    return `${rule}:${cssVaribles[rule]}`
  }).join(';')
  var sheet = document.createElement('style')
  sheet.innerHTML = `${selector} {${styles}}`;
  document.body.appendChild(sheet);
}