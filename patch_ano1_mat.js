const fs = require('fs');
const path = 'D:/PROJETOS/Estudo Crianças/matematica.json';
const mat = JSON.parse(fs.readFileSync(path, 'utf8').replace(/^﻿/, ''));
const a1 = mat.anos[0];

function tema(id) {
  for (const t of a1.trimestres) {
    const found = t.temas.find(x => x.id === id);
    if (found) return found;
  }
  throw new Error('Tema não encontrado: ' + id);
}

// ─── T1: Geometria e Espaço ───────────────────────────────────────────────────
const t1a = tema('mat1_t1_geom_espaco');
t1a.aprender = [
  {
    icon: '🧭',
    title: 'Orientação e Localização no Espaço',
    body: 'Para nos situarmos no espaço usamos palavras de localização:<br>• <b>Em cima de / Debaixo de</b> • <b>À frente de / Atrás de</b><br>• <b>Dentro de / Fora de</b> • <b>Ao lado de / Entre</b><br>• <b>Perto de / Longe de</b> • <b>Para cima / Para baixo</b><br>• <b>Para a frente / Para trás</b><br>Também usamos <b>direção</b>: para onde algo vai (para cima, para baixo, para a frente, etc.).',
    example: 'O Gil está <u>em cima</u> da caixa.<br>As caixas estão <u>debaixo</u> da mesa.<br>A Isabel está <u>dentro</u> da caixa.<br>O João está <u>atrás</u> da caixa.<br>A Lura está <u>entre</u> as caixas.',
    trick: 'Para descrever onde está algo: usa DENTRO/FORA, EM CIMA/DEBAIXO, À FRENTE/ATRÁS, AO LADO/ENTRE. Pensa sempre em relação a um objeto de referência!'
  },
  {
    icon: '👐',
    title: 'Lateralidade — Direita e Esquerda',
    body: 'Todos temos um <b>lado direito</b> e um <b>lado esquerdo</b>.<br>• A mão com que escrevo é a <b>mão dominante</b> (normalmente a direita).<br>• Lemos da <b>esquerda para a direita</b>.<br>• Escrevemos de <b>cima para baixo</b>.<br>Para identificar direita/esquerda de outro objeto: imagina que és esse objeto e verifica o seu lado.',
    example: 'Mão direita = a mão com que a maioria escreve ✍️<br>Mão esquerda = a outra mão 🤚<br>Ler = começa na margem esquerda → vai para a direita<br>Escrever = começa em cima → vai para baixo',
    trick: 'Esquerda = o lado do coração ❤️. Direita = o lado oposto. Lemos e escrevemos: esquerda → direita, cima → baixo.'
  },
  {
    icon: '🔷',
    title: 'Regularidades e Sequências Espaciais',
    body: 'Uma <b>regularidade</b> é um padrão que se repete de forma organizada.<br><b>Sequências espaciais</b>: objetos organizados segundo uma regra (forma, cor, tamanho).<br><b>Sequências espacio-temporais</b>: acontecimentos organizados por ordem (1º, 2º, 3º...).<br>Para continuar uma sequência: descobre a regra e aplica-a ao próximo elemento.',
    example: '🔵🔴🔵🔴🔵... → regra: azul, vermelho, repete<br>△□△□△... → regra: triângulo, quadrado, repete<br>1ª: o Zé sobe a escada → 2ª: chega ao topo → 3ª: desce pelo escorrega.',
    trick: 'Regularidade = padrão que se repete. Para continuar: encontra a regra (cor? forma? tamanho?) e aplica-a!'
  }
];
t1a.praticar = [
  { question: 'O gato está _____ da caixa. (A caixa está no chão, o gato está sobre ela)', options: ['Dentro', 'Em cima', 'Atrás', 'À esquerda'], answer: 'Em cima', why: '"Em cima de" significa que o objeto está sobre outro, na parte superior.' },
  { question: 'De que lado começa a leitura e a escrita?', options: ['Da direita para a esquerda', 'De baixo para cima', 'Da esquerda para a direita', 'De qualquer lado'], answer: 'Da esquerda para a direita', why: 'Em português, lemos e escrevemos da esquerda para a direita, e de cima para baixo.' },
  { question: 'O João está _____ da caixa. (A caixa está à frente, o João está atrás)', options: ['À frente', 'Atrás', 'Dentro', 'Entre'], answer: 'Atrás', why: '"Atrás de" significa que está na parte posterior, na posição contrária à frente.' },
  { question: 'Qual é a sequência correta? 🔵🔴🔵🔴___', options: ['🔵🔵', '🔴🔴', '🔵', '🔴'], answer: '🔵', why: 'A regra é: azul, vermelho, azul, vermelho... O próximo é azul (🔵).' },
  { question: 'A Isabel está _____ da caixa. (Ela entrou para dentro da caixa)', options: ['Dentro', 'Fora', 'Em cima', 'À frente'], answer: 'Dentro', why: '"Dentro de" significa que está no interior do objeto.' }
];

