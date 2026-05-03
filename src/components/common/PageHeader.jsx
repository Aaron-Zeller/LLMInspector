import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function PageHeader({ segment, segmentId }) {
  return (
    <Segment
      className={cx('page-header', segment.tone && `page-header--${segment.tone}`)}
      segmentId={segmentId}
    >
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h1 className="section-title">{segment.title}</h1>
      <p className="section-desc">{segment.description}</p>
      {segment.frame ? (
        <div className="page-header__frame">
          <p className="page-header__frame-label">{segment.frame.label}</p>
          <p className="page-header__frame-body">{segment.frame.body}</p>
        </div>
      ) : null}
    </Segment>
  );
}
