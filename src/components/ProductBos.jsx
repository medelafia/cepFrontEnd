import {motion} from "framer-motion" ; 
export default function ProductBox({title}) {
    return (
            <div className="col-sm-4">
                <motion.div className="container"
                    initial={{opacity : 0 , scale : 0.5}}
                    whileInView={{opacity : 1 , scale : 1 }}
                >
                    <button className="btn text-capitalize custom-text-primary">
                        {title}
                    </button>
                    <div>
                    </div>
                </motion.div>
            </div>
    )
}