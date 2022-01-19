import React from "react";

interface Props {
  color: string,
  text : string,
  onClick: () => void;
}
const Button:React.FC<Props> = ({color, text, onClick}) => {
    return (
      <button style={{backgroundColor: color}} className="btn" onClick={onClick}>
          {text}
      </button>
    );
  }

export default React.memo(Button);