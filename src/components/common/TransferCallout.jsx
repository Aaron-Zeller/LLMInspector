import { Segment } from '../dev/Segment.jsx';

export function TransferCallout({ segment, segmentId }) {
  return (
    <Segment className="transfer-callout" segmentId={segmentId}>
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

      {segment.prompt ? <p className="transfer-callout__prompt">{segment.prompt}</p> : null}
    </Segment>
  );
}
