import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const navMenu = [
  {
    pathname: "/app/dashboard",
    label: "داشبورد",
    icon: <DashboardIcon />,
  },
  {
    pathname: "/app/wallet",
    label: "کیف پول",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    pathname: "/app/trade",
    label: "معاملات",
    icon: <CurrencyExchangeIcon />,
  },
];

export default navMenu;
