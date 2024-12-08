const demo = [
    {
      number: 1,
      title: "제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트   ",
      creatdDate: "YYYY-MM-DD  ",
      viewDetails: "상세보기",
    },
  ];
  
  const row19Column1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      number: index + 1,
    })),
  ];
  
  export default row19Column1;
  