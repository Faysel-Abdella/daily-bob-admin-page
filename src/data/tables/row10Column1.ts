const demo = [
  {
    number: 1,
    userId: "abcd123@naver.com ",
    name: "홍길동",
    turningPoints: "3,000",
    naverPoints:"3,000",
    conversionResults:"성공",
    viewDetails:"실패 사유"

  },
];

const row10Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row10Column1;
