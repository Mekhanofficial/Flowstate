import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";


  const SocialIcons = () => (
    <div className="flex mt-5 gap-4 justify-center text-zinc-500">
      {[
        { icon: faFacebook, count: "53" },
        { icon: faTwitter, count: "71k" },
        { icon: faInstagram, count: "51" },
        { icon: faPinterest, count: "15k" },
        { icon: faYoutube, count: "192k" },
        { icon: faVimeo, count: "21" },
      ].map((item, index) => (
        <div key={index}>
          <FontAwesomeIcon
            className="h-4 bg-black p-2 rounded-3xl"
            icon={item.icon}
          />
          <h2>{item.count}</h2>
        </div>
      ))}
    </div>
  );

export default SocialIcons;
