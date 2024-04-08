import React from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { Menu, Facebook, Instagram, Linkedin, LogOut } from "lucide-react";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="link"
                    size="icon"
                    className="md:hidden fixed top-5 right-5 z-10"
                >
                    <Menu size={30} color="white" />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-800 w-1/2 px-4 ">
                <SheetHeader className="h-full w-full p-0">
                    <SheetDescription className="h-[90%] ">
                        <div className="flex flex-col py-44 gap-12 text-lg text-white text-left">
                            <a className="link" href="#home">
                                Home
                            </a>
                            <a className="link text-nowrap" href="#about-me">
                                About Me
                            </a>
                            <a className="link" href="#projects">
                                Projects
                            </a>
                        </div>
                    </SheetDescription>
                    <SheetTitle className="text-white pt-16 text-left flex flex-col gap-3">
                        <div className="flex justify-between  ">
                            <a
                                className="mobile-social-link"
                                href="https://facebook.com/zonayedRahman"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                className="mobile-social-link"
                                href="https://instagram.com/zonay.ed"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Instagram size={24} />
                            </a>

                            <a
                                className="mobile-social-link"
                                href="https://www.linkedin.com/in/zonayed-rahman-34b1aa18a/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                        <div className="text-right  text-nowrap ">
                            Zonayed Rahman
                        </div>
                    </SheetTitle>
                </SheetHeader>

                <SheetClose asChild>
                    <Button
                        variant="link"
                        type="submit"
                        className="fixed top-1 right-0 z-10 text-white"
                    >
                        <LogOut size={20} />
                    </Button>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
