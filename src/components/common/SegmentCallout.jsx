import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function SegmentCallout({ segment, segmentId }) {
  return (
    <Segment
      className={cx(
        'callout',
        segment.variant === 'warn' ? 'warn' : segment.variant === 'platform' ? 'platform' : 'info',
      )}
      segmentId={segmentId}
    >
      <div className="callout-icon">{segment.icon}</div>
      <div>
        <strong>{segment.title}</strong>
        <span>{segment.body}</span>
        {segment.points?.length ? (
          <ul className="callout-list">
            {segment.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Segment>
  );
}
