const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();


// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.className += "subheading";


// Question 5
let paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};


// Question 6
const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7
function lonelyFunction(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(cats[i].name);
    }
}

lonelyFunction(cats);


// Question 8
function createCats(cats) {
    for(let i = 0; i < cats.length; i++)  {
        cats.innerHTML = `
        <div>
            <h5>${cats[0].name}</h5>
            <p>${cats[0].age}</p>
        </div>
        <div>
            <h5>${cats[1].name}</h5>
            <p>Age unknown</p>
        </div>
        <div>
            <h5>${cats[2].name}</h5>
            <p>${cats[2].age}</p>
        </div>
        `
    }
    return cats[i].innerHTML;
}

createCats(cats);

document.querySelector("div.cat-container").replaceWith = createCats(cats);

// I must have missed how to do what is asked in question 8. I tried to get to the bottom of it but I couldn't quite see it. I look forward to the Zoom meeting on Monday where we go through the assignment so I can see what I should have done. 