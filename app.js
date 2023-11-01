const add = document.querySelector(".button");
const task = document.querySelector(".tasks");
const input = document.querySelector(".text");
const listcontainer = document.querySelector("#list-container");
const clear = document.querySelector(".clear");

currentDate();

clear.addEventListener("click", () => {
  clearall();
  console.log("clicked");
  showdata();
});
function clearall() {
  localStorage.setItem("data", "");
}

add.addEventListener("click", () => {
  addit();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addit();
  }
});

function addit() {
  {
    if (input.value !== "") {
      let li = document.createElement("li");
      li.innerHTML = input.value;
      listcontainer.appendChild(li);
      li.addEventListener("click", () => {
        li.classList.toggle("finished");
      });
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);

      let div = document.createElement("div");
      div.className = "date";

      const date = new Date();
      div.innerHTML =
        "created : " + date.toShortFormat() + " " + date.toLocaleTimeString();
      li.append(div);
      span.addEventListener("click", () => {
        li.classList.toggle("checked");
      });

      let dueDiv = document.createElement("div");
      dueDiv.className = "date";

      let selected = document.getElementById("due");
      console.log(selected.min);
      const sdate = selected.value;
      console.log(sdate);
      if (sdate) {
        dueDiv.innerHTML = "due : " + sdate;
      } else {
        dueDiv.innerHTML = "due : " + selected.min;
      }

      li.append(dueDiv);
    } else {
      alert("add a task");
    }
    input.value = "";
    save();
    document.getElementById("due").value = "";
  }
}
function currentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  const selectedDate = document.getElementById("due");
  today = yyyy + "-" + mm + "-" + dd;
  selectedDate.setAttribute("min", today);
  last = yyyy + 1 + "-" + mm + "-" + dd;
  selectedDate.setAttribute("max", last);
  selectedDate.setAttribute("defaultValue", today);
}

Date.prototype.toShortFormat = function () {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = this.getDate();

  const monthIndex = this.getMonth();
  const monthName = monthNames[monthIndex];

  const year = this.getFullYear();

  return `${day}-${monthName}-${year}`;
};

function save() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showdata() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();

const marker = document.querySelector("listMarker");
