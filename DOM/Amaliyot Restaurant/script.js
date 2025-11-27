const tabs = document.querySelectorAll('.tabheader__item'),
      tabContents = document.querySelectorAll('.tab_content'),
      tabParent = document.querySelector('.tabheader__items');

function hideTabContent() {
    tabContents.forEach(item => {
        item.style.display = 'none';
    });

    tabs.forEach(tab => {
        tab.classList.remove('tabheader__item_active');
    });
}

function showTabContent(i = 0) {
    tabContents[i].style.display = 'flex';
    tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

// Tab bosilganda ishlash
tabParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabheader__item')) {
        tabs.forEach((tab, i) => {
            if (e.target === tab) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const modalopen= document.querySelectorAll('.phone');
modal =document.querySelector('.modal')
const remove = document.querySelector('.modal__close');



modalopen.forEach(i=> {
    i.addEventListener("click", ()=>{
        modal.classList.add('show', 'anime')
        modal.classList.remove('hide')

        remove.addEventListener("click", () => {
    modal.classList.remove('show')
        modal.classList.add('hide')
});
    })
})
