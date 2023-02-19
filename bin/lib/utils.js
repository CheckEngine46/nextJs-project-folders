import { createPages } from './pagesCreator.js';
import { createPublic } from './publicCreator.js';
import { createApp } from './appCreator.js';
import { topLevelFiles } from './topLevelCreator.js';

export const init = async () => {
  try {
    await topLevelFiles();
    await createApp();
    await createPages();
    await createPublic();

    console.log('Structure has been created successfully!');
  } catch (e) {
    console.log('init', e);
  }
};
