import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ProfileInfo () {
  return (
    <Grid
      container
      justifyContent={"left"}
      justifySelf={"left"}
      sx={{}}
      my={2}
      px={1}
      display={"flex"}
    >
     <Grid item xs={12} justifyContent={"left"} display={"block"} mt={3}>
        <Typography
          variant="subtitle2"
          fontFamily="sans-serif"
          fontWeight={"bold"}
          align="left"
        >
          Info
        </Typography>
        <Grid
          container
          textAlign={"left"}
    
          gridRow={"auto"}
          columnSpacing={3}
        >
          {["Saudi Arabia", "Saudi Arabia", "Saudi Arabia"].map((text,index) => {
            return (
              <Grid key={index} sx={{mt:{xs:1.5 ,md:0.5}}}>
                <Box
                  borderRadius={5}
                  sx={{
                    borderWidth: 10,
                    borderColor: "red",
                    border: 1,
                    minWidth: 200,
                    p: 1,
                    mx: 3,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle2"
                      fontFamily="sans-serif"
                      fontWeight={"bold"}
                      align="left"
                    >
                      Country
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="caption"
                      fontFamily="sans-serif"
                      align="left"
                    >
                      {text}
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        justifyContent={"left"}
        display={"flex"}
        mt={3}
        textAlign={"left"}
      >
        <Typography
          variant="subtitle2"
          fontFamily="sans-serif"
          fontWeight={"bold"}
        >
          Hobbies
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={1}>
          {["Swimming", "Horse Back riding", "Camping"].map((text) => {
            return (
              <Chip
                label={text}
                key={text}
                sx={{
                  borderRadius: 2,
                  width: 100,
                  color: "blue",
                  backgroundColor: "rgba(158, 237, 255, 0.3)",
                }}
              />
            );
          })}
        </Stack>
      </Grid>
      <Grid xs={10} sm={4} item mt={2}>
        <Button
          color="warning"
          variant="contained"
          fullWidth
          sx={{ borderRadius: 3, fontWeight: "bold" }}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};
