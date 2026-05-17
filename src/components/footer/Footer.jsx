import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="has-text-right is-size-3 app-footer__hashtag">
        #HKOSCon2026
      </div>
      <div className="app-footer__social">
        <a href="https://t.me/opensourcehkdiscuss" aria-label="Telegram" className="app-footer__social-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.247l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.312z"/>
          </svg>
        </a>
        <a href="mailto:conference@opensource.hk" aria-label="Email" className="app-footer__social-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
      <div className="content has-text-centered">
        <span>
          This work is licensed under&nbsp;
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA 4.0
            <img
              className="app-footer__cc-logo"
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
              alt="Creative Commons Logo"
            />
            <img
              className="app-footer__cc-logo"
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
              alt="Creative Commons BY Logo"
            />
            <img
              className="app-footer__cc-logo"
              src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
              alt="Creative Commons SA Logo"
            />
          </a>
        </span>
        .&nbsp;
        <span>Logos and trademarks belong to their respective owners.</span>
      </div>
      <div className="organisingCommittee">
        <span>This event is organised and brought to you by the following organisations.</span>
        <div className="organisingCommitteeCarousel">
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://hkcota.org/wp-content/uploads/2024/06/HKCOTAofficiallogo_indiegogo-squared.png"
              alt="Hong Kong Creative Open Technology Association"
            />
          </div>
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://hkcota.org/wp-content/uploads/2015/04/OS_logoV-icon.png"
              alt="Open Source Hong Kong"
            />
          </div>
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://hkcota.org/wp-content/uploads/2015/04/hklug.png"
              alt="Hong Kong Linux User Group"
            />
          </div>
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://opensource.hk/wp-content/uploads/2026/03/HKIIT_endorsement_logo_RGB_horizontal.jpg"
              alt="Hong Kong Institute of Information Technology"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
