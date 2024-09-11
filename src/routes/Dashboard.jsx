import { DashboardItems } from "../constants";
import ActionCard from "../components/Card";
import { useEffect, useState } from "react";
import InvestedComponent from "../components/Invested";
import FundsComponents from "../components/Funds";
import LoyaltyComponent from "../components/Loyalty";
import GoalsComponent from "../components/Goals";
import { useUsers } from "../services/queries";

const Dashboard = () => {
  const users = useUsers();
  console.log("users: ", users);
  const [selectedCard, setSelectedCard] = useState("");
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
    setSelectedCard((prevSelected) => (prevSelected === name ? "" : name));
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={`p-4 ${selectedCard ? "w-1/2" : "w-full flex justify-center items-center"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.keys(DashboardItems).map((key) => (
            <ActionCard
              key={key}
              value={DashboardItems[key]}
              onClick={() => handleCardClick(key)}
              isSelected={selectedCard === key}
              className="w-full"
            />
          ))}
        </div>
      </div>
      <div
        className={`p-[24px] h-64 md:h-full ${selectedCard ? `w-1/2 ${transitionClass}` : "w-0"} transition-all duration-300`}
      >
        {selectedCard && <SelectedComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
