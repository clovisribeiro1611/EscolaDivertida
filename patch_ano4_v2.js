const fs = require('fs');
function readJSON(p) { let s=fs.readFileSync(p,'utf8'); if(s.charCodeAt(0)===0xFEFF)s=s.slice(1); return JSON.parse(s); }
function findTema(json, id) { for(const a of json.anos) for(const t of a.trimestres||[]) for(const tm of t.temas||[]) if(tm.id===id) return tm; return null; }

const por = readJSON('./portugues.json');
const cie = readJSON('./ciencias.json');
const mat = readJSON('./matematica.json');

// ═══════════════════════════════════════════════════════════════════
// FASE 1 — LIMPEZA: remover perguntas mal colocadas
// ═══════════════════════════════════════════════════════════════════

// mat4_t1_multiplos: remover AP "Retas" e PR "Retas"
const t_mult = findTema(mat, 'mat4_t1_multiplos');
t_mult.aprender = t_mult.aprender.filter(c => !c.title.includes('Retas'));
t_mult.praticar = t_mult.praticar.filter(c => !c.question.includes('Retas'));

// cie4_t2_celula_animais: remover PR sobre pesca, turismo, chefe de estado
const t_cel = findTema(cie, 'cie4_t2_celula_animais');
t_cel.praticar = t_cel.praticar.filter(c =>
  !c.question.includes('pesca') && !c.question.includes('turismo') &&
  !c.question.includes('Chefe de Estado'));

// cie4_t3_plantas_ambiente: remover PR "Cachupa"
const t_plantas = findTema(cie, 'cie4_t3_plantas_ambiente');
t_plantas.praticar = t_plantas.praticar.filter(c => !c.question.includes('Cachupa'));

// cie4_t3_experiencias: remover PR "Morabeza"
const t_exp = findTema(cie, 'cie4_t3_experiencias');
t_exp.praticar = t_exp.praticar.filter(c => !c.question.includes('Morabeza'));

// cie4_t2_economia: remover PR sobre Barlavento e organização internacional
const t_eco = findTema(cie, 'cie4_t2_economia');
t_eco.praticar = t_eco.praticar.filter(c =>
  !c.question.includes('BARLAVENTO') && !c.question.includes('organização internacional'));

// cie4_t1_cultura_cv: remover duplicados e perguntas de outras disciplinas
const t_cult = findTema(cie, 'cie4_t1_cultura_cv');
t_cult.praticar = t_cult.praticar.filter(c =>
  !c.question.includes("CAPITAL") &&         // dup de "capital"
  !c.question.includes("habitat") &&          // pertence a celula
  !c.question.includes("DNA") &&              // pertence a celula
  !c.question.includes("foi a independência") // dup de "data da independência"
);

// cie4_t1_cidadania: remover PR sobre alterações climáticas, emigração, coração
const t_cid = findTema(cie, 'cie4_t1_cidadania');
t_cid.praticar = t_cid.praticar.filter(c =>
  !c.question.includes('alterações climáticas') &&
  !c.question.includes('Emigração significa') &&
  !c.question.includes('bombeia'));

// ═══════════════════════════════════════════════════════════════════
// FASE 2 — CONTEÚDO: preencher lacunas (mínimo 4 ap + 8 pr + 3 de)
// ═══════════════════════════════════════════════════════════════════

// ── mat4_t1_multiplos: ap=2→4, pr=5→8, de=1→3 ──────────────────
t_mult.aprender.push(
  { icon:'🔁', title:'Sequências e Regularidades',
    body:'Uma sequência é uma lista de números ou formas que seguem uma regra. Para continuar uma sequência, descobre a regra: o que muda de termo para termo?',
    example:'Ex: 3, 6, 9, 12, __ (regra: +3 → resposta 15)<br>Ex: 100, 90, 80, __ (regra: −10 → resposta 70)',
    trick:'Pergunta: "Quanto se soma ou subtrai de um número para o próximo?" Essa é a regra!' },
  { icon:'🏆', title:'MMC e MDC',
    body:'MMC (Mínimo Múltiplo Comum) = o menor número que é múltiplo de dois números. MDC (Máximo Divisor Comum) = o maior número que divide os dois exactamente.',
    example:'MMC(4,6): múltiplos de 4: 4,8,12… múltiplos de 6: 6,12… MMC=12<br>MDC(12,8): divisores comuns: 1,2,4 → MDC=4',
    trick:'MMC = útil para somar fracções! MDC = útil para simplificar fracções!' }
);
t_mult.praticar.push(
  { question:'Qual é o próximo número na sequência: 5, 10, 15, 20, __?', options:['25','30','22','28'], answer:'25', why:'A regra é +5. 20+5=25!' },
  { question:'Qual é o próximo na sequência: 2, 4, 8, 16, __?', options:['32','20','24','18'], answer:'32', why:'A regra é ×2 (dobrar). 16×2=32!' },
  { question:'Qual é o MMC de 3 e 4?', options:['12','7','3','4'], answer:'12', why:'Múltiplos de 3: 3,6,9,12… Múltiplos de 4: 4,8,12… O menor comum é 12!' }
);
t_mult.desafios.push(
  { question:'A sequência é: 1, 1, 2, 3, 5, 8, __. Qual o próximo?', options:['13','10','11','16'], answer:'13', why:'Cada número é a soma dos dois anteriores! 5+8=13. Chama-se sequência de Fibonacci!' },
  { question:'O MDC de 24 e 36 é...?', options:['12','6','4','8'], answer:'12', why:'Divisores de 24: 1,2,3,4,6,8,12,24. Divisores de 36: 1,2,3,4,6,9,12,18,36. O maior comum é 12!' }
);

// ── mat4_t1_dados: ap=3→4, de=2→3 ───────────────────────────────
const t_dados = findTema(mat, 'mat4_t1_dados');
t_dados.aprender.push(
  { icon:'📉', title:'Mediana e Frequência',
    body:'Mediana = o valor do MEIO quando os dados estão em ordem. Frequência = quantas vezes um valor aparece.',
    example:'Dados: 3, 5, 7, 9, 11 → Mediana = 7 (está no meio)<br>Em {2, 4, 4, 6, 8}: frequência do 4 = 2 vezes',
    trick:'Mediana: ordena os números, conta até ao meio. Se forem pares, a mediana é a média dos dois do centro!' }
);
t_dados.desafios.push(
  { question:'Notas de 5 alunos: 6, 8, 7, 9, 10. Qual é a mediana?', options:['8','7','9','6'], answer:'8', why:'Ordena: 6,7,8,9,10. O valor do meio (3º) é 8. Essa é a mediana!' }
);

// ── mat4_t2_geom_angulos: ap=3→4, de=1→3 ────────────────────────
const t_geom = findTema(mat, 'mat4_t2_geom_angulos');
t_geom.aprender.push(
  { icon:'📐', title:'Área — Retângulo e Triângulo',
    body:'Área mede a superfície de uma figura. Unidade: cm² ou m².\nRetângulo: Área = base × altura\nTriângulo: Área = (base × altura) ÷ 2',
    example:'Retângulo 6cm × 4cm → Área = 6×4 = 24 cm²<br>Triângulo base=8cm, altura=5cm → Área = (8×5)÷2 = 20 cm²',
    trick:'O triângulo é sempre METADE do retângulo com a mesma base e altura! Área triângulo = área retângulo ÷ 2' }
);
t_geom.desafios.push(
  { question:'Um triângulo tem base=10 cm e altura=6 cm. Qual é a sua área?', options:['30 cm²','60 cm²','16 cm²','20 cm²'], answer:'30 cm²', why:'Área do triângulo = (base × altura) ÷ 2 = (10×6)÷2 = 60÷2 = 30 cm²!' },
  { question:'Uma sala tem 8m de comprimento e 5m de largura. Qual é a área?', options:['40 m²','26 m²','13 m²','56 m²'], answer:'40 m²', why:'Área do retângulo = base × altura = 8×5 = 40 m²!' }
);

// ── por4_t1_familia: de=2→3 ──────────────────────────────────────
const t_por4t1 = findTema(por, 'por4_t1_familia');
t_por4t1.desafios.push(
  { question:'Classifica o adjectivo em grau: "Esta é a mais bela flor do jardim."', options:['Superlativo relativo de superioridade','Comparativo de igualdade','Positivo','Superlativo absoluto analítico'], answer:'Superlativo relativo de superioridade', why:'"A mais bela de…" indica o grau mais alto em comparação com um grupo. É superlativo RELATIVO de superioridade!' }
);

