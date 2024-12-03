import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import "./button.css";

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
  isLoading?: boolean; // Nova propriedade opcional para o spinner
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
  isLoading = false, // Valor padrão de isLoading é false
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
        disabled={isLoading} // Desabilita o botão quando isLoading for true
      >
        {isLoading ? (
          <div className="container-spiner-button-login">
            <Oval
              visible={true}
              height="30"
              width="30"
              color="white"
              secondaryColor="white"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass="oval-spinner"
            />
            <span>Logando...</span>
          </div>
        ) : (
          <>
            {icon && (
              <FontAwesomeIcon icon={icon} style={{ marginRight: "8px" }} />
            )}
            {text}
          </>
        )}
      </button>
    </div>
  );
}

export default Button;
