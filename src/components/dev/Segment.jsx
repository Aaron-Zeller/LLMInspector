import { cx } from '../../lib/cx.js';
import { useDevStore } from '../../store/useDevStore.js';

export function Segment({
  as: Element = 'section',
  children,
  className,
  segmentId,
}) {
  const showSegmentIds = useDevStore((state) => state.showSegmentIds);

  return (
    <Element
      className={cx('segment', showSegmentIds && 'segment--debug', className)}
      data-segment-id={segmentId}
    >
      {showSegmentIds ? <span className="segment__badge">{segmentId}</span> : null}
      {children}
    </Element>
  );
}
