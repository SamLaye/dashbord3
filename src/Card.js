import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import profil from './img/profil.png'

const Card = (props) => {

    const cardItems = props.cardItems

    return ( 
        <>
            <div className="row">        
                {cardItems.map(item => (
                <div className="col-6 col-md-3 p-3">    
                    <div className="rounded bg-white shadow-sm p-2">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                        <div className="d-flex flex-column text-center mb-3">
                            <img src={profil} className="w-25 h-auto mx-auto mb-0"/>
                            <p className="fw-bold my-0">{item.name}</p>
                            <span className="text-small">{item.statu}</span>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="d-flex flex-column text-center">
                                <span className="text-capitalize text-small fs-6">followers</span>
                                <span className="fw-bold text-capitalize">{item.followers}</span>
                            </div>
                            <div className="d-flex flex-column text-center">
                                <span className="text-capitalize text-small fs-6">following</span>
                                <span className="fw-bold text-capitalize">{item.following}</span>
                            </div>
                        </div>
                    </div>
                </div>    
                ))}
            </div>    
        </>
     );
}
 
export default Card;