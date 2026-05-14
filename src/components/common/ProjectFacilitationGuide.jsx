import { Segment } from '../dev/Segment.jsx';

function List({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="project-facilitation-guide__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectFacilitationGuide({ segment, segmentId }) {
  return (
    <Segment className="project-facilitation-guide" segmentId={segmentId}>
      {segment.intro ? <p className="project-facilitation-guide__intro">{segment.intro}</p> : null}

      {segment.principles?.length ? (
        <section className="project-facilitation-guide__principles">
          {segment.principles.map((principle) => (
            <article className="project-facilitation-guide__principle" key={principle.title}>
              <h2>{principle.title}</h2>
              <p>{principle.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      {segment.phases?.length ? (
        <section className="project-facilitation-guide__section">
          <h2>Session Guidance</h2>
          <div className="project-facilitation-guide__phases">
            {segment.phases.map((phase) => (
              <article className="project-facilitation-guide__phase" key={phase.title}>
                <h3>{phase.title}</h3>
                <List items={phase.moves} />
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {segment.discussionPrompts?.length ? (
        <section className="project-facilitation-guide__section">
          <h2>Optional Debrief Prompts</h2>
          <List items={segment.discussionPrompts} />
        </section>
      ) : null}

      {segment.responses?.length ? (
        <section className="project-facilitation-guide__section">
          <h2>Likely Participant Assumptions</h2>
          <div className="project-facilitation-guide__responses">
            {segment.responses.map((item) => (
              <article className="project-facilitation-guide__response" key={item.response}>
                <h3>{item.response}</h3>
                <p>{item.facilitation}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {segment.contingencies?.length ? (
        <section className="project-facilitation-guide__section">
          <h2>Contingency Moves</h2>
          <div className="project-facilitation-guide__contingencies">
            {segment.contingencies.map((item) => (
              <article className="project-facilitation-guide__contingency" key={item.situation}>
                <h3>{item.situation}</h3>
                <p>{item.move}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </Segment>
  );
}
