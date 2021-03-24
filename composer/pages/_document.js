import Document, { Html, Head, Main, NextScript } from 'next/document';
import { patchSharing } from '@module-federation/nextjs-mf';
const registry = require('../registry')

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {patchSharing()}
        {/* This is where we're actually allowing app 2 to get the code from app1 */}
        {registry.map(fragment => {
          return (
            <script
              src={`http://localhost:${fragment.port}/_next/static/remoteEntryMerged.js`}
            />
          );
        })}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
