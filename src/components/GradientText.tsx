import { cn } from "@/lib/utils";

const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GradientText;