// ─── T1: Números até 20 ───────────────────────────────────────────────────────
const t1b = tema('mat1_t1_numeros_20');
t1b.aprender = [
  {
    icon: '🔵',
    title: 'Conjuntos e Cardinal',
    body: 'Um <b>conjunto</b> é um grupo de objetos com uma característica comum.<br>• O <b>cardinal</b> de um conjunto é o número de elementos que tem.<br>• <b>Conjunto vazio</b>: não tem elementos → cardinal = 0.<br>• <b>Diagrama de Venn</b>: oval que representa um conjunto.<br>• Dois conjuntos com o mesmo número de elementos têm o <b>mesmo cardinal</b>.<br>• <b>Correspondência 1 a 1</b>: associar cada elemento de um conjunto a exatamente um do outro.',
    example: 'Conjunto A = {🔴, 🔴, 🔴} → cardinal = 3<br>Conjunto B = {🐸, 🐸, 🐸} → cardinal = 3<br>A e B têm o mesmo cardinal (3) — há correspondência 1 a 1.<br>Conjunto vazio = { } → cardinal = 0',
    trick: 'Cardinal = número de elementos. Mesmo cardinal = mesmo número de elementos. Conjunto vazio = 0 elementos.'
  },
  {
    icon: '🔢',
    title: 'Números Naturais de 0 a 20',
    body: 'Os <b>números naturais</b> representam quantidades. Cada número tem um algarismo (símbolo) e um nome por extenso:<br>0-zero · 1-um · 2-dois · 3-três · 4-quatro · 5-cinco · 6-seis · 7-sete · 8-oito · 9-nove · 10-dez · 11-onze · 12-doze · 13-treze · 14-catorze · 15-quinze · 16-dezasseis · 17-dezassete · 18-dezoito · 19-dezanove · 20-vinte<br>Contar <b>crescente</b>: 0, 1, 2, 3... Contar <b>decrescente</b>: 20, 19, 18...',
    example: '3 maçãs = cardinal 3 = "três"<br>0 = zero (conjunto vazio)<br>Crescente: 5, 6, 7, 8...<br>Decrescente: 10, 9, 8, 7...<br>Sequência: 3, _, 5 → falta o 4',
    trick: 'Crescente = vai aumentando (+1 cada passo). Decrescente = vai diminuindo (-1). 0 a 9 = um dígito. 10 a 20 = dois dígitos.'
  },
  {
    icon: '➕',
    title: 'Comparação e Operações até 20',
    body: 'Comparar quantidades: usamos <b>&gt;</b> (maior que), <b>&lt;</b> (menor que), <b>=</b> (igual a).<br><b>Adição</b> (juntar): parcela + parcela = soma. Reta numérica: salta para a frente.<br><b>Subtração</b> (tirar): subtrativo − subtrator = diferença. Reta numérica: salta para trás.<br>Reta numérica: linha com os números em ordem, de 0 a 20.',
    example: '5 > 3 (5 é maior que 3)<br>2 < 7 (2 é menor que 7)<br>8 = 8 (igual)<br>Adição: 6 + 4 = 10 (salta 4 para a frente a partir do 6)<br>Subtração: 12 − 5 = 7 (salta 5 para trás a partir do 12)',
    trick: 'Sinal &gt; = bocal virado para o maior. Sinal &lt; = bocal virado para o menor. Adição = soma (anda para a frente). Subtração = diferença (anda para trás).'
  }
];
t1b.praticar = [
  { question: 'Qual é o cardinal do conjunto {🍌, 🍌, 🍌, 🍌}?', options: ['3', '4', '5', '2'], answer: '4', why: 'O cardinal é o número de elementos. Conta: 1-🍌, 2-🍌, 3-🍌, 4-🍌 → cardinal = 4.' },
  { question: 'Como se escreve por extenso o número 14?', options: ['Doze', 'Quinze', 'Catorze', 'Treze'], answer: 'Catorze', why: '14 = catorze. Sequência: 11-onze, 12-doze, 13-treze, 14-catorze, 15-quinze.' },
  { question: 'Qual símbolo preenche o espaço? 8 ___ 5', options: ['<', '=', '>', 'nenhum'], answer: '>', why: '8 é maior que 5, por isso usamos o símbolo > (maior que). 8 > 5.' },
  { question: 'Quanto é 7 + 6?', options: ['12', '13', '14', '11'], answer: '13', why: '7 + 6 = 13. Na reta numérica: começo no 7 e salto 6 para a frente → chego ao 13.' },
  { question: 'Quanto é 15 − 8?', options: ['6', '7', '8', '9'], answer: '7', why: '15 − 8 = 7. Na reta numérica: começo no 15 e salto 8 para trás → chego ao 7.' },
  { question: 'Qual é a sequência crescente correta após o 17?', options: ['17, 16, 15', '17, 18, 19', '17, 17, 17', '17, 19, 21'], answer: '17, 18, 19', why: 'Sequência crescente: cada número é +1 do anterior. Depois do 17 vem 18, depois 19.' }
];

