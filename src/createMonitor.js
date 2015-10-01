/* @flow */

import {Monitor} from 'forever-monitor';
import log from './log';

type MonitorConfig = {
  script: string,
  key: string,
  env?: string,
  onListening?: Function,
  rebootOnChange?: Array<string>,
};

export default function createMonitor(opts: MonitorConfig) {
  const monitor: ChildProcess = new Monitor(opts.script, {
    silent: true,
    max: 1,
    command: './node_modules/.bin/babel-node --harmony',
    env: opts.env,
  });

  const onListening: ?Function = opts.onListening;
  const key: string = opts.key;

  monitor.on('stdout', (buffer: Buffer) => {
    const message: string = buffer.toString();

    if (onListening && /listening/.test(message)) {
      onListening(key);
    }

    log(key, message);
  });

  monitor.on('stderr', log.bind(null, key));

  monitor.start();
}
