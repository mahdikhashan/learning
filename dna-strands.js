function pairElement(str) {
  const AT = ["A", "T"]
  const TA = ["T", "A"]
  const CG = ["C", "G"]
  const GC = ["G", "C"]

  let nucleobase_pairs = []
  
  for (const nucleobase of str.split("")) {
    switch (nucleobase) {
      case "A":
        nucleobase_pairs.push(AT)
        break;
      case "T":
        nucleobase_pairs.push(TA)
        break;
      case "C":
        nucleobase_pairs.push(CG);
        break
      case "G":
        nucleobase_pairs.push(GC);
        break;
      default:
        break
    }
  }

  return nucleobase_pairs;
}

pairElement("GCG");
