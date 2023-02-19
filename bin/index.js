#!/usr/bin/env node

import readline from 'readline';
import { init } from './lib/utils.js';

const _readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

_readline.question('Init NextJS project folders structure? ', (name) => {
  if (/y/i.test(name)) {
    init();
  }
  _readline.close();
});
