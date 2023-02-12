import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function HeaderSection () {
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
      <Grid item display={"block"} justifyContent={"left"}>
        <Typography
          variant="h5"
          fontFamily="sans-serif"
          fontWeight={"bold"}
          justifyContent={"left"}
        >
          Welcome to Profile Page
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
    </Grid>
  );
};
