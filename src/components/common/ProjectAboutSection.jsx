import { Segment } from '../dev/Segment.jsx';

function SourceList({ sources, showIndex = true }) {
  if (!sources?.length) return null;
  return (
    <ul className="project-about-sources">
      {sources.map((source, index) => (
        <li key={`${source.label}-${source.href}`}>
          {showIndex ? <span className="project-about-sources__index">{index + 1}</span> : null}
          <a href={source.href} rel="noreferrer" target="_blank">
            {source.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ProjectAboutSection({ segment, segmentId }) {
  return (
    <Segment className="project-about-section" segmentId={segmentId}>
      <header
        className={`project-about-section__header${
          segment.headerFullWidth ? ' project-about-section__header--full' : ''
        }`}
      >
        <div className="project-about-section__chapter">
          <div className="project-about-section__rule" />
          <p className="project-about-section__eyebrow">{segment.chapter}</p>
        </div>
        <div className="project-about-section__head">
          <h2 className="project-about-section__title">{segment.title}</h2>
          {segment.description ? (
            <p className="project-about-section__description">{segment.description}</p>
          ) : null}
        </div>
      </header>

      {segment.stats?.length ? (
        <div className="project-about-stats">
          {segment.stats.map((stat) => (
            <article className="project-about-stats__item" key={stat.label}>
              <p className="project-about-stats__value">{stat.value}</p>
              <h3 className="project-about-stats__label">{stat.label}</h3>
              <p className="project-about-stats__body">{stat.body}</p>
              <SourceList sources={stat.sources} showIndex={stat.showSourceIndex !== false} />
            </article>
          ))}
        </div>
      ) : null}

      {segment.rows?.length ? (
        <div className="project-about-rows">
          {segment.rows.map((row) => (
            <section className="project-about-row" key={row.title}>
              <div className="project-about-row__label">{row.label}</div>
              <div className="project-about-row__content">
                <h3 className="project-about-row__title">{row.title}</h3>
                {row.body ? <p className="project-about-row__body">{row.body}</p> : null}
                {row.bullets?.length ? (
                  <ul className="project-about-row__list">
                    {row.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                <SourceList sources={row.sources} showIndex={row.showSourceIndex !== false} />
              </div>
            </section>
          ))}
        </div>
      ) : null}

      {segment.media ? (
        <div className="project-about-media">
          <div className="project-about-media__copy">
            <p className="project-about-media__eyebrow">{segment.media.eyebrow}</p>
            <h3 className="project-about-media__title">{segment.media.title}</h3>
            <p className="project-about-media__body">{segment.media.body}</p>
            {segment.media.status ? (
              <div className="project-about-resource__status project-about-media__status">
                {segment.media.status}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {segment.team?.length ? (
        <div className="project-about-team">
          {segment.team.map((member) => (
            <article className="project-about-team__member" key={member.name}>
              {member.image ? (
                <div
                  className={`project-about-team__photo project-about-team__photo--image${
                    member.photoClassName ? ` ${member.photoClassName}` : ''
                  }`}
                >
                  <img alt={member.name} src={member.image} />
                </div>
              ) : (
                <div className="project-about-team__photo" aria-hidden="true">
                  {member.initials}
                </div>
              )}
              <h3 className="project-about-team__name">{member.name}</h3>
              <p className="project-about-team__role">{member.role}</p>
            </article>
          ))}
        </div>
      ) : null}

      {segment.resources?.length ? (
        <div className="project-about-resource-list">
          {segment.resources.map((resource) => (
            <article className="project-about-resource" key={resource.title}>
              <div className="project-about-resource__main">
                <h3 className="project-about-resource__title">{resource.title}</h3>
                <p className="project-about-resource__body">{resource.body}</p>
              </div>
              {resource.status ? (
                <div className="project-about-resource__status">{resource.status}</div>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </Segment>
  );
}
