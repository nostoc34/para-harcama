import BasketItem from "./BasketItem";
import { moneyFormat } from "../formatter";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <>
      <div className="container basket-container">
        <h3>Alışveriş Detayları</h3>
        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">Toplam: ${moneyFormat(total)}</div>
        <button className="reset-btn" onClick={resetBasket}>RESET</button>
      </div>
    </>
  );
}

export default Basket;
