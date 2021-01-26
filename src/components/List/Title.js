import React, { useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const useStyle = makeStyles((theme) => ({
  editTableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editTableTitle: {
    flexGrow: 1,
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      backgroundColor: "#ddd",
    },
  },
}));
export default function Title() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value="Todo"
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.editTableTitleContainer}>
          <Typography
            className={classes.editTableTitle}
            onClick={() => setOpen(!open)}
          >
            todo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}
