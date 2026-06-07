const fs = require('fs');

// ─── helpers ─────────────────────────────────────────────────────────────────
function readJSON(p) { return JSON.parse(fs.readFileSync(p,'utf8').replace(/^﻿/,'')); }
function writeJSON(p,d) { fs.writeFileSync(p,JSON.stringify(d,null,2),'utf8'); }
function tema(ano, id) {
  for (const t of ano.trimestres) {
    const found = t.temas.find(x => x.id === id);
    if (found) return found;
  }
  throw new Error('Tema não encontrado: ' + id);
}

// ═══════════════════════════════════════════════════════════════════
// POR — lacunas + desafios
// ═══════════════════════════════════════════════════════════════════
const porPath = 'D:/PROJETOS/Estudo Crianças/portugues.json';
const por = readJSON(porPath);
const a1por = por.anos[0];

// ─── LACUNA 1: ão/ãu + H mudo → T3 ──────────────────────────────
const t3por = tema(a1por,'por1_t3_leitura_escrita');
t3por.aprender.push(
  {
    icon: '🎭',
    title: 'Vogais Nasais ã/ão/ãu e o H Mudo — palhaço',
    body: '<b>Vogais nasais</b>: quando a vogal soa "pelo nariz". As principais terminações nasais são:<br>• <b>ão</b>: palhação, avião, botão, coração<br>• <b>ão</b>: pão, mão, cão, irmão<br>• <b>ãu</b>: mãu (pouco comum), São<br>• <b>ã</b>: manhã, irmã, maçã, amanhã<br><b>H no início das palavras</b>: a letra H no início NÃO se pronuncia — é muda!<br>hipopótamo → i-po-pó-ta-mo (o H não soa)',
    example: 'ão: avião ✈️ · botão 🔘 · coração ❤️ · irmão<br>ã: manhã · maçã 🍎 · amanhã · irmã<br>H mudo: hora (ora), haver (aver), hipopótamo (ipopótamo)<br>Palhaço = pa-lhã-ço → som nasal ã dentro da palavra',
    trick: 'H no início = NUNCA se pronuncia (hora=ora, hoje=oje). ão/ã = som nasal (sai pelo nariz). Dica: tapa o nariz ao dizer "irmão" — sentes a vibração!'
  },
  {
    icon: '🦓',
    title: 'Letra Z e Grupos com R — zebra, árvore',
    body: '<b>Quadro silábico z+v</b>: za · ze · zi · zo · zu → som igual ao S suave (entre vogais)<br>Palavra-chave: <b>ze-bra</b> (2 sílabas: ze + bra)<br><b>Grupos consonantais com R</b> (C+R+V): bra · bre · bri · bro · bru / pra · pre / fra · fre / cra · cre / gra · gre / dra · dre<br><b>Árvore → ár-vo-re</b>: o R no final de sílaba (ár, er, or, ir) tem som suave.',
    example: 'Z: ze + bra = zebra 🦓 · za + pa + to = zapato · zi + per = zíper<br>Grupos: bra-ço · pra-to · fra-co · cra-vo · gra-ma<br>R final de sílaba: ár-vo-re · sor-te · car-ta · per-to<br>Diferença: "caro" (r suave entre vogais) ≠ "carro" (rr forte)',
    trick: 'Z = som de s suave (zebra=sebra). Grupos C+R: bra, pra, fra, cra, gra, dra. R no final de sílaba (ár, er, or) = som médio (nem forte nem suave).'
  }
);
t3por.praticar.push(
  { question: 'Qual é a terminação nasal na palavra "coração"?', options:['ão','ão','ão','ção'], answer:'ão', why:'"coração" termina em -ão, uma das terminações nasais mais comuns em português.' },
  { question: 'Como se pronuncia o H no início de "hora"?', options:['H forte como em inglês','H suave','Não se pronuncia — é mudo','Como J'], answer:'Não se pronuncia — é mudo', why:'O H no início das palavras portuguesas é sempre mudo — "hora" pronuncia-se "ora".' },
  { question: 'Como se divide "zebra" em sílabas?', options:['z-e-b-r-a','ze-bra','zeb-ra','z-ebra'], answer:'ze-bra', why:'"zebra" = ze-bra, 2 sílabas. O grupo "br" fica junto na mesma sílaba.' },
  { question: 'Qual destes é um grupo consonantal com R?', options:['nh','ch','lh','bra'], answer:'bra', why:'"bra" é um grupo consonantal: consoante B + consoante R + vogal A. Outros: pra, fra, gra, cra.' }
);

