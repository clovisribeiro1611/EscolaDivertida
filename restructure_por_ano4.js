const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'portugues.json');
const raw = fs.readFileSync(filePath, 'utf8').replace(/^﻿/, '');
const db = JSON.parse(raw);

const a4 = db.anos[3];
const oldT1 = a4.trimestres[0].temas[0];
const oldT2 = a4.trimestres[1].temas[0];
const oldT3 = a4.trimestres[2].temas[0];

function pick(arr, indices) { return indices.map(i => arr[i]); }

// ══════════════════════════════════════════════════════════════
// T1 — Família e Histórias — Narrativa, Poesia e Banda Desenhada
// Cobre: Unidade 1 + Unidade 2 do LP4
// ══════════════════════════════════════════════════════════════
const newT1 = {
  nome: "Família e Histórias — Narrativa, Poesia e Banda Desenhada",
  aprender: [
    // Da T1 actual: tudo excepto [2] Texto Dramático (vai para T2)
    ...pick(oldT1.aprender, [0,1,3,4,5,6,7]),
    // Da T2 actual: conteúdo Un1-2
    ...pick(oldT2.aprender, [2,3,6,7,8,9,10]),
    // Da T3 actual: conteúdo Un1 (antónimos + grau)
    ...pick(oldT3.aprender, [2,3,4])
  ],
  praticar: [
    // Da T1: todos os 12
    ...oldT1.praticar,
    // Da T2: pronomes, formas de frase, tipos de frase
    ...pick(oldT2.praticar, [1,6,9,10,11,12,14,18]),
    // Da T3: antónimos, grau, superlativo absoluto
    ...pick(oldT3.praticar, [0,1,3,5,6,7])
  ],
  desafios: [
    // Da T1: todos os 6
    ...oldT1.desafios,
    // Da T2: interrogativa, formas negativas, exclamativa
    ...pick(oldT2.desafios, [1,2,3,4,5]),
    // Da T3: grau comparativo, superlativo absoluto, antónimos
    ...pick(oldT3.desafios, [1,2,4])
  ]
};

// ══════════════════════════════════════════════════════════════
// T2 — Diferenças e Planeta — Teatro, Notícia, E-mail e Carta
// Cobre: Unidade 3 + Unidade 4 do LP4
// ══════════════════════════════════════════════════════════════

