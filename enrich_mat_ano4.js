const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'matematica.json');
const raw = fs.readFileSync(filePath, 'utf8').replace(/^﻿/, '');
const db = JSON.parse(raw);

const a4 = db.anos[3];
const [trim1, trim2, trim3] = a4.trimestres;
const numeros   = trim1.temas[0]; // Números até ao Milhão e Operações
const multiplos = trim1.temas[1]; // Múltiplos, Divisores e Regularidades
const otd       = trim1.temas[2]; // Organização e Tratamento de Dados
const geo       = trim2.temas[0]; // Geometria
const fracoes   = trim2.temas[1]; // Frações e Decimais
const solidos   = trim3.temas[0]; // Sólidos
const volume    = trim3.temas[1]; // Volume, Capacidade, Tempo, Dinheiro

// ── T1/NÚMEROS — 2 AP novos + 4 PR ───────────────────────────────
numeros.aprender.push(
  {
    icon: "✖️",
    title: "Multiplicação — Algoritmo e Estratégias",
    body: "Multiplicação: produto de dois fatores. Propriedades: comutativa (a×b = b×a), associativa, distributiva. Para números de 2 dígitos: multiplicar por dezenas e unidades separadamente e somar. Verificar: dividendo = quociente × divisor + resto.",
    example: "24 × 13:<br>24 × 3 = 72<br>24 × 10 = 240<br>72 + 240 = 312<br>✅ Verificar: 312 ÷ 13 = 24",
    trick: "Multiplica unidades, depois dezenas, soma os resultados!"
  },
  {
    icon: "➗",
    title: "Divisão — Algoritmo e Tipos",
    body: "Divisão: repartir em partes iguais. Termos: dividendo ÷ divisor = quociente (resto). Divisão exata: resto = 0. Divisão não exata: resto > 0 (e sempre menor que o divisor). Propriedade: dividendo = quociente × divisor + resto.",
    example: "786 ÷ 6 = 131 (resto 0) → exata<br>17 ÷ 5 = 3 (resto 2) → não exata<br>Verificar: 3×5+2 = 17 ✅",
    trick: "Divisão exata: resto=0. Não exata: resto>0 mas SEMPRE menor que o divisor!"
  }
);

numeros.praticar.push(
  {
    question: "Qual é o resultado de 45 × 12?",
    options: ["540","440","504","560"],
    answer: "540",
    why: "45×12: 45×2=90, 45×10=450, 90+450=540!"
  },
  {
    question: "Numa divisão, o dividendo é 56, o divisor é 8. Qual é o quociente?",
    options: ["7","6","8","9"],
    answer: "7",
    why: "56 ÷ 8 = 7 (7×8=56, resto=0 → divisão exata)!"
  },
  {
    question: "A divisão 29 ÷ 4 é exata ou não exata?",
    options: ["Não exata (resto=1)","Exata (resto=0)","Exata (resto=4)","Não exata (resto=4)"],
    answer: "Não exata (resto=1)",
    why: "29 ÷ 4 = 7 com resto 1. O resto (1) é menor que o divisor (4) → não exata!"
  },
  {
    question: "Qual é a propriedade que diz que 6 × 9 = 9 × 6?",
    options: ["Comutativa","Associativa","Distributiva","Nula"],
    answer: "Comutativa",
    why: "Propriedade comutativa: a×b = b×a — a ordem dos fatores não muda o produto!"
  }
);

