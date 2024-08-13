const textIntersectionClass = 'tnc__intersection';
const textDecorationClass = 'tnc__text-decoration'

export default async function decorate(fieldDiv, field, htmlForm) {
    console.log(fieldDiv, field, htmlForm);
    const textWrapper = fieldDiv.querySelector('.plain-text-wrapper');
    textWrapper.classList.add(textDecorationClass);
    const intersection = fieldDiv.createElement('div');
    intersection.classList.add(textIntersectionClass);
    textWrapper.appendChild(intersection);
    handleScroll(fieldDiv);
}

function handleScroll(field) {
    const intersection = field.querySelector(textIntersectionClass);
    if (intersection) {
        console.log(intersection);
        // const self = this;
        // const io = new IntersectionObserver(onIntersection, {
        //     threshold: [1],
        // })
        // function onIntersection ([{isIntersecting}]) {
        //     const isEnabled = self.getModel()?.enabled && !self.getModel()?.readOnly;
        //     if (isIntersecting) {
        //         if (isEnabled) {
        //             self.children.filter(c => c.getModel()._jsonModel.fieldType === 'checkbox').forEach(cb => {
        //                 cb.getModel().enabled = true;
        //             })}
        //         io.unobserve(intersection);
        //     }
        // }
        // io.observe(intersection)
    }
}