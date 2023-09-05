import { renderProjectList } from "render-element.js";
import { validate } from "validation.js";
export class Project {
    constructor(id, title, description, people) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
    }
}
class ProjectState {
    constructor() {
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, desc, people) {
        const newProject = new Project(Math.random().toString(), title, desc, people);
        this.projects.push(newProject);
        renderProjectList(this.projects);
    }
}
const projectState = ProjectState.getInstance();
class ProjectInput {
    constructor() {
        this.titleEl = document.getElementById("projectTitle");
        this.descEl = document.getElementById("projectDesc");
        this.peopleEl = document.getElementById("numOfpeople");
        this.submit = document.getElementById("addProjectBtn");
        this.configure();
    }
    configure() {
        this.submit.addEventListener("click", this.submitHandler.bind(this));
    }
    getUserInput() {
        const enteredTitle = this.titleEl.value;
        const enteredDesc = this.descEl.value;
        const enteredPeople = this.peopleEl.value;
        if (!validate(enteredTitle) ||
            !validate(enteredDesc) ||
            !validate(enteredPeople)) {
            alert("Please, Enter Valid Inputs...");
            return;
        }
        return [enteredTitle, enteredDesc, +enteredPeople];
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
        }
    }
}
new ProjectInput();
