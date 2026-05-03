import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function TransferCallout({ segment, segmentId }) {
  return (
    <Segment
      className={cx('transfer-callout', segment.tone && `transfer-callout--${segment.tone}`)}
      segmentId={segmentId}
    >
      <div className="transfer-callout__intro">
        <p className="transfer-callout__eyebrow">{segment.eyebrow}</p>
        <h2 className="transfer-callout__title">{segment.title}</h2>
        <p className="transfer-callout__desc">{segment.description}</p>
      </div>

      <div className="transfer-callout__checks">
        {segment.checks.map((check, index) => (
          <article className="transfer-callout__check" key={check.title}>
            <div className="transfer-callout__index">0{index + 1}</div>
            <div>
              <h3 className="transfer-callout__check-title">{check.title}</h3>
              <p className="transfer-callout__check-body">{check.body}</p>
            </div>
          </article>
        ))}
      </div>

      {segment.prompt ? (
        <div className="transfer-callout__carry">
          <p className="transfer-callout__carry-label">Carry Into The Lab</p>
          <p className="transfer-callout__prompt">{segment.prompt}</p>
        </div>
      ) : null}
    </Segment>
  );
}
