import { Fragment } from 'react';
import { SEGMENTS } from '../../data/assessmentContent.js';
import { OverviewIntro } from '../assessment/OverviewIntro.jsx';
import { CompetencyGrid } from '../assessment/CompetencyGrid.jsx';
import { ModuleIntro } from '../assessment/ModuleIntro.jsx';
import { AssessmentSections } from '../assessment/AssessmentSections.jsx';
import { QuestionCard } from '../assessment/QuestionCard.jsx';
import { ScenarioCard } from '../assessment/ScenarioCard.jsx';
import { SpotHallucination } from '../assessment/SpotHallucination.jsx';
import { SourceVerification } from '../assessment/SourceVerification.jsx';
import { ApproveOrEscalate } from '../assessment/ApproveOrEscalate.jsx';
import { SystemTuning } from '../assessment/SystemTuning.jsx';
import { GovernanceLab } from '../assessment/GovernanceLab.jsx';
import { RichModuleIntro } from '../assessment/RichModuleIntro.jsx';
import { PromptInjectionDemo } from '../assessment/PromptInjectionDemo.jsx';
import { SensitiveDisclosureWalkthrough } from '../assessment/SensitiveDisclosureWalkthrough.jsx';
import { SafeTransformationStudio } from '../assessment/SafeTransformationStudio.jsx';
import { MisinformationWalkthrough } from '../assessment/MisinformationWalkthrough.jsx';
import { VerificationWorkflowStudio } from '../assessment/VerificationWorkflowStudio.jsx';
import { PromptInjectionWalkthrough } from '../assessment/PromptInjectionWalkthrough.jsx';
import { PromptBoundaryStudio } from '../assessment/PromptBoundaryStudio.jsx';
import { OutputHandlingWalkthrough } from '../assessment/OutputHandlingWalkthrough.jsx';
import { OutputControlStudio } from '../assessment/OutputControlStudio.jsx';
import { AgencyWalkthrough } from '../assessment/AgencyWalkthrough.jsx';
import { AgencyControlStudio } from '../assessment/AgencyControlStudio.jsx';
import { AgencyPermissionLab } from '../assessment/AgencyPermissionLab.jsx';
import { PlatformChoiceWalkthrough } from '../assessment/PlatformChoiceWalkthrough.jsx';
import { PlatformGovernanceStudio } from '../assessment/PlatformGovernanceStudio.jsx';
import { SegmentCallout } from '../common/SegmentCallout.jsx';
import { NavigationFooter } from '../common/NavigationFooter.jsx';
import { PageHeader } from '../common/PageHeader.jsx';
import { SectionProgress } from '../common/SectionProgress.jsx';
import { ContentCardSection } from '../common/ContentCardSection.jsx';
import { LockedLabNotice } from '../common/LockedLabNotice.jsx';
import { LikertFeedbackSection } from '../common/LikertFeedbackSection.jsx';
import { TransferCallout } from '../common/TransferCallout.jsx';
import { InteractiveLabPlaceholder } from '../common/InteractiveLabPlaceholder.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { useDevStore } from '../../store/useDevStore.js';
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
  transferCallout: TransferCallout,
  interactiveLabPlaceholder: InteractiveLabPlaceholder,
  likertFeedback: LikertFeedbackSection,
  navigationFooter: NavigationFooter,
  spotHallucination: SpotHallucination,
  sourceVerification: SourceVerification,
  approveOrEscalate: ApproveOrEscalate,
  systemTuning: SystemTuning,
  governanceLab: GovernanceLab,
  richModuleIntro: RichModuleIntro,
  promptInjectionDemo: PromptInjectionDemo,
  sensitiveDisclosureWalkthrough: SensitiveDisclosureWalkthrough,
  safeTransformationStudio: SafeTransformationStudio,
  misinformationWalkthrough: MisinformationWalkthrough,
  verificationWorkflowStudio: VerificationWorkflowStudio,
  promptInjectionWalkthrough: PromptInjectionWalkthrough,
  promptBoundaryStudio: PromptBoundaryStudio,
  outputHandlingWalkthrough: OutputHandlingWalkthrough,
  outputControlStudio: OutputControlStudio,
  agencyWalkthrough: AgencyWalkthrough,
  agencyControlStudio: AgencyControlStudio,
  agencyPermissionLab: AgencyPermissionLab,
  platformChoiceWalkthrough: PlatformChoiceWalkthrough,
  platformGovernanceStudio: PlatformGovernanceStudio,
  resultsSummary: ResultsSummary,
  resultsBreakdown: DomainBreakdown,
  resultsRecommendations: RecommendationList,
  resultsNote: ResultsNote,
  resultsActions: ResultsActions,
};

function SegmentRenderer({ segmentId }) {
  const segment = SEGMENTS[segmentId];
  const decisionCheckStatus = useAssessmentStore((state) => state.decisionCheckStatus);
  const simulateCompletedFlow = useDevStore((state) => state.simulateCompletedFlow);

  if (!segment) {
    return null;
  }

  if (segment.unlockRequirements?.length && !simulateCompletedFlow) {
    const statuses = segment.unlockRequirements.map((requirementId) => decisionCheckStatus[requirementId]);
    const missingCount = statuses.filter((status) => !status).length;
    const incorrectCount = statuses.filter((status) => status && !status.correct).length;
    const unlocked = statuses.length > 0 && statuses.every((status) => status?.correct);

    if (!unlocked) {
      return (
        <LockedLabNotice
          segment={segment}
          segmentId={segmentId}
          requirementCount={segment.unlockRequirements.length}
          missingCount={missingCount}
          incorrectCount={incorrectCount}
        />
      );
    }
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
        : page.id === 'thank-you'
          ? 'page-shell page-shell--thank-you'
        : 'page-shell';

  return (
    <main className={pageClassName}>
      <div className={page.id === 'results' ? 'page-column page-column--results' : 'page-column'}>
        {page.segmentIds.map((segmentId, index) => (
          <Fragment key={segmentId}>
            <SegmentRenderer segmentId={segmentId} />
            {index === 0 ? <SectionProgress pageId={page.id} /> : null}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
