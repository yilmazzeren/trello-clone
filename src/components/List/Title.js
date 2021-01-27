import React, { useContext, useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import storeApi from "../../utils/storeApi";
const useStyle = makeStyles((theme) => ({
  editTableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editTableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      backgroundColor: "#ddd",
    },
  },
}));
export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const classes = useStyle();
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className={classes.editTableTitleContainer}>
          <Typography
            className={classes.editTableTitle}
            onClick={() => setOpen(!open)}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}