// ─── T2: Figuras e Medidas ────────────────────────────────────────────────────
const t2a = tema('mat1_t2_figuras_medidas');
t2a.aprender = [
  {
    icon: '📐',
    title: 'Linhas, Regiões e Polígonos',
    body: '<b>Linhas no plano</b>: reta (linha direita), curva (linha dobrada), mista (parte reta + parte curva).<br><b>Regiões no plano</b>: interior (dentro), exterior (fora), fronteira (o limite).<br><b>Polígonos</b>: figuras planas fechadas com lados retos:<br>• <b>Triângulo</b> = 3 lados<br>• <b>Quadrado</b> = 4 lados iguais<br>• <b>Retângulo</b> = 4 lados (dois pares iguais)<br>• <b>Pentágono</b> = 5 lados<br>• <b>Hexágono</b> = 6 lados',
    example: 'Reta: ——— Curva: ∿∿∿<br>Triângulo △ : 3 lados<br>Quadrado □ : 4 lados iguais<br>Retângulo ▭ : lados opostos iguais<br>Interior = dentro da figura. Exterior = fora dela.',
    trick: 'Polígono = figura fechada com lados retos. Conta os lados para saber o nome! 3=triângulo · 4=quadrilátero · 5=pentágono · 6=hexágono.'
  },
  {
    icon: '📏',
    title: 'Comprimento e Grandezas',
    body: '<b>Comprimento</b>: o que medimos com régua. Comparamos com: mais comprido/curto, mais alto/baixo, mais largo/estreito.<br>Para medir, precisamos de uma <b>unidade</b> (padrão de medida).<br>Exemplo: medir em passos, palmos, ou centímetros (cm).<br><b>Tamanho relativo</b>: pequeno, médio, grande — dependem do objeto com que comparamos.',
    example: 'Minhoca A tem 5 cm. Minhoca B tem 3 cm. → Minhoca A é mais comprida.<br>Comparar com palmos: o livro mede 2 palmos.<br>Grande/médio/pequeno: uma casa é grande, um caderno é médio, um lápis é pequeno.',
    trick: 'Comprimento = medida de distância. Comparar = dois objetos juntos (maior/menor). Medir = usar uma unidade padrão (régua em cm).'
  },
  {
    icon: '📅',
    title: 'Sequências Temporais e Dias da Semana',
    body: '<b>Sequências temporais</b>: ordem dos acontecimentos — <b>antes</b>, <b>durante</b>, <b>depois</b>.<br>Momentos do dia: <b>manhã</b>, <b>tarde</b>, <b>noite</b>.<br><b>Dias da semana</b> (7 dias): segunda-feira · terça-feira · quarta-feira · quinta-feira · sexta-feira · sábado · domingo.<br>De segunda a sexta = dias de escola. Sábado e domingo = fim de semana.<br><b>Ontem</b> = dia anterior · <b>Hoje</b> = dia atual · <b>Amanhã</b> = dia seguinte.',
    example: 'Zé sobe a escada (1.º) → chega ao topo (2.º) → desce pelo escorrega (3.º).<br>Manhã: ir à escola. Tarde: almoçar. Noite: jantar e dormir.<br>Hoje = quarta-feira → ontem = terça → amanhã = quinta.',
    trick: '7 dias da semana: seg, ter, qua, qui, sex, sáb, dom. Sequência: antes → agora → depois. Manhã → tarde → noite = um dia completo.'
  }
];
t2a.praticar = [
  { question: 'Quantos lados tem um triângulo?', options: ['2', '3', '4', '5'], answer: '3', why: 'O triângulo (△) tem 3 lados e 3 ângulos. É o polígono com menor número de lados.' },
  { question: 'Qual é a ferramenta que usamos para medir comprimentos?', options: ['Balança', 'Régua', 'Copo medidor', 'Termómetro'], answer: 'Régua', why: 'A régua é o instrumento usado para medir comprimentos, em centímetros (cm) ou metros (m).' },
  { question: 'Quantos dias tem uma semana?', options: ['5', '6', '7', '8'], answer: '7', why: 'A semana tem 7 dias: segunda, terça, quarta, quinta, sexta, sábado e domingo.' },
  { question: 'Se hoje é quarta-feira, amanhã é:', options: ['Terça-feira', 'Quinta-feira', 'Segunda-feira', 'Sexta-feira'], answer: 'Quinta-feira', why: 'Depois de quarta-feira vem quinta-feira, na sequência da semana.' },
  { question: 'Quantos lados iguais tem um quadrado?', options: ['2', '3', '4 lados todos iguais', '6'], answer: '4 lados todos iguais', why: 'O quadrado tem 4 lados todos com a mesma medida — é um polígono especial.' }
];

