const elsPaymentPeriodRadio = document.querySelectorAll(
  '[name="paymet_period"]'
);
const elsPricingMainValue = document.querySelectorAll(".pracing-basic-value");

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elsPaymentPeriodRadio.addEventListener("change", function () {
    const period = elsPaymentPeriodRadio.value;

    if (period === "annual") {
      elsPricingMainValue.forEach(function (elPrice) {
        elPrice.textContent =
          elPrice.closest(".price-main").dataset.paymentAnnual;
      });
    } else {
      elsPricingMainValue.forEach(function (elPrice) {
        elPrice.textContent =
          elPrice.closest(".price-main").dataset.paymentMonthly;
      });
    }
  });
});
