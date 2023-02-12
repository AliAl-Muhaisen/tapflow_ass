import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
interface CardProps {
  image: any;
  name: string;
  country: string;
  cities: string[];
  link: string;
}
const CardUser = (props: CardProps) => {
  const { name, country, cities, image } = props;

  return (
    <>
      <Grid item xs={12} sm={12} px={0.5} my={0.5}>
        <Paper elevation={4} color={"primary"}>
          <Card

          // sx={{
          //   py: {
          //     sm: 4,
          //     xs: 3,
          //   },
          //   px: {
          //     sm: 4,
          //     xs: 1.8,
          //   },
          // }}
          >
            <CardHeader
              avatar={
                <Avatar
                  aria-label="user"
                  alt="profile image"
                  style={{ backgroundColor: "primary.main" }}
                  src={image}
                  sx={{
                    width: 100,
                    height: 100,
                    border: "1px solid",
                    borderColor: "#a39b8b",
                  }}
                />
              }
              title={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: 34,
                  }}
                >
                  {name}
                </Typography>
              }
              subheader={
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: 22,
                  }}
                >
                  {country}
                </Typography>
              }
            />
            <CardContent sx={{display:"flex"}}>Aliaaaaaa</CardContent>
           <CitiesCollapse cities={cities}/>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default CardUser;

const CitiesCollapse = (props: { cities: string[] }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Cities</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.cities.map((city) => (
          <Typography
            key={city}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {city}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
