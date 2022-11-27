let dragArea = document.querySelector(".drag-area");
let dragText = document.querySelector(".header");
 let file;
 let button = document.querySelector('.button');
 let input = document.querySelector('input');

 button.onclick = ()=>{
    input.click();
 }

 input.addEventListener('change',function(){
    file = this.files[0];
    dragArea.classList.add("active");
    displayFile();
 })
 
//when file is inside drag-area
dragArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dragText.textContent = 'Release to upload';
    dragArea.classList.add('active');
});

//when file is outside drag-area
dragArea.addEventListener('dragleave',(event)=>{
    event.preventDefault();
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
})

//when file is dropped in dragged area
dragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
// console.log(event);
file = event.dataTransfer.files[0];
displayFile();
// console.log(file);
});

function displayFile(){
    const fileType = file.type;
    console.log(fileType);
    
    let validExtensions = ['image/jpeg','image/png','image/jpg'];
    if(validExtensions.includes(fileType)){
        console.log("In");
        let fileReader = new FileReader();
    fileReader.onload = () =>{
        // console.log("In load");
        // console.log(fileReader);
        let fileURL = fileReader.result;
        // console.log(fileURL);
        let imgTag = `<img src="${fileURL}" alt="">`;
        dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
    }
    else{
        alert("This file is not an Image Dude");
    
    }
}