const newT2AP_novos = [
  {
    icon: "🎭",
    title: "Debate",
    body: "O DEBATE é uma atividade oral em que vários participantes expressam e discutem opiniões sobre um tema. Cada membro tem um papel: ANIMADOR — coloca questões e estimula a discussão; ELEMENTO DE ELOS — relaciona o texto com experiências pessoais; ILUSTRADOR — apresenta desenhos sobre o tema; PESQUISADOR — dá informações e lê passagens importantes do texto.",
    example: "🎤 Animador: 'O que pensam sobre...?'<br>🤝 Elos: 'Já viveram algo parecido?'<br>🎨 Ilustrador: apresenta desenho<br>📚 Pesquisador: lê passagens do texto",
    trick: "No debate: fala na tua vez, respeita as opiniões dos outros e toma notas das ideias principais!"
  },
  {
    icon: "📧",
    title: "Correio Eletrónico — E-mail",
    body: "O E-MAIL é uma mensagem enviada pela Internet. Estrutura: DE — endereço do remetente; PARA — endereço do destinatário; ASSUNTO — o tema da mensagem (breve); SAUDAÇÃO INICIAL — 'Olá, [nome]!'; CORPO — a mensagem principal; DESPEDIDA — 'Um abraço,' / 'Com amizade,'; ASSINATURA — o teu nome. Usar frases curtas e claras.",
    example: "📤 De: meunome@email.com<br>📬 Para: amigo@email.com<br>📋 Assunto: Regresso às aulas<br>👋 Olá, João!<br>✉️ [mensagem]<br>💙 Um abraço, Maria",
    trick: "E-mail = De + Para + Assunto + Saudação + Corpo + Despedida + Assinatura. O Assunto em poucas palavras!"
  },
  {
    icon: "📰",
    title: "A Notícia — Estrutura",
    body: "A NOTÍCIA é um texto informativo que relata acontecimentos reais. Tem 3 partes: 1) TÍTULO — poucas palavras, letra maior; 2) PRIMEIRO PARÁGRAFO — responde a Quem? O quê? Quando? Onde?; 3) CORPO DA NOTÍCIA — responde a Como? e Porquê? com mais detalhes. A notícia usa a 3ª pessoa (ele, ela, eles) e não inclui a opinião do autor.",
    example: "📌 Título: 'Aluno vence concurso nacional'<br>1º§: Quem? O quê? Quando? Onde?<br>Corpo: Como aconteceu? Porquê?<br>🚫 Sem opinião pessoal — só factos!",
    trick: "Notícia = Título + 1º parágrafo (Quem/O quê/Quando/Onde) + Corpo (Como/Porquê)!"
  },
  {
    icon: "✉️",
    title: "A Carta — Texto Utilitário",
    body: "A CARTA é um texto utilitário (serve uma função prática). Estrutura: 1) LOCAL E DATA — onde e quando foi escrita; 2) VOCATIVO — saudação ao destinatário: 'Querida Ana,' / 'Caro amigo,'; 3) CORPO — a mensagem principal; 4) DESPEDIDA — 'Com amizade,' / 'Abraços,'; 5) ASSINATURA — o nome de quem escreve. Outros textos utilitários: e-mail, bilhete, lista de compras.",
    example: "📍 Mindelo, 15 de março<br>💌 Querida Ana,<br>📝 [corpo]<br>🤗 Com amizade,<br>✍️ Maria",
    trick: "Carta: Local+Data → Vocativo → Corpo → Despedida → Assinatura. São sempre 5 partes!"
  },
  {
    icon: "🔤",
    title: "Verbos ser, estar e ter — Presente",
    body: "Estes verbos são IRREGULARES no presente do indicativo. SER: eu sou, tu és, ele/ela é, nós somos, vós sois, eles/elas são. ESTAR: eu estou, tu estás, ele/ela está, nós estamos, vós estais, eles/elas estão. TER: eu tenho, tu tens, ele/ela tem, nós temos, vós tendes, eles/elas têm. SER = identidade. ESTAR = estado temporário. TER = posse.",
    example: "✅ 'Eu SOU cabo-verdiano.' (identidade — ser)<br>✅ 'Ela ESTÁ feliz hoje.' (estado — estar)<br>✅ 'Nós TEMOS um livro.' (posse — ter)",
    trick: "SER = quem és (permanente). ESTAR = como estás (temporário). TER = o que tens (posse)!"
  },
  {
    icon: "⏮️",
    title: "Pretérito Imperfeito do Indicativo",
    body: "O PRETÉRITO IMPERFEITO indica uma ação contínua ou habitual no passado. Terminações: 1ª conj. (-ar): andava/andavas/andava/andávamos/andáveis/andavam. 2ª conj. (-er): comia/comias/comia/comíamos/comíeis/comiam. 3ª conj. (-ir): partia/partias/partia/partíamos/partíeis/partiam. Muito usado em textos narrativos para descrever o passado.",
    example: "🔄 'A Formiga ANDAVA por ali' — ação contínua no passado<br>📖 'Ele sempre COMIA cedo' — hábito no passado<br>⚠️ 'andava' (imperfeito) ≠ 'andou' (perfeito — ação pontual acabada)",
    trick: "-ar: -ava. -er/-ir: -ia. É o tempo do passado que 'descreve' — o perfeito 'aconteceu'!"
  },
  {
    icon: "🏠",
    title: "Determinantes Possessivos",
    body: "Os DETERMINANTES POSSESSIVOS indicam posse. Concordam em género e número com o NOME que determinam (não com o possuidor!). 1ª p. sing.: meu/minha/meus/minhas. 2ª p. sing.: teu/tua/teus/tuas. 3ª p. sing.: seu/sua/seus/suas. 1ª p. plural: nosso/nossa/nossos/nossas. 2ª p. plural: vosso/vossa/vossos/vossas.",
    example: "📚 'o MEU livro' — masc. sing.<br>📚 'a MINHA mochila' — fem. sing.<br>📚 'os NOSSOS amigos' — masc. plural<br>⚠️ Concorda com o OBJETO, não com quem possui!",
    trick: "O determinante concorda com o NOME: 'a minha mochila' (fem.) porque mochila é feminino!"
  }
];

