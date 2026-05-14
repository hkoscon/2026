import Link from 'next/link';
import CfpHeader from './CfpHeader';
import { name } from '../data';
import { enableCfpResult, enableTimetable } from '../features';
import './page.scss';

const cfpLink = process.env.NEXT_PUBLIC_CFP_LINK || 'https://forms.gle/XPhQQvkfRf87mcrG8';

function CfpContent() {
  return (
    <>
      <section className="section">
        <h3 className="title">Session Duration</h3>
        <ul>
          <li>Short: 10 minutes</li>
          <li>Regular: 30 minutes</li>
        </ul>
      </section>
      <section className="section">
        <h3 className="title">Important Date</h3>
        <ul>
          <li>
            CFP Submission Deadline:
            <time dateTime="2026-03-22T23:59:59-11:00">22nd March 2026 (Sun) AoE</time>
          </li>
          <li>
            Vetting Result Notification:
            <time dateTime="2026-04-13">13th April 2026 (Mon)</time>
          </li>
          <li>
            Conference Date:
            <time dateTime="2026-06-06">6 June 2026 (Sat)</time>
          </li>
        </ul>
      </section>
      <section className="section">
        <a className="button cfpPage__button" target="_blank" rel="noreferrer noopener" href={cfpLink}>Submit Now</a>
      </section>
    </>
  );
}

export default function CfpPage() {
  return (
    <>
      <CfpHeader title={name} />
      <main className="container">
        {!enableCfpResult && (<CfpContent />)}
        {enableCfpResult && (
          <section className="section">
            <p>CFP has ended</p>
            <Link
              className="button cfpPage__button"
              href={enableTimetable ? '/timetable' : '/cfp/result'}
            >
              {enableTimetable ? 'Timetable' : 'CFP Result'}
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
