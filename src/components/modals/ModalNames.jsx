import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Modal({ setPlayer1, setPlayer2 }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setPlayer1("Player 1");
    setPlayer2("Player 2");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Names Players</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter names players</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Player(X)"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Player(O)"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
