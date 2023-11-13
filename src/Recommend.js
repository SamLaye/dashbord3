import { BiStar, BiHeart, BiChat} from 'react-icons/bi'
import cover2 from './img/cover_2.jpg'

const Recommend = (props) => {

    const recommendItems = props.recommendItems

    return ( 
        <> 
            {recommendItems.map(item => (
            <div className="p-2 mb-3">
                <div className='row bg-white rounded p-2 shadow'>
                    <div className='col-9'>
                        <div className='d-flex'>
                            <h3 className='title'>{item.title}</h3> 
                            <span className='ms-5 my-auto'><BiStar /></span>
                        </div>
                        <p className="text-small">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation consequat. 
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <span>Read more</span>
                            <span>
                                <span className='me-2'><span className='mx-1'><BiHeart /></span><span>{item.heart}</span></span>
                                <span className='ms-2'><span className='mx-1'><BiChat /></span><span>{item.chat}</span></span>
                            </span>
                        </div>
                    </div>
                    <div className='col-3 d-flex align-items-center'>    
                        <div><img src={cover2} className='img-fluid rounded shadow-lg my-auto'/></div>
                    </div>
                </div>    
            </div>
            ))}
        </>
     );
}
 
export default Recommend;