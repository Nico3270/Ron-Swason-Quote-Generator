var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var quote = document.querySelector(".frase");

///Request utilizando  XHR

var xhrBoton = document.querySelector(".xhr");

xhrBoton.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {

            var frase = JSON.parse(XHR.responseText);
            quote.textContent = frase;

        }
    }
    XHR.open("GET", url);
    XHR.send();
})

//Request utilizando Fetch request

var fetchBoton = document.querySelector(".fetch");
fetchBoton.addEventListener("click", function () {
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        }).then(function (data) {
            console.log(data);
            quote.textContent = data;
        }).catch(function (error) {
            console.log("Hubo un problema, error: ", error);
        })
})


// Request utilizando jQuery

$(".jquery").click(function () {
    $.get(url)
        .done(function (data) {
            $(".frase").text(data)
        })
        .fail(function () {
            alert("Se produjo un error")
        })
})


//Request utilizando Axios 

var axiosBoton = document.querySelector(".axios");
axiosBoton.addEventListener("click", function(){
    axios.get(url)
    .then(function(res){
        quote.textContent= res.data[0];
    })
    .catch(function(error){
        alert("se produjo un eror", error)
    })
})