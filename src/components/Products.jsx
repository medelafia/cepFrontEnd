import {motion} from "framer-motion"
import ProductBox from "./ProductBos"
export default function Products({close}) {
    return (
        <motion.div className="w-100 bg-dark products rounded-lg position-absolute" style={{zIndex : 1000 , minHeight : "40vh" }}
            initial={{opacity : 0 , scale : 0.5 }}
            animate = {{opacity : 1 , scale : 1 }}
        >
            <div className="container position-relative w-100 h-100" >
                <button className="btn btn-white text-light end-0 top-0 position-absolute font-secondary" onClick={close}><i class="fa-solid fa-xmark"></i></button>
                <div className="row w-100 p-5">
                    <ProductBox title="home" />
                    <ProductBox title="providers" />
                    <ProductBox title="offers" />
                </div>
            </div>
        </motion.div>
    )
}