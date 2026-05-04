export function KeyPointList({ items }) {
  return (
    <ul className="sdw-key-points">
      {items.map((item, index) => (
        <li
          className="sdw-key-point"
          key={typeof item === 'string' ? item : `${item.body}-${index}`}
        >
          <span className="sdw-key-point__marker" aria-hidden="true">
            ◆
          </span>
          <div className="sdw-key-point__body">
            {typeof item === 'string' ? item : item.body}
          </div>
        </li>
      ))}
    </ul>
  );
}