// ── cie4_t1_cultura_cv: pr=5→8 ───────────────────────────────────
t_cult.praticar.push(
  { question:'Quais países fazem parte da CPLP?', options:['Portugal, Brasil, Angola, Moçambique, Cabo Verde e outros','Só países africanos','Só Portugal e Brasil','Países da América do Sul'], answer:'Portugal, Brasil, Angola, Moçambique, Cabo Verde e outros', why:'A CPLP — Comunidade dos Países de Língua Portuguesa — inclui 10 membros: Portugal, Brasil, Angola, Moçambique, CV, Guiné-Bissau, S.Tomé, Timor-Leste, Guiné Equatorial e Macau!' },
  { question:'O que significa CEDEAO?', options:['Comunidade Económica dos Estados da África Ocidental','Conferência dos Estados Africanos','Centro de Estudos de África Ocidental','Comunidade Educativa de África'], answer:'Comunidade Económica dos Estados da África Ocidental', why:'CEDEAO foi criada em 1975. Cabo Verde e mais 14 países partilham interesses económicos comuns!' },
  { question:'O que representa o 5 de julho em Cabo Verde?', options:['Dia da Independência Nacional','Dia dos Heróis Nacionais','Dia da Liberdade e Democracia','Dia Internacional das Crianças'], answer:'Dia da Independência Nacional', why:'A 5 de julho de 1975, Cabo Verde tornou-se independente de Portugal após mais de 500 anos de colonização!' }
);

// ── cie4_t1_cidadania: pr=5→8 ────────────────────────────────────
t_cid.praticar.push(
  { question:'Em que ano foram realizadas as primeiras eleições multipartidárias em Cabo Verde?', options:['1991','1975','2000','1985'], answer:'1991', why:'A 13 de janeiro de 1991 realizaram-se as primeiras eleições multipartidárias — por isso o 13 de janeiro é o Dia da Liberdade e da Democracia!' },
  { question:'Qual é a função do Governo em Cabo Verde?', options:['Executar as leis e governar o país','Fazer as leis','Administrar a justiça','Comandar o exército'], answer:'Executar as leis e governar o país', why:'O Governo detém o poder EXECUTIVO — executa as leis feitas pela Assembleia Nacional e conduz a política do país!' },
  { question:'O bem comum numa comunidade significa...', options:['Um bem partilhado por todos do qual todos beneficiam','Os bens materiais de cada pessoa','A riqueza do governo','Os impostos pagos pelos cidadãos'], answer:'Um bem partilhado por todos do qual todos beneficiam', why:'Bem comum = segurança, paz, liberdade, igualdade — bens essenciais para toda a sociedade. Cada um contribui para que todos tenham acesso!' }
);

// ── cie4_t2_economia: pr=4→8 ────────────────────────────────────
t_eco.praticar.push(
  { question:'A agricultura em Cabo Verde pertence a que sector económico?', options:['Sector Primário','Sector Secundário','Sector Terciário','Sector Quaternário'], answer:'Sector Primário', why:'O Sector Primário inclui actividades que extraem directamente da natureza: agricultura, pesca e pecuária!' },
  { question:'Qual é a principal actividade económica de Cabo Verde?', options:['Turismo','Indústria','Mineração','Comércio de cereais'], answer:'Turismo', why:'O turismo é a principal fonte de rendimento de Cabo Verde, beneficiando do clima e praias das ilhas!' },
  { question:'A pesca artesanal distingue-se da pesca industrial porque...', options:['Usa barcos pequenos e técnicas tradicionais','Usa grandes barcos com redes mecanizadas','É feita só em Santiago','Não é permitida em Cabo Verde'], answer:'Usa barcos pequenos e técnicas tradicionais', why:'Pesca artesanal = barcos pequenos, técnicas tradicionais, escala familiar. Pesca industrial = grandes barcos, redes mecanizadas, maior volume!' },
  { question:'O comércio grossista distingue-se do retalhista porque...', options:['Vende em grandes quantidades a outros comerciantes','Vende directamente ao consumidor final','Só vende produtos importados','É feito online'], answer:'Vende em grandes quantidades a outros comerciantes', why:'Grossista vende em quantidade a retalhistas. O retalhista vende a retalho (pequenas quantidades) ao cliente final!' }
);

// ── cie4_t2_celula_animais: ap=3→4, pr=5→8 ──────────────────────
t_cel.aprender.push(
  { icon:'🦴', title:'Aparelho Locomotor e Sistemas do Corpo',
    body:'O aparelho locomotor é formado pelos ossos (esqueleto) e músculos. Os ossos dão forma ao corpo. Os músculos permitem o movimento.\nSistemas importantes: circulatório, respiratório, digestivo, nervoso, excretor.',
    example:'Coração → sistema circulatório (bombeia sangue)<br>Pulmões → sistema respiratório (trocam oxigénio)<br>Estômago → sistema digestivo (digere alimentos)',
    trick:'Lembra: NERVO-RESPIRA-CIRCULA-DIGERE-EXCRETA. Cada sistema tem a sua função no corpo!' }
);
t_cel.praticar.push(
  { question:'Qual é a função principal do esqueleto?', options:['Dar forma ao corpo e proteger órgãos','Produzir sangue apenas','Realizar a digestão','Filtrar o ar'], answer:'Dar forma ao corpo e proteger órgãos', why:'O esqueleto dá suporte e forma ao corpo, e protege órgãos vitais como o cérebro (crânio) e o coração (caixa torácica)!' },
  { question:'Qual sistema é responsável pela respiração?', options:['Sistema respiratório','Sistema circulatório','Sistema nervoso','Sistema excretor'], answer:'Sistema respiratório', why:'O sistema respiratório (pulmões, traqueia, brônquios) é responsável pela troca de oxigénio (O₂) por dióxido de carbono (CO₂)!' },
  { question:'O habitat de um animal é...', options:['O local onde vive e encontra o que precisa','A dieta do animal','A cor do animal','O nome científico'], answer:'O local onde vive e encontra o que precisa', why:'Habitat = o ambiente natural onde o animal vive, encontra alimento, abrigo e reproduz-se. Ex: habitat do tubarão = oceano!' }
);

