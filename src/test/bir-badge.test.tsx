import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BirBadge } from "@/components/bir-badge";

// The badge is a small trust marker, so the full-size seal (and its scannable QR
// code) must stay reachable through the click-through lightbox.
describe("BIR registration badge", () => {
  it("shows the compliance caption", () => {
    render(<BirBadge />);
    expect(
      screen.getByText("BIR Registered Business - Philippines"),
    ).toBeInTheDocument();
  });

  it("opens the full-size badge in a modal when clicked", () => {
    render(<BirBadge />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /open bir registration badge full screen/i }));

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      dialog.querySelector('img[alt="Full-size BIR registration seal and QR code"]'),
    ).toBeInTheDocument();
  });
});
