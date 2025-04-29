const InstagramGrid = ({ images }) => (
  <div className="text-center text-white mt-24 font-bold">
    <h1>INSTAGRAM</h1>
    <div className="my-20 grid gap-2 grid-cols-2 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          className="h-[120px] w-[200px] object-cover"
          src={img}
          alt="Instagram Post"
        />
      ))}
    </div>
    <hr />
  </div>
);

export default InstagramGrid;
