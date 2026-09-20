import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Check, MapPin, Users } from "lucide-react";
import { useState, type FormEvent } from "react";

import jollofImage from "@/assets/asa-jollof-prawns.jpg";
import egusiImage from "@/assets/asa-egusi-yam.jpg";
import suyaImage from "@/assets/asa-suya.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Àṣà — Contemporary West African Dining in Lagos" },
      {
        name: "description",
        content:
          "Experience smoked jollof, suya, egusi and modern West African cooking at Àṣà in Victoria Island, Lagos.",
      },
      { property: "og:title", content: "Àṣà — Contemporary West African Dining" },
      {
        property: "og:description",
        content: "Slow fire, hand-thrown ceramics and produce from the Lagos mainland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [reserved, setReserved] = useState(false);

  const submitReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReserved(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-mist">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--line)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--line)_9%,transparent)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <header className="sticky top-0 z-40 border-b border-line/40 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold" aria-label="Àṣà home">
            <span className="size-2 rounded-full bg-flame" />
            <span>Àṣà</span>
            <span className="ml-1 hidden font-meta text-[10px] uppercase text-muted-foreground sm:inline">Lagos</span>
          </a>
          <nav aria-label="Main navigation" className="hidden gap-7 text-[13px] text-muted-foreground md:flex">
            <a href="#menu" className="transition-colors hover:text-mist">Menu</a>
            <a href="#story" className="transition-colors hover:text-mist">Story</a>
            <a href="#visit" className="transition-colors hover:text-mist">Visit</a>
          </nav>
          <ReservationDialog reserved={reserved} onSubmit={submitReservation} onOpen={() => setReserved(false)} compact />
        </div>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5 py-5 sm:py-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <article className="rise-in relative order-1 overflow-hidden rounded-[26px] border border-line/50 md:col-span-7">
            <img src={jollofImage} alt="Smoked jollof rice with grilled prawns and charred peppers" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-ink/78 px-5 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
              <div className="font-meta text-[10px] uppercase text-jade">Signature · No.01</div>
              <h1 className="mt-1 max-w-[18ch] text-2xl font-bold leading-tight text-balance md:text-4xl">Smoked jollof, palm prawns, charred pepper</h1>
              <p className="mt-2 hidden max-w-[46ch] text-[13px] leading-relaxed text-muted-foreground sm:block">Wood-fired over twelve hours, finished with ground cray and a squeeze of lime.</p>
            </div>
          </article>

          <div className="order-2 flex flex-col gap-3 md:col-span-5">
            <section id="menu" className="glass-panel rise-in scroll-mt-24 rounded-[22px] p-5 [animation-delay:90ms]">
              <div className="font-meta text-[10px] uppercase text-muted-foreground">Tonight&apos;s table</div>
              <ul className="mt-3 divide-y divide-line/50">
                <MenuItem name="Suya-wagyu skewer" price="₦6,400" />
                <MenuItem name="Egusi, smoked goat" price="₦5,200" />
                <MenuItem name="Puff-puff, honey-ginger" price="₦1,800" />
              </ul>
            </section>
            <section id="story" className="glass-panel rise-in flex-1 scroll-mt-24 rounded-[22px] p-5 [animation-delay:160ms]">
              <div className="font-meta text-[10px] uppercase text-muted-foreground">The room</div>
              <h2 className="mt-2 text-xl font-semibold leading-snug text-balance">Contemporary West African dining, plated like a gallery.</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">A communal table built around hand-thrown ceramics, slow fire, and produce from the Lagos mainland.</p>
            </section>
          </div>

          <article className="rise-in relative order-3 overflow-hidden rounded-[22px] border border-line/50 md:col-span-5 [animation-delay:220ms]">
            <img src={egusiImage} alt="Egusi soup with pounded yam in a dark ceramic bowl" loading="lazy" width={928} height={720} className="aspect-[5/4] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-ink/78 px-4 py-3 text-[12px] font-medium backdrop-blur-xl">Egusi &amp; pounded yam</div>
          </article>

          <article className="rise-in relative order-4 overflow-hidden rounded-[22px] border border-line/50 md:col-span-7 [animation-delay:280ms]">
            <img src={suyaImage} alt="Grilled suya beef skewers with yaji spice" loading="lazy" width={1104} height={704} className="aspect-[13/8] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-ink/78 px-4 py-3 text-[12px] font-medium backdrop-blur-xl">Suya-wagyu, yaji spice</div>
          </article>

          <section id="visit" className="glass-panel rise-in order-5 flex scroll-mt-24 flex-col items-start gap-4 rounded-[22px] p-5 sm:flex-row sm:items-center sm:justify-between md:col-span-12 [animation-delay:340ms]">
            <div>
              <div className="flex items-center gap-2 font-meta text-[10px] uppercase text-muted-foreground"><MapPin className="size-3 text-jade" />Open Tue–Sun · 17:00–00:00</div>
              <div className="mt-1 text-lg font-semibold">14 Adeola Odeku, Victoria Island, Lagos</div>
            </div>
            <ReservationDialog reserved={reserved} onSubmit={submitReservation} onOpen={() => setReserved(false)} />
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-line/40 px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[12px] text-muted-foreground sm:flex-row">
          <span className="font-meta">Àṣà · Table 09 · +234 800 000 0000</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-mist">Instagram · @asa.dining</a>
        </div>
      </footer>
    </div>
  );
}

