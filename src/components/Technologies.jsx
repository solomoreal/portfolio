import { RiGithubFill, RiReactjsLine } from "react-icons/ri";
import { DiHtml5, DiMysql, DiPhp, DiLaravel, DiDocker, DiNodejs } from "react-icons/di";
import { motion } from "framer-motion";

const iconVarients = (duration) => {
      return {
            initial: { y: -10 },
            animate: {
                  y: [10, -10],
                  transition: {
                        duration: duration,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                  }
            }
      }
}
const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5}}
            className=" text-center text-4xl my-20">Technologies</motion.h2>

        <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1.5}}
            className=" flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                  variants={iconVarients(2.5)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <DiPhp className=" text-7xl text-blue-400" />  
                </ motion.div>
                <motion.div 
                  variants={iconVarients(3.0)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <DiLaravel className=" text-7xl text-red-400" />  
                </motion.div>
                <motion.div 
                  variants={iconVarients(5)}
                  initial="initial"
                  animate="animate"      
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <DiMysql className=" text-7xl text-sky-700" />  
                </motion.div>
                <motion.div 
                  variants={iconVarients(2)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <RiReactjsLine className=" text-7xl text-cyan-400" />  
                </motion.div>
                <motion.div 
                  variants={iconVarients(6)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <DiDocker className=" text-7xl text-blue-500" />  
                </motion.div>
                <motion.div 
                  variants={iconVarients(4)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <DiHtml5 className=" text-7xl text-orange-400" />  
                </motion.div>
                <motion.div 
                  variants={iconVarients(8)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <RiGithubFill className=" text-7xl text-white-400" />  
                </motion.div>
                <motion.div 
                  variants={iconVarients(3)}
                  initial="initial"
                  animate="animate"
                  className=" rounded-2xl border-4 border-neutral-800 p-4">
                      <DiNodejs className=" text-7xl text-green-400" />  
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies