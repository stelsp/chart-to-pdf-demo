import React, { FC } from "react";
import { AxisOptions, Chart } from "react-charts";
// @ts-expect-error FIXME:
import ResizableBox from "./ResizableBox";

export interface ILineChartData {
  label: string;
  data: {
    primary: string | number | Date | null;
    secondary: number | null;
  }[];
  color?: string | undefined;
}
interface ILineChart {
  data: ILineChartData[];
  data2: ILineChartData[];
}

const Line: FC<ILineChart> = ({ data, data2 }) => {
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
        elementType: "line",
      },
      {
        id: "2",
        getValue: (datum) => datum.secondary,
        showGrid: false,
        elementType: "line",
      },
    ],
    []
  );

  const [primaryCursorValue, setPrimaryCursorValue] = React.useState();
  const [secondaryCursorValue, setSecondaryCursorValue] = React.useState();

  const primaryCursor = {
    value: primaryCursorValue,
    onChange: (value: any) => {
      setPrimaryCursorValue(value);
    },
  };

  const secondaryCursor = {
    value: secondaryCursorValue,
    onChange: (value: any) => {
      setSecondaryCursorValue(value);
    },
  };

  const getSeriesStyle = (series: any) => {
    return {
      line: {
        stroke: series.originalSeries.color,
      },
      tick: {
        stroke: series.originalSeries.color,
      },
      tickLabel: {
        fill: series.originalSeries.color,
      },
    };
  };

  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            getSeriesStyle,
            primaryCursor,
            secondaryCursor,
          }}
        />
      </ResizableBox>
      <ResizableBox>
        <Chart
          options={{
            data: data2,
            primaryAxis,
            secondaryAxes,
            getSeriesStyle,
            primaryCursor,
            secondaryCursor,
          }}
        />
      </ResizableBox>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            getSeriesStyle,
            primaryCursor,
            secondaryCursor,
          }}
        />
      </ResizableBox>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            getSeriesStyle,
            primaryCursor,
            secondaryCursor,
          }}
        />
      </ResizableBox>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            getSeriesStyle,
            primaryCursor,
            secondaryCursor,
          }}
        />
      </ResizableBox>
    </>
  );
};

export default Line;
