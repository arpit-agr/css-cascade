const ICON_SVG =
	'<svg class="disclosure-icon" width="21" height="15" aria-hidden="true"><use href="#caret" /></svg>';

for (const widget of document.querySelectorAll(".disclosure-widget")) {
	const heading = widget.querySelector("h2");
	const panel = widget.querySelector(".disclosure-widget-panel");
	const panelId = `disclosure-panel-${widget.dataset.step}`;

	const label = document.createElement("span");
	label.className = "disclosure-label";
	label.append(...heading.childNodes);

	const button = document.createElement("button");
	button.setAttribute("aria-expanded", "false");
	button.setAttribute("aria-controls", panelId);
	button.append(label);
	button.insertAdjacentHTML("beforeend", ICON_SVG);

	heading.append(button);

	panel.id = panelId;
	panel.hidden = true;

	button.addEventListener("click", () => {
		const isExpanded = button.getAttribute("aria-expanded") === "true";
		button.setAttribute("aria-expanded", String(!isExpanded));
		panel.hidden = isExpanded;
	});
}
