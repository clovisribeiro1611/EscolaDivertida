const fs = require('fs');
const path = 'D:/PROJETOS/Estudo Crianças/portugues.json';
const por = JSON.parse(fs.readFileSync(path, 'utf8').replace(/^﻿/, ''));
const a4 = por.anos[3];

// ════════════════════════════════════════════════════════════════
// T1 — Enriquecer Poesia (Narrativa não tem cards de Poesia)
// ════════════════════════════════════════════════════════════════
const poe = a4.trimestres[0].temas.find(t => t.id === 'por4_t1_poesia');

poe.aprender.push(
  {
    icon: '🎵',
    title: 'Ritmo e Musicalidade no Poema',
    body: 'O <b>ritmo</b> é a música do poema — criado pela repetição de sons, pausas e acentos.<br>Elementos do ritmo:<br>• <b>Métrica</b>: número de sílabas em cada verso<br>• <b>Cesura</b>: pausa dentro do verso<br>• <b>Rima</b>: repetição de sons no final dos versos<br>Tipos de rima:<br>• <b>Consoante</b>: vogal + consoante iguais (mar/par)<br>• <b>Toante (assonante)</b>: só as vogais iguais (mar/paz)',
    example: 'Exemplo de rima consoante:<br>"O mar bate na rocha / e a onda se desfaz / o peixe sobe à toca / num instante velaz"<br>Rocha/toca → rima consoante (cha/ca)<br>Desfaz/velaz → rima consoante (az/az)',
    trick: 'Ritmo = música do poema. Conta as sílabas de cada verso — se tiverem todas o mesmo número, o poema tem métrica regular. Rima consoante = sons iguais a partir da vogal tónica.'
  },
  {
    icon: '🌟',
    title: 'Recursos Expressivos — Metáfora, Comparação e Personificação',
    body: 'Os <b>recursos expressivos</b> tornam a linguagem mais rica e expressiva:<br>• <b>Comparação (símile)</b>: compara com "como" ou "tal como" → "Os olhos como estrelas"<br>• <b>Metáfora</b>: comparação sem "como" → "Os seus olhos eram estrelas"<br>• <b>Personificação</b>: dá características humanas a coisas/animais → "O vento sussurrou segredos"<br>• <b>Aliteração</b>: repetição de sons consonânticos → "O rato roeu a rolha"',
    example: 'Comparação: "Forte como um touro"<br>Metáfora: "Ele é um touro" (sem "como")<br>Personificação: "A lua sorriu para nós"<br>Aliteração: "Pedro pedreiro" (P repetido)<br>No poema de Cabo Verde: "A ilha é uma flor no oceano" → metáfora',
    trick: 'Com "como" = comparação. Sem "como" = metáfora. Coisa/animal com ação humana = personificação. Letras repetidas = aliteração. MCPA — Metáfora, Comparação, Personificação, Aliteração.'
  },
  {
    icon: '📝',
    title: 'Como Analisar um Poema',
    body: 'Para analisar um poema, segue estes passos:<br>1. <b>Tema</b>: sobre o que fala o poema?<br>2. <b>Forma</b>: quantas estrofes? Quantos versos por estrofe?<br>3. <b>Rima</b>: existe rima? Qual o esquema? (ABAB, AABB…)<br>4. <b>Recursos expressivos</b>: há metáforas, comparações, personificações?<br>5. <b>Sentimentos</b>: que sentimentos o poema transmite?',
    example: 'Poema de 2 estrofes com 4 versos cada = 2 quadras<br>Esquema de rima ABAB: 1º verso rima com 3º; 2º rima com 4º<br>Esquema AABB: 1º rima com 2º; 3º rima com 4º<br>Tema do poema: identificar a ideia central (saudade, natureza, pátria…)',
    trick: 'Estrofe com 2 versos = dístico. 3 versos = terceto. 4 versos = quadra. Esquema ABAB = rima cruzada. AABB = rima emparelhada. Conta sempre versos e estrofes antes de analisar!'
  }
);

