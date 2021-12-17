import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getServerSideToken, getUserScript } from '../lib/auth'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const userData = props.req;

    return { ...props, ...userData }
  }

  render() {
const { user = {} } = this.props;

    return (
      <Html>
        <Head>
        
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
        <link href="//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" rel="stylesheet" />
      


        </Head>

        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

//export default MyDocument