import { Segment } from '../dev/Segment.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function ResultsSummary({ segmentId }) {
  const results = useAssessmentStore((state) => state.resultsSnapshot);
  const submissionState = useAssessmentStore((state) => state.submissionState);
  const submissionError = useAssessmentStore((state) => state.submissionError);

  if (!results) {
    return null;
  }

  const circumference = 364.4;
  const dashOffset = circumference - (results.totalScore / 100) * circumference;
  const submissionLabel =
    submissionState === 'submitted'
      ? 'Stored in database'
      : submissionState === 'submitting'
        ? 'Saving results'
        : submissionState === 'error'
          ? submissionError
          : 'Not submitted';

  return (
    <Segment className="results-summary" segmentId={segmentId}>
      <div className="results-hero">
        <div className="results-eyebrow">Assessment Complete</div>
        <div className="results-name">Your AI Literacy Report</div>
        <div className="results-sub">
          COLORCODE · ETH Zurich AI Literacy Programme ·{' '}
          {new Date(results.generatedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <div className="score-ring-wrap">
          <div className="score-ring">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r="58"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="10"
              />
              <circle
                cx="70"
                cy="70"
                r="58"
                fill="none"
                stroke="#b8963e"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="score-ring-num">
              {results.totalScore}
              <span>/ 100</span>
            </div>
          </div>
          <div className="score-grade-badge">{results.grade}</div>
        </div>
        <div className="results-summary__meta">
          <span>{results.answeredCount} of {results.totalItems} answered</span>
          <span>•</span>
          <span>{submissionLabel}</span>
        </div>
      </div>
    </Segment>
  );
}
