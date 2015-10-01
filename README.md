# spawn-monitor

A tiny little library for spawning up a forever-monitor while outputting color coded and time-stampped logs.

## usage

```javascript
import monitor from 'spawn-monitor';

monitor({
  script: './scripts/server',
  key: 'webserver',
});

monitor({
  script: './scripts/dev-server',
  key: 'webpack',
});

monitor({
  script: './scripts/graphql',
  key: 'graphql',
});
```
