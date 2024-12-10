import { group } from "console";

const demo = [
  {
    productId: 44,
    industry: "편의점",
    group: "생활용품",
    subGroup: "필기구",
    productName: "(도미노피자) (오리지널)리얼불고기 피자 ",
    stockQuantity: "1,000",
    salePrice: "그룹명",
    saleOrNot: "N",
    purchaseLimit: "Y",
    modificationDate: "2024-11-10 09:23:41",
  },
];

const row6Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
    productId: index + 1,
  })),
];

export default row6Column1;
