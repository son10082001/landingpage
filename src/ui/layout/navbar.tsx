"use client";
import { Icons } from "@/assets/icons";
import StyledButton from "@/ui/styled-button";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar as HNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface NavLinkItemProps {
  label: string;
  href: any;
  childs?: { label: string; href: any; action?: string }[];
}

export const navLinkItems: NavLinkItemProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Live Casino",
    href: "/#",
  },
  {
    label: "Thể thao",
    href: "/#",
  },
  {
    label: "Thông tin",
    href: "/#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const renderNav = navLinkItems.map((item) => {
    if (item.childs) {
      return (
        <Dropdown key={item.label}>
          <NavbarItem
            className="text-white/90 transition-colors hover:text-amber-400 data-[active=true]:text-amber-400"
            onClick={() => {
              if (
                typeof item.href === "string" &&
                item.href.startsWith("http")
              ) {
                window.open(item.href, "_blank");
              } else {
                router.push(item.href);
              }
              setIsMenuOpen(false);
            }}
            key={item.label}
          >
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 text-sm text-white/90 transition-colors hover:text-amber-400 data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon size={16} />}
                radius="sm"
                variant="light"
              >
                {item.label}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label={item.label}
            className="w-[340px]"
            classNames={{ list: "flex-row flex-wrap" }}
            itemClasses={{ base: "gap-4 w-[48%]" }}
          >
            {item?.childs.map((child) => (
              <DropdownItem
                className="text-sm"
                key={child.label}
                onClick={() => {
                  if (
                    typeof item.href === "string" &&
                    item.href.startsWith("http")
                  ) {
                    window.open(item.href, "_blank");
                  } else {
                    router.push(item.href);
                  }
                  setIsMenuOpen(false);
                }}
              >
                {child.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      );
    }

    return (
      <NavbarItem
        className="text-sm text-white/90 transition-colors hover:text-amber-400 data-[active=true]:text-amber-400"
        onClick={() => {
          if (typeof item.href === "string" && item.href.startsWith("http")) {
            window.open(item.href, "_blank");
          } else {
            router.push(item.href);
          }
          setIsMenuOpen(false);
        }}
        key={item.label}
      >
        {item.label}
      </NavbarItem>
    );
  });

  return (
    <HNavbar
      classNames={{
        base: "border-b border-white/10 bg-[#00091f]/95 shadow-[0_1px_0_0_rgba(0,0,0,0.2)] backdrop-blur-md backdrop-saturate-150",
        item: [
          "flex",
          "relative",
          "cursor-pointer",
          "h-fit py-4 lg:py-4",
          "w-fit",
          "items-center",
          "group",
        ],
      }}
      className="py-3 text-white"
      position="sticky"
      height="71px"
      maxWidth="2xl"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent className="cursor-pointer">
        <NavbarBrand
          onClick={() => {
            router.push("/");
            setIsMenuOpen(false);
          }}
        >
          <Image
            src="/images/qh88-logo.png"
            width={148}
            height={36}
            className="h-9 w-auto min-w-16"
            priority
            alt="QH88"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-7 sm:flex xl:gap-12"
        justify="center"
      >
        {renderNav}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <StyledButton
            className="hidden text-white hover:text-amber-400 lg:inline-flex"
            variant="text"
            iconOnly
          >
            <Icons.search />
          </StyledButton>
        </NavbarItem>
        <NavbarItem>
          <StyledButton className="h-10 min-w-[100px] xl:min-w-[140px]">
            Cùng QH88 — World Cup
          </StyledButton>
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="gap-1 border-white/10 border-t bg-[#00091f] pt-4 pb-6">
        {renderNav}
      </NavbarMenu>
    </HNavbar>
  );
};

export default Navbar;
