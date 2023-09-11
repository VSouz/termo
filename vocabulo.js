// Função para lidar com eventos de teclado
let pchave = ['passa'];
let palavra = [];
let tentativas = 6;

function mostrarTecla(){
    switch(tentativas){
        case 6:
            const q1 = document.getElementById("column1");
            q1.textContent = palavra[0];
            const q2 = document.getElementById("column2");
            q2.textContent = palavra[1];
            const q3 = document.getElementById("column3");
            q3.textContent = palavra[2];
            const q4 = document.getElementById("column4");
            q4.textContent = palavra[3];
            const q5 = document.getElementById("column5");
            q5.textContent = palavra[4];
            
            console.log("Mostrou na função1");
            break;
        
        case 5:
            const p1 = document.getElementById("column2.1");
            p1.textContent = palavra[0];
            const p2 = document.getElementById("column2.2");
            p2.textContent = palavra[1];
            const p3 = document.getElementById("column2.3");
            p3.textContent = palavra[2];
            const p4 = document.getElementById("column2.4");
            p4.textContent = palavra[3];
            const p5 = document.getElementById("column2.5");
            p5.textContent = palavra[4];
            console.log("Mostrou na função2");
            break;
        case 4:
            const r1 = document.getElementById("column3.1");
            r1.textContent = palavra[0];
            const r2 = document.getElementById("column3.2");
            r2.textContent = palavra[1];
            const r3 = document.getElementById("column3.3");
            r3.textContent = palavra[2];
            const r4 = document.getElementById("column3.4");
            r4.textContent = palavra[3];
            const r5 = document.getElementById("column3.5");
            r5.textContent = palavra[4];
            console.log("Mostrou na função3");
            break;
        case 3:
            const t1 = document.getElementById("column4.1");
            t1.textContent = palavra[0];
            const t2 = document.getElementById("column4.2");
            t2.textContent = palavra[1];
            const t3 = document.getElementById("column4.3");
            t3.textContent = palavra[2];
            const t4 = document.getElementById("column4.4");
            t4.textContent = palavra[3];
            const t5 = document.getElementById("column4.5");
            t5.textContent = palavra[4];
            console.log("Mostrou na função4");
            break;
        case 2:
            const a1 = document.getElementById("column5.1");
            a1.textContent = palavra[0];
            const a2 = document.getElementById("column5.2");
            a2.textContent = palavra[1];
            const a3 = document.getElementById("column5.3");
            a3.textContent = palavra[2];
            const a4 = document.getElementById("column5.4");
            a4.textContent = palavra[3];
            const a5 = document.getElementById("column5.5");
            a5.textContent = palavra[4];
            console.log("Mostrou na função5");
            break;
        case 1:
            const s1 = document.getElementById("column6.1");
            s1.textContent = palavra[0];
            const s2 = document.getElementById("column6.2");
            s2.textContent = palavra[1];
            const s3 = document.getElementById("column6.3");
            s3.textContent = palavra[2];
            const s4 = document.getElementById("column6.4");
            s4.textContent = palavra[3];
            const s5 = document.getElementById("column6.5");
            s5.textContent = palavra[4];
            console.log("Mostrou na função6");
            break;
    }
    
    
}


function verificar(tentativa){
    tentativa = tentativa.join('');
    if(tentativa == pchave){
        console.log("acertou!");
    }else{
        console.log("PERDEU!");
    }
    tentativas = tentativas -1;

}

function digitarTeclado(event) {
    
    const keyPressed =event.key;
    //console.log("Tecla pressionada:", keyPressed);

    const outputContainer = document.getElementById("linha1");
    
    
    if(keyPressed == "Backspace"  ){
        palavra.pop();
        console.log('back', palavra);
        mostrarTecla();

    }else{
        if(keyPressed != "Enter" & palavra.length < 5){
            palavra.push(keyPressed);
            console.log(palavra);
            mostrarTecla();

        }if(keyPressed == 'Enter' & palavra.length == 5){
            //console.log("cheguei aqui");
            verificar(palavra)
        }
        if(keyPressed == 'Enter' & palavra.length != 5){
            console.log("falta letra");
            
        }
        

    }
    
    
}

  // Adicionando um ouvinte de eventos para o evento 'keydown' (tecla pressionada)
  document.addEventListener("keydown", digitarTeclado);


