import { motion } from "framer-motion";
import { slider} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  netflix  from "../assets/logos/netflix.png";
import stats from "../assets/logos/stats.svg";
import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";

export const Brands = () => (
  <section className="py-0 sm:py-24 bg-white w-full mt-0 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

    
     
    </motion.div>
   
    
  </section>
);
