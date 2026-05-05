import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function ContentCardSection({ segment, segmentId }) {
  return (
    <Segment
      className={cx('content-section', segment.tone && `content-section--${segment.tone}`)}
      segmentId={segmentId}
    >
      {segment.eyebrow ? (
        <div className="section-eyebrow">
          <div className="eyebrow-line" />
          <div className="eyebrow-text">{segment.eyebrow}</div>
        </div>
      ) : null}
      <h2 className="section-title">{segment.title}</h2>
      {segment.description ? <p className="section-desc">{segment.description}</p> : null}
      <div className={`content-card-grid${segment.columns ? ` content-card-grid--${segment.columns}` : ''}`}>
        {segment.cards.map((card) => (
          <article
            className={`content-card${card.tone ? ` content-card--${card.tone}` : ''}${card.fullWidth ? ' content-card--full' : ''}`}
            key={`${segmentId}-${card.title}`}
          >
            {card.eyebrow ? <div className="content-card__eyebrow">{card.eyebrow}</div> : null}
            <h3 className="content-card__title">{card.title}</h3>
            {card.body ? <p className="content-card__body">{card.body}</p> : null}
            {card.bullets?.length ? (
              <ul className="content-card__list">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {card.people?.length ? (
              <div className="content-card__people">
                {card.people.map((person) => (
                  <div className="content-card__person" key={`${segmentId}-${card.title}-${person.name}`}>
                    <div className="content-card__person-photo" aria-hidden="true">
                      <span>{person.initials}</span>
                    </div>
                    <div className="content-card__person-name">{person.name}</div>
                    {person.role ? <div className="content-card__person-role">{person.role}</div> : null}
                  </div>
                ))}
              </div>
            ) : null}
            {card.sources?.length ? (
              <div className="content-card__sources">
                <div className="content-card__sources-label">Sources</div>
                <ul className="content-card__sources-list">
                  {card.sources.map((source) => (
                    <li key={`${segmentId}-${card.title}-${source.label}`}>
                      <a href={source.href} rel="noreferrer" target="_blank">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Segment>
  );
}
