import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faEye } from "@fortawesome/free-solid-svg-icons";
import SocialShare from "./SocialShare";

const ArticleCard = ({
  image,
  category,
  title,
  author,
  description,
  imagesize = "w-full",
}) => (
  <div className="text-center text-zinc-400">
    {/* Image with hover overlay */}
    <div className="relative">
      <img className={`${imagesize} object-cover mx-auto`} src={image} alt="" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-sm">VIEW POST</span>
          {/* Replace with your actual icons */}
          <div className="flex space-x-2">
            <FontAwesomeIcon icon={faShare} className="w-4 h-4 text-white" />
            <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-xs mt-10 font-semibold">{category}</h2>
    <h2 className="text-2xl font-bold">{title}</h2>
    <h5 className="text-xs mt-2 mb-5 font-bold">{author} . NO COMMENTS</h5>
    {description && <h2 className="text-sm">{description}</h2>}
    <button className="bg-zinc-700 p-2 text-xs mt-2 w-24 font-bold hidden md:inline-block">
      VIEW POST
    </button>
    <SocialShare className="hidden md:block" />
  </div>
);

export default ArticleCard;
