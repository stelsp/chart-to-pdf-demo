export const areaData = {
  action: { name: "rain", x1: "12:00", x2: "14:00" },
  indicators: ["Датчик 24"],
  series: [
    [
      // 1 //
      {
        name: "S1",
        indicatorName: "Датчик 24",
        color: "green",
        data: [
          { category: "11:00", value: 10 },
          { category: "12:00", value: 30 },
        ],
      },
      {
        name: "S2",
        indicatorName: "Датчик 24",
        color: "yellow",
        data: [
          { category: "12:00", value: 30 },
          { category: "13:00", value: 70 },
        ],
      },
      {
        name: "S3",
        indicatorName: "Датчик 24",
        color: "red",
        data: [
          { category: "13:00", value: 70 },
          { category: "14:00", value: 90 },
          { category: "15:00", value: 80 },
        ],
      },
      {
        name: "S4",
        indicatorName: "Датчик 24",
        color: "yellow",
        data: [
          { category: "15:00", value: 80 },
          { category: "16:00", value: 40 },
        ],
      },
      {
        name: "S5",
        indicatorName: "Датчик 24",
        color: "green",
        data: [
          { category: "16:00", value: 40 },
          { category: "17:00", value: 30 },
        ],
      },
    ],
  ],
};
