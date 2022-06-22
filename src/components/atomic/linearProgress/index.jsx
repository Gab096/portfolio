import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Container } from "./styles";
import { COLORS } from "../../../constants";

function LinearProgressWithLabel(props) {
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            sx={{ height: "8px", background: `${COLORS.steel}` }}
            color="warning"
            variant="determinate"
            {...props}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color={COLORS.merigold}>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Container>
  );
}
LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({ level }) {
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= level ? level : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
