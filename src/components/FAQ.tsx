import GradientText from "./GradientText";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const accordionFaqs = [
    {
      trigger: "How can we help your business?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      trigger: "What are the advantages of Bisnext?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      trigger: "Let’s find an office near you?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      trigger: "How IT consultancy experts work?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];

  const accordion = accordionFaqs.map(({ trigger, content }) => (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-3">
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  ));

  const content = (
    <div className="flex flex-col-reverse bg-[#181818] mt-20 p-10 lg:grid lg:grid-cols-2">
      <div className="text-white">{accordion}</div>
      <div className="lg:p-10">
        <GradientText className="tracking-wide text-5xl font-semibold">
          FAQs
        </GradientText>
        <p className="font-semibold tracking-tight text-white text-5xl mt-5">
          Be Kind to Your Mind Question & Answer
        </p>
      </div>
    </div>
  );

  return content;
};

export default FAQ;
