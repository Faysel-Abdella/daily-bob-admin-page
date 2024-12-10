import assets from "@/assets";

const sideBarContent = [
  {
    order: "1",
    mainTitle: "관리자 메인",
    icon: assets.member,
    activeIcon: assets.memberActive,
    init: "/admin/adminMain",
    firstRoute: "/admin/adminMain",
    subTitles: [],
  },
  {
    order: "2",
    mainTitle: "포인트/응모권 관리",
    icon: assets.entryticketmanagement,
    activeIcon: assets.entryticketmanagementActive,
    init: "/admin/entry-ticket-management",
    firstRoute: "/admin/entry-ticket-management/entry-Ticket-Member-Management",
    subTitles: [
      {
        label: "회원 포인트 및 응모권 관리",
        route: "/admin/entry-ticket-management/entry-Ticket-Member-Management",
      },
      {
        label: "관리자 지급",
        route: "/admin/entry-ticket-management/points-paid",
      },
      {
        label: "초기/만료 포인트 세부 설정",
        route: "/admin/entry-ticket-management/detailed-setting",
      },
    ],
  },
  {
    order: "3",
    mainTitle: "회원 관리",
    icon: assets.membership,
    activeIcon: assets.membership,
    init: "/admin/membership",
    firstRoute: "/admin/membership/membership-management",
    subTitles: [],
  },
  {
    order: "4",
    mainTitle: "영수증 관리",
    icon: assets.receipt,
    activeIcon: assets.receiptActive,
    init: "/admin/receipt",
    firstRoute: "/admin/receipt/receipt-catagory-management",
    subTitles: [
      {
        label: "영수증 목록",
        route: "/admin/receipt/receipt-catagory-management",
      },
      {
        label: "영수증 카테고리 관리",
        route: "/admin/receipt/receipt-category",
      },
    ],
  },
  {
    order: "5",
    mainTitle: "상품 관리",
    icon: assets.product,
    activeIcon: assets.productActive,
    init: "/admin/product",
    firstRoute: "/admin/product/product-management",
    subTitles: [],
  },
  {
    order: "6",
    mainTitle: "보험 관리",
    icon: assets.insurance,
    activeIcon: assets.insuranceActive,
    init: "/admin/insurance",
    firstRoute: "/admin/insurance/kyobo-life-insurance-subscribers-management",
    subTitles: [
      {
        label: "교보생명 보험 가입자 관리",
        route: "/admin/insurance/kyobo-life-insurance-subscribers-management",
      },
    ],
  },
  {
    order: "7",
    mainTitle: "정산 및 권한 관리",
    icon: assets.Settlementandrights,
    activeIcon: assets.SettlementandrightsActive,
    init: "/admin/settlement",

    firstRoute: "/admin/settlement/settlement-management",
    subTitles: [
      {
        label: "정산 관리",
        route: "/admin/settlement/settlement-management",
      },
      {
        label: "권한 관리",
        route: "/admin/settlement/permission-management",
      },
      {
        label: "네이버 포인트 전환 목록",
        route: "/admin/settlement/Point-conversion-history",
      },
    ],
  },
  {
    order: "8",
    mainTitle: "광고 관리",
    icon: assets.Ads,
    activeIcon: assets.AdsActive,
    init: "/admin/Administrator",
    firstRoute: "/admin/Administrator/offer-wall-management",
    subTitles: [
      {
        label: "오퍼월 관리",
        route: "/admin/Administrator/offer-wall-management",
      },
      {
        label: "배너 관리",
        route: "/admin/Administrator/banner-management",
      },
    ],
  },
  {
    order: "9",
    mainTitle: "게임 관리",
    icon: assets.game,
    activeIcon: assets.gameActive,
    init: "/admin/game",
    firstRoute: "/admin/game/game-management",
    subTitles: [
      {
        label: "눈치게임 목록",
        route: "/admin/game/game-management",
      },
      {
        label: "데일리 퀴즈 목록",
        route: "/admin/game/daily-quiz-management",
      },
    ],
  },
  {
    order: "10",
    mainTitle: "게시판/알림 관리",
    icon: assets.notification,
    activeIcon: assets.notificationActive,
    init: "/admin/notification",
    firstRoute: "/admin/notification/notification-management",
    subTitles: [
      {
        label: "알림관리",
        route: "/admin/notification/notification-management",
      },
      {
        label: "FAQ",
        route: "/admin/notification/faq",
      },
      {
        label: "공지사항",
        route: "/admin/notification/notice-management",
      },
      {
        label: "1:1 문의 관리",
        route: "/admin/notification/1:1-inquiry-management",
      },
    ],
  },
];

export default sideBarContent;
