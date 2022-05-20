import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

export default function TransitionsModal({ text, isModalOpen = false }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isModalOpen);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        {text || "react-transition-group"}
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              🚀 Congratulations! You solved the problem 🌐!
            </h2>
            <p id="transition-modal-description">
              ✅ Your code passed all the tests successfully
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
