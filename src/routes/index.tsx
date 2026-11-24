import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Expand,
  Mail,
  MapPin,
  Phone,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BirBadge } from "@/components/bir-badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import dentalShot1 from "@/assets/dental/dental-01.png.asset.json";
import dentalShot2 from "@/assets/dental/dental-02.png.asset.json";
import dentalShot3 from "@/assets/dental/dental-03.png.asset.json";
import dentalShot4 from "@/assets/dental/dental-04.png.asset.json";
import dentalShot5 from "@/assets/dental/dental-05.png.asset.json";
import dentalShot6 from "@/assets/dental/dental-06.png.asset.json";
import dentalShot7 from "@/assets/dental/dental-07.png.asset.json";
import dentalShot8 from "@/assets/dental/dental-08.png.asset.json";
import dentalShot9 from "@/assets/dental/dental-09.png.asset.json";
import dentalShot10 from "@/assets/dental/dental-10.png.asset.json";
import dentalShot11 from "@/assets/dental/dental-11.png.asset.json";
import dentalShot12 from "@/assets/dental/dental-12.png.asset.json";
import dentalShot13 from "@/assets/dental/dental-13.png.asset.json";
import dentalShot14 from "@/assets/dental/dental-14.png.asset.json";
import dentalShot15 from "@/assets/dental/dental-15.png.asset.json";
import dentalShot16 from "@/assets/dental/dental-16.png.asset.json";
import dentalShot17 from "@/assets/dental/dental-17.png.asset.json";
import dentalShot18 from "@/assets/dental/dental-18.png.asset.json";
import dentalShot19 from "@/assets/dental/dental-19.png.asset.json";
import dentalShot20 from "@/assets/dental/dental-20.png.asset.json";
import dentalShot21 from "@/assets/dental/dental-21.png.asset.json";
import dentalShot22 from "@/assets/dental/dental-22.png.asset.json";
import dentalShot23 from "@/assets/dental/dental-23.png.asset.json";
import dentalShot24 from "@/assets/dental/dental-24.png.asset.json";
import dentalShot25 from "@/assets/dental/dental-25.png.asset.json";
import automationDesk from "@/assets/joey-automation-studio.jpg";
import landingShot1 from "@/assets/project-showcase/anchorpoint-landing-01.png.asset.json";
import landingShot2 from "@/assets/project-showcase/anchorpoint-landing-02.png.asset.json";
import landingShot3 from "@/assets/project-showcase/anchorpoint-landing-03.png.asset.json";
import landingShot4 from "@/assets/project-showcase/anchorpoint-landing-04.png.asset.json";
import landingShot5 from "@/assets/project-showcase/anchorpoint-landing-05.png.asset.json";
import landingShot6 from "@/assets/project-showcase/anchorpoint-landing-06.png.asset.json";
import landingShot7 from "@/assets/project-showcase/anchorpoint-landing-07.png.asset.json";
import landingShot8 from "@/assets/project-showcase/anchorpoint-landing-08.png.asset.json";
import nurtureShot1 from "@/assets/project-showcase/lead-nurture-01.png.asset.json";
import nurtureShot2 from "@/assets/project-showcase/lead-nurture-02.png.asset.json";
import nurtureShot3 from "@/assets/project-showcase/lead-nurture-03.png.asset.json";
import nurtureShot4 from "@/assets/project-showcase/lead-nurture-04.png.asset.json";
import nurtureShot5 from "@/assets/project-showcase/lead-nurture-05.png.asset.json";
import nurtureShot6 from "@/assets/project-showcase/lead-nurture-06.png.asset.json";
import bookingOverview from "@/assets/project-showcase/booking-overview.png.asset.json";
import paymentOverview from "@/assets/project-showcase/payment-overview.png.asset.json";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Joey Dy — GoHighLevel Automation Specialist" },
      {
        name: "description",
        content:
          "Meet Joey Dy, a GoHighLevel automation specialist creating responsive landing pages, lead capture funnels, workflows, and booking systems.",
      },
      { property: "og:title", content: "Joey Dy — GoHighLevel Automation Specialist" },
      {
        property: "og:description",
        content:
          "GoHighLevel landing pages, lead capture funnels, CRM workflows, and booking automations by Joey Dy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

export const calendlyUrl = "https://calendly.com/joeydy-automation/30min";

const services = [
  {
    number: "01",
    title: "Landing pages & lead capture",
    description:
      "Responsive landing pages and forms that give every new lead a clear next step.",
    tag: "Pages · Forms · Funnels",
  },
  {
    number: "02",
    title: "Workflow automation",
    description:
      "Email, SMS, and pipeline automations that keep conversations and follow-ups moving.",
    tag: "Email · SMS · CRM",
  },
  {
    number: "03",
    title: "Booking systems",
    description:
      "Appointment calendars and follow-up sequences that help businesses manage new bookings.",
    tag: "Calendars · Reminders",
  },
  {
    number: "04",
    title: "Payments & nurture",
    description:
      "Stripe or PayPal connections, plus thoughtful email campaigns and nurture sequences.",
    tag: "Stripe · PayPal · Campaigns",
  },
];

export const skillBadges = [
  "GoHighLevel",
  "Workflow Automation",
  "SMS Automation",
  "Email Automation",
  "Calendar Setup",
  "Snapshot Creation",
  "Appointment Booking",
  "Funnel Building",
  "Reputation Management",
];

export type ShowcaseImage = { src: string; alt: string; title?: string; description?: string };

export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  summary: string;
  description: string;
  overview: string;
  challenges: string[];
  solution: string;
  implementation: string[];
  features: string[];
  skills: string[];
  outcome: string;
  automations: ShowcaseImage[];
  landingPages: ShowcaseImage[];
};

