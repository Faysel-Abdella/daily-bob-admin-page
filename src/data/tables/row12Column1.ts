const demo = [
    {
      number: 1,
      thumbNail: "썸네일 ",
      advertisement: "광고 이름 텍스트 영역입니다. 광고 이름 텍스트",
      subGroup: "그룹명",
      point: "3,000",
      viewDetails: "상세보기",
      
    },
  ];
  
  const row12Column1 = [
    ...Array.from({ length: 70 }, (_, index) => ({
      ...demo[0],
      number: index + 1,
    })),
  ];
  
  export default row12Column1;
  