const demo = [
  {
    SIMSMCID:1,
    name: "홍길동",
    birthDate: "1970-08-04",
    gender: "여자",
    productName: "교보감염케어보험 23.11 (무배당)[D]",
    insuranceDateAndTime: "2024-11-10 09:23:41",
    paymentDateAndTime:"2024-11-10 09:23:41",
    inflow: "라이프캐치",
  },
];

const row8Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    SIMSMCID:index+1
  })),
];

export default row8Column1;
