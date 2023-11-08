import { FC } from "react";
import { ILineChartData } from "./Line";
// @ts-expect-error FIXME:
import ResizableBox from "./ResizableBox";

interface ITableProps {
  data: ILineChartData[];
}

const Table: FC<ITableProps> = ({ data }) => {
  return (
    <>
      <ResizableBox>
        <table>
          <thead>
            <tr>
              <td /> {/* left top empty corner */}
              {data[0].data.map((el) => (
                <td>{el.primary?.toString().slice(4, 10)}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((series, index) => (
              <tr>
                <td>S {index + 1}</td>
                {series.data.map((el) => (
                  <td>{el.secondary}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ResizableBox>
    </>
  );
};

export default Table;
