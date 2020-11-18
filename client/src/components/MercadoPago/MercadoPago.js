import React, { useEffect } from 'react'

export default function Register() {

    const setMercadoPagoPreferences = async () => {
        const initPoint = await fetch('http://localhost:3001/mp/', {
          method: 'POST',
        //   body: JSON.stringify({items, payer}),
        }).then(res => res.json());
        const script = document.createElement('script');
        script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
        script.async = true;
        script.setAttribute('data-preference-id', initPoint.preferenceId);
        document.getElementById('mercadoForm').appendChild(script);
      };

      useEffect(() => {
        setMercadoPagoPreferences();
      }, []);

      return (
          <div>
              <form action="/procesar-pago" method="POST" id="mercadoForm" />
          </div>
      )
}