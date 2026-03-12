//open card code
const editProfileBtn = document.getElementById('editProfileBtn');
//edit profile card
const editProfileCard = document.getElementById('editProfileModal');

editProfileBtn.addEventListener('click', ()=>{
    editProfileCard.classList.toggle('hidden');
});

//close card code
const closeCard = document.getElementById('closeEditModal');

closeCard.addEventListener('click', ()=>{
    editProfileCard.classList.add('hidden');
});

//cover photo upload
function coverPhoto(){
    //image ID
    const imgId = document.getElementById('coverPhotoInput');
    //Cover Photo Post Button
    const postBtn = document.getElementById('submit');
    //css & div for cover photo variable
    const imgHandler = document.getElementById('.cover-photo');

    //submit button function
    postBtn.addEventListener('click', function(event){
        //prevent the pages from refreshing
        event.preventDefault();

        const file = imgId.file[0]; // this is the array that will hold or store the picture

        if(file){
            const reader = new FileReader();

            reader.onload = function(e){
                imgHandler.style.backgroundImage = `url(${e.target.result})`;
                imgHandler.style.backgroundSize = 'cover';
                imgHandler.style.backgroundPosition = 'center';

                //close the css ones the image is uploaded
                document.getElementById('editProfileModal').classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }

    })

}

coverPhoto();