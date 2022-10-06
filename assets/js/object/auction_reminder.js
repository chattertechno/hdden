
let input_form = document.querySelector("#formAuctionReminder")
let select_contry = $('select[name="country"]')
select_contry.append(new Option('Country', 'Country'))

$.get( "https://restcountries.com/v3.1/all", function (contries) {
    let array = []
    let countries_sorted = []
    contries.forEach( e => {
        array.push(e.name.common)
    })
    countries_sorted = array.sort()
    countries_sorted.forEach( e => {
        select_contry.append(new Option(e, e))
    })
})

input_form.addEventListener("submit", function (event) {

    event.preventDefault()
    let url_data = input_form.action
    let btn_send = input_form.querySelector("button.btn-enviar")
    let span_msj = input_form.querySelector("span.mensaje")

    let data = new FormData(input_form)
    let text_btn = btn_send.innerText
    span_msj.innerText = ''
    span_msj.style.borderLeftColor = 'red'
    
    $.ajax({
        type: 'POST',
        data: data,
        dataType: 'JSON',
        url: url_data,
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function () {
            btn_send.innerText = 'Sending..'
        },
        error: function (r, a, b) {
            if (r.status == 422) {
                let responseJSON = JSON.parse(r.responseText)
                if (typeof responseJSON.errors.name != 'undefined') span_msj.innerText = responseJSON.errors.name
                else if (typeof responseJSON.errors.last_name != 'undefined') span_msj.innerText = responseJSON.errors.last_name
                else if (typeof responseJSON.errors.email != 'undefined') span_msj.innerText = responseJSON.errors.email
                else if (typeof responseJSON.errors.country != 'undefined') span_msj.innerText = responseJSON.errors.country
                else span_msj.innerText = '';
            } else {
                span_msj.innerText = "Message wasn't sent, please try again later.";
            }
            btn_send.innerText = 'Send'
        },
        success: function (r) {
            if (!r.error) {
                span_msj.style.borderLeftColor = 'white'
                if (typeof r.message != 'undefined') span_msj.innerText = r.message
                input_form.querySelectorAll("input").forEach( e =>  e.value = '')
            } else {
                span_msj.innerText = 'Something happend, please try again later.';
            }
            btn_send.innerText = text_btn
        }
    })
})