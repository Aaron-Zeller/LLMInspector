import { showDeveloperTools, useDevStore } from '../../store/useDevStore.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function SegmentToggle() {
  const showSegmentIds = useDevStore((state) => state.showSegmentIds);
  const toggleSegmentIds = useDevStore((state) => state.toggleSegmentIds);
  const simulateCompletedFlow = useDevStore((state) => state.simulateCompletedFlow);
  const toggleSimulateCompletedFlow = useDevStore((state) => state.toggleSimulateCompletedFlow);
  const devGoToThankYou = useAssessmentStore((state) => state.devGoToThankYou);

  if (!showDeveloperTools) {
    return null;
  }

  return (
    <aside className="dev-panel">
      <p className="dev-panel__title">Developer overlay</p>
      <button className="dev-panel__button" onClick={toggleSegmentIds} type="button">
        {showSegmentIds ? 'Hide segment IDs' : 'Show segment IDs'}
      </button>
      <button className="dev-panel__button" onClick={toggleSimulateCompletedFlow} type="button">
        {simulateCompletedFlow ? 'Disable solved-state preview' : 'Preview as fully solved'}
      </button>
      <button className="dev-panel__button" onClick={devGoToThankYou} type="button">
        Jump to Thank You
      </button>
      <p className="dev-panel__hint">
        Default comes from <code>VITE_SHOW_SEGMENT_IDS</code>. The current setting is stored locally.
      </p>
    </aside>
  );
}
