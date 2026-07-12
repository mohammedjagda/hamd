export default function RouteMotif({ className = '', color = '#CC9A47' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 600 120" fill="none" className={className} style={{ color }} preserveAspectRatio="none">
      <path
        d="M0 90 C 120 90, 140 20, 260 30 S 420 100, 520 40 S 600 10, 600 10"
        stroke="currentColor"
        strokeWidth="2"
        className="route-dash"
        opacity="0.8"
      />
      <circle cx="0" cy="90" r="4" fill="currentColor" />
      <circle cx="600" cy="10" r="4" fill="currentColor" />
    </svg>
  );
}
