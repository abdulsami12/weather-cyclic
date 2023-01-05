const url=window.location.href;
let baseURL = ""
// const baseURL = `http://localhost:5001`

if(url.split(":")[0]=='http'){
    baseURL=`http://localhost:5001`
}else{
    baseURL = `https://tan-frail-chicken.cyclic.app`
}
let getweather = () => {
    let CityName = document.querySelector("#search").value


    axios.get(`${baseURL}/weather`)
        .then(function (response) {
            // handle success
            console.log("response is success")
            console.log(response.data);
       
            document.querySelector("#temperature").innerHTML = `${response.data.temp} <sup> &deg;</sup> `
            document.querySelector("#feel").innerHTML = `FEELS LIKE ${response.data.feels_like}`
      
            document.querySelector("#wind").innerHTML = response.data.wind
            document.querySelector("#pressure").innerHTML = response.data.pressure
            document.querySelector("#visiblity").innerHTML = `${response.data.visibility / 1000}`
            document.querySelector("#humidity").innerHTML = response.data.humidity
            // document.querySelector("#high_tem").innerHTML = response.data.main.temp_max
            // document.querySelector("#cloud").innerHTML = response.data.weather[0].description
            // var a = response.data.weather[0].description

            // c_image(a)
            // var text = a.slice(0, 5);
            // console.log(text)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}


// function c_image(a) {

//     if (a == "few clouds") {
//         document.body.style.backgroundImage = "url('https://glamtush.com/wp-content/uploads/2018/11/NiMET-sunny-partly-cloudy-weather-1200x900.png')";

//     }
//     if (a == "clear sky") {
//         document.body.style.backgroundImage = "url('https://images.pond5.com/sun-rising-clear-sky-4k-footage-046065667_iconl.jpeg')";

//     }
//     if (a == "overcast clouds") {
//         document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/10/27/09/32/clouds-5690135_1280.jpg')";

//     }
//     if (a == "moderate rain") {
//         document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwTkoiSHZLZRs0DdndSzDBBlgPeGENc2f9Q&usqp=CAU')";
//     }
//     if (a == "light shower sleet") {
//         document.body.style.backgroundImage = "url('https://image.shutterstock.com/image-photo/background-on-window-glass-rain-260nw-1934703842.jpg')";

//     }
//     if (a == "light rain") {
//         document.body.style.backgroundImage = "url('https://static3.bigstockphoto.com/1/1/3/large1500/311973595.jpg')";

//     }
//     if (a == "mist") {
//         document.body.style.backgroundImage = "url('https://miro.medium.com/max/1400/1*PzfE18BkPw6luo7YW7c9XQ.jpeg')";

//     }
//     if (a == "thunderstorm") {
//         document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/raster-illustration-thunderstorm-clouds-sky-with-electric-lightning-weather-conditions-storm-warning-bright-white-light-danger-cold-nature-concept-3d-artwork-background-business_76964-2255.jpg?w=2000')";

//     }

//     if (a == "scattered clouds") {
//         document.body.style.backgroundImage = "url('https://live.staticflickr.com/2106/1909487867_de140c7eb8_b.jpg')";

//     }
//     if (a == "snow") {
//         document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/winter-landscape-mountain-fir-tree-under-the-snow-picture-id1352092846?b=1&k=20&m=1352092846&s=170667a&w=0&h=xFtENzVXtjhz5LqF_9eV8Q7EUvrfGabMlQnVel9JlRo=')"
//     }
//     if (a == "broken clouds") {
//         document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/overcast-broken-cloud-layer-north-carolina-sky-barely-to-where-you-can-see-sun-cutting-lines-around-each-section-131111598.jpg')"
//     }
//     if (a == "light snow") {
//         document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajiu6ZUPTiisJBTenWVzRArygrZ8cb2KaqA&usqp=CAU')"
//     }
// }









// function getTime(url) {
//     return new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();
//         req.open("GET", url);
//         req.onload = () =>
//             req.status === 200
//                 ? resolve(req.response)
//                 : reject(Error(req.statusText));
//         req.onerror = (e) => reject(Error(`Network Error: ${e}`));
//         req.send();
//     });
// }



// let url = "http://worldtimeapi.org/api/timezone/Pacific/Auckland";

// getTime(url)
//     .then((response) => {
//         let dateObj = JSON.parse(response);
//         let dateTime = dateObj.datetime;
//         console.log(dateObj);
//         console.log(dateTime);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// axios({
//     url: "http://worldtimeapi.org/api/timezone/Pacific/Auckland",
//     method: "get",
// })
//     .then((response) => {
//         let dateObj = response.data;
//         let dateTime = dateObj.datetime;
//         console.log(dateObj);
//         console.log(dateTime);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
