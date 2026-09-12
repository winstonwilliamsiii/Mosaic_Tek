import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-mosaic.jpg";
import logoAsset from "@/assets/mosaic-tek-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mosaic-Tek Staffing | Oracle Cloud, AI/ML & Cloud Talent" },
      {
        name: "description",
        content:
          "Mosaic-Tek Staffing delivers Oracle Cloud HCM, AI/ML, Cloud/DevOps and automation testing talent to public-sector, consulting and enterprise clients nationwide and across LATAM.",
      },
      {
        property: "og:title",
        content: "Mosaic-Tek Staffing | Boutique IT Staffing & Consulting",
      },
      {
        property: "og:description",
        content:
          "Fast, compliant, scalable IT staffing: Oracle Cloud, AI/ML, Cloud & DevOps, automation testing. VMS-ready for Beeline, Fieldglass, VNDLY and VectorVMS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    title: "Oracle Cloud HCM & Financials",
    items: [
      "Time & Labor",
      "Core HR",
      "Integrations",
      "Data Conversion",
      "Functional & Technical Support",
    ],
  },
  {
    title: "AI/ML & Data Engineering",
    items: ["Machine Learning Engineers", "LLM / RAG Specialists", "Python Automation", "MLOps"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "CI/CD", "Infrastructure Automation"],
  },
  {
    title: "FinOps SaaS Transformation",
    items: [
      "Multi-tenant SaaS architecture",
      "Automated billing ingestion",
      "FOCUS-compliant normalization",
      "AI-driven remediation",
      "AWS, GCP, and OCI coverage",
    ],
  },
  {
    title: "Public Sector & Consulting",
    items: ["State agencies", "Federal contractors", "Big-4 & consulting partners"],
  },
  {
    title: "Service Categories",
    items: [
      "IT Staff Augmentation",
      "Contract Staffing (W2, C2C, 1099)",
      "International Contractor Placement",
      "SOW-Based Project Staffing",
    ],
  },
];

const differentiators = [
  {
    title: "Boutique agility",
    body: "Fast response times, curated talent, and personalized support from principals — not a call center.",
  },
  {
    title: "Deep candidate pipelines",
    body: "High-volume pipelines across Oracle, AI/ML, Cloud, and Testing, ready for rapid requisitions.",
  },
  {
    title: "Compliance-ready operations",
    body: "Workers' Compensation coverage and secure onboarding built into every placement.",
  },
  {
    title: "LATAM & international payroll",
    body: "International contractor payroll and remittance for nearshore talent delivery.",
  },
  {
    title: "VMS‑Aligned Roadmap",
    body: "Designing Mosaic‑Tek’s operations to meet the requirements of leading VMS platforms.",
  },
  {
    title: "Predictable payroll model",
    body: "Biweekly arrears payroll aligned with lender and VMS risk standards.",
  },
];

const clients = [
  "Deloitte — Public Sector",
  "IBM — Public Sector",
  "Alithya — Public Sector",
  "Huron Consulting — Private Sector",
  "Mastech Digital — Oracle HCM & Cloud",
];

