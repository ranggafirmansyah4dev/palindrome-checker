let checkButton = document.getElementById("check-btn");
let result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  let text = document.getElementById("text-input").value;
  let cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedCleanText = cleanText.split("").reverse().join("");
  
  if(text.trim() === ""){
    alert("Please input a value");
  }else{
    if(cleanText === reversedCleanText){
      result.innerText = `${text} is a Palindrome!`;
      result.style.display = 'block';
      result.style.color = 'lime';
    }else{
      result.innerText = `${text} not a Palindrome!`;
      result.style.display = 'block';
      result.style.color = 'red';
    }
  }
});