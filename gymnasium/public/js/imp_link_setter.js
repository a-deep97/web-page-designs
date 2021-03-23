



function linkSetter(){

    var headings=['About Us','Policies and Legal','Customer Service'];
    var links=[['Our background','Careers','Press room'],['Privacy policy','Website terms and conditions','Members term and conditions','Labour compliance documents'],['Members\' area','FAQS','Contact us','Membership enquiry']];
    const linksContainer=document.getElementsByClassName('links-container') ;
    for(var i=0;i<linksContainer.length;i++){
        linksContainer[i].childNodes[1].innerHTML=headings[i];
        for(var j=0;j<links[i].length;j++){
            
            var link_html=document.createElement('div');
            link_html.className='important-link';
            link_html.setAttribute('onclick',"location.href='';");
            link_html.innerHTML=links[i][j];
            linksContainer[i].appendChild(link_html);
        }
    }
}
linkSetter();