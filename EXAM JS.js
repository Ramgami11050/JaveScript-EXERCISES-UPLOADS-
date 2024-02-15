function start() {


    // TITLE
    var title = document.createElement('h1');
    title.innerText = "STUDENT DATA";
    title.style.font = "italic bold 27px courier";
    title.setAttribute("align", "center");
    document.body.appendChild(title);

    // DIV 0
    var div0 = document.createElement("div"); //adds div space
    div0.innerText = "NAME!";
    div0.style.font = "italic bold 12px courier";
    document.body.appendChild(div0);

    // [] INPUT 1
    var input = document.createElement("input"); // creates input ele
    input.type = "text"; // sets input text
    input.className = "Name1"; // set the CSS class
    input.id = "Name1Test";
    document.body.appendChild(input).style.marginTop = "7px"; // puts into body

    // DIV 1
    var div = document.createElement("div"); //adds div space
    div.innerText = "AGE!";
    div.style.font = "italic bold 12px courier";
    document.body.appendChild(div);

    // [] INPUT 2
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.className = "Name2";
    input2.id = "Name2Test";
    document.body.appendChild(input2).style.marginTop = "7px";

    // DIV 2
    var div2 = document.createElement("div"); //adds div space
    div2.innerText = "SUBJECT!";
    div2.style.font = "italic bold 12px courier";
    document.body.appendChild(div2);

    // [] INPUT 3
    var input3 = document.createElement("input");
    input3.type = "text";
    input3.className = "Name3";
    input3.id = "Name3Test";
    document.body.appendChild(input3).style.marginTop = "7px";

    // DIV 3
    var div3 = document.createElement("div"); //adds div space
    div3.innerText = "SUBMIT!";
    div3.style.font = "italic bold 12px courier";
    document.body.appendChild(div3);

    // [] BUTTON (SUBMIT)
    let button = document.createElement("button");
    button.id = "button1";
    document.body.appendChild(button).style.padding = "10px 80px 10px 80px";


// —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


    // FORM VERIFICATION (REQUIRED)
    let butt1 = document.getElementById("button1");
    butt1.onclick = function buttonclick1() {

        let check1 = document.getElementById("Name1Test").value;
        let check2 = document.getElementById("Name2Test").value;
        let check3 = document.getElementById("Name3Test").value;

        // calls to name/age/sub functions
        let Validated = console.log(check1)
        let Validated2 = console.log(check2)
        let Validated3 = console.log(check3)


// —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


        //[1] NAME (NO NUMBERS)
        function CheckName() {
            var NameCheck = /^[0-9]+$/;
            if (NameCheck.test(check1)) {
                alert("Your username cannot have any numbers.");
            } else { Validated }
        }
        CheckName()

        //[2] AGE (ONLY NUMBERS)
        function CheckAge() {
            var AgeCheck = /^[0-9]+$/;
            if (AgeCheck.test(check2)) {
                Validated2
            } else { alert("Your age can only utilize numbers.");}
        }
        CheckAge()

        // [3] SUBJECT (ONLY NUMBERS AND LETTERS)
        function CheckSubject() {
            var SubCheck = /^([a-z0-9A-Z]+)$/;
            if (SubCheck.test(check3)) {
                Validated3
            } else { alert("Your subject cannot have special characters."); }
        }
        CheckSubject()


// —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


if (Validated == Validated && Validated2 == Validated2 && Validated3 == Validated3) {

    const forminfo = {
        Name: check1,
        Age: check2,
        Subject: check3,
    };

    // Obtenemos las claves en un array [FIX THIS]
    const keys = Object.keys(forminfo);
    console.log(keys);
}


if (check1 == "" || check2 == "" || check3 == "") {
    alert("All fields must be filled in.");
}

    }


// —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

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