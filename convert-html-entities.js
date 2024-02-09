function convertHTML(str) {
  const signMap = new Map()
  signMap.set("&", "&amp;")
  signMap.set("<", "&lt;")
  signMap.set(">", "&gt;")
  signMap.set('"', "&quot;")
  signMap.set("'", "&apos;")
  
  return str
    .split("")
    .reduce(
      (arr, char) => {
        const key = signMap.get(char) ?? char
        return [...arr, key]
      }
    , [])
    .join("")
}

console.log(convertHTML("Dolce & Gabbana"));
