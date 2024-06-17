interface Poet {
  name: string;
  age: number;
}

let valueLater: Poet;

valueLater = {
  name: "Saadi Shirazi",
  age: 50
};

console.log(valueLater.name);

// valueLater = {
//   name: 12,
//   age: "12"
// }
// Error: Type 'string' is not assignable to 'Poet'

import { Character } from './types';

export const character: Character = {
  catchphrase: "Yee-haw!",
  name: "Sandy Cheeks",
}

import { singer } from './declaration';

let myFavoriteSinger: typeof singer;

myFavoriteSinger = function (name) {
  return `singing: ${name}`;
}


// void returns

let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${song}`)
}

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

let lazyValue: string | undefined;

lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.ts(2322)

const records: string[] = [];

function saveRecords(newRecords: string[]): void {
  newRecords.forEach(record => records.push(record));
}

saveRecords(['21', 'Come On Over', 'The Bodyguard'])

declare let voidValue: void;
voidValue = undefined;

declare let anotherVoidValue: void;
voidValue = null;
// interesting!
