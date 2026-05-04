import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

const LENS_META = {
  input: { icon: '🛡️', label: 'Input Governance' },
  output: { icon: '⚠️', label: 'Output Assurance' },
  platform: { icon: '🧭', label: 'Platform Choice' },
};

export function PageHeader({ segment, segmentId }) {
  const lens = segment.tone ? LENS_META[segment.tone] : null;

  return (
    <Segment
      className={cx('page-header', segment.tone && `page-header--${segment.tone}`)}
      segmentId={segmentId}
    >
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
        {lens ? (
          <span className="section-eyebrow__lens" aria-label={lens.label} title={lens.label}>
            <span className="section-eyebrow__lens-label">{lens.label}</span>
            <span className="section-eyebrow__icon" aria-hidden="true">
              {lens.icon}
            </span>
          </span>
        ) : null}
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
