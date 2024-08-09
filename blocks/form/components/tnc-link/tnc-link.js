function decorateTncLink(tncLink) {
    const checkbox = tncLink.querySelector('input[type="checkbox"]');
    const label = tncLink.querySelector('label');
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

    return tncLink;
}

export default async function decorate(fieldDiv, field, htmlForm) {
    const tncLinks = fieldDiv.querySelectorAll('.checkbox-wrapper')
    const newLinks = [];
    tncLinks.forEach((tncLink) => {
        const newLink = decorateTncLink(tncLink);
        newLinks.append(newLink)
        tncLink.remove()
    });
    newLinks.forEach((newLink) => {
        fieldDiv.appendChild(newLink);
    });
    return fieldDiv;
}