const newT2PR_novos = [
  // Debate
  { question: "O ANIMADOR num debate tem que função?", options: ["Estimular a discussão com questões abertas","Fazer desenhos sobre o tema","Ler passagens do texto para o grupo","Relacionar o texto com experiências pessoais"], answer: "Estimular a discussão com questões abertas", why: "O animador coloca questões abertas e estimula todos os membros a participar no debate!" },
  { question: "Num debate, qual é a regra mais importante?", options: ["Falar na nossa vez e respeitar as opiniões dos outros","Falar sempre sem parar","Discutir com os colegas","Não deixar outros falar"], answer: "Falar na nossa vez e respeitar as opiniões dos outros", why: "No debate respeitamos as regras de cortesia: escutamos com atenção e falamos na nossa vez!" },
  // E-mail
  { question: "Qual é a parte do e-mail que indica o tema da mensagem?", options: ["Assunto","De","Para","Corpo"], answer: "Assunto", why: "O campo 'Assunto' resume o tema da mensagem em poucas palavras para o destinatário saber do que trata!" },
  { question: "Num e-mail, onde se escreve o endereço da pessoa que recebe a mensagem?", options: ["No campo 'Para'","No campo 'De'","No campo 'Assunto'","Na saudação inicial"], answer: "No campo 'Para'", why: "'Para' = destinatário (quem recebe). 'De' = remetente (quem envia). São sempre os dois primeiros campos!" },
  // Notícia
  { question: "O primeiro parágrafo de uma notícia responde a que questões?", options: ["Quem? O quê? Quando? Onde?","Como? Porquê? Quanto?","Qual? Se? Porque?","Quem? Como? Porquê?"], answer: "Quem? O quê? Quando? Onde?", why: "O 1º parágrafo apresenta o essencial da notícia: as personagens (Quem), o acontecimento (O quê), o tempo (Quando) e o local (Onde)!" },
  { question: "Numa notícia, o CORPO responde a que questões?", options: ["Como? e Porquê?","Quem? e O quê?","Quando? e Onde?","Qual? e Quanto?"], answer: "Como? e Porquê?", why: "O corpo desenvolve os detalhes: Como aconteceu e Porquê. As questões Quem/O quê/Quando/Onde já ficaram no 1º parágrafo!" },
  // Carta
  { question: "Qual das seguintes NÃO é uma parte da carta?", options: ["Tabela de dados","Vocativo","Despedida","Local e data"], answer: "Tabela de dados", why: "A carta tem: Local+Data, Vocativo, Corpo, Despedida e Assinatura. Uma tabela de dados é de texto informativo, não de carta!" },
  { question: "O VOCATIVO numa carta é...", options: ["A saudação ao destinatário: 'Querida Ana,'","A data em que foi escrita","A assinatura do remetente","O corpo com a mensagem principal"], answer: "A saudação ao destinatário: 'Querida Ana,'", why: "O vocativo chama o destinatário pelo nome: 'Querida Ana,' ou 'Caro amigo,' — aparece logo depois do local e data!" },
  // Verbos ser/estar/ter
  { question: "Qual é a forma correta do verbo SER para 'nós'?", options: ["somos","sois","são","estamos"], answer: "somos", why: "Verbo ser: eu sou, tu és, ele é, NÓS SOMOS, vós sois, eles são. É irregular — tens de memorizar!" },
  { question: "Completa: 'Eles ___ muito contentes hoje.' (estado temporário)", options: ["estão","são","têm","foram"], answer: "estão", why: "'Estar' indica estado temporário — como alguém se sente agora. 'Ser' seria para características permanentes!" },
  // Pretérito imperfeito
  { question: "Qual é a forma do verbo ANDAR no pretérito imperfeito para 'ela'?", options: ["andava","andou","anda","andará"], answer: "andava", why: "Verbos em -ar no imperfeito: -ava/-avas/-ava/-ávamos/-áveis/-avam. Ela ANDAVA = ação contínua no passado!" },
  { question: "O pretérito imperfeito indica...", options: ["Uma ação contínua ou habitual no passado","Uma ação que acontecerá no futuro","Uma ação pontual e acabada no passado","Uma ordem"], answer: "Uma ação contínua ou habitual no passado", why: "'Ela comia sempre sopa' (hábito) ou 'O sol brilhava' (ação contínua). O perfeito 'comeu' indica ação acabada!" },
  // Determinantes possessivos
  { question: "Qual é o determinante possessivo correto? 'Eu trouxe ___ mochila.'", options: ["a minha","o meu","a nossa","a tua"], answer: "a minha", why: "'Minha' porque mochila é feminino singular e pertence a 'eu' (1ª pessoa singular)!" },
  { question: "Em 'a nossa escola', o determinante possessivo 'nossa' concorda com...", options: ["O nome 'escola' (fem. sing.)","A pessoa que possui (nós, plural)","O adjetivo seguinte","O verbo da frase"], answer: "O nome 'escola' (fem. sing.)", why: "Os determinantes possessivos concordam sempre com o NOME que determinam, não com o possuidor!" }
];

