const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(el => {
        return e.clientY <= el.offsetTop + el.offsetHeight / 2;
    });

    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());
// let check = document.querySelector(".checkbox")
let body = document.querySelector("body")
check.addEventListener("click", (e) => {
    if (check.checked) {
        body.style.background = "black";
        body.style.transition = "0.5s"
        items.forEach(e => {
            e.style.color = "white"
            e.style.background = "black"
        });
        sortableList.style.background = "transparent"
        sortableList.style.border = "1px solid white"
        sortableList.style.boxShadow = "0 15px 30px white"
    } else {
        body.removeAttribute('style')
        items.forEach(e => {
            e.style.color = "black"
            sortableList.style.background = "white"
            e.style.transition = "0.5s"
            e.style.background = "white"
        });
        body.style.transition = "0.5s"
    };
    console.log(e);
})