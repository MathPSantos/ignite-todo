import { classNames } from "../../../core/utils/classname.util";

interface IndicatorProps {
  value: number;
  content: string;
  colorScheme?: "blue" | "purple";
}

const COLOR_SCHEME_MAPS = {
  blue: "text-blue-500",
  purple: "text-purple-500",
};

export function Indicator({
  content,
  value,
  colorScheme = "blue",
}: IndicatorProps) {
  const compClassName = classNames(
    "flex items-center gap-2 text-sm font-bold",
    COLOR_SCHEME_MAPS[colorScheme]
  );

  return (
    <p className={compClassName}>
      {content}{" "}
      <span className="flex items-center justify-center h-5 px-2 bg-gray-400 rounded-full text-gray-100">
        {value}
      </span>
    </p>
  );
}
