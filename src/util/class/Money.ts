export class Money {
  amount: number
  currency: "yen" | "ドル"
  constructor(amount: number, currency: "yen" | "ドル") {
    if (amount < 0) {
      throw new Error("金 額 が0以 上 で あ り ま せ ん。 ")
    }
    this.amount = amount
    this.currency = currency
  }
  add(other: number) {
    if (other < 0) {
      throw new Error("金 額 が0以 上 で あ り ま せ ん。 ")
    }
    const added = this.amount + other
    return new Money(added, this.currency)
  }
}