// ── T1/MÚLTIPLOS — 4 PR + 3 DE ───────────────────────────────────
multiplos.praticar.push(
  {
    question: "Qual é o próximo número na sequência: 3, 6, 12, 24, __?",
    options: ["48","36","30","42"],
    answer: "48",
    why: "Cada termo é multiplicado por 2: 24×2=48!"
  },
  {
    question: "O número 36 é divisível por qual dos seguintes?",
    options: ["Todos: 2, 3, 4, 6, 9","Só por 2","Só por 3","Só por 9"],
    answer: "Todos: 2, 3, 4, 6, 9",
    why: "36: par (÷2), 3+6=9 (÷3), 36÷4=9 (÷4), 36÷6=6 (÷6), 36÷9=4 (÷9)!"
  },
  {
    question: "O 3.º ordinal escreve-se:",
    options: ["3.º (terceiro)","3 (três)","III (romano)","3x (triplicado)"],
    answer: "3.º (terceiro)",
    why: "Ordinais indicam ordem/posição: 1.º primeiro, 2.º segundo, 3.º terceiro..."
  },
  {
    question: "Qual é o MDC (Máximo Divisor Comum) de 12 e 18?",
    options: ["6","3","9","12"],
    answer: "6",
    why: "Divisores de 12: 1,2,3,4,6,12. Divisores de 18: 1,2,3,6,9,18. MDC = 6!"
  }
);

multiplos.desafios.push(
  {
    question: "Uma sequência começa em 2 e cada termo é o dobro do anterior: 2, 4, 8, 16, 32. Qual é o 6.º termo?",
    options: ["64","48","56","72"],
    answer: "64",
    why: "32 × 2 = 64. A regularidade é ×2 a cada passo!"
  },
  {
    question: "Qual é o MMC (Mínimo Múltiplo Comum) de 4 e 6?",
    options: ["12","8","24","6"],
    answer: "12",
    why: "Múltiplos de 4: 4,8,12,16... Múltiplos de 6: 6,12,18... MMC = 12!"
  },
  {
    question: "Numa corrida, o João chegou em 5.º lugar. Como se escreve o ordinal por extenso?",
    options: ["Quinto","Cinco","Cinquenta","Qüinto"],
    answer: "Quinto",
    why: "5.º = quinto. Ordinais: 1.º=primeiro, 2.º=segundo, 3.º=terceiro, 4.º=quarto, 5.º=quinto!"
  }
);

// ── T1/OTD — 4 PR + 3 DE ─────────────────────────────────────────
otd.praticar.push(
  {
    question: "Num pictograma, 🌟 = 5 alunos. Se há 6 estrelas, quantos alunos são?",
    options: ["30","25","35","20"],
    answer: "30",
    why: "6 estrelas × 5 alunos por estrela = 30 alunos!"
  },
  {
    question: "Numa tabela: Segunda=12, Terça=8, Quarta=15, Quinta=8. A MODA é:",
    options: ["8","12","15","10"],
    answer: "8",
    why: "Moda = valor que aparece mais vezes. O 8 aparece 2 vezes (terça e quinta)!"
  },
  {
    question: "Num gráfico de barras com valores 10, 20, 15, 20, 10 — qual é a MODA?",
    options: ["10 e 20 (ambas)","15","10","20"],
    answer: "10 e 20 (ambas)",
    why: "Quando dois valores aparecem com a mesma frequência máxima, ambos são moda (bimodal)!"
  },
  {
    question: "Uma tabela de frequências mostra quantas vezes cada valor aparece. O que indica a frequência 5 para o valor 7?",
    options: ["O valor 7 aparece 5 vezes","Há 5 tabelas","O valor 5 aparece 7 vezes","7 é o 5.º valor"],
    answer: "O valor 7 aparece 5 vezes",
    why: "Frequência = número de vezes que o valor aparece no conjunto de dados!"
  }
);

otd.desafios.push(
  {
    question: "Notas de 7 alunos: 6, 8, 8, 9, 7, 8, 10. Qual é a MODA?",
    options: ["8","9","7","10"],
    answer: "8",
    why: "8 aparece 3 vezes (mais do que qualquer outro) → Moda = 8!"
  },
  {
    question: "Num gráfico de barras: Peixe=40, Carne=25, Frango=40, Tofu=10. Quantos alunos preferem peixe ou carne?",
    options: ["65","50","80","70"],
    answer: "65",
    why: "Peixe (40) + Carne (25) = 65 alunos!"
  },
  {
    question: "Num conjunto de dados, se todos os valores aparecem o mesmo número de vezes, a moda é:",
    options: ["Não existe moda","O valor mais alto","A média","O valor do meio"],
    answer: "Não existe moda",
    why: "Moda só existe quando um (ou mais) valor aparece mais vezes que os outros!"
  }
);

