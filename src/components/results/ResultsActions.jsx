import { Segment } from '../dev/Segment.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function ResultsActions({ segmentId }) {
  const resetAssessment = useAssessmentStore((state) => state.resetAssessment);

  return (
    <Segment as="footer" className="action-row" segmentId={segmentId}>
      <button className="btn-primary" onClick={() => window.print()} type="button">
        Download PDF Report
      </button>
      <button className="btn-secondary" onClick={resetAssessment} type="button">
        Retake Assessment
      </button>
    </Segment>
  );
}
