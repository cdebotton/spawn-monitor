declare class ChildProcess {
  on(
    event: string,
    callback: function
  ): void;

  start(): void;
}

declare module 'forever-monitor' {
  declare function Monitor(): ChildProcess;
}

declare module chalk {
  declare function black(str: string): string;
  declare function red(str: string): string;
  declare function green(str: string): string;
  declare function yellow(str: string): string;
  declare function blue(str: string): string;
  declare function magenta(str: string): string;
  declare function cyan(str: string): string;
  declare function white(str: string): string;
  declare function grey(str: string): string;
  declare function gray(str: string): string;
  declare function bgBlack(str: string): string;
  declare function bgRed(str: string): string;
  declare function bgGreen(str: string): string;
  declare function bgYellow(str: string): string;
  declare function bgBlue(str: string): string;
  declare function bgMagenta(str: string): string;
  declare function bgCyan(str: string): string;
  declare function bgWhite(str: string): string;
}

type NotifierConfig = {
  title: string;
  message: string;
  sound: boolean;
};

declare module 'node-notifier' {
  declare function notify(config: NotifierConfig): void;
}

declare module moment {
  declare class Moment {
    format(params: string): string
  }

  declare function exports(date: Date): Moment;
}

declare module pad {
  declare function exports(input: string): string;
}
