import Image from "next/image";
import GradientText from "./GradientText";
import { Button } from "./ui/button";

const data = ["/g1.png", "/g2.png", "/g3.png"];

const BestWorks = () => {
  return (
    <>
      <div className="grid mx-auto mt-16 p-10 lg:flex lg:justify-between items-center ">
        <div>
          <GradientText className="uppercase text-2xl font-semibold lg:text-2xl">
            portfolio
          </GradientText>
          <h3 className="font-semibold text-4xl lg:text-xl">
            Some Of Our Best Works
          </h3>
        </div>
        <div>
          <Button className="flex items-start shadow-gradient mt-10 ">
            Load More
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col mx-auto lg:flex-row">
          {data.map((image) => (
            <Image
              src={image}
              height={100}
              width={100}
              alt="image"
              key={image}
              className=" lg:w-[281px] w-3/4 mx-auto mt-4"
            />
          ))}
        </div>
        <div className="hidden lg:flex flex-col mx-auto lg:flex-row-reverse">
          {data.map((image) => (
            <Image
              src={image}
              height={100}
              width={100}
              alt="image"
              key={image}
              className="lg:w-[281px] sm:w-full mx-auto mt-4"
            />
          ))}
        </div>
        <div className="hidden lg:flex flex-col mx-auto lg:flex-row">
          {data.map((image) => (
            <Image
              src={image}
              height={100}
              width={100}
              alt="image"
              key={image}
              className="w-[281px] mx-auto mt-4"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestWorks;
