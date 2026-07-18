"use client";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
const ContactInfo = () => {
    return (<div className="flex min-w-0 flex-col gap-6 lg:gap-8">
      <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <Badge variant="outline" className="h-auto w-fit bg-background px-3 py-1 text-sm font-normal">
          Get in Touch
        </Badge>
        <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Ready to kickstart your digital marketing career?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Join Kerala&apos;s leading digital marketing training institute. Learn from industry experts, work on live projects, and transform your career with hands-on experience.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-md border border-border bg-muted shadow-sm animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="relative aspect-[16/10] min-h-72">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.284749!2d76.0742557!3d11.1217327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6499ebbb29b29%3A0xfed54ed58560df2e!2sEntrain%20Labs!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"/>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                <MapPin className="size-4"/>
              </span>
              <div>
                <p className="max-w-sm text-sm font-medium leading-relaxed sm:text-base drop-shadow-lg">
                  Entrain labs, Veemboor - Mariyad School Rd, Manjeri, Kerala 673642
                </p>
                <a href="https://www.google.com/maps/place/Entrain+Labs/@11.1217327,76.0742557,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6499ebbb29b29:0xfed54ed58560df2e!8m2!3d11.1217327!4d76.0742557!16s%2Fg%2F11zktynfv3?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm text-white drop-shadow-lg transition-colors hover:text-white/90 pointer-events-auto">
                  View on map
                  <ExternalLink className="size-3.5"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 ease-in-out fill-mode-both">
        <a href="mailto:entrainlabs@gmail.com" className="group rounded-md border border-border bg-background p-4 transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-muted text-foreground">
              <Mail className="size-4"/>
            </span>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="truncate text-sm font-medium text-foreground sm:text-base">
                entrainlabs@gmail.com
              </p>
            </div>
          </div>
        </a>
        <a href="tel:+917593841013" className="group rounded-md border border-border bg-background p-4 transition-colors hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-muted text-foreground">
              <Phone className="size-4"/>
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
              <p className="text-sm font-medium text-foreground sm:text-base">
                +91 75938 41013
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>);
};
export default ContactInfo;