// ─── T2: Números até 50 ───────────────────────────────────────────────────────
const t2b = tema('mat1_t2_numeros_50');
t2b.aprender = [
  {
    icon: '🔟',
    title: 'Dezena e Unidade — Números até 50',
    body: 'Os números de 10 a 50 são compostos por <b>dezenas</b> e <b>unidades</b>.<br><b>1 dezena = 10 unidades</b><br>• 10 = 1 dezena e 0 unidades<br>• 25 = 2 dezenas e 5 unidades<br>• 43 = 4 dezenas e 3 unidades<br><b>Representação posicional</b>: o algarismo das dezenas (D) e o algarismo das unidades (U).<br>Exemplo: 47 → D=4, U=7 → 40 + 7 = 47.',
    example: '2 dezenas = 20 (vinte)<br>3 dezenas e 6 unidades = 36 (trinta e seis)<br>4 dezenas = 40 (quarenta)<br>5 dezenas = 50 (cinquenta)<br>Decompor 47: 40 + 7 = 4 dezenas e 7 unidades',
    trick: 'Dezena = grupo de 10. D (dezenas) está à esquerda, U (unidades) à direita. 47 = 4 dezenas + 7 unidades = 40 + 7.'
  },
  {
    icon: '➕',
    title: 'Adição e Subtração até 50',
    body: '<b>Adição</b>: parcela + parcela = soma<br><b>Subtração</b>: subtrativo − subtrator = diferença (ou resto)<br>Estratégias:<br>• Reta numérica: saltar para a frente (adição) ou para trás (subtração)<br>• Decompor em dezenas e unidades: 26 + 13 = (20+10) + (6+3) = 39<br>• Calcular mentalmente: 40 + 8 = 48',
    example: '26 + 13 = 39 (26 → +10 = 36 → +3 = 39)<br>50 − 23 = 27 (50 → −20 = 30 → −3 = 27)<br>38 + 6 = 44 (38 → +2 = 40 → +4 = 44)',
    trick: 'Parcela + parcela = soma. Subtrativo − subtrator = diferença. Truque: decompõe em dezenas e unidades, depois soma cada parte!'
  }
];
t2b.praticar = [
  { question: 'O número 35 tem:', options: ['3 dezenas e 5 unidades', '5 dezenas e 3 unidades', '35 dezenas', '3 unidades e 5 dezenas'], answer: '3 dezenas e 5 unidades', why: '35 = 30 + 5 = 3 dezenas e 5 unidades. O dígito das dezenas é 3 (=30) e o das unidades é 5.' },
  { question: 'Quanto é 1 dezena?', options: ['1', '5', '10', '100'], answer: '10', why: '1 dezena = 10 unidades. Uma dezena é o grupo de dez.' },
  { question: 'Quanto é 24 + 15?', options: ['38', '39', '40', '37'], answer: '39', why: '24 + 15: dezenas 20+10=30, unidades 4+5=9 → 30+9 = 39.' },
  { question: 'Quanto é 47 − 12?', options: ['33', '34', '35', '36'], answer: '35', why: '47 − 12: dezenas 40−10=30, unidades 7−2=5 → 30+5 = 35.' },
  { question: 'Como se decompõe o número 46?', options: ['4 + 6', '40 + 6', '46 + 0', '4 dezenas e 0 unidades'], answer: '40 + 6', why: '46 = 4 dezenas e 6 unidades = 40 + 6.' }
];

