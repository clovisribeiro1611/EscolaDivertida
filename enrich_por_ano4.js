const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'portugues.json');
const raw = fs.readFileSync(filePath, 'utf8').replace(/^﻿/, '');
const db = JSON.parse(raw);

const a4 = db.anos[3];
const t1 = a4.trimestres[0].temas[0]; // Minha Querida Família — T. Poético e Narrativo
const t3 = a4.trimestres[2].temas[0]; // Cabo Verde — Cultura e Identidade

// ── T1 — NOVOS CARDS AP ───────────────────────────────────────────
t1.aprender.push(
  {
    icon: "📖",
    title: "Narrador e Ponto de Vista",
    body: "O NARRADOR é a voz que conta a história — não é o autor! Tipos: Narrador participante (1ª pessoa — faz parte da história: 'Eu fui...') e Narrador observador (3ª pessoa — conta de fora: 'Ele foi...'). O AUTOR é a pessoa real que escreveu o texto.",
    example: "👤 'Eu corri muito' = narrador participante (1ª pessoa)<br>👁️ 'Ela correu muito' = narrador observador (3ª pessoa)<br>✍️ Autor = pessoa real que escreveu",
    trick: "Narrador conta a história. Autor escreve o livro. São pessoas diferentes!"
  },
  {
    icon: "👥",
    title: "Personagens — Características",
    body: "Personagem principal (protagonista) = a mais importante, aparece mais vezes. Personagens secundárias = apoiam a história. Características físicas = aparência (alto, loiro, velho...). Características psicológicas = personalidade, sentimentos e comportamento (corajoso, triste, generoso...).",
    example: "👑 Principal = protagonista (mais importante)<br>🔵 Secundária = apoia a história<br>👀 Física = aparência<br>💛 Psicológica = personalidade",
    trick: "Físicas = como se VÊ. Psicológicas = como SE COMPORTA ou SENTE!"
  },
  {
    icon: "⏱️",
    title: "Tempo e Espaço na Narrativa",
    body: "TEMPO = quando acontece a história. Indicadores de tempo: quando, enquanto, de seguida, no dia seguinte, de manhã, então, logo... ESPAÇO = onde acontece. Indicadores de espaço: ao lado de, dentro, fora, atrás de, sobre, na floresta, em casa... Ambos respondem às perguntas QUANDO? e ONDE?",
    example: "⏰ 'De manhã, o João saiu...' = indicador de tempo<br>🏡 'Na floresta escura...' = indicador de espaço<br>🔍 Quando? = tempo | Onde? = espaço",
    trick: "QUANDO? = tempo. ONDE? = espaço. Simples assim!"
  },
  {
    icon: "📋",
    title: "Estrutura da Narrativa",
    body: "Todo texto narrativo tem 3 partes: 1) INTRODUÇÃO — apresenta Quem? O quê? Quando? Onde? 2) DESENVOLVIMENTO — apresenta o problema/conflito e a sua resolução. 3) CONCLUSÃO — apresenta a situação final (como ficou tudo). As ações seguem uma sequência lógica.",
    example: "🟢 Introdução: Quem? Onde? Quando?<br>🟡 Desenvolvimento: Problema → Resolução<br>🔴 Conclusão: Como ficou tudo",
    trick: "Intro = Apresenta. Desenvolvimento = Problema. Conclusão = Final!"
  }
);

