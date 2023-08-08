import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
const Testimonials = () => {
    return (
        <section id="education" className="pt-20 pb-5">
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={
                    {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }
                }
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    EDUCATION
                </p>
                <LineGradient width="mx-left w-2/3" />
                <p className="mt-5 font-serif text-2xl">
                My education has equipped me with a solid foundation to excel in developer world, and I continue to seek opportunities for continuous learning and growth.
                </p>
            </motion.div>
            <div className="md:flex md:justify-between gap-8 ">
                <motion.div
                    className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                 before:absolute before:top-[120px] before:-ml[110px] before:left-1/2 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={
                        {
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }
                    }
                    
                >
                    <img  className="mb-10" src="assets/graduation-clipart.png" alt={""}/>
                    <p className="text-center mt-10  font-serif text-xl">
                        Currently doing B.tech in Electronics and Communication Engineering from MNNIT Allahabad.
                    </p>
                </motion.div>
                <motion.div
                          
                     className=" mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                 before:absolute before:top-[120px] before:-ml-[110px] before:left-1/2"
                
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={
                        {
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }
                    }
                >
                    <img src="assets/highschool.png" alt={""}/>
                    < p  className="text-center   mt-10 font-serif text-xl pb-6">
                        CBSE Board With 94.2%
                       Satyam Intl School
                        Patna, Bihar-835303
                    </p> 
                </motion.div>
                <motion.div
                    className="mx-auto relative bg-black  max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                 before:absolute before:top-[120px] before:-ml-[110px] before:left-1/2 before:content-cbse-logo.png"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={
                        {
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }
                    }
                >
                    <img classNme="mb-40" src="assets/grade_10.jpg" alt={""}/>
                    <p className="text-center   mt-10 font-serif text-xl pb-6">
                        CBSE Board With 10 CGPA. 
                        Satyam Intl  School
                        Patna, Bihar-835303
                    </p>

                </motion.div>
            </div>
        </section>
    )

}
export default Testimonials;