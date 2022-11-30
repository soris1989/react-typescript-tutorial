import { CSSProperties } from "react";
import "./Sidebar.scss";

interface Props {
  children: JSX.Element[] | JSX.Element;
  isVisible: boolean;
}

const divStyle = (props: Props): CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem",
});

const Sidebar = (props: Props) => {
  return (
    <div id="mySidenav" className="sidenav" style={divStyle(props)}>
      {props.children}
    </div>
  );
};

export default Sidebar;
