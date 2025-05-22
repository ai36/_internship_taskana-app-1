# TaskanaApp

<br>

Live demo - [https://internship-taskana-app-1.vercel.app](https://internship-taskana-app-1.vercel.app)

<br>

## Install

```shell
npm install
```
or
```shell
npm i
```

## Run in dev mode

```shell
npm run dev
```
or
```shell
vite
```

## Run in production mode

```shell
npm run build
```

<br>

## Sprint 1

**Objective**:

In this sprint, we will start developing an application for time tracking and planning. We will prepare a layout, set up the application's color palette, create components, and implement the basic functionality for working with tasks.

We will use React and Vite for the initial build, and during the implementation we will build the structure of the component approach.

**Settings**:
+ Solo, Legacy
+ Estimated time: 16 hours
+ Number of task: 4
+ Technology: React, JS, HTML, CSS

### Task 4

According to the [mockup](https://www.figma.com/design/4oVHHzlqzKTYPT5m7Wd1so/TaskanaApp.-1-sprint.-4-task?m=auto&t=2KE5TqJc1AxiAj8j-6), add a sorting component and extend the note creation block functionality.

- Add a `Dropdown` component. It includes a button displaying the currently selected sorting option and a list of sorting options. By default, sorting is based on the creation date (`createdAt` field).
- When the sorting button is clicked, a dropdown with sorting options appears. Clicking the button again toggles the dropdown closed.
- When a sorting option is selected, the task list is sorted accordingly, and the dropdown closes. The button displays the current sorting selection.
- If the dropdown content overflows the container vertically when open, it should be clipped. Responsiveness will be implemented later.
- Implement open/close animation for the dropdown using opacity transition lasting 0.2s. Use a similar animation approach as in the `TaskEditor` from the previous assignment.
- Implement all sorting options as shown in the [mockup](https://www.figma.com/design/4oVHHzlqzKTYPT5m7Wd1so/TaskanaApp.-1-sprint.-4-task?m=auto&t=2KE5TqJc1AxiAj8j-6).
- On hover over a task, a button appears on the right to edit the task. Clicking this button slides in the task editing component from the right.
- Extend the `TaskEditor` component so that, depending on the passed props, it can either create or edit tasks.
- When editing a task, the Save button is only clickable and enabled if at least one field was modified and the input field is not empty—same logic as when creating a task.
- Upon saving an edited task, its data in the task list updates accordingly. The `updatedAt` field is set to the current time. The `id` and `createdAt` fields remain unchanged. The editing window closes.
- While editing, changes in the task list are applied only after a successful save.
- If the Cancel button is clicked during editing, the editing window closes, and no changes are applied.
- If a task is deleted, it is removed from the task list and no longer displayed. The editing window closes.
- Implement `:hover` and `:focus` effects throughout the application as shown in the [mockup](https://www.figma.com/design/4oVHHzlqzKTYPT5m7Wd1so/TaskanaApp.-1-sprint.-4-task?m=auto&t=2KE5TqJc1AxiAj8j-6), and handle content overflow inside blocks.

Important: The task editing component is the same as the one used for creating tasks. To extend the component, pass an additional prop like `type={‘edit’}` and an object with the task’s data.

Clarification:
- The “Create” button in the Header and the task editing feature are always available.
  - Case 1 — While editing a task, clicking the “Create” button in the Header switches the `TaskEditor` to creation mode. All fields are cleared, and the appropriate title and buttons are shown.
  - Case 2 — While creating a task, selecting a task from the list and clicking the edit button switches the `TaskEditor` to editing mode. All necessary fields are filled with the selected task’s data.


### Task 3

Add a **task creation block** based on the [design](https://www.figma.com/design/L0TfICqWhRI250H0AuafPx/TaskanaApp.-1-sprint.-3-task?m=auto&t=2KE5TqJc1AxiAj8j-6):

- When the **"Create"** button is clicked, the `TaskEditor` component should slide in from the right using a `translate` animation lasting **0.4s**.
- To avoid issues with disappearing components in React when using conditional rendering, the `TaskEditor` should **always remain mounted** in the DOM.  
  Use **CSS transitions** to animate its visibility, position (`transform: translate()`), and opacity depending on its visibility state (`open/closed`).

Component behavior:

- `TaskEditor` should appear **on top of the content area**, not replace it.  
  Its placement should be within the layout component (`AppLayout` or `Content`).
- The **"Create"** button inside `TaskEditor` is only clickable when the **task title input is not empty** (use `.trim()` for validation).
- A priority selector should be included with **default priority set to gray** (lowest).
- When the component opens, the **input field should automatically receive focus**.
- If content inside the task creation window overflows, only the section **between the input field and buttons** should scroll.

**On saving a task:**

- A new task is **appended to the end of the task array**.
- The task is displayed in the **central content block**.
- The `TaskEditor` is closed with a **reverse animation**.
- The task object should include the following fields:
```js
  {
    id: '',               // unique string ID (8 characters)
    title: '',            // task title
    priority: 1,          // from 1 (low) to 3 (high)
    createdAt: '',        // in ISO format
    updatedAt: ''         // in ISO format
  }
```
**Task structure:**

- `createdAt` and `updatedAt` should be saved using `.toISOString()`  
- Each task must have a **unique `id`**, generated by a custom utility function that returns a **random 8-character string**. Do **not** use third-party libraries.

**Cancel button:**

- Closes the task editor with a reverse animation.  
- **Clears** both the title input and selected priority.

**Rendering tasks:**

- Display tasks in **reverse order**, with the **most recently added on top**. Use `.slice().reverse()` for rendering.  
- Checkbox color reflects task **priority**, as defined in the design.

**General requirements:**

- Store tasks and their completion status using **React state (`useState`)**.  
- It's expected that all data will be lost after page refresh.  
- Use **props drilling** to pass down task-related data.  
- Implement all **animations, `:hover`, and `:focus` effects** according to the design.  
- Ensure that UI blocks properly handle **content overflow**.

### Task 2

Add **side effects and theme switching** based on the [design](https://www.figma.com/design/xTsYgm8RybqhCvDqeWO3Ie/TaskanaApp.-1-sprint.-2-task?m=auto&t=2KE5TqJc1AxiAj8j-6):

**Accessibility & UI Effects**

- Apply `:hover` and `:focus` styles to **all interactive elements** (buttons, inputs, etc.).  
- Ensure that users can **navigate with the Tab key** and **activate elements using Enter**.  
- All transitions (hover, focus, theme change) must be **smooth** with `transition: all 0.2s`.

**Dark Theme Support**

- In `variables.css`, define a **dark theme color palette**.  
- Colors should be set using CSS variables for easy switching.

**ThemeSwitcher Component**

- Add a `ThemeSwitcher` component to the `Header`.  
- On click, it toggles the **entire app's theme** between light and dark.  
- The switch indicator updates its **appearance based on the current theme**, following the Figma design.  
- Theme-related colors across the app should **transition smoothly** over 0.2 seconds.

**Implementation Notes**

- Theme state should be **lifted up** to a shared parent component and passed down via **props drilling**.  
- Alternatively, you may implement **React Context** to manage and distribute theme state globally.

**Summary of Requirements**

- `:hover` and `:focus` states for all interactive elements  
- Full keyboard accessibility (Tab + Enter)  
- Light and dark theme support via `variables.css`  
- Smooth transitions for all dynamic style changes (0.2s)  
- Theme toggling handled in `ThemeSwitcher`  
- State passed down through props or managed via Context

**Working with Icons**

- Inside the `components` directory, create a folder called `icon`.
- Inside the `icon` folder, create another folder named `icons`. Place all app icons in this folder, each implemented as a separate `.jsx` component.
- Create a universal `Icon` component inside the `icon` folder. This component should accept specific props and render the corresponding icon component from the `icons` folder.

**Working with Content Illustrations (similar to Icons)**

- Inside the `components` directory, create a folder called `illustration`.
- Inside the `illustration` folder, create another folder named `illustrations`. Place all content-related images in this folder, each implemented as a separate `.jsx` component. This approach allows control over the `fill` colors based on the active theme.
- For each illustration element that depends on the theme color, pass the appropriate color variable from `variables.css` as a prop.
- Create a universal `Illustration` component inside the `illustration` folder. This component should accept props and render the appropriate illustration component from the `illustrations` folder.

**Folder Structure for `illustration` and `icon`**

The project should follow this structure for storing and organizing icon and illustration components:

![image.png](https://api.preax.ru/images?key=2ed184c2-d630-48a2-a7ea-4610930a922c)

Example of adding variables to fill for a component inside illustrations.

 ![image.png](https://api.preax.ru/images?key=dc62e02b-bb26-4523-8892-06788757497c)

**Tip: If the Editor Shows an Image Instead of SVG Code**

When converting `.svg` files into `.jsx` components, some editors (like VS Code) might show the icon as an image instead of the actual SVG code. To fix this:

1. Right-click on the `.svg` file.
2. Select **Open With**.
3. Choose **Text Editor**.

Now you can copy the raw SVG code and paste it into your React component.  
This method has been tested in VS Code but also works in other editors.

**Note**: No Need to Save Theme in `localStorage`

You **don't need** to store the selected theme in `localStorage`.

It’s enough to manage the theme using React state on the client side.  
It’s completely fine if the theme resets to the default after refreshing or restarting the app.

### Task 1

In the downloaded repository, open the terminal in the project folder and run the command (make sure to include the dot at the end):  
```shell
npm init vite@latest .
```
Choose React as the framework and JavaScript as the variant.  
Install packages:  
```shell
npm install
```
Run the project with:  
```shell
npm run dev
```

**Project structure:**

- In `README.md`, add instructions for:
  - Installing dependencies — `npm install`
  - Running the project in dev mode — `npm run dev`
  - Building the project — `npm run build`
  - You can also include other important info to help team members understand the project better.

- In `index.html`:
  - Change the `lang` attribute of the `<html>` tag from `en` to `ru`
  - Update the title to: **Taskana App**

- In `src`, create these directories:
  - `assets`, `components`, `pages`, and `layouts`

- In `assets`:
  - Add global styles, including:
    - `global.css`
    - `variables.css`
    - Optionally: `normalize.css` or `reset.css` if used

- In `variables.css`:
  - Under `:root`, define a color palette using CSS variables based on [the design](https://www.figma.com/design/H778y2QQlV8iJEZDfIdzIv/TaskanaApp.-1-sprint.-1-task?node-id=1223-180517&t=PKtEmAm15mpsez1s-1), even if not used yet.

- Add fonts locally:
  - Store them in `assets/fonts`
  - Allowed format: `.woff2`
  - See the "Components" tab in the design file for download links
  - Use any converter to change the font format

- Import fonts in `global.css` and include `global.css` in `main.jsx`

- Store images and icons in either `public` or `assets`

- For folders `components`, `pages`, and `layouts`:
  - Each component should be placed in its own folder along with its `module.css`
  - Component names start with an uppercase letter
  - Folder and CSS file names should match the component name and start with lowercase letters

- In `layouts`, create a component `AppLayout`:
  - It should contain:
    - `Header`
    - `Content` block

- `Content` consists of:
  - Left: `NavBar` — navigation links to app pages
  - Center: main content (in this sprint, just the `IncomingTasks` page)
  - Right: `SideBar` — includes `Statistic` component

- In `pages`, add the start page: `IncomingTasks`

- `IncomingTasks` consists of:
  - `MainContainer` and `Footer`
  - `MainContainer` includes:
    - Page title
    - Task list (`TaskList`)

- Implement this structure and all listed components in the app. If more detailed decomposition is needed, choose component names that clearly reflect their function.

**Based on the design:**

- Create the `Header` component as per design
  - It should include `Logo` and `Button` components

- Add all necessary components to `AppLayout`:
  - It should take up 100% of available width and height
  - `Header` should always stick to the top

- Vertical scroll appears only when the content height of a section (e.g. `NavBar`, `SideBar`, `TaskList`) exceeds the screen height
  - Scrollbars are default, not customized
  - Each section scrolls independently

- Minimum screen width: `1280px`
  - A horizontal scrollbar appears below that

- For screen widths greater than `1280px`:
  - Content stretches across the full width
  - `NavBar` and right section have fixed widths
  - Center section takes the remaining space, with horizontally centered content and a max fixed width

- Use semantic HTML:
  - `<nav>` for navigation
  - `<ul>` for lists
  - `<button>` for buttons
  - `<a>` tags inside `NavBar` for app page links

**Important:** We follow a component-based approach. Each component handles its own logic and rendering.

**Git Help:**
Common Git-related questions are collected in the FAQ under the Git tag.  
If you can't find the answer, take screenshots and post them under the "Questions" section — just be sure to select the correct tag.
