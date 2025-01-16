export function Header({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <header id={id}>
      {children}
      <div className="header-divider"></div>
    </header>
  );
}
