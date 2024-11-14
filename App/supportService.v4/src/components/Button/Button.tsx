import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./button.css";
import { useState } from "react";

type Props = {
  text: string;
  icon?: IconProp;
  background?: string;
  hoverColor?: string;
  size?: "small" | "medium" | "large";
  borderRadius?: string;
  height?: string;
  width?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

function Button({
  text,
  icon,
  background,
  hoverColor,
  size = "medium",
  borderRadius = "12px",
  height = "auto",
  width = "auto",
  type = "button",
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className={`button-container ${size}`}
        type={type}
        style={{
          background: isHovered && hoverColor ? hoverColor : background,
          borderRadius,
          height,
          width,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: "8px" }} />}
        {text}
      </button>
    </div>
  );
}

export default Button;
