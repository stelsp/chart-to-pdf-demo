import React, { FC } from "react";
import { AxisOptions, Chart } from "react-charts";
// @ts-expect-error FIXME:
import ResizableBox from "./ResizableBox";

interface ILineChartData {
  label: string;
  data: {
    primary: string | number | Date | null;
    secondary: number | null;
    radius: number | undefined;
  }[];
}
interface ILineChart {
  data: ILineChartData[];
}

const Line: FC<ILineChart> = ({ data }) => {
  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
};

export default Line;
