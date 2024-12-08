const demo = [
  {
    number: 1,
    category: "사회성",
    years: "3세",
    category2: "학습",
    contentTitle: "콘텐츠 제목 텍스트 영역",
    viewDetails: "상세보기",
  },
];

const row3Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row3Column1;
