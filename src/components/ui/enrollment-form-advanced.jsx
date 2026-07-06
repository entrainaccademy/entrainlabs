"use client";
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight } from "lucide-react";
export function EnrollmentFormAdvanced({ open, onOpenChange, autoTrigger = false, triggerDelay = 15000, scrollTrigger = false, scrollPercentage = 50, exitIntent = false, showOnce = true, storageKey = 'enrollmentPopupShown' }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    // Check if popup should be shown
    const shouldShow = useCallback(() => {
        if (!showOnce)
            return true;
        return !sessionStorage.getItem(storageKey);
    }, [showOnce, storageKey]);
    // Mark popup as shown
    const markAsShown = useCallback(() => {
        if (showOnce) {
            sessionStorage.setItem(storageKey, 'true');
        }
    }, [showOnce, storageKey]);
    // Time-based trigger
    useEffect(() => {
        if (!autoTrigger || !shouldShow())
            return;
        const timer = setTimeout(() => {
            onOpenChange(true);
            markAsShown();
        }, triggerDelay);
        return () => clearTimeout(timer);
    }, [autoTrigger, triggerDelay, shouldShow, markAsShown, onOpenChange]);
    // Scroll-based trigger
    useEffect(() => {
        if (!scrollTrigger || !shouldShow())
            return;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            if (scrollPercent >= scrollPercentage) {
                onOpenChange(true);
                markAsShown();
                window.removeEventListener('scroll', handleScroll);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTrigger, scrollPercentage, shouldShow, markAsShown, onOpenChange]);
    // Exit intent trigger (desktop only)
    useEffect(() => {
        if (!exitIntent || !shouldShow())
            return;
        const handleMouseLeave = (e) => {
            // Only trigger if mouse is leaving from the top of the viewport
            if (e.clientY <= 0) {
                onOpenChange(true);
                markAsShown();
            }
        };
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [exitIntent, shouldShow, markAsShown, onOpenChange]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Format the WhatsApp message
        const message = `*New Enrollment Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}`;
        // WhatsApp number in international format (country code + number, no spaces or symbols)
        const whatsappNumber = "919745020223";
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
        // Reset form and close dialog
        setFormData({ name: "", email: "", phone: "" });
        onOpenChange(false);
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (<Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Start Your Learning Journey
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get in touch with you on WhatsApp to help you get started.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="w-full"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="w-full"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 1234567890" value={formData.phone} onChange={handleChange} required className="w-full"/>
          </div>
          <Button type="submit" className="w-full relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 overflow-hidden cursor-pointer">
            <span className="relative z-10 transition-all duration-500">
              Send to WhatsApp
            </span>
            <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16}/>
            </span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>);
}
