import {motion} from "framer-motion"
import ProductBox from "./ProductBos"
import Brand from "./Brand"
export default function Products({close}) {
    const dirs = {"home" : [{name :"hero"  , path : "/"} 
                        , {name : "contact" , path : "/contact"} 
                        , {name : "why chose us ? " , path : "/about"}]
                        ,
                    "offers" : [ {name : "flights" , path : '/offers/flights/'}
                                ,{name : "hotels" , path : '/offers/hotels/'}
                                ,{name : "destinations" , path : '/offers/destinations'}
                                ,{name : "cars" , path : '/offers/cars/'}
                                ,{name : "train travels" , path : '/offers/trainTravels/'}] 
                                ,
                    "providers" : [ {name : "car agencies" , path : '/providers/car-agencies'}
                                    ,{name : "railways operators" , path : '/providers/railways-operators'}
                                    ,{name : "travels agencies" , path : '/providers/travel-agencies'}
                                    ,{name : "airlines" , path : '/providers/airlines'}]

        }
    return (
        <motion.div className="w-100 bg-dark products rounded-lg position-absolute" style={{zIndex : 1000 , minHeight : "40vh" }}
            initial={{opacity : 0 }}
            animate = {{opacity : 1 }}
        >
            <div className="container position-relative w-100 h-100" >
                <button className="btn btn-white text-light end-0 top-0 position-absolute font-secondary" onClick={close}><i class="fa-solid fa-xmark"></i></button>
                <div className="row w-100 p-5">
                    <ProductBox content={dirs["home"]} title="home"/>
                    <ProductBox content={dirs["offers"]} title="offers" />
                    <ProductBox content={dirs["providers"]} title="providers"/>
                </div>
            </div>
        </motion.div>
    )
}