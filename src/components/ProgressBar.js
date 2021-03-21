import { useScroll } from "utils/useScroll";

const ProgressBar = () => {
  const percentScroll = useScroll();
  return (
    <div
      style={{
        width: `${percentScroll}%`,
        position: "fixed",
        backgroundColor: "red",
        height: "16px",
        zIndex: 10,
      }}
    />
  );
};

export default ProgressBar;
