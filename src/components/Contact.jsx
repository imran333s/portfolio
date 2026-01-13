// import contactImg from "../assets/contact.jpg";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// import { Button } from "@mui/material";
// import {
//   Phone,
//   Email,
//   LinkedIn,
//   GitHub,
//   ArrowOutward,
// } from "@mui/icons-material";

// const Contact = () => {
//   return (
//     <>
//       <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-4 md:flex-row">
//         <motion.div
//           variants={slideIn("left", "tween", 0.1, 0.5)}
//           className="flex-[0.75] rounded-2xl bg-black-100 p-8"
//         >
//           <p className={styles.sectionSubText}>Get in touch</p>
//           <h3 className={styles.sectionHeadText}>Contact.</h3>
//           <div className="flex-center-center mt-8 flex-wrap gap-2">
//             <div>
//               <a href="mailto:imran33s786@gmail.com">
//                 <Button variant="outlined" endIcon={<Email />}>
//                   Email
//                 </Button>
//               </a>
//             </div>
//             <div>
//               <a
//                 href="https://www.linkedin.com/in/md-imran-03-/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button variant="outlined" endIcon={<LinkedIn />}>
//                   LinkedIn
//                 </Button>
//               </a>
//             </div>
//             <div>
//               <a
//                 href="https://github.com/imran333s"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button variant="outlined" endIcon={<GitHub />}>
//                   GitHub
//                 </Button>
//               </a>
//             </div>
//             <a href="tel:+917362043095">
//               <Button variant="outlined" endIcon={<Phone />}>
//                 Call
//               </Button>
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={slideIn("right", "tween", 0.1, 0.5)}
//           className="md:h-auto md:flex-1"
//         >
//           <img
//             src={contactImg}
//             alt="contact-us"
//             className="h-full w-full object-contain"
//           />
//         </motion.div>
//       </div>
//       <div className="mb-4 ml-5">
//         <h1 className="my-3  text-xl font-semibold text-slate-50">
//           Thanks for scrolling.
//         </h1>
//         <div>
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://drive.google.com/file/d/1892KjLv-ZznsiR2-OiT_-gCBvFAv9MRX/view?usp=drivesdk"
//           >
//             <Button variant="outlined" endIcon={<ArrowOutward />}>
//               Resume
//             </Button>
//           </a>
//         </div>
//       </div>
//       <hr className="ml-2" />
//     </>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import contactImg from "../assets/contact.jpg";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import {
  Phone,
  Email,
  LinkedIn,
  GitHub,
  ArrowOutward,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-4 md:flex-row">
        {/* Left: Contact Info */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="flex-center-center mt-8 flex-wrap gap-2">
            {/* Email Button */}
            <Button
              variant="outlined"
              endIcon={<Email />}
              component="a"
              href="mailto:imran33s786@gmail.com"
            >
              Email
            </Button>

            {/* Call Button */}
            <Button
              variant="outlined"
              endIcon={<Phone />}
              component="a"
              href="tel:+917362043095"
            >
              Call
            </Button>

            {/* LinkedIn Button */}
            <Button
              variant="outlined"
              endIcon={<LinkedIn />}
              component="a"
              href="https://www.linkedin.com/in/md-imran-03-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>

            {/* GitHub Button */}
            <Button
              variant="outlined"
              endIcon={<GitHub />}
              component="a"
              href="https://github.com/imran333s"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Right: Contact Image */}
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src={contactImg}
            alt="contact-us"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>

      {/* Resume Section */}
      <div className="mb-4 ml-5">
        <h1 className="my-3 text-xl font-semibold text-slate-50">
          Thanks for scrolling.
        </h1>
        <Button
          variant="outlined"
          endIcon={<ArrowOutward />}
          component="a"
          href="https://drive.google.com/file/d/1VSbjvfTcRYEdpWeqEX0z1zxzd0yXxTwa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </div>

      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
