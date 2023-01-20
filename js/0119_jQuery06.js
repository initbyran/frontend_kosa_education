
// $(document).ready(function(){
//      $('ul>li').on('click', function(){
//         alert('안녕하세요!');
// });
// });

// 축약형
$(function(){
    $('ul>li').on('click', function(){
       alert($(this).text());
})
})

function myFunc(){
    alert('링크가 눌렸어요');
    event.preventDefault();
}
