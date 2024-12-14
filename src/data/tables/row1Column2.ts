const demo = [
  {
    id: 0,
    number: 1,
    DateChange: '2024-11-05 08:15:02',
    Payment: '포인트 적립',
    ProductName: '출석체크 적립',
    ChangeDAmount: '100',
    PointsBalance: '5,562',
  },
];

const row1Column2 = [
  // First 10 items with IDs from 10 to 1
  ...Array.from({ length: 10 }, (_, index) => ({
    ...demo[0],
    id: 10 - index,
    number: 10 - index,
  })),
  // Remaining 60 items with IDs starting from 11
  ...Array.from({ length: 60 }, (_, index) => ({
    ...demo[0],
    id: 11 + index,
    number: 11 + index,
  })),
];

export default row1Column2;
