var plus = document.querySelector(".plus");
var min = document.querySelector(".min");
var input = document.querySelector("#inp");
var showValue = document.querySelector(".show-value");
plus === null || plus === void 0 ? void 0 : plus.addEventListener("click", function () {
    input.value++;
});
min === null || min === void 0 ? void 0 : min.addEventListener("click", function () {
    input.value--;
});
showValue === null || showValue === void 0 ? void 0 : showValue.addEventListener("click", function () {
    alert(input.value);
});