const staffingSteps = [
  {
    step: "01",
    title: "Intake & Requirements",
    body: "We start with the requisition: required skills, clearance or VMS needs, timeline, and rate range — so every candidate matches the role and the budget.",
  },
  {
    step: "02",
    title: "Sourcing & Screening",
    body: "We tap curated pipelines and run our 10‑question readiness check to confirm technical fundamentals plus communication, collaboration, and client readiness.",
  },
  {
    step: "03",
    title: "Shortlist & Interviews",
    body: "You receive a focused shortlist of pre‑qualified consultants with relevant project experience, ready for your interview and selection process.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    body: "We coordinate offer, contract, compliance, and VMS onboarding — including workers' compensation, background checks, and first‑day logistics.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    body: "After placement, we stay close with regular check‑ins, performance feedback, and fast backfill or extension support as program needs evolve.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
            <img
              src={logoAsset.url}
              alt="Mosaic-Tek IT Consulting"
              width={320}
              height={72}
              className="h-16 w-auto"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#capabilities" className="transition-colors hover:text-foreground">
              Capabilities
            </a>
            <a href="#why" className="transition-colors hover:text-foreground">
              Why Mosaic-Tek
            </a>
            <a href="#clients" className="transition-colors hover:text-foreground">
              Clients
            </a>
            <a href="#how-we-staff" className="transition-colors hover:text-foreground">
              How We Staff
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
            Request Talent
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="Abstract mosaic of geometric tiles representing Mosaic-Tek's staffing network"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
            <p className="eyebrow">Business Transformation, Modern IT Consulting</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Modern IT Consulting & Boutique Staffing for Oracle, Cloud, and AI/ML Teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Mosaic-Tek Staffing delivers Oracle Cloud, AI/ML, Cloud Engineering, and Automation
              Testing talent to public-sector agencies, consulting firms, and enterprise clients —
              fast, compliant, and scalable.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Request Talent
              </a>
              <a href="#capabilities" className="btn-ghost">
                Explore Capabilities
              </a>
            </div>
            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["4", "Core practice areas"],
                ["5+", "Active enterprise pipelines"],
                ["4", "VMS platforms ready"],
                ["US + LATAM", "Delivery coverage"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-primary">{value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>


        {/* Capabilities */}
        <section id="capabilities" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Core Capabilities</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Talent across the modern IT stack</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Specialized recruiting depth in the skills that enterprise and government programs
            struggle to fill.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <article key={cap.title} className="surface-card surface-card-hover p-7">
                <h3 className="text-lg font-semibold">{cap.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {cap.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Why */}
        <section id="why" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="eyebrow">Why Clients Choose Mosaic-Tek</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Boutique service, enterprise discipline
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.title} className="surface-card surface-card-hover p-7">
                  <h3 className="text-base font-semibold text-primary">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Staff */}
        <section id="how-we-staff" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">How We Staff</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            From intake to onboarding — and beyond
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A clear, repeatable process designed to move fast without sacrificing quality or compliance.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {staffingSteps.map((s) => (
              <article key={s.step} className="surface-card surface-card-hover p-7">
                <span className="font-display text-3xl font-bold text-primary/80">{s.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Active Client Pipeline</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Supporting high-volume enterprise and government requisitions
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            These engagements demonstrate our ability to support high-volume requisitions and rapid
            onboarding for enterprise and government clients.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let&apos;s fill your hardest roles
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us the requisition, timeline, and rate range — we&apos;ll respond with a curated
                shortlist.
              </p>
              <a
                href="mailto:info@mosaic-tek.com"
                className="btn-primary mt-8"
              >
                info@mosaic-tek.com
              </a>
            </div>
            <div className="surface-card p-8">
              <h3 className="text-lg font-semibold">Competent Talent, Strong Relationships</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                At Mosaic‑Tek, we believe great consulting is built on skill + character. Every candidate completes a short 10‑question readiness check across:
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Project management basics",
                  "Emotional intelligence and communication",
                  "Cloud fundamentals",
                  "Networking and security essentials",
                ].map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                This helps us understand not just what a candidate knows, but how they show up — ensuring we match clients with consultants who communicate well, collaborate effectively, and build long‑term trust.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Message */}
        <section id="founder" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="eyebrow">A Message From Our Founder</p>
            <blockquote className="mt-6 max-w-4xl text-xl font-medium leading-relaxed md:text-2xl">
              Mosaic‑Tek was built to help people move forward — clients, consultants, and partners.
              Even when life gets difficult, we keep pushing, delivering excellence with agility,
              integrity, and heart.
            </blockquote>
            <p className="mt-6 max-w-4xl text-muted-foreground">
              If you’re a client seeking modern IT talent or a professional ready for your next
              opportunity, Mosaic‑Tek is here to support your journey.
            </p>
            <p className="mt-8 font-semibold">— Winston Anthony Williams III</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Mosaic-Tek Staffing LLC. All rights reserved.</p>
          <p>Boutique IT Staffing & Consulting Solutions</p>
        </div>
      </footer>
    </div>
  );
}
