export function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="tech-badge" title={text}>
      {icon}
    </div>
  );
}
