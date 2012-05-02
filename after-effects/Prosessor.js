
var timeLineDuration = 0;

// make sure the animation start running and only once.
function timerTriggered() {
    var item = main.loader.item;
    var list = [];

    // In the case of QML children, the key is their index number, starting from 0
    for (var key in item.children) {

        var child = item.children[key];
        list = list.concat(child.animList);
    }

    var time = main.currentTime;
    var len = list.length;

    //console.log("timerTriggered. len: " + len + ", time: " + time);

    for (var i = 0; i < len; i++) {
        var anim = list[i]; // SequentialAnimation
        if (time > anim.initTime && !anim.alreadyRunOnce) {
            anim.alreadyRunOnce = true;
            anim.start();
            // should also start drawing to canvas
        }
    }

    // show where we are at in the timeLine
    var pos = main.width * (time / timeLineDuration);
    timeLineKey.x = pos;
}


function fillTimeLine() {
    var item = main.loader.item;

    var longest = 0;
    var data = [];
    var w = main.width;
    var key;
    var child;
    var len = item.children.length;

    for (var i = 0; i < len; i++) {
        child = item.children[i];
        longest = Math.max(longest, child.outTime);
    }

    for (var j = 0; j < len; j++) {
        child = item.children[j];
        var duration = (child.outTime - child.inTime) / longest * w;
        var inTime = child.inTime / longest * w;
        data.push({ color: child.color.toString(), duration: duration, inTime: inTime });
    }
    console.log("fillTimeLine. longest: " + longest + ", data.length: " + data.length);

    timeLineDuration = longest;

    timeLine.model = data;
}


function showTooltip(xPos, yPos, layerName){
    toolTip.visible = true;
    toolTip.text = layerName;
    toolTip.x = xPos;
    toolTip.y = yPos;
}
function hideTooltip(){
    toolTip.visible = false;
}
