// Função para lidar com eventos de teclado
function digitarTeclado(event) {
    
    const keyPressed = [event.key];
    let i = 0;
    console.log("Tecla pressionada:", keyPressed);

    q1 = document.getElementById("column1");

    const outputContainer = document.getElementById("linha1");
    
    
    if(keyPressed == "Backspace"  ){
        console.log('back');
        outputContainer.textContent = ""  ;
    }else{
        if(keyPressed != "Enter"){
            const newDiv = document.createElement("div");
        newDiv.textContent = keyPressed;
        newDiv.className = "quadrado";
  
        // Adicionar a nova div ao container
        outputContainer.appendChild(newDiv);
        }
        

    }
    
    
  }
  
  // Adicionando um ouvinte de eventos para o evento 'keydown' (tecla pressionada)
  document.addEventListener("keydown", digitarTeclado);
  