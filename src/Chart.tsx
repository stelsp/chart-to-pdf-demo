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

const series = [
  {
    name: "Rp-1-S1",
    indicatorName: "Rp-1",
    color: "green",
    data: [
      { category: "1", value: 10 },
      { category: "2", value: 30 },
    ],
  },
  {
    name: "Rp-1-S2",
    indicatorName: "Rp-1",
    color: "yellow",
    data: [
      { category: "2", value: 30 },
      { category: "3", value: 70 },
    ],
  },
  {
    name: "Rp-1-S3",
    indicatorName: "Rp-1",
    color: "red",
    data: [
      { category: "3", value: 70 },
      { category: "4", value: 90 },
      { category: "5", value: 80 },
    ],
  },
  {
    name: "Rp-1-S4",
    indicatorName: "Rp-1",
    color: "yellow",
    data: [
      { category: "5", value: 80 },
      { category: "6", value: 40 },
    ],
  },
  ,
  {
    name: "Rp-1-S5",
    indicatorName: "Rp-1",
    color: "green",
    data: [
      { category: "6", value: 40 },
      { category: "7", value: 30 },
      { category: "8", value: 25 },
    ],
  },
];

const series2 = [
  {
    name: "Rp-2-S1",
    indicatorName: "Rp-2",
    color: "green",
    data: [
      { category: "1", value: 20 },
      { category: "2", value: 30 },
    ],
  },
  {
    name: "Rp-2-S2",
    indicatorName: "Rp-2",
    color: "green",
    data: [
      { category: "2", value: 30 },
      { category: "3", value: 40 },
    ],
  },
  {
    name: "Rp-2-S3",
    indicatorName: "Rp-2",
    color: "yellow",
    data: [
      { category: "3", value: 40 },
      { category: "4", value: 70 },
    ],
  },
  {
    name: "Rp-2-S4",
    indicatorName: "Rp-2",
    color: "red",
    data: [
      { category: "4", value: 70 },
      { category: "5", value: 80 },
      { category: "6", value: 100 },
      { category: "7", value: 80 },
      { category: "8", value: 90 },
    ],
  },
];

const series3 = [
  {
    name: "Rp-3-S1",
    indicatorName: "Rp-3",
    color: "green",
    data: [
      { category: "1", value: 20 },
      { category: "2", value: 30 },
    ],
  },
  {
    name: "Rp-3-S2",
    indicatorName: "Rp-3",
    color: "green",
    data: [
      { category: "2", value: 30 },
      { category: "3", value: 40 },
    ],
  },
  {
    name: "Rp-3-S3",
    indicatorName: "Rp-3",
    color: "yellow",
    data: [
      { category: "3", value: 40 },
      { category: "4", value: 70 },
    ],
  },
  {
    name: "Rp-3-S4",
    indicatorName: "Rp-3",
    color: "red",
    data: [
      { category: "4", value: 70 },
      { category: "5", value: 80 },
      { category: "6", value: 90 },
      { category: "7", value: 80 },
      { category: "8", value: 100 },
    ],
  },
];

const series4 = [
  {
    name: "Rp-4-S1",
    indicatorName: "Rp-4",
    color: "green",
    data: [
      { category: "1", value: 15 },
      { category: "2", value: 25 },
    ],
  },
  {
    name: "Rp-4-S2",
    indicatorName: "Rp-4",
    color: "green",
    data: [
      { category: "2", value: 25 },
      { category: "3", value: 35 },
    ],
  },
  {
    name: "Rp-4-S3",
    indicatorName: "Rp-4",
    color: "yellow",
    data: [
      { category: "3", value: 35 },
      { category: "4", value: 65 },
    ],
  },
  {
    name: "Rp-4-S4",
    indicatorName: "Rp-4",
    color: "red",
    data: [
      { category: "4", value: 65 },
      { category: "5", value: 75 },
      { category: "6", value: 85 },
      { category: "7", value: 75 },
      { category: "8", value: 95 },
    ],
  },
];

const series5 = [
  {
    name: "Rp-5-S1",
    indicatorName: "Rp-5",
    color: "green",
    data: [
      { category: "1", value: 18 },
      { category: "2", value: 28 },
    ],
  },
  {
    name: "Rp-5-S2",
    indicatorName: "Rp-5",
    color: "green",
    data: [
      { category: "2", value: 28 },
      { category: "3", value: 38 },
    ],
  },
  {
    name: "Rp-5-S3",
    indicatorName: "Rp-5",
    color: "yellow",
    data: [
      { category: "3", value: 38 },
      { category: "4", value: 68 },
    ],
  },
  {
    name: "Rp-5-S4",
    indicatorName: "Rp-5",
    color: "red",
    data: [
      { category: "4", value: 68 },
      { category: "5", value: 78 },
      { category: "6", value: 88 },
      { category: "7", value: 78 },
      { category: "8", value: 98 },
    ],
  },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const getSerie = (series: any[]) => {
      const s = series.find((el) =>
        el?.data?.find((c: any) => c.category === payload[0].payload.category)
      );

      const s_cat = s.data.find(
        (el: any) => el.category === payload[0].payload.category
      );

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
        <p
          style={{
            margin: "0",
            color: `${getSerie(series).color}`,
          }}
        >{`${getSerie(series).name}: ${getSerie(series).value}`}</p>
        <p
          style={{
            margin: "0",
            color: `${getSerie(series2).color}`,
          }}
        >{`${getSerie(series2).name}: ${getSerie(series2).value}`}</p>
        <p
          style={{
            margin: "0",
            color: `${getSerie(series3).color}`,
          }}
        >{`${getSerie(series3).name}: ${getSerie(series3).value}`}</p>
        <p
          style={{
            margin: "0",
            color: `${getSerie(series4).color}`,
          }}
        >{`${getSerie(series4).name}: ${getSerie(series4).value}`}</p>
        <p
          style={{
            margin: "0",
            color: `${getSerie(series5).color}`,
          }}
        >{`${getSerie(series5).name}: ${getSerie(series5).value}`}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  return (
    <>
      <ComposedChart
        syncId="anyId"
        width={500}
        height={200}
        data={series}
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
        {series.map((s) => (
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
        <ReferenceArea
          label="rain"
          x1={"2"}
          x2={"4"}
          stroke="red"
          strokeOpacity={0.3}
        />
      </ComposedChart>

      <ComposedChart
        syncId="anyId"
        width={500}
        height={200}
        data={series2}
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
        {series2.map((s) => (
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
        <ReferenceLine label="boom" x="4" stroke="red" strokeOpacity={0.3} />
      </ComposedChart>

      <ComposedChart
        syncId="anyId"
        width={500}
        height={200}
        data={series3}
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
        {series3.map((s) => (
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
      </ComposedChart>

      <ComposedChart
        syncId="anyId"
        width={500}
        height={200}
        data={series4}
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
        {series4.map((s) => (
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
      </ComposedChart>

      <ComposedChart
        syncId="anyId"
        width={500}
        height={200}
        data={series5}
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
        {series5.map((s) => (
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
      </ComposedChart>
    </>
  );
};

export default Chart;
