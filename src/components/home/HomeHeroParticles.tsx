"use client";

type HomeHeroParticlesProps = {
  reducedMotion: boolean;
};

const PARTICLES = [
  { x: "9%", y: "16%", size: 8, delay: "0s", duration: "13s" },
  { x: "29%", y: "34%", size: 10, delay: "-2s", duration: "17s" },
  { x: "49%", y: "14%", size: 9, delay: "-4s", duration: "15s" },
  { x: "71%", y: "26%", size: 11, delay: "-1s", duration: "19s" },
  { x: "19%", y: "68%", size: 8, delay: "-5s", duration: "18s" },
  { x: "83%", y: "70%", size: 10, delay: "-3s", duration: "20s" },
];

export function HomeHeroParticles({ reducedMotion }: HomeHeroParticlesProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(83,112,255,0.18),transparent_44%),radial-gradient(circle_at_85%_15%,rgba(32,201,151,0.2),transparent_40%),radial-gradient(circle_at_50%_78%,rgba(111,228,255,0.16),transparent_48%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.08)_100%)] opacity-35" />
      {!reducedMotion &&
        PARTICLES.map((particle) => (
          <span
            key={`${particle.x}-${particle.y}-${particle.delay}`}
            className="home-particle"
            style={{
              left: particle.x,
              top: particle.y,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
    </div>
  );
}
