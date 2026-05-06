import { Segment } from '../dev/Segment.jsx';

export function ProjectAboutLead({ segment, segmentId }) {
  return (
    <Segment className="project-about-lead" segmentId={segmentId}>
      {segment.eyebrow ? <p className="project-about-lead__eyebrow">{segment.eyebrow}</p> : null}
      <div className="project-about-lead__body">
        {segment.paragraphs.map((paragraph) => (
          <p className="project-about-lead__paragraph" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </Segment>
  );
}
