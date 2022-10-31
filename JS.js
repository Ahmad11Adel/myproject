var arrayofimgs = Array.from (document.querySelectorAll('.silder-container img'));
var sildercount = arrayofimgs.length;
var nextsilder = document.getElementById('next');
var prevsilder =document.getElementById('prev');
var sliderNumber=document.getElementById('silder-number');

var currentsilder = 1;



prevsilder.onclick = previmg;
nextsilder.onclick = nextimg;



var paginationElement = document.createElement('ul')
paginationElement.setAttribute('id','pagination-ul');
for( var i =1 ; i<= 6 ;i++){
    var paginationitems= document.createElement('li');
    paginationitems.setAttribute('data-index', i);
    paginationitems.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationitems);
}
document.getElementsByClassName('indicators')[0].appendChild(paginationElement);

var paginationUl=document.getElementById('pagination-ul');
var arrayofind = Array.from (document.querySelectorAll('#pagination-ul li'));








checker();


function checker(){
    sliderNumber.textContent = 'slide#'+(currentsilder) +' of '+(sildercount);
    removeall ();
    arrayofimgs[currentsilder-1].classList.add('active');
    paginationUl.children[currentsilder-1].classList.add('active');

    if(currentsilder== 1){
    prevsilder.classList.add('disabled');
    }
    else{
    prevsilder.classList.remove('disabled');
    }

    if(currentsilder==6){
    nextsilder.classList.add('disabled');
    }
    else{
    nextsilder.classList.remove('disabled');
    } 
}
 



for( var i =0 ; i<arrayofind.length ; i++){

    arrayofind[i].onclick=function(){

        currentsilder= parseInt(this.getAttribute('data-index'));
        checker();
    }

    

}





function removeall ()
{
    arrayofimgs.forEach(function(img){
        img.classList.remove('active');
    });
    arrayofind.forEach(function(bullet){
        bullet.classList.remove('active');
    });


}





function previmg (){
    if (prevsilder.classList.contains('disabled') ){
        return false;
    }
    else{
        currentsilder --;
        checker();
    }
}


function nextimg (){
    if (nextsilder.classList.contains('disabled') ){
        return false;
    }
    else{
        currentsilder ++;
        checker();
    }
}
