import { showDeveloperTools, useDevStore } from '../../store/useDevStore.js';

export function SegmentToggle() {
  const showSegmentIds = useDevStore((state) => state.showSegmentIds);
  const toggleSegmentIds = useDevStore((state) => state.toggleSegmentIds);

  if (!showDeveloperTools) {
    return null;
  }

  return (
    <aside className="dev-panel">
      <p className="dev-panel__title">Developer overlay</p>
      <button className="dev-panel__button" onClick={toggleSegmentIds} type="button">
        {showSegmentIds ? 'Hide segment IDs' : 'Show segment IDs'}
      </button>
      <p className="dev-panel__hint">
        Default comes from <code>VITE_SHOW_SEGMENT_IDS</code>. The current setting is stored locally.
      </p>
    </aside>
  );
}
