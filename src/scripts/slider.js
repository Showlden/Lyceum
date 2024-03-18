const items = document.querySelectorAll('.lyceym__photo');
const controlls = document.querySelectorAll('.controlls');
let itemIndex = 0;

function show(index) {
    items[itemIndex].classList.remove('active');
    items[index].classList.add('active');
    itemIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = itemIndex - 1;

            if (index < 0) {
                index = items.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = itemIndex + 1;
            if (index >= items.length) {
                index = 0;
            }

            show(index);
        }
    })
})

show(itemIndex);