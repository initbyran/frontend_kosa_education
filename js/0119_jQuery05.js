function myFunc(){
    // 새로운 element를 jQuery를 이용해서 생성
    // let li = $('<li></li>').text('이순신').attr('id','myID').addClass('myStyle');
    // $('ul').append(li);
    // $('ul>li:last').before(li);
    // $('ul>li:first').after(li);

    // 이미지
    //<img src='./js/boksun.jpg'></img>
    let myImg = $('<img />').attr('src','./image/boksun.jpg');
    $('ul').after(myImg);
}

function addHandler(){
    // 1. 이벤트 핸들러를 붙일 element를 찾기
    // 2. 이벤트 핸들러를 특정 이벤트에 등록
    // $('ul>li:last').on('click', function()){
    //     console.log('강감찬이 클릭되었어요!');
    // };
    // 축약형
    $('ul>li:last').click(function(){
        console.log('강감찬이 클릭되었어요!');
    });
}