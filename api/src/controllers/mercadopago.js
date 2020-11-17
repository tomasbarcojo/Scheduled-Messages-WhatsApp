const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-8124106770287819-111700-234c9da281bb7ed5a342c6fb8e1babe9-555929119'
});

module.exports = {
    async MP (req, res) {
        console.log(mercadopago)
        try {
            let preference =  {
                items: [
                    {
                        title: 'ojotas',
                        unit_price: 199,
                        quantity: 1,
                    }
                ]
            }
            console.log(mercadopago.preferences.create(preference))
            // .then(function(response){
            //     // Este valor reemplazará el string "<%= global.id %>" en tu HTML
            //       global.id = response.body.id;
            //     }).catch(function(error){
            //       console.log(error);
            //     });

        } catch (err) {
            console.log(err);
            res.status(400).send({message: 'Something went wrong :('})
        }
    }
}

// class MercadopagoController {
//     async mercadopago({request}) {

//         //datos de la venta
//         let preference = {
//             items: [
//                 {
//                     title: 'ojotas',
//                     unit_price: 199,
//                     quantity: 1,
//                 }
//             ]
//         };

//         const res = await mercadopago.preferences.create(preference)

//         return res;
//     }
// }

// module.exports = MercadopagoController