// ─── DESAFIOS POR ─────────────────────────────────────────────────
tema(a1por,'por1_t1_vogais_silabas').desafios = [
  { question:'A palavra "menina" tem quantas vogais no total?', options:['2','3','4','1'], answer:'3', why:'"me-ni-na" → e, i, a = 3 vogais. Conta todas as vogais, mesmo que repitam.' },
  { question:'Qual destas palavras tem MAIS sílabas?', options:['uva','nome','menina','mama'], answer:'menina', why:'"me-ni-na" tem 3 sílabas. As outras têm 2 sílabas cada.' },
  { question:'Que sílabas do quadro m+v formam a palavra "mimo"?', options:['ma+mo','mi+mo','me+mu','mo+mi'], answer:'mi+mo', why:'"mimo" = mi (m+i) + mo (m+o). São duas sílabas do quadro m+vogal.' },
  { question:'Quantas sílabas tem "borboleta"?', options:['3','4','5','2'], answer:'4', why:'"bor-bo-le-ta" = 4 sílabas. Bate palmas: bor(1), bo(2), le(3), ta(4).' }
];
tema(a1por,'por1_t1_ditongos').desafios = [
  { question:'Qual palavra tem o ditongo "ei"?', options:['leite','lima','lama','lote'], answer:'leite', why:'"leite" = lei-te. O ditongo "ei" está na primeira sílaba (e+i juntos).' },
  { question:'Em "pai", o ditongo é:', options:['pa','ai','pi','ip'], answer:'ai', why:'"pai" tem o ditongo ai — as vogais a e i estão na mesma sílaba.' },
  { question:'Qual destes NÃO é um ditongo?', options:['ai','ei','mu','ou'], answer:'mu', why:'"mu" é uma sílaba simples (consoante+vogal), não um ditongo. Ditongo = 2 vogais juntas.' },
  { question:'Junta as sílabas: "vi" + "da" =', options:['vida','viad','divá','avid'], answer:'vida', why:'"vi" (v+i) + "da" (d+a) = "vida". As sílabas juntam-se pela ordem correta.' }
];
tema(a1por,'por1_t2_silabas_dv').desafios = [
  { question:'Que palavra se forma com "to" + "ma" + "te"?', options:['tomato','tomate','mato','tomaste'], answer:'tomate', why:'"to" + "ma" + "te" = tomate. Um vegetal muito usado em CV!' },
  { question:'Qual palavra NÃO começa com letra maiúscula corretamente?', options:['A minha escola é boa.','o Airton é de Santiago.','Cabo Verde é bonito.','A Ana foi ao mercado.'], answer:'o Airton é de Santiago.', why:'A frase começa com "o" em minúscula — errado! Início de frase exige maiúscula: "O Airton...".' },
  { question:'"Ba" + "ta" + "ta" forma que palavra?', options:['batata','tabata','babata','tataba'], answer:'batata', why:'"ba"+"ta"+"ta" = batata. Uma raiz muito consumida em Cabo Verde!' },
  { question:'Que som faz o "qu" em "quilo"?', options:['ku','su','qu+u','wu'], answer:'ku', why:'"qui" soa como "ki" — o U não se pronuncia. "quilo" lê-se como "kilo".' }
];
tema(a1por,'por1_t2_casa_janela').desafios = [
  { question:'Na palavra "rosa", o S soa como:', options:['S de sopa','Z de zebra','X de caixa','CH de chave'], answer:'Z de zebra', why:'"rosa" = ro-za. O S entre duas vogais (o_a) lê-se como Z.' },
  { question:'Qual dígrafo está em "velho"?', options:['CH','NH','LH','RR'], answer:'LH', why:'"velho" = ve-lho. O dígrafo LH forma um som especial, como em filho, mulher, telhado.' },
  { question:'Que palavra usa o dígrafo CH?', options:['janela','galinha','chocolate','filho'], answer:'chocolate', why:'"chocolate" = cho-co-la-te. O dígrafo CH está em "cho", formando o som como em "chave".' },
  { question:'Quantas sílabas tem "telhado"?', options:['2','3','4','1'], answer:'3', why:'"te-lha-do" = 3 sílabas. O dígrafo LH fica junto na sílaba "lha".' }
];
tema(a1por,'por1_t3_leitura_escrita').desafios = [
  { question:'Qual palavra tem o dígrafo NH?', options:['galinha','zebra','quadro','flor'], answer:'galinha', why:'"galinha" = ga-li-nha. O dígrafo NH forma um som nasal especial.' },
  { question:'Em "cenoura", CE soa como qual letra?', options:['K','S','Z','G'], answer:'S', why:'CE e CI têm sempre som de S. "cenoura" soa como "senoura".' },
  { question:'Qual grupo consonantal está em "braço"?', options:['br','nh','lh','ch'], answer:'br', why:'"braço" = bra-ço. O grupo "br" é um grupo consonantal (B+R+vogal).' },
  { question:'"Amanhã" tem terminação nasal. Essa terminação é:', options:['ão','ão','ã','ãu'], answer:'ã', why:'"amanhã" termina em -ã, uma vogal nasal. Diferente de "avião" (-ão) ou "maçã" (também -ã).' }
];

