/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
    */

    const destination = document.getElementById("image"); // get the image div
    destination.style.backgroundImage = `url(\"${previewPic.src}\")`; // change the background image to the source of the preview image
    destination.innerHTML = previewPic.alt; // change the text to the alt text of the preview image
}

function unDo() {
    /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
    */

    const original_text = "Hover over an image below to display here." // original text
    const destination = document.getElementById("image"); // get the image div
    destination.style.backgroundImage = "url(\"\")"; // change the background image to the original image (no image)
    destination.innerHTML = original_text; // change the text to the original text

}
1