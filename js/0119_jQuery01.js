function myFunc(){
 //console.log( $(event.target).text());
 $('div').text($('select>option:selected').text());
}