// ── T2/GEOMETRIA — 2 AP + 4 PR + 3 DE ───────────────────────────
geo.aprender.push(
  {
    icon: "📐",
    title: "Retas Paralelas e Perpendiculares",
    body: "Retas paralelas: nunca se cruzam, mantêm sempre a mesma distância entre si. Retas perpendiculares: cruzam-se formando 4 ângulos retos (90°). Retas concorrentes: cruzam-se em qualquer ângulo (que não seja 90°).",
    example: "= = Paralelas (nunca se cruzam)<br>⊥ Perpendiculares (cruzam a 90°)<br>✕ Concorrentes (cruzam em outro ângulo)",
    trick: "Paralelas = nunca se encontram. Perpendiculares = cruzam em ângulo reto (90°)!"
  },
  {
    icon: "📏",
    title: "Ângulos — Tipos e Classificação",
    body: "Ângulo = região entre dois raios com a mesma origem (vértice). Tipos: Reto = exatamente 90°. Agudo = menor que 90°. Obtuso = maior que 90° e menor que 180°. Raso = exatamente 180° (meia volta). Nulo = 0°.",
    example: "⬜ Reto = 90°<br>🔺 Agudo < 90°<br>🔻 Obtuso: 90° < x < 180°<br>— Raso = 180°",
    trick: "Agudo = AFIADO (pequeno). Obtuso = GRANDE (maior que reto)!"
  }
);

geo.praticar.push(
  {
    question: "Duas retas que nunca se cruzam, mantendo sempre a mesma distância, chamam-se:",
    options: ["Paralelas","Perpendiculares","Concorrentes","Simétricas"],
    answer: "Paralelas",
    why: "Paralelas = nunca se cruzam, mantêm sempre a mesma distância entre si!"
  },
  {
    question: "Quando duas retas se cruzam formando 4 ângulos retos (90°), dizem-se:",
    options: ["Perpendiculares","Paralelas","Concorrentes","Opostas"],
    answer: "Perpendiculares",
    why: "Perpendiculares cruzam-se sempre a 90°, formando 4 ângulos retos!"
  },
  {
    question: "Um ângulo de 45° classifica-se como:",
    options: ["Agudo","Reto","Obtuso","Raso"],
    answer: "Agudo",
    why: "45° < 90° → ângulo agudo! (Agudo = menor que 90°)"
  },
  {
    question: "Um ângulo de 120° classifica-se como:",
    options: ["Obtuso","Agudo","Reto","Raso"],
    answer: "Obtuso",
    why: "120° está entre 90° e 180° → ângulo obtuso!"
  }
);

geo.desafios.push(
  {
    question: "Os lados opostos de um retângulo são exemplos de retas:",
    options: ["Paralelas","Perpendiculares","Concorrentes","Oblíquas"],
    answer: "Paralelas",
    why: "Os lados opostos de um retângulo nunca se cruzam, mantêm sempre a mesma distância → paralelas!"
  },
  {
    question: "Num triângulo retângulo, um dos ângulos é reto (90°). Como se classificam os outros dois?",
    options: ["Ambos agudos","Ambos obtusos","Um agudo um obtuso","Ambos retos"],
    answer: "Ambos agudos",
    why: "Soma dos ângulos de um triângulo = 180°. Se um é 90°, os outros dois somam 90° → ambos menores que 90° → agudos!"
  },
  {
    question: "Qual é o ângulo formado pelas paredes e o chão de uma sala?",
    options: ["Reto (90°)","Agudo","Obtuso","Raso"],
    answer: "Reto (90°)",
    why: "As paredes são perpendiculares ao chão — formam ângulos retos de 90°!"
  }
);

