function insertProducts(){
    const products = [];
    while(true){
        const addProduct = prompt("Desea insertar un producto? (si/no)").toLowerCase();
        if (addProduct !== "si"){
            if (addProduct !== "no"){
              alert("Solo ingresar 'si' o 'no'");
            }
            break;
        }
        const productName = prompt("Ingresa el nombre del producto");
        const productPrice = parseFloat(prompt("Ingresa el precio, en CLP, del producto"));
        const productQuantity = parseInt(prompt("Ingresa el numero de unidades del producto"));

        if (isNaN(productPrice) || isNaN(productQuantity) || productPrice <= 0 || productQuantity < 0){
            alert("Alguno de los valores ingresados no es valido");
            continue;
        }
        products.push({name: productName, price: productPrice, quantity: productQuantity});
    }
    let criticalStock = false;
    if (products.length === 0){
        alert("No se ingresaron productos");
    } else{
        for (const product of products){
            if (product.quantity < 1000){
                alert(`El stock del producto ${product.name} es critico`);
                criticalStock = true;
            }
        }
        if (!criticalStock){
            alert("El inventario esta en buen estado");
        }
    }
}
insertProducts();