// ═══════════════════════════════════════════════════════════════════
// MAT — lacunas + desafios
// ═══════════════════════════════════════════════════════════════════
const matPath = 'D:/PROJETOS/Estudo Crianças/matematica.json';
const mat = readJSON(matPath);
const a1mat = mat.anos[0];

// ─── LACUNA: Meses do Ano → T2 figuras_medidas ────────────────────
const t2matFig = tema(a1mat,'mat1_t2_figuras_medidas');
t2matFig.aprender.push({
  icon: '📆',
  title: 'Os Meses do Ano e o Calendário',
  body: 'O ano tem <b>12 meses</b>:<br>janeiro · fevereiro · março · abril · maio · junho · julho · agosto · setembro · outubro · novembro · dezembro<br>Os meses têm 28, 29, 30 ou 31 dias.<br>O calendário organiza os dias em semanas (linhas) e meses (colunas dos dias da semana).<br>Ontem · Hoje · Amanhã referem-se sempre ao dia presente.',
  example: 'Janeiro = 1.º mês (começo do ano) 🎉<br>Junho = 6.º mês<br>Dezembro = 12.º mês (fim do ano) 🎄<br>Fevereiro = mês mais curto (28 ou 29 dias)<br>Outubro, novembro = meses do regresso às aulas',
  trick: 'Truque dos nós da mão: nó = 31 dias, vão = 28/29/30 dias. Janeiro(nó)=31, Fevereiro(vão)=28/29, Março(nó)=31...'
});
t2matFig.praticar.push(
  { question:'Quantos meses tem um ano?', options:['10','11','12','13'], answer:'12', why:'O ano tem 12 meses: de janeiro a dezembro.' },
  { question:'Qual é o 1.º mês do ano?', options:['Dezembro','Março','Janeiro','Junho'], answer:'Janeiro', why:'Janeiro é o primeiro mês do ano. Dezembro é o último (12.º).' },
  { question:'Qual mês tem menos dias?', options:['Janeiro','Março','Fevereiro','Julho'], answer:'Fevereiro', why:'Fevereiro tem apenas 28 dias (ou 29 no ano bissexto) — é o mês mais curto.' }
);

// ─── LACUNA: Dados — 2 cards dedicados ────────────────────────────
const t2matDados = tema(a1mat,'mat1_t2_dados');
t2matDados.aprender.push(
  {
    icon: '📋',
    title: 'Tabela de Registos — Contar com Traços',
    body: 'A <b>tabela de registos</b> usa traços para contar dados.<br>Modo de contar: cada objeto = 1 traço vertical.<br>Ao 5.º objeto: faz-se um traço diagonal a cruzar os 4 anteriores → ||||/<br>Assim é fácil contar grupos de 5 sem perder a conta.<br>Depois de recolher os dados, completa a tabela com o total.',
    example: 'Alunos que comem fruta ao pequeno-almoço: ||||/ ||| = 5+3 = 8 alunos<br>Pássaros observados: ||||/ ||||/ || = 5+5+2 = 12 pássaros<br>Lê a tabela: qual a categoria com mais registos? = a que tem mais traços.',
    trick: 'Conta sempre em grupos de 5 (||||/). Fácil: conta os feixes de 5, depois os traços soltos. Total = feixes×5 + soltos.'
  },
  {
    icon: '🖼️',
    title: 'Pictograma — Informação com Imagens',
    body: 'O <b>pictograma</b> usa imagens para representar dados.<br>Cada imagem representa 1 objeto (ou mais — ver a <b>chave</b>).<br>Para ler um pictograma:<br>1. Lê o título (o que está a ser contado)<br>2. Lê a chave (quanto vale cada imagem)<br>3. Conta as imagens de cada categoria<br>4. Multiplica pelo valor da chave',
    example: 'Chave: 🍎 = 2 crianças<br>Mara: 🍎🍎🍎 = 3×2 = 6 crianças<br>Luísa: 🍎🍎 = 2×2 = 4 crianças<br>→ Mara comprou para mais crianças.',
    trick: 'Pictograma = picture + grama. SEMPRE verifica a chave antes de contar! Se 1 imagem = 2, então 3 imagens = 6, não 3.'
  }
);
t2matDados.praticar.push(
  { question:'Num registo de traços, ||||/ representa:', options:['4','5','6','10'], answer:'5', why:'Quatro traços verticais mais um diagonal = grupo de 5. É assim que se registam os dados em grupos.' },
  { question:'No pictograma, a chave diz que 🐟 = 3 peixes. Vês 4 imagens 🐟🐟🐟🐟. Quantos peixes são?', options:['4','7','12','3'], answer:'12', why:'4 imagens × 3 peixes cada = 12 peixes. A chave multiplica o valor de cada imagem.' }
);

