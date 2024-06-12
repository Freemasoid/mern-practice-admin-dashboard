import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

export const navLinks = [
  {
    title: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    title: "Client",
    icon: null,
  },
  {
    title: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    title: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    title: "Geography",
    icon: <PublicOutlined />,
  },
  {
    title: "Sales",
    icon: null,
  },
  {
    title: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    title: "Daily",
    icon: <TodayOutlined />,
  },
  {
    title: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    title: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    title: "Control",
    icon: null,
  },
  {
    title: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    title: "Performance",
    icon: <TrendingUpOutlined />,
  },
];
