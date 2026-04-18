import { cx } from '../../lib/cx.js';

export function DataPreview({ block }) {
  return (
    <div className="data-preview">
      <div className="data-preview__title">{block.title}</div>
      <div className="data-preview__table-wrap">
        <table className="data-preview__table">
          <thead>
            <tr>
              {block.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${block.title}-${rowIndex}`}>
                {row.map((cell, cellIndex) => {
                  const isPii =
                    block.piiColumns.includes(cellIndex) && rowIndex < block.rows.length - 1;

                  return (
                    <td
                      className={cx(
                        isPii && 'data-preview__cell--pii',
                        rowIndex === block.rows.length - 1 && 'data-preview__cell--summary',
                      )}
                      key={`${rowIndex}-${cellIndex}`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="data-preview__note">{block.note}</p>
    </div>
  );
}
