
import { LiqPayPay } from "react-liqpay";

const Liqpay = ({amount = 100}) => {

  return (
    <div style={{ display: "flex" }}>
      <LiqPayPay
        publicKey="i26566116946"
        privateKey="2k5aXB6HlzTujc32TMfVzmGCeY7TBG0f3kF7qY3I"
        amount={amount}
        description="Payment for product"
        currency="UAH"
        orderId={Math.floor(1 + Math.random() * 900000000)}
        result_url="https://ogonpushka.com.ua"
        server_url="http://server.domain.com/liqpay"
        product_description="Online courses"
        style={{ margin: "8px" }}
      />
    </div>
  );
};
https://ogonpushka.com.ua/
export default Liqpay;
