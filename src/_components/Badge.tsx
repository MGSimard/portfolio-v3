export function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="tech-badge" title={text} aria-label={text}>
      {icon}
    </div>
  );
}
