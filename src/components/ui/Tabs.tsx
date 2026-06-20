import { useState } from "react";

type TabsProps = {
  tabs: string[];
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
};

export default function Tabs({
  tabs,
  defaultTab,
  onTabChange,
}: TabsProps) {
  const [active, setActive] = useState(
    defaultTab ?? tabs[0]
  );

  const handleTabChange = (tab: string) => {
    setActive(tab);
    onTabChange?.(tab);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`
              px-4 py-2 text-sm font-medium transition-colors
              ${
                active === tab
                  ? "border-b-2 border-cixio-blue text-cixio-blue"
                  : "text-gray-500 hover:text-cixio-blue"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <span className="text-sm text-gray-600">
          Active Tab:
        </span>{" "}
        <span className="font-semibold text-cixio-dark">
          {active}
        </span>
      </div>
    </div>
  );
}