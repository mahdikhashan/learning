function strToAscciTable(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
}

function acssiTableToStr(table) {
  return table
    .map((code) => String.fromCharCode(code))
    .join("")
}

function fearNotLetter(str) {
  if (str.length == 1) {
    return undefined;
  }

  let table = strToAscciTable(str)
  let code = table.shift()
  let missingCharCode = code;

  if (!table.includes( code + 1 )) {
    missingCharCode = code + 1;
    return String.fromCharCode(missingCharCode);
  }

  if (fearNotLetter(acssiTableToStr(table)) !== undefined) {
    return fearNotLetter(acssiTableToStr(table));
  }
}

console.log(fearNotLetter("abcdefghjklmno"));
