import { FC } from "react";
import "./RTable.scss";

interface ICol {
  id: string;
  text?: string;
  data?: Function;
}

interface IRow {
  id: string;
  data: any;
}

type RowData = Array<string | number>;

type TableProps = {
  rows: Array<IRow>;
  cols: Array<ICol>;
};

const RTables: FC<TableProps> = ({ rows, cols }) => {
  const rowsData = Array.from(Array(cols.length), () => new Array(rows.length));
  cols.forEach((col, i) => {
    rows.forEach((row, j) => {
      if (col.data) {
        rowsData[j][i] = col.data(row.data) || "";
      } else {
        rowsData[j][i] = row.data[col.id] || "";
      }
    });
  });

  // const rowsData = rows.map((row: IRow) => {
  //   // if (!cols.find((col) => col.id in row.data)) return "";
  //   return Object.entries(row.data).map(([key, value]) => {
  //     const findCol = cols.find((col: ICol) => col.id === key);
  //     if (findCol) {
  //       if ("data" in findCol) {
  //         return findCol.data ? findCol.data(row.data) : "";
  //       } else {
  //         return value;
  //       }
  //     }
  //     return "";
  //   });
  // });
  // const rowsData: RowData = rows.map((row: IRow) => {
  //   debugger;

  //   const findCol: ICol | undefined = cols.find((col: ICol) => col.name in row);
  //   return findCol ? row.data[findCol.name] : "";
  // });
  // const rowsData = rows.map((row) => {
  //   return cols
  //     .map((col) => {
  //       const findCell = row.find((cell) => col.name === cell.name);
  //       if (findCell) return findCell.data;
  //     })
  //     .filter((row) => row);
  // });

  // debugger;

  const colsTemplate = cols.map((col) => (
    <th className="r-table__col" key={col.id}>
      {col.text || col.id}
    </th>
  ));

  const rowsTemplate = rowsData.map((row) => {
    return (
      <tr className="r-table__row" key={crypto.randomUUID()}>
        {cols.map((col, j) => (
          <td className="r-table__cell" key={crypto.randomUUID()}>
            {row[j] || "-"}
          </td>
        ))}
      </tr>
    );
  });

  // for (let i = 0; i < rowsData.length; i++) {
  //   let rowTemplate = "";

  //   for (let j = 0; j < cols.length; j++) {
  //     console.log(rowsData[i][j]);
  //     rowTemplate += <td className="r-table__cell">{rowsData[i][j] || ""}</td>;
  //   }
  //   rowsTemplate += (
  //     <tr className="r-table__row" key={crypto.randomUUID()}>
  //       {rowTemplate}
  //     </tr>
  //   );
  //   // debugger;
  // }

  return (
    <table className="r-table">
      <thead>
        <tr className="r-table__cols">{colsTemplate}</tr>
      </thead>
      <tbody>{rowsTemplate}</tbody>
    </table>
  );
};

export default RTables;
