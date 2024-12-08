const demo = [
    {
      number: 1,
      question: "Q. 질문 영역 텍스트 질문 영역 텍스트 제목 영역 텍스트  ",
      answer: "제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트 ",
      viewDetails: "상세보기",
    },
  ];
  
  const row18Column1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      number: index + 1,
    })),
  ];
  
  export default row18Column1;
  