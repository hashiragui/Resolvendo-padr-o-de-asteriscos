Explicação do código:

showPattern(x): A função exibe uma sequência crescente de linhas de asteriscos de 1 a x.

showReversePattern(x): A função exibe uma sequência decrescente de linhas de asteriscos de x até 1.

showFullPattern(x): A função combina os dois padrões acima, primeiro chamando showPattern(x), e depois showReversePattern(x - 1) para evitar a duplicação da linha do meio.
