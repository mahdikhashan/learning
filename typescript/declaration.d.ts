declare let declared: string;

// declare let initializer: string = "wanda";
// Error: Initializers are not allowed in ambient contexts.ts(1039)

interface Context {}

declare function canGrantWrite(ctx: Context): boolean;

// declare function canGrantWrite(ctx: Context) {
//   return true;
// }
// Error: An implementation cannot be declared in ambient contexts.ts(1183)

declare function logSong(name: string | undefined): void;

export declare let singer: (song: string) => string;

declare class Fairy {
  canGrantWish(wish: string): boolean;

  grantWish(wish: string): void;
}

declare class Gin {
  grantWish(wish: string) {
    return true;
  };
}