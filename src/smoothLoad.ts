const smoothLoadAnimationAdder = (animatedElementsClass: string) => {
    document.querySelectorAll(`.${animatedElementsClass}`).forEach(element => element.classList.add("viewingAnimated"));
};

export default smoothLoadAnimationAdder;