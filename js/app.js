const currentDay = document.querySelector('#currentDay');
const row = document.querySelector('.row');

const today = moment();
const hour = today.format('H');

$("#currentDay").text(today.format("dddd, MMMM Do"));
$(".curDay").text(today.format("dddd"));

$(".row").each(function(){
const curHour = $(this).attr("name");

if (curHour < hour) {
    $(this).addClass("past") 
} else if (curHour == hour) {
    $(this).addClass("present")
} else {
    $(this).addClass("future");
}});

const input1 = $("#row-9");
const input2 = $("#row-10");
const input3 = $("#row-11");
const input4 = $("#row-12");
const input5 = $("#row-13");
const input6 = $("#row-14");
const input7 = $("#row-15");
const input8 = $("#row-16");
const input9 = $("#row-17");
const input10 = $("#row-18");


// Saving to Local Storage
$('#09').click(function(e) {
    e.preventDefault()
    localStorage.setItem('first', input1.val());
    input1.text(input1.val()); 
  });
  $('#10').click(function(e) {
    e.preventDefault()
    localStorage.setItem('second', input2.val());
    input2.text(input2.val()); 
  });
  
  $('#11').click(function(e) {
    e.preventDefault()
    localStorage.setItem('third', input3.val());
    input3.text(input3.val()); 
  });
  
  $('#12').click(function(e) {
    e.preventDefault()
    localStorage.setItem('fourth', input4.val());
    input4.text(input4.val()); 
  });
  
  $('#13').click(function(e) {
    e.preventDefault()
    localStorage.setItem('fifth', input5.val());
    input5.text(input5.val()); 
  });
  
  $('#14').click(function(e) {
    e.preventDefault()
    localStorage.setItem('sixth', input6.val());
    input6.text(input6.val()); 
  });
  
  $('#15').click(function(e) {
    e.preventDefault()
    localStorage.setItem('seventh', input7.val());
    input7.text(input7.val()); 
  });
  
  $('#16').click(function(e) {
    e.preventDefault()
    localStorage.setItem('eigth', input8.val());
    input8.text(input8.val()); 
  });
  
  $('#17').click(function(e) {
    e.preventDefault()
    localStorage.setItem('ninth', input9.val());
    input9.text(input9.val()); 
  });

  $('#18').click(function(e) {
    e.preventDefault()
    localStorage.setItem('tenth', input10.val());
    input10.text(input10.val()); 
  });
  
 
 onload = function() {
    const getText1 = localStorage.getItem('first', input1.val());
    input1.text(getText1);

    const getText2 = localStorage.getItem('second', input2.val());
    input2.text(getText2);

    const getText3 = localStorage.getItem('third', input3.val());
    input3.text(getText3);

    const getText4 = localStorage.getItem('fourth', input4.val());
    input4.text(getText4);

    const getText5 = localStorage.getItem('fifth', input5.val());
    input5.text(getText5);

    const getText6 = localStorage.getItem('sixth', input6.val());
    input6.text(getText6);

    const getText7 = localStorage.getItem('seventh', input7.val());
    input7.text(getText7);

    const getText8 = localStorage.getItem('eigth', input8.val());
    input8.text(getText8);

    const getText9 = localStorage.getItem('ninth', input9.val());
    input9.text(getText9);

    const getText10 = localStorage.getItem('tenth', input10.val());
    input10.text(getText10);
    }