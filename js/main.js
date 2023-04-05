
    /*---- -*/
    let header = document.getElementById("header");
    let infoBoxAnimado = document.querySelectorAll('.info_box');


    //funcion para el header al hacer scroll
    function ModificadorDeHeader(){
        if (window.scrollY > 2) {
            header.classList.add("scroll");
        }
        else{
            // document.querySelector("header").style.backgroundColor = "transparent";
            header.classList.remove("scroll");
        }
    }

    //funcion que muestra los elementos al hacer scroll
    function AnimarBox() {
        let scrollTop = document.documentElement.scrollTop;

        for (let i = 0; i < infoBoxAnimado.length; i++) {
            let alturaBox = infoBoxAnimado[i].offsetTop;

            if (alturaBox < scrollTop) {
                infoBoxAnimado[i].style.opacity = 1;
            }
        }

    }
    document.addEventListener("scroll", ModificadorDeHeader);
    window.addEventListener("scroll", AnimarBox);





