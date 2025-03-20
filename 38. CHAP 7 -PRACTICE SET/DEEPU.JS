document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red';
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green';
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green';

Array.from(document.getElementsByTagName('li')).forEach((Element=>{
    Element.style.backgroundColor = 'cyan';
}))
