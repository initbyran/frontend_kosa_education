//<!--버튼을 클릭하면 다음과 같은 순서대로 console에 출력하세요-->
//    <!--사과 파일애플 참외 myID 고양이 호랑이 강아지-->

function myFunc(){
    console.log($('#apple').text());
    console.log($('#apple+li').text());
    console.log($('ul > li.myList').text());
    console.log($('form > input').attr('id'));
    console.log($('ol > li:first').text());
    console.log($('ol > li:first+li').text());
    console.log($('ol > li:last').text());
}