export default function prices(price) {
    return `${
      price.currency === "ARS" ? "$ " : "U$S "
    }${price.amount.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
  }
  