import { Segment } from '../dev/Segment.jsx';

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

function renderInline(text) {
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = BOLD_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={`b-${key++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes.length > 0 ? nodes : text;
}

function classifyLine(line) {
  const bullet = line.match(/^•\s+(.*)$/);
  if (bullet) return { kind: 'ul', content: bullet[1] };
  const numbered = line.match(/^(\d+)\.\s+(.*)$/);
  if (numbered) return { kind: 'ol', content: numbered[2] };
  return { kind: 'p', content: line };
}

function groupParagraphs(paragraphs) {
  const groups = [];
  let currentList = null;
  paragraphs.forEach((paragraph, idx) => {
    const { kind, content } = classifyLine(paragraph);
    if (kind === 'p') {
      currentList = null;
      groups.push({ kind: 'p', content, key: `p-${idx}` });
      return;
    }
    if (!currentList || currentList.kind !== kind) {
      currentList = { kind, items: [], key: `l-${idx}` };
      groups.push(currentList);
    }
    currentList.items.push({ content, key: `i-${idx}` });
  });
  return groups;
}

export function ModuleIntro({ segment, segmentId }) {
  const groups = groupParagraphs(segment.paragraphs);
  return (
    <Segment className="panel panel--intro" segmentId={segmentId}>
      {groups.map((group) => {
        if (group.kind === 'p') {
          return (
            <p className="intro-copy" key={group.key}>
              {renderInline(group.content)}
            </p>
          );
        }
        const ListTag = group.kind === 'ol' ? 'ol' : 'ul';
        return (
          <ListTag className={`intro-list intro-list--${group.kind}`} key={group.key}>
            {group.items.map((item) => (
              <li className="intro-list__item" key={item.key}>
                {renderInline(item.content)}
              </li>
            ))}
          </ListTag>
        );
      })}
    </Segment>
  );
}
