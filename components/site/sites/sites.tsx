import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Pure-markup "screenshots" of four easyWebBuilder demo sites.
 * They are designed on a fixed 1000px canvas and scaled down by <SiteCanvas>,
 * so they deliberately use fixed colours (they are not part of the theme).
 */

export type SiteId = "hengameh" | "nilou" | "arman" | "zist" | "raha";

const W = "w-[1000px]";

function Bar({
  w,
  h = 10,
  c = "bg-black/10",
  className = "",
}: {
  w: string;
  h?: number;
  c?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-full ${c} ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

/* ------------------------------ NILOU (store) ------------------------------ */
function Nilou() {
  const products = [
    { n: "Sand Vase", p: "$48", g: "from-[#e8b98a] to-[#c98a5b]" },
    { n: "Olive Bowl", p: "$32", g: "from-[#b9c4a0] to-[#8a9a6b]" },
    { n: "Terra Cup Set", p: "$56", g: "from-[#d9a38a] to-[#b5654a]" },
    { n: "Linen Plate", p: "$28", g: "from-[#efe0c8] to-[#d6bd94]" },
  ];
  return (
    <div className={`${W} bg-[#fbf3e4] text-[#3b2a1e]`}>
      <div className="flex items-center justify-between px-14 py-7 text-[17px] font-semibold">
        <span className="text-[26px] font-extrabold tracking-tight">nilou</span>
        <div className="flex gap-9 text-[#6b5444]">
          <span>Shop</span>
          <span>Collections</span>
          <span>Story</span>
          <span>Journal</span>
        </div>
        <span className="rounded-full bg-[#3b2a1e] px-5 py-2.5 text-[15px] text-[#fbf3e4]">
          Cart · 2
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-10 px-14 pb-16 pt-8">
        <div>
          <span className="rounded-full bg-[#f2dcae] px-4 py-1.5 text-[14px] font-semibold">
            New · Spring ’26
          </span>
          <h3 className="mt-6 text-[68px] font-extrabold leading-[1.02] tracking-tight">
            Handmade
            <br />
            ceramics, <span className="text-[#c0652d]">delivered</span> to your
            door
          </h3>
          <p className="mt-6 max-w-[420px] text-[19px] leading-relaxed text-[#6b5444]">
            Small-batch pieces shaped by hand in Isfahan and shipped worldwide
            in 3 days.
          </p>
          <div className="mt-8 flex gap-3">
            <span className="rounded-full bg-[#f2a93b] px-8 py-4 text-[17px] font-bold">
              Shop now
            </span>
            <span className="rounded-full border-2 border-[#3b2a1e]/30 px-8 py-4 text-[17px] font-bold">
              Our story
            </span>
          </div>
          <div className="mt-10 flex gap-10 text-[15px] text-[#6b5444]">
            <span>
              <b className="block text-[30px] text-[#3b2a1e]">12k+</b>pieces
              sold
            </span>
            <span>
              <b className="block text-[30px] text-[#3b2a1e]">4.9★</b>reviews
            </span>
          </div>
        </div>
        <div className="relative h-[480px]">
          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#f6c27a] via-[#e49a55] to-[#b5654a]" />
          <div className="absolute bottom-10 start-12 h-[300px] w-[190px] rounded-[90px_90px_40px_40px] bg-gradient-to-b from-[#fbf3e4] to-[#e8cfa5] shadow-2xl" />
          <div className="absolute bottom-10 end-14 h-[200px] w-[170px] rounded-[30px_30px_80px_80px] bg-gradient-to-b from-[#7e5a3f] to-[#4e3424] shadow-2xl" />
          <div className="absolute end-8 top-8 rounded-2xl bg-white/90 px-5 py-3 text-[15px] font-bold shadow-lg">
            Free shipping over $60
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-y border-[#3b2a1e]/10 bg-[#f6ead2] px-14 py-6 text-[16px] font-semibold">
        {["Vases", "Bowls", "Cups", "Plates", "Gift sets", "Sale"].map((c) => (
          <span key={c} className="rounded-full bg-white/70 px-5 py-2">
            {c}
          </span>
        ))}
      </div>
      <div className="px-14 py-16">
        <h4 className="text-[44px] font-extrabold tracking-tight">
          Bestsellers this month
        </h4>
        <div className="mt-10 grid grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.n} className="rounded-3xl bg-white p-4 shadow-sm">
              <div
                className={`aspect-square rounded-2xl bg-gradient-to-br ${p.g}`}
              />
              <p className="mt-4 text-[18px] font-bold">{p.n}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[17px] font-semibold text-[#c0652d]">
                  {p.p}
                </span>
                <span className="grid size-9 place-items-center rounded-full bg-[#f2a93b] text-[20px] font-bold">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-14 grid grid-cols-[1.2fr_1fr] items-center gap-8 rounded-[40px] bg-[#3b2a1e] p-12 text-[#fbf3e4]">
        <div>
          <p className="text-[42px] font-extrabold leading-tight">
            Join the Clay Club
          </p>
          <p className="mt-3 text-[18px] text-[#d9c7ae]">
            10% off your first order and early access to every drop.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="h-14 flex-1 rounded-full bg-white/10" />
          <span className="rounded-full bg-[#f2a93b] px-7 py-4 font-bold text-[#3b2a1e]">
            Join
          </span>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-4 gap-8 border-t border-[#3b2a1e]/10 px-14 py-12 text-[16px] text-[#6b5444]">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Bar w="90px" c="bg-[#3b2a1e]/40" />
            <Bar w="120px" />
            <Bar w="100px" />
            <Bar w="110px" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ ARMAN (corporate) ------------------------------ */
function Arman() {
  return (
    <div className={`${W} bg-white text-[#0f1b33]`}>
      <div className="flex items-center justify-between px-14 py-7 text-[17px] font-semibold">
        <span className="flex items-center gap-2 text-[24px] font-extrabold">
          <span className="size-8 rounded-lg bg-[#1b4dff]" />
          Arman
        </span>
        <div className="flex gap-9 text-[#51607d]">
          <span>Services</span>
          <span>Industries</span>
          <span>About</span>
          <span>Careers</span>
        </div>
        <span className="rounded-xl bg-[#0f1b33] px-5 py-2.5 text-[15px] text-white">
          Request a quote
        </span>
      </div>
      <div className="relative mx-6 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0f1b33] via-[#13286b] to-[#1b4dff] px-14 py-20 text-white">
        <div className="absolute -end-20 -top-20 size-[420px] rounded-full bg-white/10 blur-2xl" />
        <span className="rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-semibold">
          Logistics & supply chain · Since 2004
        </span>
        <h3 className="mt-7 max-w-[720px] text-[70px] font-extrabold leading-[1.03] tracking-tight">
          Engineering the next decade of logistics
        </h3>
        <p className="mt-6 max-w-[560px] text-[20px] leading-relaxed text-white/75">
          One partner for freight, warehousing and last-mile delivery — across
          40 countries.
        </p>
        <div className="mt-9 flex gap-3">
          <span className="rounded-xl bg-white px-8 py-4 text-[17px] font-bold text-[#0f1b33]">
            Get a quote
          </span>
          <span className="rounded-xl border border-white/40 px-8 py-4 text-[17px] font-bold">
            Our services
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 px-14 py-14">
        {[
          ["40+", "countries"],
          ["1.2M", "shipments / yr"],
          ["99.2%", "on-time rate"],
          ["18 yrs", "of experience"],
        ].map(([a, b]) => (
          <div key={b}>
            <p className="text-[52px] font-extrabold tracking-tight text-[#1b4dff]">
              {a}
            </p>
            <p className="text-[17px] text-[#51607d]">{b}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#f3f6fd] px-14 py-16">
        <h4 className="text-[44px] font-extrabold tracking-tight">
          What we do
        </h4>
        <div className="mt-10 grid grid-cols-3 gap-6">
          {[
            "Freight forwarding",
            "Smart warehousing",
            "Last-mile delivery",
          ].map((s, i) => (
            <div key={s} className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="grid size-14 place-items-center rounded-2xl bg-[#1b4dff]/10 text-[24px] font-extrabold text-[#1b4dff]">
                0{i + 1}
              </span>
              <p className="mt-6 text-[24px] font-bold">{s}</p>
              <div className="mt-4 space-y-2.5">
                <Bar w="100%" />
                <Bar w="86%" />
                <Bar w="60%" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 px-14 py-14 opacity-60">
        {["NORDEX", "Kavian", "OMEGA·T", "Parsa", "Helix"].map((n) => (
          <span key={n} className="text-[26px] font-extrabold tracking-wide">
            {n}
          </span>
        ))}
      </div>
      <div className="mx-14 mb-16 flex items-center justify-between rounded-[36px] bg-[#1b4dff] px-12 py-12 text-white">
        <p className="max-w-[520px] text-[40px] font-extrabold leading-tight">
          Ready to move faster?
        </p>
        <span className="rounded-xl bg-white px-8 py-4 text-[17px] font-bold text-[#1b4dff]">
          Talk to us
        </span>
      </div>
    </div>
  );
}

/* ------------------------------ ZIST (booking) ------------------------------ */
function Zist() {
  return (
    <div className={`${W} bg-[#f6f3ec] text-[#14352b]`}>
      <div className="flex items-center justify-between px-14 py-7 text-[17px] font-semibold">
        <span className="flex items-center gap-2 text-[24px] font-extrabold">
          <span className="grid size-9 place-items-center rounded-full bg-[#1f6b52] text-white">
            +
          </span>
          Zist
        </span>
        <div className="flex gap-9 text-[#4d6b5f]">
          <span>Doctors</span>
          <span>Programs</span>
          <span>Prices</span>
          <span>Contacts</span>
        </div>
        <span className="rounded-full bg-[#1f6b52] px-6 py-2.5 text-[15px] text-white">
          Book online
        </span>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr] gap-8 px-14 pb-14 pt-6">
        <div>
          <span className="rounded-full bg-white px-4 py-1.5 text-[14px] font-semibold">
            ● Appointments open today
          </span>
          <h3 className="mt-6 text-[66px] font-extrabold leading-[1.03] tracking-tight">
            Doctors who <span className="text-[#1f6b52]">understand you</span>
          </h3>
          <p className="mt-6 max-w-[460px] text-[19px] leading-relaxed text-[#4d6b5f]">
            Check-ups, specialists and diagnostics in one calm place — book in
            30 seconds, no phone calls.
          </p>
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-[16px] font-bold">Pick a time</p>
            <div className="mt-4 grid grid-cols-5 gap-2.5 text-center text-[15px] font-semibold">
              {["Mon 8", "Tue 9", "Wed 10", "Thu 11", "Fri 12"].map((d, i) => (
                <span
                  key={d}
                  className={`rounded-xl py-3 ${i === 2 ? "bg-[#1f6b52] text-white" : "bg-[#eef3ef]"}`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2.5 text-center text-[15px]">
              {["09:00", "10:30", "12:00", "15:30"].map((d, i) => (
                <span
                  key={d}
                  className={`rounded-xl border py-2.5 ${i === 1 ? "border-[#1f6b52] bg-[#1f6b52]/10 font-bold" : "border-[#d7e2db]"}`}
                >
                  {d}
                </span>
              ))}
            </div>
            <span className="mt-4 block rounded-xl bg-[#14352b] py-3.5 text-center text-[16px] font-bold text-white">
              Confirm booking
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[44px] bg-gradient-to-b from-[#9bc9b4] to-[#1f6b52]" />
          <div className="absolute inset-x-12 bottom-0 top-16 rounded-t-[120px] bg-gradient-to-b from-[#f1d9c2] to-[#d9a98a]" />
          <div className="absolute inset-x-20 bottom-0 h-[210px] rounded-t-[60px] bg-white" />
          <div className="absolute start-6 top-8 rounded-2xl bg-white px-4 py-3 text-[14px] font-bold shadow-lg">
            ★ 4.9 · 2,300 reviews
          </div>
        </div>
      </div>
      <div className="px-14 py-12">
        <h4 className="text-[42px] font-extrabold tracking-tight">
          Our specialists
        </h4>
        <div className="mt-8 grid grid-cols-4 gap-5">
          {["Cardiology", "Therapy", "Neurology", "Pediatrics"].map((s, i) => (
            <div key={s} className="rounded-3xl bg-white p-4">
              <div
                className={`aspect-[4/5] rounded-2xl bg-gradient-to-b ${["from-[#cfe3d8] to-[#8fbba5]", "from-[#e8dccb] to-[#c9a98a]", "from-[#d3dbe8] to-[#8e9fc2]", "from-[#efd9d9] to-[#d49a9a]"][i]}`}
              />
              <p className="mt-4 text-[19px] font-bold">{s}</p>
              <p className="text-[14px] text-[#4d6b5f]">Next slot · tomorrow</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-14 mb-14 rounded-[36px] bg-white p-10">
        <h4 className="text-[36px] font-extrabold tracking-tight">
          Check-up programs
        </h4>
        {[
          "Basic · 12 tests",
          "Extended · 28 tests",
          "Executive · 46 tests",
        ].map((p, i) => (
          <div
            key={p}
            className="flex items-center justify-between border-b border-[#14352b]/10 py-5 text-[19px] last:border-0"
          >
            <span className="font-semibold">{p}</span>
            <span className="font-extrabold text-[#1f6b52]">
              ${[59, 119, 249][i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ RAHA (portfolio) ------------------------------ */
function Raha() {
  const tiles = [
    "from-[#ff7a59] to-[#ff3d77]",
    "from-[#6c5ce7] to-[#00cec9]",
    "from-[#ffd166] to-[#ef476f]",
    "from-[#06d6a0] to-[#118ab2]",
    "from-[#f8f9fa] to-[#adb5bd]",
    "from-[#3a0ca3] to-[#f72585]",
  ];
  return (
    <div className={`${W} bg-[#0b0b0d] text-[#f1efe9]`}>
      <div className="flex items-center justify-between px-14 py-7 text-[17px] font-semibold">
        <span className="text-[24px] font-extrabold tracking-tight">
          raha<span className="text-[#ff7a59]">.</span>studio
        </span>
        <div className="flex gap-9 text-white/60">
          <span>Work</span>
          <span>Studio</span>
          <span>Journal</span>
        </div>
        <span className="rounded-full border border-white/30 px-6 py-2.5 text-[15px]">
          Let’s talk
        </span>
      </div>
      <div className="px-14 pb-16 pt-14">
        <p className="text-[16px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Brand & motion · Tehran / Berlin
        </p>
        <h3 className="mt-6 text-[112px] font-extrabold leading-[0.95] tracking-tighter">
          We make
          <br />
          brands{" "}
          <span className="bg-gradient-to-r from-[#ff7a59] to-[#ff3d77] bg-clip-text text-transparent">
            move.
          </span>
        </h3>
        <div className="mt-10 flex items-center gap-6 text-[19px] text-white/65">
          <span className="h-px w-24 bg-white/30" />
          Selected work 2022 — 2026
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 px-14">
        {tiles.map((g, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${g} ${i % 3 === 1 ? "h-[420px]" : "h-[320px]"}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.35),transparent_55%)]" />
            <span className="absolute bottom-5 start-5 rounded-full bg-black/40 px-4 py-1.5 text-[14px] font-semibold backdrop-blur">
              Project 0{i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-12 px-14 py-20">
        <p className="text-[46px] font-extrabold leading-tight tracking-tight">
          Small studio. Big ideas. Zero templates.
        </p>
        <div className="space-y-3 pt-3">
          <Bar w="100%" c="bg-white/15" />
          <Bar w="92%" c="bg-white/15" />
          <Bar w="97%" c="bg-white/15" />
          <Bar w="64%" c="bg-white/15" />
        </div>
      </div>
      <div className="mx-14 mb-16 flex items-center justify-between rounded-[36px] bg-[#f1efe9] px-12 py-12 text-[#0b0b0d]">
        <p className="text-[48px] font-extrabold tracking-tight">
          hello@raha.studio
        </p>
        <span className="rounded-full bg-[#0b0b0d] px-8 py-4 text-[17px] font-bold text-white">
          Start a project
        </span>
      </div>
    </div>
  );
}

/** A real, live client site — shown as a full-page screenshot (1440px wide capture). */
function Hengameh() {
  return (
    <Image
      src="/showcase/hengameh-luxe-beauty.jpg"
      alt=""
      width={1000}
      height={3248}
      unoptimized
      priority={false}
      className="block h-[3248px] w-[1000px] max-w-none"
    />
  );
}

export const SITES: Record<
  SiteId,
  { Component: () => ReactNode; designHeight: number; url: string }
> = {
  hengameh: {
    Component: Hengameh,
    designHeight: 3248,
    url: "hengameh-luxe-beauty.de",
  },
  nilou: { Component: Nilou, designHeight: 2150, url: "nilou.easywebbuilder.de" },
  arman: {
    Component: Arman,
    designHeight: 1980,
    url: "arman-group.easywebbuilder.de",
  },
  zist: {
    Component: Zist,
    designHeight: 1900,
    url: "zist-clinic.easywebbuilder.de",
  },
  raha: {
    Component: Raha,
    designHeight: 1950,
    url: "studio-raha.easywebbuilder.de",
  },
};
