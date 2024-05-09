// @NOTE: in case you are using Next.js
"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import { useAnimate, stagger, motion } from "framer-motion";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  SettingsIcon,
  ChevronRightIcon,
  BellIcon,
  LucideArrowDown
} from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube,  } from "react-icons/fa";

import { cn } from "@/utils/cn";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate("#menu-icon", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(10% 50% 90% 50% round 12px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
}

type DropdownMenuProps = {
  containerClassName?: string;
  itemClassName?: string;
};

export function DropdownMenu({
  containerClassName,
  itemClassName,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  type SocialLink = {
    icon: React.ReactNode;
    name: string;
    link: string;
  };

  const socialLinks: SocialLink[] = [
    { icon: <FaGithub size={16} />, name: "GitHub", link: "https://github.com/webdevpls" },
    { icon: <FaInstagram size={16} />, name: "Instagram", link: "https://www.instagram.com/devpls" },
    { icon: <FaLinkedin size={16} />, name: "Linkedin", link: "https://www.linkedin.com/in/plsnobrega" },
    { icon: <FaYoutube size={16} />, name: "Youtube", link: "https://www.youtube.com/@devhelloworld" },
  ];

  return (
    <nav
      className={cn(
        "max-w-[200px] w-full mx-auto space-y-2",
        containerClassName
      )}
      ref={scope}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="bg-[#574487] border border-[#8776B2] max-w-[300px] w-full flex items-center justify-between p-2.5 rounded-md"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="text-sm font-medium text-neutral-300">Entre em contato</span>
        <div style={{ transformOrigin: "50% 55%" }}>
          <LucideArrowDown size={14} className="text-neutral-50 ml-2" id="menu-icon" />
        </div>
      </motion.button>
      <ul
        className={cn(
          "flex flex-col z-[1] max-w-[800px] w-full space-y-3 p-2.5 bg-[#574487] border border-[#8776B2] rounded-xl",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{
          clipPath: "inset(10% 50% 90% 50% round 12px)",
        }}
      >
        {socialLinks.map(({ icon, name,  link }) => (
          <li key={name}>
            <Link
              href={link}
              target="_blank"
               // Where you will be sent
              className={cn(
                "group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-neutral-300 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none",
                itemClassName,
                
              )}
            >
              <span>{icon}</span>
              <span className="flex items-center gap-1 text-sm font-medium">
                {name}
                <ChevronRightIcon
                  size={12}
                  className="-translate-x-1 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
}