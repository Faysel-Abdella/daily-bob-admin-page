const demo = [
    {
      number: 1,
      question: "제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트    ",
      Date: "YYYY-MM-DD  ",
      questioner: "닉네임",
      situation:"상태",
      viewDetails:"상세보기"
    },
  ];
  
  const row20Column1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      number: index + 1,
    })),
  ];
  
  export default row20Column1;
  