// ─── DESAFIOS MAT ─────────────────────────────────────────────────
tema(a1mat,'mat1_t1_geom_espaco').desafios = [
  { question:'A Ana está ENTRE a escola e a casa da avó. O que isso quer dizer?', options:['A Ana está dentro da escola','A Ana está do lado de fora','A Ana está no meio dos dois lugares','A Ana está atrás da escola'], answer:'A Ana está no meio dos dois lugares', why:'"Entre" indica que está no meio — com um objeto de cada lado.' },
  { question:'O Zé levantou a mão DIREITA. Do teu ponto de vista (ao olhar para ele), a mão que vês é:', options:['A mão direita dele','A mão esquerda dele','As duas mãos','Impossível saber'], answer:'A mão esquerda dele', why:'Quando olhas para outra pessoa frente a frente, o lado direito dela fica do teu lado esquerdo — os lados invertem.' },
  { question:'Qual é o próximo elemento? △□○△□○△□___', options:['△','□','○','△□'], answer:'○', why:'O padrão é: triângulo, quadrado, círculo, repete. Depois de △□, o próximo é ○.' },
  { question:'O livro está EM CIMA da mesa. A mochila está DEBAIXO da cadeira. Onde está a mochila?', options:['Em cima da mesa','Dentro da mochila','Debaixo da cadeira','À frente do livro'], answer:'Debaixo da cadeira', why:'Debaixo de = no lado inferior, por baixo de algo.' }
];
tema(a1mat,'mat1_t1_numeros_20').desafios = [
  { question:'O conjunto A tem 7 maçãs. O conjunto B tem 5 laranjas. Qual tem mais frutas?', options:['B','Igual','A','Impossível saber'], answer:'A', why:'7 > 5. O conjunto A tem mais elementos — o seu cardinal (7) é maior.' },
  { question:'Quanto é 9 + 8?', options:['16','17','18','15'], answer:'17', why:'9 + 8 = 17. Na reta numérica: começa no 9, salta 8 para a frente → chega ao 17.' },
  { question:'Na cozinha havia 15 copos. Caíram 6. Quantos ficaram?', options:['8','9','10','11'], answer:'9', why:'15 − 6 = 9 copos ficaram. Subtração: retirar 6 do 15.' },
  { question:'Qual número falta? 5, 8, ___, 14, 17', options:['10','11','12','9'], answer:'11', why:'A sequência aumenta de 3 em 3: 5+3=8, 8+3=11, 11+3=14, 14+3=17.' }
];
tema(a1mat,'mat1_t2_figuras_medidas').desafios = [
  { question:'Uma figura tem 4 lados todos iguais. Que figura é?', options:['Triângulo','Retângulo','Quadrado','Pentágono'], answer:'Quadrado', why:'O quadrado tem 4 lados todos com a mesma medida. O retângulo tem 4 lados mas só os opostos são iguais.' },
  { question:'Se hoje é sexta-feira, que dia foi ontem?', options:['Sábado','Quinta-feira','Segunda-feira','Domingo'], answer:'Quinta-feira', why:'Antes da sexta-feira vem a quinta-feira.' },
  { question:'Em que mês de cada ano há menos dias do que nos outros?', options:['Janeiro','Março','Outubro','Fevereiro'], answer:'Fevereiro', why:'Fevereiro tem 28 dias (ou 29) — é sempre o mês mais curto do ano.' },
  { question:'A régua do Airton tem 20 cm. A régua da Ana tem 15 cm. A diferença de comprimento é:', options:['5 cm','35 cm','3 cm','25 cm'], answer:'5 cm', why:'20 − 15 = 5 cm. A régua do Airton é 5 cm mais comprida.' }
];
tema(a1mat,'mat1_t2_numeros_50').desafios = [
  { question:'O número 48 tem quantas dezenas e quantas unidades?', options:['8 dezenas e 4 unidades','4 dezenas e 8 unidades','4 dezenas e 0 unidades','48 dezenas'], answer:'4 dezenas e 8 unidades', why:'48 = 40 + 8 = 4 dezenas e 8 unidades.' },
  { question:'Na turma há 23 meninas e 17 meninos. Quantos alunos são ao todo?', options:['38','39','40','41'], answer:'40', why:'23 + 17 = 40. D: 20+10=30, U: 3+7=10 → 30+10 = 40 alunos.' },
  { question:'De 50 mangas, venderam-se 28. Quantas ficaram?', options:['20','21','22','23'], answer:'22', why:'50 − 28 = 22 mangas ficaram.' },
  { question:'Qual é o número que tem 3 dezenas e 9 unidades?', options:['93','39','30','9'], answer:'39', why:'3 dezenas = 30. 9 unidades = 9. Junta: 30 + 9 = 39.' }
];
tema(a1mat,'mat1_t2_dados').desafios = [
  { question:'Num pictograma: Ana 🍊🍊🍊, João 🍊🍊, Maria 🍊🍊🍊🍊. Quem comprou mais?', options:['Ana','João','Maria','Todos igual'], answer:'Maria', why:'Maria tem 4 imagens, Ana tem 3, João tem 2. Maria comprou mais.' },
  { question:'Num gráfico de barras: Azul=20, Amarelo=15, Laranja=10. Qual é a diferença entre Azul e Laranja?', options:['5','10','15','20'], answer:'10', why:'20 − 10 = 10. A barra azul é 10 unidades maior que a laranja.' },
  { question:'Uma tabela mostra: Gatos ||||/ ||, Cães ||||/ ||||. Quantos animais ao total?', options:['16','17','18','19'], answer:'16', why:'Gatos: 5+2=7. Cães: 5+4=9. Total: 7+9=16 animais.' },
  { question:'No gráfico de barras de insetos: Borboletas=4, Gafanhotos=6, Formigas=7. Qual inseto é menos visto?', options:['Gafanhotos','Formigas','Borboletas','Todos iguais'], answer:'Borboletas', why:'Borboletas=4 é o menor valor — a barra mais curta no gráfico.' }
];
tema(a1mat,'mat1_t3_numeros_100').desafios = [
  { question:'Qual é o maior número: 72 ou 69?', options:['69','72','Iguais','Impossível saber'], answer:'72', why:'72 tem 7 dezenas; 69 tem 6 dezenas. 7 > 6, portanto 72 > 69.' },
  { question:'A escola tem 45 meninas e 38 meninos. Quantos alunos ao total?', options:['73','82','83','93'], answer:'83', why:'45 + 38 = 83. U: 5+8=13 (escreve 3, transporta 1). D: 4+3+1=8 → 83.' },
  { question:'Havia 100 laranjas. Venderam-se 63. Quantas restam?', options:['37','38','47','33'], answer:'37', why:'100 − 63 = 37 laranjas restam.' },
  { question:'Ordena do maior para o menor: 45, 78, 32, 91', options:['32, 45, 78, 91','91, 78, 45, 32','78, 91, 32, 45','45, 32, 91, 78'], answer:'91, 78, 45, 32', why:'Ordem decrescente = do maior para o menor: 91 > 78 > 45 > 32.' }
];
tema(a1mat,'mat1_t3_solidos_medidas').desafios = [
  { question:'Uma caixa de sapatos tem a forma de qual sólido geométrico?', options:['Cubo','Paralelepípedo','Esfera','Cone'], answer:'Paralelepípedo', why:'A caixa de sapatos tem 6 faces retangulares (não todas iguais) — é um paralelepípedo.' },
  { question:'Um garrafão tem 20L. Enches 4 garrafas de 5L cada. Ficam iguais?', options:['Não, sobra água','Sim, são iguais','Não, falta água','Impossível saber'], answer:'Sim, são iguais', why:'4 garrafas × 5L = 20L = o garrafão completo.' },
  { question:'Tens 50$00 e 20$00. Queres comprar um gelado de 80$00. Tens dinheiro suficiente?', options:['Sim, sobra','Sim, chega exato','Não, falta','Sim, sobra muito'], answer:'Não, falta', why:'50$00 + 20$00 = 70$00. O gelado custa 80$00. Faltam 10$00.' },
  { question:'Quais sólidos têm APENAS superfícies planas?', options:['Esfera e cone','Cilindro e esfera','Cubo e pirâmide','Cone e cubo'], answer:'Cubo e pirâmide', why:'Cubo (6 faces quadradas) e pirâmide (base + triângulos) têm apenas faces planas. Esfera, cilindro e cone têm curvas.' }
];

