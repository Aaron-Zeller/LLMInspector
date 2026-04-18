import { Segment } from '../dev/Segment.jsx';

export function ContentCardSection({ segment, segmentId }) {
  return (
    <Segment className="content-section" segmentId={segmentId}>
      {segment.eyebrow ? (
        <div className="section-eyebrow">
          <div className="eyebrow-line" />
          <div className="eyebrow-text">{segment.eyebrow}</div>
        </div>
      ) : null}
      <h2 className="section-title">{segment.title}</h2>
      {segment.description ? <p className="section-desc">{segment.description}</p> : null}
      <div className="content-card-grid">
        {segment.cards.map((card) => (
          <article
            className={`content-card${card.tone ? ` content-card--${card.tone}` : ''}`}
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
          </article>
        ))}
      </div>
    </Segment>
  );
}
