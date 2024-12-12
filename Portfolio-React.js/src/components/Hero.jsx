import image from '/public/image.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        
        >
          <img src={image} className='w-[250px] h-[250px] object-cover cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px] md:h-[300px]'/>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        
        className="flex max-w-[600px] flex-col items-center gap-3 text-center">
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl'>
            Jaidon Clinton
          </h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl'>
            Web Developer
          </h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>
            I am a web developer skilled in React, Next.JS and Tailwind, focused on building clean, scalable applications. From front-end design to seamless database integration with PostgresSQL, I create efficient solutions for dynamic user experiences. Lets build something great together!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero