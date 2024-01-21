import Image from "next/image";

const TrustedBy = () => {
  const companies = [
    {
      name: "Google Inc",
      src: "/logo1.svg",
    },
    {
      name: "Facebook Inc",
      src: "/logo2.svg",
    },
    {
      name: "Twitter Inc",
      src: "/logo3.svg",
    },
    {
      name: "Pinterest Inc",
      src: "/logo4.svg",
    },
    {
      name: "Ditto Inc",
      src: "/logo5.svg",
    },
  ];

  const content = (
    <main className="flex flex-col justify-center items-center text-center mt-24">
      <h3 className="text-muted-foreground text-2xl items-center">
        Trusted By
      </h3>
      <div className="flex flex-col lg:flex-row">
        {companies.map(({ name, src }) => (
          <div key={name} className="p-5 ">
            <Image src={src} width={200} height={200} alt={`${name} logo`} />
          </div>
        ))}
      </div>
    </main>
  );
  return content;
};

export default TrustedBy;
