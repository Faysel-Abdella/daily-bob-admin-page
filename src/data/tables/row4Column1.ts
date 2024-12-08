const demo = [
  {
    number: 1,
    id:"abc@naver.com",
    name:"홍길동",
    phoneNumber:"01000000000",
    login:"자체",
    joinDate:"YYYY-MM-DD ",
    unblock:"해제하기"
  },
];

const row4Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    number: index + 1,
  })),
];

export default row4Column1;
