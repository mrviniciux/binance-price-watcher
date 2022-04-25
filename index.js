var $nowPrice = document.querySelector(".nowPrice");
var toFloat = (str) => parseFloat(str.replace(",", ""));

var alertOn = (price, message) => {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.target.className === "showPrice" &&
        toFloat(mutation.target.innerHTML) >= price
      ) {
        alert(message);
        observer.disconnect();
      }
    });
  });

  return observer.observe($nowPrice, {
    attributes: true,
    subtree: true,
    childList: true,
  });
};

alertOn(2950.0, "Reached!");
