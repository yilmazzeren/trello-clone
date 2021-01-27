import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import { v4 as uuid } from "uuid";
function App() {
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

  return (
    <StoreApi.Provider value={{ addMoreCard }}>
      <div className="App">
        <Navbar />
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </StoreApi.Provider>
  );
}

export default App;