// ── T2/FRAÇÕES — 4 PR + 3 DE ─────────────────────────────────────
fracoes.praticar.push(
  {
    question: "Converte 3/4 em número decimal:",
    options: ["0,75","0,34","0,43","0,25"],
    answer: "0,75",
    why: "3 ÷ 4 = 0,75. Ou: 3/4 = 75/100 = 0,75!"
  },
  {
    question: "1/3 de 90 é igual a:",
    options: ["30","33","45","27"],
    answer: "30",
    why: "1/3 de 90 = 90 ÷ 3 = 30!"
  },
  {
    question: "Qual fração é equivalente a 2/4?",
    options: ["1/2","2/3","3/4","1/4"],
    answer: "1/2",
    why: "2/4 = 1/2 (simplificar: dividir numerador e denominador por 2)!"
  },
  {
    question: "0,5 metros equivalem a quantos centímetros?",
    options: ["50 cm","5 cm","500 cm","0,05 cm"],
    answer: "50 cm",
    why: "0,5 m × 100 = 50 cm. (1 m = 100 cm)"
  }
);

fracoes.desafios.push(
  {
    question: "Uma turma tem 28 alunos. 1/4 ficou em casa. Quantos vieram à escola?",
    options: ["21","7","14","24"],
    answer: "21",
    why: "1/4 de 28 = 7 faltaram. 28 - 7 = 21 vieram à escola!"
  },
  {
    question: "Ordena do menor para o maior: 1/2, 1/4, 3/4, 1/3",
    options: ["1/4, 1/3, 1/2, 3/4","1/2, 1/3, 1/4, 3/4","3/4, 1/2, 1/3, 1/4","1/4, 1/2, 1/3, 3/4"],
    answer: "1/4, 1/3, 1/2, 3/4",
    why: "0,25 < 0,33 < 0,5 < 0,75. Converter para decimais ajuda a comparar!"
  },
  {
    question: "A Ana tem 2,5 m de fita. Usa 0,75 m. Quanto sobra?",
    options: ["1,75 m","1,25 m","2,25 m","1,50 m"],
    answer: "1,75 m",
    why: "2,5 - 0,75 = 1,75 m. Subtrair decimais: alinhar a vírgula!"
  }
);

// ── T3/SÓLIDOS — 4 PR + 3 DE ─────────────────────────────────────
solidos.praticar.push(
  {
    question: "Qual sólido geométrico tem 2 bases circulares e uma superfície lateral curva?",
    options: ["Cilindro","Cone","Esfera","Prisma"],
    answer: "Cilindro",
    why: "Cilindro = 2 bases circulares + superfície lateral curva. Como uma lata!"
  },
  {
    question: "Uma pirâmide de base quadrada tem quantas faces?",
    options: ["5","4","6","8"],
    answer: "5",
    why: "Pirâmide quadrangular: 1 base quadrada + 4 faces triangulares = 5 faces!"
  },
  {
    question: "A planificação de um cubo resulta em quantos quadrados?",
    options: ["6","4","8","12"],
    answer: "6",
    why: "O cubo tem 6 faces quadradas. A planificação mostra todos os 6 quadrados abertos!"
  },
  {
    question: "Qual figura não tem vértices nem arestas?",
    options: ["Esfera","Cubo","Cilindro","Pirâmide"],
    answer: "Esfera",
    why: "A esfera tem apenas superfície curva contínua — sem vértices, arestas ou faces planas!"
  }
);

