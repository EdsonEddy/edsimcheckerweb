import React from "react";
import { Box, Typography } from "@mui/material";
import { DrawerHeader } from "../utils/menu";
import { useSelector } from "react-redux";

const ContentBox = () => {
  const actualContent = useSelector((state) => state.menu.actualContent);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography paragraph>
        {actualContent}
      </Typography>
    </Box>
  );
};

export default ContentBox;
