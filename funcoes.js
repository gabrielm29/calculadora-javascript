var verificador = false

function adicionarTela(valor){
    const tela = window.document.getElementById("tela")

    if(!verificador){
        const ultimoCaractere = tela.value.slice(-1)
        const operadores = ["+", "-", "*", "/", "."]

        if((!operadores.includes(ultimoCaractere) || !operadores.includes(valor)) && (!(tela.value === "") || !["*","/","."].includes(valor))){
            tela.value += valor
        }
    }else{
        if(!(["*","/","."].includes(valor))){
            tela.value = valor
            verificador = false 
        }  
    }
}

function calcular(){
    const tela = window.document.getElementById("tela")

    if(tela.value !== ""){
        tela.value = eval(tela.value)
        verificador = true
    }   
}

function limparTela(limpeza){
    const tela = window.document.getElementById("tela")

    if(limpeza === "one"){
        tela.value = tela.value.slice(0, -1)
    }else if(limpeza === "all"){
        tela.value = ""
    }
}