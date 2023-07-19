import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(() => ({
  height: "50px",
  outline: "none",
  padding: "16px 24px",
  textTransform: "capitalize",
  "&&:focus": {
    outline: "none",
  },
  "&&:Mui-disabled": {
    backgroundColor: "#D1D1D1",
  },
}));

const CustomButton = ({ children, variant = "outlined", ...props }) => (
  <StyledButton fullWidth color={variant === "contained" ? "blue" : "darkblue"} variant={variant} {...props}>
    {children}
  </StyledButton>
);

export default CustomButton;
