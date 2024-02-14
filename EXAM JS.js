function start() {
    // TITLE
    var title = document.createElement('h1');
    title.innerText = "STUDENT DATA";
    title.style.font = "italic bold 27px courier";
    title.setAttribute("align", "center");
    document.body.appendChild(title);

    // [] INPUT 1
    var input = document.createElement("input"); // creates input ele
    input.type = "text"; // sets input text
    input.className = "Name1"; // set the CSS class
    input.id = "Name1Test";
    document.body.appendChild(input).style.marginTop = "7px"; // puts into body
    
    if (button.onclick) {
    var check1 = document.getElementById("Name1Test").required = true;
    document.body.getElementById("Name1Test").innerHTML = check1;
    }

    // DIV 1
    var div = document.createElement("div"); //adds div space
    document.body.appendChild(div);


    // [] INPUT 2
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.className = "Name2";
    input2.id = "Name2Test";
    document.body.appendChild(input2).style.marginTop = "7px";

    // DIV 2
    var div2 = document.createElement("div"); //adds div space
    document.body.appendChild(div2);

    // [] INPUT 3
    var input3 = document.createElement("input");
    input3.type = "text";
    input3.className = "Name3";
    input3.id = "Name3Test";
    document.body.appendChild(input3).style.marginTop = "7px";

    // DIV 3
    var div3 = document.createElement("div"); //adds div space
    document.body.appendChild(div3);

    // [] BUTTON (SUBMIT)
    var button = document.createElement("button");
    button.id = "button1";
    document.body.appendChild(button).style.padding = "10px 80px 10px 80px";


    // ———————————————————————————————————————————————————————————————————————


    // NAME (REQUIRED AND NO NUMBERS)
    button.onclick = function () {
        // [NAME]
    let selectall = document.getElementById("Name1Test").value; // Selects value inside form
    console.log("(1) Student Name Saved") // Displays value inside of fist form
        // [AGE]
    let selectall2 = document.getElementById("Name2Test").value; // Selects value inside form
    console.log("(2) Student Age Saved") // Displays value inside of fist form
        // [SUBJECT]
    let selectall3 = document.getElementById("Name3Test").value; // Selects value inside form
    console.log("(3) Student Subject Saved") // Displays value inside of fist form

            alert("Information Saved");

            const forminfo = {
                Name: selectall,
                Age: selectall2,
                Subject: selectall3,
            };

            // Obtenemos las claves en un array
            const keys = Object.keys(forminfo);
            console.log(keys)

    }
}
    start()



// form, 3 inputs, 1 button

/*
Create a form (from JS) to save students with the following data:
-Name (required and cannot have numbers)
-Age (it is mandatory and can only have numbers)
-Subject (it is mandatory and can have letters and numbers only)

When the user accepts, you must save the information in LocalStorage
so that you can have an HTML table (created from JS) that has the following information:

-Average age of the students.
-Subject they take the most.
-And in an ordered list (also created from JS),
we must include the names of the students who are enrolling

In HTML you can only put the script and link tags.
You can include the styles you deem appropriate in external CSS.
*/