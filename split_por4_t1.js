const fs = require('fs');
const path = 'D:/PROJETOS/Estudo Crianças/portugues.json';
const por = JSON.parse(fs.readFileSync(path, 'utf8').replace(/^﻿/, ''));
const t1 = por.anos[3].trimestres[0].temas[0];

const ap = t1.aprender;   // 19 cards (índices 0-18)
const pr = t1.praticar;   // 34 perguntas (índices 0-33)
const de = t1.desafios;   // 14 desafios (índices 0-13)

// ── Verificação antes de alterar ──────────────────────────────────
console.log('T1 actual:', t1.id, '| ap:', ap.length, 'pr:', pr.length, 'de:', de.length);
console.log('AP títulos:', ap.map((c,i)=>i+1+'. '+c.title));
console.log('PR títulos (primeiros 5):', pr.slice(0,5).map(c=>c.question.substring(0,50)));

// ── Mapeamento ────────────────────────────────────────────────────
// NARRATIVA: ap índices 0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
const apNar = [ap[0],ap[2],ap[3],ap[4],ap[5],ap[6],ap[7],ap[8],ap[9],ap[10],ap[11],ap[12],ap[13],ap[14],ap[15],ap[16]];
// POESIA: ap índice 1
const apPoe = [ap[1]];
// BD: ap índices 17,18
const apBD  = [ap[17],ap[18]];

// NARRATIVA praticar: índices 0,1,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
const prNar = [pr[0],pr[1],pr[2],pr[4],pr[7],pr[8],pr[9],pr[10],pr[11],pr[12],pr[13],pr[14],pr[15],pr[16],pr[17],pr[18],pr[19],pr[20],pr[21],pr[22],pr[23],pr[24],pr[25]];
// POESIA praticar: índices 3,5,6
const prPoe = [pr[3],pr[5],pr[6]];
// BD praticar: índices 26-33
const prBD  = [pr[26],pr[27],pr[28],pr[29],pr[30],pr[31],pr[32],pr[33]];

// NARRATIVA desafios: índices 0,2,3,4,5,6,7,8,9,10,11,12,13
const deNar = [de[0],de[2],de[3],de[4],de[5],de[6],de[7],de[8],de[9],de[10],de[11],de[12],de[13]];
// POESIA desafios: índice 1
const dePoe = [de[1]];
// BD desafios: nenhum ainda
const deBD  = [];

// ── Verificação dos totais ─────────────────────────────────────────
console.log('\n-- Narrativa --  ap:', apNar.length, 'pr:', prNar.length, 'de:', deNar.length);
console.log('-- Poesia    --  ap:', apPoe.length, 'pr:', prPoe.length, 'de:', dePoe.length);
console.log('-- BD        --  ap:', apBD.length,  'pr:', prBD.length,  'de:', deBD.length);
const totalAp = apNar.length + apPoe.length + apBD.length;
const totalPr = prNar.length + prPoe.length + prBD.length;
const totalDe = deNar.length + dePoe.length + deBD.length;
console.log('Totais: ap:', totalAp, '(esperado 19)', '| pr:', totalPr, '(esperado 34)', '| de:', totalDe, '(esperado 14)');
if (totalAp !== 19 || totalPr !== 34 || totalDe !== 14) {
  console.error('ERRO: totais não batem! Abortar.');
  process.exit(1);
}

// ── Construir os 3 novos temas ────────────────────────────────────
const novosT1 = [
  {
    id: 'por4_t1_narrativa',
    nome: 'Texto Narrativo — Narrador, Personagens e Estrutura',
    icone: '📖',
    aprender: apNar,
    praticar: prNar,
    desafios: deNar
  },
  {
    id: 'por4_t1_poesia',
    nome: 'Texto Poético — Verso, Estrofe e Rima',
    icone: '🎭',
    aprender: apPoe,
    praticar: prPoe,
    desafios: dePoe
  },
  {
    id: 'por4_t1_bd',
    nome: 'Banda Desenhada — Estrutura e Onomatopeias',
    icone: '💬',
    aprender: apBD,
    praticar: prBD,
    desafios: deBD
  }
];

// ── Substituir os temas do T1 ─────────────────────────────────────
por.anos[3].trimestres[0].temas = novosT1;

// ── Verificação final ─────────────────────────────────────────────
const t = por.anos[3].trimestres[0];
console.log('\n=== RESULTADO FINAL ===');
t.temas.forEach(tm => {
  console.log(tm.id, '|', tm.nome);
  console.log('  ap:', tm.aprender.length, '| pr:', tm.praticar.length, '| de:', tm.desafios.length);
});

fs.writeFileSync(path, JSON.stringify(por, null, 2), 'utf8');
console.log('\nEscrito com sucesso.');
