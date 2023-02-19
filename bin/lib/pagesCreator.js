import fs from 'fs';

import { _app, _404, _error, _document } from './data.js';

const createPagesContent = () => {
  return Promise.all([
    new Promise((res, rej) => {
      fs.writeFile('pages/_app.tsx', _app, (err) => {
        if (err) {
          console.log('ERROR create pages/_app.tsx: ', err);
          rej();
        } else {
          console.log('---created pages/_app.tsx');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('pages/404.tsx', _404, (err) => {
        if (err) {
          console.log('ERROR create pages/404.tsx: ', err);
          rej();
        } else {
          console.log('---created pages/404.tsx');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('pages/_error.tsx', _error, (err) => {
        if (err) {
          console.log('ERROR create pages/_error.tsx: ', err);
          rej();
        } else {
          console.log('---created pages/_error.tsx');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('pages/_document.tsx', _document, (err) => {
        if (err) {
          console.log('ERROR create pages/_document.tsx: ', err);
          rej();
        } else {
          console.log('---created pages/_document.tsx');
          res();
        }
      });
    }),
  ]);
};

export const createPages = () => {
  return new Promise((res, rej) => {
    fs.mkdir('pages', async (err) => {
      if (err) {
        console.log('ERROR create pages folder', err);
        rej('ERROR create pages folder');
      } else {
        console.log('---created pages');
        try {
          await createPagesContent();
          res();
        } catch (e) {
          console.log('pages content creating error', e);
          rej('pages content creating error');
        }
      }
    });
  });
};
