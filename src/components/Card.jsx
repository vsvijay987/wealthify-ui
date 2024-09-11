import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import InvestedActionCard from "./InvestedActionCard";
import FundsActionCard from "./FundsActionCard";
import LoyaltyActionCard from "./LoyaltyActionCard";
import GoalsActionCard from "./GoalsActionCard";

const ActionCard = ({ value, onClick, isSelected }) => {
  const { name, description, image } = value;
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
        className={`h-[290px] shadow-custom-2xl transition-all duration-300 ${
          isSelected ? "shadow-3xl transform scale-105" : ""
        }`}
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea onClick={onClick}>
          <div className="h-[178px] w-full">{renderComponentByName(name)}</div>

          <CardContent>
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
