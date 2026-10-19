import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import automationDesk from "@/assets/joey-automation-studio.jpg";

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

const concepts = [
  {
    number: "01",
    title: "Lead capture, with a clear next step.",
    description:
      "A sample funnel flow pairing a responsive landing page with a form, instant follow-up, and a CRM handoff.",
    flow: ["Landing page", "Lead form", "Follow-up"],
  },
  {
    number: "02",
    title: "From enquiry to booked call.",
    description:
      "A sample booking sequence connecting a new enquiry to a calendar, timely reminders, and a tidy opportunity pipeline.",
    flow: ["New enquiry", "Book a call", "Reminder"],
  },
  {
    number: "03",
    title: "Nurture that stays in sync.",
    description:
      "A sample nurture flow bringing email and SMS together with a payment step and clear CRM status updates.",
    flow: ["Welcome", "Nurture", "Payment"],
  },
];

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
                Let’s talk <ArrowDownRight aria-hidden="true" />
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
              A few concept builds inspired by the landing pages, workflows, and integrations in my
              toolkit.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {concepts.map((concept) => (
              <article
                className="flex h-full flex-col border-2 border-secondary-foreground bg-background text-foreground"
                key={concept.number}
              >
                <div
                  aria-label={`${concept.flow.join(" to ")} sample workflow`}
                  className="flow-diagram min-h-36 bg-muted px-4 py-8 sm:min-h-40 sm:px-5"
                  role="img"
                >
                  {concept.flow.map((step, index) => (
                    <div className="contents" key={step}>
                      <div
                        className={`flow-node ${index === 1 ? "flow-node-featured" : "bg-background"}`}
                      >
                        {step}
                      </div>
                      {index < concept.flow.length - 1 && (
                        <span aria-hidden="true" className="flow-arrow">
                          <ArrowRight />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="section-kicker mb-3 text-accent-foreground">
                    Concept build <span className="px-1 text-muted-foreground">/</span>{" "}
                    {concept.number}
                  </p>
                  <h3 className="display-type text-2xl font-semibold leading-tight">
                    {concept.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {concept.description}
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
        aria-labelledby="testimonial-title"
        className="anchor-offset bg-accent text-accent-foreground"
        id="testimonial"
      >
        <div className="site-wrap grid gap-7 py-14 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-20">
          <div>
            <p className="section-kicker mb-4">Kind words</p>
            <h2 className="display-type text-4xl font-semibold md:text-5xl" id="testimonial-title">
              Client testimonial
            </h2>
          </div>
          <div className="border-l-2 border-accent-foreground/40 pl-5 md:pl-8">
            <p className="display-type text-3xl font-semibold md:text-4xl">
              A good system deserves a good word.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed">
              Joey’s portfolio is growing. A client-approved testimonial can be added here when one
              is ready to share.
            </p>
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
              <a href="mailto:dyknightmare19@gmail.com">
                Email Joey <ArrowUpRight aria-hidden="true" />
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