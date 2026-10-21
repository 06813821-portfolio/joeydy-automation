import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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

export const projects = [
  {
    number: "01",
    title: "Lead Generation Funnel",
    category: "Landing Page • Lead Capture • Conversion Optimization",
    description:
      "A maintenance-plan lead magnet landing page built to explain the offer clearly and turn property-owner interest into new leads.",
    images: [
      { src: landingShot1.url, alt: "AnchorPoint maintenance-plan landing page hero" },
      { src: landingShot2.url, alt: "Maintenance plan service benefits section" },
      { src: landingShot3.url, alt: "Maintenance plan customer testimonials section" },
      { src: landingShot4.url, alt: "Second customer testimonial and property image" },
      { src: landingShot5.url, alt: "Maintenance plan offer and call to action" },
      { src: landingShot6.url, alt: "Offer recap and footer section" },
      { src: landingShot7.url, alt: "Maintenance plan sign-up form" },
      { src: landingShot8.url, alt: "Maintenance plan thank-you page" },
    ],
  },
  {
    number: "02",
    title: "Email Nurture & Lead Follow-Up Automation",
    category: "Email Marketing • Lead Nurturing • Customer Engagement",
    description:
      "A multi-day follow-up sequence that welcomes new leads, sends helpful nurture emails, and branches based on booking activity.",
    images: [
      { src: nurtureShot1.url, alt: "Lead nurture workflow from form submission to first follow-up" },
      { src: nurtureShot2.url, alt: "Lead nurture workflow with timed email follow-ups" },
      { src: nurtureShot3.url, alt: "Lead nurture sequence with day-six email and wait steps" },
      { src: nurtureShot4.url, alt: "Lead nurture sequence with booking-condition branches" },
      { src: nurtureShot5.url, alt: "Lead nurture workflow with re-engagement follow-up" },
      { src: nurtureShot6.url, alt: "Final nurture email and booking-condition steps" },
    ],
  },
  {
    number: "03",
    title: "Booking & Appointment Automation System",
    category: "Calendar Integration • Automated Reminders • Lead Qualification",
    description:
      "An appointment workflow that records new strategy-call bookings and applies a dedicated tag for a clean CRM handoff.",
    images: [{ src: bookingOverview.url, alt: "Rental strategy call booking workflow" }],
  },
  {
    number: "04",
    title: "Automated Payment & Customer Onboarding Workflow",
    category: "Payment Processing • Customer Journey • Workflow Automation",
    description:
      "A successful-payment flow that sends a confirmation and welcome email, then updates the customer record with a member tag.",
    images: [{ src: paymentOverview.url, alt: "Rental maintenance payment workflow" }],
  },
];

type Project = (typeof projects)[number];

const minZoom = 1;
const maxZoom = 3;
const zoomLevels: number[] = [minZoom, 1.5, 2, maxZoom];
const screenshotAspect = 1500 / 796;

function ProjectGallery({ project }: { project: Project }) {
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
              {project.title}
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
                GoHighLevel automation specialist
              </p>
              <h1
                className="display-type max-w-4xl text-6xl font-semibold leading-[0.88] md:text-8xl lg:text-9xl"
                id="home-title"
              >
                Joey Dy<span className="text-accent">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                I build landing pages and simple, connected systems that help businesses capture
                leads, follow up, and book with confidence.
              </p>
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
              A lead-generation landing page and connected GoHighLevel workflows for AnchorPoint Rentals & Upkeep.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                className="grid min-w-0 border-2 border-secondary-foreground bg-background text-foreground lg:grid-cols-[1.35fr_0.65fr]"
                key={project.number}
              >
                <ProjectGallery project={project} />
                <div className="flex min-w-0 flex-col justify-center p-5 md:p-6">
                  <p className="section-kicker mb-3 text-accent-foreground">
                    Project <span className="px-1 text-muted-foreground">/</span> {project.number}
                  </p>
                  <h3 className="display-type text-2xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="section-kicker mt-3 text-muted-foreground">{project.category}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
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
          <div className="mt-10 flex justify-center md:mt-12">
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