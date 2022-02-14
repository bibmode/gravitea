import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Gravitea is a milktea shop that offers delicious milktea flavors from different cultures and afternoon snacks that filipinos love. Our menu is sure to be a treat for everyone who wishes to enjoy it in our shop or at home with our fast and convenient delivery service."
          />
          <link rel="icon" href="favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Gravitea is a milktea shop that offers delicious milktea flavors from different cultures and afternoon snacks that filipinos love. Our menu is sure to be a treat for everyone who wishes to enjoy it in our shop or at home with our fast and convenient delivery service."
          />
          <title>Gravitea: Butuan City&apos;s Favorite Milktea House</title>
          <meta
            name="google-site-verification"
            content="je7G3w3JZzlzAUClfQkSlwITfTGANh8dleejKlPuDws"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
