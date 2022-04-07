import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Loader() {
  const [count, setCount] = React.useState(0);
  const [pause, setPause] = React.useState(false);
  console.log("pause", pause);

  const IsTrue = React.useMemo(() => isFalse(pause), [pause]);
  console.log("IsTrue", IsTrue);

  setTimeout(() => {
    if (count < 100 && !IsTrue) {
      setCount(count + 1);
    }
  }, 100);

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="pt-5" style={{ padding: "0px 20px" }}>
      <div>
        <div className="bg-danger rounded">
          <div
            className="rounded"
            style={{
              width: count + "%",
              background: "green",
              height: "8px",
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="text-center pt-2">
          {count === 100 ? "You have successfully downloaded" : count + "%"}
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={() => setPause(!pause)}>
            {IsTrue ? "Resume" : "pause"}
          </button>
          {count === 100 && (
            <div className="ps-2">
              <button onClick={reset}>Restart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const isFalse = (x) => {
  return x;
};
