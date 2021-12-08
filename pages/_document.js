import Document, { Html, Head, Main, NextScript } from "next/document";
import AOS from "aos";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            AOS.init();
        `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
