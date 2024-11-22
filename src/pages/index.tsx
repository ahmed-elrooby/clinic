import Gallary from "@/components/Gallary/Gallary";
import Partners from "@/components/Partners/Partners";
import Points from "@/components/Points/Points";
import AvilableTime from "@/components/molecules/AvilableTime";
import Services from "@/components/molecules/Services";
import ServicesImage from "@/components/molecules/ServicesImage";
import Hearo from "@/components/molecules/hearoSeaction";
import Offers from "@/components/molecules/offers";
import Testimonials from "@/components/molecules/testimonials";

export default function Home() {
  return (
    <div>
      <main>
        <Hearo />
        <div className="px-3  md:px-20 lg:px-32">
          <AvilableTime />

          <Services title="Doctor Services" />
          {/* <Offers
            points={"5"}
            description={
              "    Description about what should he do to earn points"
            }
          /> */}
          <Points />
          <Partners />
          <Testimonials
            title="What People Say"
            info="Welcome to our Website name and what we do say some discriptions abouth this service or what you need. "
          />
          <Gallary />
          {/* <ServicesImage title={"Pictures of our service"} /> */}
        </div>
      </main>
    </div>
  );
}
