class Carro {
    marca;
    cor;
    gastoCombustivelMedio; // KM/litro
    tipoCombustivel;

    constructor(marca, cor, gastoCombustivelMedio, tipoCombustivel = 'Gasolina'){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelMedio = (gastoCombustivelMedio).toFixed(5);
        this.tipoCombustivel = tipoCombustivel
    }

    dinheiroNaViagem (qntKM, precoCombustivel){
        let litros = this.gastoCombustivelMedio * qntKM;
        return (precoCombustivel * litros).toFixed(2);
    }

    descrever () {
        console.log(`Carro da marca ${this.marca} e a cor ${this.cor} e roda ${this.gastoCombustivelMedio} KM por litro, sendo ${this.tipoCombustivel} o combustível dele.`);
    }
}

let chervrolet = new Carro('Chevrolet', 'Prata', 1/12, 'Alcool');
chervrolet.descrever();
console.log(`Você vai gastar R$${chervrolet.dinheiroNaViagem(70, 5)}`);