function MenuItem({ name, price }: { name: string; price: string }) {
  return <li className="flex items-baseline justify-between gap-5 py-2.5 text-[13px]"><span className="font-medium">{name}</span><span className="shrink-0 font-meta text-muted-foreground">{price}</span></li>;
}

function ReservationDialog({ reserved, onSubmit, onOpen, compact = false }: { reserved: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onOpen: () => void; compact?: boolean }) {
  return (
    <Dialog onOpenChange={(open) => open && onOpen()}>
      <DialogTrigger asChild>
        <Button variant="flame" size={compact ? "sm" : "lg"}>{compact ? "Reserve" : "Reserve a table"}</Button>
      </DialogTrigger>
      <DialogContent className="glass-panel max-w-md border-line bg-ink/95 text-foreground sm:rounded-[22px]">
        {reserved ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="grid size-12 place-items-center rounded-full bg-jade text-ink"><Check className="size-5" /></span>
            <DialogTitle className="mt-5 text-2xl">Your table request is in.</DialogTitle>
            <DialogDescription className="mt-2 max-w-xs">We&apos;ll confirm availability by phone shortly. We look forward to welcoming you.</DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="font-meta text-[10px] uppercase text-jade">Àṣà · Table 09</div>
              <DialogTitle className="mt-2 text-2xl">Reserve your table</DialogTitle>
              <DialogDescription>Choose your preferred evening. We&apos;ll call to confirm availability.</DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="mt-2 space-y-4">
              <label className="block text-xs font-medium text-muted-foreground">Name<Input required name="name" placeholder="Your name" className="mt-2 h-11 bg-glass/50 text-foreground" /></label>
              <label className="block text-xs font-medium text-muted-foreground">Phone<Input required name="phone" type="tel" placeholder="+234 800 000 0000" className="mt-2 h-11 bg-glass/50 text-foreground" /></label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-xs font-medium text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="size-3" />Date</span><Input required name="date" type="date" className="mt-2 h-11 bg-glass/50 text-foreground [color-scheme:dark]" /></label>
                <label className="block text-xs font-medium text-muted-foreground">Time<select required name="time" defaultValue="" className="mt-2 h-11 w-full rounded-md border border-input bg-glass/50 px-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"><option value="" disabled>Select</option><option>18:00</option><option>19:30</option><option>21:00</option></select></label>
              </div>
              <label className="block text-xs font-medium text-muted-foreground"><span className="flex items-center gap-1.5"><Users className="size-3" />Guests</span><select required name="guests" defaultValue="2" className="mt-2 h-11 w-full rounded-md border border-input bg-glass/50 px-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option></select></label>
              <Button type="submit" variant="flame" size="lg" className="mt-2 w-full">Request this table</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
