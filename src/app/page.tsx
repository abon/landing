import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import BestWorks from "@/components/BestWorks";
import Articles from "@/components/Articles";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Socials from "@/components/Socials";
import Head from "@/components/Head";

export default function Home() {
  const wrapper = (
    <MaxWidthWrapper>
      <Head />
      <TrustedBy />
      <Features />
      <Stats />
      <BestWorks />
    </MaxWidthWrapper>
  );

  return (
    <>
      {wrapper}
      <Articles />
      <Testimonials />
      <FAQ />
      <Socials />
    </>
  );
}
