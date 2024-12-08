const demo = [
  {
    id: 0,
    number: 0,
    idString: "zero18",
    name: "홍길동",
    pointsBalance: "3,000",
    RemainingEntry: "3장",
    date: "2024-11-05 08:15:02"

  },
];

const row1Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column1;
