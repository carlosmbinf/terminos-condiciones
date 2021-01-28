var en = `<footer class="d-flex align-items-center">
<div class="container d-flex justify-content-between align-items-center">
    <div class="row d-flex justify-content-center" style="color: white;">
        <a class="col-12" href="https://members.vacancyrewards.com/en/terms-conditions">Terms and Conditions</a>
        <a class="col-12" href="https://members.vacancyrewards.com/en/aviso-de-privacidad">Privacy policies</a>
        <a class="col-12" href="https://members.vacancyrewards.com/en/contact-us">Contacts</a>
    </div>
    <a href='https://members.vacancyrewards.com/en'><img src="/img/LogoVacancy.png" alt="Image loading error" ></a>
</div>
</footer>
</body>
</html>`;
var es = `<footer class="d-flex align-items-center">
<div class="container d-flex justify-content-between align-items-center">
    <div class="row d-flex justify-content-center" style="color: white;">
        <a class="col-12" href="https://members.vacancyrewards.com/es/terminos-y-condiciones">Términos y Condiciones</a>
        <a class="col-12" href="https://members.vacancyrewards.com/es/aviso-de-privacidad">Políticas de Privacidad</a>
        <a class="col-12" href="https://members.vacancyrewards.com/es/contacto">Contactos</a>
    </div>
    <a href='https://members.vacancyrewards.com/es'><img src="/img/LogoVacancy.png" alt="Error cargando Imagen" ></a>
</div>
</footer>
</body>
</html>`
var footer = function(lang){
    
        // Busca un traslado en coche privado, tren o autobús
    if (lang == 'en') {
        return en
    } else {
        return es
    }
    
}
module.exports = footer;