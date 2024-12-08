const demo = [
  {
    number: 1,
    authority: "교보생명팀 ",
    id: "ghdrlfehdwjs",
    phoneNumber: "01011111111",
    name: "홍길동",
    registrationDate: "2024-11-18 16:12:40",
    approvalDate:"2024-11-18 16:12:40",
    approval:"승인"
  },
];

const row10Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row10Column1;
