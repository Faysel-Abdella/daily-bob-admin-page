import assets from "@/assets";

const demo = [
  {
    number: 1,
    thumbnail: assets.tableBodyImage1,
    title: "육아툰 제목 영역",
    author: "작가 이름",
    round: "10",
    viewDetails: "상세보기",
  },
];

const row5Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    thumbnail:
      index % 3 === 0
        ? assets.tableBodyImage1
        : index % 3 === 1
        ? assets.tableBodyImage2
        : assets.tableBodyImage3,
  })),
];

export default row5Column1;
