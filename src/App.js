import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import { v4 as uuid } from "uuid";
import InputContainer from "./components/Input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  app: {
    display: "flex",
  },
}));
function App() {
  const classes = useStyle();

  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid(); //eklenecek yeni kartt için benzersiz id üret
    const newCard = {
      //yeni eklenecek kart objesi
      id: newCardId,
      title, // girdiğimiz değer
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard]; // list.card içine list.card kalacak ve yeni eklediklerimiz gelecek

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList }}>
      <Navbar />
      <div className={classes.app}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <InputContainer type="list" />
      </div>
    </StoreApi.Provider>
  );
}

export default App;
