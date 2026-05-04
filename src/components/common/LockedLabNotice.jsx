import { Segment } from '../dev/Segment.jsx';

export function LockedLabNotice({ segment, segmentId, requirementCount, missingCount, incorrectCount }) {
  const hasIncorrect = incorrectCount > 0;
  const needsMultiple = requirementCount > 1;

  let body =
    'Complete the decision check above correctly to unlock this lab.';

  if (needsMultiple) {
    body =
      'Complete each decision check above correctly to unlock this lab.';
  }

  if (hasIncorrect && needsMultiple) {
    body =
      'One or more decision checks above are still answered in the weaker direction. Revisit them and choose the stronger management move to unlock this lab.';
  } else if (hasIncorrect) {
    body =
      'The current decision check above is still answered in the weaker direction. Revisit it and choose the stronger management move to unlock this lab.';
  } else if (missingCount > 0 && needsMultiple) {
    body =
      'Work through the decision checks above first. This lab unlocks once each one is answered correctly.';
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
      </div>
    </Segment>
  );
}
