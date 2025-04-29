import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";

 
  const ProfileCard = ({ profileImg, username, handle, stats, bio }) => (
    <div className="mt-10 p-10 bg-zinc-800 ml-7 mr-7 text-center">
      <div className="justify-center flex">
        <img
          className="h-[50px] w-[50px] rounded-full object-cover"
          src={profileImg}
          alt="Profile"
        />
      </div>
      <div className="text-center text-zinc-500">
        <h2 className="font-bold">{username}</h2>
        <h2 className="text-zinc-600 text-xs">{handle}</h2>
        <h2 className="text-zinc-600 mt-2 text-xs">{stats}</h2>
        <h2 className="font-semibold mt-2 text-zinc-300">{bio}</h2>
        <h2 className="text-xs font-bold mt-2 text-zinc-700">
          OVER A YEAR AGO
        </h2>
        <div className="text-zinc-300">
          <FontAwesomeIcon className="h-4 p-2 rounded-3xl" icon={faReply} />
          <FontAwesomeIcon className="h-4 p-2 rounded-3xl" icon={faRetweet} />
          <FontAwesomeIcon className="h-4 p-2 rounded-3xl" icon={faHeart} />
        </div>
        <button className="bg-zinc-700 p-2 text-zinc-400 text-xs mt-2 w-24 font-bold">
          FOLLOW
        </button>
      </div>
    </div>
  );

export default ProfileCard;
