import random 

lista = ['forca', 'massa', 'itens','banco', 'canoa', 'dados', 'exato', 'feixe', 'grito', 'regra', 'ilhas', 'jaula', 'casos',
    'molar', 'nivel', 'opcao', 'pampa', 'quase', 'ruivo', 'salsa', 'terno', 'vodka', 'visto']
Pchave = random.choice(lista)
campo = ['_','_','_','_','_',]
tentativas = 6
tam = int(5)

verde = '\033[1;32m'
azul = '\033[1;34m'
RESET = '\033[0;0m'
vermelho = '\033[1;31m'

print('\033[2;1m' + '\n      ----- V O C Á B U L O ----- \n')
print(verde + 'Verde = Certo no lugar certo')
print(azul + 'Azul = Certo no lugar errado'+ RESET)
print(vermelho + 'Vermelho = Não existe \n '+ RESET)




def Comparar (campo , resposta, Pchave):

    
    i=0
    for i in range(5):
        
        if resposta[i] in Pchave:
            
            if resposta[i] == Pchave[i]:
                #print(verde + resposta[i] + RESET)
                campo[i] = verde + resposta[i] + RESET
            elif resposta[i] in Pchave and resposta[i] != Pchave[i]:
            
                #print(azul + resposta[i] + RESET)
                campo[i] = azul + resposta[i] + RESET
        else:
            campo[i] = vermelho + resposta[i] + RESET 

    #print(campo)
    #print(Pchave)
     
while tentativas > 0:


    print(*campo)
    resposta = input()

    while len(resposta)  != tam: 
        resposta = input()

    Comparar(campo,resposta.casefold(),Pchave)

    tentativas = tentativas -1

    if Pchave == resposta:
        print('     ---- VENCEU! ----       ')
        
if tentativas == 0 and resposta != Pchave:
    print('     ---- PERDEU! ----       ')
    print(f'A palavra era: {Pchave}')
