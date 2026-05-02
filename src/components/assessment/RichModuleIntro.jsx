import { Segment } from '../dev/Segment.jsx';

export function RichModuleIntro({ segment, segmentId }) {
  return (
    <Segment className="panel panel--intro" segmentId={segmentId}>
      {segment.paragraphs.map((html, i) => (
        <div
          className="intro-copy"
          key={i}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
    </Segment>
  );
}
