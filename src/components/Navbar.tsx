import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Link } from "react-scroll";

export const Logo = () => {
  return (
    <Image alt="MySQL" as={NextImage} height={36} src="/image/chef-man.svg" width={36} />
  );
};

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">WIDIART</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link 
            href="#" 
            to="about"
            duration={500}
            offset={-70}
            smooth={true}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#"
            to="stack"
            duration={500}
            offset={-70}
            smooth={true}>
            Stack
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#"
            to="skill"
            duration={500}
            offset={-70}
            smooth={true}>
            Skill
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}