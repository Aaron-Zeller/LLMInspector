import { Segment } from '../dev/Segment.jsx';

export function ProjectFaq({ segment, segmentId }) {
  return (
    <Segment className="project-faq" segmentId={segmentId}>
      {segment.intro ? <p className="project-faq__intro">{segment.intro}</p> : null}

      {segment.groups?.length ? (
        <div className="project-faq__groups">
          {segment.groups.map((group) => (
            <section className="project-faq__group" key={group.title}>
              <h2>{group.title}</h2>
              <div className="project-faq__items">
                {group.items.map((item) => (
                  <article className="project-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </Segment>
  );
}
