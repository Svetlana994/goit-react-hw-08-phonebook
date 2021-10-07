import { useSelector, useDispatch } from "react-redux";
import { contactsOperations } from "redux/phonebook";
import { contactsSelectors } from "redux/phonebook";

import Filter from "../Filter/Filter";

import { useStyles } from "./Contacts.styles";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const Contacts = () => {
  const classes = useStyles();

  const options = useSelector(contactsSelectors.getfilteredContacts);

  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Filter />
      <List dense className={classes.root}>
        {options.map(({ id, name, number }) => {
          return (
            <ListItem key={id} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${name}`}
                  src={
                    "https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
                  }
                />
              </ListItemAvatar>
              <ListItemText id={id} primary={name} />
              <ListItemText id={id} primary={number} />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                <DeleteIcon fontSize="small" />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Contacts;
