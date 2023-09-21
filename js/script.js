//Accordion functionality 

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header')
    const content = item.querySelector('.accordion-content')

    header.addEventListener('click', () => {
        item.classList.toggle('active')
        content.style.maxHeight = item.classList.contains('active')
            ? content.scrollHeight + 'px'
            : 0
    })
})
