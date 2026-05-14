import { Segment } from '../dev/Segment.jsx';

function ItemList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="project-setup__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectSetupInstructions({ segment, segmentId }) {
  return (
    <Segment className="project-setup" segmentId={segmentId}>
      {segment.intro ? <p className="project-setup__intro">{segment.intro}</p> : null}

      {segment.readme ? (
        <section className="project-setup__readme">
          <div>
            <h2>{segment.readme.title}</h2>
            <p>{segment.readme.body}</p>
          </div>
          <a href={segment.readme.href} rel="noreferrer" target="_blank">
            {segment.readme.label}
          </a>
        </section>
      ) : null}

      {segment.requirements?.length ? (
        <section className="project-setup__section">
          <h2>Requirements</h2>
          <div className="project-setup__requirements">
            {segment.requirements.map((requirement) => (
              <article className="project-setup__requirement" key={requirement.title}>
                <h3>{requirement.title}</h3>
                <ItemList items={requirement.items} />
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {segment.steps?.length ? (
        <section className="project-setup__section">
          <h2>Setup Flow</h2>
          <div className="project-setup__steps">
            {segment.steps.map((step, index) => (
              <article className="project-setup__step" key={step.title}>
                <div className="project-setup__step-number">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {segment.notes?.length ? (
        <section className="project-setup__section">
          <h2>Operational Notes</h2>
          <div className="project-setup__notes">
            {segment.notes.map((note) => (
              <article className="project-setup__note" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </Segment>
  );
}
