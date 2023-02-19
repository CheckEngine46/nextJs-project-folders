import fs from 'fs';

import { robots } from './data.js';

const createPublicContent = () => {
  return Promise.all([
    new Promise((res, rej) => {
      fs.mkdir('public/images', (err) => {
        if (err) {
          console.log('ERROR create public/images: ', err);
          rej('ERROR create public/robots');
        } else {
          console.log('---created public/images');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('public/robots.txt', robots, (err) => {
        if (err) {
          console.log('ERROR create public/robots.txt: ', err);
          rej('ERROR create public/robots.txt');
        } else {
          console.log('---created public/robots.txt');
          res();
        }
      });
    }),
  ]);
};

export const createPublic = () => {
  return new Promise((res, rej) => {
    fs.mkdir('public', async (err) => {
      if (err) {
        console.log('ERROR create public folder', err);
        rej('ERROR create public folder');
      } else {
        console.log('---created public');
        try {
          await createPublicContent();
          res();
        } catch (e) {
          console.log('public content creating error', e);
          rej('public content creating error');
        }
      }
    });
  });
};
