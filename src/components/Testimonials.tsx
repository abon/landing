import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GradientText from "./GradientText";
import Image from "next/image";

const testimonials = [
  {
    name: "Berry Gunawan",
    img: "/user1.svg",
    content:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    star: "3.5",
  },
  {
    name: "Janne Cooper",
    img: "/user2.svg",
    content:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    star: "3.5",
  },
  {
    name: "Cobocannaeru",
    img: "/user3.svg",
    content:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    star: "3.5",
  },
];

const content = (
  <div className="flex flex-col justify-center items-center mt-20 ">
    <GradientText className="font-semibold tracking-wide text-3xl">
      Testimonials
    </GradientText>
    <p className="font-semibold tracking-tight text-5xl">
      What our customer say
    </p>
    <div className="w-full  flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:w-full mt-10">
      {testimonials.map((testimonial) => (
        <>
          <Card className="w-3/2 border-none p-3 m-6">
            <CardHeader>
              <Image src="/icon.svg" width={80} height={80} alt="icon" />
            </CardHeader>
            <CardContent>
              <p>{testimonial.content}</p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Image
                    src={testimonial.img}
                    height={40}
                    width={40}
                    alt={testimonial.name}
                  />
                  <span className="font-semibold ml-2">{testimonial.name}</span>
                </div>
                <div className="flex items-center">
                  <Image src="star.svg" height={40} width={40} alt="star" />
                  <span className="font-semibold ml-4 text-xl">
                    {testimonial.star}
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </>
      ))}
    </div>
  </div>
);

export default function Testimonials() {
  return content;
}
