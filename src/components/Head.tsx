import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

import { Button } from "./ui/button";
import GradientText from "./GradientText";
import { cn } from "@/lib/utils";

const jakartaFont = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Head = () => {
  const head = (
    <div className="py-10 lg:grid lg:grid-cols-2 flex flex-col-reverse text-center mx-auto items-center ">
      <div>
        <GradientText
          className={cn(
            jakartaFont.className,
            "tracking-wide font-bold uppercase text-8xl "
          )}
        >
          Miami
        </GradientText>
        <h1 className="text-2xl lg:text-4xl tracking-wide uppercase font-bold ml-4 lg:ml-16 text-slate-950">
          Walke<span className="lg:text-white md:text-stone-950">r</span>
        </h1>
        <p className="mt-8 mx-auto text-muted-foreground lg:w-[420px] md:w-[300px] shrink-0 tracking-wide">
          Award-winning product designer based in Georgia. We create
          user-friendly interfaces for fast-growing startups.
          <Button className="shadow-gradient mt-8 lg:mt-24 flex items-start">
            Book a Call
          </Button>
        </p>
      </div>
      <Image src="/girl.svg" width={450} height={50} alt="company logo" />
    </div>
  );

  return head;
};

export default Head;
