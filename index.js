document.querySelector("button").addEventListener("click", () => {
  let fromCurrency = document.querySelector("#fromCurr").value.toUpperCase();

  async function fetchCurrency() {
    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );
      const data = await response.json();
      let amount = parseFloat(document.querySelector("#numField").value);
      let ToCurrency = document.querySelector("#toCurr").value.toUpperCase();
      if (!data.rates[ToCurrency]) {
        alert("The currency is not exists.");
        return;
      } else {
        let rate = data.rates[ToCurrency];
        let convertedRate = amount * rate;
        document.querySelector(
          ".result"
        ).innerHTML = `${amount} ${fromCurrency} = ${convertedRate} ${ToCurrency}`;
        document.querySelector("#fromCurr").value = "";
        document.querySelector("#numField").value = "";
        document.querySelector("#toCurr").value = "";
      }
    } catch (error) {
      console.log(error);
    }
  }

  fetchCurrency()
});
