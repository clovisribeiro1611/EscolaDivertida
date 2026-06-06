const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ciencias.json');
const raw = fs.readFileSync(filePath, 'utf8').replace(/^﻿/, '');
const db = JSON.parse(raw);

const a4 = db.anos[3];
const [trim1, trim2, trim3] = a4.trimestres;
const relSociais = trim1.temas[0];   // Relações Sociais e Cidadania
const culturaCV  = trim1.temas[1];   // Cultura e Identidade
const atividadesEcon = trim2.temas[0]; // Atividades Económicas
const celulaCorp = trim2.temas[1];   // Célula, Animais, Corpo Humano
const plantas    = trim3.temas[0];   // Plantas e Ambiente
const altClima   = trim3.temas[1];   // Alterações Climáticas

// ── T1 / RELAÇÕES SOCIAIS ─────────────────────────────────────────
relSociais.aprender.push(
  {
    icon: "🌐",
    title: "Organizações Internacionais",
    body: "Organizações internacionais são criadas por países para cooperar em objetivos comuns. As principais: ONU (paz mundial, 1945), OMS (saúde), UNESCO (educação/cultura), UNICEF (crianças), CPLP (países lusófonos), PALOP (países africanos lusófonos), CEDEAO (África Ocidental).",
    example: "🕊️ ONU = paz<br>💊 OMS = saúde<br>📚 UNESCO = educação<br>👧 UNICEF = crianças<br>🌍 CEDEAO = África Ocidental",
    trick: "Cabo Verde é membro da ONU, CPLP, PALOP e CEDEAO!"
  },
  {
    icon: "📅",
    title: "Friso Cronológico e Séculos",
    body: "Século = 100 anos (em numeração romana). Regra: se o ano NÃO termina em 00, soma 1 às centenas. Se termina em 00, os dígitos das centenas já indicam o século. Friso cronológico = acontecimentos ordenados numa linha do tempo.",
    example: "1462 → 14+1 = séc. XV<br>1975 → 19+1 = séc. XX<br>1400 → séc. XIV<br>2009 → séc. XXI",
    trick: "Não termina em 00? Soma 1! Ex: 1975 → 19+1 = séc. XX"
  },
  {
    icon: "🚦",
    title: "Segurança nas Vias de Circulação",
    body: "Para circular em segurança: olhar esquerda→direita→esquerda antes de atravessar; usar sempre a passadeira; andar pela berma; respeitar os semáforos. Semáforo: 🔴 vermelho = parar, 🟡 amarelo = cuidado, 🟢 verde = avançar.",
    example: "🔴 Parar<br>🟡 Cuidado<br>🟢 Avançar<br>🚶 Usar a passadeira",
    trick: "ESQ → DIR → ESQ antes de atravessar!"
  },
  {
    icon: "🚌",
    title: "Segurança nos Meios de Transporte",
    body: "No carro: cinto sempre (frente e trás); crianças <12 anos no banco de trás com cinto; nunca abrir porta em andamento; não colocar braços/cabeça fora. No autocarro de pé: segurar bem nas travagens. Nunca subir nem descer em movimento.",
    example: "✅ Cinto = obrigatório<br>👶 Crianças <12 anos = banco de trás<br>🚫 Não abrir porta em andamento",
    trick: "Cinto SEMPRE — nos bancos da frente E de trás!"
  }
);

relSociais.praticar.push(
  {
    question: "Qual é o objetivo principal da ONU?",
    options: ["Manter a paz e segurança no mundo","Promover o desporto mundial","Organizar eleições","Regular o comércio"],
    answer: "Manter a paz e segurança no mundo",
    why: "ONU foi criada em 1945 após a 2ª Guerra Mundial para garantir a paz mundial!"
  },
  {
    question: "A UNICEF é uma organização que visa cuidar de quem?",
    options: ["Crianças em situação de risco","Atletas olímpicos","Pescadores","Agricultores"],
    answer: "Crianças em situação de risco",
    why: "UNICEF = Fundo das Nações Unidas para a Infância — protege crianças no mundo todo!"
  },
  {
    question: "Cabo Verde faz parte de qual organização da África Ocidental?",
    options: ["CEDEAO","UEFA","MERCOSUL","ASEAN"],
    answer: "CEDEAO",
    why: "CEDEAO = Comunidade Económica dos Estados da África Ocidental, criada em 1975!"
  },
  {
    question: "O ano 1975 corresponde a que século?",
    options: ["Século XX","Século XIX","Século XXI","Século XVIII"],
    answer: "Século XX",
    why: "1975 → 19+1 = 20 = século XX. Não termina em 00, então soma-se 1!"
  },
  {
    question: "O que significa o sinal amarelo num semáforo?",
    options: ["Cuidado/atenção","Avançar","Parar completamente","Acelerar"],
    answer: "Cuidado/atenção",
    why: "Amarelo = atenção! Prepara-te para parar ou avançar com muito cuidado!"
  },
  {
    question: "Onde devem viajar crianças com menos de 12 anos num carro?",
    options: ["No banco de trás com cinto","No banco da frente","Na bagageira","Tanto faz"],
    answer: "No banco de trás com cinto",
    why: "Segurança! Crianças <12 anos e <1,5m devem viajar no banco de trás, com cinto!"
  }
);

