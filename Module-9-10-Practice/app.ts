import { renderProjectList } from "render-element.js";
import { validate } from "validation.js";

export class Project {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public people: number
	) {}
}

class ProjectState {
	private projects: Project[] = [];
	private static instance: ProjectState;

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
	}

	addProject(title: string, desc: string, people: number) {
		const newProject = new Project(
			Math.random().toString(),
			title,
			desc,
			people
		);

		this.projects.push(newProject);
		renderProjectList(this.projects);
	}
}

const projectState = ProjectState.getInstance();

class ProjectInput {
	titleEl: HTMLInputElement;
	descEl: HTMLInputElement;
	peopleEl: HTMLInputElement;
	submit: HTMLElement;

	constructor() {
		this.titleEl = document.getElementById(
			"projectTitle"
		)! as HTMLInputElement;
		this.descEl = document.getElementById(
			"projectDesc"
		)! as HTMLInputElement;
		this.peopleEl = document.getElementById(
			"numOfpeople"
		)! as HTMLInputElement;
		this.submit = document.getElementById("addProjectBtn")! as HTMLElement;
		this.configure();
	}

	configure() {
		this.submit.addEventListener("click", this.submitHandler.bind(this));
	}

	private getUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleEl.value;
		const enteredDesc = this.descEl.value;
		const enteredPeople = this.peopleEl.value;

		if (
			!validate(enteredTitle) ||
			!validate(enteredDesc) ||
			!validate(enteredPeople)
		) {
			alert("Please, Enter Valid Inputs...");
			return;
		}

		return [enteredTitle, enteredDesc, +enteredPeople];
	}

	private submitHandler(event: Event) {
		event.preventDefault();
		const userInput = this.getUserInput();
		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			projectState.addProject(title, desc, people);
		}
	}
}

new ProjectInput();
