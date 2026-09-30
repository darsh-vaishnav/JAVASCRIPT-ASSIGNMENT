# JavaScript Fundamentals --- Study Notes

These notes cover basic JavaScript concepts, browser engines, typing,
the DOM, scripts and statements, and simple event-driven examples.

## 1. What does it mean when we say JavaScript is a high-level programming language?

JavaScript is called a **high-level programming language** because it is
relatively easy for humans to read and write. It hides many low-level
computer operations, such as memory management and machine-level
instructions, from the programmer.

## 2. Is JavaScript a compiled language?

JavaScript is commonly described as an **interpreted language**.
However, modern JavaScript engines also use **Just-in-Time (JIT)
compilation** to improve performance.

## 3. JavaScript engines in popular browsers

  Browser           JavaScript engine
  ----------------- -------------------
  Google Chrome     V8
  Mozilla Firefox   SpiderMonkey
  Safari            JavaScriptCore

## 4. What is dynamic typing in JavaScript?

JavaScript is **dynamically typed**, which means you do not have to
declare a variable's data type in advance. The type depends on the value
assigned to the variable, and the same variable can hold values of
different types at different times.

## 5. Explain ECMAScript. What is its relationship with JavaScript?

**ECMAScript** defines the core features, syntax, and rules of the
scripting language standard that JavaScript follows. JavaScript is an
implementation of the ECMAScript standard, along with additional
environment-specific features such as browser APIs.

## 6. Difference between static typing and dynamic typing

  -----------------------------------------------------------------------
  Static typing                       Dynamic typing
  ----------------------------------- -----------------------------------
  Variable types are checked or       Variable types are associated with
  determined before the program runs, values during program execution.
  depending on the language.          

  Type errors can often be detected   Some type-related errors appear
  before execution.                   when the code runs.

  Example languages: C, C++ (with     Example languages: JavaScript,
  their usual type systems).          Python.
  -----------------------------------------------------------------------

### JavaScript example

``` javascript
let value = 25;
console.log(typeof value); // "number"

value = "JavaScript";
console.log(typeof value); // "string"

value = false;
console.log(typeof value); // "boolean"
```

## 7. Explain two key features of JavaScript

-   **Responds to user actions:** JavaScript can respond to events such
    as clicking buttons, typing in forms, or moving the mouse.
-   **Updates webpage content:** JavaScript can modify HTML elements and
    their content without reloading the entire page.

## 8. Uses and related technologies in JavaScript development

JavaScript is used in different kinds of development. Technologies
mentioned in these notes include:

-   **Node.js** --- running JavaScript outside the browser, including
    server-side applications.
-   **Express.js** --- a web framework commonly used with Node.js.
-   **React Native** --- building mobile applications.
-   **Electron** --- building desktop applications.
-   **TensorFlow.js** --- working with machine-learning models in
    JavaScript.

## 9. Difference between a script and a statement

-   **Script:** A collection of JavaScript statements that perform a
    task.
-   **Statement:** A single instruction in a program.

Example of a statement:

``` javascript
let a = 25;
```

Example of a script containing multiple statements:

``` javascript
let a = 25;
let b = 5;
console.log(a + b);
```

### Placing JavaScript inside an HTML document

JavaScript can be placed inside a `<script>` element in an HTML file:

``` html
<script>
  console.log("Hello JavaScript");
</script>
```

## 10. Predict the output of `typeof`

``` javascript
let value = 25;
console.log(typeof value); // number

value = "JavaScript";
console.log(typeof value); // string

value = false;
console.log(typeof value); // boolean
```

**Output:**

``` text
number
string
boolean
```

## 11. Show an alert when a button is clicked

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Alert</title>
</head>
<body>
  <button onclick="showMessage()">Click Me</button>

  <script>
    function showMessage() {
      alert("Welcome to JavaScript");
    }
  </script>
</body>
</html>
```

**How it works:** 1. The HTML creates a button. 2. When the button is
clicked, the `onclick` event calls `showMessage()`. 3. The function
displays an alert message.

## 12. Demonstrate event-driven programming

**Event-driven programming** means that code runs in response to an
event, such as a click.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event-Driven Programming</title>
</head>
<body>
  <button id="welcomeButton">Click Me</button>

  <script>
    const button = document.getElementById("welcomeButton");

    button.addEventListener("click", function () {
      alert("Welcome to JavaScript");
    });
  </script>
</body>
</html>
```

In this example, `addEventListener()` waits for a click event and then
runs the function.

------------------------------------------------------------------------

## Quick Revision

-   **High-level language:** Easier for humans to read and write.
-   **JIT:** Just-in-Time compilation used by modern JavaScript engines.
-   **ECMAScript:** The standard that defines core JavaScript language
    features.
-   **Dynamic typing:** A variable can hold values of different types.
-   **DOM:** The Document Object Model represents a webpage as objects
    that JavaScript can access and modify.
-   **Script:** A collection of statements.
-   **Statement:** One instruction in a program.
-   **Event-driven programming:** Code runs in response to events