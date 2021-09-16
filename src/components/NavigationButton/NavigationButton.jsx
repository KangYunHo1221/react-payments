import classNames from "classnames/bind";
import styles from "./NavigationButton.module.scss";
import leftArrowIcon from "../../assets/svgs/left-arrow.svg"

const cx = classNames.bind(styles);

const NavigationButton = ({ buttonText }) => {
  return (
    <div className={cx("navigation-button")}>
      <img src={leftArrowIcon} className={cx("navigation-button__icon")} />
      <span className={cx("navigation-button__text")}>{buttonText}</span>
    </div>
  );
};

export default NavigationButton;