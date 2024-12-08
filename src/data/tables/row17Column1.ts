const demo = [
    {
      number: 1,
      title: "제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트  ",
      detail: "제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트 ",
      reservationTime: "18시 30분",
      viewDetails: "상세보기",
    },
  ];
  
  const row17Column1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      number: index + 1,
    })),
  ];
  
  export default row17Column1;
  