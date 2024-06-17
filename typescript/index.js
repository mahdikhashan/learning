var valueLater;
valueLater = {
    name: "Saadi Shirazi",
    age: 50
};
console.log(valueLater.name);
export var character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks",
};
var myFavoriteSinger;
myFavoriteSinger = function (name) {
    return "singing: ".concat(name);
};
// void returns
var songLogger;
songLogger = function (song) {
    console.log("".concat(song));
};
songLogger("Meshki Posh az Reza Sadeghi");
// function logSong(song: string | undefined): void {
//   if (!song) {
//     return;
//   }
//   console.log(`${song}`);
//   return true;
//   // but when I return this there is no errors and its type is any, how??
// }
// Error: Type 'boolean' is not assignable to type 'void'.ts(2322)
function returnsVoid() {
    return;
}
var lazyValue;
lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.ts(2322)
var records = [];
function saveRecords(newRecords) {
    newRecords.forEach(function (record) { return records.push(record); });
}
saveRecords(['21', 'Come On Over', 'The Bodyguard']);
voidValue = undefined;
voidValue = null;
// interesting!
