import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {

    return (
        <>
         
              <div className="Head" >    
                    <img src="insta.png" alt="insta" className="first"/>
                  <Link to="/form">
                    <img src="camera.png"  alt="cam" className="second" style={{height:"55px", width:"55px"}}/>
                  </Link>
                </div>
              
        </>
      );
    };
    
    export default Header;
    