import { useState, useEffect } from "react";
import { TimelineItem } from "./TimelineItem";
import { useTimeline } from "../hooks/useTimeline";

let pattern = new RegExp("^([#]{1}[a-zA-Z0-9]{3,8})$"); //regExp color

export const Timeline = () => {
  const { timeline, addTimelineItem } = useTimeline();

  const [textFields, setTextFields] = useState({
    title: "",
    text: "",
    color: "#e58f48",
  });

  const { title, color, text } = textFields;

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight); //scroll (x, y)
  }, [timeline]);

  const handleInputChange = (e) => {
    setTextFields({
      ...textFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = () => {
    let arr = Object.values(textFields);
    let empty = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "" || arr[i].length < 2) {
        empty = true;
        break;
      }
    }

    if (empty) {
      alert("Empty fields");
      return;
    }

    if (title.length > 35) {
      alert("The title is too long");
      return;
    }

    if (!pattern.test(color)) {
      alert("Invalid color");
      return;
    }

    addTimelineItem(textFields); //agregar nuevo item
  };

  return (
    <div className="main-container">
      <div className="timeline">
        {timeline.map((item, index) => (
          <TimelineItem key={index} index={index} {...item} />
        ))}
      </div>

      <div className="input-container">
        <div className="input-container__add-cont">
          <div className="input-container__field">
            <label className="input-container__title">Title:</label>
            <input
              type="text"
              name="title"
              autoComplete="off"
              className="input-container__input"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container__field">
            <label className="input-container__title">Text:</label>
            <textarea
              type="text"
              name="text"
              autoComplete="off"
              className="input-container__textarea"
              onChange={handleInputChange}
              rows={3}
            ></textarea>
          </div>

          <div className="input-container__field">
            <label className="input-container__title">Color:</label>
            <input
              type="color"
              name="color"
              autoComplete="off"
              className="input-container__color"
              onChange={handleInputChange}
              value={color}
            />
          </div>

          <div>
            <input
              type="button"
              className="input-container__button"
              onClick={handleAddItem}
              value="Add Item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
