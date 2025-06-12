---
layout: post
author: LGarcia
categories: programação
title: String a == "b"
sumary: Por que não podemos comparar Strings diretamente em Java?
---

Recentemente, um amigo que está aprendendo Java veio me pedir ajuda porque o programa que ele estava escrevendo não estava funcionando. Após algumas perguntas tentando resolver o problema à distância, pedi para ele me enviar o código para dar uma olhada.

Uma única linha era responsável pelo problema que ele estava encontrando. Um erro simples, mas muito comum — especialmente quando a pessoa está começando ou não teve muito contato com linguagens orientadas a objetos.

```java
String codigo = scanner.nextLine("palavra"); <- imagine que o usuario digitou palavra

if(codigo == "palavra") {
    System.out.println("Fez algo");
}
```

(Código simplificado para fácil entendimento.)

Se você, assim como ele, não percebe o problema com o código acima, este post é para você.

---

### Variáveis

Uma das primeiras coisas que qualquer programador iniciante aprende são os tipos de variáveis. Normalmente, não explicam o que elas *são*, mas te dizem para o que cada uma é usada. De forma simplificada, é mais ou menos assim:

- `int` / `long` = números inteiros  
- `float` / `double` = números reais (ex: 0.4, 1.5)  
- `char` = caracteres  
- `boolean` = verdadeiro ou falso  
- `String` = frases, palavras, texto  

Dependendo do seu professor, ele pode te falar de um ou mais desses tipos e, várias vezes, vai te dizer que eles são os tipos *primitivos*. Mas as explicações normalmente param por aí.

Mas, na prática, o que é uma variável?

> Uma variável é como uma "caixinha" nomeada que guarda um valor enquanto o programa roda. Ela permite que você armazene, recupere e manipule dados com facilidade. Em termos técnicos, é um espaço reservado na memória do computador que pode conter diferentes tipos de informação.

Quando você executa um programa no seu computador, ele precisa de alguns recursos para funcionar. Entre esses recursos, está a memória. Não apenas o espaço no HD, mas também a memória RAM — a memória de curto prazo. Tudo o que o computador precisa acessar rapidamente (e não necessariamente de forma permanente) fica alocado na RAM durante a execução.

Uma parte da memória que o seu computador aloca para o seu programa vem das variáveis que você define. Quando você cria uma variável do tipo `int`, o seu programa “magicamente” separa um espaço na memória RAM para armazenar aquele valor. Ao mesmo tempo, ele cria uma referência para esse espaço e associa esse endereço à sua variável.

> Essa “mágica” é feita pelo compilador e pela máquina virtual do Java, que cuidam da alocação e do gerenciamento de memória. Quando você declara uma variável, esses sistemas reservam automaticamente o espaço necessário para ela e criam um ponteiro (ou referência) que permite ao programa saber onde acessar aquele valor.

---

### Nem todas as variáveis são criadas iguais

Em linguagens com forte orientação a objetos, como Java, nem todas as variáveis são criadas da mesma forma. Algumas, como `int`, `float`, `char`, são tratadas como **variáveis de valor**. Outras, como `String`, são tratadas como **objetos**.

> Já reparou que `String`, diferente das outras variáveis, começa com letra maiúscula? Agora você sabe o porquê.

Mas, na prática, o que isso significa?

- Variáveis de **valor** armazenam diretamente o dado na memória. Quando você faz `int b = int a;`, está criando uma nova variável com uma cópia do valor de `a`. São duas variáveis distintas.
- Objetos são variáveis **referenciais**: quando você faz `String y = String x;`, você não cria uma nova String, você apenas faz `y` apontar para o mesmo local da memória que `x`. Ou seja, é a mesma "casa" com dois nomes.

---

### Uma analogia

Imagine que a memória é uma rua cheia de casas.

- Quando você copia uma variável de valor, você está construindo uma nova casa igual à original.
- Quando você copia uma variável referencial, você apenas coloca uma placa diferente apontando para a mesma casa já existente.

---

### Comparando variáveis

Quando você usa o operador `==` em Java, o que ele compara é o **endereço na memória**, e não o conteúdo da variável (no caso de objetos).

Por isso, o código abaixo **não funciona como esperado**:

```java
String codigo = scanner.nextLine("palavra"); <- imagine que o usuario digitou palavra

if(codigo == "palavra") {
    System.out.println("Fez algo");
}
```

Apesar do conteúdo parecer igual, `codigo` e `"palavra"` são **objetos diferentes na memória**, então `==` retorna `false`.

> Existem otimizações no compilador que podem permitir que o codigo acima funcione, se o valor de codigo for criado estaticamente (passando um valor diretamente) o codigo pode funcionar, mas se ele for recebido de um input (por exemplo algo que o usuario digitou), o comportamento fica inconclusivo, mas normalmente vai retornar false.

---

### A forma correta de comparar Strings em Java

Para comparar o conteúdo de duas Strings, use o método `.equals()`:

```java
String codigo = scanner.nextLine("palavra"); <- imagine que o usuario digitou palavra

if(codigo.equals("palavra")) {
    System.out.println("Fez algo");
}
```

O método `.equals()` compara o conteúdo da String, e não apenas o endereço de memória. Então se o usuario digitou "palavra" o valor será o mesmo.

---

### Conclusão

Esse tipo de erro é muito comum entre iniciantes em Java, e entender a diferença entre variáveis de valor e referências faz toda a diferença no desenvolvimento de código robusto e funcional, especialmente quando você for trabalhar em programas mais complexos que precisam acessar objetos de diferentes classes. Sempre que for comparar objetos (como Strings), lembre-se de usar `.equals()` — e deixe o `==` para quando estiver lidando com tipos primitivos. 
