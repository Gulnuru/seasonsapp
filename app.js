const winter = document.createElement('button')
winter.innerText = 'Winter'
document.body.appendChild(winter)
winter.style.background = 'lightblue'
winter.onclick = function showMonths(winter){
  const december =  document.getElementById('months-container')
  december.innerText = 'December';
  december.style.background = 'lightblue';
  document.body.appendChild(december);
  december.id = 'div1';

  const january = document.createElement('div')
  january.innerText = 'January';
  january.style.background = 'lightblue';
  document.body.appendChild(january);
  january.id = 'div1';
  
  const february = document.createElement('div')
  february.innerText = 'February';
  february.style.background = 'lightblue';
  document.body.appendChild(february); 
  february.id = 'div1';
}

const spring = document.createElement('button')
spring.innerText = 'Spring'
document.body.appendChild(spring)
spring.style.background = 'lightgreen'
spring.onclick = function showMonths(spring){
  const march = document.createElement('div')
  march.innerText = 'March';
  march.style.background = 'lightgreen';
  document.body.appendChild(march); 
  march.id = 'div2';

  const april = document.createElement('div');
  april.innerText = 'April';
  april.style.background = 'lightgreen';
  document.body.appendChild(april); 
  april.id = 'div2';

  const may = document.createElement('div')
  may.innerText = 'May';
  may.style.background = 'lightgreen';
  document.body.appendChild(may); 
  may.id = 'div2';
}
const summer = document.createElement('button')
summer.innerText = 'Summer'
document.body.appendChild(summer)
summer.style.background = 'yellow'
summer.onclick = function showMonths(summer){
  const june = document.getElementById('months-container');
  june.innerText = 'June';
  june.style.background = 'yellow';
  document.body.appendChild(june); 
  june.id = 'div3';

  const july = document.createElement('div')
  july.innerText = 'July';
  july.style.background = 'yellow';
  document.body.appendChild(july); 
  july.id = 'div3';

  const august =  document.createElement('div');
  august.innerText = 'August';
  august.style.background = 'yellow';
  document.body.appendChild(august); 
  august.id = 'div3';
}

const fall = document.createElement('button')
fall.innerText = 'Fall'
document.body.appendChild(fall)
fall.style.background = 'brown'
fall.onclick = function showMonths(fall){
  const september =  document.createElement('div')
  september.innerText = 'September';
  september.style.background = 'brown';
  document.body.appendChild(september); 
  september.id = 'div4';

  const october =  document.createElement('div')
  october.innerText = 'October';
  october.style.background = 'brown';
  document.body.appendChild(october); 
  october.id = 'div4';

  const november =  document.createElement('div')
  november.innerText = 'November';
  november.style.background = 'brown';
  document.body.appendChild(november); 
  november.id = 'div4';
}



// function deleteChild(){
//   let seasonmonths = document.getElementsByTagName(div);
//   let e = document.querySelector("div");
//   // let child = e.lastElementChild;
//   seasonmonths.innerHTML = "";
//   if(seasonmonths = " "){
//     seasonmonths.add(e)
//   }else{
//     e.removeChild(e);
//   } 
//   } 
//   deleteChild();

// let btns = document.querySelectorAll("div").onclick= function(){
//   if (seasonmonths) = "" {}
// }

function showMonths(div){
  const monthsContainer = document.getElementById("months-container")
  monthsContainer.innerHTML = " ";
  switch(div){
    case 'winter':
      return['february','January','December'];
    case 'spring':
      return['March','April','May'];
    case 'summer':
      return['June','July','August'];
    case 'fall':
      return['September','October','November'];
      default:
        return[];
  }
}
showMonths('fall');


 



