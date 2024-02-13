function start(){

// INPUT 1
    var input = document.createElement("input");
    input.type = "text";
    input.className = "css-class-name"; // set the CSS class
    document.body.appendChild(input); // put it into the DOM

// DIV 1
var div = document.createElement("div"); //adds div space
document.body.appendChild(div);


// INPUT 2
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.className = "css-class-name"; // set the CSS class
    document.body.appendChild(input2); // put it into the DOM

// INPUT 3

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