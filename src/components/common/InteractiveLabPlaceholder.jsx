import { Segment } from '../dev/Segment.jsx';

export function InteractiveLabPlaceholder({ segment, segmentId }) {
  return (
    <Segment className="content-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>
      {segment.frame ? (
        <div className="lab-brief">
          <div className="lab-brief__grid">
            <article className="lab-brief__item">
              <p className="lab-brief__label">Your Role</p>
              <p className="lab-brief__body">{segment.frame.role}</p>
            </article>
            <article className="lab-brief__item">
              <p className="lab-brief__label">What To Watch</p>
              <p className="lab-brief__body">{segment.frame.watch}</p>
            </article>
            {segment.frame.emphasis ? (
              <article className="lab-brief__item lab-brief__item--full">
                <p className="lab-brief__label">Why This Lab Matters</p>
                <p className="lab-brief__body">{segment.frame.emphasis}</p>
              </article>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="lab-placeholder">
        <div className="lab-placeholder__box">
          <p className="lab-placeholder__eyebrow">{segment.placeholderEyebrow}</p>
          <h3 className="lab-placeholder__title">{segment.placeholderTitle}</h3>
          <p className="lab-placeholder__body">{segment.placeholderBody}</p>
          {segment.placeholderBullets?.length ? (
            <ul className="lab-placeholder__list">
              {segment.placeholderBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Segment>
  );
}
