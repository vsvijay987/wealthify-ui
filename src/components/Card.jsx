import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import InvestedActionCard from "./InvestedActionCard";
import FundsActionCard from "./FundsActionCard";
import LoyaltyActionCard from "./LoyaltyActionCard";
import GoalsActionCard from "./GoalsActionCard";

const ActionCard = ({ value, onClick, isSelected }) => {
  const { name, description } = value;
  console.log("name: ", name);

  const renderComponentByName = (name) => {
    switch (name) {
      case "Invested":
        return <InvestedActionCard />;
      case "Funds":
        return <FundsActionCard />;
      case "Loyalty":
        return <LoyaltyActionCard />;
      case "Goals":
        return <GoalsActionCard />;
      default:
        return <InvestedActionCard />;
    }
  };

  return (
    <div>
      <Card
        className={`h-[290px] hover:scale-105 shadow-custom-2xl transition-all duration-300 ${
          isSelected ? "shadow-3xl transform scale-105" : ""
        }`}
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea>
          <div className="h-[178px] w-full cursor-not-allowed">
            {renderComponentByName(name)}
          </div>

          <CardContent onClick={onClick}>
            <Typography
              gutterBottom
              variant="h5"
              className="text-textPrimary"
              component="div"
            >
              {name}
            </Typography>
            <Typography variant="body2" className="text-textSecondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ActionCard;
