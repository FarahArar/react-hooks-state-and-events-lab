import React from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  function toggleCartStatus () {
    setIsInCart(!isInCart);
  };
  return (
    <li className={isInCart ? "in-cart" : ""}>
      {itemName}
      <button onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
