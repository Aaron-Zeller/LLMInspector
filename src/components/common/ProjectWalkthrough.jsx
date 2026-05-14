import { Segment } from '../dev/Segment.jsx';

export function ProjectWalkthrough({ segment, segmentId }) {
  return (
    <Segment className="project-walkthrough" segmentId={segmentId}>
      {segment.intro ? <p className="project-walkthrough__intro">{segment.intro}</p> : null}

      {segment.video ? (
        <section className="project-walkthrough__video" aria-label={segment.video.title}>
          <video controls preload="metadata">
            {segment.video.mp4Src ? <source src={segment.video.mp4Src} type="video/mp4" /> : null}
            <source src={segment.video.src} type="video/quicktime" />
          </video>
        </section>
      ) : null}

      {segment.items?.length ? (
        <div className="project-walkthrough__items">
          {segment.items.map((item) => (
            <article className="project-walkthrough__item" key={item.title}>
              <div className="project-walkthrough__copy">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
              <figure className="project-walkthrough__figure">
                <img alt={item.alt} src={item.image} />
              </figure>
            </article>
          ))}
        </div>
      ) : null}
    </Segment>
  );
}
