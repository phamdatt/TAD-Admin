import { faBlog, faCube, faGear, faHome, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';

export const sidebarNav = [
  {
    icon: faHome,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: faCube,
    title: "Products",
    url: "products",
  },
  {
    icon: faUser,
    title: "Customers",
    url: "customers",
  },
  {
    icon: faReceipt,
    title: "Orders",
    url: "orders",
  },
  {
    icon: faBlog,
    title: "Blogs",
    url: "blogs",
  },
  {
    icon: faGear,
    title: "Settings",
    url: "settings",
  },
];
