UPDATE products
   SET product_name = $1,
        product_price = $2
 WHERE id = $3;