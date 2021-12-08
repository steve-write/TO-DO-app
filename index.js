document.addEventListener('DOMContentLoaded', function(){

    
const list = document.querySelector('#book-list ul');



//delete 
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})

//form
const addform = document.forms['add-book'];
addform.addEventListener('submit', function(e){
    e.preventDefault();

    const value = addform.querySelector('input[type="text"]').value

    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')






    //append to document nesting span into a li
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);





}) 

//hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none'
    } else{
        list.style.display = 'contents'
    }
});


//FILTTERS SEARCH BOOKS
const searchBar = document.forms[0].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    // console.log(term);
    const books = list.getElementsByTagName('li');
    // console.log(books)
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})


//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})

})








