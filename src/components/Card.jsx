import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const ActionCard = ({ value, onClick, isSelected }) => {
  const { name, description, image } = value;
  return (
    <Card
      className={`h-[290px] transition-all duration-300 ${
        isSelected ? "shadow-3xl transform scale-105" : ""
      }`}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia
          className="h-[180px]"
          component="img"
          sizes="small"
          image={image}
          alt={name}
        />
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
  );
};

export default ActionCard;
