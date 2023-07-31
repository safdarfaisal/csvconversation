window.addEventListener('DOMContentLoaded', function(){
    var textArea = this.document.getElementById('query');
    var viewPortWidth = this.window.innerWidth || this.document.documentElement.innerWidth;
    var maxLength = Math.floor(viewPortWidth); 
    textArea.setAttribute('maxlength', maxLength)
});