import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";


  const FeaturedImageCard = ({ image, category, title, className }) => (
    <div
      className={`relative ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: window.innerWidth >= 1024 ? "fixed" : "scroll",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 p-20">
        <div className="text-center">
          <h3 className="font-bold text-sm mb-3">{category}</h3>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="flex mt-5 items-center justify-center gap-4 text-zinc-200">
            <h2>SHARE</h2>
            <FontAwesomeIcon className="h-4" icon={faArrowRight} />
            <FontAwesomeIcon className="h-4" icon={faFacebook} />
            <FontAwesomeIcon className="h-4" icon={faTwitter} />
            <FontAwesomeIcon className="h-4" icon={faPinterest} />
          </div>
        </div>
      </div>
    </div>
  );

export default FeaturedImageCard;