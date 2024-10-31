import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    text: string;
    icon: IconProp;
    background?: string;
}

function Button({ text, icon, background }: Props) {
    return (
        <div>
            <button className="button-container" type="button" style={{ background }}>
                <FontAwesomeIcon icon={icon} style={{ marginRight: '8px' }} />
                {text}
            </button>
        </div>
    );
}

export default Button;
