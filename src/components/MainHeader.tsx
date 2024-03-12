import DateTime from "./MainHeader/DateTime";
import ThemeIcon from "./MainHeader/ThemeIcon";
import "./MainHeader.scss";

function MainHeader() {
  return (
    <header className="MainHeader">
      <div className="left">
        {/* <button className="logo">
          <img src="" alt="logo" />
        </button> */}
      </div>
      <div className="right">
        <ThemeIcon />
        <button className="date-ㅅtime">
          <DateTime />
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