const newT2DE_novos = [
  { question: "João escreveu uma mensagem com: 'Para: tiago@escola.cv', 'Assunto: Trabalho de grupo', 'Olá Tiago!', corpo de texto, 'Abraços, João'. Que tipo de texto é?", options: ["E-mail / Correio eletrónico","Carta","Notícia","Debate"], answer: "E-mail / Correio eletrónico", why: "Tem os campos 'Para' e 'Assunto' — elementos específicos do e-mail. Uma carta teria local, data e vocativo em vez disso!" },
  { question: "Qual frase usa o pretérito imperfeito corretamente para indicar um hábito passado?", options: ["Ela comia sempre fruta ao pequeno-almoço.","Ela comeu fruta ontem de manhã.","Ela come fruta agora.","Ela comerá fruta amanhã."], answer: "Ela comia sempre fruta ao pequeno-almoço.", why: "'Comia' (imperfeito) = hábito no passado. 'Comeu' (perfeito) = uma vez, no passado. 'Sempre' é um indicador de hábito!" },
  { question: "Lê: 'Jovem Cabo-Verdiana Ganha Prémio Internacional de Matemática'. Esta é que parte da notícia?", options: ["Título","Primeiro parágrafo","Corpo da notícia","Introdução narrativa"], answer: "Título", why: "O título da notícia é escrito em poucas palavras e em letra maior. Resume o assunto principal da notícia!" }
];

const newT2 = {
  nome: "Diferenças e Planeta — Teatro, Notícia, E-mail e Carta",
  aprender: [
    // Da T1 actual: Texto Dramático (Un3)
    ...pick(oldT1.aprender, [2]),
    // Da T2 actual: conteúdo Un3+ (gramática avançada)
    ...pick(oldT2.aprender, [0,1,4,5]),
    // Da T3 actual: sinónimos (Un3) + superlativo relativo (Un4)
    ...pick(oldT3.aprender, [1,5]),
    // Novos 7 cards Un3-4
    ...newT2AP_novos
  ],
  praticar: [
    // Da T2: questões de gramática avançada + sinais pontuação + imperfeito
    ...pick(oldT2.praticar, [0,2,3,4,5,7,8,13,16,17]),
    // Da T3: sinónimo de bonito
    ...pick(oldT3.praticar, [4]),
    // Novos 14 PR para os 7 novos AP
    ...newT2PR_novos
  ],
  desafios: [
    // Da T2: frase complexa
    ...pick(oldT2.desafios, [0]),
    // Da T3: superlativo relativo × 2 + sinónimo
    ...pick(oldT3.desafios, [0,3,5]),
    // Novos 3 DE
    ...newT2DE_novos
  ]
};

// ══════════════════════════════════════════════════════════════
// T3 — À Descoberta do Mundo — Vocabulário e Gramática
// Cobre: Unidade 5 do LP4
// ══════════════════════════════════════════════════════════════

