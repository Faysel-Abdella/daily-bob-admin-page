const demo = [
  {
    round: 1,
    situation: "진행 중 ",
    dateOfProgress: "2024-10-12~2024-10-19",
    productName: "h상품명이 들어가는 곳입니다.",
    price: "25,000~76,000(1,204,000)",
    numberOfViews: "2,154/2011",
    winner: "홍길동",
    winningPrice: "45,121",
  },
];

const row14Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    round: index + 1,
  })),
];

export default row14Column1;
