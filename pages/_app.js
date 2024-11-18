import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="alternate" href="https://apexpath.com/" hreflang="en-US" />
        <title>
          ApexPath || Software Solution
        </title>
        <meta name="Keywords"
          content="Software development,GIS application development,Web application development,Desktop application development,Mobile application development,Web scraping" />
        <meta name="Description"
          content="ApexPath is a team of well-recognized software development experts focusing on improving business to develop their status with world-class software solutions and applications." />
        <meta name="Author" content="apexpath.munna@gmail.com" />
        <link rel="canonical" href="https://apexpath.com/" />

        <meta name="og:type" content="article" />
        <meta property="og:image" content="https://apexpath.com/img/logo-top.png" />
        <meta property="og:image:url" content="https://apexpath.com/img/logo-top.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="152" />
        <meta property="og:description"
          content="ApexPath is a team of well-recognized software development experts focusing on improving business to develop their status with world-class software solutions and applications. " />
        <meta property="og:title" content="ApexPath" />
        <meta property="og:url" content="https://apexpath.com/index.html" />
        {/*====== Favicon Icon ======*/}
        <link
          rel="shortcut icon"
          href="assets/images/newweb/apexpath.png"
          type="image/x-icon"
        />
        {/*====== Google Fonts ======*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*====== Flaticon ======*/}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/*====== Font Awesome ======*/}
        <link rel="stylesheet" href="assets/css/font-awesome-5.9.0.min.css" />
        {/*====== Bootstrap ======*/}
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
        {/*====== Magnific Popup ======*/}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/*====== Nice Select ======*/}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/*====== jQuery UI ======*/}
        <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
        {/*====== Animate ======*/}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/*====== Slick ======*/}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/*====== Main Style ======*/}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      {loading && <div className="preloader" />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
