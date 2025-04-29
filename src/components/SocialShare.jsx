import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

 const SocialShare = () => (
   <div className="flex mt-5 items-center justify-center gap-4 text-zinc-500">
     <h2 className="text-sm">SHARE</h2>
     <FontAwesomeIcon className="h-4" icon={faArrowRight} />
     <FontAwesomeIcon className="h-4" icon={faFacebook} />
     <FontAwesomeIcon className="h-4" icon={faTwitter} />
     <FontAwesomeIcon className="h-4" icon={faPinterest} />
   </div>
 );

export default SocialShare;
