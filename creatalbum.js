document.getElementById('createAlbumBtn').addEventListener('click', function() {
    document.getElementById('popupCard').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupCard').style.display = 'none';
});

document.getElementById('albumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    const albumName = document.getElementById('albumName').value;
    const albumDesc = document.getElementById('albumDesc').value;
    alert(`Album "${albumName}" created with description: "${albumDesc}"`);
    document.getElementById('popupCard').style.display = 'none';
});
