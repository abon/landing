import { Poppins } from "next/font/google";
import Image from "next/image";
import GradientText from "./GradientText";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: "500" });

const col1 = [
  {
    label: "UX Experience ",
    text: "I design products that are more than pretty. I make them  usable.",
    src: "/f1.png",
  },
  {
    label: "UX Experience ",
    text: "I design products that are more than pretty. I make them  usable.",
    src: "/f2.png",
  },
];

const col2 = [
  {
    label: "UX Experience ",
    text: "I design products that are more than pretty. I make them  usable.",
    src: "/f3.png",
  },
  {
    label: "UX Experience ",
    text: "I design products that are more than pretty. I make them  usable.",
    src: "/f4.png",
  },
];

const Features = () => {
  const features = (
    <div className="flex flex-col mx-auto justify-center items-center lg:grid lg:grid-cols-2 mt-12">
      <div className="w-full lg:p-14 flex-1 text-center lg:text-left">
        <GradientText className="uppercase text-xl lg:text-2xl font-medium tracking-wide ">
          Features
        </GradientText>
        <h2
          className={cn(
            font.className,
            "text-[#131313] text-2xl lg:text-4xl mt-6 w-11/12 lg:w-9/12"
          )}
        >
          Giving Your Business Some Great Ideas
        </h2>
        <p className="text-muted-foreground tracking-tight text-sm mt-6 lg:mt-8 w-11/12 lg:w-9/12">
          Every designer needs the right tools to do the perfect job.
          Thankfully, we can do that. I design products that are more than
          pretty. I make them shippable and usable.
        </p>
        <Button className="shadow-gradient mt-6 lg:mt-8">Contact us</Button>
      </div>
      <div className="flex flex-col mx-auto justify-center gap-x-8 text-center w-full lg:w-10/12 items-center lg:grid lg:grid-cols-2">
        <div className="w-full lg:mt-20">
          {col1.map((data) => (
            <div key={data.label} className="mt-7">
              <Image
                src={data.src}
                height={300}
                width={300}
                alt={data.label}
                className="w-full"
              />
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mt-4">
                {data.label}
              </h3>
              <p className="text-muted-foreground mt-2">{data.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          {col2.map((data) => (
            <div key={data.label} className="mt-7">
              <Image
                src={data.src}
                height={300}
                width={300}
                alt={data.label}
                className="w-full"
              />
              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mt-4">
                {data.label}
              </h3>
              <p className="text-muted-foreground mt-2">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return features;
};

export default Features;
