import Head from 'next/head';

const MainHead = () => (
  <Head>
    {/* Meta Data */}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>Nowa - Bootstrap 5 Premium Admin &amp; Dashboard Template</title>
    <meta name="Description" content="Bootstrap Responsive Admin Web Dashboard HTML5 Template" />
    <meta name="Author" content="Spruko Technologies Private Limited" />
    <meta name="keywords" content="admin,admin dashboard,admin panel,admin template,bootstrap,clean,dashboard,flat,jquery,modern,responsive,premium admin templates,responsive admin,ui,ui kit." />

    {/* Favicon */}
    <link rel="icon" href="/assets/images/brand-logos/favicon.ico" type="image/x-icon" />

    {/* Choices JS */}
    <script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js" />

    {/* Main Theme Js */}
    <script src="/assets/js/main.js" />
  </Head>
);

export default MainHead;
