import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { calendlyUrl, Index } from "@/routes/index";

// Both call-to-action buttons send visitors straight to the Calendly booking page,
// in a new tab, so the portfolio page they were reading stays open.
describe("Book a Free Discovery Call buttons", () => {
  it("opens the Calendly booking page in a new tab from the hero and the contact section", () => {
    expect(calendlyUrl).toBe("https://calendly.com/dyknightmare19/30min");

    const { container } = render(<Index />);

    const bookingLinks = Array.from(container.querySelectorAll("a[href]")).filter((link) =>
      link.textContent?.includes("Book a Free Discovery Call"),
    );

    expect(bookingLinks.length).toBe(2);
    for (const link of bookingLinks) {
      expect(link.getAttribute("href")).toBe(calendlyUrl);
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toContain("noopener noreferrer");
    }
  });
});
