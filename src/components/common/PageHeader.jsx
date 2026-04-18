import { Segment } from '../dev/Segment.jsx';

export function PageHeader({ segment, segmentId }) {
  return (
    <Segment className="page-header" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h1 className="section-title">{segment.title}</h1>
      <p className="section-desc">{segment.description}</p>
    </Segment>
  );
}
