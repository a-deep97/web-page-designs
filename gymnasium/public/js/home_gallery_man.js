

function gallery_images(){
    const galleryBoxes=document.getElementsByClassName('gallery-box');
    for(var i=0;i<4;i++){
        galleryBoxes[i].style.backgroundImage="url('./public/img/gallery/gallery_pic"+(i+1)+".jpg')";
    }
}
gallery_images();