export const dentalCaseStudy: CaseStudy = {
  id: "dental-case-study",
  label: "Case study 01 · Healthcare",
  automations: [
    { src: dentalShot19.url, alt: "Booking confirmation", title: "Booking confirmation", description: "Sends email and SMS confirmations the moment an appointment is booked." },
    { src: dentalShot20.url, alt: "24-hour reminder", title: "24-hour reminder", description: "Reminds patients a day before their visit to cut no-shows." },
    { src: dentalShot21.url, alt: "24-hour reminder branches", title: "24-hour reminder branches", description: "Branches on patient replies to confirm or reschedule." },
    { src: dentalShot22.url, alt: "2-hour reminder", title: "2-hour reminder", description: "Final nudge shortly before the appointment." },
    { src: dentalShot23.url, alt: "No-show recovery", title: "No-show recovery", description: "Follows up with missed appointments and invites a rebooking." },
    { src: dentalShot24.url, alt: "Cancellation & reschedule", title: "Cancellation & reschedule", description: "Handles cancellations and sends a reschedule link automatically." },
    { src: dentalShot25.url, alt: "Reputation management", title: "Reputation management", description: "Requests reviews after visits and routes feedback by rating." },
  ],
  landingPages: [
    { src: dentalShot1.url, alt: "Website hero", title: "Website hero", description: "Bright Smile homepage with a clear Book an Appointment call to action." },
    { src: dentalShot2.url, alt: "Clinic highlights", title: "Clinic highlights", description: "Trust bar showing hours, experience, and patient care promises." },
    { src: dentalShot3.url, alt: "Treatments overview", title: "Treatments overview", description: "Grid of services so patients find the right treatment fast." },
    { src: dentalShot4.url, alt: "General Dentistry details", title: "General Dentistry details", description: "Popup explaining the treatment before patients book." },
    { src: dentalShot5.url, alt: "Treatment explorer", title: "Treatment explorer", description: "Explore Treatment buttons guiding visitors deeper into services." },
    { src: dentalShot6.url, alt: "Dental Implants details", title: "Dental Implants details", description: "Treatment popup with benefits and a booking prompt." },
    { src: dentalShot7.url, alt: "Why choose us", title: "Why choose us", description: "Clinic video and reasons that build trust before booking." },
    { src: dentalShot8.url, alt: "Meet our dentists", title: "Meet our dentists", description: "Team profiles that put a face to the practice." },
    { src: dentalShot9.url, alt: "Patient testimonials", title: "Patient testimonials", description: "Social proof from real patients." },
    { src: dentalShot10.url, alt: "Closing call to action", title: "Closing call to action", description: "Final booking prompt and footer contact details." },
    { src: dentalShot11.url, alt: "Booking: choose a date", title: "Booking: choose a date", description: "Calendar step connected to the clinic schedule." },
    { src: dentalShot12.url, alt: "Booking: choose a dentist", title: "Booking: choose a dentist", description: "Patients pick their preferred dentist and time." },
    { src: dentalShot13.url, alt: "Booking: patient details", title: "Booking: patient details", description: "Booking form that creates the contact in the CRM." },
    { src: dentalShot14.url, alt: "Booking confirmed", title: "Booking confirmed", description: "Confirmation screen that triggers the follow-up workflows." },
    { src: dentalShot15.url, alt: "Review funnel: rate your visit", title: "Review funnel: rate your visit", description: "Patients rate their experience after the appointment." },
    { src: dentalShot16.url, alt: "Review funnel: Google review", title: "Review funnel: Google review", description: "Happy patients are routed to leave a Google review." },
    { src: dentalShot17.url, alt: "Review funnel: private feedback", title: "Review funnel: private feedback", description: "Unhappy patients share feedback privately with the clinic." },
    { src: dentalShot18.url, alt: "Review funnel: thank you", title: "Review funnel: thank you", description: "Closing message that completes the feedback journey." },
  ],
  title: "Dental Clinic Appointment & Reputation Management System",
  summary:
    "A complete GoHighLevel implementation featuring appointment booking, automated reminders, review generation, feedback collection, workflow automation, and snapshot deployment.",
  description:
    "Designed and implemented a complete dental clinic automation system in GoHighLevel, including appointment booking, automated reminders, patient feedback collection, review generation, and reusable snapshot deployment.",
  overview:
    "Built a complete GoHighLevel automation system for a dental clinic, covering appointment booking, patient communications, reminders, feedback collection, review management, and reusable deployment through snapshots.",
  features: [
    "Online Appointment Booking",
    "Calendar Scheduling",
    "Confirmation Email Automation",
    "Confirmation SMS Automation",
    "24-Hour Appointment Reminder",
    "2-Hour Appointment Reminder",
    "Cancellation & Reschedule Workflow",
    "No-Show Follow-up Workflow",
    "Patient Feedback Funnel",
    "Google Review Routing",
    "Reputation Management System",
    "Reusable GoHighLevel Snapshot",
  ],
  challenges: [
    "Reduce manual appointment scheduling",
    "Improve patient attendance",
    "Automate follow-ups",
    "Generate more reviews",
  ],
  solution:
    "Implemented an end-to-end GoHighLevel system with automated patient communication and reputation management.",
  implementation: [
    "Landing Page Design",
    "Calendar Setup",
    "Booking Form",
    "Confirmation Emails",
    "Confirmation SMS",
    "Reminder Workflows",
    "Feedback Funnel",
    "Review Routing",
    "Snapshot Creation & Deployment",
  ],
  skills: [
    "Workflow Automation",
    "CRM Setup",
    "Calendar Configuration",
    "Email Automation",
    "SMS Automation",
    "Funnel Building",
    "Form Building",
    "Snapshot Creation",
    "Reputation Management",
    "Appointment Automation",
  ],
  outcome:
    "Created a complete patient journey automation system that reduces manual follow-up, improves appointment attendance, and streamlines review collection.",
};

