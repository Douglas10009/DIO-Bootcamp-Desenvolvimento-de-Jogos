class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }

    classificarIMC(){
        let imc = this.calcularIMC();
        let classificacao = '';

        if (imc < 18.5 ) {
            classificacao = 'Abaixo do peso';
        } else if (imc > 18.5 && imc < 24.9)  {
            classificacao = 'Peso normal';
        } else if (imc > 25 && imc < 29.9){
            classificacao = 'Sobrepeso';
        } else if (imc > 30 && imc < 34.9){
            classificacao = 'Obesidade grau I';
        } else if (imc > 35 && imc < 39.9){
            classificacao = 'Obesidade grau II (Severa)';
        } else if (imc > 40){
            classificacao = 'Obesidade grau III (Mórbida)';
        }

        return classificacao;
    }

    descrever (){
        console.log(`Nome: ${this.nome} \nAltura: ${this.altura} cm\nPeso: ${this.peso} kg`);
        console.log(`${this.nome} tem ${this.calcularIMC()} de IMC e está ${this.classificarIMC()}`); 
    }
}


const jose = new Pessoa('José', 70, 1.75 );
jose.descrever();
// IMC abaixo de 18,5: Abaixo do peso
// IMC entre 18,5 e 24,9: Peso normal
// IMC entre 25,0 e 29,9: Sobrepeso
// IMC entre 30,0 e 34,9: Obesidade grau I
// IMC entre 35,0 e 39,9: Obesidade grau II (severa)
// IMC 40,0 ou superior: Obesidade grau III (mórbida)