relSociais.desafios.push(
  {
    question: "A UNESCO pertence ao grupo de organizações das Nações Unidas. Qual é a sua missão principal?",
    options: ["Promover educação, ciência e cultura para a paz","Combater o terrorismo","Gerir o comércio mundial","Organizar missões militares"],
    answer: "Promover educação, ciência e cultura para a paz",
    why: "UNESCO = Organização das Nações Unidas para a Educação, Ciência e Cultura!"
  },
  {
    question: "O descobrimento de Cabo Verde foi em 1460. A que século pertence?",
    options: ["Século XV","Século XIV","Século XVI","Século XIII"],
    answer: "Século XV",
    why: "1460 → 14+1 = 15 = século XV. Não termina em 00, soma-se 1 às centenas!"
  },
  {
    question: "Ao atravessar uma estrada sem passadeira, qual é a ordem correta de olhar?",
    options: ["Esquerda, direita, esquerda","Direita, esquerda, direita","Só à esquerda","Só à direita"],
    answer: "Esquerda, direita, esquerda",
    why: "Olhar ESQ→DIR→ESQ porque o primeiro carro que ameaça vem da esquerda!"
  }
);

// ── T1 / CULTURA E IDENTIDADE ─────────────────────────────────────
culturaCV.aprender.push(
  {
    icon: "🎵",
    title: "Manifestações Culturais por Ilhas",
    body: "A cultura cabo-verdiana mistura influências africanas e europeias. Géneros musicais: Morna (Patrimônio UNESCO 2019), Coladeira, Batuque, Funaná, Finação. Por ilha: Santiago=Batuque/Finação/Tabanka; S.Vicente=Carnaval/Festival Baía das Gatas/Mindelact; Santo Antão=Festas Juninas (S.João, S.António).",
    example: "🎶 Morna = patrimônio UNESCO<br>🥁 Santiago = Batuque/Finação<br>🎭 S.Vicente = Mindelact<br>🎉 Santo Antão = Festas Juninas",
    trick: "Morna é o símbolo musical de Cabo Verde — UNESCO desde 2019!"
  }
);

culturaCV.praticar.push(
  {
    question: "Qual género musical de Cabo Verde foi declarado Patrimônio Cultural da Humanidade pela UNESCO em 2019?",
    options: ["Morna","Batuque","Funaná","Coladeira"],
    answer: "Morna",
    why: "A Morna foi declarada Patrimônio Cultural Imaterial da Humanidade pela UNESCO a 11 de dezembro de 2019!"
  },
  {
    question: "Qual é uma das manifestações culturais mais conhecidas da ilha de Santiago?",
    options: ["Batuque e Finação","Festival da Baía das Gatas","Festas Juninas","Mindelact"],
    answer: "Batuque e Finação",
    why: "Santiago é a ilha com maior variedade de expressões culturais tradicionais com raízes africanas!"
  },
  {
    question: "Em que ilha se realiza o Festival Internacional de Música da Baía das Gatas?",
    options: ["São Vicente","Santiago","Santo Antão","Fogo"],
    answer: "São Vicente",
    why: "O Festival da Baía das Gatas é um dos maiores eventos culturais de S. Vicente!"
  },
  {
    question: "De que resultado nasceu a cultura cabo-verdiana?",
    options: ["Mistura de culturas africana e europeia","Só cultura africana","Só cultura portuguesa","Cultura asiática e africana"],
    answer: "Mistura de culturas africana e europeia",
    why: "A cultura cabo-verdiana resultou da mistura de africanos e europeus que colonizaram o arquipélago!"
  }
);

