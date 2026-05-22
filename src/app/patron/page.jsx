import patrons from '../patrons.json';

export const metadata = {
  title: 'Patron',
  openGraph: {
    title: 'Patron | Hong Kong Open Source Conference 2026',
  },
};

export default function PatronPage() {
  return (
    <>
      <header className="hero is-medium">
        <div className="hero-body">
          <h1 className="title">Patron</h1>
          <p className="subtitle">
            Support HKOSCon and help grow open source in Hong Kong.
          </p>
        </div>
      </header>
      <main className="container">
        <section className="section">
          <h2 className="title is-4">Why Become a Patron?</h2>
          <div className="content">
            <p>
              Hong Kong Open Source Conference (HKOSCon) is a non-profit, community-driven event
              dedicated to promoting open source culture and technology in Hong Kong and across Asia.
              As a Patron, your personal contribution directly helps us:
            </p>
            <ul>
              <li>Keep the conference free or low-cost for all attendees</li>
              <li>Bring world-class speakers and workshops to Hong Kong</li>
              <li>Support the local open source community and ecosystem</li>
              <li>Ensure HKOSCon continues to grow year after year</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="title is-4">How to Become a Patron</h2>
          <div className="content">
            <p>
              Becoming a Patron is simple. Fill in the patron application form and make your
              contribution to support HKOSCon 2026. We welcome one-time 
              contributions from individuals who believe in the power of open source.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfrulYGiuKB7aGrBhqnIk22UN7DKeJfPD7-q3qFfAcUgk2YIg/viewform"
              className="button has-background-brand-color-yellow has-text-brand-color-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Patron
            </a>
          </div>
        </section>

        <section className="section">
          <h2 className="title is-4">Our Patrons</h2>
          {patrons.length === 0 ? (
            <p className="has-text-grey">To be announced</p>
          ) : (
            <>
              <p className="mb-4">
                We sincerely thank the following patrons for their generous support of HKOSCon 2026.
              </p>
              <div className="columns is-multiline">
                {patrons.map(({ name }) => (
                  <div className="column is-narrow" key={name}>
                    <div className="box">
                      <p className="has-text-weight-semibold">{name}</p>
                    </div>
                  </div>
                ))}
            </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
