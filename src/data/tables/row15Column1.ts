const demo = [
  {
    round: 1,
    number: 1,
    classification: "일반 ",
    questions: "질문 영역입니다. 질문 영역입니다. 질문 영역 입니다.",
    correctAnswer: "홍길동",
    viewDetails: "상세보기",
  },
];

const row15Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    round: index + 1,
    number: index + 1,
  })),
];

export default row15Column1;