culturaCV.desafios.push(
  {
    question: "Qual é a importância da data 11 de dezembro de 2019 para a cultura de Cabo Verde?",
    options: ["A Morna foi declarada Patrimônio Cultural Imaterial da Humanidade","Cabo Verde tornou-se independente","Foi fundada a CPLP","Cidade Velha foi declarada Patrimônio Mundial"],
    answer: "A Morna foi declarada Patrimônio Cultural Imaterial da Humanidade",
    why: "Nessa data a UNESCO declarou a Morna como Patrimônio Cultural Imaterial da Humanidade — marco histórico!"
  },
  {
    question: "O Mindelact é um festival de que tipo de arte, realizado em São Vicente?",
    options: ["Teatro","Música","Cinema","Pintura"],
    answer: "Teatro",
    why: "Mindelact = Festival Internacional de Teatro de Mindelo, São Vicente!"
  }
);

// ── T2 / ATIVIDADES ECONÓMICAS ────────────────────────────────────
atividadesEcon.aprender.push(
  {
    icon: "💻",
    title: "Economia Digital",
    body: "A economia digital é o conjunto de trocas económicas (compra, venda, serviços) realizadas pela internet. Vantagens: comodidade, disponível 24h, sem deslocações. Desvantagens: risco de fraude, não se vê o produto. Exemplos: compras online, pagamentos digitais, bilhetes eletrónicos.",
    example: "🛒 Compras online<br>📱 Pagamentos digitais<br>🎫 Bilhetes eletrónicos<br>🏦 Operações bancárias pela internet",
    trick: "Economia digital = economia pela internet — cuidado com fraudes!"
  },
  {
    icon: "🌱",
    title: "A Agricultura em Cabo Verde",
    body: "Dois tipos: regadio (com irrigação → hortaliças, legumes) e sequeiro (depende da chuva → milho, feijão, batata-doce). Ilhas mais agrícolas: Santiago, Santo Antão, Fogo. Sistema gota a gota aumenta produção. Fogo destaca-se na produção de uva e café.",
    example: "💧 Regadio = tomate, alface, pepino<br>☁️ Sequeiro = milho, feijão, batata-doce<br>🍇 Fogo = uva e café",
    trick: "Regadio usa rega artificial; Sequeiro depende da chuva!"
  },
  {
    icon: "🐄",
    title: "A Pecuária em Cabo Verde",
    body: "Criação e tratamento de animais. Regime extensivo: animais soltos, pastagens naturais. Regime intensivo: estábulo, alimentação artificial, maior produtividade. Em CV é maioritariamente artesanal e familiar. Algumas ilhas já têm produção industrial de aves e suínos.",
    example: "🌿 Extensivo = solto/pasto<br>🏠 Intensivo = estábulo (mais produtivo)<br>🐔 CV: aves e suínos industriais",
    trick: "Extensivo = campo; Intensivo = estábulo — intensivo produz mais!"
  },
  {
    icon: "🛍️",
    title: "O Comércio em Cabo Verde",
    body: "Formal: em lojas e supermercados, paga impostos, segue leis. Informal: nas ruas, feiras e mercados, não paga impostos — promovido principalmente por mulheres, fonte de rendimento para famílias. Também existe comércio externo: importação (comprar ao estrangeiro) e exportação (vender ao estrangeiro).",
    example: "🏪 Formal = supermercado, paga impostos<br>🛒 Informal = venda ambulante, não paga impostos<br>📦 Importação ↔ Exportação",
    trick: "Formal paga impostos e segue lei; Informal não — mas gera emprego!"
  },
  {
    icon: "🏭",
    title: "A Indústria em Cabo Verde",
    body: "CV tem pouca indústria por falta de recursos naturais, mercado pequeno e dificuldades de transporte entre ilhas. Principais indústrias: conservas de peixe, construção civil, medicamentos, calçado, vestuário, tintas, extração de inertes e sal (Ilha do Sal).",
    example: "🐟 Conservas de peixe<br>🧱 Construção civil<br>🩴 Calçado e vestuário<br>🧂 Extração de sal",
    trick: "CV importa muito porque tem pouca indústria própria!"
  }
);

