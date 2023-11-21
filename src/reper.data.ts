export const reperData = {
  action: { name: "boom", x1: "13:00", x2: "" },
  indicators: ["Датчик 235", "Датчик 11"],
  series: [
    [
      // 1 //////////////////
      {
        name: "S1",
        indicatorName: "Датчик 235",
        color: "green",
        data: [
          { category: "11:00", value: 10 },
          { category: "12:00", value: 30 },
        ],
      },
      {
        name: "S2",
        indicatorName: "Датчик 235",
        color: "yellow",
        data: [
          { category: "12:00", value: 30 },
          { category: "13:00", value: 70 },
        ],
      },
      {
        name: "S3",
        indicatorName: "Датчик 235",
        color: "red",
        data: [
          { category: "13:00", value: 70 },
          { category: "14:00", value: 90 },
          { category: "15:00", value: 80 },
        ],
      },
      {
        name: "S4",
        indicatorName: "Датчик 235",
        color: "yellow",
        data: [
          { category: "15:00", value: 80 },
          { category: "16:00", value: 40 },
        ],
      },
      {
        name: "S5",
        indicatorName: "Датчик 235",
        color: "green",
        data: [
          { category: "16:00", value: 40 },
          { category: "17:00", value: 30 },
        ],
      },
    ],
    [
      // 2 /////////////////////////
      {
        name: "S1",
        indicatorName: "Датчик 11",
        color: "green",
        data: [
          { category: "11:00", value: 10 },
          { category: "12:00", value: 30 },
        ],
      },
      {
        name: "S2",
        indicatorName: "Датчик 11",
        color: "yellow",
        data: [
          { category: "12:00", value: 30 },
          { category: "13:00", value: 50 },
        ],
      },
      {
        name: "S3",
        indicatorName: "Датчик 11",
        color: "yellow",
        data: [
          { category: "13:00", value: 50 },
          { category: "14:00", value: 60 },
        ],
      },
      {
        name: "S4",
        indicatorName: "Датчик 11",
        color: "red",
        data: [
          { category: "14:00", value: 60 },
          { category: "15:00", value: 80 },
          { category: "16:00", value: 70 },
        ],
      },
      {
        name: "S5",
        indicatorName: "Датчик 11",
        color: "yellow",
        data: [
          { category: "16:00", value: 70 },
          { category: "17:00", value: 40 },
        ],
      },
    ],
  ],
};