// ── T1 — NOVOS CARDS PR ───────────────────────────────────────────
t1.praticar.push(
  {
    question: "Num texto narrativo, como se chama a voz que conta a história?",
    options: ["Narrador","Autor","Personagem","Leitor"],
    answer: "Narrador",
    why: "O narrador conta a história. O autor é quem a escreveu. São coisas diferentes!"
  },
  {
    question: "Qual é a diferença entre características físicas e psicológicas de uma personagem?",
    options: ["Físicas = aparência; psicológicas = personalidade","Físicas = nome; psicológicas = roupa","Físicas = família; psicológicas = escola","Não há diferença"],
    answer: "Físicas = aparência; psicológicas = personalidade",
    why: "Físicas descrevem como a personagem parece (alto, loiro...). Psicológicas descrevem como ela é por dentro (corajosa, triste...)!"
  },
  {
    question: "'No dia seguinte, a Maria acordou cedo.' Que elemento narrativo é indicado aqui?",
    options: ["Tempo","Espaço","Personagem","Narrador"],
    answer: "Tempo",
    why: "'No dia seguinte' é um indicador de tempo — responde à pergunta QUANDO!"
  },
  {
    question: "A INTRODUÇÃO de um texto narrativo responde a que perguntas?",
    options: ["Quem? O quê? Quando? Onde?","Como? Por quê? Quanto?","Qual? Quando? Porém?","Onde? Se? Porque?"],
    answer: "Quem? O quê? Quando? Onde?",
    why: "A introdução apresenta as personagens, a ação, o tempo e o espaço da história!"
  }
);

// ── T1 — NOVOS CARDS DE ───────────────────────────────────────────
t1.desafios.push(
  {
    question: "No texto: 'Era uma vez um menino corajoso que vivia numa ilha pequena.' O narrador é participante ou observador?",
    options: ["Observador — usa a 3ª pessoa","Participante — usa a 1ª pessoa","Não tem narrador","É o autor"],
    answer: "Observador — usa a 3ª pessoa",
    why: "'Era uma vez um menino...' — o narrador conta de fora, usa 3ª pessoa = narrador observador!"
  },
  {
    question: "Num texto narrativo, em que parte aparece o problema ou conflito da história?",
    options: ["No desenvolvimento","Na introdução","Na conclusão","No título"],
    answer: "No desenvolvimento",
    why: "Desenvolvimento = problema/conflito + resolução. Introdução apresenta, conclusão termina!"
  },
  {
    question: "'Na floresta escura, junto ao rio...' — que elemento narrativo é apresentado nesta frase?",
    options: ["Espaço","Tempo","Personagem","Conflito"],
    answer: "Espaço",
    why: "'Na floresta... junto ao rio' = indicadores de espaço — respondem à pergunta ONDE!"
  }
);

// ── T3 — NOVOS CARDS PR (família de palavras, derivadas) ──────────
t3.praticar.push(
  {
    question: "Qual é a palavra da mesma família que 'mar'?",
    options: ["Marinheiro","Maré","Marítimo","Todas as anteriores"],
    answer: "Todas as anteriores",
    why: "Marinheiro, maré e marítimo derivam da mesma raiz 'mar' — são da mesma família!"
  },
  {
    question: "'Desventura' — qual é o prefixo e o que significa?",
    options: ["Des- = negação/contrário","In- = dentro","Re- = repetição","Sub- = abaixo"],
    answer: "Des- = negação/contrário",
    why: "Des- indica negação ou afastamento. Desventura = falta de ventura (sorte)!"
  },
  {
    question: "Qual é a palavra derivada de 'terra' com sufixo?",
    options: ["Terreno","Aterra","Enterrar","Terreiro"],
    answer: "Terreno",
    why: "Terreno = terra + sufixo -eno. É uma palavra derivada por sufixação!"
  },
  {
    question: "Qual das seguintes palavras pertence à família de 'sol'?",
    options: ["Solar","Soluço","Solo","Sólido"],
    answer: "Solar",
    why: "Solar deriva de 'sol' (energia solar, sistema solar). As outras têm raízes diferentes!"
  }
);

// ── GUARDAR ───────────────────────────────────────────────────────
const output = JSON.stringify(db, null, 2);
fs.writeFileSync(filePath, output, 'utf8');

console.log('=== RESULTADO FINAL — POR Ano 4 ===');
a4.trimestres.forEach(t => {
  t.temas.forEach(tema => {
    const ap = tema.aprender.length, pr = tema.praticar.length, de = tema.desafios.length;
    console.log(tema.nome + ': ap=' + ap + ' pr=' + pr + ' de=' + de);
  });
});
console.log('Gramática:', a4.gramatica.length, 'cards');
