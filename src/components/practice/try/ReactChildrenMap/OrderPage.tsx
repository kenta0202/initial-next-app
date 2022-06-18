/* eslint-disable import/extensions */
import TryPageWrapper from "../TryPageWrapper"
import OrderedList from "./OrderedList"

const OrderPage = () => {
  return (
    <TryPageWrapper>
      <OrderedList>
        <p>〇〇する。</p>
        <p>△△する。</p>
        <p>□□する。</p>
      </OrderedList>
    </TryPageWrapper>
  )
}
export default OrderPage
