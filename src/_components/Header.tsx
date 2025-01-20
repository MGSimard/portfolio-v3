export function Header({ id, pageTitle, detached }: { id: string; pageTitle: string; detached?: string }) {
  return (
    <header id={id}>
      <h1 id="page-title">
        <span className="page-title-text">{pageTitle}</span>
        {detached ? <span className="detached">{detached}_</span> : <span className="caret">_</span>}
      </h1>
      <div className="header-divider"></div>
    </header>
  );
}