const newT3AP_novos = [
  {
    icon: "🔮",
    title: "Futuro do Indicativo",
    body: "O FUTURO DO INDICATIVO indica ações que ainda vão acontecer. Verbos regulares: infinitivo + -ei/-ás/-á/-emos/-eis/-ão. Exemplos: falarei/falarás/falará/falaremos/falareis/falarão; comerei/comerás/comerá/comeremos/comereis/comerão; partirei/partirás/partirá/partiremos/partireis/partirão. Ser: serei/serás/será... Ter: terei/terás/terá...",
    example: "⏭️ 'Amanhã EU FALAREI com o professor.'<br>⏭️ 'Tu SERÁS um bom aluno.'<br>⏭️ 'Nós TEREMOS uma festa amanhã.'<br>🔑 Infinitivo + ei/ás/á/emos/eis/ão",
    trick: "Futuro = infinitivo + ei/ás/á/emos/eis/ão. Testa com 'amanhã' — se fizer sentido, é futuro!"
  }
];

const newT3PR_novos = [
  { question: "Qual é a forma do verbo FALAR no futuro do indicativo para 'eu'?", options: ["falarei","falei","falava","falavas"], answer: "falarei", why: "Futuro = infinitivo + -ei/-ás/-á/-emos/-eis/-ão. Falar + ei = FALAREI!" },
  { question: "Qual é a forma do verbo SER no futuro do indicativo para 'eles'?", options: ["serão","são","foram","seriam"], answer: "serão", why: "Ser no futuro: serei/serás/será/seremos/sereis/SERÃO. É irregular mas segue as terminações do futuro!" },
  { question: "Qual frase usa o futuro do indicativo?", options: ["Amanhã viajará para São Vicente.","Ontem viajou para São Vicente.","Hoje viaja para São Vicente.","Estava a viajar para São Vicente."], answer: "Amanhã viajará para São Vicente.", why: "'Viajará' = futuro do indicativo (viajar + -á). 'Amanhã' é um indicador de futuro!" }
];

const newT3DE_novos = [
  { question: "Conjuga o verbo COMER no futuro do indicativo para 'nós'.", options: ["comeremos","comemos","comeríamos","comíamos"], answer: "comeremos", why: "Futuro: comer + -emos = COMEREMOS. Não confundir com presente 'comemos' — a diferença está no acento!" },
  { question: "Qual frase está corretamente no futuro do indicativo?", options: ["Em 2030, os cientistas descobrirão novos planetas.","Em 2020, os cientistas descobriram novos planetas.","Os cientistas descobrem novos planetas agora.","Os cientistas estavam a descobrir novos planetas."], answer: "Em 2030, os cientistas descobrirão novos planetas.", why: "'Descobrirão' = futuro (descobrir + -ão). 'Descobriram' = perfeito (passado). 'Em 2030' confirma que é futuro!" }
];

const newT3 = {
  nome: "À Descoberta do Mundo — Vocabulário e Gramática",
  aprender: [
    // Da T3: Família de Palavras e Derivadas (Un5)
    ...pick(oldT3.aprender, [0]),
    // Novo: Futuro do Indicativo (Un5)
    ...newT3AP_novos
  ],
  praticar: [
    // Da T3: prefixos + família de palavras
    ...pick(oldT3.praticar, [2,8,9,10,11]),
    // Da T2: 'Estudarei' = futuro
    ...pick(oldT2.praticar, [15]),
    // Novos 3 PR de futuro
    ...newT3PR_novos
  ],
  desafios: [
    // Novos 2 DE de futuro
    ...newT3DE_novos
  ]
};

// ══════════════════════════════════════════════════════════════
// APLICAR — substituir os 3 trimestres
// ══════════════════════════════════════════════════════════════
a4.trimestres[0].temas[0] = newT1;
a4.trimestres[1].temas[0] = newT2;
a4.trimestres[2].temas[0] = newT3;

fs.writeFileSync(filePath, JSON.stringify(db, null, 2), 'utf8');

// ── RELATÓRIO ────────────────────────────────────────────────
console.log('\n=== RESULTADO FINAL — POR Ano 4 ===\n');
a4.trimestres.forEach((t, ti) => {
  const tema = t.temas[0];
  console.log('T' + (ti+1) + ': ' + tema.nome);
  console.log('  AP=' + tema.aprender.length + '  PR=' + tema.praticar.length + '  DE=' + tema.desafios.length);
  tema.aprender.forEach(c => console.log('  · ' + c.title));
  console.log('');
});
console.log('Gramática: ' + a4.gramatica.length + ' cards (inalterada)\n');
