function convertHTML(str) {  
  return str
    .split("")
    .reduce(
      (arr, char) => {
        const key = ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;"
        })[char] ?? char
        return [...arr, key]
      }
    , [])
    .join("")
}

console.log(convertHTML("Dolce & Gabbana"));
