



function testimonial_filler(){

    var names=['Henry','Allen','Saline Industries','BG farms','Alice'];
    var comments=['I am very fortunate to get to know about them and since we installed solar panels at our home we save a lot.','we made water harvesting system and we can now fulfill our needs.','We are very satisfies with the service and we are able to save a lot of money due to solar energy and stored water.','We thanks verdan space for their service to our farm. we are completely satisfied.','I would give 5 start for their service and for all the consultation and solar installation.'];
    const testimonialContainer=document.getElementById('testimonials-container');

    for(var i=0;i<names.length;i++){

        var testimonialBoxHTML=document.createElement('div');
        testimonialBoxHTML.className="testimonial-box";

        var testimonialImageHTML=document.createElement('div');
        testimonialImageHTML.className="testimonial-image";
        var imgHTML=document.createElement('img');
        imgHTML.src="./public/img/profile.png";

        var testimonialNameHTML=document.createElement('div');
        testimonialNameHTML.className="testimonial-name";
        testimonialNameHTML.innerHTML=names[i];

        var testimonialCommentHTML=document.createElement('div');
        testimonialCommentHTML.className="testimonial-comment";
        testimonialCommentHTML.innerHTML=comments[i];

        testimonialImageHTML.appendChild(imgHTML);
        testimonialBoxHTML.appendChild(testimonialImageHTML);
        testimonialBoxHTML.appendChild(testimonialNameHTML);
        testimonialBoxHTML.appendChild(testimonialCommentHTML);
        
        testimonialContainer.appendChild(testimonialBoxHTML);
    }
}

testimonial_filler();