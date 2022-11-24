const plus = document.querySelector(".plus") as HTMLButtonElement;
const min = document.querySelector(".min") as HTMLButtonElement;
const input: any = document.querySelector("#inp");

const showValue = document.querySelector(".show-value") as HTMLButtonElement;

plus?.addEventListener("click", () => {
    input.value++;
});
min?.addEventListener("click", () => {
    input.value--;
});
showValue?.addEventListener("click", () => {
    alert(input.value);
});