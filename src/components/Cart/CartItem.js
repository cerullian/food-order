import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart.context";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const { onAddToCart, onRemoveFromCart } = useContext(CartContext);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemoveFromCart(props.id)}>−</button>
        <button onClick={() => onAddToCart()}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
