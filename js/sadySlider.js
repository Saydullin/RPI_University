function connectSadySlider(DOM) {
    var sadySlider = DOM.querySelector(".sady_slider");
    var sliderItemsParent = DOM.querySelector(".sady_slider_items");
    const sliderItems = DOM.querySelectorAll(".sady_slider_item");

    [...sliderItems].forEach(element => {
        var width = sadySlider.offsetWidth;
        element.style.width = width + "px";
        element.setAttribute("style", "width: " + width + "px;");
    });

    sliderItemsParent.addEventListener("click", function(e) {
        if (e.target.closest(".sady_slider_dott")) {
            var id = e.target.dataset.id;
            var currSlide = sliderItems[id - 1];
            var translate = currSlide.offsetLeft - sliderItems[0].offsetLeft;

            sliderItemsParent.setAttribute("style", "transform: translateX(" + (translate * -1) + "px);");
        }
    })

}

connectSadySlider(document);


