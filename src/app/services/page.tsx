import Container from "@/components/Container";
import Title from "@/components/Title";
import FadeIn from "@/components/FadeIn";

export default function Services() {
  return (
   <Container>
       <div className="flex flex-col gap-6">
           <FadeIn>
               <Title title="We Provide the best services in town."/>
           </FadeIn>
           <FadeIn>
           <div className="flex flex-col md:flex-row items-center gap-10">
               <p className="max-w-2xl">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae earum error suscipit tempore voluptatem. Accusantium adipisci at atque beatae, deserunt dolorem ea earum enim, eos ex iure laborum nam non placeat, tenetur veritatis voluptates! Cupiditate dolorum, enim ipsum magnam necessitatibus neque non ut! Ad eaque eius maiores tenetur veritatis!
               </p>
               <p className="max-w-2xl">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae earum error suscipit tempore voluptatem. Accusantium adipisci at atque beatae, deserunt dolorem ea earum enim, eos ex iure laborum nam non placeat, tenetur veritatis voluptates! Cupiditate dolorum, enim ipsum magnam necessitatibus neque non ut! Ad eaque eius maiores tenetur veritatis!
               </p>
           </div>
           </FadeIn>
           <FadeIn>
           <div className="flex flex-col md:flex-row items-center gap-10">
               <p className="max-w-2xl">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae earum error suscipit tempore voluptatem. Accusantium adipisci at atque beatae, deserunt dolorem ea earum enim, eos ex iure laborum nam non placeat, tenetur veritatis voluptates! Cupiditate dolorum, enim ipsum magnam necessitatibus neque non ut! Ad eaque eius maiores tenetur veritatis!
               </p>
               <p className="max-w-2xl">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae earum error suscipit tempore voluptatem. Accusantium adipisci at atque beatae, deserunt dolorem ea earum enim, eos ex iure laborum nam non placeat, tenetur veritatis voluptates! Cupiditate dolorum, enim ipsum magnam necessitatibus neque non ut! Ad eaque eius maiores tenetur veritatis!
               </p>
           </div>
       </FadeIn>
       </div>

   </Container>
  );
}
