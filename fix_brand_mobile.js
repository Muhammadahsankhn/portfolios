const fs = require('fs');
const cssToAppend = `
/* Fix mobile size for brand area / Trusted By section */
@media (max-width: 767px) {
  .wpr-brand-area .section-inner .left-text {
    min-width: 100px !important;
    padding: 10px !important;
  }
  .wpr-brand-area .section-inner .left-text p {
    font-size: 11px !important;
  }
  .wpr-brand-area .section-inner .right-marquee-area .brand-wrapper {
    height: 100px !important;
    line-height: 100px !important;
    width: 120px !important;
  }
  .wpr-brand-area .section-inner .right-marquee-area .brand-wrapper img {
    max-width: 80% !important;
  }
}
@media (max-width: 575px) {
  .wpr-brand-area .section-inner .left-text {
    min-width: 80px !important;
    padding: 5px !important;
  }
  .wpr-brand-area .section-inner .left-text p {
    font-size: 10px !important;
  }
  .wpr-brand-area .section-inner .right-marquee-area .brand-wrapper {
    height: 80px !important;
    line-height: 80px !important;
    width: 100px !important;
  }
}
`;
fs.appendFileSync('public/assets/css/style.css', cssToAppend);
console.log('Appended CSS to fix mobile brand area');
