import { Segment } from '../dev/Segment.jsx';

export function ResultsNote({ segment, segmentId }) {
  return (
    <Segment className="results-note" segmentId={segmentId}>
      <div style={{ fontSize: 20, flexShrink: 0 }}>📋</div>
      <div>
        <strong>{segment.title}</strong>
        <p>{segment.body}</p>
      </div>
    </Segment>
  );
}
