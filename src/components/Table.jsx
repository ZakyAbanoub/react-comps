const Table = ({ data, config, keyFn }) => {
  const renderedHeders = config.map((column) => {
    return (
      <th key={column.label}>
        <span>{column.label}</span>
      </th>
    );
  });
  const renderedRows = data.map((rowData) => {
    const renderdCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderdCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
