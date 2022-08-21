import "./CustomButton.style.scss";

const BUTTON_TYPE_CLASS = {
  primary: "primary-button",
  primaryInverse: "primary-button-inverse",
};

const BUTTON_SIZE_CLASS = {
  small: "button-small",
  medium: "button-medium",
  large: "button-large",
};

const CustomButton = ({ ButtonText, ButtonType, ButtonSize, ...other }) => {
  return (
    <button
      className={`custom-button ${BUTTON_TYPE_CLASS[ButtonType]} ${BUTTON_SIZE_CLASS[ButtonSize]}`}
      {...other}
    >
      {ButtonText}
    </button>
  );
};

export default CustomButton;