writeJSON(matPath, mat);
console.log('MAT atualizado.');

// ═══════════════════════════════════════════════════════════════════
// CIE — lacuna + desafios
// ═══════════════════════════════════════════════════════════════════
const ciePath = 'D:/PROJETOS/Estudo Crianças/ciencias.json';
const cie = readJSON(ciePath);
const a1cie = cie.anos[0];

// ─── LACUNA: A Educação → T2 habitacao_transportes ────────────────
const t2cieHab = tema(a1cie,'cie1_t2_habitacao_transportes');
t2cieHab.aprender.push({
  icon: '📚',
  title: 'A Educação — Aprendo na Família e na Escola',
  body: 'Aprendemos em dois lugares principais:<br><b>Na família</b>: ser carinhoso, cozinhar, fazer compras, cuidar das plantas, atravessar a rua, respeitar os outros.<br><b>Na escola</b>: ler, escrever, contar, desenhar, trabalhar em grupo, descobrir coisas novas com os colegas.<br>A família e a escola <b>colaboram juntas</b> na nossa educação — cada uma tem o seu papel.',
  example: 'Com a mãe → aprendo a fazer bolo 🎂<br>Com o avô → aprendo a cuidar das plantas 🌱<br>Com o tio → aprendo a atravessar a rua 🚦<br>Com a professora → aprendo a ler 📖<br>Com os colegas → aprendo a descobrir e a partilhar 👫',
  trick: 'Família = educação de casa (valores, tarefas, vida). Escola = educação formal (ler, escrever, contar). Juntas = educação completa!'
});
t2cieHab.praticar.push(
  { question:'Onde aprendemos a ler e a escrever?', options:['Na família apenas','Na escola','No mercado','No hospital'], answer:'Na escola', why:'Ler e escrever são aprendizagens formais que acontecem principalmente na escola.' },
  { question:'Com quem aprendemos a cuidar das plantas em casa?', options:['Com o professor','Com o médico','Com os familiares (avô, mãe, etc.)','Com o diretor da escola'], answer:'Com os familiares (avô, mãe, etc.)', why:'Na família aprendemos tarefas da vida como cuidar das plantas, cozinhar, fazer compras.' },
  { question:'O que significa dizer que a família e a escola colaboram na educação?', options:['Só a escola educa','Só a família educa','Cada uma tem o seu papel e juntas completam a educação','A escola substitui a família'], answer:'Cada uma tem o seu papel e juntas completam a educação', why:'A educação completa vem das duas: a família ensina os valores e a vida; a escola ensina os saberes formais.' }
);

