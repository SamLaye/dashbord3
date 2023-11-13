import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import logo from "./img/logo.png"
import {BiBell} from "react-icons/bi"

const Header = () => {
    return ( 
        <>
            <div className="container">
                <header className="py-3">
                    <div className="row d-flex justify-content-between">
                        <div className="col-5 d-flex justify-content-between">
                            <div > <img src={logo} className="rounded shadow-lg"/></div> 
                            <div> <input type="text" className="form-control" id="headerInput"/></div>
                        </div>
                        <div className="offset-3 col-4 d-flex justify-content-between">
                            <div className="my-auto d-flex">
                                <span className="fs-3"><BiBell /></span> 
                                <p className="text-capitalize my-auto fs-5">set alert</p>
                            </div> 
                            <div className="my-auto d-flex"> 
                                <img src="" className="img-fluid"/> 
                                <p className="text-capitalize my-auto fs-5">essie howel</p>
                            </div>
                        </div>    
                    </div>
                </header> 
            </div>  
        </>
     );
}
 
export default Header;