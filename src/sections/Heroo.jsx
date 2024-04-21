import Button1 from "../Components/Button1";
import ShoeCard1 from "../Components/ShoeCard1";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";

const Heroo = () => {
  return (
    <section
      id="Home"
      className="w-full min-h-screen flex xl:flex-row flex-col justify-center items-start gap-[15vw] max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h2 className="text-8xl max-sm:text-[72px] font-palanquin mt-10 font-bold flex-wrap">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">NIKE</span> Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg sm:max-w-sm leading-8 mt-7">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <div className="mt-20">
          <Button1 imgURL={arrowRight} label="Shop Now" />
        </div>
        <div className="flex justify-start items-start flex-wrap w-full mt-16 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="shoecard relative flex-1 flex justify-center items-center xl:max-h-[90vh] mt-[10vh] py-40 bg-primary bg-hero bg-cover bg-center max-sm:w-full xl:max-w-[38vw] rounded-[20px]">
        <img
          src={bigShoe1}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[4%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard1
                imgURL={shoe}
                changeBigShoesImg={(shoe) => setBigShoeImg(shoe)}
                bigShoe=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heroo;
