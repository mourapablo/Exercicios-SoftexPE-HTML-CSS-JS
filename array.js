/*let predio_1andar = [2,4,3,1]
let predio_2andar = [3,2,2,3]
let predio_3andar = [1,1,2,2]
let predio_4andar = [4,2,3,4]

function exibirMoradores(){
    for(let ap = 0 ; ap < predio_1andar.length ; ap++){
        console.log(`Andar 1 , Apartamento ${ap + 1}: ${predio_1andar[ap]} morador(es)`)
    }
    for(let ap = 0 ; ap < predio_2andar.length ; ap++){
        console.log(`Andar 2 , Apartamento ${ap + 1}: ${predio_2andar[ap]} morador(es)`)
    }
    for(let ap = 0 ; ap < predio_3andar.length ; ap++){
        console.log(`Andar 3 , Apartamento ${ap + 1}: ${predio_3andar[ap]} morador(es)`)
    }
    for(let ap = 0 ; ap < predio_4andar.length ; ap++){
        console.log(`Andar 4 , Apartamento ${ap + 1}: ${predio_4andar[ap]} morador(es)`)
    }
}
exibirMoradores()*/

let predio = [
    [2,4,3,1],
    [3,2,2,3],
    [1,1,2,2],
    [4,2,3,4]
]

function exibirMoradores(){
    for ( let andar = 0 ; andar < predio.length ; andar++){
        for (let ap = 0 ; ap < predio[andar].length ; ap++){
            console.log(`Andar ${andar+1}, apartamento ${ap+1}: ${predio[andar][ap] }Moradores`)
        }
    }
}
exibirMoradores()