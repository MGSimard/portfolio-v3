export function Header({ id, pageTitle }: { id: string; pageTitle: string }) {
  return (
    <header id={id}>
      <h1 id="page-title">
        <span className="page-title-text">{pageTitle}</span>
        <span className="blink-thing">_</span>
      </h1>
      <div className="header-divider"></div>
    </header>
  );
}