// ─── DESAFIOS CIE ─────────────────────────────────────────────────
tema(a1cie,'cie1_t1_familia_escola').desafios = [
  { question:'A Marta ajuda a mãe a pôr a mesa, o pai trata do jardim e o irmão arruma o quarto. O que está a acontecer?', options:['A família a discutir','A colaboração da família nas tarefas de casa','Apenas a Marta trabalha','Ninguém faz nada'], answer:'A colaboração da família nas tarefas de casa', why:'Quando cada membro da família faz a sua parte, estão a colaborar — o bem-estar depende de todos.' },
  { question:'Na escola, quem é responsável por cuidar da limpeza?', options:['O professor','O diretor','O empregado de limpeza','Os alunos'], answer:'O empregado de limpeza', why:'Na escola, cada profissional tem a sua função: o empregado de limpeza cuida da higiene dos espaços.' },
  { question:'O João discutiu com o amigo na escola. Qual a melhor atitude?', options:['Bater no amigo','Ignorar sempre','Conversar e resolver a situação','Dizer ao professor para castigar'], answer:'Conversar e resolver a situação', why:'Os bons amigos falam e resolvem os problemas. A amizade implica respeito e diálogo.' },
  { question:'A família da Ana participa nas reuniões da escola. Isso é importante porque:', options:['É obrigatório por lei','Ajuda Ana a aprender mais e mostra que a família se preocupa','Os professores mandam','Todos os pais vão a reuniões'], answer:'Ajuda Ana a aprender mais e mostra que a família se preocupa', why:'Quando a família participa na escola, o aluno sente-se apoiado e aprende melhor.' }
];
tema(a1cie,'cie1_t1_alimentacao_vestuario').desafios = [
  { question:'A Maria comeu fruta, peixe, arroz e legumes ao almoço. A sua alimentação é:', options:['Pouco saudável','Muito saudável e variada','Demasiada comida','Apenas de origem animal'], answer:'Muito saudável e variada', why:'Fruta + peixe (animal) + arroz (vegetal) + legumes (vegetal) = alimentação variada, equilibrada e saudável.' },
  { question:'O João foi à praia com fato de banho e sem protetor solar nem chapéu. O que deveria ter feito?', options:['Ficado em casa','Levado chapéu e protetor solar','Vestido roupa de inverno','Ido de noite'], answer:'Levado chapéu e protetor solar', why:'Na praia, o vestuário adequado inclui chapéu e protetor solar para proteger dos raios do sol.' },
  { question:'O pão tem origem vegetal (trigo) e o queijo tem origem animal (leite). Uma sandes de queijo tem:', options:['Só origem vegetal','Só origem animal','Ambas as origens','Nenhuma origem'], answer:'Ambas as origens', why:'O pão = vegetal (trigo). O queijo = animal (leite de vaca/cabra). A sandes tem ambas as origens.' },
  { question:'Quantas vezes por dia devemos escovar os dentes?', options:['1 vez','2 vezes','3 vezes','5 vezes'], answer:'3 vezes', why:'Escovar ao levantar, após as refeições e antes de dormir = 3 vezes. Para ter dentes saudáveis!' }
];
tema(a1cie,'cie1_t2_habitacao_transportes').desafios = [
  { question:'O Airton quer ir de Santiago a São Vicente. Qual meio de transporte vai usar?', options:['Bicicleta','Autocarro','Barco ou avião','Mota'], answer:'Barco ou avião', why:'Para ir de uma ilha de CV a outra, só se pode usar barco (marítimo) ou avião (aéreo).' },
  { question:'A mãe da Ana enviou uma carta à avó. Depois ligou-lhe pelo telefone. Quantos meios de comunicação usou?', options:['1','2','3','0'], answer:'2', why:'Carta + telefone = 2 meios de comunicação pessoal.' },
  { question:'Na cozinha há um produto com o símbolo ☠️ (tóxico). O que devemos fazer?', options:['Beber para ver o sabor','Deixar ao alcance das crianças','Guardar em lugar seguro, fora do alcance das crianças','Ignorar o símbolo'], answer:'Guardar em lugar seguro, fora do alcance das crianças', why:'Produtos tóxicos são perigosos — devem ficar fora do alcance das crianças e em lugares seguros.' },
  { question:'O João usa o telemóvel para falar com o pai. A professora usa a televisão para explicar. Qual é pessoal e qual é social?', options:['Ambos pessoais','Ambos sociais','Telemóvel=pessoal; TV=social','Telemóvel=social; TV=pessoal'], answer:'Telemóvel=pessoal; TV=social', why:'Telemóvel = entre duas pessoas (pessoal). TV = transmite para muitas pessoas ao mesmo tempo (social).' }
];
tema(a1cie,'cie1_t2_seres_vivos').desafios = [
  { question:'Uma pedra e uma lagartixa estão no jardim. Qual delas é um ser vivo?', options:['A pedra','A lagartixa','As duas','Nenhuma'], answer:'A lagartixa', why:'A lagartixa nasce, cresce, reproduz e morre — é um ser vivo. A pedra não passa por essas fases.' },
  { question:'A vaca dá leite. A galinha dá ovos. O milho dá espigas. Qual vem de origem vegetal?', options:['O leite','Os ovos','As espigas de milho','Os três'], answer:'As espigas de milho', why:'O milho é uma planta — origem vegetal. O leite e os ovos vêm de animais — origem animal.' },
  { question:'Para crescer saudável, uma planta de jardim precisa de:', options:['Sal e óleo','Água, sol e terra fértil','Apenas chuva','Só terra, sem sol'], answer:'Água, sol e terra fértil', why:'As plantas são seres vivos e precisam de: água (para hidratar), sol (para fotossíntese) e terra fértil (para nutrientes).' },
  { question:'O cão ladra, a galinha pica no chão e o gato mia. O que têm em comum?', options:['São todos domésticos','São todos selvagens','São todos aves','São todos plantas'], answer:'São todos domésticos', why:'Cão, galinha e gato são animais domésticos — vivem com as pessoas e são cuidados por elas.' }
];
tema(a1cie,'cie1_t3_ambiente').desafios = [
  { question:'A Ana deixa a torneira aberta ao escovar os dentes. Isto é:', options:['Bom — usa água potável','Mau — desperdiça água','Normal em todos os países','Necessário para a higiene'], answer:'Mau — desperdiça água', why:'Em CV, a água potável é escassa. Fechar a torneira ao escovar os dentes poupa muita água.' },
  { question:'Colócas um copo de água no congelador. Algumas horas depois, a água fica:', options:['Líquida','Gasosa (vapor)','Sólida (gelo)','Desaparece'], answer:'Sólida (gelo)', why:'Com o frio do congelador, a água passa do estado líquido para o estado sólido (gelo).' },
  { question:'Observas a paisagem: há areia, mar e ondas. Que tipo de paisagem é?', options:['Montanha','Planície','Planalto','Praia'], answer:'Praia', why:'Areia + mar + ondas = paisagem de praia. Cabo Verde tem muitas e belas praias!' },
  { question:'O Zé fez a experiência do lenço no copo virado dentro de água. O lenço ficou seco. Porquê?', options:['O lenço é mágico','O copo tinha um buraco','O ar preso no copo não deixou a água entrar','A água estava fria'], answer:'O ar preso no copo não deixou a água entrar', why:'O ar ocupou o espaço dentro do copo e impediu que a água entrasse — prova que o ar existe e ocupa espaço.' }
];
tema(a1cie,'cie1_t3_profissoes_cultura').desafios = [
  { question:'Para construir uma escola, trabalham: arquiteto, pedreiro, carpinteiro, pintor, engenheira. Quantos profissionais diferentes participam?', options:['3','4','5','6'], answer:'5', why:'Arquiteto, pedreiro, carpinteiro, pintor e engenheira = 5 profissionais diferentes.' },
  { question:'O Hino de Cabo Verde começa com "Canta, irmão / Canta, meu irmão". Como se chama esse hino?', options:['Hino da Liberdade','Cântico da Liberdade','Canção das Ilhas','Hino do Atlântico'], answer:'Cântico da Liberdade', why:'O Hino Nacional de CV chama-se "Cântico da Liberdade" — deve ser respeitado e entoado com orgulho.' },
  { question:'Quantas ilhas representam as estrelas da bandeira de Cabo Verde?', options:['9','10','11','12'], answer:'10', why:'As 10 estrelas da bandeira representam as 10 ilhas habitadas de Cabo Verde.' },
  { question:'O Batuque é uma tradição cultural de Cabo Verde. Para que serve?', options:['Para treinar desporto','Para celebrar cultura, música e dança tradicionais','Para aprender matemática','Para construir casas'], answer:'Para celebrar cultura, música e dança tradicionais', why:'O Batuque é uma expressão cultural de CV — combina música, dança e voz, transmitida de geração em geração.' }
];

writeJSON(ciePath, cie);
console.log('CIE atualizado.');

// ─── Agora completar POR (desafios adicionados antes, agora write) ──
writeJSON(porPath, por);
console.log('POR atualizado.');

// ─── Verificação final ────────────────────────────────────────────
console.log('\n=== VERIFICAÇÃO FINAL ===');
['portugues','matematica','ciencias'].forEach(name => {
  const j = readJSON('D:/PROJETOS/Estudo Crianças/'+name+'.json');
  const ano = j.anos[0];
  console.log(name.toUpperCase()+' Ano 1:');
  ano.trimestres.forEach((t,i) => {
    t.temas.forEach(top => {
      const ap=(top.aprender||[]).length, pr=(top.praticar||[]).length, de=(top.desafios||[]).length;
      console.log('  T'+(i+1)+' '+top.id+' | ap:'+ap+' pr:'+pr+' de:'+de);
    });
  });
});
