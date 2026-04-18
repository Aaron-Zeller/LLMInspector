export function AiTranscript({ block }) {
  return (
    <div className="transcript-card">
      <div className="transcript-card__title">{block.title}</div>
      {block.messages.map((message, index) => (
        <article className="transcript-message" key={`${message.label}-${index}`}>
          <div className={`transcript-message__avatar transcript-message__avatar--${message.role}`}>
            {message.speaker}
          </div>
          <div className="transcript-message__body">
            <p className="transcript-message__label">{message.label}</p>
            <p className="transcript-message__content">{message.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
