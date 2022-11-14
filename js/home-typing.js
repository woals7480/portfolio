let title = document.querySelector(".introduction-typing-table h2");
let text = document.querySelector(".introduction-typing-table p");
let speed = 75;
let delay = title.innerHTML.length * speed + speed;

function typeEffect(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;
  let timer = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else clearInterval(timer);
  }, speed);
}

typeEffect(title, speed);

setTimeout(() => {
  text.style.display = "inline-block";
  typeEffect(text, speed);
}, delay);
