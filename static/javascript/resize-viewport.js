window.addEventListener('DOMContentLoaded', function() {
    function setDimensions() {
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);  
      document.body.style.width = viewportWidth + 'px';
      document.body.style.height = viewportHeight + 'px';
      console.log(viewportHeight)
      console.log(viewportWidth)
    }
    
    setDimensions();
    
    window.addEventListener('resize', setDimensions);
  });