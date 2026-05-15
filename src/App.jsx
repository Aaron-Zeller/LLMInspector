import { useEffect, useMemo } from 'react';
import { PAGE_SEQUENCE } from './data/assessmentContent.js';
import { AppFrame } from './components/layout/AppFrame.jsx';
import { PageRenderer } from './components/layout/PageRenderer.jsx';
import { TopNavigation } from './components/layout/TopNavigation.jsx';
import { SegmentToggle } from './components/dev/SegmentToggle.jsx';
import { useAssessmentStore } from './store/useAssessmentStore.js';
import { getPageIdFromHash } from './lib/pageRoutes.js';

const defaultPageId = PAGE_SEQUENCE[0].id;

export default function App() {
  const currentPageId = useAssessmentStore((state) => state.currentPageId);
  const goToPage = useAssessmentStore((state) => state.goToPage);

  const activePage = useMemo(
    () => PAGE_SEQUENCE.find((page) => page.id === currentPageId) ?? PAGE_SEQUENCE[0],
    [currentPageId],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    function handleHashChange() {
      const pageId = getPageIdFromHash(window.location.hash);
      goToPage(pageId ?? defaultPageId, { skipHashUpdate: true });
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [goToPage]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }, [currentPageId]);

  return (
    <AppFrame>
      <TopNavigation />
      <PageRenderer page={activePage} />
      <SegmentToggle />
    </AppFrame>
  );
}
