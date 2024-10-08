function Main({ children }) {
  return (
    <main className="full-section px-4 my-16">
      <div className="section-container min-h-80 flex flex-col gap-8">{children}</div>
    </main>
  );
}

export default Main;
