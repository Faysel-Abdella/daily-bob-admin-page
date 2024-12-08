const demo = [
  {
    number: 1,
    image: "이미지 ",
    bannerName: "배너 이름 텍스트 영역입니다. 배너 이름 텍스트",
    link: "https://www.naver.com",
    toUse: "사용여부",
    expoSure: "노출 순서",
    viewDetails: "상세보기",
  },
];

const row13Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row13Column1;
