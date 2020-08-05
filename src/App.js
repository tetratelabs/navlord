import React from "react";
import MainHeader from "./components/mainHeader";
import Header from "./components/header";
import {Helmet} from 'react-helmet';
import Social from "./assets/social-pic.png"

function App() {
  return (
    <div className="App">
      <Helmet>
      <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* <!-- HTML Meta Tags --> */}
        <title>Tetrate Library</title>
        <meta
            name="description"
            content="Best place to find more about Istio, Envoy and Tetrate Service Bridge"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Tetrate Library" />
        <meta
            itemprop="description"
            content="Best place to find more about Istio, Envoy and Tetrate Service Bridge"
        />
        {/* <!-- <meta itemprop="image" content="www.tetrate.io/static/social.svg"> --> */}

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://resources.tetrate.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tetrate Library" />
        <meta
            property="og:description"
            content="Best place to find more about Istio, Envoy and Tetrate Service Bridge"
        />
        <meta
            property="og:image"
            content={Social}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tetrate Library" />
        <meta
            name="twitter:description"
            content="Best place to find more about Istio, Envoy and Tetrate Service Bridge"
        />
        <meta
            property="og:image"
            content={Social}
        />

        {/* <!-- Meta Tags Generated via http://heymeta.com --> */}

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
        
        <title>Tetrate Library</title>
      </Helmet>
      <Header />
      <MainHeader />
    </div>
  );
}

export default App;
