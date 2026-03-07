import { BsLinkedin, BsGithub, BsFileEarmarkPdf } from "react-icons/bs"
import { BiX, BiMenu } from "react-icons/bi"
import React, { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-700 bg-black/70 px-6 py-6 text-white backdrop-blur-md md:px-16 md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100 md:text-3xl"
      >
        Samien Sarwar
      </a>

      <ul className="hidden gap-10 md:flex">
        <li>
          <a
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>

      <ul className="hidden gap-5 md:flex">
        <li>
          <a
            href="https://www.linkedin.com/in/samien-sarwar-432b5b344"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/ssarwar-12"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
        </li>

        <li>
          <a
            href="/Samien_Sarwar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
            aria-label="Resume PDF"
          >
            <BsFileEarmarkPdf />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block cursor-pointer text-4xl md:hidden" onClick={menuOpen} />
      ) : (
        <BiMenu className="block cursor-pointer text-4xl md:hidden" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 md:hidden">
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#tech"
                onClick={closeMenu}
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Tech
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li>
              <a
                href="https://www.linkedin.com/in/samien-sarwar-432b5b344"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/ssarwar-12"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
                aria-label="GitHub"
              >
                <BsGithub />
              </a>
            </li>

            <li>
              <a
                href="/Samien_Sarwar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
                aria-label="Resume PDF"
              >
                <BsFileEarmarkPdf />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar