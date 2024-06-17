interface Merged {
  firstSource: string;
}

interface Merged {
  secondSource: string;
}

let myMerged: Merged = {
  firstSource: "first-source",
  secondSource: "second-source"
}

// interface merging is useful when we want to extend or augment an external 
// package variable or a global scope variable like Window object

interface Window {
  myEnvironmentVariable: string;
}

window.myEnvironmentVariable = "my-environment-variable";

interface GlobalThis {
  myServerSideVariable: string;
}

globalThis