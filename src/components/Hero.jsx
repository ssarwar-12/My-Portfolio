import { motion} from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex min-h-screen w-full items-center justify-center px-16 py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/Headshot.jpg" alt="" className="w-[300px] h-[300px] object-cover rounded-full cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] md:h-[350px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">Samien Sarwar</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl   md:text-2xl">Computer Engineering @ University of Waterloo</h3>
          <p className="md:text-base text-pretty text-sm text-grey-400">Building intelligent systems at the intersection of robotics, AI, and autonomous navigation.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero