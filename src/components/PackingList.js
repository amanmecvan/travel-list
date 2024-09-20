import { useState } from "react";
import Item from "./Item";

export default function PackingList({ newItems, onDeleteItem, onItemPacked, clearList }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if (sortBy === 'input') sortedItems = newItems;

    if (sortBy === 'description') sortedItems = newItems
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed') sortedItems = newItems
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));


    return <div className="list">
        <ul>
            {sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onItemPacked={onItemPacked} />)}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by input items</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by item packed</option>
            </select>
            <button onClick={clearList}>Clear List</button>
        </div>
    </div>;
}
