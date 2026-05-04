import { Segment } from '../dev/Segment.jsx';

export function LockedLabNotice({ segment, segmentId, requirementCount, missingCount, incorrectCount }) {
  const hasIncorrect = incorrectCount > 0;
  const needsMultiple = requirementCount > 1;

  let body =
    'Use the decision check above to set the boundary first. Once it is answered in the stronger direction, this lab opens.';

  if (needsMultiple) {
    body =
      'Work through the decision checks above first. This lab opens once each one is answered in the stronger direction.';
  }

  if (hasIncorrect && needsMultiple) {
    body =
      'One or more decision checks above still point in the weaker direction. Revisit them and choose the stronger management move before continuing.';
  } else if (hasIncorrect) {
    body =
      'The current decision check above still points in the weaker direction. Revisit it and choose the stronger management move before continuing.';
  } else if (missingCount > 0 && needsMultiple) {
    body =
      'Work through the decision checks above first. This lab opens once each one is answered in the stronger direction.';
  }

  return (
    <Segment
      className={`content-section lab-lock lab-lock--${segment.tone ?? 'input'}`}
      segmentId={segmentId}
    >
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      <div className="lab-lock__card">
        <p className="lab-lock__label">Lab Locked</p>
        <p className="lab-lock__body">{body}</p>
        <p className="lab-lock__subtle">
          You can still review the case analysis above before you come back into the simulation.
        </p>
      </div>
    </Segment>
  );
}
