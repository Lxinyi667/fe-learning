const { ref, createApp } = Vue;
createApp({
setup() {
const count = ref(0);
const resColor = ref("grey");
const increment = () => {
count.value += 5;
if (count.value > 10) {
resColor.value = "green";
 }
 };
const decrement = () => {
count.value -= 5;
if (count.value < 0) {
resColor.value = "red";
 }
 };
const reset = () => {
count.value = 0;
 };
return {
count,
resColor,
increment,
decrement,
reset,
 };
 },
}).mount("#app");