// ── cie4_t3_plantas_ambiente: pr=6→8 ────────────────────────────
t_plantas.praticar.push(
  { question:'Por que é importante proteger as plantas?', options:['Produzem oxigénio, alimento e são habitat de animais','Só porque são bonitas','Para fazer sombra','Apenas para a decoração'], answer:'Produzem oxigénio, alimento e são habitat de animais', why:'As plantas produzem oxigénio pela fotossíntese, são base da cadeia alimentar e oferecem habitat a muitos animais. São essenciais para a vida!' },
  { question:'O que é o solo fértil?', options:['Solo rico em minerais e matéria orgânica, ideal para plantas','Solo muito seco e arenoso','Solo sem minerais','Solo coberto de cimento'], answer:'Solo rico em minerais e matéria orgânica, ideal para plantas', why:'Solo fértil tem minerais, húmus (matéria orgânica) e água — tudo o que as raízes precisam para nutrir a planta!' }
);

// ── cie4_t3_experiencias: pr=6→8 ────────────────────────────────
t_exp.praticar.push(
  { question:'Qual é a consequência da poluição do ar para a saúde humana?', options:['Doenças respiratórias como asma e bronquite','Melhora a visão','Não tem consequências','Fortalece os pulmões'], answer:'Doenças respiratórias como asma e bronquite', why:'A poluição do ar (gases, partículas) danifica os pulmões e causa doenças respiratórias. Por isso devemos reduzir emissões!' },
  { question:'Qual é a primeira etapa do método científico?', options:['Observar e formular uma pergunta','Tirar conclusões','Fazer a experiência','Publicar resultados'], answer:'Observar e formular uma pergunta', why:'O método científico começa sempre com a OBSERVAÇÃO e uma pergunta. Só depois se formula hipótese, faz a experiência e tira conclusões!' }
);

// ═══════════════════════════════════════════════════════════════════
// GUARDAR
// ═══════════════════════════════════════════════════════════════════
fs.writeFileSync('portugues.json', JSON.stringify(por, null, 2), 'utf8');
fs.writeFileSync('ciencias.json', JSON.stringify(cie, null, 2), 'utf8');
fs.writeFileSync('matematica.json', JSON.stringify(mat, null, 2), 'utf8');

// Verificação final
console.log('=== ANO 4 — CONTAGENS FINAIS ===');
const ids=[
  ['mat',mat,'mat4_t1_numeros_milhao'],['mat',mat,'mat4_t1_multiplos'],['mat',mat,'mat4_t1_dados'],
  ['mat',mat,'mat4_t2_geom_angulos'],['mat',mat,'mat4_t2_fracoes'],['mat',mat,'mat4_t3_solidos_transf'],['mat',mat,'mat4_t3_medidas'],
  ['por',por,'por4_t1_familia'],['por',por,'por4_t2_historias'],['por',por,'por4_t3_cabo_verde'],
  ['cie',cie,'cie4_t1_cidadania'],['cie',cie,'cie4_t1_cultura_cv'],['cie',cie,'cie4_t2_economia'],
  ['cie',cie,'cie4_t2_celula_animais'],['cie',cie,'cie4_t3_plantas_ambiente'],['cie',cie,'cie4_t3_experiencias']
];
let ok=0,warn=0;
for(const [,json,id] of ids){
  const t=findTema(json,id);
  const ap=t.aprender.length, pr=t.praticar.length, de=t.desafios.length;
  const pass=ap>=4&&pr>=8&&de>=3;
  if(pass)ok++;else warn++;
  console.log((pass?'✓':'✗')+' '+id+': ap='+ap+' pr='+pr+' de='+de);
}
console.log('\n'+ok+'/'+ids.length+' tópicos OK');
