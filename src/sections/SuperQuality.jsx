import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex max-lg:flex-col justify-between gap-10 scroll-smooth"
    id="about-us">
      <div>
        <h2 className="mb-4 text-4xl lg:max-w-lg font-palanquin font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance. 
          <br /><br />
          Our dedication to detail
          and excellence ensures your satisfaction
        </p>
        <button className="bg-coral-red text-white px-6 py-2 rounded-full mt-10">View Details</button>
      </div>
      <div>
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
