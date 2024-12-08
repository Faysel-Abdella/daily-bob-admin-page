const demo = [
  {
    number: 1,
    storeName: "가게명 입니다.",
    point: "5,000",
    industry: "업종",
    registrationDate: "YYYY-MM-DD ",
    id: "abc@naver.com",
    classification:"분류"
  },
];

const row5Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row5Column1;
