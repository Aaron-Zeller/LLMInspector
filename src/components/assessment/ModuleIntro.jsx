import { Segment } from '../dev/Segment.jsx';

export function ModuleIntro({ segment, segmentId }) {
  return (
    <Segment className="panel panel--intro" segmentId={segmentId}>
      {segment.paragraphs.map((paragraph) => (
        <p className="intro-copy" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </Segment>
  );
}
