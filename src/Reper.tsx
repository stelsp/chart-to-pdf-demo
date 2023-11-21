import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  ReferenceLine,
  ReferenceArea,
} from "recharts";
import { reperData } from "./reper.data";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const getSerie = (series: any[]) => {
      // if (!series) return;

      const s = series.find((el) =>
        el?.data?.find((c: any) => c.category === payload[0].payload.category)
      );

      // if (!s) return;

      const s_cat = s.data?.find(
        (el: any) => el.category === payload[0].payload.category
      );

      // if (!s_cat) return;

      return { name: s.indicatorName, value: s_cat.value, color: s.color };
    };

    return (
      <div
        style={{
          background: "white",
          borderRadius: "4px",
          padding: "5px",
          border: "1px solid black",
        }}
      >
        <>
          {reperData &&
            reperData.series.map((el, ix) =>
              el ? (
                <>
                  <p
                    key={ix}
                    style={{
                      margin: "0",
                      color: `${getSerie(el).color}`,
                    }}
                  >
                    {`${getSerie(el).name}: ${getSerie(el).value}`}
                  </p>
                </>
              ) : null
            )}
        </>
      </div>
    );
  }
  return null;
};

const Reper = () => {
  return (
    <>
      {reperData.series.map((el, ix) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "0", width: "120px" }}>
            {reperData.indicators[ix]}
          </p>
          <ComposedChart
            key={ix}
            syncId="reper"
            width={500}
            height={200}
            data={el}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="category"
              type="category"
              allowDuplicatedCategory={false}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            {el.map((s) => (
              <>
                {s && (
                  <Line
                    type="monotone"
                    dataKey="value"
                    activeDot={{ r: 6 }}
                    stroke={s.color}
                    data={s.data}
                    name={s.name}
                    key={s.name}
                    isAnimationActive={false}
                  />
                )}
              </>
            ))}
            <>
              {reperData.action.name === "rain" && (
                <ReferenceArea
                  label="Дождь"
                  x1={reperData.action.x1}
                  x2={reperData.action.x2}
                  stroke="red"
                  strokeOpacity={0.3}
                />
              )}
            </>
            <>
              {reperData.action.name === "boom" && (
                <ReferenceLine
                  label="Взрывные работы"
                  x={reperData.action.x1}
                  stroke="red"
                  strokeOpacity={0.3}
                />
              )}
            </>
          </ComposedChart>
        </div>
      ))}
    </>
  );
};

export default Reper;
