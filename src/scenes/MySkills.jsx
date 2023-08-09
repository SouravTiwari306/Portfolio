import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const MySkills=()=>{
const isAboveMediumScreens= useMediaQuery("(min-width : 1060px)");
return (
    <section id="skills" className="">
           <section id="home" className="md:flex md:justify-between md:items-center md:h-full "
    >    
   {/*Image Section*/}
    <div className="basis-3/5 z-10 mt-6 md:mt-25 flex justify-center md:order-2">
{isAboveMediumScreens ?(
<div  className="relative z-0 ml-30">    
    <img alt="skills" 
    className="z-10"
     src= "assets/skills-image.png" /> 
</div>
) :(
<img alt="profile" 
    className="z-10" src= "assets/skills-image.png" /> 
)}
</div>
{/* Main Section */}
<div  className="z-20 basis-2/5 mt-5 md:mt-12">
<motion.div
            className="w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration :0.5}}
            variants={
                {
                   hidden :{opacity :0 ,x:-50} ,
                   visible :{opacity:1,x:0}
                }
            }
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <p className="text-red text-4xl">SKILLS</p>
                </p>
                <LineGradient width="w-2/3"/>
                <p className="mt-5  font-serif text-xl" >
                Committed to continuous growth, I consistently enhance my technical skills through hands-on projects, dedicated learning, and staying abreast of industry trends.
                </p>
            </motion.div>
</div>
    
</section>

        <div className="md:flex md:justify-between mt-10 gap-32">
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{duration :0.5}}
              variants={
                  {
                     hidden :{opacity :0 ,y:50} ,
                     visible :{opacity:1,y:0}
                  }
              }
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl"> Web Development</p>

                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]">

                    </div>

                </div>
                <p className="mt-3 mb-5 font-serif">
 I possess proficient skills in web development, specializing in the MERN stack. With a strong foundation in HTML, CSS, and JavaScript, I create dynamic and responsive user interfaces using React, backed by robust server-side logic using Express.js and Node.js.
                </p>
            </motion.div>
                
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{ delay:0.2,duration :0.5}}
              variants={
                  {
                     hidden :{opacity :0 ,y:50} ,
                     visible :{opacity:1,y:0}
                  }
              }
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl">DSA in C++</p>

                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]">

                    </div>

                </div>
                <p className="mt-5 font-serif">
                Proficient in Data Structures and Algorithms (DSA) using C++, I design efficient and optimized solutions for complex programming challenges. My strong grasp of fundamental DSA concepts empowers me to create elegant and scalable code.
                </p>
            </motion.div>

            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{ delay:0.4,duration :0.5}}
              variants={
                  {
                     hidden :{opacity :0 ,y:50} ,
                     visible :{opacity:1,y:0}
                  }
              }
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl">DataBase management</p>

                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]">

                    </div>

                </div>
                <p className="mt-3 font-serif">
                Experienced in database management across SQL and MongoDB, I adeptly design, and optimize database solutions. With a deep understanding of relational structures, I ensure data integrity and efficiency, enabling seamless storage, retrieval, and manipulation of information.
                </p>
            </motion.div>
        </div>
    </section>
)
};
export default MySkills;