// ─── T2: Análise de Dados ─────────────────────────────────────────────────────
const t2c = tema('mat1_t2_dados');
t2c.aprender = [
  {
    icon: '📊',
    title: 'Tabelas de Registo, Pictogramas e Gráficos de Barras',
    body: '<b>Tabela de registos</b>: organiza dados com traços (contagem). Cada 5 traços = grupo de 5 (4 verticais + 1 diagonal).<br><b>Pictograma</b>: usa imagens para mostrar informação. Cada imagem = 1 objeto (ou mais, se indicado na chave).<br><b>Gráfico de barras</b>: usa barras verticais ou horizontais para comparar quantidades. A altura/comprimento da barra indica o valor.',
    example: 'Tabela: Leite ||||  Pão |||  Fruta || → Leite=5, Pão=3, Fruta=2<br>Pictograma: 🍎🍎🍎 = 3 maçãs<br>Gráfico de barras: barra mais alta = maior quantidade',
    trick: 'Tabela = traços. Pictograma = imagens. Gráfico de barras = barras com altura proporcional ao valor. Todos servem para organizar e comparar dados.'
  }
];
t2c.praticar = [
  { question: 'Numa tabela de registos, como representamos o número 5?', options: ['Cinco traços verticais IIIII', 'Quatro traços verticais e um diagonal ||||⁻', '5 estrelas', 'O algarismo 5'], answer: 'Quatro traços verticais e um diagonal ||||⁻', why: 'Na contagem por traços, cada grupo de 5 é representado por 4 traços verticais mais um diagonal, formando um "feixe".' },
  { question: 'Num pictograma, onde encontramos o que cada imagem representa?', options: ['No título', 'Na chave', 'No eixo vertical', 'Na legenda do gráfico de barras'], answer: 'Na chave', why: 'A chave (ou legenda) do pictograma indica o que cada imagem representa (ex: 🍎 = 1 criança).' },
  { question: 'Num gráfico de barras, a barra mais alta representa:', options: ['O menor valor', 'O maior valor', 'A média', 'O valor igual'], answer: 'O maior valor', why: 'No gráfico de barras, a altura da barra é proporcional ao valor — barra mais alta = maior quantidade.' },
  { question: 'Para que serve um gráfico de barras?', options: ['Para desenhar figuras geométricas', 'Para comparar quantidades de diferentes categorias', 'Para fazer somas', 'Para escrever palavras'], answer: 'Para comparar quantidades de diferentes categorias', why: 'O gráfico de barras permite comparar visualmente as quantidades de diferentes categorias.' },
  { question: 'Numa tabela: Manga ||||, Banana |||, Papaia ||. Qual o fruto mais popular?', options: ['Banana', 'Papaia', 'Manga', 'Todos iguais'], answer: 'Manga', why: 'Manga tem 5 registos, Banana tem 4, Papaia tem 2. Manga é a mais popular.' }
];

