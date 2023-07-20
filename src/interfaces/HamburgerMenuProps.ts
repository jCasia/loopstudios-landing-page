export interface HamburgerMenuProps {
  isMenuOpen: boolean;
  links: Array<string>; // string[]
  closeHandler: () => void;
}
