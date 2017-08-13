//  fill output1 with the first paragraph's content, text only.
document.querySelector('.output1').textContent
    = document.getElementsByTagName('p')[0].textContent;

//  fill output2 with the first paragraph's content keeping the cat strong.
document.querySelector('.output2').innerHTML
    = document.getElementsByTagName('p')[0].innerHTML;
