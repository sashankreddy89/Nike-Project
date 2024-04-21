import {Hero,PopularProducts,SuperQuality,CustomerReviews,Subscribe,SpecialOffer,Footer} from './sections';
import Nav from './Components/Nav';
import Services from './sections/Services.jsx'

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b padding-l">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>  
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-blue-50">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;