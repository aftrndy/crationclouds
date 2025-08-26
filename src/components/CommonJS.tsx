import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    initCustomJS?: () => void;
  }
}

const CommonJS = () => {
  return (
    <>
      {/* Scroll To Top */}
      <div className="scrollToTop">
        <span className="arrow"><i className="ri-arrow-up-s-fill fs-20"></i></span>
      </div>
      <div id="responsive-overlay"></div>
      {/* Popper JS */}
      <Script src="/assets/libs/@popperjs/core/umd/popper.min.js" strategy="afterInteractive" />
      {/* Bootstrap JS */}
      <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      {/* Defaultmenu JS */}
      <Script src="/assets/js/defaultmenu.min.js" strategy="afterInteractive" />
      {/* Node Waves JS*/}
      <Script src="/assets/libs/node-waves/waves.min.js" strategy="afterInteractive" />
      {/* Sticky JS */}
      <Script src="/assets/js/sticky.js" strategy="afterInteractive" />
      {/* Simplebar JS */}
      <Script src="/assets/libs/simplebar/simplebar.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/simplebar.js" strategy="afterInteractive" />
      {/* Color Picker JS */}
      <Script src="/assets/libs/@simonwep/pickr/pickr.es5.min.js" strategy="afterInteractive" />
      {/* Custom JS */}
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
    </>
  );
};

export default CommonJS;
