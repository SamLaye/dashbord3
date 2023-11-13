import {BiFlag} from 'react-icons/bi'

const Data = (props) => {

    const dataItems = props.dataItems

    return ( 
        <>
            {dataItems.map(item => (
                <div className="p-2 mb-3">
                    <div className="row bg-white rounded shadow px-2 py-4">
                        <div className="col-7">
                            <div>
                                <h2 className="text-small fs-4">{item.nom}</h2>
                                <p className='fs-3'> 
                                    <span className=""
                                        style={
                                            {color: item.color1}
                                        }>{item.signe}</span> <span className='fw-bold text-dark'>{item.score}</span> 
                                </p>
                            </div>    
                            <div className="d-flex flex-lg-row flex-column justify-content-between"> 
                                <span className="d-flex">
                                    <span style={
                                    {color: item.color2}
                                    }> <BiFlag /> </span> <span>The boy</span>
                                </span>
                                <span className="d-flex">
                                    <span> <BiFlag /> </span> <span>The girl</span>
                                </span>   
                            </div>
                        </div>
                        <div className="col-5">
                            <img src={item.image} className='img-fluid' />
                        </div>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default Data;