// ─── T3: Números até 100 ─────────────────────────────────────────────────────
const t3a = tema('mat1_t3_numeros_100');
t3a.aprender = [
  {
    icon: '💯',
    title: 'Números até 100 — Ordem e Decomposição',
    body: 'Os números até 100 têm dezenas e unidades:<br>• 51 a 99 = dois dígitos (dezenas + unidades)<br>• 100 = 10 dezenas = "cem"<br><b>Decompor</b>: separar o número em dezenas e unidades.<br>Ex: 73 = 70 + 3 = 7 dezenas e 3 unidades<br><b>Comparar</b> até 100: primeiro compara as dezenas; se iguais, compara as unidades.<br><b>Ordem crescente</b>: do menor para o maior. <b>Decrescente</b>: do maior para o menor.',
    example: '54 > 43 (5 dezenas > 4 dezenas)<br>62 > 52 (6 dezenas > 5 dezenas)<br>68 > 65 (mesmas dezenas, 8 unid > 5 unid)<br>Crescente: 34, 38, 44, 50, 60, 70<br>100 = 10 dezenas = cem',
    trick: 'Comparar: olha as dezenas primeiro! Dezenas iguais? Olha as unidades. 100 = 10 dezenas. Decompor: D×10 + U.'
  },
  {
    icon: '➕',
    title: 'Adição e Subtração até 100',
    body: 'Somar e subtrair números até 100 com dezenas e unidades.<br><b>Coluna (DU)</b>: alinha as dezenas e unidades em colunas, soma/subtrai coluna a coluna (unidades primeiro, depois dezenas).<br>Pode haver transporte na adição (quando a soma das unidades ≥ 10).<br>Exemplo: 75 + 25 = 100 (5+5=10, escreve 0 e transporta 1; 7+2+1=10 → 100)',
    example: '75 + 25 = 100 (D: 7+2+1=10, U: 5+5=10 → 100)<br>63 + 27 = 90 (D: 6+2=8, U: 3+7=10 → 9 dezenas + 0 = 90)<br>80 − 35 = 45 (D: 8−3=5, U: 0−5 → empresta 1 dezena → 10−5=5)',
    trick: 'Coluna DU: alinha primeiro, soma por baixo. Unidades primeiro, depois dezenas. Transportar = "vai 1" para as dezenas quando U ≥ 10.'
  }
];
t3a.praticar = [
  { question: 'Como se decompõe o número 73?', options: ['7 + 3', '70 + 3', '73 + 0', '7 dezenas e 30 unidades'], answer: '70 + 3', why: '73 = 7 dezenas e 3 unidades = 70 + 3.' },
  { question: 'Qual é o maior número? 52 ou 48?', options: ['48', '52', 'São iguais', 'Impossível comparar'], answer: '52', why: '52 tem 5 dezenas; 48 tem 4 dezenas. 5 > 4, portanto 52 > 48.' },
  { question: 'Quanto é 100?', options: ['9 dezenas', '10 dezenas', '100 dezenas', '1 dezena'], answer: '10 dezenas', why: '100 = 10 dezenas = 100 unidades. É o número que vem depois do 99.' },
  { question: 'Quanto é 75 + 25?', options: ['90', '95', '100', '105'], answer: '100', why: '75 + 25: U=5+5=10 (escreve 0, transporta 1); D=7+2+1=10 → 100.' },
  { question: 'Ordena por ordem crescente: 67, 34, 50, 89', options: ['89, 67, 50, 34', '34, 50, 67, 89', '50, 34, 67, 89', '34, 67, 50, 89'], answer: '34, 50, 67, 89', why: 'Ordem crescente = do menor para o maior: 34 < 50 < 67 < 89.' }
];

