"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
const CollaborateButton = ({ className }) => (<Button className={cn("relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden", className, "cursor-pointer")}>
    <a href="#contact" className="relative z-10 transition-all duration-500">
      Enroll Now
    </a>
    <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16}/>
    </span>
  </Button>);
const Header = ({ navigationData, className }) => {
    const [sticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const handleScroll = useCallback(() => {
        setSticky(window.scrollY >= 50);
    }, []);
    const handleResize = useCallback(() => {
        if (window.innerWidth >= 1024)
            setIsOpen(false);
    }, []);
    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen)
            document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleScroll, handleResize]);
    return (<motion.header initial={{ opacity: 0, y: -32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeInOut" }} className={cn("inset-x-0 z-50 px-4 flex items-start justify-center sticky top-0 min-h-20 py-3", className)}>
      <div ref={menuRef} className={cn("w-full max-w-6xl flex flex-col transition-all duration-500", sticky
            ? "bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-2xl"
            : "bg-transparent border-transparent")}>
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3.5 lg:gap-6 px-3 py-2.5">
          {/* Logo */}
          <div>
            <a href="#">
              <Logo className="gap-3"/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div>
            <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
              <NavigationMenuList className="flex gap-0">
                {navigationData.map((navItem) => (<NavigationMenuItem key={navItem.title}>
                    <NavigationMenuLink href={navItem.href} className={cn("px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal", navItem.isActive ? "bg-background text-foreground" : "")}>
                      {navItem.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side */}
          <div className="flex gap-3 items-center">
            <CollaborateButton className="hidden lg:flex"/>

            {/* Mobile menu toggle */}
            <button onClick={() => setIsOpen((v) => !v)} className="lg:hidden rounded-full border border-border p-2 flex items-center justify-center transition hover:bg-muted" aria-label="Toggle menu" aria-expanded={isOpen}>
              {isOpen ? <X width={20} height={20}/> : <Menu width={20} height={20}/>}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — horizontal nav */}
        <AnimatePresence>
          {isOpen && (<motion.div key="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="lg:hidden overflow-hidden">
              <div className="border-t border-border/40 mx-3 mb-3 pt-3 flex flex-col gap-3">
                {/* Horizontal nav links */}
                <div className="flex flex-wrap gap-2">
                  {navigationData.map((item) => (<a key={item.title} href={item.href} onClick={() => setIsOpen(false)} className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all border", item.isActive
                    ? "bg-background text-foreground border-border shadow-xs"
                    : "text-muted-foreground border-transparent hover:bg-muted hover:text-foreground hover:border-border")}>
                      {item.title}
                    </a>))}
                </div>

                {/* Bottom row: CTA + socials */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <CollaborateButton />
                  <div className="flex gap-2">
                    {[
                "lucide:dribbble",
                "lucide:instagram",
                "lucide:twitter",
                "lucide:linkedin",
            ].map((icon) => (<a key={icon} href="#" className="flex items-center justify-center rounded-full border border-border hover:bg-muted transition p-2 shadow-xs">
                        <Icon icon={icon} width={14} height={14}/>
                      </a>))}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </AnimatePresence>
      </div>
    </motion.header>);
};
export default Header;
