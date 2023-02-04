import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";

const ImageInput = (props: any) => {
  const [image, setImage] = useState<string | null>(null);

  const handleOnChange = (event: any) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setImage(onLoadEvent.target.result);
      props.setValue(onLoadEvent.target.result);
    };
    if (event.target.files[0] != null || event.target.files[0] != undefined) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          xs={12}
          px={0.5}
          my={0.5}
          justifyContent={"space-around"}
          display={"flex"}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton
                component="label"
                aria-label="upload picture"

                sx={{
                  borderBottom: "1px solid",
                  borderLeft: "1px solid",
                  borderColor: "secondary",
                  
                }}
              >
                <input
                  id={"image"}
                  key={"image"}
                  hidden
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  name={props.name}
                  //   value={props.value}
                  onChange={handleOnChange}
                />
                <PhotoCamera sx={{ fontSize: 40 }} />
              </IconButton>
            }
          >
            <Avatar
              alt="profile image"
              src={image ? image : "image/avatar2.png"}
              sx={{
                width: 150,
                height: 150,
                border: "1px solid",
                borderColor: props.touched && props.error! ? "red" : "#a39b8b",
              }}
            />
          </Badge>
        </Grid>
        <Grid
          item
          xs={12}
          px={0.5}
          mb={0.5}
          mt={1}
          justifyContent={"space-around"}
          display={"flex"}
        >
          <Typography variant="body2" color="error" display="flex">
            {props.touched && props.error!}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageInput;