poe.praticar.push(
  { question: 'Qual é o nome da repetição de sons no final dos versos?', options: ['Estrofe', 'Verso', 'Rima', 'Ritmo'], answer: 'Rima', why: 'A rima é a repetição de sons iguais (a partir da vogal tónica) no final dos versos.' },
  { question: '"Os seus olhos são estrelas" é um exemplo de:', options: ['Comparação', 'Metáfora', 'Personificação', 'Aliteração'], answer: 'Metáfora', why: 'Metáfora = comparação sem "como". "Os olhos como estrelas" seria uma comparação; sem o "como" é metáfora.' },
  { question: '"O vento chorou toda a noite." Que recurso expressivo é este?', options: ['Comparação', 'Rima', 'Personificação', 'Aliteração'], answer: 'Personificação', why: 'Chorar é uma acção humana. Atribuída ao vento (que não é humano) = personificação.' },
  { question: 'Uma estrofe com 4 versos chama-se:', options: ['Terceto', 'Dístico', 'Quadra', 'Sextilha'], answer: 'Quadra', why: 'Quadra = estrofe de 4 versos. Dístico = 2. Terceto = 3. Sextilha = 6.' },
  { question: 'Num poema, o esquema de rima ABAB significa:', options: ['Todos os versos rimam entre si', '1º rima com 3º e 2º rima com 4º', '1º rima com 2º e 3º rima com 4º', 'Não há rima'], answer: '1º rima com 3º e 2º rima com 4º', why: 'ABAB = rima cruzada: verso 1 (A) rima com verso 3 (A); verso 2 (B) rima com verso 4 (B).' }
);

poe.desafios.push(
  { question: 'Lê: "A chuva cai mansinha / tal como um beijo de mãe". Que recurso expressivo aparece?', options: ['Metáfora', 'Personificação', 'Comparação', 'Aliteração'], answer: 'Comparação', why: '"tal como" é a palavra que indica comparação. Se fosse "A chuva é um beijo de mãe" (sem "como"), seria metáfora.' },
  { question: 'Num poema de 3 estrofes com 4 versos cada, quantos versos tem o poema?', options: ['7', '9', '12', '16'], answer: '12', why: '3 estrofes × 4 versos = 12 versos no total.' },
  { question: '"Pedro pedreiro pensou no pão." Que recurso é a repetição do som P?', options: ['Rima', 'Metáfora', 'Aliteração', 'Personificação'], answer: 'Aliteração', why: 'Aliteração = repetição da mesma consoante no início de palavras seguidas. Aqui o P repete: Pedro, pedreiro, pensou, pão.' }
);

console.log('T1 Poesia enriquecida: ap:', poe.aprender.length, 'pr:', poe.praticar.length, 'de:', poe.desafios.length);

// ════════════════════════════════════════════════════════════════
// T2 — Subdividir em Teatro/Debate · Textos Funcionais · Gramática
// ════════════════════════════════════════════════════════════════
const t2orig = a4.trimestres[1].temas[0];
const ap2 = t2orig.aprender;   // 14 cards (0-13)
const pr2 = t2orig.praticar;   // 25 perguntas (0-24)
const de2 = t2orig.desafios;   // 7 desafios (0-6)

console.log('\nT2 original: ap:', ap2.length, 'pr:', pr2.length, 'de:', de2.length);

// TEATRO/DEBATE: ap 0,7 | pr 11,12 | de nenhum
// TEXTOS FUNCIONAIS: ap 8,9,10 | pr 13,14,15,16,17,18 | de 4,6
// GRAMÁTICA: ap 1,2,3,4,5,6,11,12,13 | pr 0,1,2,3,4,5,6,7,8,9,10,19,20,21,22,23,24 | de 0,1,2,3,5

const novosT2 = [
  {
    id: 'por4_t2_teatro',
    nome: 'Texto Dramático — Teatro e Debate',
    icone: '🎭',
    aprender: [ap2[0], ap2[7]],
    praticar: [pr2[11], pr2[12]],
    desafios: []
  },
  {
    id: 'por4_t2_textos_funcionais',
    nome: 'Textos Funcionais — Notícia, E-mail e Carta',
    icone: '📧',
    aprender: [ap2[8], ap2[9], ap2[10]],
    praticar: [pr2[13], pr2[14], pr2[15], pr2[16], pr2[17], pr2[18]],
    desafios: [de2[4], de2[6]]
  },
  {
    id: 'por4_t2_gramatica',
    nome: 'Gramática — Morfologia, Sintaxe e Verbos',
    icone: '🔍',
    aprender: [ap2[1], ap2[2], ap2[3], ap2[4], ap2[5], ap2[6], ap2[11], ap2[12], ap2[13]],
    praticar: [pr2[0],pr2[1],pr2[2],pr2[3],pr2[4],pr2[5],pr2[6],pr2[7],pr2[8],pr2[9],pr2[10],pr2[19],pr2[20],pr2[21],pr2[22],pr2[23],pr2[24]],
    desafios: [de2[0], de2[1], de2[2], de2[3], de2[5]]
  }
];

