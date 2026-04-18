import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function SegmentCallout({ segment, segmentId }) {
  return (
    <Segment
      className={cx('callout', segment.variant === 'warn' ? 'warn' : 'info')}
      segmentId={segmentId}
    >
      <div className="callout-icon">{segment.icon}</div>
      <div>
        <strong>{segment.title}</strong>
        <span>{segment.body}</span>
      </div>
    </Segment>
  );
}
