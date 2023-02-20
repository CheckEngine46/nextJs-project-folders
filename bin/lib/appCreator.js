import fs from 'fs';

import { appScss, _variablesScss, _base } from './data.js';

const createApi = () => {
  return new Promise((res, rej) => {
    fs.mkdir('app/api', async (err) => {
      if (err) {
        console.log('ERROR create app/api folder', err);
        rej('ERROR create app/api folder');
      } else {
        console.log('---created app/api');
        res();
      }
    });
  });
};

const createUtils = () => {
  return new Promise((res, rej) => {
    fs.mkdir('app/utils', async (err) => {
      if (err) {
        console.log('ERROR create app/utils folder', err);
        rej('ERROR create app/utils folder');
      } else {
        console.log('---created app/utils');
        res();
      }
    });
  });
};

const createContext = () => {
  return new Promise((res, rej) => {
    fs.mkdir('app/context', async (err) => {
      if (err) {
        console.log('ERROR create app/context folder', err);
        rej('ERROR create app/context folder');
      } else {
        console.log('---created app/context');
        res();
      }
    });
  });
};

const createHooks = () => {
  return new Promise((res, rej) => {
    fs.mkdir('app/hooks', async (err) => {
      if (err) {
        console.log('ERROR create app/hooks folder', err);
        rej('ERROR create app/hooks folder');
      } else {
        console.log('---created app/hooks');
        res();
      }
    });
  });
};

const createConstants = () => {
  return new Promise((res, rej) => {
    fs.mkdir('app/constants', async (err) => {
      if (err) {
        console.log('ERROR create app/constants folder', err);
        rej('ERROR create app/constants folder');
      } else {
        console.log('---created app/constants');
        res();
      }
    });
  });
};

const createStyles = () => {
  return Promise.all([
    new Promise((res, rej) => {
      fs.mkdir('app/styles', async (err) => {
        if (err) {
          console.log('ERROR create app/styles folder', err);
          rej('ERROR create app/styles folder');
        } else {
          console.log('---created app/styles');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/styles/abstracts', async (err) => {
        if (err) {
          console.log('ERROR create app/styles/abstracts folder', err);
          rej('ERROR create app/styles/abstracts folder');
        } else {
          console.log('---created app/styles/abstracts');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile(
        'app/styles/abstracts/_variables.scss',
        _variablesScss,
        (err) => {
          if (err) {
            console.log(
              'ERROR create app/styles/abstracts/_variables.scss: ',
              err,
            );
            rej('ERROR create app/styles/abstracts/_variables.scss');
          } else {
            console.log('---created app/styles/abstracts/_variables.scss');
            res();
          }
        },
      );
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/styles/base', async (err) => {
        if (err) {
          console.log('ERROR create app/styles/base folder', err);
          rej('ERROR create app/styles/base folder');
        } else {
          console.log('---created app/styles/base');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('app/styles/base/_base.scss', _base, (err) => {
        if (err) {
          console.log('ERROR create app/styles/base/_base.scss: ', err);
          rej('ERROR create app/styles/base/_base.scss');
        } else {
          console.log('---created app/styles/base/_base.scss');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('app/styles/base/_typography.scss', '', (err) => {
        if (err) {
          console.log('ERROR create app/styles/base/_typography.scss: ', err);
          rej('ERROR create app/styles/base/_typography.scss');
        } else {
          console.log('---created app/styles/base/_typography.scss');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.writeFile('app/styles/app.scss', appScss, (err) => {
        if (err) {
          console.log('ERROR create app/styles/app.scss: ', err);
          rej('ERROR create app/styles/app.scss');
        } else {
          console.log('---created app/styles/app.scss');
          res();
        }
      });
    }),
  ]);
};

const createTypes = () => {
  return Promise.all([
    new Promise((res, rej) => {
      fs.mkdir('app/types', async (err) => {
        if (err) {
          console.log('ERROR create app/types folder', err);
          rej('ERROR create app/types folder');
        } else {
          console.log('---created app/types');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/types/api', async (err) => {
        if (err) {
          console.log('ERROR create app/types/api folder', err);
          rej('ERROR create app/types/api folder');
        } else {
          console.log('---created app/types/api');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/types/context', async (err) => {
        if (err) {
          console.log('ERROR create app/types/context folder', err);
          rej('ERROR create app/types/context folder');
        } else {
          console.log('---created app/types/context');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/types/elements', async (err) => {
        if (err) {
          console.log('ERROR create app/types/elements folder', err);
          rej('ERROR create app/types/elements folder');
        } else {
          console.log('---created app/types/elements');
          res();
        }
      });
    }),
  ]);
};

const createComponents = () => {
  return Promise.all([
    new Promise((res, rej) => {
      fs.mkdir('app/components', async (err) => {
        if (err) {
          console.log('ERROR create app/components folder', err);
          rej('ERROR create app/components folder');
        } else {
          console.log('---created app/components');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/components/elements', async (err) => {
        if (err) {
          console.log('ERROR create app/components/elements folder', err);
          rej('ERROR create app/components/elements folder');
        } else {
          console.log('---created app/components/elements');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/components/layouts', async (err) => {
        if (err) {
          console.log('ERROR create app/components/layouts folder', err);
          rej('ERROR create app/components/layouts folder');
        } else {
          console.log('---created app/components/layouts');
          res();
        }
      });
    }),

    new Promise((res, rej) => {
      fs.mkdir('app/components/modules', async (err) => {
        if (err) {
          console.log('ERROR create app/components/modules folder', err);
          rej('ERROR create app/components/modules folder');
        } else {
          console.log('---created app/components/modules');
          res();
        }
      });
    }),
  ]);
};

const createAppContent = async () => {
  try {
    await createApi();
    await createComponents();
    await createConstants();
    await createContext();
    await createHooks();
    await createStyles();
    await createTypes();
    await createUtils();
  } catch (e) {
    console.log('app content creating error', e);
    throw e;
  }
};

export const createApp = () => {
  return new Promise((res, rej) => {
    fs.mkdir('app', async (err) => {
      if (err) {
        console.log('ERROR create public folder', err);
        rej('ERROR create public folder');
      } else {
        console.log('---created app');
        try {
          await createAppContent();
          res();
        } catch (e) {
          console.log('app content creating error', e);
          rej('app content creating error');
        }
      }
    });
  });
};
