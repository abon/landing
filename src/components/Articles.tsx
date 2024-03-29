import React from "react";
import GradientText from "./GradientText";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";

const Articles = () => {
  const articles = (
    <div className="bg-[#181818] flex flex-col w-full h-full items-center justify-center mt-20 ">
      <div className="grid mx-auto mt-8 p-6 lg:flex lg:justify-between items-center w-11/12 lg:w-3/4">
        <div className="text-center lg:text-left">
          <GradientText className="uppercase text-xl lg:text-2xl font-semibold">
            Latest Blog
          </GradientText>
          <h3 className="font-semibold text-white text-3xl lg:text-xl mt-4">
            Check Some of Latest News & Articles
          </h3>
        </div>
        <div className="mt-6 lg:mt-0">
          <Button className="flex items-start shadow-gradient bg-white text-black hover:text-white">
            Load More
          </Button>
        </div>
      </div>
      <section className="w-full flex flex-col justify-center items-center lg:flex-row ">
        <div className="w-[600px] relative mt-8 p-12">
          <Image
            src="/article.png"
            width={500}
            height={500}
            alt="article"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0  w-full h-full bg-[#181818] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-3/4 text-white">
            <Card className="bg-[#181818]  text-white border-transparent">
              <CardHeader>
                <CardDescription>UI Design | 22 May 2023</CardDescription>
                <CardTitle>What is UI Design in Front End Design?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-white">
                  READ MORE <MoveUpRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-[600px] relative mt-24 p-12">
          <Image
            src="/article.png"
            width={500}
            height={500}
            alt="article"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0  w-full h-full bg-[#181818] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-3/4 text-white">
            <Card className="bg-[#181818]  text-white border-transparent">
              <CardHeader>
                <CardDescription>UI Design | 22 May 2023</CardDescription>
                <CardTitle>What is UI Design in Front End Design?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-white">
                  READ MORE <MoveUpRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  return articles;
};

export default Articles;
