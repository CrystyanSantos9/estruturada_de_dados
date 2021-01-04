function buscaBinariaRecursiva(vetor,inicio, fim, chave){
    let centro; //pegará valor central do vetor
    
    while(inicio<=fim){
        centro = parseInt(inicio + (fim-inicio)/2);
        console.log("Posição do valor central: ", centro);
        if(chave===vetor[centro]){
            console.log('Valor encontado na posicação : \n',centro);
            return centro;
        } 
    
        else if(chave>vetor[centro]){
            console.log(`{Chave = ${chave}} > que o valor na posição central : ${vetor[centro]}`)
            console.log(`próxima divisão = ${centro+1}+${fim}/2;`)
            return buscaBinariaRecursiva(vetor,centro+1,fim,chave);
        }else{
            console.log(`{Chave = ${chave}} < que o valor na posição central : ${vetor[centro]}`)
            console.log(`Próxima divisão = ${inicio}+${centro-1}/2;`)
            return buscaBinariaRecursiva(vetor,inicio,centro-1,chave);
        }
        
    }

    return -1;
}


const vetor = [3,4,11,12,21,34,65,77,78,98,100,105,107,199,200,300,505,606,2000];
const fim = vetor.length //tamanho do vetor

buscaBinariaRecursiva(vetor,0,fim,2000);