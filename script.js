const dropdownBtns = Array.from(document.querySelectorAll('.dropdownBtn'))
const divider = document.querySelector('.divider')
dropdownBtns.forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        this.classList.toggle('active')
        dropdownBtns.forEach(item => {
            if (dropdown.classList !== item.classList) {
                item.classList.remove('active')
            }
        })
    })
})

divider.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active')
    if (document.querySelector('.sidebar').classList.contains('active')) {
        document.querySelector('.main-content').style.position = 'absolute'
        document.querySelector('.main-content').style.width = '99%'
        document.querySelector('.main-content').style.left = '3%'
        document.querySelector('.divider .fa-angle-double-right').style.transform = 'rotate(0deg)'
    } else {
        document.querySelector('.main-content').style.position = 'relative'
        document.querySelector('.main-content').style.flex = '1'
        document.querySelector('.main-content').style.left = '0%'
        document.querySelector('.divider .fa-angle-double-right').style.transform = 'rotate(-180deg)'
    }

})

const anchorLinks = document.querySelectorAll('.dropdown-content .dropdown-list')
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.target.classList.add('active')
        anchorLinks.forEach(list => {
            if (anchor.classList !== list.classList) {
                list.classList.remove('active')
            }
        })
    })
});

const angleDownBtn = document.querySelector('.fa-angle-down');
angleDownBtn.addEventListener('click', () => {
    $('[data-toggle="popover"]').popover({
        content: `<ul class="list-group list-group-flush">
                    <li class="list-group-item">System Time - (GMT +00:00)</li>
                    <li class="list-group-item">Your computer time - (GMT +05:30)</li>
                    <li class="list-group-item">Your computer time - (GMT +05:30)</li>
                </ul>`
    })
})