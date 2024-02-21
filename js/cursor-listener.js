var operation = 'add';
AFRAME.registerComponent('cursor-listener', {
    init: function () {
        
    this.onClick = this.onClick.bind(this);
      console.log("Init");
      window.addEventListener('click', this.onClick);
       
    },
    onClick: function(event) {
        var position = this.el.getAttribute("position")
        console.log(position);
        const newX = position.x;
        if(position.y <= -2){
            operation='add';
        }
        else if(position.y >= 6){
            operation='subtract';
        }
        var newY = position.y;
        if(operation=='add') {
            newY = position.y+1;
        }
        else{
            newY = position.y-1;
        }
        const newZ = position.z;
        console.log(`${newX} ${newY} ${newZ}`);
        this.el.setAttribute("position", `${newX} ${newY} ${newZ}`);

    }
  });