import { useState } from "react";
import { Maximize, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import badge from "@/assets/bir-seal-badge.png.asset.json";

const caption = "BIR Registered Business - Philippines";

export function BirBadge() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="mx-auto flex flex-col items-center">
        <Button
          variant="ghost"
          className="block h-auto w-[clamp(132px,14vw,180px)] rounded-none border border-primary-foreground/20 bg-primary-foreground/5 p-1.5 transition-colors hover:border-secondary hover:bg-primary-foreground/10"
          aria-label="Open BIR registration badge full screen"
          title="Open full-screen badge"
          onClick={() => setOpen(true)}
        >
          <img src={badge.url} alt="BIR Registration Seal Badge with complete registration QR code" width={657} height={364} className="block h-auto w-full" loading="lazy" />
        </Button>
        <figcaption className="mt-2 max-w-[260px] text-center text-[11px] font-semibold leading-snug text-primary-foreground/70">
          {caption}
          <Maximize aria-hidden="true" className="ml-1 inline-block size-3 shrink-0 align-[-2px] text-secondary" />
        </figcaption>
      </figure>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex h-[100dvh] max-w-none flex-col gap-4 overflow-hidden rounded-none border-0 bg-background p-4 sm:rounded-none sm:p-6">
          <DialogTitle className="display-type pr-8 text-lg font-semibold leading-snug sm:text-xl">{caption}</DialogTitle>
          <DialogDescription className="sr-only">Original BIR badge. Pinch or use the zoom controls to enlarge the QR code, and drag to move the image.</DialogDescription>
          <TransformWrapper minScale={1} maxScale={4} centerOnInit wheel={{ step: 0.1 }}>
            {({ zoomIn, zoomOut, resetTransform, state }) => (
              <>
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <Button variant="outline" size="icon" className="rounded-none" aria-label="Zoom out badge" title="Zoom out" disabled={state.scale <= 1} onClick={() => zoomOut()}><ZoomOut /></Button>
                  <Button variant="outline" size="icon" className="rounded-none" aria-label="Zoom in badge" title="Zoom in" disabled={state.scale >= 4} onClick={() => zoomIn()}><ZoomIn /></Button>
                  <Button variant="outline" size="icon" className="rounded-none" aria-label="Reset badge zoom" title="Reset zoom" onClick={() => resetTransform()}><RotateCcw /></Button>
                </div>
                <div className="min-h-0 flex-1 overflow-hidden bg-muted">
                  <TransformComponent wrapperClass="!h-full !w-full" contentClass="!h-full !w-full items-center justify-center">
                    <img src={badge.url} alt="Full-size BIR registration seal and QR code" width={657} height={364} className="h-auto max-h-full w-[657px] max-w-full cursor-grab object-contain active:cursor-grabbing" draggable={false} />
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>
        </DialogContent>
      </Dialog>
    </>
  );
}