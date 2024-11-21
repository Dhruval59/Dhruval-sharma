// components/Footer.js
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="text-xl bg-slate-400 dark:bg-gray-800 text-black dark:text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Branding or Logo */}
          <div className="text-lg font-semibold mb-4 md:mb-0">
            © 2024 MyPortfolio
          </div>
  
          {/* Navigation Links */}
          <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact">
                Contact
              </Link>
            </li>
          </ul>
          </nav>
  
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/dhruvalsharma59"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.927 2.207-4.927 4.927 0 .386.043.762.127 1.124-4.094-.205-7.725-2.166-10.157-5.144-.425.729-.667 1.575-.667 2.475 0 1.708.87 3.213 2.188 4.097-.807-.026-1.566-.247-2.228-.617v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.031-.929-.089.631 1.953 2.457 3.377 4.617 3.417-1.692 1.326-3.826 2.117-6.144 2.117-.399 0-.793-.023-1.182-.069 2.192 1.403 4.798 2.22 7.606 2.22 9.116 0 14.098-7.554 14.098-14.098 0-.215-.004-.429-.014-.643.966-.698 1.8-1.573 2.463-2.571z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/dhruval-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.728V1.728C24 .774 23.21 0 22.23 0zm-13.08 20.452H4.917V9.095H9.15v11.357zM7.034 7.671c-1.342 0-2.43-1.095-2.43-2.448 0-1.353 1.088-2.448 2.43-2.448s2.43 1.095 2.43 2.448c0 1.353-1.088 2.448-2.43 2.448zM20.452 20.452h-4.233v-5.81c0-1.38-.027-3.155-1.924-3.155-1.93 0-2.225 1.504-2.225 3.057v5.909H8.837V9.095h4.064v1.551h.056c.566-1.072 1.946-2.201 4.004-2.201 4.282 0 5.074 2.818 5.074 6.486v5.521z" />
              </svg>
            </a>
            <a
              href="https://github.com/Dhruval59"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.797 8.207 11.396.6.113.827-.261.827-.578v-2.171c-3.338.727-4.037-1.607-4.037-1.607-.548-1.394-1.337-1.766-1.337-1.766-1.091-.748.083-.734.083-.734 1.204.084 1.839 1.221 1.839 1.221 1.068 1.828 2.804 1.299 3.491.993.107-.772.418-1.3.762-1.6-2.664-.303-5.466-1.333-5.466-5.933 0-1.312.468-2.388 1.238-3.221-.124-.303-.536-1.524.118-3.167 0 0 1.006-.322 3.297 1.233 1.563-.434 3.237-.634 4.848-.64 1.608.006 3.28.206 4.846.64 2.29-1.555 3.296-1.233 3.296-1.233.654 1.643.242 2.864.118 3.167.77.833 1.238 1.909 1.238 3.221 0 4.61-2.803 5.63-5.467 5.933.426.361.791.964.791 1.905v2.828c0 .317.227.693.828.578C20.563 21.798 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  