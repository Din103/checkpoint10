document.title = "Restaurante Bottega";

//******************************************************************************************************/
function bienVenidoMenuBottega() {
    var mensajeBienvenida = "¡Bienvenido al Restaurante Bottega!";

    var opcion = prompt(mensajeBienvenida + "\nPor favor, seleccione una opción:\n1. Desayunar\n2. Almorzar\n3. Cenar\n0. Salir");

    switch (opcion) {
        case "1":
            desayuno();
            return;
        case "2":
            menuCenaAlmuerzo('almuerzo');
            return;
        case "3":
            menuCenaAlmuerzo('cena');
            break;
        case "0": case null:
            alert("Esperamos volver a verle pronto en el Restaurante Bottega!");
            return; 
        default:
            alert("Opción incorrecta. Por favor, seleccione 1, 2 o 3.");
            bienVenidoMenuBottega();
            return; 
    }
    var confirmacion = confirm("¿Desea hacer otro pedido?");
    if (confirmacion) {
        bienVenidoMenuBottega();
    } else {
        alert("Esperamos volver a verle pronto en el Restaurante Bottega.");
    }
}
//********************************************************************************************************/
//********************************************************************************************************/
function menuCenaAlmuerzo(cenaAlmuerzo) {
    var comidaSeleccionada = cenaAlmuerzo;
    if (comidaSeleccionada == "almuerzo") {
        var platosPrincipalesAlmuerzo = {
            "1": { nombre: "Solomillo a la Bilbaina", precio: 8 },
            "2": { nombre: "Chuleta de Vaca", precio: 10 },
            "3": { nombre: "Filete de Ternera", precio: 7 },
            "4": { nombre: "Escalope", precio: 6 },
            "5": { nombre: "Pescado del día", precio: 9 }
        };
        var acompanamientosAlmuerzo = {
            "1": { nombre: "Ensalada verde", precio: 3 },
            "2": { nombre: "Papas fritas", precio: 2 },
            "3": { nombre: "Arroz blanco", precio: 2 },
            "4": { nombre: "Vegetales salteados", precio: 3 },
            "5": { nombre: "Panecillos de ajo", precio: 2 },
            "6": { nombre: "Sopa del día", precio: 3 },
            "7": { nombre: "Fruta fresca", precio: 2 },
            "8": { nombre: "Nada", precio: 0 }
        };
    } else {
        var platosPrincipalesAlmuerzo = {
            "1": { nombre: "Solomillo a la Bilbaina", precio: 8.15 },
            "2": { nombre: "Chuleta de Vaca", precio: 10.35 },
            "3": { nombre: "Filete de Ternera", precio: 7.85 },
            "4": { nombre: "Escalope", precio: 6.75 },
            "5": { nombre: "Pescado del día", precio: 9.35 }
        };
        var acompanamientosAlmuerzo = {
            "1": { nombre: "Ensalada verde", precio: 3.75 },
            "2": { nombre: "Papas fritas", precio: 2.55 },
            "3": { nombre: "Arroz blanco", precio: 2.25 },
            "4": { nombre: "Vegetales salteados", precio: 3.42 },
            "5": { nombre: "Panecillos de ajo", precio: 2.15 },
            "6": { nombre: "Sopa del día", precio: 3.55 },
            "7": { nombre: "Fruta fresca", precio: 2.55 },
            "8": { nombre: "Nada", precio: 0 }
        };
    };

    var mensajePlatosPrincipales = "Por favor, seleccione un plato principal:\n";
    for (var key in platosPrincipalesAlmuerzo) {
        mensajePlatosPrincipales += key + ". " + platosPrincipalesAlmuerzo[key].nombre + " - " + platosPrincipalesAlmuerzo[key].precio + "€\n";
    }

    var seleccionPlatoPrincipal = prompt(mensajePlatosPrincipales);

    if (seleccionPlatoPrincipal === null) {
        bienVenidoMenuBottega();
        return;
    }

    if (!(seleccionPlatoPrincipal in platosPrincipalesAlmuerzo)) {
        alert("Selección de plato principal incorrecta. Por favor, seleccione una opción válida.");
        menuCenaAlmuerzo();
        return;
    }

    var platoPrincipalSeleccionado = platosPrincipalesAlmuerzo[seleccionPlatoPrincipal];
    var mensajePlatoPrincipal = "Ha seleccionado " + platoPrincipalSeleccionado.nombre + ". El precio es " + platoPrincipalSeleccionado.precio + "€.";

    var comentariosAlmuerzo = [
        "¡Excelente elección! Este plato es uno de nuestros favoritos.",
        "¡Buena decisión! Este plato es muy popular entre nuestros clientes.",
        "¡Delicioso! Estoy segura de que disfrutará de su comida.",
        "¡Qué buen gusto tiene! Este plato es una opción clásica y deliciosa.",
        "¡Perfecto! Este plato es una excelente opción para paladares exigentes."
    ];

    var comentarioAlmuerzo = comentariosAlmuerzo[Math.floor(Math.random() * comentariosAlmuerzo.length)];

    var mensajeSeleccionAlmuerzo = "Usted ha seleccionado " + platoPrincipalSeleccionado.nombre + ". " + comentarioAlmuerzo;

    alert(mensajeSeleccionAlmuerzo);

    if (seleccionPlatoPrincipal >= "1" && seleccionPlatoPrincipal <= "4") {

        seleccionPuntoCoccionCorrecta = false;
        while (seleccionPuntoCoccionCorrecta === false) {
            var puntoCoccion = prompt("¿Cómo prefiere la carne?\n1. Poco hecha\n2. Al punto\n3. Muy hecha\n4. Me da igual");
            switch (puntoCoccion) {
                case "1":
                    alert("Ha seleccionado la carne poco hecha. No tiene sobrecosto.");
                    seleccionPuntoCoccionCorrecta = true;
                    break;
                case "2":
                    alert("Ha seleccionado la carne al punto. No tiene sobrecosto.");
                    seleccionPuntoCoccionCorrecta = true;
                    break;
                case "3":
                    alert("Ha seleccionado la carne muy hecha. No tiene sobrecosto.");
                    seleccionPuntoCoccionCorrecta = true;
                    break;
                case "4":
                    alert("Ok. Se la serviremos al gusto del Chef");
                    seleccionPuntoCoccionCorrecta = true;
                    break;

                default:
                    alert("Selección de punto de cocción no valida. Repita por favor.");
                    break;
            }
        }
    }
  seleccionAcompanamiento1=false;
  while(seleccionAcompanamiento1===false){
        var mensajeAcompanamientosAlmuerzo = "Por favor, seleccione un primer acompañamiento:\n";
        for (var key in acompanamientosAlmuerzo) {
            mensajeAcompanamientosAlmuerzo += key + ". " + acompanamientosAlmuerzo[key].nombre;
            if (acompanamientosAlmuerzo[key].nombre !== "Nada") {
                mensajeAcompanamientosAlmuerzo += " - " + acompanamientosAlmuerzo[key].precio+"€";
            }
            mensajeAcompanamientosAlmuerzo += "\n";
        }
        var seleccionAcompanamientoAlmuerzo1 = prompt(mensajeAcompanamientosAlmuerzo);
        if (seleccionAcompanamientoAlmuerzo1 === null) {
            alert("Selección de acompañamiento incorrecta. Por favor, seleccione una opción válida.");            
                 }
        if (!(seleccionAcompanamientoAlmuerzo1 in acompanamientosAlmuerzo)) {
            alert("Selección de acompañamiento incorrecta. Por favor, seleccione una opción válida.");          
        }else{
            seleccionAcompanamiento1=true;
        }
  }
    var acompanamientoSeleccionadoAlmuerzo1 = acompanamientosAlmuerzo[seleccionAcompanamientoAlmuerzo1];
    var mensajeAcompanamientoAlmuerzo1 = "";
    if (acompanamientoSeleccionadoAlmuerzo1.nombre === "Nada") {
        mensajeAcompanamientoAlmuerzo1 = "No ha seleccionado un primer acompañamiento.";
    } else {
        mensajeAcompanamientoAlmuerzo1 = "Ha seleccionado " + acompanamientoSeleccionadoAlmuerzo1.nombre + ". El precio es " + acompanamientoSeleccionadoAlmuerzo1.precio + "€.";
    }
if (acompanamientoSeleccionadoAlmuerzo1.nombre !== "Nada") {  
    seleccionAcompanamiento2=false;
    while(seleccionAcompanamiento2===false){
        var mensajeAcompanamientosAlmuerzo2 = "Por favor, seleccione un segundo acompañamiento:\n";
        for (var key in acompanamientosAlmuerzo) {
        mensajeAcompanamientosAlmuerzo2 += key + ". " + acompanamientosAlmuerzo[key].nombre;
        if (acompanamientosAlmuerzo[key].nombre !== "Nada") {
        mensajeAcompanamientosAlmuerzo2 += " - " + acompanamientosAlmuerzo[key].precio+"€";
        }
        mensajeAcompanamientosAlmuerzo2 += "\n";
        }
        var seleccionAcompanamientoAlmuerzo2 = prompt(mensajeAcompanamientosAlmuerzo2);

        if (seleccionAcompanamientoAlmuerzo2 === null) {
            alert("Selección de segundo acompañamiento incorrecta. Por favor, seleccione una opción válida.");
        }
        if (!(seleccionAcompanamientoAlmuerzo2 in acompanamientosAlmuerzo)) {
        alert("Selección de segundo acompañamiento incorrecta. Por favor, seleccione una opción válida.");
        }else{
            seleccionAcompanamiento2=true;
        }
    }
    var acompanamientoSeleccionadoAlmuerzo2 = acompanamientosAlmuerzo[seleccionAcompanamientoAlmuerzo2];
    var mensajeAcompanamientoAlmuerzo2 = "";
    if (acompanamientoSeleccionadoAlmuerzo2.nombre === "Nada") {
        mensajeAcompanamientoAlmuerzo2 = "No ha seleccionado un segundo acompañamiento.";
    } else {
        mensajeAcompanamientoAlmuerzo2 = "Ha seleccionado " + acompanamientoSeleccionadoAlmuerzo2.nombre + ". El precio es " + acompanamientoSeleccionadoAlmuerzo2.precio + "€.";
    }
}
    var precioTotalAlmuerzo = platoPrincipalSeleccionado.precio + acompanamientoSeleccionadoAlmuerzo1.precio;

    if (acompanamientoSeleccionadoAlmuerzo2 && acompanamientoSeleccionadoAlmuerzo2.nombre !== "Nada") {
        precioTotalAlmuerzo += acompanamientoSeleccionadoAlmuerzo2.precio;
            // Nuevo comentario de la camarera para los acompañamientos
            var comentariosAcompanamientos = [
            "¡Excelente elección de acompañamientos! Disfrutará mucho de su almuerzo.",
            "¡Los acompañamientos que ha seleccionado son deliciosos!",
            "¡Buena combinación! Seguro que su almuerzo será muy satisfactorio.",
            "¡Qué buen gusto tiene! Estoy segura de que le encantarán los acompañamientos.",
            "¡Perfecto! Estoy segura de que disfrutará mucho de su elección de acompañamientos."
            ];
            var comentarioAcompanamientos = comentariosAcompanamientos[Math.floor(Math.random() * comentariosAcompanamientos.length)];

            // Mostrar acompañamientos seleccionados y comentario de la camarera
            var mensajeAcompanamientosSeleccionados = mensajeAcompanamientoAlmuerzo1 + "\n" + mensajeAcompanamientoAlmuerzo2 + "\n" + comentarioAcompanamientos;

            alert(mensajeAcompanamientosSeleccionados);



    }
    

var seleccionAlmuerzo = mensajePlatoPrincipal + "\n" + mensajeAcompanamientoAlmuerzo1 + "\n" + (mensajeAcompanamientoAlmuerzo2 ? mensajeAcompanamientoAlmuerzo2 + "\n" : "") + "El precio total es: " + precioTotalAlmuerzo.toFixed(2) + "€";


    var confirmacionPedidoAlmuerzo = confirm(seleccionAlmuerzo + "\n\n¿Desea confirmar su pedido de comida?");

    if (confirmacionPedidoAlmuerzo) {
        alert("¡Gracias por su pedido! En unos minutos estará preparado.");
    } else {
        alert("Pedido de comida cancelado.");
    }

    var confirmacion = confirm("¿Desea hacer otro pedido?");
    if (confirmacion) {
        bienVenidoMenuBottega();
    } else {
        alert("Esperamos volver a verle pronto en el Restaurante Bottega.");
    }
}
//*********************************************************************************************************/
//*********************************************************************************************************/
function desayuno() {
    
    var bebidasDesayuno = {
    "1": { nombre: "Café", precio: 1.50 },
    "2": { nombre: "Té", precio: 1.20 },
    "3": { nombre: "Chocolate caliente", precio: 2.00 },
    "4": { nombre: "Café con leche", precio: 2.00 },
    "5": { nombre: "Capuchino", precio: 2.50 }
}      
    var acompanamientosDesayuno = {
     "1": { nombre: "Croissant", precio: 1.20 },
    "2": { nombre: "Tostadas con mermelada", precio: 1.50 },
    "3": { nombre: "Muffin", precio: 1.80 },
    "4": { nombre: "Donut", precio: 1.50 },
    "5": { nombre: "Ensaimada", precio: 1.80 },
    "6": { nombre: "Magdalena", precio: 1.00 },
    "7": { nombre: "Nada", precio: 0 }
}

var mensajeBebidasPrincipales  = "Por favor, seleccione una bebida:\n";
for (var key in bebidasDesayuno) {
    mensajeBebidasPrincipales  += key + ". " + bebidasDesayuno[key].nombre + " - " + bebidasDesayuno[key].precio + "€\n";
}

var seleccionBebidaPrincipal  = prompt(mensajeBebidasPrincipales );

if (seleccionBebidaPrincipal  === null) {
     bienVenidoMenuBottega();
    return;
}

if (!(seleccionBebidaPrincipal  in bebidasDesayuno)) {
    alert("Selección de bebida principal incorrecta. Por favor, seleccione una opción válida.");
    desayuno();
    return;
}

var bebidaPrincipalSeleccionado  = bebidasDesayuno[seleccionBebidaPrincipal ];
var mensajeBebidaPrincipal  = "Ha seleccionado " + bebidaPrincipalSeleccionado .nombre + ". El precio es " + bebidaPrincipalSeleccionado .precio + "€.";

var comentariosDesayuno = [
    "¡Excelente elección! Esta bebida es de nuestros favoritos.",
    "¡Buena decisión! Esta bebida es muy popular entre nuestros clientes.",
    "¡Delicioso! Estoy segura de que disfrutará de su desayuno.",
    "¡Qué buen gusto tiene! Esta bebida es una opción clásica y deliciosa.",
    "¡Perfecto! Esta bebida es una excelente opción para paladares exigentes."
];

var comentarioDesayuno = comentariosDesayuno[Math.floor(Math.random() * comentariosDesayuno.length)];

var mensajeSeleccionDesayuno = "Usted ha seleccionado " + bebidaPrincipalSeleccionado .nombre + ". " + comentarioDesayuno;

alert(mensajeSeleccionDesayuno);

if (seleccionBebidaPrincipal  >= "1" && seleccionBebidaPrincipal  <= "5") {

    seleccionEdulcoradoCorrecta  = false;
    while (seleccionEdulcoradoCorrecta  === false) {
        var puntoEdulcorado = prompt("¿Cómo prefiere la bebida?\n1. Sin azucar\n2. Con un poco de azucar\n3. Muy dulce\n4. Con Stevia");
        switch (puntoEdulcorado) {
            case "1":
                alert("Ha seleccionado la bebida sin azucar. No tiene sobrecosto.");
                seleccionEdulcoradoCorrecta  = true;
                break;
            case "2":
                alert("Ha seleccionado la bebida con un poco de azucar. No tiene sobrecosto.");
                seleccionEdulcoradoCorrecta  = true;
                break;
            case "3":
                alert("Ha seleccionado la bebida muy dulce. No tiene sobrecosto.");
                seleccionEdulcoradoCorrecta  = true;
                break;
            case "4":
                alert("Ha seleccionado la bebida con Stevia. No tiene sobrecosto.");
                seleccionEdulcoradoCorrecta  = true;
                break;

            default:
                alert("Selección de punto de cocción no valida. Repita por favor.");
                break;
        }
    }
}
seleccionAcompanamiento1=false;
while(seleccionAcompanamiento1===false){
    var mensajeAcompanamientosDesayuno = "Por favor, seleccione un primer acompañamiento:\n";
    for (var key in acompanamientosDesayuno) {
        mensajeAcompanamientosDesayuno += key + ". " + acompanamientosDesayuno[key].nombre;
        if (acompanamientosDesayuno[key].nombre !== "Nada") {
            mensajeAcompanamientosDesayuno += " - " + acompanamientosDesayuno[key].precio+"€";
        }
        mensajeAcompanamientosDesayuno += "\n";
    }
    var seleccionAcompanamientoDesayuno1 = prompt(mensajeAcompanamientosDesayuno);
    if (seleccionAcompanamientoDesayuno1 === null) {
        alert("Selección de acompañamiento incorrecta. Por favor, seleccione una opción válida.");            
             }
    if (!(seleccionAcompanamientoDesayuno1 in acompanamientosDesayuno)) {
        alert("Selección de acompañamiento incorrecta. Por favor, seleccione una opción válida.");          
        
    }else{
        seleccionAcompanamiento1=true;
    }
}
var acompanamientoSeleccionadoDesayuno1 = acompanamientosDesayuno[seleccionAcompanamientoDesayuno1];
var mensajeAcompanamientoDesayuno1 = "";
if (acompanamientoSeleccionadoDesayuno1.nombre === "Nada") {
    mensajeAcompanamientoDesayuno1 = "No ha seleccionado un primer acompañamiento.";
} else {
    mensajeAcompanamientoDesayuno1 = "Ha seleccionado " + acompanamientoSeleccionadoDesayuno1.nombre + ". El precio es " + acompanamientoSeleccionadoDesayuno1.precio + "€.";
}
if (acompanamientoSeleccionadoDesayuno1.nombre !== "Nada") {  
seleccionAcompanamiento2=false;
while(seleccionAcompanamiento2===false){
    var mensajeAcompanamientosDesayuno2 = "Por favor, seleccione un segundo acompañamiento:\n";
    for (var key in acompanamientosDesayuno) {
    mensajeAcompanamientosDesayuno2 += key + ". " + acompanamientosDesayuno[key].nombre;
    if (acompanamientosDesayuno[key].nombre !== "Nada") {
    mensajeAcompanamientosDesayuno2 += " - " + acompanamientosDesayuno[key].precio+"€";
    }
    mensajeAcompanamientosDesayuno2 += "\n";
    }
    var seleccionAcompanamientoDesayuno2  = prompt(mensajeAcompanamientosDesayuno2);

    if (seleccionAcompanamientoDesayuno2  === null) {
        alert("Selección de segundo acompañamiento incorrecta. Por favor, seleccione una opción válida.");
    }
    if (!(seleccionAcompanamientoDesayuno2  in acompanamientosDesayuno)) {
    alert("Selección de segundo acompañamiento incorrecta. Por favor, seleccione una opción válida.");
    }else{
        seleccionAcompanamiento2=true;
    }
}
var acompanamientoSeleccionadoDesayuno2 = acompanamientosDesayuno[seleccionAcompanamientoDesayuno2 ];
var mensajeAcompanamientoDesayuno2 = "";
if (acompanamientoSeleccionadoDesayuno2.nombre === "Nada") {
    mensajeAcompanamientoDesayuno2 = "No ha seleccionado un segundo acompañamiento.";
} else {
    mensajeAcompanamientoDesayuno2 = "Ha seleccionado " + acompanamientoSeleccionadoDesayuno2.nombre + ". El precio es " + acompanamientoSeleccionadoDesayuno2.precio + "€.";
}
}

var precioTotalDesayuno = bebidaPrincipalSeleccionado .precio + acompanamientoSeleccionadoDesayuno1.precio;

if (acompanamientoSeleccionadoDesayuno2 && acompanamientoSeleccionadoDesayuno2.nombre !== "Nada") {
    precioTotalDesayuno += acompanamientoSeleccionadoDesayuno2.precio;
}

var seleccionDesayuno = mensajeBebidaPrincipal  + "\n" + mensajeAcompanamientoDesayuno1 + "\n" + (mensajeAcompanamientoDesayuno2 ? mensajeAcompanamientoDesayuno2 + "\n" : "") + "El precio total es: " + precioTotalDesayuno.toFixed(2) + "€";

var confirmacionPedidoDesayuno = confirm(seleccionDesayuno + "\n\n¿Desea confirmar su pedido de desayuno?");

if (confirmacionPedidoDesayuno) {
    alert("¡Gracias por su pedido! En unos minutos estará preparado.");
} else {
    alert("Pedido de desayuno cancelado.");
}

var confirmacion = confirm("¿Desea hacer otro pedido?");
if (confirmacion) {
    bienVenidoMenuBottega();
} else {
    alert("Esperamos volver a verle pronto en el Restaurante Bottega.");
}
}

bienVenidoMenuBottega();