atividadesEcon.praticar.push(
  {
    question: "O que é a economia digital?",
    options: ["Economia baseada em trocas pela internet","Venda de computadores","Troca direta de bens sem dinheiro","Economia de países ricos"],
    answer: "Economia baseada em trocas pela internet",
    why: "Economia digital = internet mudou a forma de comprar e vender produtos e serviços!"
  },
  {
    question: "Qual tipo de agricultura depende das chuvas para produzir?",
    options: ["Agricultura de sequeiro","Agricultura de regadio","Hidroponics","Agricultura intensiva"],
    answer: "Agricultura de sequeiro",
    why: "Sequeiro = só chuva. Principais produtos: milho, feijão e batata-doce!"
  },
  {
    question: "O regime de pecuária em que os animais são criados em estábulo com alimentação artificial chama-se:",
    options: ["Intensivo","Extensivo","Artesanal","Familiar"],
    answer: "Intensivo",
    why: "Intensivo = estábulo + alimentação artificial = maior produtividade!"
  },
  {
    question: "No comércio cabo-verdiano, qual é a diferença entre formal e informal?",
    options: ["Formal paga impostos; informal não paga","Formal é maior; informal é pequeno","Formal é nas ruas; informal em lojas","Não há diferença"],
    answer: "Formal paga impostos; informal não paga",
    why: "Formal = lojas/supermercados + impostos. Informal = ruas/feiras, sem impostos!"
  },
  {
    question: "Qual é uma das principais indústrias de Cabo Verde?",
    options: ["Conservas de peixe","Automóveis","Aço","Petróleo"],
    answer: "Conservas de peixe",
    why: "Sendo arquipélago, a pesca e as conservas de peixe são das principais indústrias de CV!"
  },
  {
    question: "Quais são as ilhas cabo-verdianas com maior vocação agrícola?",
    options: ["Santiago, Santo Antão e Fogo","Sal, Boa Vista e Maio","São Vicente e São Nicolau","Brava e Fogo"],
    answer: "Santiago, Santo Antão e Fogo",
    why: "Estas três ilhas têm mais água e melhores solos para a agricultura!"
  }
);

atividadesEcon.desafios.push(
  {
    question: "Qual é uma desvantagem da economia digital que devemos ter em conta?",
    options: ["Risco de fraude por não conhecer o vendedor","É muito lenta","Só funciona de dia","Precisa de moeda física"],
    answer: "Risco de fraude por não conhecer o vendedor",
    why: "Na internet não sabemos quem é o vendedor — é preciso muito cuidado para não ser enganado!"
  },
  {
    question: "Na ilha do Fogo, qual produto agrícola é exportado?",
    options: ["Café","Milho","Bananas","Arroz"],
    answer: "Café",
    why: "A ilha do Fogo destaca-se pela produção de uva (para vinho) e café (para exportação)!"
  },
  {
    question: "Por que razão a indústria em Cabo Verde é pouco desenvolvida?",
    options: ["Falta de recursos naturais e mercado pequeno","Falta de tecnologia","Excesso de trabalhadores","Por ser rico em petróleo"],
    answer: "Falta de recursos naturais e mercado pequeno",
    why: "CV tem ~500 mil habitantes, é arquipélago (dificulta transportes) e tem poucos recursos naturais!"
  }
);

// ── T2 / CÉLULA, ANIMAIS E CORPO HUMANO ──────────────────────────
celulaCorp.aprender.push(
  {
    icon: "🐾",
    title: "Habitat dos Animais",
    body: "Habitat = local onde um animal vive e encontra alimento, abrigo e companheiros para reprodução. Tipos: natural (criado pela natureza) e artificial (criado pelo homem, ex: jardim zoológico). Animais: aquáticos (vivem na água), terrestres (na terra) ou aéreos (voam). Vertebrados têm coluna vertebral; invertebrados não têm.",
    example: "🐟 Aquático = peixe<br>🦁 Terrestre = leão<br>🦅 Aéreo = águia<br>🏛️ Zoo = habitat artificial",
    trick: "Vertebrados TÊM coluna; Invertebrados NÃO TÊM coluna!"
  },
  {
    icon: "❤️",
    title: "Funções Vitais",
    body: "Funções vitais = processos essenciais à vida do organismo. 1) Digestão: transforma alimentos em nutrientes (boca→intestino). 2) Respiração: troca O₂/CO₂ (nariz→pulmões). 3) Circulação: distribui nutrientes e O₂ (coração→vasos). 4) Excreção: filtra impurezas do sangue (rins→urina). 5) Reprodução: cria novos seres. 6) Sistema Nervoso: controla tudo (cérebro+nervos).",
    example: "🍽️ Digestão<br>🌬️ Respiração<br>❤️ Circulação<br>🫘 Excreção (rins)<br>👶 Reprodução<br>🧠 Sistema Nervoso",
    trick: "DR.CER = Digestão, Respiração, Circulação, Excreção, Reprodução!"
  }
);

