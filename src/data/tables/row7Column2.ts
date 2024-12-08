import assets from "@/assets";

const demo = [
  {
    number: 1,
    thumbnail: assets.tableBodyImage1,
    title: "육아툰 제목 영역",
    viewDetails: "상세보기",
  },
];

const row7Column2 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row7Column2;
