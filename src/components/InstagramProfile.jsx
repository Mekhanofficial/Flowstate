import SocialIcons from "./SocialIcons";

 const InstagramProfile = ({
    profileImg,
    username,
    handle,
    stats,
    images,
  }) => (
    <div className="text-center text-zinc-300 text-sm mt-20">
      <h1 className="font-bold">INSTAGRAM</h1>
      <div className="mt-5 mx-10 mb-2 flex justify-center">
        <img
          className="h-[70px] w-[70px] rounded-full object-cover"
          src={profileImg}
          alt="Profile"
        />
      </div>
      <h2 className="font-bold">{username}</h2>
      <h2 className="text-zinc-600 text-xs mt-1">{handle}</h2>
      <h2 className="text-zinc-600 text-sm">{stats}</h2>
      <div className="grid grid-cols-3 mt-5">
        {images.map((img, index) => (
          <img
            key={index}
            className="h-[100px] w-[130px] object-cover"
            src={img}
            alt="Instagram Post"
          />
        ))}
      </div>
      <button className="bg-zinc-700 p-2 text-xs mt-10 w-24 font-bold">
        FOLLOW
      </button>
      <h2 className="font-bold mt-4">FOLLOW US</h2>
      <SocialIcons />
    </div>
  );


export default InstagramProfile;
