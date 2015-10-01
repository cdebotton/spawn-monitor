/* @flow */

import chalk from 'chalk';
import notifier from 'node-notifier';
import moment from 'moment';
import pad from 'pad';
import timeDiff from './timeDiff';

const colors = ['red', 'green', 'yellow', 'blue', 'magenta'];
const colorCache = {};
let colorIndex = colors.length;

export default function log(
  type: string,
  message: string
): void {
  let color = colorCache[type];
  if (!color) {
    color = colorCache[type] = colors[--colorIndex];
  }
  const bgColor = `bg${color.charAt(0).toUpperCase() + color.slice(1)}`;
  message.toString().split('\n')
    .filter((line) => line.trim().length > 0)
    .forEach((line) => {
      notifier.notify({
        title: type,
        message: line,
        sound: false,
      });

      console.log(
        chalk.yellow(moment(new Date()).format('HH:mm:ss')),
        chalk[color](type.slice(0, 1)),
        chalk[color](pad(timeDiff(type), 7)),
        chalk[bgColor](' '),
        line
      );
    });
}
