import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";

export default function Social () {
    const { getRootProps, getInputProps } = useDropzone();

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
        sx={{mt:{xs:1.8 ,md:0.5}}}
      >
        <FacebookIcon
          sx={{ fontSize: 80, borderRadius: 5, border: 1, mx: 1 }}
        />
        <InstagramIcon
          sx={{ fontSize: 80, borderRadius: 5, border: 1, mx: 1 }}
        />
        <TwitterIcon sx={{ fontSize: 80, borderRadius: 5, border: 1, mx: 1 }} />
        <YouTubeIcon sx={{ fontSize: 80, borderRadius: 5, border: 1, mx: 1 }} />
        <WhatsAppIcon
          sx={{ fontSize: 80, borderRadius: 5, border: 1, mx: 1 }}
        />
      </Grid>
      <Grid item>
        <Box
          {...getRootProps({ className: "dropzone" })}
          sx={{
            border: 2,
            borderRadius: 3,
            borderColor: "orange",
            py: 2.5,
            px: 5.5,
            my: 2,
          }}
        >
          <input {...getInputProps()} />
          <Typography>Drop file here, or click to upload</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
