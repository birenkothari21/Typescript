import { Project } from "app.js";

export function renderProjectList(projects: Project[]) {
	const div = document.getElementById("list")! as HTMLDivElement;
	div.textContent = "";

	projects.forEach((project) => {
		// renderProjectItem(project);
		const template = document.getElementById(
			"project-list"
		)! as HTMLTemplateElement;

		const node = document.importNode(template.content, true);
		console.log(node);
		const ul = node.querySelector("section ul")!;
		const li = document.createElement("li");
		li.textContent = `Title : ${project.title}, Description : ${project.description} , Num of People : ${project.people}`;

		ul.append(li);

		div?.append(node);
	});
}
