import ReviewBox from "../Components/ReviewBox"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col flex-wrap flex-1 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl mb-4">What Our <span className="text-coral-red">Customers</span> Say?</h2>
        <p className="text-center info-text lg:max-w-lg max-w-sm text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
      </div>
      <div className="flex w-[100%] justify-evenly items-center max-lg:flex-col gap-14 mt-20 ">
        {reviews.map((review) => (
          <ReviewBox key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews