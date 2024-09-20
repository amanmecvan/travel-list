import { useState } from "react";
import Logo from './Logo';
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  const [newItems, setNewItems] = useState([]);

  function addNewItems(item) {
    setNewItems((items) => [...items, item]);
  }
  function onDeleteItem(id) {
    setNewItems(items => items.filter(item => item.id !== id))
  }
  function onItemPacked(id) {
    setNewItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function clearList() {
    const confirmOption = window.confirm("Are you sure you want to delete all items");
    if (confirmOption) setNewItems([]);
  }
  return <div className="app">
    <Logo />
    <Form addNewItems={addNewItems} />
    <PackingList newItems={newItems} onDeleteItem={onDeleteItem} onItemPacked={onItemPacked} clearList={clearList} />
    <Stats newItems={newItems} />
  </div>;
}



