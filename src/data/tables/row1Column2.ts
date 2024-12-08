const demo = [
  {
    id: 0,
    number: 1,
    DateChange: "2024-11-05 08:15:02",
    Payment:"포인트 적립",
    ProductName:"출석체크 적립",
    ChangeDAmount:"100",
    PointsBalance:"5,562"
  },
];

const row1Column2 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column2;
