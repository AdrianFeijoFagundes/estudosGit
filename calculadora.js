const rl = require('readline-sync')

const calculadora = {
    sum: (n1, n2) =>  n1 + n2,
    sub: (n1, n2) => n1 - n2,
    mul: (n1, n2) => n1 * n2,
    div: (n1, n2) => n1 / n2
}

const menu = () => {
    
    while(true) {
        let n1, n2 = NaN
        console.log("1 - Soma")
        console.log("2 - Divisão")
        console.log("3 - Multiplicação")
        console.log("4 - Divisão")
        console.log("5 - Sair")
        
        const option = rl.questionInt("Escolha uma opção")
        
        console.clear() 
        switch (option) {
            case 1:
                n1 = rl.questionFloat("Digite o primeiro número: ")
                n2 = rl.questionFloat("Digite o segundo número: ")
                let result = calculadora.sum(n1, n2)
                console.log(`O resultado da soma é: ${result}`)
                break
            case 2:
                n1 = rl.questionFloat("Digite o primeiro número: ")
                n2 = rl.questionFloat("Digite o segundo número: ")
                result = calculadora.sub(n1, n2)
                console.log(`O resultado da subtração é: ${result}`)
                brea
            case 3:
                n1 = rl.questionFloat("Digite o primeiro número: ")
                n2 = rl.questionFloat("Digite o segundo número: ")
                result = calculadora.mul(n1, n2)
                console.log(`O resultado da multiplicação é: ${result}`)
                break
            case 4:
                n1 = rl.questionFloat("Digite o primeiro número: ")
                n2 = rl.questionFloat("Digite o segundo número: ")
                result = calculadora.div(n1, n2)
                console.log(`O resultado da divisão é: ${result}`)
                break
            case 5:
                return
        }
    }
}

menu()