# spawn-monitor

A tiny little library for spawning up a forever-monitor while outputting color coded and time-stampped logs.

## usage

```javascript
import {createMonitor} from 'spawn-monitor';

createMonitor({
  script: './scripts/server',
  key: 'webserver',
});

createMonitor({
  script: './scripts/dev-server',
  key: 'webpack',
});

createMonitor({
  script: './scripts/graphql',
  key: 'graphql',
});
```
