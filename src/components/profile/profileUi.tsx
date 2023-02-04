import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function ProfileUi() {
  return (
    <Grid
      container
      justifyContent={"left"}
      justifySelf={"left"}
      sx={{}}
      my={2}
      px={1}
      display={"flex"}
      //   spacing={1.3}
    >
      <Grid item display={"block"} justifyContent={"left"}>
        <Typography
          variant="h5"
          fontFamily="sans-serif"
          fontWeight={"bold"}
          justifyContent={"left"}
        >
          WelCome to Profile PAge
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent={"left"} display={"flex"} mt={3}>
        <Typography
          variant="subtitle2"
          fontFamily="sans-serif"
          fontWeight={"bold"}
        >
          section 1{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent={"left"} display={"flex"}>
        <Typography variant="caption" fontFamily="sans-serif" align="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
          odio amet unde voluptas architecto maxime quis temporibus provident
          deserunt dolor eaque porro cumque deleniti labore iusto dolorem, sit
          repudiandae. Dolor qui sunt, porro aliquam, alias harum explicabo eius
          asperiores numquam, optio iusto. Quae ab ea quia iste beatae dolores
          dolorem quo veniam odio ullam. Quaerat officia rerum asperiores
          voluptas. Reiciendis ipsa praesentium non nulla? Officia molestias
          possimus praesentium repellat eaque voluptatem amet quod repellendus
          recusandae perspiciatis facilis dolores aliquam dolor ut, corporis
          ducimus repudiandae eum placeat nostrum quo. Totam.
        </Typography>
      </Grid>
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
          //   justifyContent={}
          //   display={"flex"}
          gridRow={"auto"}
          columnSpacing={3}
        >
          {["Saudi Arabia", "Saudi Arabia", "Saudi Arabia"].map((text) => {
            return (
              <Grid>
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
      <Grid item xs={12} justifyContent={"left"} display={"flex"} mt={3}>
        <Typography
          variant="subtitle2"
          fontFamily="sans-serif"
          fontWeight={"bold"}
        >
          section 2{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} justifyContent={"left"} display={"flex"}>
        <Typography variant="caption" fontFamily="sans-serif" align="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
          odio amet unde voluptas architecto maxime quis temporibus provident
          deserunt dolor eaque porro cumque deleniti labore iusto dolorem, sit
          repudiandae. Dolor qui sunt, porro aliquam, alias harum explicabo eius
          asperiores numquam, optio iusto. Quae ab ea quia iste beatae dolores
          dolorem quo veniam odio ullam. Quaerat officia rerum asperiores
          voluptas. Reiciendis ipsa praesentium non nulla? Officia molestias
          possimus praesentium repellat eaque voluptatem amet quod repellendus
          recusandae perspiciatis facilis dolores aliquam dolor ut, corporis
          ducimus repudiandae eum placeat nostrum quo. Totam.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
      >
        <FacebookIcon sx={{ fontSize: 80,borderRadius:5,border:1, mx:1 }} />
        <InstagramIcon sx={{ fontSize: 80,borderRadius:5,border:1, mx:1 }} />
        <TwitterIcon sx={{ fontSize: 80,borderRadius:5,border:1, mx:1 }} />
        <YouTubeIcon sx={{ fontSize: 80,borderRadius:5,border:1, mx:1 }} />
        <WhatsAppIcon sx={{ fontSize: 80,borderRadius:5,border:1, mx:1 }} />
      </Grid>
    </Grid>
  );
}
