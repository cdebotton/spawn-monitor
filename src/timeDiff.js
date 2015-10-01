/* @flow */

const timers: {[key: string]: Date} = {};

export default function (type: string): string {
  const date: Date = new Date();
  const diff: number = timers[type] ? date - timers[type] : 0;

  let diffString: string = '';
  if (diff >= 1000 * 60 * 60) {
    diffString = Math.floor(diff / 1000 / 60 / 60).toString() + 'h';
  } else if (diff >= 1000 * 60) {
    diffString = Math.floor(diff / 1000 / 60).toString() + 'm';
  } else if (diff >= 1000) {
    diffString = Math.floor(diff / 1000).toString() + 's';
  } else {
    diffString = diff.toString() + 'ms';
  }

  timers[type] = date;

  return `+${diffString}`;
};
