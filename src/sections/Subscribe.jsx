import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex max-lg:flex-col justify-between items-center gap-10">
      <div>
        <h2 className="text-4xl leading-[68px] lg:max-w-md font-bold">
          Sign Up for
          <span className="text-coral-red"> Updates </span>
          & Newsletter
        </h2>
      </div>
      <div className="lg:max-w-[40%] w-full flex items-center sm:border sm:border-slate-gray max-sm:flex-col rounded-full gap-5 p-2.5">
        <input type="text" name="update" id="update" placeholder="subscribe@nike.com" className="input"/>
        <div className="flex flex-end max-sm:w-full">
        <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
