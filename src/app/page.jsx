import Image from 'next/image';
import logo from '../assets/images/kv-logo-600.webp';
//import transportationMap from '../assets/images/hku-mingwah-location.webp';
import './page.scss';

export default function Home() {
  return (
    <main className="homePage">
      <section className="homePage__keyvisual">
        <div className="homePage__keyvisual__foreground">
          <div className="homePage__cover">
            <div className="container homePage__main">
              <div className="homePage__key-content is-align-self-center">
                <div className="homePage__date">6 June, 2026</div>
                <div className="homePage__venue">
                  Hong Kong Institute of Information Technology,
                  <br />
                  VTC Tsing Yi Complex.
                </div>
                <div className="homePage__venue">
                  <br />
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfUivewPmB86xrKbjxFj473FRNCXi-ZRP9-XKI2Lnl3Yt1TUg/viewform?usp=send_form"
                  >
                    Call For Volunteers
                  </a>
                  <br />
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:conference@opensource.hk"
                  >
                    Enquiry Email
                  </a>
                  <br />
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://t.me/opensourcehkdiscuss"
                  >
                    Telegram group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__transportation">
        <div className="homePage__mask">
          <div className="container columns">
            <div className="column is-align-self-center">
              <div className="homePage__transportation__box">
                <h2 className="title">Transportation</h2>
                <p>
                  Hong Kong Institute of Information Technology at VTC Tsing Yi Complex is easily accessible by public transportation.
                  KMB Bus 243M, 249M, 241X, 42, 42A, 43, 43A, 43M, 49M, and NT GMB mini bus 88C, 88D. (Source: <a href="https://hkiit.edu.hk/contact-us" target="_blank">HKIIT web site</a>)
                </p>
                <p>
                  Or you can reach by Taxi to HKIIT at VTC Tsing Yi Complex, 20A Tsing Yi Road, Tsing Yi Island, New Territories.
                </p>
                <p>
                  VTC Tsing Yi Complex is as known as HK IVE Tsing Yi (Hong Kong Institute of Vocational Education (Tsing Yi) on some maps. HKIIT is a part of VTC / IVE Tsing Yi campus. In Chinese,
                  香港資訊科技學院 (新界青衣島青衣路20A號職業訓練局青衣大樓)
                </p>
                <div className="homePage__transportation__box__actions">
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://maps.app.goo.gl/MJcuNjhrA2FHL2vQ8"
                  >
                    Google Map
                  </a>
                </div>
                <div className="homePage__transportation__box__actions">
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    target="_blank"
                    href="https://osm.org/go/41dYNGkZ9"
                  >
                    OSM Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
