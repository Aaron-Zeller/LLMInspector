import { SEGMENTS } from '../../data/assessmentContent.js';
import { OverviewIntro } from '../assessment/OverviewIntro.jsx';
import { CompetencyGrid } from '../assessment/CompetencyGrid.jsx';
import { ModuleIntro } from '../assessment/ModuleIntro.jsx';
import { AssessmentSections } from '../assessment/AssessmentSections.jsx';
import { QuestionCard } from '../assessment/QuestionCard.jsx';
import { ScenarioCard } from '../assessment/ScenarioCard.jsx';
import { SegmentCallout } from '../common/SegmentCallout.jsx';
import { NavigationFooter } from '../common/NavigationFooter.jsx';
import { PageHeader } from '../common/PageHeader.jsx';
import { ContentCardSection } from '../common/ContentCardSection.jsx';
import { LikertFeedbackSection } from '../common/LikertFeedbackSection.jsx';
import { DomainBreakdown } from '../results/DomainBreakdown.jsx';
import { RecommendationList } from '../results/RecommendationList.jsx';
import { ResultsActions } from '../results/ResultsActions.jsx';
import { ResultsNote } from '../results/ResultsNote.jsx';
import { ResultsSummary } from '../results/ResultsSummary.jsx';

const segmentRenderers = {
  overviewIntro: OverviewIntro,
  domainGrid: CompetencyGrid,
  callout: SegmentCallout,
  pageHeader: PageHeader,
  moduleIntro: ModuleIntro,
  contentCards: ContentCardSection,
  likertFeedback: LikertFeedbackSection,
  navigationFooter: NavigationFooter,
  resultsSummary: ResultsSummary,
  resultsBreakdown: DomainBreakdown,
  resultsRecommendations: RecommendationList,
  resultsNote: ResultsNote,
  resultsActions: ResultsActions,
};

function SegmentRenderer({ segmentId }) {
  const segment = SEGMENTS[segmentId];

  if (!segment) {
    return null;
  }

  if (segment.type === 'questionList') {
    return segment.itemIds.map((itemId) => <QuestionCard key={itemId} itemId={itemId} />);
  }

  if (segment.type === 'scenarioList') {
    return segment.itemIds.map((itemId) => <ScenarioCard key={itemId} itemId={itemId} />);
  }

  if (segment.type === 'assessmentSections') {
    return <AssessmentSections key={segmentId} segment={segment} segmentId={segmentId} />;
  }

  const Component = segmentRenderers[segment.type];
  return Component ? <Component key={segmentId} segment={segment} segmentId={segmentId} /> : null;
}

export function PageRenderer({ page }) {
  const pageClassName =
    page.id === 'results'
      ? 'page-shell page-shell--results'
      : page.id === 'overview'
        ? 'page-shell page-shell--overview'
        : 'page-shell';

  return (
    <main className={pageClassName}>
      <div className={page.id === 'results' ? 'page-column page-column--results' : 'page-column'}>
        {page.segmentIds.map((segmentId) => (
          <SegmentRenderer key={segmentId} segmentId={segmentId} />
        ))}
      </div>
    </main>
  );
}
