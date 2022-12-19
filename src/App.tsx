import "./App.css";
import { useOnIntersect } from "./hooks/useOnIntersect";

function onEnter() {
  document.documentElement.style.setProperty(
    "--body-background",
    "var(--color-dark)"
  );
  document.documentElement.style.setProperty(
    "--card-background",
    "var(--color-black)"
  );
  document.documentElement.style.setProperty(
    "--color-text",
    "var(--color-white)"
  );
  console.log("entered");
}

function onExit() {
  document.documentElement.style.setProperty(
    "--body-background",
    "var(--color-red)"
  );
  document.documentElement.style.setProperty(
    "--card-background",
    "var(--color-white)"
  );
  document.documentElement.style.setProperty(
    "--color-text",
    "var(--color-dark)"
  );
  console.log("exited");
}
function App() {
  const containerRef = useOnIntersect(onEnter, onExit, {
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div id="app">
      <section className="scrollSection">
        <div className="card">
          <h2>
            If the scrren is red <br />
            the observer is not triggered
          </h2>
        </div>
      </section>
      <section className="scrollSection" ref={containerRef}>
        <div className="card">
          <h2>
            If the screen is black
            <br />I am being observed
          </h2>
        </div>
      </section>
    </div>
  );
}

export default App;
