import { Segment } from '../dev/Segment.jsx';

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="project-worksheets__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectWorksheets({ segment, segmentId }) {
  return (
    <Segment className="project-worksheets" segmentId={segmentId}>
      {segment.intro ? <p className="project-worksheets__intro">{segment.intro}</p> : null}

      {segment.sections?.length ? (
        <div className="project-worksheets__sections">
          {segment.sections.map((section) => (
            <section className="project-worksheets__section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <BulletList items={section.bullets} />
            </section>
          ))}
        </div>
      ) : null}

      {segment.tasks?.length ? (
        <section className="project-worksheets__task-section">
          <h2>Worksheet Tasks</h2>
          <div className="project-worksheets__tasks">
            {segment.tasks.map((task) => (
              <article className="project-worksheets__task" key={task.title}>
                <div className="project-worksheets__task-main">
                  <h3>{task.title}</h3>
                  {task.section ? <p className="project-worksheets__section-link">{task.section}</p> : null}
                  <p>{task.purpose}</p>
                </div>
                <div className="project-worksheets__task-detail">
                  <h4>Student task</h4>
                  <p>{task.student}</p>
                  <BulletList items={task.studentItems} />
                </div>
                <div className="project-worksheets__task-detail">
                  <h4>Instructor move</h4>
                  <p>{task.instructor}</p>
                </div>
                <div className="project-worksheets__prompt">
                  <h4>Worksheet prompt</h4>
                  {task.prompts?.length ? (
                    <ol>
                      {task.prompts.map((prompt) => (
                        <li key={prompt}>{prompt}</li>
                      ))}
                    </ol>
                  ) : (
                    <p>{task.prompt}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </Segment>
  );
}
