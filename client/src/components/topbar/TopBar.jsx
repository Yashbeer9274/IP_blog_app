import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
// import { IoSettings } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i> */}
        <div className="topSearchIcon_div">
          <i className="topSearchIcon fas fa-search"></i>
          <input placeholder="Search" className="topSearchIcon_bar"></input>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {/* <IoSettings className="topImg" /> */}
            {/* <FaRegUserCircle className="topImg" /> */}
            {/* <img className="topImg" src={PF + user.profilePic} alt="" /> */}
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAY_GUgx2TF2_XUlRuGGefgo39motb-Zefh5CLRWF_3a-_BmI5PWulBOKXcFWfosKjEA&usqp=CAU"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
