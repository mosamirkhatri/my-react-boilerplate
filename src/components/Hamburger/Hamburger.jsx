import "./Hamburger.styles.scss";

export const Hamburger = ({ onClick, ...props }) => {
  return (
    <div className={"hamburger-wrapper"} onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
