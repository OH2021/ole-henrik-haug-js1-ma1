// Question 1:.

const cat = {
    complain: "Meow!"
};

console.log(cat);

// Question 2:

var heading = document.getElementById("uno");
heading.querySelector(".heading").innerHTML = "Updated heading";


// Question 3:

var heading = document.getElementById("uno");
heading.style.fontSize = "2em";


// Question 4:



// Question 5:

let paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};
console.log(paragraphs);


// Question 6:

var resultsContainer = document.createElement("p");
resultsContainer.className = "results";
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";
document.body.appendChild(resultsContainer);


// Question 7:

const cats = [{
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

myFunction(cats);

function myFunction(cats) {

    for (let i = 0; i < cats.length; i++) {
        let name = cats.name;

        console.log(cats);
    }


};

// Question 8:

function createCats(cats) {

    let catsObjects = "";

    for (let i = 0; i < cats.length; i++) {

        catsObjects = catsObjects + "<h5>" + cats[i] + "</h5>";
        catsObjects = catsObjects + "<p>" + cats[i] + "</p>";
    }

    const finalHtml = "<div>" + catsObjects + "</div>";

    return finalHtml;
}

const newHtml = createCats(cats);

console.log(newHtml);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;