celulaCorp.praticar.push(
  {
    question: "O que é o 'habitat' de um animal?",
    options: ["Local onde vive e encontra alimento e abrigo","A comida que come","O nome científico do animal","O grupo a que pertence"],
    answer: "Local onde vive e encontra alimento e abrigo",
    why: "Habitat = onde o animal vive, encontra alimento, abrigo e companheiros para reproduzir!"
  },
  {
    question: "Um jardim zoológico é um exemplo de habitat:",
    options: ["Artificial","Natural","Aquático","Subterrâneo"],
    answer: "Artificial",
    why: "Zoo é criado pelo homem para imitar o habitat natural dos animais — é artificial!"
  },
  {
    question: "Qual função vital é responsável por filtrar as impurezas do sangue?",
    options: ["Excreção","Digestão","Circulação","Reprodução"],
    answer: "Excreção",
    why: "Excreção = os rins filtram o sangue e eliminam impurezas pela urina!"
  },
  {
    question: "Qual órgão é o 'motor' da circulação sanguínea?",
    options: ["Coração","Pulmão","Rim","Fígado"],
    answer: "Coração",
    why: "O coração bombeia o sangue para todo o corpo através dos vasos sanguíneos!"
  }
);

celulaCorp.desafios.push(
  {
    question: "Um peixe vive no oceano. Esse é um exemplo de habitat:",
    options: ["Natural aquático","Artificial terrestre","Artificial aéreo","Natural terrestre"],
    answer: "Natural aquático",
    why: "O oceano é criado pela natureza (natural) e o peixe vive na água (aquático)!"
  },
  {
    question: "O sistema nervoso controla e coordena as atividades do corpo. Quais são os seus principais componentes?",
    options: ["Cérebro, medula espinal e nervos","Coração e vasos sanguíneos","Rins e bexiga","Pulmões e brônquios"],
    answer: "Cérebro, medula espinal e nervos",
    why: "Sistema nervoso = cérebro + medula espinal + nervos — controla tudo no corpo!"
  }
);

// ── T3 / PLANTAS E AMBIENTE ───────────────────────────────────────
plantas.aprender.push(
  {
    icon: "🌿",
    title: "Conservação da Natureza",
    body: "Em Cabo Verde existem espécies em risco de extinção: tartaruga comum (Caretta caretta), garça-vermelha, dragoeiro. Causas de extinção: destruição de habitats, poluição, espécies invasoras, caça e pesca excessiva. Medidas de proteção: áreas protegidas, não destruir florestas, denunciar maus-tratos, limpeza de praias e mares.",
    example: "🐢 Tartaruga = em perigo<br>🌵 Dragoeiro = planta endémica em risco<br>🦅 Garça-vermelha = risco crítico<br>🌊 Conservar o mar",
    trick: "CV abriga uma das maiores populações de tartarugas marinhas do mundo!"
  }
);

plantas.praticar.push(
  {
    question: "Qual planta endémica de Cabo Verde está em risco de extinção?",
    options: ["Dragoeiro","Bananeira","Mangueira","Coqueiro"],
    answer: "Dragoeiro",
    why: "O Dragoeiro (Dracaena draco) é uma planta endémica de Cabo Verde em risco de extinção!"
  },
  {
    question: "Qual é uma das causas de extinção de espécies animais e vegetais?",
    options: ["Destruição do habitat natural","Falta de água do mar","Excesso de sol","Aumento da temperatura do mar"],
    answer: "Destruição do habitat natural",
    why: "Quando destruímos florestas e habitats, os animais e plantas perdem onde viver e morrem!"
  },
  {
    question: "Qual medida contribui para a conservação das espécies em risco?",
    options: ["Criar áreas protegidas","Desflorestar mais","Aumentar a pesca","Construir mais fábricas"],
    answer: "Criar áreas protegidas",
    why: "Áreas protegidas proíbem atividades que destroem habitats e protegem espécies raras!"
  },
  {
    question: "Cabo Verde é importante para qual espécie marinha em risco?",
    options: ["Tartaruga marinha","Baleia azul","Tubarão-branco","Golfinho"],
    answer: "Tartaruga marinha",
    why: "CV abriga uma das maiores populações de tartarugas marinhas nidificantes do mundo!"
  }
);

