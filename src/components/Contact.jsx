const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <h1 className="text-5xl font-light md:text-7xl">
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </span>
      </h1>

      <p className="max-w-2xl text-sm font-semibold text-gray-400 md:text-lg">
        Want to chat? Send me an E-mail through this button and I will respond as soon as possible!
      </p>

      <a
        href="mailto:ssarwar@uwaterloo.ca"
        className="rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
      >
        Contact Me
      </a>
    </section>
  )
}

export default Contact