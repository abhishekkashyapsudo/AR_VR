AFRAME.registerComponent('play-on-click', {
    init: function(){
        this.onClick = this.onClick.bind(this);
    },
    play: function() {
        window.addEventListener('click', this.onClick);
    },
    
    onClick: function(event) {
        console.log(event);
        console.log("----");
        var videoE1=this.el.getAttribute('material').src;
        console.log(this.el);
        if(!videoE1) return;
        this.el.object3D.visible= true;
        videoE1.play();
    }
});