// ─── T3: Sólidos e Medidas ────────────────────────────────────────────────────
const t3b = tema('mat1_t3_solidos_medidas');
t3b.aprender = [
  {
    icon: '📦',
    title: 'Sólidos Geométricos',
    body: 'Os <b>sólidos geométricos</b> são formas a 3 dimensões (3D).<br>• <b>Cubo</b>: 6 faces quadradas iguais (ex: dado)<br>• <b>Paralelepípedo</b>: 6 faces retangulares (ex: caixa de sapatos)<br>• <b>Esfera</b>: toda a superfície curva (ex: bola)<br>• <b>Cilindro</b>: 2 faces circulares + 1 superfície curva (ex: lata)<br>• <b>Cone</b>: 1 face circular + 1 superfície curva pontiaguda (ex: cone de gelado)<br>• <b>Pirâmide</b>: base poligonal + faces triangulares<br><b>Superfície plana</b> = reta. <b>Superfície curva</b> = arredondada.',
    example: '🎲 Dado = cubo (6 faces quadradas)<br>⚽ Bola = esfera (só superfícies curvas)<br>🥫 Lata = cilindro (2 bases circulares + 1 curva)<br>🍦 Cone de gelado = cone<br>📦 Caixa de sapatos = paralelepípedo',
    trick: 'Cubo = 6 quadrados. Esfera = tudo curvo. Cilindro = 2 círculos + curva. Cone = 1 círculo + ponta. Pirâmide = base + triângulos laterais.'
  },
  {
    icon: '⚖️',
    title: 'Área, Volume, Massa e Dinheiro',
    body: '<b>Área</b>: espaço ocupado por uma superfície plana. Compara-se contando quadrados.<br><b>Volume</b>: espaço ocupado por um sólido. <b>Capacidade</b>: o que cabe dentro de um recipiente (litros — L).<br><b>Massa e peso</b>: medidos com balança. Objetos com menos massa flutuam na água; com mais massa, afundam.<br><b>Dinheiro de Cabo Verde</b>: moedas — 1 escudo, 5 escudos, 10 escudos, 20 escudos, 50 escudos, 100 escudos.',
    example: 'Área: figura formada por 5 quadrados → área = 5 quadrados<br>Capacidade: 1 garrafão de 20L = 4 garrafões de 5L<br>Massa: pluma flutua (pouca massa); pedra afunda (muita massa)<br>Dinheiro: 50$00 + 20$00 + 10$00 = 80$00',
    trick: 'Área = conta quadrados. Capacidade em litros (L). Massa = balança. Flutua = menos massa que a água. Dinheiro CV: escudos e centavos.'
  }
];
t3b.praticar = [
  { question: 'Qual sólido geométrico tem APENAS superfícies curvas?', options: ['Cubo', 'Pirâmide', 'Esfera', 'Paralelepípedo'], answer: 'Esfera', why: 'A esfera tem apenas superfície curva — não tem nenhuma face plana. Exemplo: uma bola.' },
  { question: 'Uma lata de conserva tem a forma de qual sólido?', options: ['Cubo', 'Cilindro', 'Cone', 'Esfera'], answer: 'Cilindro', why: 'A lata tem 2 bases circulares planas e uma superfície lateral curva — é um cilindro.' },
  { question: 'Quantas faces planas tem um cubo?', options: ['4', '5', '6', '8'], answer: '6', why: 'O cubo tem 6 faces, todas quadradas e planas (frente, trás, cima, baixo, esquerda, direita).' },
  { question: 'Um objeto com menos massa que a água irá:', options: ['Afundar', 'Flutuar', 'Desaparecer', 'Mudar de forma'], answer: 'Flutuar', why: 'Objetos com menos massa (mais leves) do que a água flutuam à superfície.' },
  { question: 'Qual é a unidade de medida de capacidade?', options: ['Metro', 'Quilograma', 'Litro', 'Centímetro'], answer: 'Litro', why: 'A capacidade (o que cabe num recipiente) mede-se em litros (L).' },
  { question: 'Qual é a moeda de menor valor em Cabo Verde?', options: ['100 escudos', '50 escudos', '1 escudo', '20 escudos'], answer: '1 escudo', why: 'A moeda de menor valor em CV é o 1 escudo. Depois vêm: 5, 10, 20, 50 e 100 escudos.' }
];

// ─── Escrever o JSON ─────────────────────────────────────────────────────────
fs.writeFileSync(path, JSON.stringify(mat, null, 2), 'utf8');
console.log('MAT Ano 1 atualizado.');
const mat2 = JSON.parse(fs.readFileSync(path, 'utf8'));
mat2.anos[0].trimestres.forEach((t, i) => {
  t.temas.forEach(top => {
    console.log('T'+(i+1)+' '+top.id+' | ap:'+(top.aprender||[]).length+' pr:'+(top.praticar||[]).length);
  });
});
