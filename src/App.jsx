import { useMemo } from 'react';
import { PAGE_SEQUENCE } from './data/assessmentContent.js';
import { AppFrame } from './components/layout/AppFrame.jsx';
import { PageRenderer } from './components/layout/PageRenderer.jsx';
import { TopNavigation } from './components/layout/TopNavigation.jsx';
import { SegmentToggle } from './components/dev/SegmentToggle.jsx';
import { useAssessmentStore } from './store/useAssessmentStore.js';

export default function App() {
  const currentPageId = useAssessmentStore((state) => state.currentPageId);

  const activePage = useMemo(
    () => PAGE_SEQUENCE.find((page) => page.id === currentPageId) ?? PAGE_SEQUENCE[0],
    [currentPageId],
  );

  return (
    <AppFrame>
      <TopNavigation />
      <PageRenderer page={activePage} />
      <SegmentToggle />
    </AppFrame>
  );
}
