import Logo from "../../svg/Vector(2).svg"
import Search from "../../svg/search-line(1).svg"
import User from "../../svg/user-line(1).svg"
import "./nav.scss"
const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
    <img src={Logo}/>
  <a className="navbar-brand mx-2" href="#">Recipedia</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active mx-3">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link" href="#">Recipe</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link" href="#">Community</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link" href="#">About Us</a>
      </li>
    </ul>
  </div>
    <div className="justify-content-end">
        <img src={Search}/>
        <img src={User}/>
    </div>
  </div>
</nav>
    );
}

export default Nav