import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-y border-border bg-bg py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="border-l border-border pl-5 text-left first:border-l-0 first:pl-0 md:border-l md:pl-6"
            >
              <p className="text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-none tracking-tight text-ink">
                {stat.value}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
