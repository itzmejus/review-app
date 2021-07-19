let reviews = [
    {
        id: 1,
        name: "Justin",
        job: "web developer",
        img: "justin.jpg",
        text: " Motivated designer and developer with experience creating custom web application through Html,CSS and JavaScript.",
    },
    {
        id: 2,
        name: "Justin 2",
        job: "Business",
        img: "jus2.jpg",
        text: " your text goes here bro",
    }, {
        id: 3,
        name: "Justin 3",
        job: "Doctor",
        img: "jus3.jpg",
        text: " your text goes here bro",
    },
    {
        id: 4,
        name: "Someone",
        job: "Home maker",
        img: "person-1.jpeg",
        text: " your text goes here bro",
    },
]


//select items

const img = document.getElementById("person-img")
const author = document.getElementById("name")
const job = document.getElementById("job")
const info = document.getElementById("info")


//select button

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")



let currtentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currtentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text

});


function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text


}

nextBtn.addEventListener("click", function () {
    currtentItem++
    if (currtentItem > reviews.length - 1) {
        currtentItem = 0
    }


    showPerson(currtentItem)
    console.log("you clicked here")
})

prevBtn.addEventListener("click", function () {
    currtentItem--
    if (currtentItem < reviews.length - 1) {
        currtentItem = 1
    }
    showPerson(currtentItem)

})

//dark&normal  mode try


/*  <button class="random-btn">Dark Mode</button>
<button class="normal-btn">Normal Mode</button> */



const colors = ["#444444", "#C4B6B6"];
const randomBtn = document.querySelector(".random-btn")
const normalBtn = document.querySelector(".normal-btn")
const color = document.querySelector(".color");

randomBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[0];
});

normalBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[1];
});

