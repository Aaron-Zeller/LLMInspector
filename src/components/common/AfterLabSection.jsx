import { useEffect, useRef, useState } from 'react';

export function AfterLabSection({
  eyebrow,
  title,
  summary,
  summaryTone,
  items = [],
  isComplete = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const previousComplete = useRef(false);

  useEffect(() => {
    if (!previousComplete.current && isComplete) {
      setIsOpen(true);
    }

    if (previousComplete.current && !isComplete) {
      setIsOpen(false);
    }

    previousComplete.current = isComplete;
  }, [isComplete]);

  const summaryClassName = summaryTone
    ? `lab-debrief__summary lab-debrief__summary--${summaryTone}`
    : 'lab-debrief__summary';

  return (
    <section className={`after-lab${isOpen ? ' after-lab--open' : ''}${isComplete ? ' after-lab--ready' : ''}`}>
      <button
        type="button"
        className="after-lab__toggle"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="after-lab__heading">
          <p className="lab-debrief__eyebrow">{eyebrow}</p>
          <h3 className="after-lab__title">{title}</h3>
        </div>
        <div className="after-lab__meta">
          <span className="after-lab__status">
            {isComplete ? 'Ready to review' : 'Auto-opens when complete'}
          </span>
          <span className="after-lab__icon" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>

      {isOpen ? (
        <div className="after-lab__panel">
          {summary ? <p className={summaryClassName}>{summary}</p> : null}
          {items.length ? (
            <div className="lab-debrief__grid">
              {items.map((item) => (
                <article className="lab-debrief__item" key={item.title}>
                  <h4 className="lab-debrief__item-title">{item.title}</h4>
                  <p className="lab-debrief__item-body">{item.body}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
