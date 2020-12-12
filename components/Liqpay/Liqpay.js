
import { LiqPayPay } from "react-liqpay";
import style from "./Liqpay.module.css";
const Liqpay = ({ amount, orderId }) => {
  console.log( typeof amount )
  return (
    <div className={style.liqpay} style={{ display: "flex" }}>
      {typeof window !== 'undefined' ?
        <LiqPayPay
          publicKey="i26566116946"
          privateKey="2k5aXB6HlzTujc32TMfVzmGCeY7TBG0f3kF7qY3I"
          amount={amount}
          description="Payment for product"
          currency="UAH"
          orderId={orderId}
          result_url="https://ogonpushka.com.ua"
          server_url="http://server.domain.com/liqpay"
          product_description="Online courses"
          style={{ margin: "2rem 0px", width: "100%" }}
          title="Оплатить"
        /> : null}
    </div>
  );
};
export default Liqpay;