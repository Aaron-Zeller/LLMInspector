import { Segment } from '../dev/Segment.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function DomainBreakdown({ segmentId }) {
  const results = useAssessmentStore((state) => state.resultsSnapshot);

  if (!results) {
    return null;
  }

  return (
    <Segment className="results-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">Domain Breakdown</div>
      </div>
      <h2 className="section-title">Performance by Competency</h2>
      <div className="domain-grid domain-grid--results">
        {results.domainBreakdown.map((domain) => (
          <article className="domain-card" key={domain.id}>
            <div className="domain-label">{domain.label}</div>
            <div className={`domain-score ${domain.status === 'strong' ? 'high' : domain.status === 'steady' ? 'mid' : 'low'}`}>
              {domain.score}
            </div>
            <div className="domain-max">out of {domain.maxScore} pts</div>
            <div className="domain-bar" aria-hidden="true">
              <div
                className={`domain-bar-fill ${domain.status === 'strong' ? 'fill-high' : domain.status === 'steady' ? 'fill-mid' : 'fill-low'}`}
                style={{ width: `${Math.round(domain.ratio * 100)}%` }}
              />
            </div>
            <p className="domain-desc">{domain.summary}</p>
          </article>
        ))}
      </div>
    </Segment>
  );
}
