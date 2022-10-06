let url_contries = './assets/data/Country.json' //'https://restcountries.com/v3.1/all'
let url_codes = './assets/data/CountryCodes.json'
let seccion__contactUs = document.querySelector('.seccionContactanos')
let form_html = seccion__contactUs.querySelector(".seccionContactanos__formulario form")
let send_us_email = seccion__contactUs.querySelector('.seccionContactanos__h3--email')
let img_html = seccion__contactUs.querySelector('.seccionContactanos__img')
let select_mobile_code = $('select[name="mobile_code"]')
let select_nationality = $('select[name="nationality"]')
let select_location = $('select[name="location"]')

// logo-hdden
document.querySelector('.navbar__logohdden').addEventListener("click", () => {
    this.window.location.href = 'index.php'
})

// mostrar formulario
send_us_email.addEventListener('click', function () {
    img_html.style.display = 'none'
    form_html.style.display = 'grid'
})

// catálogo de nacionalidades y países
$.get(url_contries, function (contries) {

    let array_contries = []
    let array_nationalities = []
    let countries_sorted = []
    let nationalities_sorted = []

    select_location.append(new Option('Location', 'location'))
    select_nationality.append(new Option('Nationality', 'nationality'))

    contries.forEach(e => {
        array_contries.push(e.name.common)
        if (typeof e.demonyms != 'undefined')
            array_nationalities.push(e.demonyms.eng.m)
    })
    countries_sorted = array_contries.sort()
    nationalities_sorted = array_nationalities.sort()
    
    countries_sorted.forEach(e => {
        select_location.append(new Option(e, e))
    })
    nationalities_sorted.forEach(e => {
        select_nationality.append(new Option(e, e))
    })

    select_location.prop('selectedIndex', 0)
    select_nationality.prop('selectedIndex', 0)
})

// catálogo códigos de país
$.get(url_codes, function (codes) {
    let array_contrycodes = []
    
    select_mobile_code.append(new Option('Mobile', 'mobile'))

    codes.forEach(i => {
        array_contrycodes.push({
            name: `${i.name} (${i.dial_code})`,
            code: i.dial_code
        })
    })
    contrycodes_sorted = array_contrycodes.sort()
    contrycodes_sorted.forEach(i => {
        select_mobile_code.append(new Option(i.name, i.code))
    })
    select_mobile_code.prop('selectedIndex',0)
})

// enviar correo y registrar datos
form_html.addEventListener("submit", function (event) {

    event.preventDefault()
    let url_data = form_html.action
    let btn_send = form_html.querySelector("button.btn-enviar")
    let span_msj = document.querySelector("span.mensaje")

    let data = new FormData(form_html)
    let text_btn = btn_send.innerText
    span_msj.innerText = 'The fields marked * are required.'
    span_msj.style.borderLeft = '3px solid white'
    formActions(true)

    $.ajax({
        type: 'POST',
        data: data,
        dataType: 'JSON',
        url: url_data,
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function () {
            
            btn_send.innerText = 'Sending...'
            span_msj.innerText = 'Please wait a moment, sending information...'
            
        },
        error: function (r, a, b) {
            span_msj.style.borderLeft = '3px solid red'
            if (r.status == 422) {
                let responseJSON = JSON.parse(r.responseText)
                if (typeof responseJSON.errors.name != 'undefined') span_msj.innerText = responseJSON.errors.name
                else if (typeof responseJSON.errors.email != 'undefined') span_msj.innerText = responseJSON.errors.email
                else if (typeof responseJSON.errors.mobile != 'undefined') span_msj.innerText = responseJSON.errors.mobile
                else if (typeof responseJSON.errors.nationality != 'undefined') span_msj.innerText = responseJSON.errors.nationality
                else if (typeof responseJSON.errors.location != 'undefined') span_msj.innerText = responseJSON.errors.location
                else if (typeof responseJSON.errors.message != 'undefined') span_msj.innerText = responseJSON.errors.message
                else span_msj.innerText = '';
            } else {
                span_msj.innerText = "Message wasn't sent, please try again later.";
            }
            btn_send.innerText = 'Send'
            formActions(false)
        },
        success: function (r) {
            if (!r.error) {
                span_msj.style.borderLeftColor = '#00ff00'
                if (typeof r.message != 'undefined') span_msj.innerText = r.message
                form_html.querySelectorAll("input").forEach(e => e.value = '')
                form_html.querySelector("textarea").value = ''
                
            } else {
                span_msj.style.borderLeft = '3px solid red'
                span_msj.innerText = 'Something happend, please try again later.';
            }
            setTimeout(function(){
                btn_send.innerText = text_btn
                formActions(false)
                span_msj.style.borderLeft = '3px solid white'
                span_msj.innerText = 'The fields marked * are required.'
            }, 2500)
           
        }
    })
})

function formActions(block) {
    $('input, select, button, a, textarea, checkbox').each(function () {
        if( $(this).hasClass("disabled") ){
            $(this).attr('disabled', true);
        }else{
            $(this).attr('disabled', block);
            select_mobile_code.prop('selectedIndex',0)
            select_location.prop('selectedIndex', 0)
            select_nationality.prop('selectedIndex', 0)
        }
    });
}