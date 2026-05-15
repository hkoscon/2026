import PropTypes from 'prop-types';
import Image from 'next/image';
import { timetable } from '../../data';
import TopicDescription from './TopicDescription';
import speakerPlaceholder from '../../../assets/images/placeholder.png';

import './page.scss';

const topicsMap = new Map();
timetable.forEach(({ day, date, timeslots }) => {
  timeslots.forEach(({ startTime, endTime, events }) => {
    events
      .filter((event) => event.topic)
      .forEach((e) => {
        const key = e.internal.match(/([\w-]+)$/)[0];
        topicsMap.set(key, {
          day,
          date,
          startTime,
          endTime,
          ...e,
        });
      });
  });
});

export async function generateStaticParams() {
  return Array.from(topicsMap.keys())
    .map((key) => ({ topic: key }));
}

export async function generateMetadata({ params: { topic: topicId } }) {
  const topic = topicsMap.get(topicId);
  return {
    title: topic.display,
    openGraph: {
      title: `${topic.display} | Hong Kong Open Source Conference 2026`,
    },
  };
}

function SpeakerLinks({ website, github, x, mastodon, linkedin }) {
  const links = [
    {
      href: website,
      label: 'Website',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      href: github,
      label: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      href: x,
      label: 'X',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.738-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: mastodon,
      label: 'Mastodon',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.449.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.545-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.567-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.661.324 2.228.955.549.631.822 1.484.822 2.558v5.253z" />
        </svg>
      ),
    },
    {
      href: linkedin,
      label: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ].filter(({ href }) => href);

  if (links.length === 0) return null;

  return (
    <div className="topicPage__speakerLinks">
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

SpeakerLinks.propTypes = {
  website: PropTypes.string,
  github: PropTypes.string,
  x: PropTypes.string,
  mastodon: PropTypes.string,
  linkedin: PropTypes.string,
};

export default function Page({ params: { topic: topicId } }) {
  const topic = topicsMap.get(topicId);
  return (
    <>
      <section className="hero is-medium has-background-brand-color-blue">
        <div className="hero-body container px-0">
          <h1 className="title has-text-brand-color-yellow">{topic.display}</h1>
        </div>
      </section>
      <section className="container my-4 content topicPage__metadata">
        <p>
          Time:&nbsp;
          <time dateTime={`${topic.date}T${topic.startTime}:00+08:00`}>
            {` Day ${topic.day} (${topic.date}) ${topic.startTime} - ${topic.endTime}`}
          </time>
        </p>
        <p>{`Venue: ${topic.venue.name}`}</p>
        <p>{`Language: ${topic.language}`}</p>
        <p>{`Level: ${topic.level}`}</p>
        <p>{`Target Audience: ${topic.targetAudience}`}</p>
      </section>
      <section className="container my-4 topicPage__description">
        <TopicDescription description={topic.description} />
      </section>
      <section className="container my-4">
        {topic.speakers.map(({
          name,
          country,
          community,
          thumbnail,
          description,
          website,
          github,
          x,
          mastodon,
          linkedin,
        }) => (
          <div className="box my-2" key={name}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  {thumbnail ? (
                    <img src={thumbnail} alt={name} />
                  ) : (
                    <Image src={speakerPlaceholder} width="128" height="128" alt={name} />
                  )}
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{`${name} / ${country}`}</strong>
                  </p>
                  <p>{community}</p>
                  <SpeakerLinks
                    website={website}
                    github={github}
                    x={x}
                    mastodon={mastodon}
                    linkedin={linkedin}
                  />
                  <hr />
                  <TopicDescription description={description} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

Page.propTypes = {
  params: PropTypes.shape({
    topic: PropTypes.string.isRequired,
  }).isRequired,
};