solidos.desafios.push(
  {
    question: "Um prisma triangular tem quantas arestas?",
    options: ["9","6","12","8"],
    answer: "9",
    why: "Prisma triangular: 2 bases com 3 lados cada (6) + 3 arestas laterais = 9 arestas!"
  },
  {
    question: "Qual é a diferença entre um prisma e uma pirâmide?",
    options: ["Prisma tem 2 bases iguais; pirâmide tem 1 base e vértice no topo","São iguais","Prisma tem vértice; pirâmide não","Pirâmide tem 2 bases; prisma tem 1"],
    answer: "Prisma tem 2 bases iguais; pirâmide tem 1 base e vértice no topo",
    why: "Prisma = 2 bases paralelas e iguais. Pirâmide = 1 base + faces triangulares que convergem num vértice!"
  },
  {
    question: "Um cubo tem 12 arestas. Quantas arestas tem um paralelepípedo (caixa retangular)?",
    options: ["12","8","6","16"],
    answer: "12",
    why: "Paralelepípedo (caixa retangular) também tem 12 arestas, como o cubo — é um caso especial de prisma!"
  }
);

// ── T3/VOLUME — 1 AP + 4 PR + 2 DE ──────────────────────────────
volume.aprender.push(
  {
    icon: "📦",
    title: "Volume — Conceito e Unidades",
    body: "Volume = espaço ocupado por um objeto. Unidade principal: metro cúbico (m³). Submúltiplos: decímetro cúbico (dm³) = 1000 cm³, centímetro cúbico (cm³). 1 m³ = 1000 dm³. Curiosidade: 1 dm³ = 1 litro (usado na capacidade).",
    example: "📦 Volume = espaço que ocupa<br>m³ > dm³ > cm³<br>1 m³ = 1000 dm³<br>1 dm³ = 1000 cm³<br>💧 1 dm³ = 1 litro",
    trick: "1 dm³ = 1 litro = 1000 cm³. Fácil de lembrar!"
  }
);

volume.praticar.push(
  {
    question: "O que é o volume de um objeto?",
    options: ["O espaço que o objeto ocupa","O peso do objeto","A altura do objeto","A área da base"],
    answer: "O espaço que o objeto ocupa",
    why: "Volume = espaço que o objeto ocupa no mundo, medido em unidades cúbicas (m³, dm³, cm³)!"
  },
  {
    question: "1 m³ equivale a quantos dm³?",
    options: ["1000 dm³","100 dm³","10 dm³","10 000 dm³"],
    answer: "1000 dm³",
    why: "1 m³ = 1000 dm³. E 1 dm³ = 1000 cm³. Tudo em múltiplos de 1000!"
  },
  {
    question: "Uma caixa tem 2 m de comprimento, 1 m de largura e 1 m de altura. Qual é o volume?",
    options: ["2 m³","4 m³","3 m³","1 m³"],
    answer: "2 m³",
    why: "Volume = comprimento × largura × altura = 2×1×1 = 2 m³!"
  },
  {
    question: "1 dm³ é igual a quantos litros?",
    options: ["1 litro","10 litros","100 litros","0,1 litros"],
    answer: "1 litro",
    why: "1 dm³ = 1 litro! Esta é uma equivalência muito importante entre volume e capacidade!"
  }
);

volume.desafios.push(
  {
    question: "Uma piscina tem 5 m de comprimento, 3 m de largura e 2 m de profundidade. Qual o volume?",
    options: ["30 m³","15 m³","25 m³","10 m³"],
    answer: "30 m³",
    why: "Volume = 5×3×2 = 30 m³. Multiplicar as três dimensões!"
  },
  {
    question: "Um aquário tem 50 litros de água. Quantos dm³ tem?",
    options: ["50 dm³","5 dm³","500 dm³","0,5 dm³"],
    answer: "50 dm³",
    why: "1 litro = 1 dm³. Portanto 50 litros = 50 dm³!"
  }
);

// ── GUARDAR ───────────────────────────────────────────────────────
const output = JSON.stringify(db, null, 2);
fs.writeFileSync(filePath, output, 'utf8');

console.log('=== RESULTADO FINAL — MAT Ano 4 ===');
a4.trimestres.forEach(t => {
  t.temas.forEach(tema => {
    const ap = tema.aprender.length, pr = tema.praticar.length, de = tema.desafios.length;
    console.log(tema.nome + ': ap=' + ap + ' pr=' + pr + ' de=' + de + ' (total=' + (ap+pr+de) + ')');
  });
});
