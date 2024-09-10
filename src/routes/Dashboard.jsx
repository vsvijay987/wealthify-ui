import { DashboardItems } from "../constants";
import ActionCard from "../components/Card";
import { useEffect, useState } from "react";
import InvestedComponent from "../components/Invested";
import FundsComponents from "../components/Funds";
import LoyaltyComponent from "../components/Loyalty";
import GoalsComponent from "../components/Goals";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(
    Object.keys(DashboardItems)[0],
  );
  const [transitionClass, setTransitionClass] = useState("");
  useEffect(() => {
    setTransitionClass("animate-slideIn");
    const timeout = setTimeout(() => setTransitionClass(""), 500);

    return () => clearTimeout(timeout);
  }, [selectedCard]);

  const componentMapping = {
    Invested: InvestedComponent,
    Funds: FundsComponents,
    Loyalty: LoyaltyComponent,
    Goals: GoalsComponent,
  };

  const SelectedComponent = componentMapping[selectedCard];

  const handleCardClick = (name) => {
    setSelectedCard(name);
  };

  return (
    <div className="bg-slate-50 space-x-10 w-full flex flex-col md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 w-full md:w-1/2 h-auto md:h-full">
        {Object.keys(DashboardItems).map((key) => {
          return (
            <ActionCard
              key={key}
              value={DashboardItems[key]}
              onClick={() => handleCardClick(key)}
              isSelected={selectedCard === key}
            />
          );
        })}
      </div>
      <div
        className={`w-full md:w-1/2 h-64 md:h-full bg-slate-400 ${selectedCard !== "Invested" ? transitionClass : ""}`}
      >
        {selectedCard && <SelectedComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
