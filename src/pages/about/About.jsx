import AboutCell from "../../components/AboutCell";
import {motion} from "framer-motion"

export default function About() {
    const services =  [{title : "recommendation" , text : "text1"} , 
                    {title : "recommendation" , text : "text1"} , 
                    {title : "recommendation" , text : "text1"} , 
                    {title : "recommendation" , text : "text1"} ,
                    {title : "recommendation" , text : "text1"} ,
                    {title : "recommendation" , text : "text1"}  ] ; 
    const renderServices = () => {
        return services.map((ser , index)=><AboutCell number={index + 1}  title={ser.text} text={ser.text}/> )
    }
    return (
        <div className="page d-flex flex-column">
            <motion.h1 className="text-center my-5"
                initial={{opacity : 0 , translateX : -100 }}
                animate={{opacity : 1 , translateX : 0 }}
                transition={{duration : 0.4}}
            >why chose <span className="custom-text-primary bold">travelboot</span>  ?
            </motion.h1>
            <motion.div className="mt-5"
                initial={{opacity : 0 }}
                animate = {{opacity :  1  }}
                transition = {{ duration : 1 }}
            >
                <div className="custom-container w-100 row">
                    {renderServices()}
                </div>
            </motion.div>
        </div>
    )
}