export const propertyCaseStudy: CaseStudy = {
  id: "property-case-study",
  label: "Case study 02 · Property services",
  title: "Property Lead Generation & Customer Journey System",
  summary:
    "A complete GoHighLevel implementation featuring lead capture, automated nurturing, booking automation, onboarding sequences, payment workflows, and reusable automation deployment.",
  description:
    "Designed and implemented a complete property lead generation and customer journey system in GoHighLevel, including lead capture, automated nurturing, booking automation, onboarding sequences, payment workflows, and reusable automation deployment.",
  overview:
    "Built a complete GoHighLevel automation system for a property services business, covering lead generation, lead nurturing, appointment scheduling, customer onboarding, payment workflows, and customer journey automation from first inquiry through long-term engagement.",
  challenges: [
    "Turn property-owner interest into qualified leads",
    "Follow up consistently without manual emails",
    "Move leads from interest to a booked strategy call",
    "Onboard paying customers automatically",
  ],
  solution:
    "Designed a GoHighLevel funnel and workflow system where every step — sign-up, nurture, booking, and payment — automatically triggers the next.",
  implementation: [
    "Lead Magnet Landing Page",
    "Lead Capture Form",
    "Thank-You Page",
    "Multi-Day Email Nurture",
    "Booking-Based Branching",
    "Strategy Call Calendar",
    "Booking Tagging & CRM Handoff",
    "Payment Confirmation Workflow",
    "Member Onboarding & Tagging",
  ],
  features: [
    "Conversion-Focused Landing Page",
    "Lead Capture & Tagging",
    "Welcome Email Automation",
    "Timed Nurture Sequence",
    "Re-engagement Follow-Up",
    "Booking Condition Branches",
    "Strategy Call Booking",
    "Payment Confirmation Email",
    "Welcome & Onboarding Email",
    "Member Tagging in CRM",
  ],
  skills: [
    "Funnel Building",
    "Landing Page Design",
    "Form Building",
    "Email Automation",
    "Workflow Automation",
    "Calendar Configuration",
    "Pipeline & Tagging",
    "Payment Integration",
    "Customer Onboarding",
  ],
  outcome:
    "Created a hands-off customer journey that captures leads, nurtures them to a booked call, and onboards paying members automatically.",
  automations: [
    { src: nurtureShot1.url, alt: "Lead nurture: form to first email", title: "Lead nurture: form to first email", description: "New sign-ups get tagged and receive an instant welcome email." },
    { src: nurtureShot2.url, alt: "Lead nurture: timed follow-ups", title: "Lead nurture: timed follow-ups", description: "Spaced emails keep the maintenance offer top of mind." },
    { src: nurtureShot3.url, alt: "Lead nurture: day-six email", title: "Lead nurture: day-six email", description: "Mid-sequence value email with wait steps." },
    { src: nurtureShot4.url, alt: "Lead nurture: booking check", title: "Lead nurture: booking check", description: "Branches based on whether the lead booked a call." },
    { src: nurtureShot5.url, alt: "Lead nurture: re-engagement", title: "Lead nurture: re-engagement", description: "Follow-up for leads who have not taken the next step." },
    { src: nurtureShot6.url, alt: "Lead nurture: final email", title: "Lead nurture: final email", description: "Closing email and booking condition before the sequence ends." },
    { src: bookingOverview.url, alt: "Strategy call booking", title: "Strategy call booking", description: "Records new strategy-call bookings and tags the contact for handoff." },
    { src: paymentOverview.url, alt: "Payment & onboarding", title: "Payment & onboarding", description: "Confirms successful payments, sends a welcome email, and tags new members." },
  ],
  landingPages: [
    { src: landingShot1.url, alt: "Landing page hero", title: "Landing page hero", description: "Maintenance-plan offer headline aimed at rental property owners." },
    { src: landingShot2.url, alt: "Service benefits", title: "Service benefits", description: "What the plan covers, in plain language." },
    { src: landingShot3.url, alt: "Customer testimonials", title: "Customer testimonials", description: "Owner reviews that build trust in the service." },
    { src: landingShot4.url, alt: "Property testimonial", title: "Property testimonial", description: "Second testimonial paired with a property photo." },
    { src: landingShot5.url, alt: "Offer & call to action", title: "Offer & call to action", description: "The plan offer with a clear sign-up button." },
    { src: landingShot6.url, alt: "Offer recap & footer", title: "Offer recap & footer", description: "Summary of the offer and contact details." },
    { src: landingShot7.url, alt: "Sign-up form", title: "Sign-up form", description: "Lead capture form that starts the nurture workflow." },
    { src: landingShot8.url, alt: "Thank-you page", title: "Thank-you page", description: "Confirms the sign-up and sets expectations for next steps." },
  ],
};

