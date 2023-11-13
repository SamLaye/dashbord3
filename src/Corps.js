import Card from './Card.js'
import Data from './Data.js';
import Recommend from './Recommend.js';
import percent1 from './img/75_percentOrange.png'
import percent2 from './img/75_percent.png'

const Corps = () => {

    const cardItems = [
        {
            nom: "alan podemski", statu: "Balzzi", followers: 6941, following: 413
        },
        {
            nom: "anthony", statu: "italics", followers: 1267, following: 476
        },
        {
            nom: "william moore", statu: "ezzaboro", followers: 492, following: 502
        },
        {
            nom: "melissa perez", statu: "elenah", followers: 6405, following: 4649
        }
    ]

    const recommendItems = [
        {
            title: "Aegean magazines",
            heart: 135,
            chat: 12
        },
        {
            title: "Fashion magazines",
            heart: 179,
            chat: 34
        }
    ]

    const dataItems = [
        {
            nom: "Literature",
            score: 23.50,
            signe: "+",
            image: percent1,
            color1: "#bf7a7b",
            color2: "#eb9312"
        },
        {
            nom: "Fashion class",
            score: 13.2,
            signe: "-",
            image: percent2,
            color1: "#72af94",
            color2: "#0e56ff"
        }
    ]

    return ( 
        <>
            <div className='d-flex justify-content-between'>
                <h2 className='text-capitalize fs-4 title'>hot ticket</h2>
                <div className='d-flex'>
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-primary px-4">All</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light bg-white">Unread</button>
                        <button type="button" className="btn btn-light bg-white">Important</button>
                    </div>
                </div>
            </div>
            <Card cardItems = {cardItems}/>

            <div className='row justify-content-between '>
                <div className='col-8'>
                    <h2 className='text-capitalize title fs-4 my-2'>Recommand</h2>
                </div>
                <div className='col-4 d-flex'>
                    <h2 className='text-capitalize title fs-4 my-2'>data</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <Recommend recommendItems = {recommendItems}/>
                </div> 
                <div className='col-md-4'>
                    <Data dataItems = {dataItems}/>
                </div>   
            </div>    

        </>
     );
}
 
export default Corps;