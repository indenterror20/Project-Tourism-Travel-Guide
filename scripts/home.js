
//notification card
document.addEventListener('DOMContentLoaded', () => {
    const notifButton = document.getElementById('notification-toggle');
    const notifcard = document.getElementById('notification-card');

    //notification button activiation   
    notifButton.addEventListener("click", ()=> {
    notifcard.classList.toggle(`hidden`);
});

    // Dummy user data
    const userData = {
        username: 'Karl Alden Gaac',
        bio: 'Travel enthusiast | Adventure seeker | Exploring the world one destination at a time',
        coverPhoto: null,
        profilePhoto: null
    };

    // Update profile display
    document.getElementById('profileUsername').textContent = userData.username;
    document.getElementById('profileBio').textContent = userData.bio;

    // Edit Profile Modal Elements
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeEditModal = document.getElementById('closeEditModal');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const editProfileForm = document.getElementById('editProfileForm');
    const usernameInput = document.getElementById('usernameInput');

    // Cover photo elements
    const coverPhotoInput = document.getElementById('coverPhotoInput');
    const coverPreviewContainer = document.getElementById('coverPreviewContainer');
    const coverPreview = document.getElementById('coverPreview');

    // Profile photo elements
    const profilePhotoInput = document.getElementById('profilePhotoInput');
    const profilePreviewContainer = document.getElementById('profilePreviewContainer');
    const profilePreview = document.getElementById('profilePreview');

    // Open edit profile modal
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            usernameInput.value = userData.username;
            editProfileModal.classList.remove('hidden');
        });
    }

    // Close modal function
    const closeModal = () => {
        editProfileModal.classList.add('hidden');
    };

    if (closeEditModal) closeEditModal.addEventListener('click', closeModal);
    if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    if (editProfileModal) {
        editProfileModal.addEventListener('click', (e) => {
            if (e.target === editProfileModal) {
                closeModal();
            }
        });
    }

    // Cover photo preview
    if (coverPhotoInput) {
        coverPhotoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    coverPreview.src = event.target.result;
                    coverPreviewContainer.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Remove cover photo
    if (coverPreviewContainer) {
        coverPreviewContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-photo-btn')) {
                e.preventDefault();
                if (coverPhotoInput) coverPhotoInput.value = '';
                coverPreviewContainer.style.display = 'none';
            }
        });
    }

    // Profile photo preview
    if (profilePhotoInput) {
        profilePhotoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    profilePreview.src = event.target.result;
                    profilePreviewContainer.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Remove profile photo
    if (profilePreviewContainer) {
        profilePreviewContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-photo-btn')) {
                e.preventDefault();
                if (profilePhotoInput) profilePhotoInput.value = '';
                profilePreviewContainer.style.display = 'none';
            }
        });
    }

    // Handle form submission
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            userData.username = usernameInput.value;
            document.getElementById('profileUsername').textContent = userData.username;
            
            console.log('Profile Update:', {
                username: userData.username,
                bio: userData.bio,
                coverPhoto: coverPhotoInput.files[0] || null,
                profilePhoto: profilePhotoInput.files[0] || null
            });
            
            closeModal();
        });
    }
});