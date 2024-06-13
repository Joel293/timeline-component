export const TimelineItem = ({ title, text, color, index }) => {
  return (
    <div
      className={`timeline__container 
                ${
                  index % 2 === 0
                    ? "timeline__left-container"
                    : "timeline__right-container"
                }`}
    >
      <div className="timeline__circle-wrap">
        <div style={{ backgroundColor: color }} className="timeline__circle">
          <div className="timeline__min-circle"></div>
        </div>
      </div>

      <div className="timeline__text-box">
        <h2 className="timeline__title">{title}</h2>
        <p className="timeline__text">{text}</p>
      </div>
    </div>
  );
};
