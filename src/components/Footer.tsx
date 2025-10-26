import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import type { JSX } from "react";
import { SOCIALS } from "@/lib/data";
import holguinFooter from "@/assets/holguin-footer.png";
import icpcCaribeLogo from "@/assets/icpc-caribe-logo.png";
import uhoLogo from "@/assets/UHo_logo.svg";

// Social icon components
const SocialIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        />
        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
        />
      </svg>
    ),
    telegram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
        />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z"
        />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
        />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };

  return icons[name] || null;
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  const [isDesktop, setIsDesktop] = useState(false);
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-blue relative overflow-hidden pt-12 md:pt-4 lg:pt-0"
    >
      <div className="mb-4 flex flex-wrap items-center justify-center gap-4 md:mt-12 md:mb-8">
        {SOCIALS.map((social, index) => (
          <motion.a
            key={`social-${social.name}-${index}`}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="hover:text-yellow text-white transition-all duration-300 hover:scale-110"
            initial={isBrowser ? { opacity: 0, y: -20 } : false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SocialIcon name={social.name} />
          </motion.a>
        ))}
      </div>
      <div className="mx-auto mb-6 flex w-fit flex-col items-start justify-center gap-4 text-white sm:flex-row sm:gap-8 md:mb-8 md:items-center">
        <motion.a
          href="https://icpc.global"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
          initial={isBrowser ? { opacity: 0, x: isDesktop ? -50 : 0 } : false}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isDesktop ? -50 : 0 }
          }
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2.5 shadow-md transition-shadow group-hover:shadow-lg sm:h-10 sm:w-10 sm:p-2">
            <img
              src="https://icpc.global/favicon.ico"
              alt="Logo de ICPC Global"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-sm font-medium sm:text-sm">ICPC Global</span>
        </motion.a>
        <motion.a
          href="https://www.icpccaribe.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
          initial={isBrowser ? { opacity: 0 } : false}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2.5 shadow-md transition-shadow group-hover:shadow-lg sm:h-10 sm:w-10 sm:p-2">
            <img
              src={icpcCaribeLogo.src}
              alt="Logo de ICPC Caribe"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-sm font-medium sm:text-sm">ICPC Caribe</span>
        </motion.a>
        <motion.a
          href="https://www.uho.edu.cu"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
          initial={isBrowser ? { opacity: 0, x: isDesktop ? 50 : 0 } : false}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isDesktop ? 50 : 0 }
          }
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2.5 shadow-md transition-shadow group-hover:shadow-lg sm:h-10 sm:w-10 sm:p-2">
            <img
              src={uhoLogo.src}
              alt="Logo de la Universidad de Holguín"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-sm font-medium sm:text-sm">
            Universidad de Holguín
          </span>
        </motion.a>
      </div>
      <motion.div
        className="w-full pb-12 text-center text-xs text-white"
        initial={isBrowser ? { opacity: 0 } : false}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>
          &copy; 2025 Final Caribeña del ICPC
          <br />
          Todos los derechos reservados
        </p>
      </motion.div>
      <motion.img
        src={holguinFooter.src}
        alt="City Background"
        className="h-full w-full scale-150 object-cover object-center md:scale-100"
        initial={isBrowser ? { opacity: 0, y: 20 } : false}
        animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="overlay absolute right-0 bottom-0 z-10 h-20 w-full"></div>

      <style>{`
        .overlay {
          background: linear-gradient(180deg, transparent 0%, var(--color-blue) 100%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
