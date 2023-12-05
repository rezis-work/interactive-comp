import "./Points.css";

export default function Points({
  curPoint,
  setCurPoint,
  hovered,
  setHovered,
  setSubmit,
  btnHover,
  setBtnHover,
}) {
  let buttons = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="main-points">
        {buttons.map((point) => {
          return (
            <button
              style={{
                backgroundColor:
                  curPoint === point
                    ? "#7C8798"
                    : hovered === point
                    ? "#FC7614"
                    : "#262E38",
                color:
                  curPoint === point
                    ? "#fff"
                    : hovered === point
                    ? "#fff"
                    : "#7C8798",
                transition: "all 0.3s",
              }}
              onClick={() => setCurPoint(point)}
              onMouseEnter={() => setHovered(point)}
              onMouseLeave={() => setHovered(null)}
              key={point}
              className="point-wrap"
            >
              {point}
            </button>
          );
        })}
      </div>
      <button
        style={{
          backgroundColor: btnHover ? "#fff" : "#FC7614",
          color: btnHover ? "#FC7614" : "#fff",
          transition: "all 0.3s",
        }}
        onClick={() => setSubmit(true)}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className="submit-btn"
      >
        SUBMIT
      </button>
    </>
  );
}
