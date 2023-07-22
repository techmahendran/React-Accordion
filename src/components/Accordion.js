import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion_header" onClick={handleClick}>
          <h1>{title}</h1>
          <i className={isActive ? "fa fa-minus active" : "fa fa-plus"}></i>
        </div>

        <div className={`${isActive ? "content active" : "content"}`}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
