import {motion } from "framer-motion" ;  
export default function AboutCell({number , title , text}) {
    return(
        <motion.div className="col-sm-12 col-md-6 col-lg-4 my-5 position-relative"
            animate={{opacity : 1}}
            initial= {{opacity : 0}}
            transition = {{duration : number / 5    }}
        >
            <div className="container text-center position-relative" style={{zIndex : 1000}}>
                <div className="bold font-secondary">
                    {title}
                </div>
                <p className="text-secondary">
                    {text}
                </p>
            </div>
            <div className="position-absolute start-50 text-light" style={{transform: "translate(-50% , -50%)" , top : 0, fontSize : "15rem"}}>
                {number}
            </div>
        </motion.div>
    )
}