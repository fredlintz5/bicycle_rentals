
paypal.Button.render({

    env: 'sandbox', // Or 'production'

    client: {
        sandbox:    'AS_aVQen4-2M2lWhNQaKxSUrZ2GAJMy74mcWxFT7rw_ypPDtrAREwFRZZvZBQ94zZC9y-zoAcWqw3mCl',
        production: 'AS_aVQen4-2M2lWhNQaKxSUrZ2GAJMy74mcWxFT7rw_ypPDtrAREwFRZZvZBQ94zZC9y-zoAcWqw3mCl'
    },

    style: {
        label: 'checkout',
        size: 'medium',
        color: 'blue'
    },

    commit: true, // Show a 'Pay Now' button

    payment: function(data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '1.00', currency: 'USD' }
                    }
                ]
            }
        });
    },

    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function(payment) {

            // The payment is complete!
            // You can now show a confirmation message to the customer
        });
    }

}, '#paypal-button');






