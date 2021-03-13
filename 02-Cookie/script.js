var count = 0;
var countInterval;

var onLoadCounter = function() {
    count = Number(Cookies.get('count'))
    document.getElementById('counter').innerHTML = count
    
    var previousState = Cookies.get('state')
    if (previousState === 'started'){
        start()
    }
}

var start = function() {
    countInterval = setInterval(function(){
        count += 1
        Cookies.set('count',count)
        Cookies.set('state','started')
        document.getElementById('counter').innerHTML = count
        document.getElementsByClassName('start')[0].disabled = true
        document.getElementsByClassName('pause')[0].disabled = false
        document.getElementsByClassName('reset')[0].disabled = false
    },1000)
}

var pause = function() {
    Cookies.set('state','paused')
    clearInterval(countInterval)
    document.getElementsByClassName('start')[0].disabled = false
    document.getElementsByClassName('pause')[0].disabled = true
}

var reset = function() {
    pause()
    count = 0;
    Cookies.set('count',count)
    document.getElementById('counter').innerHTML = count
    document.getElementsByClassName('reset')[0].disabled = true
}