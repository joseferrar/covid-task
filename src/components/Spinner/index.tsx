import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "50%",
};

function Spinner() {
  return (
    <div>
      <Modal
        disableAutoFocus={true}
        hideBackdrop={true}
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress size={80} color="primary" />
        </Box>
      </Modal>
    </div>
  );
}

export default Spinner;