export interface MenuItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  menuItems: MenuItem[];
  href?: string;
}