// event handler
function myMouseEnter(){
    // event 객체 찾기
    // $(event.target).css('color','red');
    // $(event.target).css('background-color','yellow');
    $(event.target).addClass('myEnterStyle');
}

function myMouseLeave(){
    // $(event.target).css('color','black');
    // $(event.target).css('background-color','white');
    $(event.target).removeClass('myEnterStyle');
}

function myFunc(){
    alert('This is Button!!');
}

function secondFunc(){
    alert('This is DIV!!');
}