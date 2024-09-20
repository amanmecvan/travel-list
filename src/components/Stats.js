export default function Stats({ newItems }) {
    if (!newItems.length) {
        return <p className="stats">
            Let's Pack the bag 👜 for the trip
        </p>;
    }
    const totalItems = newItems.length;
    const totalItemPacked = newItems.filter((item) => item.packed).length;
    const totalPackedPercentage = Math.round((totalItemPacked / totalItems) * 100);
    console.log(totalPackedPercentage);
    return <footer className="stats">
        <em>
            {totalPackedPercentage === 100 ? 'We are Ready to go ✈️' : `You have ${totalItems} items in your list, and already packed ${totalItemPacked} (${totalPackedPercentage})%.`}
        </em>

    </footer>;
}
