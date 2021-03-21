import { useState } from "react";
// Icons
import close from "assets/images/close.svg";
import "./SideBar.styles.scss";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <svg
        className={"sidebar__hamburger"}
        fill="#fff"
        viewBox="0 0 100 80"
        width="40"
        height="40"
        onClick={toggleSideBar}
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>

      <div className={"sidebar-wrapper " + (isOpen ? "active" : "")}>
        {isOpen && (
          <>
            <img src={close} alt={"close"} onClick={toggleSideBar} />
            <div>Home</div>
            <div>Messages</div>
            <div>Log out</div>
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
