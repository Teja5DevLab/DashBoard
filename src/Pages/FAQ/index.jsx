import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion
        sx={{
          backgroundColor: colors.primary[500],
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I switch between Dark Mode and Light Mode?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Use the button located in the top bar to easily toggle between Dark
            Mode and Light Mode according to your preference.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: colors.primary[500],
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What types of charts are available on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dashboard includes various chart types such as bar charts, line
            charts, and pie charts to visualize your data effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: colors.primary[500],
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I create a new profile?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can create a new profile by filling out the form on the "Create
            Profile" page, accessible from the sidebar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: colors.primary[500],
        }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What pages can I access from the sidebar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The sidebar gives you access to pages like "Invoice Management",
            "Team Management", and "Contact Information".
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
