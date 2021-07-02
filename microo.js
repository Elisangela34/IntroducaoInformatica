function microondas(menu, tempo) {
    switch (menu) {
        case 'pipoca':
            if (tempo >= 10 && tempo < 20) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 20 && tempo < 30) {
                console.log("A comida quemou")
            } else if (tempo >= 30) {
                console.log("kabum")
            } else {
                console.log("Tempo insufiiente")
            }
            break;

        case 'macarrão':
            if (tempo >= 8 && tempo < 16) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 16 && tempo < 24) {
                console.log("A comida quemou")
            } else if (tempo >= 24) {
                console.log("kabum") 
                } else {
                    console.log("Tempo insufiiente")
                }

                break;    
        case 'carne':
            if (tempo >= 15 && tempo < 30) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 30 && tempo < 45) {
                console.log("A comida quemou")
            } else if (tempo >= 45) {
                console.log("kabum") 
                } else {
                    console.log("Tempo insufiiente")
                }

                break;
        case 'feijão':
            if (tempo >= 12 && tempo < 24) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 24 && tempo < 36) {
                console.log("A comida quemou")
            } else if (tempo >= 36) {
                console.log("kabum") 
                } else {
                    console.log("Tempo insufiiente")
                }

                break;
        case 'brigadeiro':
            if (tempo >= 8 && tempo < 16) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 16 && tempo < 24) {
                console.log("A comida quemou")
            } else if (tempo >= 24) {
                console.log("kabum") 
                } else {
                    console.log("Tempo insufiiente")
                }

                break;
    default:
            console.log("Prato inexiste")
    }
}
