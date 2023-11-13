import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import profil from './img/profil.png'

const Sidebar = (props) => {

    const menuItems = props.menuItems

    return ( 
        <>
                <div className="mx-auto my-3">
                    <div className="text-center">
                        <img src={profil} className="w-50 h-auto mx-auto"/>
                        <p className="text-capitalize mb-0" id="welcome">Welcome essie</p>
                        <span className="text-capitalize text-small">super admin</span>
                    </div>
                    <div>
                    
                    </div>
                </div>

                <div className="container d-flex flex-column">
                    {menuItems.map(menuItem => (
                        <div className="container">
                            <a href="#" ><li className="my-2 mx-auto">
                                <span className="menuItems-icon fw-bold me-2">{menuItem.icon}</span> 
                                <span className="text-capitalize">{menuItem.item}</span>
                            </li></a>
                        </div>    
                    ))}
                </div>
        </>
     );
}
 
export default Sidebar;