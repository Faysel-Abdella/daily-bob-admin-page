const demo = [
  {
    customerId:1,
    productCode: "762",
    productName: "[빽다방] 아메리카노(HOT)",
    cost: "3,000",
    salePrice: "3,000",
    salesCatagory: "결제완료",
    quantity:"3",
    salesAmount: "3,000",
    cancellationAMount: "3,000",
    upDate: "2024-11-05 08:15:02",
  },
];

const row8Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    customerId:index+1
  })),
];

export default row8Column1;
