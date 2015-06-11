// HTML
<div id="foo">click me</div>

// CSS
#foo {
    background-color: blue;
    height: 50px;
    width: 50px;
    text-align: center;
    font-weight: bold;
}

// JS
var div = document.getElementById('foo');

div.addEventListener('click', function(){
    this.style.height = 100 + 'px';
    this.style.width = 100 + 'px';
    this.style.backgroundColor = 'yellow';
    this.innerHTML = '';
});

// http://stackoverflow.com/questions/30691002/resizable-div-implementation