import React, { useState } from 'react';

// CH Import the expanded row content component
import ExpandedRowContent from './expanded-row';

function DataTable({ data }) {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (targetId) => {
    setExpandedRow(expandedRow === targetId ? null : targetId);
  };

  // CH Data table container
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Approved Symbol</th>
            <th>Gene Name</th>
            <th>Overall Association Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={row.target.id}>
              <tr className="main-row">
                <td>
                  <button onClick={() => toggleRow(row.target.id)}>
                    {expandedRow === row.target.id ? '−' : '+'}
                  </button>
                </td>
                <td>
                  <a
                    href={`https://platform.opentargets.org/target/${row.target.approvedSymbol}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {row.target.approvedSymbol}
                  </a>
                </td>
                <td>{row.target.approvedName}</td>
                <td>{row.score.toFixed(4)}</td>
              </tr>
              {expandedRow === row.target.id && (
                <tr className="expanded-row">
                  <td colSpan="4">
                    <ExpandedRowContent row={row} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
