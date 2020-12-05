const IMAGE_CONTROLLER = (function() {
    const DOM = {
      imgWrapperElArr: Array.from(document.querySelectorAll('.imgWrapper')),
    }
    let imgUrl;
    
    let setupImages = function() {
      DOM.imgWrapperElArr.forEach(imgWrapper => {
        imgUrl = imgWrapper.getAttribute('data-src');
        imgWrapper.style.backgroundImage = `url(${imgUrl})`;
      })
    }
    
    return {
      init() {
        setupImages();
      }
    }
  })();
  
  IMAGE_CONTROLLER.init();