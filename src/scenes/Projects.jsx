import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

 const container={
    hidden:{},
    visible:{
        transition :{staggerChildren :0.2}
    }
 };
 const projectVariant={
hidden :{opacity:0,scale:0.8},
visible:{opacity:1, scale:1}
 }
 

 const Project1=(BingeMovie)=>{
    const overlayStyles=`absolute h-full w-full opacity-0 hover:opacity-90 transition diration-500 bg-grey flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    
    return  (
        <motion.div
        variants={projectVariant} className="relative"
        >
            <div className={overlayStyles}>
            <a href="https://github.com/SouravTiwari306/BingeMovie" target="blank">
              <p className="text-2xl font-playfair">BingeMovie</p>
              <p className="mt-7">
              Featuring dual panels for both admin and users, my movie ticket booking website offers comprehensive functionality. Admins efficiently manage movie listings, and timings, while users enjoy easy access to movie choices, seat selection, and secure bookings.
              </p>
              </a>
            </div>
            <img src="../assets/Movie-Ticket-Booking-1024x768.png" alt={""} />

        </motion.div>
    );
 };
 const Project2=(CoinTracker)=>{
    const overlayStyles=`absolute h-full w-full opacity-0 hover:opacity-90 transition diration-500 bg-grey flex flex-col justify-center items-center text-center p-16 text-deep-blue`

    return  (
        <motion.div
        variants={projectVariant} className="relative"
        >
            <div className={overlayStyles}>
            <a href="https://github.com/SouravTiwari306/CoinTracker" target="blank">
              <p className="text-2xl font-playfair">CoinTracker</p>
              <p className="mt-7">
              My CoinTracker website offers real-time cryptocurrency monitoring, empowering users to track market prices, and historical data. With user-friendly interfaces and timely insights, it simplifies crypto asset management.
              </p>
              </a>
            </div>
            <img src="..assets/Bitcoin.jpg" alt={""}/>

        </motion.div>
    );
 };
 const Project3=({title})=>{
    const overlayStyles=`absolute h-full w-full opacity-0 hover:opacity-90 transition diration-500 bg-grey flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    
    return  (
        <motion.div
        variants={projectVariant} className="relative"
        >
            <div className={overlayStyles}>
            <a href="https://github.com/SouravTiwari306/My-PortFolio" target="blank">
              <p className="text-2xl font-playfair">My Portfolio</p>
              <p className="mt-7">
              Built with React.js, my portfolio showcases my skills, projects, and achievements in an interactive and visually appealing manner, providing a comprehensive overview of my journey and expertise.
              </p>
              </a>
            </div>
            <img src="..assets/portfolio1.png" alt={""}/>

        </motion.div>
    );
 };
 const Project4=({title})=>{
    const overlayStyles=`absolute h-full w-full opacity-0 hover:opacity-90 transition diration-500 bg-grey flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    
    return  (
        <motion.div
        variants={projectVariant} className="relative"
        >
            <div className={overlayStyles}>
            <a href="https://github.com/SouravTiwari306/FlipKart-Clone" target="blank">
              <p className="text-2xl font-playfair">Flipkart Clone</p>
              <p className="mt-7 font-playfair">
              I have created a Flipkart clone using HTML and CSS, replicating the intuitive user interface and responsive design of the original platform to provide a seamless shopping experience.
              </p>
              </a>
            </div>
    <img src="../assets/hqdefault.jpg"alt="" />


        </motion.div>
    );
 };

const Projects=()=>{
return (
    <section id="projects" className="pt-20 pb-20">
         <motion.div
            className="md:w-1/3 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration :0.5}}
            variants={
                {
                   hidden :{opacity :0 ,y:-50} ,
                   visible :{opacity:1,y:0}
                }
            }
            >
                <div>
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red ">PRO</span>JECTS
                </p>
                
                <div className="flex-justify-center mt-5">
                <LineGradient width="w-4/4"/>
                </div>
                </div>
                <p className="mt-10 mb-10 font-serif text-xl">
                I have a diverse portfolio of projects that showcase my ability to conceptualize, develop, and solutions that meet real-world needs.
                </p>
            </motion.div>

{/* {projects} */}

<div className="flex justify-center">
<motion.div
            className="sm:grid sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration :0.5}}
            variants={
                container
            }
            >
                <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px]  text-2xl
                font-playfair font-semibold ">
                    BEAUTIFUL User Interface
                </div>
                <Project1  title="Project 1"/>
                <Project2  title="Project 2"/> 
                <Project3  title="Project 3"/>
                <Project4 title="Project 4"/>
                <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px]  text-2xl
                font-playfair font-semibold ">
                     SMOOTH USER EXPERIENCE

                </div>


        </motion.div>
</div>

    </section>
)
}
export default Projects;