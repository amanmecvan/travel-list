import { useState } from "react";

export default function Form({ addNewItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { id: Date.now(), description, quantity, packed: false };

        addNewItems(newItem);
        setDescription("");
        setQuantity(1);
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your Trip?</h3>
        <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
        </select>
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Item..." />
        <button>Add</button>
    </form>;
}
