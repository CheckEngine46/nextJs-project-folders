import fs from 'fs';

import { gitIgnore } from './data.js';

const createGitIgnore = () => {
  return new Promise((res, rej) => {
    fs.writeFile('.gitignore', gitIgnore, (err) => {
      if (err) {
        console.log('ERROR create gitignore: ', err);
        rej('ERROR create gitignore');
      } else {
        console.log('---created .gitignore file');
        res();
      }
    });
  });
};

const createEnvs = () => {
  return Promise.all([
    new Promise((res, rej) => {
      fs.writeFile('.env', '', (err) => {
        if (err) {
          console.log('ERROR create env: ', err);
          rej('ERROR create env');
        } else {
          console.log('---created .env file');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('.env.example', '', (err) => {
        if (err) {
          console.log('ERROR create env: ', err);
          rej('ERROR create env:');
        } else {
          console.log('---created .env.example file');
          res();
        }
      });
    }),
  ]);
};

export const topLevelFiles = async () => {
  try {
    await createGitIgnore();
    await createEnvs();
  } catch (e) {
    console.log('topLevelFiles', e);
    throw e;
  }
};
