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
    const imgHandler = document.querySelector('.cover-photo');

    //submit button function
    postBtn.addEventListener('click', function(event){
        //prevent the pages from refreshing
        event.preventDefault();

        //==this one will be stored in the db later==
        const file = imgId.files[0]; // this is the array that will hold or store the picture

        if(file){
            const reader = new FileReader();

            reader.onload = function(e){
                imgHandler.style.backgroundImage = `url(${e.target.result})`;
                imgHandler.style.backgroundSize = 'cover';
                imgHandler.style.backgroundPosition = 'center';

                //close the css ones the image is uploaded
                document.getElementById('editProfileModal').classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    })
}
//cover photo function
coverPhoto();

//profile photo upload
function profilePhoto(){
    //image ID
    const profilePfp = document.getElementById('profilePhotoInput');
    //Profile pfp post btn
    const Pfpsubmit = document.getElementById('submit');
    //image manipulate
    const profPfpImg = document.querySelector('#profile-photo');

    //submit button function
    Pfpsubmit.addEventListener('click', function(event){
        event.preventDefault();

        const pfpFile = profilePfp.files[0];

        if(pfpFile){
            const pfpReader = new FileReader();

            pfpReader.onload = function(e){
                profPfpImg.style.backgroundImage = `url(${e.target.result})`;
                profPfpImg.style.backgroundSize = 'cover';
                profPfpImg.style.backgroundPosition = 'center';

                //close the css ones the image is uploaded
                document.getElementById('editProfileModal').classList.add('hidden');
            };
            pfpReader.readAsDataURL(pfpFile);
        }
    })
}
//profile photo function
profilePhoto();