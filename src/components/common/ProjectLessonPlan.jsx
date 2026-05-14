import { Segment } from '../dev/Segment.jsx';

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="project-lesson-plan__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectLessonPlan({ segment, segmentId }) {
  return (
    <Segment className="project-lesson-plan" segmentId={segmentId}>
      {segment.intro ? <p className="project-lesson-plan__intro">{segment.intro}</p> : null}

      {segment.setting ? (
        <section className="project-lesson-plan__section">
          <h2>{segment.setting.title}</h2>
          <p>{segment.setting.body}</p>
          <BulletList items={segment.setting.bullets} />
        </section>
      ) : null}

      {segment.flow?.length ? (
        <section className="project-lesson-plan__section">
          <h2>{segment.flowTitle}</h2>
          <div className="project-lesson-plan__flow">
            {segment.flow.map((item) => (
              <article className="project-lesson-plan__flow-row" key={`${item.time}-${item.phase}`}>
                <div className="project-lesson-plan__time">{item.time}</div>
                <div className="project-lesson-plan__activity">
                  <h3>{item.phase}</h3>
                  <p>{item.activity}</p>
                </div>
                <div className="project-lesson-plan__facilitator">
                  <p>{item.facilitator}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {segment.rationale ? (
        <section className="project-lesson-plan__section">
          <h2>{segment.rationale.title}</h2>
          <BulletList items={segment.rationale.bullets} />
        </section>
      ) : null}

      {segment.facilitatorNotes ? (
        <section className="project-lesson-plan__section">
          <h2>{segment.facilitatorNotes.title}</h2>
          <BulletList items={segment.facilitatorNotes.bullets} />
        </section>
      ) : null}
    </Segment>
  );
}
