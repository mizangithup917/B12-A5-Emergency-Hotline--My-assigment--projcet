#1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById("id") → Id element 
getElementsByClassName("class") → class element 
querySelector("css-selector") →1st element
querySelectorAll("css-selector") →  NodeList


2. How do you create and insert a new element into the DOM?

 Creat new Element → document.createElement(div)
Contean /attribute add → .textContent, .innerHTML, .setAttribute()
Element  → DOM add → .appendChild() / .append() / .prepend()

3. What is Event Bubbling and how does it work?

vent Bubbling হলো JavaScript এর event propagation এর একটি ধাপ।
যখন কোনো child element এ event (যেমন click) ঘটে, সেই event প্রথমে ওই child element-এ execute হয়,

তারপর ক্রমানুসারে parent → grandparent → document → window পর্যন্ত উপরের দিকে ছড়িয়ে যায়।

4. What is Event Delegation in JavaScript? Why is it useful?

document.getElementById("list").addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
  
    console.log("Clicked:", e.target.textContent);
  }
});


5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → element এর default কাজ বন্ধ করে (যেমন: form submit, link redirect)

stopPropagation() → event টা parent এ আর bubble হতে দেয় না
