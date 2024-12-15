const demo = [
  {
    id: 1,
    number: 0,
    idString: 'zero18',
    name: '홍길동',
    pointsBalance: '3,000',
    RemainingEntry: '3장',
    date: '2024-11-05 08:15:02',
  },
];

const row1Column1 = [
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

export default row1Column1;
