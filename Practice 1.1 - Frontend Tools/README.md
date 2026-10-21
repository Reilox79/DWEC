# Practice 1.1 - Installing and configuring Web Development Tools

### 2DAW - DWEC Bilingual. 

> **Student Name**:  Rafael Lora Calero

#### Files included in this repository:

Ennumerate and explain each one of the files included in this repo.

- **README.md**: It´s the file with the practice information
- **index.html**: An html file with html code
- Etc...

#### Instructions: 

- Fill your name and lastname and answer the questions in the current `README.md` file. You have to submit the activity as a GitHub repo link that has to include the 

- You can add images to this tocument with the syntax:

    ```md
    ![Text to display](link/to/the/image)
    ```

- Any other question about Markdown language you can find in the [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

### Install and configure VSCode

1. **Install `VSCode` in your computer**.
2. **Create a new folder called `p1.1-frontend-tools`and open it as a workspace in VSCode. Copy the current `README.md` inside it**.
3. **What functionalities do the following VSCode extensions add?**
    - **Bootstrap 5 Quick Snippets:** Provides code snippets to quickly insert Bootstrap 5 components and classes (buttons, cards, grids, etc.).
    - **Live Server:** Launches a local development server with live reload, auto-refreshing the browser on file save.
    - **Prettier:** Automatically formats your code (HTML, CSS, JS, JSON, etc.) according to consistent style rules.
    - **Markdown All in One:** Adds Markdown shortcuts, autocomplete, table of contents generation, and preview support.
4. **Install the extensions listed in the previous point in VSCode**.
5. **What other extensions do you know that you consider interesting for developing in JavaScript**?
    - **ESLint:** analyzes code in real time to catch errors and enforce style/best practices.
    - **Prettier:** automatically formats code with consistent style rules.
    - **GitLens:** adds Git history, blame annotations, and repository context directly in the editor.
    - **Path Intellisense:** autocompletes file paths and names when importing.
    - **Auto Rename Tag:** automatically renames the matching closing tag when editing the opening one (HTML/JSX).
6. **Find in VSCode the option in `Settings` to `Format On Save` and activate it. What effect has this option?**
![Imagen](images/format-on-save.png)

### Create a Hello World in JS

7. **Create an `index.html` file inside your worspace folder.**

8. **Create the basic html structure using the `!` snippet and change the title to 'Hello World'**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
    </head>
    <body>
      
    </body>
    </html>
    ```

<![alt text](images/html-empty.png)>


9.  **Create a new file called `app.js` and add this two lines**

    ```js
    console.log("Hello Console!")
    document.body.innerHTML = "<h1>Hello document!<h1>"
    ```
![alt text](images/console-log.png)

10. **Import the script in your html using one of the techniques explained in class. Explain here the technique, show the code and justify why did you choose this technique**.

![alt text](images/html-js.png)

```
This technique separates the JavaScript logic from the HTML structure by placing the JS code in its own .js file and linking it to the HTML document using the <script> tag with a src attribute. The <script> tag is placed right before the closing </body> tag so that the browser fully parses and renders the HTML content first, before loading and executing the JavaScript. This prevents errors caused by scripts trying to access DOM elements that haven't been created yet.
```

11. **Launch `index.html` in Live Server and check that the script is running. Click right button and select inspect to show the developer tools and take a look on the console.**
![alt text](images/hello-document.png)

12. **Change some message in the JS code and save changes. You can check that Live Server refreshes the web page.**

![alt text](images/hello-world.png)

### Create a simple form with Bootstrap 4. 

13. **At this point, we are going to create a page called `form.html` starting from the `Bs5-$` template provided by the Bootstrap extension we added. What files does this template import in the html by default?**

![alt text](images/navbar-template.png)
```
It generates a full HTML5 boilerplate with Bootstrap already wired in and it imports Bootstrap CSS (via CDN link in the <head>): the compiled and minified bootstrap.min.css, which provides all Bootstrap's styles, grid system, and components.
Bootstrap Bundle JS (via CDN script, usually right before </body>): the compiled and minified bootstrap.bundle.min.js, which includes Bootstrap's JavaScript plugins (modals, dropdowns, tooltips, etc.) and Popper.js bundled together, so you don't need to import Popper separately.
```

1.  **Create a `<div>`with the class `.container` to wrap all the sections in the web page**

2.  **Add a standard navigation bar inside the nav area using the `bs5-navbar-standard` snippet inside the container**
![alt text](images/navbar.png)

3.  **Inside the main area create a form using Bootstrap to collect data from a new user who wants to register at an academy that offers courses. We can copy code from [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/forms/overview/)**. 
![alt text](images/form.png)
![alt text](images/navbar-web.png)

### Install Git, and upload your repository to GitHub

17. **Install [git](https://git-scm.com/) in your computer**.
    
18. **Init the git repository**
![alt text](images/git.png)
19. **Log in to your GitHub account provided by IES Azarquiel**
    
20. **Follow the teacher on GitHub at the following link: [https://github.com/jeatzr/](https://github.com/jeatzr/)**

![alt text](images/jota.png)
    
21. **Create a new empty repository on GitHub named `p1.1-frontend-tools`.**
    
22. **Follow the instructions in the command line provided by GitHub to add your files, create the first commit and push it. Notice that in out case we have to add all files to the staged area with `git add .`, not just`git add README.md`** 

![alt text](images/subida.png)
    
23. **To finish, submit the link of your GH repo to the task in our Classroom.**"# DWEC" 
