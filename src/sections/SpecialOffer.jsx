import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="max-container justify-between gap-10 items-center flex max-sm:flex-col flex-row-reverse">
      <div className="padding">
        <h2 className="text-4xl mb-10 font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text"> 
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <br />
        <p className="info-text mb-10">
          Navigate a realm of
          possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of
          exceptional.</p>
          <Button label="Shop now" iconUrl={arrowRight} />
      </div>
      <div className="min-w-[50%]">
        <img src={offer}
          alt='Shoe Promotion'
          width={760}
          height={680}
          className='object-contain w-full'/>
      </div>
    </section>
  );
};

export default SpecialOffer;
