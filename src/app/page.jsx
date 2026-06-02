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
                    href="https://hkoscon2026.eventbrite.com/"
                  >
                    Get Ticket
                  </a>
                  <br />
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    href="/2026/timetable"
                  >
                    Timetable
                  </a>
                  <br />
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    href="https://shop.hkoscon.org/product/hkoscon-2026-t-shirt/"
                  >
                    T-Shirt Pre-Order
                  </a>
                  <br />
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    href="/2026/patron"
                  >
                    Patron
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
                  If you are taking a taxi, the entrance is via <strong>Sai Shan Road 細山路 – Enter through Gate 3 (VTC Tsing Yi Complex)</strong>. Please note that campus parking is strictly reserved for staff vehicles only. If you are driving, kindly use nearby public parking facilities at <a href="https://maps.app.goo.gl/iHy8CNAaUuxG63xE6">Mayfair Gardens Carpark 美景花園停車場</a>. 
                </p>
                <p>
                  Hong Kong Institute of Information Technology (HKIIT) 香港資訊科技學院<br/>
                  Address: VTC Tsing Yi Complex, 20A Tsing Yi Road, Tsing Yi Island, New Territories<br/><br/>
                  VTC Tsing Yi Complex is as known as HK IVE Tsing Yi (Hong Kong Institute of Vocational Education (Tsing Yi) on some maps. HKIIT is a part of VTC / IVE Tsing Yi campus. In Chinese,
                  香港資訊科技學院 (新界青衣島青衣路20A號職業訓練局青衣大樓)
                </p>
                <a href="/2026/images/location_map.png" target="_tab"><img src="/2026/images/location_map.png" alt="Location Map" style={{ width: '100%', marginBottom: '1rem' }} /></a>
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
