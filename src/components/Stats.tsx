import GradientText from "./GradientText";

const stats = [
  {
    label: "Project Completed",
    stat: "12K+",
  },

  {
    label: "Happy Client",
    stat: "7K+",
  },
  {
    label: "Years Experience",
    stat: "10+",
  },

  {
    label: "Win Awards",
    stat: "270+",
  },
];

const Stats = () => {
  const content = (
    <main className="md:flex  justify-center items-center hidden mt-20">
      {stats.map(({ label, stat }) => (
        <div key={stat} className=" w-full ">
          <div className="flex flex-col justify-center items-center">
            <GradientText className="text-6xl font-bold">{stat}</GradientText>
            <span className="font-semibold">{label}</span>
          </div>
        </div>
      ))}
    </main>
  );

  return content;
};

export default Stats;
