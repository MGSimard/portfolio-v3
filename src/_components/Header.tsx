export function Header({ id, pageTitle, detached }: { id: string; pageTitle: string; detached?: string }) {
  return (
    <header id={id}>
      <h1 id="page-title">
        <span className="page-title-text">{pageTitle}</span>
        <span className="blink-thing">{detached && detached}_</span>
      </h1>
      <div className="header-divider"></div>
    </header>
  );
}
