"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const courseOptions = [
    "Performance Marketing",
    "Web Development",
    "SEO Training",
    "Social Media Marketing",
    "Content Creation",
    "Email Marketing",
];
const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
        courses: [],
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleCheckboxChange = (checked) => {
        setFormData((prev) => ({ ...prev, terms: checked }));
    };
    const handleCourseChange = (course, checked) => {
        setFormData((prev) => ({
            ...prev,
            courses: checked
                ? [...prev.courses, course]
                : prev.courses.filter((item) => item !== course),
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create WhatsApp message
        const message = `*New Inquiry from Entrain Labs Website*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interested Courses:* ${formData.courses.length > 0 ? formData.courses.join(", ") : "Not specified"}

*Message:*
${formData.message}`;
        // WhatsApp number (replace with your actual number)
        const whatsappNumber = "917593841013";
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };
    return (<div className="w-full">
      <Card className="rounded-md border-border bg-card p-5 shadow-sm animate-in fade-in slide-in-from-right-10 duration-1000 delay-100 ease-in-out fill-mode-both sm:p-6 lg:p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">
            Enroll Now
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input id="firstName" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} className="h-11 bg-background" required/>
              <Input id="lastName" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} className="h-11 bg-background" required/>
            </div>

            <Input id="email" name="email" placeholder="youremail@example.com" type="email" value={formData.email} onChange={handleChange} className="h-11 bg-background" required/>

            <Input id="phone" name="phone" placeholder="Phone number" type="tel" value={formData.phone} onChange={handleChange} className="h-11 bg-background" required/>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                Courses you&apos;re interested in
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {courseOptions.map((course) => (<Label key={course} htmlFor={course} className="flex cursor-pointer items-center gap-3 rounded-md border border-border bg-background px-3 py-3 text-sm font-normal text-foreground transition-colors hover:bg-muted/50">
                    <Checkbox id={course} checked={formData.courses.includes(course)} onCheckedChange={(checked) => handleCourseChange(course, checked === true)}/>
                    {course}
                  </Label>))}
              </div>
            </div>

            <Textarea id="message" name="message" placeholder="Tell us about your goals and what you'd like to learn" value={formData.message} onChange={handleChange} className="min-h-28 resize-none bg-background" required/>

            <div className="flex items-start gap-3">
              <Checkbox id="terms" checked={formData.terms} onCheckedChange={handleCheckboxChange} required className="mt-0.5"/>
              <Label htmlFor="terms" className="text-sm font-normal leading-relaxed text-muted-foreground">
                I agree to receive course information and updates via WhatsApp
              </Label>
            </div>

            <Button type="submit" size="lg" className="h-11 w-full rounded-md">
              Send via WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>);
};
export default ContactForm;
