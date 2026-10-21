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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
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
import bookingDetail1 from "@/assets/project-showcase/booking-actions.png.asset.json";
import bookingDetail2 from "@/assets/project-showcase/booking-finish.png.asset.json";
import paymentDetail1 from "@/assets/project-showcase/payment-actions.png.asset.json";
import paymentDetail2 from "@/assets/project-showcase/payment-finish.png.asset.json";
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

const projects = [
  {
    number: "01",
    title: "AnchorPoint Rentals & Upkeep",
    category: "Landing page · Lead capture",
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
    title: "Lead magnet nurture",
    category: "Email · CRM automation",
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
    title: "Rental strategy call booking",
    category: "Appointment · Workflow",
    description:
      "An appointment workflow that records new strategy-call bookings and applies a dedicated tag for a clean CRM handoff.",
    images: [
      { src: bookingOverview.url, alt: "Rental strategy call booking workflow overview" },
      { src: bookingDetail1.url, alt: "Rental strategy call booking workflow action detail" },
      { src: bookingDetail2.url, alt: "Rental strategy call workflow tag and completion detail" },
    ],
  },
  {
    number: "04",
    title: "Rental maintenance payment",
    category: "Payments · Customer onboarding",
    description:
      "A successful-payment flow that sends a confirmation and welcome email, then updates the customer record with a member tag.",
    images: [
      { src: paymentOverview.url, alt: "Rental maintenance payment workflow overview" },
      { src: paymentDetail1.url, alt: "Payment confirmation and welcome email workflow detail" },
      { src: paymentDetail2.url, alt: "New member tag and payment workflow completion detail" },
    ],
  },
];

type Project = (typeof projects)[number];

function ProjectGallery({ project }: { project: Project }) {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxSlide, setLightboxSlide] = React.useState(0);

  React.useEffect(() => {
    if (!carouselApi) return;
    const syncSlide = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    syncSlide();
    carouselApi.on("select", syncSlide);
    return () => {
      carouselApi.off("select", syncSlide);
    };
  }, [carouselApi]);

  const openLightbox = (slide: number) => {
    setLightboxSlide(slide);
    setLightboxOpen(true);
  };
  const moveLightbox = (direction: -1 | 1) => {
    setLightboxSlide((slide) => (slide + direction + project.images.length) % project.images.length);
  };
  const selectedImage = project.images[lightboxSlide];

  return (
    <>
      <div className="relative border-b-2 border-secondary-foreground bg-muted">
        <Carousel
          className="group"
          opts={{ loop: true }}
          setApi={setCarouselApi}
          aria-label={`${project.title} screenshots`}
        >
          <CarouselContent className="ml-0">
            {project.images.map((image, index) => (
              <CarouselItem className="basis-full pl-0" key={image.src}>
                <Button
                  aria-label={`Enlarge screenshot ${index + 1} of ${project.images.length}: ${image.alt}`}
                  className="group/image relative block h-auto w-full overflow-hidden rounded-none border-0 p-0 text-left shadow-none hover:bg-transparent"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button
            aria-label={`Previous ${project.title} screenshot`}
            className="absolute top-1/2 left-3 hidden size-11 -translate-y-1/2 rounded-none border border-border bg-background/90 p-0 shadow-none hover:bg-secondary sm:inline-flex"
            onClick={() => carouselApi?.scrollPrev()}
            title="Previous screenshot"
            variant="outline"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            aria-label={`Next ${project.title} screenshot`}
            className="absolute top-1/2 right-3 hidden size-11 -translate-y-1/2 rounded-none border border-border bg-background/90 p-0 shadow-none hover:bg-secondary sm:inline-flex"
            onClick={() => carouselApi?.scrollNext()}
            title="Next screenshot"
            variant="outline"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </Carousel>
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
              onClick={() => carouselApi?.scrollTo(index)}
              variant="ghost"
            />
          ))}
          <span className="sr-only" aria-live="polite">
            Screenshot {currentSlide + 1} of {project.images.length}
          </span>
        </div>
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-6xl gap-3 border-2 border-foreground bg-background p-4 sm:p-6">
          <div className="flex min-w-0 items-center justify-between gap-12 pr-8">
            <DialogTitle className="display-type truncate text-lg font-semibold sm:text-xl">
              {project.title}
            </DialogTitle>
            <span className="shrink-0 text-sm font-semibold text-muted-foreground">
              {lightboxSlide + 1} / {project.images.length}
            </span>
          </div>
          <DialogDescription className="sr-only">
            Enlarged project screenshot. Use the previous and next buttons to browse the images.
          </DialogDescription>
          <div className="relative bg-muted">
            <img
              alt={selectedImage?.alt ?? project.title}
              className="aspect-video max-h-[70vh] w-full bg-muted object-contain"
              src={selectedImage?.src}
            />
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Index() {
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
              <a href="#contact">
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

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                className="flex h-full min-w-0 flex-col border-2 border-secondary-foreground bg-background text-foreground"
                key={project.number}
              >
                <ProjectGallery project={project} />
                <div className="flex flex-1 flex-col p-5 md:p-6">
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
        <div className="site-wrap py-16 md:py-24">
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
              <a href="mailto:dyknightmare19@gmail.com?subject=Free%20Discovery%20Call">
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