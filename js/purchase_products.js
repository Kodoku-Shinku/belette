function addToCart() {
    // Obtener información del producto (nombre, precio, etc.)
    var productName = "Producto 1";
    var productPrice = 10.99;

    // Agregar el producto al carrito de compras
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem("cart", JSON.stringify(cart));

    // Mostrar un mensaje de confirmación
    alert("El producto ha sido agregado al carrito de compras.");
}