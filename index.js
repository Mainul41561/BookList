// Selecting the elements

myTitle = document.querySelector('#title');
myAuthor = document.querySelector('#author');
myYear = document.querySelector('#year');
bookList = document.querySelector('#book-list');
myBtn = document.querySelector('.btn');

// getting current year 
const todayDate = new Date();
const currentYear = todayDate.getFullYear();


// creating main function 
myBtn.addEventListener('click', function(e){
 e.preventDefault();
       if(myYear.value <= 0 && myYear.value > currentYear){
        alert("Please provide valid data");
       }  
       else if(myTitle.value == '' && myAuthor.value == '' && myYear.value == ''){
        alert("Please provide your  data")
        }else{
            // creating new element
            const newRow = document.createElement('tr');
        
            const newTitle = document.createElement('th');
            newTitle.innerHTML = myTitle.value;
            newRow.appendChild(newTitle)
        
            const newAuthor = document.createElement('th');
            newAuthor.innerHTML = myAuthor.value;
            newRow.appendChild(newAuthor)
        
            const newYear = document.createElement('th');
            newYear.innerHTML = myYear.value;
            newRow.appendChild(newYear);
        
           bookList.appendChild(newRow);
    }
})

