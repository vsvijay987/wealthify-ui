import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";

const Funds = () => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          DWS India Small Cap Fund
        </AccordionSummary>
        <AccordionDetails className="text-textSecondary">
          <div>
            <Typography> Current Value: 10,000</Typography>
            <Typography>% Gain: 10%</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          DWS India Small Cap Fund
        </AccordionSummary>
        <AccordionDetails className="text-textSecondary">
          <div>
            <Typography> Current Value: 40,000</Typography>
            <Typography>% Gain: 14%</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          DWS Value Discovery Fund
        </AccordionSummary>
        <AccordionDetails className="text-textSecondary">
          <div>
            <Typography> Current Value: 37,000</Typography>
            <Typography>% Gain: 14%</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          DWS Technology Fund
        </AccordionSummary>
        <AccordionDetails className="text-textSecondary">
          <div>
            <Typography> Current Value: 15,000</Typography>
            <Typography>% Gain: 12%</Typography>
          </div>{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          DWS Blue Chip Fund
        </AccordionSummary>
        <AccordionDetails className="text-textSecondary">
          <div>
            <Typography> Current Value: 41,000</Typography>
            <Typography>% Gain: 13%</Typography>
          </div>{" "}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Funds;
