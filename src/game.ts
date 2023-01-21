console.log("start");

var rightBar: any = document.getElementById("rightBar");
var leftBar: any = document.getElementById("leftBar");

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 38) {
        //right bar is up
        if(rightBar != null && rightBar != undefined){
            var topVal: number = parseInt(rightBar.style.top, 10);
            if(!topVal)
                topVal = 10;
            topVal -= 10;
            rightBar.style.top = topVal + "px";
        }
    }
    else if(event.keyCode == 40){
        //right bar is down    
        if(rightBar != null && rightBar != undefined){
            var topVal: number = parseInt(rightBar.style.top, 10);
            if(!topVal)
                topVal = 10;
            topVal += 10;
            debugger;
            if(topVal < document.body.scrollHeight)
                rightBar.style.top = topVal + "px";
        }
    }
  });