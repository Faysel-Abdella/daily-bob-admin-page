const demo = [
  {
    id: 1,
    number: 1,
    paymentDate: "YYYY-MM-DD ",
    expirationDate: "YYYY-MM-DD ",
    paymentMethod: "인앱결제",
    payer: "닉네임",
    amount: "0,000원",
  },
];

const row2Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row2Column1;