plantas.desafios.push(
  {
    question: "Quais são as principais causas da extinção de espécies em Cabo Verde?",
    options: ["Poluição, destruição de habitats e espécies invasoras","Excesso de chuva","Falta de pescado","Demasiadas áreas protegidas"],
    answer: "Poluição, destruição de habitats e espécies invasoras",
    why: "Cientistas confirmam que estas são as principais ameaças à biodiversidade em CV e no mundo!"
  },
  {
    question: "A tartaruga-de-couro (Dermochelys coriacea) encontrada em Cabo Verde está em situação de:",
    options: ["Criticamente em perigo","Extinção total","Espécie comum","Sem risco"],
    answer: "Criticamente em perigo",
    why: "Em CV, a tartaruga-de-couro e a tartaruga-carey estão criticamente em perigo de extinção!"
  }
);

// ── T3 / ALTERAÇÕES CLIMÁTICAS — adicionar mais PR/DE ─────────────
altClima.praticar.push(
  {
    question: "O que é o efeito de estufa?",
    options: ["Acumulação de calor na Terra por gases poluentes","Refrescamento da atmosfera","Chuvas ácidas nos oceanos","Destruição do solo"],
    answer: "Acumulação de calor na Terra por gases poluentes",
    why: "Gases poluentes formam uma camada que retém o calor — a Terra aquece: efeito de estufa!"
  },
  {
    question: "Qual prática ajuda a reduzir a degradação ambiental?",
    options: ["Reciclar e usar energias renováveis","Aumentar o uso de combustíveis fósseis","Desmatar mais áreas","Deitar lixo no mar"],
    answer: "Reciclar e usar energias renováveis",
    why: "Reciclar reduz lixo; energias renováveis (sol, vento, água) não poluem a atmosfera!"
  },
  {
    question: "A camada de ozono protege a Terra de que tipo de radiação?",
    options: ["Raios ultravioleta","Raios infravermelhos","Ventos solares","Ondas de rádio"],
    answer: "Raios ultravioleta",
    why: "A camada de ozono absorve grande parte dos raios UV, protegendo todos os seres vivos!"
  },
  {
    question: "O que são chuvas ácidas?",
    options: ["Chuvas formadas pela mistura de gases poluidores com a água das nuvens","Chuvas muito fortes","Chuvas com muito sal","Neve derretida"],
    answer: "Chuvas formadas pela mistura de gases poluidores com a água das nuvens",
    why: "Gases dos veículos e fábricas reagem com vapor de água → chuvas ácidas que danificam plantas e edifícios!"
  }
);

altClima.desafios.push(
  {
    question: "Que tipo de energia devemos usar para combater as alterações climáticas?",
    options: ["Energias renováveis (sol, vento, água)","Carvão","Petróleo","Gás natural"],
    answer: "Energias renováveis (sol, vento, água)",
    why: "Energias renováveis não libertam CO₂ na atmosfera — são a solução para travar o aquecimento global!"
  },
  {
    question: "Como a qualidade da água pode ser afetada pelas atividades humanas?",
    options: ["Adubos e pesticidas infiltram-se no solo e contaminam águas","A água não pode ser contaminada","Só a água do mar é afetada","As fábricas purificam a água"],
    answer: "Adubos e pesticidas infiltram-se no solo e contaminam águas",
    why: "Adubos em excesso + pesticidas → infiltração no solo → contaminação de águas subterrâneas!"
  }
);

// ── GUARDAR ───────────────────────────────────────────────────────
const output = JSON.stringify(db, null, 2);
fs.writeFileSync(filePath, output, 'utf8');

// Verificar contagens finais
console.log('=== RESULTADO FINAL — CIE Ano 4 ===');
a4.trimestres.forEach(t => {
  t.temas.forEach(tema => {
    const ap = tema.aprender.length, pr = tema.praticar.length, de = tema.desafios.length;
    console.log(tema.nome + ': ap=' + ap + ' pr=' + pr + ' de=' + de + ' (total=' + (ap+pr+de) + ')');
  });
});