// Verificação T2
const totalAp2 = novosT2.reduce((s,t)=>s+t.aprender.length,0);
const totalPr2 = novosT2.reduce((s,t)=>s+t.praticar.length,0);
const totalDe2 = novosT2.reduce((s,t)=>s+t.desafios.length,0);
console.log('T2 novos totais: ap:', totalAp2, '(esperado 14) | pr:', totalPr2, '(esperado 25) | de:', totalDe2, '(esperado 7)');
if (totalAp2 !== 14 || totalPr2 !== 25 || totalDe2 !== 7) { console.error('ERRO T2'); process.exit(1); }
novosT2.forEach(t => console.log(' ', t.id, '| ap:', t.aprender.length, 'pr:', t.praticar.length, 'de:', t.desafios.length));

// ════════════════════════════════════════════════════════════════
// T3 — Subdividir em Gramática Avançada · Análise e Revisão
// ════════════════════════════════════════════════════════════════
const t3orig = a4.trimestres[2].temas[0];
const ap3 = t3orig.aprender;   // 4 cards (0-3)
const pr3 = t3orig.praticar;   // 18 perguntas (0-17)
const de3 = t3orig.desafios;   // 2 desafios (0-1)

console.log('\nT3 original: ap:', ap3.length, 'pr:', pr3.length, 'de:', de3.length);

// FAMÍLIA DE PALAVRAS E FUTURO: ap 0,1 | pr 0,1,2,3,4,5,6,7,8,16,17 | de 0,1
// ANÁLISE SINTÁTICA E REVISÃO: ap 2,3 | pr 9,10,11,12,13,14,15 | de nenhum

const novosT3 = [
  {
    id: 'por4_t3_gramatica',
    nome: 'Gramática — Família de Palavras e Futuro do Indicativo',
    icone: '🔤',
    aprender: [ap3[0], ap3[1]],
    praticar: [pr3[0],pr3[1],pr3[2],pr3[3],pr3[4],pr3[5],pr3[6],pr3[7],pr3[8],pr3[16],pr3[17]],
    desafios: [de3[0], de3[1]]
  },
  {
    id: 'por4_t3_analise_revisao',
    nome: 'Análise Sintática e Revisão de Tipos de Texto',
    icone: '🔷',
    aprender: [ap3[2], ap3[3]],
    praticar: [pr3[9],pr3[10],pr3[11],pr3[12],pr3[13],pr3[14],pr3[15]],
    desafios: []
  }
];

const totalAp3 = novosT3.reduce((s,t)=>s+t.aprender.length,0);
const totalPr3 = novosT3.reduce((s,t)=>s+t.praticar.length,0);
const totalDe3 = novosT3.reduce((s,t)=>s+t.desafios.length,0);
console.log('T3 novos totais: ap:', totalAp3, '(esperado 4) | pr:', totalPr3, '(esperado 18) | de:', totalDe3, '(esperado 2)');
if (totalAp3 !== 4 || totalPr3 !== 18 || totalDe3 !== 2) { console.error('ERRO T3'); process.exit(1); }
novosT3.forEach(t => console.log(' ', t.id, '| ap:', t.aprender.length, 'pr:', t.praticar.length, 'de:', t.desafios.length));

// ════════════════════════════════════════════════════════════════
// Aplicar alterações
// ════════════════════════════════════════════════════════════════
a4.trimestres[1].temas = novosT2;
a4.trimestres[2].temas = novosT3;

fs.writeFileSync(path, JSON.stringify(por, null, 2), 'utf8');
console.log('\n✅ portugues.json actualizado.');

// Resumo final
console.log('\n=== RESUMO FINAL POR ANO 4 ===');
por.anos[3].trimestres.forEach((t,i)=>{
  console.log('T'+(i+1)+':');
  t.temas.forEach(tm=>console.log('  ',tm.id,'| ap:'+tm.aprender.length,'pr:'+tm.praticar.length,'de:'+tm.desafios.length));
});
