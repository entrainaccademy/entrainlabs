"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, CheckCircle2, Loader2, Sparkles, AlertCircle } from "lucide-react";

export function EnrollmentFormAdvanced({
  open,
  onOpenChange,
  autoTrigger = false,
  triggerDelay = 15000,
  scrollTrigger = false,
  scrollPercentage = 50,
  exitIntent = false,
  showOnce = true,
  storageKey = "enrollmentPopupShown",
  batchType = "Offline Batch",
  batchName = "Digital Marketing Program",
  sourcePage = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Reset status when dialog is closed or reopened
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setIsSuccess(false);
        setErrorMessage("");
        setIsSubmitting(false);
      }, 300);
    }
  }, [open]);

  // Check if popup should be shown automatically
  const shouldShow = useCallback(() => {
    if (!showOnce) return true;
    return !sessionStorage.getItem(storageKey);
  }, [showOnce, storageKey]);

  // Mark popup as shown
  const markAsShown = useCallback(() => {
    if (showOnce) {
      sessionStorage.setItem(storageKey, "true");
    }
  }, [showOnce, storageKey]);

  // Time-based trigger
  useEffect(() => {
    if (!autoTrigger || !shouldShow()) return;
    const timer = setTimeout(() => {
      onOpenChange(true);
      markAsShown();
    }, triggerDelay);
    return () => clearTimeout(timer);
  }, [autoTrigger, triggerDelay, shouldShow, markAsShown, onOpenChange]);

  // Scroll-based trigger
  useEffect(() => {
    if (!scrollTrigger || !shouldShow()) return;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (scrollPercent >= scrollPercentage) {
        onOpenChange(true);
        markAsShown();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTrigger, scrollPercentage, shouldShow, markAsShown, onOpenChange]);

  // Exit intent trigger (desktop only)
  useEffect(() => {
    if (!exitIntent || !shouldShow()) return;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        onOpenChange(true);
        markAsShown();
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [exitIntent, shouldShow, markAsShown, onOpenChange]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const cleanPhone = trimmedPhone.replace(/[^0-9+]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const page = sourcePage || (typeof window !== "undefined" ? window.location.pathname : "Website");
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          batchType: batchType || "General Enrollment",
          batchName: batchName || "Digital Marketing Program",
          sourcePage: page,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not save enrollment. Please try again.");
      }

      // Success confirmed by server and Google Sheets!
      setIsSuccess(true);
      markAsShown();
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(err.message || "Failed to submit. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `*New Enrollment Confirmation*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Batch:* ${encodeURIComponent(batchName)} (${encodeURIComponent(batchType)})`;
    const whatsappNumber = "917593841013";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 shadow-2xl">
        {!isSuccess ? (
          <>
            <DialogHeader className="space-y-1.5">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0A756A]/10 text-[#0A756A] border border-[#0A756A]/20">
                  <Sparkles className="w-3 h-3" />
                  Official Application
                </span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white">
                Apply for Your Seat
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Submit your details. We will reserve your seat and reach out with the next steps.
              </DialogDescription>
            </DialogHeader>

            {errorMessage && (
              <div className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2 animate-in fade-in-50">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="h-10 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-white/10 focus-visible:ring-[#0A756A]"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="h-10 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-white/10 focus-visible:ring-[#0A756A]"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="h-10 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-white/10 focus-visible:ring-[#0A756A]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative text-xs sm:text-sm font-medium rounded-xl h-11 bg-[#0A756A] hover:bg-[#129A8C] text-white transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          /* SUCCESS STATE - Shown ONLY after Google Sheet append succeeds */
          <div className="py-4 text-center space-y-4 animate-in fade-in-50 zoom-in-95 duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold font-clash text-zinc-900 dark:text-white">
                Application Submitted!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-zinc-900 dark:text-white">{formData.name}</span>. Your details have been recorded in our official admissions sheet. Our team will get in touch with you shortly.
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <Button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Connect via WhatsApp Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="w-full py-2 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