export const caseStudies: CaseStudy[] = [dentalCaseStudy, propertyCaseStudy];


function CaseStudyArticle({ c }: { c: CaseStudy }) {
  return (
    <article
      aria-labelledby={`${c.id}-title`}
      className="anchor-offset border-2 border-secondary-foreground bg-background text-foreground"
      id={c.id}
    >
      <div className="border-b-2 border-secondary-foreground bg-primary p-6 text-primary-foreground md:p-10">
        <p className="section-kicker mb-4 flex items-center gap-2 text-secondary">
          <span aria-hidden="true" className="inline-block size-2.5 bg-accent" />
          {c.label}
        </p>
        <h3 className="display-type max-w-4xl text-3xl font-semibold leading-tight md:text-5xl" id={`${c.id}-title`}>
          {c.title}
        </h3>
        <p className="mt-5 max-w-3xl leading-relaxed text-primary-foreground/75 md:text-lg">
          {c.description}
        </p>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-2">
        <div className="bg-background p-6 md:p-8">
          <h4 className="section-kicker mb-3 text-accent-foreground">Overview</h4>
          <p className="leading-relaxed text-muted-foreground">{c.overview}</p>
        </div>
        <div className="bg-background p-6 md:p-8">
          <h4 className="section-kicker mb-3 text-accent-foreground">Challenges</h4>
          <ul className="grid gap-2">
            {c.challenges.map((item) => (
              <li className="flex gap-2 leading-relaxed" key={item}>
                <span aria-hidden="true" className="mt-2 inline-block size-2 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-background p-6 md:p-8">
          <h4 className="section-kicker mb-3 text-accent-foreground">Solution</h4>
          <p className="leading-relaxed text-muted-foreground">{c.solution}</p>
          <h4 className="section-kicker mt-6 mb-3 text-accent-foreground">Implementation</h4>
          <ol className="grid gap-2 sm:grid-cols-2">
            {c.implementation.map((item, index) => (
              <li className="flex gap-2 text-sm font-medium" key={item}>
                <span className="display-type w-6 shrink-0 font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-background p-6 md:p-8">
          <h4 className="section-kicker mb-3 text-accent-foreground">Key features</h4>
          <ul className="grid gap-2 sm:grid-cols-2">
            {c.features.map((item) => (
              <li className="flex items-start gap-2 text-sm font-medium" key={item}>
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-6 border-t-2 border-secondary-foreground p-6 md:grid-cols-[1fr_1fr] md:p-8">
        <div>
          <h4 className="section-kicker mb-3 text-accent-foreground">GoHighLevel skills demonstrated</h4>
          <ul className="flex flex-wrap gap-2">
            {c.skills.map((skill) => (
              <li className="border border-border px-3 py-1.5 text-xs font-semibold" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-secondary p-5 text-secondary-foreground">
          <h4 className="section-kicker mb-2">Project outcome</h4>
          <p className="font-semibold leading-relaxed">{c.outcome}</p>
        </div>
      </div>
      <CaseGallery
        description="The workflows that run this system behind the scenes."
        heading="Automation gallery"
        images={c.automations}
        title={`${c.title} — automation`}
      />
      <CaseGallery
        description="The pages and funnel steps customers move through."
        heading="Landing page & funnel gallery"
        images={c.landingPages}
        title={`${c.title} — landing pages`}
      />
    </article>
  );
}

function CaseGallery({
  heading,
  description,
  title,
  images,
}: {
  heading: string;
  description: string;
  title: string;
  images: ShowcaseImage[];
}) {
  return (
    <section className="border-t-2 border-secondary-foreground" aria-label={heading}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 bg-primary px-6 py-4 text-primary-foreground md:px-8">
        <h4 className="section-kicker flex items-center gap-2 text-secondary">
          <span aria-hidden="true" className="inline-block size-2.5 bg-accent" />
          {heading}
        </h4>
        <p className="text-sm text-primary-foreground/70">{description}</p>
      </div>
      <ProjectGallery project={{ title, images }} />
    </section>
  );
}

const minZoom = 1;
const maxZoom = 3;
const zoomLevels: number[] = [minZoom, 1.5, 2, maxZoom];
const screenshotAspect = 1500 / 796;

function ProjectGallery({ project }: { project: { title: string; images: ShowcaseImage[] } }) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const lightboxRef = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxSlide, setLightboxSlide] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);

  const isCarousel = project.images.length > 1;

  // On a tall phone a fit-to-width workflow screenshot is too small to read, so the lightbox
  // opens already zoomed enough to fill the screen height instead of the width.
  const fitLightboxToViewport = () => {
    const lightbox = lightboxRef.current;
    if (!lightbox) return;
    const { clientWidth, clientHeight } = lightbox;
    if (clientWidth === 0 || clientHeight <= clientWidth) return;
    const needed = (clientHeight * screenshotAspect) / clientWidth;
    setZoom(zoomLevels.find((level) => level >= needed) ?? maxZoom);
  };

  React.useEffect(() => {
    if (lightboxOpen) fitLightboxToViewport();
  }, [lightboxOpen, lightboxSlide]);

  // Once zoomed in, keep the middle of the screenshot in view instead of its top-left corner.
  React.useEffect(() => {
    if (!lightboxOpen || zoom <= minZoom) return;
    const lightbox = lightboxRef.current;
    if (!lightbox) return;
    lightbox.scrollLeft = Math.max((lightbox.scrollWidth - lightbox.clientWidth) / 2, 0);
    lightbox.scrollTop = Math.max((lightbox.scrollHeight - lightbox.clientHeight) / 2, 0);
  }, [lightboxOpen, lightboxSlide, zoom]);

  const moveCarousel = (index: number) => {
    const carousel = carouselRef.current;
    if (carousel) carousel.scrollTo({ left: index * carousel.clientWidth, behavior: "smooth" });
  };
  const moveCarouselBy = (direction: -1 | 1) => {
    moveCarousel((currentSlide + direction + project.images.length) % project.images.length);
  };
  const syncCurrentSlide = (event: React.UIEvent<HTMLDivElement>) => {
    const carousel = event.currentTarget;
    if (carousel.clientWidth === 0) return;
    const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
    setCurrentSlide(Math.min(index, project.images.length - 1));
  };

  const openLightbox = (slide: number) => {
    setLightboxSlide(slide);
    setZoom(1);
    setLightboxOpen(true);
  };
  const moveLightbox = (direction: -1 | 1) => {
    setZoom(1);
    setLightboxSlide((slide) => (slide + direction + project.images.length) % project.images.length);
  };
  const stepZoom = (direction: -1 | 1) => {
    setZoom((level) => {
      const index = Math.max(zoomLevels.indexOf(level), 0);
      const next = Math.min(Math.max(index + direction, 0), zoomLevels.length - 1);
      return zoomLevels[next] ?? maxZoom;
    });
  };

  const selectedImage = project.images[lightboxSlide];
  const firstImage = project.images[0];

  return (
    <>
      <div className="relative border-b-2 border-secondary-foreground bg-muted">
        {isCarousel ? (
          <div
            aria-label={`${project.title} screenshots`}
            className="scrollbar-none flex snap-x snap-mandatory touch-pan-x overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={syncCurrentSlide}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveCarouselBy(-1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                moveCarouselBy(1);
              }
            }}
            ref={carouselRef}
            role="region"
            tabIndex={0}
          >
            {project.images.map((image, index) => (
              <Button
                aria-label={`Enlarge screenshot ${index + 1} of ${project.images.length}: ${image.alt}`}
                className="group/image relative h-auto min-w-full snap-start snap-always overflow-hidden rounded-none border-0 p-0 text-left shadow-none hover:bg-transparent"
                key={image.src}
                onClick={() => openLightbox(index)}
                title="Open larger image"
                variant="ghost"
              >
                <img
                  alt={image.alt}
                  className="aspect-video w-full bg-muted object-contain"
                  height={796}
                  loading="lazy"
                  src={image.src}
                  width={1500}
                />
                <span className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center bg-background/90 text-foreground transition-colors group-hover/image:bg-secondary">
                  <Expand aria-hidden="true" className="size-4" />
                </span>
              </Button>
            ))}
          </div>
        ) : firstImage ? (
          <Button
            aria-label={`Open ${firstImage.alt} full screen with zoom`}
            className="group/image relative block h-auto w-full overflow-hidden rounded-none border-0 p-0 text-left shadow-none hover:bg-transparent"
            onClick={() => openLightbox(0)}
            title="Open full-screen image"
            variant="ghost"
          >
            <img
              alt={firstImage.alt}
              className="aspect-video w-full bg-muted object-contain"
              height={796}
              loading="lazy"
              src={firstImage.src}
              width={1500}
            />
            <span className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center bg-background/90 text-foreground transition-colors group-hover/image:bg-secondary">
              <ZoomIn aria-hidden="true" className="size-4" />
            </span>
          </Button>
        ) : null}

        {isCarousel ? (
          <>
            <div className="pointer-events-none absolute inset-y-0 right-3 left-3 flex items-center justify-between">
              <Button
                aria-label={`Previous ${project.title} screenshot`}
                className="pointer-events-auto hidden size-11 rounded-none border border-border bg-background/90 p-0 shadow-none hover:bg-secondary sm:inline-flex"
                onClick={() => moveCarouselBy(-1)}
                title="Previous screenshot"
                variant="outline"
              >
                <ArrowLeft aria-hidden="true" />
              </Button>
              <Button
                aria-label={`Next ${project.title} screenshot`}
                className="pointer-events-auto hidden size-11 rounded-none border border-border bg-background/90 p-0 shadow-none hover:bg-secondary sm:inline-flex"
                onClick={() => moveCarouselBy(1)}
                title="Next screenshot"
                variant="outline"
              >
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
            <div
              aria-label={`Screenshot ${currentSlide + 1} of ${project.images.length}`}
              className="flex min-h-12 items-center justify-center gap-2 px-4 py-3"
              role="group"
            >
              {project.images.map((image, index) => (
                <Button
                  aria-current={currentSlide === index ? "true" : undefined}
                  aria-label={`Show screenshot ${index + 1} of ${project.title}`}
                  className={`size-3 min-h-0 min-w-0 rounded-full p-0 shadow-none ${currentSlide === index ? "bg-accent hover:bg-accent" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
                  key={image.src}
                  onClick={() => moveCarousel(index)}
                  variant="ghost"
                />
              ))}
              <span className="sr-only" aria-live="polite">
                Screenshot {currentSlide + 1} of {project.images.length}
              </span>
            </div>
          </>
        ) : null}
        {project.images[currentSlide]?.title ? (
          <div className="border-t border-border px-6 pt-1 pb-5 text-center md:px-8">
            <p className="display-type text-lg font-semibold">{project.images[currentSlide]?.title}</p>
            <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {project.images[currentSlide]?.description}
            </p>
          </div>
        ) : null}
      </div>

      <Dialog
        open={lightboxOpen}
        onOpenChange={(open) => {
          setLightboxOpen(open);
          if (!open) setZoom(1);
        }}
      >
        <DialogContent
          className="flex h-[100dvh] max-w-none flex-col gap-3 overflow-hidden rounded-none border-0 bg-background p-4 sm:p-6"
          onOpenAutoFocus={fitLightboxToViewport}
        >
          <div className="flex min-w-0 items-center justify-between gap-4 pr-8">
            <DialogTitle className="display-type truncate text-lg font-semibold sm:text-xl">
              {project.images[lightboxSlide]?.title ?? project.title}
            </DialogTitle>
            <div className="flex shrink-0 items-center gap-2">
              {isCarousel ? (
                <span className="text-sm font-semibold text-muted-foreground">
                  {lightboxSlide + 1} / {project.images.length}
                </span>
              ) : null}
              <span className="min-w-12 text-right text-sm font-semibold tabular-nums text-muted-foreground">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                aria-label="Zoom out"
                className="size-9 rounded-none border-border p-0"
                disabled={zoom <= minZoom}
                onClick={() => stepZoom(-1)}
                title="Zoom out"
                variant="outline"
              >
                <ZoomOut aria-hidden="true" className="size-4" />
              </Button>
              <Button
                aria-label="Zoom in"
                className="size-9 rounded-none border-border p-0"
                disabled={zoom >= maxZoom}
                onClick={() => stepZoom(1)}
                title="Zoom in"
                variant="outline"
              >
                <ZoomIn aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
          <DialogDescription className="sr-only">
            Full-screen project screenshot. Click the image to zoom in or out, then scroll to move
            around the enlarged view.
          </DialogDescription>
          <div
            className="relative min-h-0 flex-1"
            onKeyDown={(event) => {
              if (!isCarousel) return;
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                moveLightbox(-1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                moveLightbox(1);
              }
            }}
          >
            <div
              className={`h-full bg-muted ${
                zoom > minZoom
                  ? "flex overflow-auto [align-items:safe_center] [justify-content:safe_center]"
                  : "overflow-hidden"
              }`}
              ref={lightboxRef}
            >
              <img
                alt={selectedImage?.alt ?? project.title}
                className={`bg-muted ${zoom > minZoom ? "max-w-none cursor-zoom-out" : "h-full w-full cursor-zoom-in object-contain"}`}
                onClick={() => setZoom((level) => (level > minZoom ? 1 : 2))}
                src={selectedImage?.src}
                style={zoom > minZoom ? { width: `${zoom * 100}%` } : undefined}
              />
            </div>
            {isCarousel ? (
              <>
                <Button
                  aria-label="Previous enlarged screenshot"
                  className="absolute top-1/2 left-3 size-11 -translate-y-1/2 rounded-none border border-border bg-background/90 p-0 hover:bg-secondary"
                  onClick={() => moveLightbox(-1)}
                  variant="outline"
                >
                  <ArrowLeft aria-hidden="true" />
                </Button>
                <Button
                  aria-label="Next enlarged screenshot"
                  className="absolute top-1/2 right-3 size-11 -translate-y-1/2 rounded-none border border-border bg-background/90 p-0 hover:bg-secondary"
                  onClick={() => moveLightbox(1)}
                  variant="outline"
                >
                  <ArrowRight aria-hidden="true" />
                </Button>
              </>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Index() {
  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="site-wrap flex min-h-16 flex-wrap items-center justify-between gap-x-8 gap-y-3 py-3">
          <a
            aria-label="Joey Dy, home"
            className="display-type inline-flex items-center gap-2 text-xl font-bold text-foreground"
            href="#home"
          >
            <span className="bg-primary px-2 py-1 text-sm leading-none text-primary-foreground">
              JD
            </span>
            <span>
              Joey Dy<span className="text-accent">.</span>
            </span>
          </a>
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold"
          >
            <a className="transition-colors hover:text-accent" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-accent" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-accent" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-accent" href="#contact">
              Contact <ArrowUpRight aria-hidden="true" className="inline size-3.5" />
            </a>
          </nav>
        </div>
      </header>

      <section aria-labelledby="home-title" className="bg-background" id="home">
        <div className="site-wrap pt-16 pb-8 md:pt-24 md:pb-12">
          <div className="arrive grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="section-kicker mb-5 flex items-center gap-2 text-accent-foreground">
                <span aria-hidden="true" className="inline-block size-2.5 bg-accent" />
                Joey Dy · Daraga, Albay
              </p>
              <h1
                className="display-type max-w-5xl text-5xl font-semibold leading-[0.92] md:text-7xl lg:text-8xl"
                id="home-title"
              >
                GoHighLevel Automation Specialist<span className="text-accent">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                I build automated booking systems, workflow automations, lead management processes,
                and customer follow-up systems using GoHighLevel.
              </p>
              <ul aria-label="Skills" className="mt-6 flex max-w-3xl flex-wrap gap-2">
                {skillBadges.map((skill) => (
                  <li
                    className="border border-foreground bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="w-fit rounded-none px-6 py-6 text-sm font-bold uppercase">
              <a href={calendlyUrl} rel="noopener noreferrer" target="_blank">
                Book a Free Discovery Call <ArrowDownRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <figure className="relative mt-12 overflow-hidden border-y border-border md:mt-16">
            <img
              alt="A laptop with an automation workflow beside a phone displaying a sample landing page"
              className="h-[17rem] w-full object-cover object-center md:h-[27rem]"
              height={1056}
              src={automationDesk}
              width={1600}
              fetchPriority="high"
            />
            <figcaption className="absolute bottom-3 left-3 bg-secondary px-3 py-2 text-xs font-bold uppercase md:bottom-5 md:left-5">
              Pages · Workflows · Follow-through
            </figcaption>
          </figure>
          <div className="flex flex-wrap items-center justify-between gap-4 py-5 text-sm font-semibold">
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 text-accent" /> Daraga, Albay
            </p>
            <a
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              href="#services"
            >
              Explore services <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-title" className="anchor-offset bg-background" id="featured">
        <div className="site-wrap pb-16 md:pb-24">
          <p className="section-kicker mb-4 text-accent-foreground">Featured Case Studies</p>
          <h2 className="sr-only" id="featured-title">Featured Case Studies</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((study) => (
              <a
                className="group flex flex-col gap-6 border-2 border-foreground bg-secondary p-6 text-secondary-foreground transition-colors hover:bg-accent md:p-8"
                href={`#${study.id}`}
                key={study.id}
              >
                <div className="flex-1">
                  <p className="section-kicker mb-3">{study.label}</p>
                  <h3 className="display-type text-2xl font-semibold leading-tight md:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 leading-relaxed">{study.summary}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase">
                  View case study <ArrowDownRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="services-title"
        className="anchor-offset bg-primary text-primary-foreground"
        id="services"
      >
        <div className="site-wrap py-16 md:py-24">
          <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="section-kicker mb-4 text-secondary">What I do</p>
              <h2 className="section-heading" id="services-title">
                Make the busywork
                <br />
                work for you.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-primary-foreground/75 md:justify-self-end md:text-lg">
              Practical GoHighLevel builds, designed to bring your pages, leads, conversations, and
              calendar together.
            </p>
          </div>
          <div className="grid border-t border-primary-foreground/25 md:grid-cols-2 md:gap-x-12">
            {services.map((service) => (
              <article
                className="grid gap-x-4 gap-y-2 border-b border-primary-foreground/25 py-7 sm:grid-cols-[2.5rem_1fr] md:py-8"
                key={service.number}
              >
                <span className="display-type text-sm font-semibold text-secondary">
                  {service.number}
                </span>
                <div>
                  <h3 className="display-type text-2xl font-semibold md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-primary-foreground/75">
                    {service.description}
                  </p>
                  <p className="section-kicker mt-4 text-primary-foreground/60">{service.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        className="anchor-offset bg-secondary text-secondary-foreground"
        id="work"
      >
        <div className="site-wrap py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
            <div>
              <p className="section-kicker mb-4">Selected work</p>
              <h2 className="section-heading" id="work-title">
                Built to connect
                <br />
                the next step.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed md:text-base">
              Two complete client systems — automation, landing pages, funnels, and the customer journey that ties them together.
            </p>
          </div>

          <div className="grid gap-12">
            {caseStudies.map((study) => (
              <CaseStudyArticle c={study} key={study.id} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-title" className="anchor-offset bg-background" id="about">
        <div className="site-wrap grid gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:py-24">
          <div>
            <p className="section-kicker mb-4 text-accent-foreground">About & résumé</p>
            <h2 className="section-heading" id="about-title">
              Thoughtful
              <br />
              systems.
              <br />
              Human follow-up.
            </h2>
          </div>
          <div className="md:pt-2">
            <h3 className="display-type text-2xl font-semibold">Professional summary</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Motivated Marketing Automation Specialist with hands-on experience in GoHighLevel,
              specializing in responsive landing pages, automated workflows, and payment
              integrations. Skilled in lead capture funnels, email and SMS campaigns, booking
              automations, and Stripe/PayPal setup. Focused on continuous learning, A/B testing, and
              optimization to build efficient, conversion-focused systems that help businesses grow.
            </p>

            <div className="mt-10 border-t border-border">
              <div className="grid gap-3 border-b border-border py-5 sm:grid-cols-[9rem_1fr]">
                <h3 className="section-kicker pt-1">Technical skills</h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Landing pages & lead capture",
                    "Email, SMS & pipeline workflows",
                    "Stripe & PayPal integration",
                    "Email campaign optimization",
                    "CRM pipeline management",
                  ].map((skill) => (
                    <li className="border border-border px-3 py-2 text-sm font-medium" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-3 border-b border-border py-5 sm:grid-cols-[9rem_1fr]">
                <h3 className="section-kicker pt-1">Education</h3>
                <p className="font-semibold">
                  Bachelor of Science in Civil Engineering{" "}
                  <span className="font-normal text-muted-foreground">
                    · Divine Word College of Legazpi · 2023
                  </span>
                </p>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr]">
                <h3 className="section-kicker pt-1">Languages</h3>
                <p className="font-semibold">
                  Filipino <span className="px-2 text-muted-foreground">/</span> English
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="anchor-offset bg-primary text-primary-foreground"
        id="contact"
      >
        <div className="site-wrap pt-16 pb-10 md:pt-24 md:pb-12">
          <p className="section-kicker mb-4 text-secondary">Get in touch</p>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="section-heading" id="contact-title">
                Have a workflow
                <br />
                in mind?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
                Tell me what you’re trying to improve. Let’s make the next step easier.
              </p>
            </div>
            <Button
              asChild
              className="w-fit rounded-none px-6 py-6 text-sm font-bold uppercase"
              variant="secondary"
            >
              <a href={calendlyUrl} rel="noopener noreferrer" target="_blank">
                Book a Free Discovery Call <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 border-t border-primary-foreground/25 pt-6 sm:grid-cols-2 md:mt-16">
            <a
              className="inline-flex items-center gap-3 break-all text-base font-semibold transition-colors hover:text-secondary md:text-lg"
              href="mailto:dyknightmare19@gmail.com"
            >
              <Mail aria-hidden="true" className="size-5 shrink-0 text-secondary" />
              dyknightmare19@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-3 text-base font-semibold transition-colors hover:text-secondary md:text-lg"
              href="tel:+639205570146"
            >
              <Phone aria-hidden="true" className="size-5 shrink-0 text-secondary" />
              +63 920 557 0146
            </a>
          </div>
          <div className="mt-8 flex justify-center md:mt-10">
            <BirBadge />
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="site-wrap flex flex-wrap items-center justify-between gap-3 border-t border-primary-foreground/25 py-5 text-sm">
          <a className="display-type font-semibold" href="#home">
            Joey Dy<span className="text-accent">.</span>
          </a>
          <p>GoHighLevel Automation Specialist · Daraga, Albay</p>
          <a
            aria-label="Back to top"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-secondary"
            href="#home"
          >
            Back to top <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}