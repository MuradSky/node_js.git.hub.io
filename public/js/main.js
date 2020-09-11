function clock(){
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#minute').innerHTML = minutes;
}
setInterval(clock, 1000);
setInterval(()=>{
    document.querySelector('#second').style.opacity = 0;
},1000)
setInterval(()=>{
    document.querySelector('#second').style.opacity = 1;
},2000)
clock();
function getWeekDay() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let days = date.toLocaleDateString('tr-TR', options);
    document.querySelector('#date').innerHTML = days;
}
getWeekDay();


let home_ico = document.querySelectorAll('.home__links'),
    home_icon = document.querySelectorAll('.home__icon');
    home_ico.forEach(function (item, i) {
        item.addEventListener('mouseover', function (e) {
            var target = e.target;

            if (target == item || target.parentNode == item) {
                advicesImgRemove();
                advicesImg(i);
            }
    });
});

function advicesImg() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    home_icon[i].classList.add('animate__headShake');
}
function advicesImgRemove() {
    home_icon.forEach(function (item) {
        item.classList.remove('animate__headShake');
    });
} 

let tabLinks = document.querySelectorAll('.home__links'),
    tabModel = document.querySelector('.tab-modal'),
    tabText = document.querySelector('#text-animation');
tabLinks.forEach(item=>{
    item.addEventListener('click', e =>{
        tabModel.classList.add('tab-modal_show')
        
        e.preventDefault();
        let terget = item.getAttribute('data-set')
        fetch('http://localhost:3000/id/:id')
            .then(res => res.json())
            .then(id => {
                document.querySelector('#id').textContent = id[`${terget}`].obj
                tabText.textContent = 'This " Fansy " ' + id[`${terget}`].obj
                textAnimation(tabText);
                
            })
               
    })
})

function textAnimation(tabText){
    const str = tabText.textContent.split("");
    tabText.textContent = "";
    for(let i = 0; i < str.length; i++) {
        tabText.innerHTML += "<span>"+str[i]+"</span>";
        
    }
    let char = 0;
    let timer = setInterval(onTick, 50);
    function onTick(){
        let span = tabText.querySelectorAll('span')[char];
        setTimeout(()=>{span.classList.add('faded_text')}, 500)
        char++
        if(char === str.length) {
            complete();
        }
   
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
    let homeInner = document.querySelector('.home__inner');
    document.addEventListener('click', e=>{
            
            if(!homeInner.contains(e.target) && !tabModel.contains(e.target)) {
                tabModel.classList.remove('tab-modal_show')
                tabText.textContent = ""; 
            }
    })
}

