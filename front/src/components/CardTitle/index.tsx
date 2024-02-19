import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

type Props = {
  text: string;
  icon: IconProp;
};

function CarTitle(props: Props) {
  return (
    <div className="title-container">
      <FontAwesomeIcon icon={props.icon} />
      <h3>{props.text}</h3>
    </div>
  );
}

export default CarTitle;
