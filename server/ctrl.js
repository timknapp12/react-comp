module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db');

        db.get_all_products().then(res => res.status(200).send(res));
    },

    create: (req, res, next) => {
        const db = req.app.get('db');

        db.add_product([product_name, product_price])
        .then(res => res.status(200).send(res));
    },

    delete: (req, res, next) => {
        const db = req.app.get('db');

        db.remove_product([req.params.id])
        .then(res => res.status(200).send(res))
    },

    update: (req, res, next) => {
        const db = req.app.get('db');

        db.update_product([req.body.product_name, req.body.product_price, req.params.id])
        .then(res => res.status(200).send(res))
    }
}







// module.exports = {
//     update: (req, res, next) => {
//         const db = req.app.get('db');
//         const { params } = req;
//         //can I call params.id whatever I want or does it need to be product_id???---- use what I called it in index.js 
//         db.add_to_cart([params.id, req.user.user_id])
//         .then((cart) => res.status(200).send(cart))
//         .catch(() => res.status(500).send());
//     },

    // create: (req, res, next) => {
    //     const db = req.app.get('db');

    //     db.find_cart([req.user.user_id]).then(cart => {
    //         if (cart[0]) {
    //             res.status(200).send();
    //         } else {
    //             db.create_cart([req.user.user_id]).then(cart => {
    //                 res.status(200).send();
    //             })
    //             .catch(error => res.status(500).send(error));
    //         }
    //     })
    // },

//     read: (req, res, next) => {
//         const db = req.app.get('db');
//         db.find_cart([req.user.user_id])
//         .then(cart => res.status(200).send(cart))
//         .catch(() => res.status(500).send());
//     },

//     delete: (req, res, next) => {
//         const db = req.app.get('db');

//         db.remove_from_cart([req.params.id])
//         .then(cart => res.status(200).send(cart))
//         .catch(() => res.status(500).send());
//     }
// }
