const demo = [
  {
    round: 1,
    number: 1,
    situation: "진행 중 ",
    dateOfProgress: "2024-10-12~2024-10-19",
    productName: "상품명이 들어가는 곳입니다.",
    price: "상세25,000~76,000(1,204,000)보기",
    numberOfViews: "2,154/2011",
    winner: "홍길동",
    winningPrice: "45,121",
  },
];

const row16Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    round: index + 1,
    number: index + 1,
  })),
];

export default row16Column1;
