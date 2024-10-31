const rl = require('readline-sync')

const calculadora = {
    sum: (n1, n2) =>  n1 + n2,
    sub: (n1, n2) => n1 - n2,
    mul: (n1, n2) => n1 * n2,
    div: (n1, n2) => n1 / n2
}

const menu = () => {
    
    while(true) {
        console.clear()
        let n1, n2, result = NaN
        console.log("1 - Soma")
        console.log("2 - Subtração")
        console.log("3 - Multiplicação")
        console.log("4 - Divisão")
        console.log("5 - Sair")
        
        const option = rl.questionInt("Escolha uma opcao: ")
        
        console.clear() 
        switch (option) {
            case 1:
                console.log(`SOMA`)
                n1 = rl.questionFloat("Digite o primeiro numero: ")
                n2 = rl.questionFloat("Digite o segundo numero: ")
                result = calculadora.sum(n1, n2)
                console.log(`O resultado da soma é: ${result}`)
                rl.question()
                break
            case 2:
                console.log("SUBTRAÇÃO")
                n1 = rl.questionFloat("Digite o primeiro numero: ")
                n2 = rl.questionFloat("Digite o segundo numero: ")
                result = calculadora.sub(n1, n2)
                console.log(`O resultado da subtração é: ${result}`)
                rl.question()
                break
            case 3:
                console.log("MULTIPLICAÇÃO")
                n1 = rl.questionFloat("Digite o primeiro numero: ")
                n2 = rl.questionFloat("Digite o segundo numero: ")
                result = calculadora.mul(n1, n2)
                console.log(`O resultado da multiplicação é: ${result}`)
                rl.question()
                break
            case 4:
                console.log("DIVISÃO")
                n1 = rl.questionFloat("Digite o primeiro numero: ")
                n2 = rl.questionFloat("Digite o segundo numero: ")
                result = calculadora.div(n1, n2)
                console.log(`O resultado da divisão é: ${result}`)
                rl.question()
                break
            case 5:
                return
        }
    }
}

menu()