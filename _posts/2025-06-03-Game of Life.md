---
layout: post
author: LGarcia
categories: projetos matematica
title: Game of Life
sumary: Quem nunca programou um jogo da vida, que atire a primeira pedra.
---

> O Jogo da Vida de Conway cria um universo a partir de poucas regras.  
> Incrível pensar que algo tão complexo pode ter uma origem tão simples,  
> nos faz pensar sobre as regras que regem o nosso próprio universo.

## História
----

Em 1968, **[John Conway](https://pt.wikipedia.org/wiki/John_Conway)**, utilizando lógica matemática e inspirado por trabalhos anteriores, começou a realizar uma série de experimentos com regras de automação celular em duas dimensões. Seu objetivo inicial era criar um "robô" celular que fosse interessante e imprevisível e, em outubro de 1970, a primeira aparição pública dessa versão do Jogo da Vida foi realizada.

### Regras

O Jogo da Vida acontece em um arranjo bidimensional infinito, cada célula pode estar em dois estados, viva ou morta, e cada uma delas interage com as 8 células que a cercam. O jogo evolui em gerações e, a cada geração, as células definem seu estado seguindo algumas regras simples:

1. Toda célula morta com exatamente três vizinhos vivos torna-se viva (nascimento).
2. Toda célula viva com menos de dois vizinhos vivos morre por isolamento.
3. Toda célula viva com mais de três vizinhos vivos morre por superpopulação.
4. Toda célula viva com dois ou três vizinhos vivos permanece viva.

E com essas simples regras você cria um universo.

----

A primeira vez que eu ouvi falar sobre o Jogo da Vida, ele me pareceu algo simples e pouco interessante. Eu sabia que era muito comum que um dos primeiros programas que as pessoas criassem fosse alguma versão dele, mas não entendia o apelo.

Isso mudou após assistir a um vídeo de um canal do YouTube excelente chamado [Veritasium](https://www.youtube.com/@veritasium). Enquanto o vídeo em si não era sobre o Jogo da Vida, mas sim sobre a ideia de que algumas verdades não podem ser provadas ([Math's Fundamental Flaw](https://youtu.be/HeQX2HjkcNo)), ele utiliza o Jogo da Vida para ilustrar a ideia de um [problema indecidível](https://pt.wikipedia.org/wiki/Problema_indecid%C3%ADvel), um problema em que, dado um estado A, é impossível saber se um estado B é consequência de A.  
Basicamente, se você sabe A, é impossível saber se B vai ou não acontecer.

#### Jogo da Vida e Turing Machine

Em 1936, Alan Turing acabou por responder a uma pergunta que deixava matemáticos acordados à noite: a Matemática em si é um problema decidível? Isto é, é possível criar um algoritmo que sempre consiga determinar se uma afirmação segue os axiomas matemáticos?  

Uma Máquina de Turing é um modelo teórico de computação. Pense nela como um computador abstrato, que se restringe apenas aos aspectos lógicos mais básicos de um computador. Em teoria, uma máquina assim, mesmo simples, é capaz de simular e resolver qualquer algoritmo, dado tempo suficiente.  

Turing imaginou uma máquina que recebia uma tira com instruções simples — pense em 0 e 1 em sequência — e, baseando-se no que ela recebia, seguiria uma série de instruções diferentes até que, eventualmente, ela pararia. Essa parada equivaleria ao fim do programa e, dado esse fato, veio o problema: é possível determinar se uma Máquina de Turing para, independente do programa enviado?  

Turing provou que não existe um algoritmo geral que consiga determinar se uma Máquina de Turing qualquer irá parar ou rodar indefinidamente. Esse é o famoso "problema da parada". Em outras palavras, não há uma fórmula ou método que, para todo e qualquer programa, consiga prever se ele eventualmente vai terminar ou se vai ficar preso em um loop infinito.  

Esse resultado foi um divisor de águas na história da computação e da matemática, pois mostrou que existem limites fundamentais para o que podemos saber e prever, mesmo em sistemas regidos por regras bem definidas.

Essa ideia de indecidibilidade se conecta diretamente ao Jogo da Vida. Embora ele seja baseado em regras simples e claras, também é impossível, de forma geral, prever o que vai acontecer com um padrão inicial sem efetivamente simular a evolução geração após geração.  
Assim como no problema da parada, não existe um algoritmo universal que, dado um padrão de células no Jogo da Vida, consiga dizer se ele vai estabilizar, entrar em um ciclo ou crescer indefinidamente. A única maneira de descobrir é deixando o sistema rodar e ver o que acontece.

O que mais me impressionou foi descobrir que o Jogo da Vida é Turing completo, ou seja, ele pode simular uma Máquina de Turing. Em teoria, isso significa que o Jogo da Vida pode rodar qualquer algoritmo que um computador moderno consegue — claro que não tão facilmente.

Então eu decidi seguir a tradição e fazer o que tantos outros fizeram: a minha própria versão do Jogo da Vida. Fiz em Java porque precisava treinar um pouco usar Swing — [Jogo da Vida](https://github.com/LGarciax/GameOfLife). Fiz apenas uma pequena modificação: minhas células têm idade. Queria saber se a velhice poderia mudar o resultado imprevisível do jogo. Recomendo a todos criarem uma versão desse jogo ao menos uma vez.
