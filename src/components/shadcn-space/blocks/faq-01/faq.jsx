import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, HelpCircle, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
const FAQ_DATA = [
    {
        question: "Do I need prior experience in digital marketing?",
        answer: "No prior experience is required. Our beginner-friendly approach is designed for all skill levels. We start with fundamentals and gradually build up to advanced concepts.",
    },
    {
        question: "What makes Entrain Labs different from other courses?",
        answer: "Unlike traditional courses that focus only on theory, we emphasize hands-on learning with real projects. You'll work on actual campaigns and build a portfolio that showcases your skills to potential employers.",
    },
    {
        question: "Will I get job placement assistance?",
        answer: "Yes! We provide comprehensive career guidance and support, including resume building, interview preparation, and connections with our industry partners.",
    },
    {
        question: "How long is the course?",
        answer: "Our comprehensive digital marketing program typically runs for 3-6 months, depending on the track you choose. We offer flexible schedules to accommodate working professionals and students.",
    },
    {
        question: "What tools and platforms will I learn?",
        answer: "You'll gain hands-on experience with industry-standard tools including Google Ads, Facebook Ads Manager, Google Analytics, SEMrush, Mailchimp, WordPress, and more.",
    },
];
export default function Faq() {
    return (<section className="relative overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:py-24 py-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="lg:sticky lg:top-24 h-fit animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <div className="rounded-md border border-border bg-muted/30 p-6 sm:p-8">
              <Badge variant="outline" className="text-sm h-auto py-1 px-3 bg-background">
                FAQs
              </Badge>
              <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
                Got questions? We&apos;ve got answers ready
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Everything you need to know before joining Entrain Labs, from experience level to tools, projects, and career support.
              </p>
              <Button className={cn("relative mt-8 text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden cursor-pointer")}>
                <a href="#contact" className="relative z-10 transition-all duration-500">
                  Ask a question
                </a>
                <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                  <ArrowUpRight size={16}/>
                </span>
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-border bg-card p-2 shadow-sm animate-in fade-in slide-in-from-right-10 duration-1000 delay-150 ease-in-out fill-mode-both">
            <Accordion className="w-full flex flex-col gap-2">
              {FAQ_DATA.map((faq, index) => (<AccordionItem key={`item-${index}`} value={`item-${index}`} className={cn("group/item rounded-sm border border-transparent bg-background px-4 py-3 transition-colors data-[open]:border-border data-[open]:bg-muted/45 sm:px-5 sm:py-4", index === 0 && "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both", index === 1 && "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both", index === 2 && "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both", index === 3 && "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 fill-mode-both", index === 4 && "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both")}>
                  <AccordionTrigger className="gap-4 p-0 text-base font-medium leading-snug text-foreground hover:no-underline sm:text-lg **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                    <span className="flex min-w-0 items-start gap-3">
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-data-[open]/item:bg-background group-data-[open]/item:text-foreground">
                        <HelpCircle className="size-4"/>
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground">
                      <PlusIcon className="w-4 h-4 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45"/>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-11 pr-2 pt-3 pb-1 text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>);
}
