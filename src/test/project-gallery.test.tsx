import { describe, expect, it } from "vitest";

import { projects } from "@/routes/index";

// Carousels only make sense where there is more than one screenshot; single-shot
// projects render one clickable image that opens the full-screen zoomable lightbox.
describe("Project showcase screenshots", () => {
  const byNumber = (number: string) => projects.find((project) => project.number === number);

  it("gives the multi-screenshot projects a carousel", () => {
    expect(byNumber("01")?.images.length).toBe(8);
    expect(byNumber("02")?.images.length).toBe(6);
  });

  it("keeps the single-screenshot projects to one image", () => {
    expect(byNumber("03")?.images.length).toBe(1);
    expect(byNumber("04")?.images.length).toBe(1);
  });

  it("gives every screenshot a source and a description", () => {
    for (const project of projects) {
      for (const image of project.images) {
        expect(image.src.length).toBeGreaterThan(0);
        expect(image.alt.length).toBeGreaterThan(0);
      }
    }
  });

  // Each card heading is client-specified copy: title first, subtitle of services underneath.
  it("shows the service-focused title and subtitle on every project card", () => {
    expect(projects.map((project) => [project.title, project.category])).toEqual([
      ["Lead Generation Funnel", "Landing Page • Lead Capture • Conversion Optimization"],
      [
        "Email Nurture & Lead Follow-Up Automation",
        "Email Marketing • Lead Nurturing • Customer Engagement",
      ],
      [
        "Booking & Appointment Automation System",
        "Calendar Integration • Automated Reminders • Lead Qualification",
      ],
      [
        "Automated Payment & Customer Onboarding Workflow",
        "Payment Processing • Customer Journey • Workflow Automation",
      ],
    ]);
  });
});
