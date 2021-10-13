const city_name = document.getElementById('city_name');
const submitbtn = document.getElementById('submitbtn');
const temp_city = document.getElementById('temp_city');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.data_hide');


// const getinfo = async(event)=>{
//     event.preventDefault();
//     cityval = city_name.value;
//     if(cityval === ''){
//         temp_city.innerText = 'Plz enter your city name';
//         datahide.classList.add('data_hide');
//     }else{
//         try{
//             let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=88ad90172d5def5922c5786162e4c669`
//             const response = await fetch(url);
//             const data = await response.json();
//             const arrdata = [data];
           
//             temp_val.innerText = arrdata[0].main.temp;
//             temp_city.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

//             const tempmod = arrdata[0].weather[0].main;

//             // condition to check tempmod
//             if(tempmod == 'Clear'){
//                 temp_status.innerHTML =
//                 '<i class="fas fa-sun" style="color: #eccc86;"></i>';
//                 console.log(tempmod);
//             }else if(tempmod == 'Clouds'){
//                 temp_status.innerHTML = 
//                 '<i class="fas fa-cloud" style="color: #f1f3f6;"></i>'
//                 console.log(tempmod);
//             }else if(tempmod == 'Rain'){
//                 temp_status.innerHTML = 
//                 '<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
//                 console.log(tempmod);
//             }else{
//                 temp_status.innerHTML = 
//                 '<i class="fas fa-sun" style="color: #eccc86;"></i>';
//                 console.log(tempmod);
//             }
//             datahide.classList.remove('data_hide');

//         }catch{
//             temp_city.innerText = 'Plz Enter the City Name Properly';
//             datahide.classList.add('data_hide');
//         }
//     }
// }

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=88ad90172d5def5922c5786162e4c669`)
// .then((apidata)=>{
//     // console.log(apidata)
//     return apidata.json();
// })
// .then((actualdata)=>{
//     console.log(actualdata)
// })
// .catch((err)=>{
//     console.log(err)
// })

const apidata = async(event)=>{
    event.preventDefault();
    cityval = city_name.value;
    if(cityval === ''){
        temp_city.innerText = 'Plz enter your city name';
        datahide.classList.add('data_hide');
    }else{
        try{
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=88ad90172d5def5922c5786162e4c669`)
            const data = await response.json()
            const arraydata = [data]
    
            temp_val.innerText = arraydata[0].main.temp;
            console.log(temp_val)
            temp_city.innerText = `${arraydata[0].name}, ${arraydata[0].sys.country}`;
            console.log(temp_city)
        }catch(err){
            console.log(err)
        }
    }    
    
}
apidata()

submitbtn.addEventListener('click',apidata);
