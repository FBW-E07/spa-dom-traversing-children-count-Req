const wrapper = document.querySelector("#wrapper")
console.log(wrapper.children)

const array = Array.from(wrapper.children);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element.children.length, element.children)
}

// 2.
const getMostClasses = (parent) => {
    const array = parent.children;
    let mostClassesSeen = 0;
    let mostClassesElement = null;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.classList.length > mostClassesSeen) {
            mostClassesSeen = element.classList.length
            mostClassesElement = element
        }
    }
    return {
        mostClassesSeen,
        mostClassesElement
    }
}
console.log("Most classes", getMostClasses(wrapper))