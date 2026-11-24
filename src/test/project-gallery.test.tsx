import { describe, expect, it } from "vitest";

import { anchorPointCaseStudy, caseStudies, dentalCaseStudy } from "@/routes/index";

describe("Featured case studies", () => {
  it("keeps exactly the dental and AnchorPoint case studies, in that order", () => {
    expect(caseStudies.map((c) => c.title)).toEqual([
      "Dental Clinic Appointment & Reputation Management System",
      "AnchorPoint Property Lead Generation & Customer Journey System",
    ]);
  });

  it("files the 25 dental screenshots as 7 workflows and 18 pages", () => {
    expect(dentalCaseStudy.automations.length).toBe(7);
    expect(dentalCaseStudy.landingPages.length).toBe(18);
  });

  it("files AnchorPoint's 8 workflows and 8 landing pages under its case study", () => {
    expect(anchorPointCaseStudy.automations.length).toBe(8);
    expect(anchorPointCaseStudy.landingPages.length).toBe(8);
  });

  it("gives every gallery screenshot a title and short description", () => {
    for (const c of caseStudies) {
      for (const image of [...c.automations, ...c.landingPages]) {
        expect(image.title?.length).toBeGreaterThan(0);
        expect(image.description?.length).toBeGreaterThan(0);
      }
    }
  });
});
