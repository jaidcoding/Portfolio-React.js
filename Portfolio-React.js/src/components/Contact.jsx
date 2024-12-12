
const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>

        <a href="mailto:jaidcoding@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-2xl hover:shadow-indigo-600">Contact Me</a>
      </div>
    </div>
  )
}

export default Contact