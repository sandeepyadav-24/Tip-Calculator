function tipFunction(tip, billAmount, people) {
  //console.log(tip, billAmount, people);
  const totalTip = billAmount * (tip / 100);
  const tipPerPerson1 = (totalTip / people).toFixed(2);
  const totalPerPerson1 = (
    (Number(billAmount) + Number(totalTip)) /
    people
  ).toFixed(2);
  tipPerPerson.innerHTML = tipPerPerson1;
  totalPerPerson.innerHTML = totalPerPerson1;
}

//ALl HTML Constants From FLEX 1
const bill = document.querySelector(".bill");

const guys = document.querySelector(".guys");
const tip1 = document.querySelector(".a");
const tip2 = document.querySelector(".b");
const tip3 = document.querySelector(".c");
const tip4 = document.querySelector(".d");
const tip5 = document.querySelector(".e");
const enter = document.querySelector(".f");

//ALL HTML Constants From FLEX 2
const tipPerPerson = document.querySelector(".tipPerPerson");
const totalPerPerson = document.querySelector(".totalPerPerson");

//ALL INITIALS VALUE
tipPerPerson.innerHTML = 0;
totalPerPerson.innerHTML = 0;

tip1.addEventListener("click", function () {
  const billAmount = bill.value;
  const people = guys.value;
  tipFunction(5, billAmount, people);
});

tip2.addEventListener("click", function () {
  const billAmount = bill.value;
  const people = guys.value;
  tipFunction(10, billAmount, people);
});

tip3.addEventListener("click", function () {
  const billAmount = bill.value;
  const people = guys.value;
  tipFunction(15, billAmount, people);
});
tip4.addEventListener("click", function () {
  const billAmount = bill.value;
  const people = guys.value;
  tipFunction(25, billAmount, people);
});

tip5.addEventListener("click", function () {
  const billAmount = bill.value;
  const people = guys.value;
  tipFunction(50, billAmount, people);
});

enter.addEventListener("click", function () {
  enter.innerHTML = "happy";
  window.location.href =
    "https://www.linkedin.com/in/sandeep-yadav-027500219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmvXp%2Fva2Rtm4tpA8cG%2Bqgg%3D%3D";
});

document.querySelector(".resetBtn").addEventListener("click", function () {
  //ALL INITIALS VALUE
  tipPerPerson.innerHTML = 0;
  totalPerPerson.innerHTML = 0;
  bill.value = "";
  guys.value = "";
});
