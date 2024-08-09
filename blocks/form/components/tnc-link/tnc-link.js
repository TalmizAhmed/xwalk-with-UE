export default async function decorate(fieldDiv, field, htmlForm) {
    const checkbox = fieldDiv.querySelector('input[type="checkbox"]');
    const label = fieldDiv.querySelector('label');
    const value = checkbox.value;
    const labelText = label.textContent;
    label.textContent = '';

    const newAnchor = document.createElement('a');
    newAnchor.title = labelText;
    newAnchor.href = value;
    newAnchor.target = '_blank';

    const newSpan = document.createElement('span');
    newSpan.textContent = labelText;

    checkbox.style.display = 'none';
    newAnchor.appendChild(newSpan);
    label.appendChild(checkbox.cloneNode(true));
    checkbox.remove();
    label.appendChild(newAnchor);

    return fieldDiv;
}