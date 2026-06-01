export default function Loading() {
  return (
    <main id="main" className="section-spacing px-4 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-5">
        <div className="h-8 w-56 animate-pulse rounded-xl bg-white/10" />
        <div className="h-24 animate-pulse rounded-3xl bg-white/8" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-56 animate-pulse rounded-3xl bg-white/8" />
          <div className="h-56 animate-pulse rounded-3xl bg-white/8" />
        </div>
      </div>
    </main>
  );
}
