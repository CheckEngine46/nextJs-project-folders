export const gitIgnore = [
  '# dependencies',
  '/node_modules',
  '/.pnp',
  '.pnp.js',
  '\n',
  '# testing',
  '/coverage',
  '\n',
  '# next.js',
  '/.next/',
  '/out/',
  '\n',
  '# production',
  '/build',
  '\n',
  '# misc',
  '.DS_Store',
  '/.idea',
  '\n',
  '# debug',
  'npm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',
  '\n',
  '# local env files',
  '.env',
  '.env.local',
  '.env.development.local',
  '.env.test.local',
  '.env.production.local',
].join('\n');

export const _404 = `
const Custom404 = () => <div>404 Page not Found</div>;

export default Custom404;`;

export const _app = `
import { AppProps } from 'next/app';
import 'styles/base/_base.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;`;

export const _error = `
const Error = ({ statusCode }: { statusCode?: number }) => (
  <p>
    {statusCode
      ? \`An error \${statusCode} occurred on server\`
      : 'An error occurred on client'}
  </p>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;`;

export const _document = `
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  return = (): JSX.Element => (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;`;

export const robots = `
User-agent: *
Allow: /`;

export const appScss = `@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'abstracts/functions';

@import 'base/typography';`;

export const _variablesScss = `$color-primary: #faa916;
$color-black: #050517;
$color-white: #fff;

$grid-columns: 12;
$grid-gutter-width: 3rem;

$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
);

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
);`;

export const _base = `*,
*:after,
*:before {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

body {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

p {
  line-height: 2.4rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}

a {
  text-decoration: none;
}`;
