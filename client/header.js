var en1 = `

    <a href="">ABOUT US</a>
    <a href="">FREQUENTLY ASKED QUESTION</a>
    <a href="https://members.vacancyrewards.com/en/rewards">ELECTRONIC REWARDS</a>
    <a href="http://cars.vacancyrewards.com/?ln=en">TRANSFERS</a>
    <a href="http://cars.vacancyrewards.com/alquiler/?ln=en">CAR RENTAL</a>
    <a href="https://members.vacancyrewards.com/en/contact-us">CONTACT</a>
    </div>
    <div class="header3 d-flex justify-content-center align-items-center">
    <a href="/?ln=en">AIRPLANE</a>
    <a href="/maps?ln=en">MAPS</a>
    <a href="/calendar?ln=en">CALENDAR</a>
    <a href="/hoteles?ln=en">HOTELS</a>

    <a href="/schedule?ln=en">SCHEDULE</a>
    <a href="/chansey?ln=en">HOTEL WIDGET</a>
    <a href="/weedle?ln=en">POPULAR ROUTES</a>
    <a href="/blissey?ln=en">SELECTION OF HOTELS</a>
    <a href="/ducklett?ln=en">BEST DEALS</a>
`
var es1 = `
    <a href="">QUIENES SOMOS</a>
    <a href="">PREGUNTA FRECUENTES</a>
    <a href="https://members.vacancyrewards.com/es/rewards">RECOMPENSAS ELECTRÓNICA</a>
    <a href="http://cars.vacancyrewards.com/?ln=es">TRASLADOS</a>
    <a href="http://cars.vacancyrewards.com/alquiler/?ln=en">RENTA DE AUTOS</a>
    <a href="https://members.vacancyrewards.com/es/contacto">CONTACTO</a>
    </div>
    <div class="header3 d-flex justify-content-center align-items-center">
    <a href="/?ln=es">AVIONES</a>
    <a href="/maps?ln=es">MAPAS</a>
    <a href="/calendar?ln=es">CALENDARIO</a>
    <a href="/hoteles?ln=es">HOTELES</a>
    
    <a href="/schedule?ln=es">HORARIOS</a>
    <a href="/chansey?ln=es">HOTEL WIDGET</a>
    <a href="/weedle?ln=es">RUTAS POPULARES</a>
    <a href="/blissey?ln=es">SELECCIÓN DE HOTELES</a>
    <a href="/ducklett?ln=en">MEJORES TRATOS</a>
`
var header = function(lang){
    
        if (lang === 'en') {
          return  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, minimal-ui">
    <title>Vacancy Rewards</title>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css" >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css" integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css" integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/brands.css" integrity="sha384-n9+6/aSqa9lBidZMRCQHTHKJscPq6NW4pCQBiMmHdUCvPN8ZOg2zJJTkC7WIezWv" crossorigin="anonymous">

    <!-- <script src="/js/motorGT.js"></script> -->
    <script src="/js/jquery-3.3.1.slim.min.js" ></script>
<script src="/js/popper.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
</head>
<body> 
    <header>
        <div class="container d-flex justify-content-between align-items-center" style="height: 100%;">
        <a href='/?ln=en'><img src="/img/LogoVacancy.png" alt="Error cargando Imagen" ></a>

            <div>
                <div class="row contenedoresdebotonesblancos d-flex justify-content-center">
                    <div class="btn-group" style="border-right-style: groove;">
                        
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lenguaje
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="?ln=es">Español</a>
                        <a class="dropdown-item" href="?ln=en">English</a>
                        </div>
                      </div>
                      <div class="">
                        <a class="btn " href="https://members.vacancyrewards.com/es" >
                          Home
                        </a>
                      
                      </div>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <div class="contacto d-flex align-items-center">
                    <div class="icon d-flex align-items-center justify-content-center" >
                        <i class="fa fa-phone" style="transform: rotate(102.23deg);"></i>
                    </div>
                    <div class="d-flex justify-content-center" style="position: relative;
                    right: -9px;">01 800 872 09 09 </div>
                    
                </div>
                </div>
                
            </div>
        </div>
    </header>
    <div class="header2 d-flex justify-content-center align-items-center">`
    +en1+
    `</div>`
        }else{

            return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, minimal-ui">
                <title>Document</title>
                <link rel="stylesheet" href="/css/app.css">
                <link rel="stylesheet" href="/css/bootstrap.min.css" >
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css" integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css" integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/brands.css" integrity="sha384-n9+6/aSqa9lBidZMRCQHTHKJscPq6NW4pCQBiMmHdUCvPN8ZOg2zJJTkC7WIezWv" crossorigin="anonymous">
            
                <!-- <script src="/js/motorGT.js"></script> -->
                <script src="/js/jquery-3.3.1.slim.min.js" ></script>
            <script src="/js/popper.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            </head>
            <body> 
                <header>
                    <div class="container d-flex justify-content-between align-items-center" style="height: 100%;">
                    <a href='/?ln=es'><img src="/img/LogoVacancy.png" alt="Error cargando Imagen" ></a>
            
                        <div>
                            <div class="row contenedoresdebotonesblancos d-flex justify-content-center">
                                <div class="btn-group" style="border-right-style: groove;">
                                    
                                    <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Lenguaje
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu">
                                    <a class="dropdown-item" href="?ln=es">Español</a>
                                    <a class="dropdown-item" href="?ln=en">English</a>
                                    </div>
                                  </div>
                                  <div class="">
                                    <a class="btn " href="https://members.vacancyrewards.com/es" >
                                      Home
                                    </a>
                                  
                                  </div>
                            </div>
                            <div class="contacto row d-flex align-items-center">
                                <div class="icon d-flex align-items-center justify-content-center" >
                                    <i class="fa fa-phone" style="transform: rotate(102.23deg);"></i>
                                </div>
                                <div class="d-flex justify-content-center" style="position: relative;
                                right: -9px;">01 800 872 09 09 </div>
                                
                            </div>
                        </div>
                    </div>
                </header>
                <div class="header2 d-flex justify-content-center align-items-center">`
                +es1+
                `</div>`



        }
    

}

  module.exports = header;