export function LabBrief({ frame, tone }) {
  if (!frame) {
    return null;
  }

  return (
    <div className={`lab-brief${tone ? ` lab-brief--${tone}` : ''}`}>
      <div className="lab-brief__grid">
        <article className="lab-brief__item">
          <p className="lab-brief__label">Your Role</p>
          <p className="lab-brief__body">{frame.role}</p>
        </article>
        <article className="lab-brief__item">
          <p className="lab-brief__label">What To Watch</p>
          <p className="lab-brief__body">{frame.watch}</p>
        </article>
        {frame.emphasis ? (
          <article className="lab-brief__item lab-brief__item--full">
            <p className="lab-brief__label">Why This Lab Matters</p>
            <p className="lab-brief__body">{frame.emphasis}</p>
          </article>
        ) : null}
      </div>
    </div>
  );
}
