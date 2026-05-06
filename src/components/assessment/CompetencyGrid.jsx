import { OVERVIEW_DOMAINS } from '../../data/assessmentContent.js';
import { Segment } from '../dev/Segment.jsx';

export function CompetencyGrid({ segment, segmentId }) {
  return (
    <Segment className="panel" segmentId={segmentId}>
      <h2 className="panel__title">{segment.title}</h2>
      <p className="panel__description">{segment.description}</p>
      <div className="domain-grid">
        {OVERVIEW_DOMAINS.map((domain) => (
          <article
            className={`domain-grid__card domain-grid__card--${domain.accent}`}
            key={domain.id}
          >
            <div className="domain-grid__icon">{domain.overviewIcon}</div>
            <h3 className="domain-grid__title">{domain.label}</h3>
            <p className="domain-grid__body">{domain.overviewDescription}</p>
          </article>
        ))}
      </div>
    </Segment>
  );
}
