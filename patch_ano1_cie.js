const fs = require('fs');
const path = 'D:/PROJETOS/Estudo Crianças/ciencias.json';
const cie = JSON.parse(fs.readFileSync(path, 'utf8').replace(/^﻿/, ''));
const a1 = cie.anos[0];

function tema(id) {
  for (const t of a1.trimestres) {
    const found = t.temas.find(x => x.id === id);
    if (found) return found;
  }
  throw new Error('Tema não encontrado: ' + id);
}

// ─── T1: Família e Escola ─────────────────────────────────────────────────────
const t1a = tema('cie1_t1_familia_escola');
t1a.aprender = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'A Minha Família',
    body: 'A <b>família</b> é um grupo de pessoas que vivem juntas. Normalmente é formada por pai, mãe e filhos. Pode também ser constituída pela mãe ou pai, irmãos e avós.<br>Os membros da família têm <b>graus de parentesco</b>: pais, avós, tios, primos, irmãos.<br>Na família devemos: respeitar, obedecer, colaborar nas tarefas e cuidar uns dos outros.',
    example: 'Árvore genealógica: avô paterno, avó paterna, avô materno, avó materna → pai e mãe → eu.<br>Tarefas que posso fazer: arrumar a cama, deitar o lixo, colocar a mochila no lugar, ajudar a pôr a mesa.',
    trick: 'Família = pessoas que se amam e vivem juntas. Todos dependemos uns dos outros — colaborar = participar nas tarefas de casa.'
  },
  {
    icon: '🤝',
    title: 'Amigos e Vizinhos',
    body: 'Os <b>amigos</b> conversam, brincam, partilham, ajudam-se e protegem-se.<br>Os <b>vizinhos</b> são as pessoas que vivem perto da nossa casa.<br>Devemos:<br>• Respeitar os outros, independentemente do aspeto, idade ou sexo.<br>• Partilhar e ajudar os colegas.<br>• Cuidar dos animais de estimação com carinho.',
    example: 'Conheces amigos na escola, na rua, no bairro — e os animais de estimação também podem ser amigos!<br>Atitudes corretas com amigos: partilhar, ajudar, brincar juntos, respeitar.',
    trick: 'Amigos = companheiros que se respeitam e ajudam. Vizinhos = pessoas que vivem perto. Devemos ser bons para todos.'
  },
  {
    icon: '🏫',
    title: 'A Minha Escola',
    body: 'A <b>escola</b> é um lugar onde aprendemos muito com ajuda dos professores.<br>Na escola trabalham várias pessoas:<br>• <b>Professor(a)</b> — ensina<br>• <b>Diretor(a)</b> — cuida do funcionamento<br>• <b>Cozinheiro(a)</b> — faz as refeições<br>• <b>Empregado de limpeza</b> — cuida da limpeza<br>• <b>Guarda</b> — cuida da segurança<br><b>A família e a escola</b> colaboram juntas na educação.',
    example: 'Atividades na escola: ler, escrever, pintar, brincar, deitar o lixo no caixote.<br>A família participa: nas reuniões, campanhas de limpeza, eventos escolares.',
    trick: 'Cada pessoa da escola tem a sua função. Direitos do aluno: receber educação, ser respeitado. Deveres: não faltar, respeitar colegas, conservar a escola limpa.'
  }
];
t1a.praticar = [
  { question: 'Quem são os membros de uma família?', options: ['Apenas o pai e a mãe', 'Pai, mãe, filhos, avós e outros parentes', 'Só os irmãos', 'Os colegas da escola'], answer: 'Pai, mãe, filhos, avós e outros parentes', why: 'A família é formada por pai, mãe, filhos, avós — e pode ter diferentes formatos, mas é sempre especial.' },
  { question: 'O que devemos fazer na nossa família?', options: ['Só brincar e não ajudar', 'Respeitar, colaborar nas tarefas e cuidar uns dos outros', 'Fazer apenas o que queremos', 'Não obedecer aos pais'], answer: 'Respeitar, colaborar nas tarefas e cuidar uns dos outros', why: 'O bem-estar da família depende da colaboração de todos os seus membros.' },
  { question: 'Qual é a função do professor na escola?', options: ['Cuidar da limpeza', 'Fazer as refeições', 'Ensinar os alunos', 'Guardar a escola'], answer: 'Ensinar os alunos', why: 'O professor é quem ensina e ajuda os alunos a aprender.' },
  { question: 'O que são os vizinhos?', options: ['As pessoas que vivem longe', 'Os colegas de turma', 'As pessoas que vivem perto da nossa casa', 'Os professores da escola'], answer: 'As pessoas que vivem perto da nossa casa', why: 'Vizinhos são as pessoas que vivem perto — devemos respeitá-los e ter boa relação com eles.' },
  { question: 'Qual é um dever do aluno na escola?', options: ['Faltar sempre que quiser', 'Chegar atrasado todos os dias', 'Respeitar os colegas e conservar a escola limpa', 'Não fazer as tarefas'], answer: 'Respeitar os colegas e conservar a escola limpa', why: 'Um aluno responsável respeita os colegas, não falta, faz as tarefas e mantém a escola limpa.' },
  { question: 'Como a família pode colaborar com a escola?', options: ['Nunca participando nas atividades', 'Participando nas reuniões, campanhas de limpeza e eventos', 'Proibindo os filhos de ir à escola', 'Não falando com os professores'], answer: 'Participando nas reuniões, campanhas de limpeza e eventos', why: 'A família e a escola colaboram juntas na educação — a participação da família ajuda muito.' }
];

// ─── T1: Alimentação e Vestuário ──────────────────────────────────────────────
const t1b = tema('cie1_t1_alimentacao_vestuario');
t1b.aprender = [
  {
    icon: '🍎',
    title: 'A Minha Alimentação Saudável',
    body: 'Uma alimentação <b>saudável</b> é completa, equilibrada e variada.<br>A <b>Roda dos Alimentos</b> mostra-nos o que devemos comer.<br>Regras de alimentação saudável:<br>• Comer alimentos variados a horas certas<br>• Beber muita água e leite<br>• Comer devagar e não em demasia<br>• Lavar bem os alimentos que comemos crus<br>• Lavar as mãos antes e depois de comer<br>• Evitar doces, chocolates e refrigerantes',
    example: 'Refeições do dia:<br>☀️ Pequeno-almoço (de manhã)<br>🍽️ Almoço (ao meio-dia)<br>🍌 Lanche (à tarde)<br>🌙 Jantar (à noite)<br>Higiene dentária: escovar os dentes ao levantar, após as refeições e antes de dormir.',
    trick: 'Alimentação saudável = variada + a horas + com higiene. Escovar os dentes 3× ao dia: ao levantar, após comer e antes de dormir.'
  },
  {
    icon: '🌱',
    title: 'Origem dos Alimentos',
    body: 'Os alimentos têm duas origens principais:<br><b>Origem vegetal</b>: vêm das plantas — milho, banana, alface, tomate, repolho, mandioca, papaeira, cenoura.<br><b>Origem animal</b>: vêm dos animais — carne, peixe, leite, ovos, queijo.<br>Em Cabo Verde temos plantas e animais comestíveis típicos: mangueira, bananeira, papaeira, tamareira, vacas, cabras, galinhas, peixes.',
    example: 'Vegetal: repolho 🥬, papaeira 🍈, milho 🌽, mandioca, banana 🍌<br>Animal: peixe 🐟, carne, ovos 🥚, leite 🥛, queijo<br>Pão = origem vegetal (trigo). Salsicha = origem animal.',
    trick: 'Vegetal = vem de plantas (folhas, frutos, raízes). Animal = vem de animais (carne, leite, ovos). Todos os alimentos têm origem vegetal OU animal.'
  },
  {
    icon: '👕',
    title: 'O Vestuário e a Higiene',
    body: 'O <b>vestuário</b> é importante para a saúde e bem-estar. Protege-nos:<br>• Do frio e do calor<br>• Das poeiras e chuva<br>• Das picadas de insetos<br>Devemos usar vestuário <b>adequado à ocasião</b>:<br>• Escola → uniforme<br>• Frio/vento → casaco e calças<br>• Praia → chapéu e calções<br>• Festa → roupa bonita<br>• Desporto → roupa confortável<br><b>Higiene do vestuário</b>: usar roupa sempre limpa, passada a ferro e costurada.',
    example: 'Faz calor → roupa leve e chapéu<br>Faz frio → casaco e calças quentes<br>Chove → impermeável ou chapéu de chuva<br>Vai à praia → chapéu e protetor solar',
    trick: 'Vestuário adequado = roupa certa para a ocasião e o tempo. Roupa limpa + bem cuidada = higiene do vestuário.'
  }
];
t1b.praticar = [
  { question: 'Quais são as regras de uma alimentação saudável?', options: ['Comer muito doce e beber refrigerantes', 'Comer alimentos variados, a horas, e beber muita água', 'Comer apenas um tipo de alimento', 'Não lavar os alimentos'], answer: 'Comer alimentos variados, a horas, e beber muita água', why: 'Uma alimentação saudável é variada, equilibrada e feita a horas certas, com muita água.' },
  { question: 'O peixe e a carne são alimentos de origem:', options: ['Vegetal', 'Animal', 'Mineral', 'Artificial'], answer: 'Animal', why: 'Peixe e carne vêm de animais — são alimentos de origem animal.' },
  { question: 'A banana e o repolho são alimentos de origem:', options: ['Animal', 'Mineral', 'Vegetal', 'Química'], answer: 'Vegetal', why: 'Banana e repolho vêm de plantas — são alimentos de origem vegetal.' },
  { question: 'Quando devemos escovar os dentes?', options: ['Apenas antes de dormir', 'Apenas de manhã', 'Ao levantar, após as refeições e antes de dormir', 'Uma vez por semana'], answer: 'Ao levantar, após as refeições e antes de dormir', why: 'Para ter dentes saudáveis devemos escovar 3 vezes ao dia: ao levantar, após as refeições e antes de dormir.' },
  { question: 'Que vestuário é mais adequado quando está frio?', options: ['Chapéu e calções', 'Casaco e calças quentes', 'Roupa de banho', 'Uniforme escolar'], answer: 'Casaco e calças quentes', why: 'Quando está frio devemos usar casaco e calças quentes para nos protegermos.' },
  { question: 'Por que é importante lavar as mãos antes de comer?', options: ['Para a roupa ficar limpa', 'Para evitar que germes dos alimentos nos façam mal', 'Porque a professora manda', 'Para os alimentos ficarem mais saborosos'], answer: 'Para evitar que germes dos alimentos nos façam mal', why: 'Lavar as mãos antes de comer evita que germes e bactérias passem para os alimentos e nos deixem doentes.' }
];

// ─── T2: Habitação e Transportes ─────────────────────────────────────────────
const t2a = tema('cie1_t2_habitacao_transportes');
t2a.aprender = [
  {
    icon: '🏠',
    title: 'A Minha Habitação',
    body: 'A <b>casa</b> é o espaço onde vivemos. Tem diferentes <b>compartimentos</b>:<br>• Quarto de dormir • Sala de estar • Cozinha • Casa de banho • Varanda<br>O <b>mobiliário</b> é o conjunto dos móveis: cama (quarto), sofá (sala), fogão e frigorífico (cozinha).<br>Devemos manter a casa <b>limpa e segura</b>: varrer o chão, lavar a louça, arejar os quartos.<br><b>Segurança em casa</b>: cuidado com eletricidade, produtos tóxicos, inflamáveis e corrosivos.',
    example: 'Quarto → cama, roupeiro<br>Cozinha → fogão, frigorífico, louça<br>Sala → sofá, televisão<br>Sinais de perigo: ☠️ Tóxico, 🔥 Inflamável, ⚡ Elétrico',
    trick: 'Compartimentos = divisões da casa. Cada divisão tem o seu mobiliário. Segurança = atenção à eletricidade e produtos perigosos.'
  },
  {
    icon: '🚌',
    title: 'Meios de Transporte',
    body: 'Os <b>meios de transporte</b> servem para nos deslocarmos e transportar mercadorias.<br>Tipos:<br>• <b>Terrestre</b>: autocarro, carro, táxi, bicicleta, mota, comboio, camião<br>• <b>Marítimo</b>: barco, bote<br>• <b>Aéreo</b>: avião, helicóptero<br>Usamos transportes para: ir à escola, ir ao trabalho, ir à praia, ir de uma ilha para outra, transportar mercadorias.<br><b>Regras</b>: manter higiene e segurança nos transportes.',
    example: 'Ir de uma ilha para outra → barco ou avião ✈️🚢<br>Ir à escola → autocarro 🚌 ou a pé 🚶<br>Transportar mercadorias → camião 🚛<br>Urgência → ambulância 🚑',
    trick: 'Terrestre = pela terra. Marítimo = pelo mar. Aéreo = pelo ar. Em CV, para mudar de ilha: barco ou avião.'
  },
  {
    icon: '📡',
    title: 'Meios de Comunicação',
    body: 'Os <b>meios de comunicação</b> permitem comunicar com outras pessoas.<br><b>Pessoal</b> (entre duas pessoas): telefone, telemóvel, carta, computador<br><b>Social</b> (para muitas pessoas ao mesmo tempo): televisão, rádio, jornal, revista<br><b>Regras de segurança</b>:<br>• Manter distância ao ver televisão<br>• Não colocar o volume muito alto<br>• Falar com a família sobre comunicações com desconhecidos',
    example: 'Pessoal: "Ligo ao meu pai pelo telemóvel 📱"<br>Social: "Vejo as notícias na televisão 📺" → informa muitas pessoas ao mesmo tempo<br>Rádio = apenas ouvimos. TV = vemos e ouvimos. Jornal = apenas lemos.',
    trick: 'Pessoal = comunica com UMA pessoa. Social = comunica com MUITAS pessoas ao mesmo tempo. TV + Rádio + Jornal = meios sociais.'
  }
];
t2a.praticar = [
  { question: 'Como se chama cada divisão de uma casa?', options: ['Mobiliário', 'Compartimento', 'Varanda', 'Andamento'], answer: 'Compartimento', why: 'Os compartimentos são as divisões da casa: quarto, sala, cozinha, casa de banho, etc.' },
  { question: 'Qual é um meio de transporte AÉREO?', options: ['Barco', 'Autocarro', 'Avião', 'Bicicleta'], answer: 'Avião', why: 'O avião voa pelo ar — é um meio de transporte aéreo. O barco é marítimo e o autocarro é terrestre.' },
  { question: 'Em Cabo Verde, para ir de uma ilha para outra usa-se:', options: ['Só de bicicleta', 'Barco ou avião', 'Só de autocarro', 'Só a pé'], answer: 'Barco ou avião', why: 'CV é um arquipélago — para ir de ilha em ilha, usa-se o barco (marítimo) ou o avião (aéreo).' },
  { question: 'Qual é um meio de comunicação SOCIAL?', options: ['Telefone', 'Carta', 'Televisão', 'Telemóvel'], answer: 'Televisão', why: 'A televisão transmite informação para muitas pessoas ao mesmo tempo — é um meio de comunicação social.' },
  { question: 'O que devemos fazer para manter a casa segura?', options: ['Deixar os produtos tóxicos ao alcance das crianças', 'Ter cuidado com eletricidade e produtos perigosos', 'Não varrer o chão', 'Não arejar os quartos'], answer: 'Ter cuidado com eletricidade e produtos perigosos', why: 'Em todas as divisões devemos ter cuidado com a eletricidade e produtos tóxicos, inflamáveis e corrosivos.' },
  { question: 'Qual é a diferença entre comunicação pessoal e social?', options: ['São iguais', 'Pessoal comunica com uma pessoa; social comunica com muitas ao mesmo tempo', 'Social é mais barata', 'Pessoal é mais rápida'], answer: 'Pessoal comunica com uma pessoa; social comunica com muitas ao mesmo tempo', why: 'Meios pessoais (telefone, carta) ligam duas pessoas. Meios sociais (TV, rádio, jornal) informam muitas pessoas simultaneamente.' }
];

// ─── T2: Seres Vivos ──────────────────────────────────────────────────────────
const t2b = tema('cie1_t2_seres_vivos');
t2b.aprender = [
  {
    icon: '🌱',
    title: 'O que são Seres Vivos?',
    body: 'Os <b>seres vivos</b> podem ser:<br>• <b>Seres humanos</b> (pessoas)<br>• <b>Animais</b><br>• <b>Plantas</b> (vegetais)<br>Todos os seres vivos partilham as mesmas fases de vida: <b>nascem → crescem → reproduzem → envelhecem → morrem</b>.<br>Precisam de: alimentação, água, espaço, ar.',
    example: 'Uma criança nasce bebé, cresce, torna-se adulta, envelhece e um dia morre.<br>Um gato: nasce → cresce → reproduz (tem filhotes) → envelhece → morre.<br>Uma árvore: germina (semente) → cresce → dá frutos → envelhece → morre.',
    trick: 'Ser vivo = nasce, cresce, reproduz, envelhece, morre. Ser NÃO vivo = pedra, sol, água, ar — não passam por essas fases.'
  },
  {
    icon: '🐓',
    title: 'Animais da Minha Localidade',
    body: 'Em Cabo Verde encontramos animais <b>domésticos</b> e animais <b>selvagens</b>.<br><b>Domésticos</b> (vivem com as pessoas): cão, gato, galinha, vaca, cabra, burro, porco, pato, cavalo.<br><b>Selvagens</b> (vivem na natureza): pássaros, cobras, lagartixas.<br>Todos os animais têm necessidades: comer, beber água, ter espaço limpo e arejado.<br><b>Cuidar dos animais</b>: dar comida e água, espaço limpo, não maltratar.',
    example: '🐄 Vaca → dá leite e carne<br>🐔 Galinha → dá ovos e carne<br>🐟 Peixe → alimento importante em CV<br>🐐 Cabra → dá leite e carne<br>🐕 Cão → animal de companhia',
    trick: 'Doméstico = vive com pessoas. Selvagem = vive na natureza. Todos precisam de cuidados: comida + água + espaço limpo.'
  },
  {
    icon: '🌴',
    title: 'Plantas da Minha Localidade',
    body: 'As <b>plantas</b> são seres vivos. Para crescerem saudáveis precisam de: água, sol, terra fértil, cuidados.<br><b>Plantas típicas de Cabo Verde</b>: acácia, dragoeiro, milho, palmeira, papaeira, mangueira, bananeira, cato (cacto), girassol.<br><b>Utilidades das plantas</b>:<br>1. Fornecem alimento (frutos, folhas, raízes)<br>2. Embelezam casas e jardins<br>3. Dão sombra<br><b>Cuidar das plantas</b>: regar, podar, não estragar, fazer a monda, limpar.',
    example: 'Mangueira 🥭 → dá manga (alimento)<br>Palmeira 🌴 → dá sombra + coco<br>Milho 🌽 → alimento básico em CV<br>Dragoeiro → símbolo de CV, dá sombra e é endémico<br>Cato → vive em zonas áridas de CV',
    trick: 'Plantas = seres vivos que precisam de água + sol + terra. 3 utilidades: alimento + beleza + sombra. Regar, podar, não estragar = cuidar.'
  }
];
t2b.praticar = [
  { question: 'Quais são as fases de vida de todos os seres vivos?', options: ['Nadar, correr, voar, dormir', 'Nascer, crescer, reproduzir, envelhecer, morrer', 'Comer, beber, dormir, brincar', 'Plantar, regar, colher, comer'], answer: 'Nascer, crescer, reproduzir, envelhecer, morrer', why: 'Todos os seres vivos (humanos, animais, plantas) passam pelas mesmas fases: nascem, crescem, reproduzem, envelhecem e morrem.' },
  { question: 'O sol, a água e as pedras são exemplos de:', options: ['Seres vivos', 'Animais domésticos', 'Seres não vivos', 'Plantas'], answer: 'Seres não vivos', why: 'O sol, a água e as pedras não nascem, crescem, nem morrem — são seres não vivos.' },
  { question: 'Qual destes é um animal DOMÉSTICO comum em Cabo Verde?', options: ['Leão', 'Elefante', 'Galinha', 'Crocodilo'], answer: 'Galinha', why: 'A galinha é um animal doméstico muito comum em CV — vive com as pessoas e fornece ovos e carne.' },
  { question: 'O que as plantas precisam para crescer saudáveis?', options: ['Apenas sal', 'Água, sol e terra fértil', 'Apenas sombra e frio', 'Apenas fertilizantes químicos'], answer: 'Água, sol e terra fértil', why: 'As plantas são seres vivos e precisam de água, sol e terra fértil para crescer e ficarem saudáveis.' },
  { question: 'Qual é uma planta típica de Cabo Verde?', options: ['Pinheiro', 'Bambu', 'Papaeira', 'Carvalho'], answer: 'Papaeira', why: 'A papaeira (que dá mamão/papaia) é uma planta típica de Cabo Verde, assim como a mangueira, o milho e o dragoeiro.' },
  { question: 'Como devemos cuidar dos animais domésticos?', options: ['Maltratar quando se portam mal', 'Dar comida e água, espaço limpo e não maltratar', 'Não dar água nunca', 'Deixá-los sem espaço'], answer: 'Dar comida e água, espaço limpo e não maltratar', why: 'Todos os animais têm necessidades: comer, beber, ter espaço limpo. Devemos cuidar deles com carinho.' }
];

// ─── T3: Ambiente ─────────────────────────────────────────────────────────────
const t3a = tema('cie1_t3_ambiente');
t3a.aprender = [
  {
    icon: '🌍',
    title: 'Seres Não Vivos e Paisagens',
    body: 'Os <b>seres não vivos</b> não têm vida, mas fazem parte da natureza:<br>• O <b>ar</b>, a <b>água</b>, as <b>montanhas</b>, o <b>sol</b>, as pedras.<br><b>Tipos de paisagem</b> em Cabo Verde:<br>• <b>Praia</b> — areia, mar<br>• <b>Montanha</b> — elevada, rochosa<br>• <b>Planalto</b> — zona alta e plana<br>• <b>Planície</b> — zona baixa e plana<br>As paisagens têm aspetos físicos variados — não são todas iguais.',
    example: 'Cabo Verde tem: praias bonitas (Santiago, Boa Vista), montanhas (Fogo, S. Antão), planaltos e planícies.<br>Seres não vivos numa paisagem: o sol, as rochas, o mar, o ar.',
    trick: 'Não vivo = não nasce nem morre. Tipos de paisagem em CV: praia, montanha, planalto, planície. Observar a natureza = aprender Ciências!'
  },
  {
    icon: '☀️',
    title: 'O Sol e a Água',
    body: '<b>O Sol</b>: fonte de luz e calor. Nasce de manhã e pousa à noite. É muito importante para a vida na Terra.<br>⚠️ Cuidados com o sol: proteger-se na praia (chapéu, protetor solar) para evitar queimaduras.<br><br><b>A água</b>: maior fonte de vida, muito importante para a saúde.<br>Estados da água: <b>líquido</b> (rio, mar, chuva), <b>sólido</b> (gelo), <b>gasoso</b> (vapor).<br>Propriedades da água pura: incolor (sem cor), inodora (sem cheiro), insípida (sem sabor).<br>Em CV: poupar água é essencial!',
    example: '💧 Líquido = chuva, rio, mar<br>🧊 Sólido = gelo (congelador)<br>♨️ Gasoso = vapor (água a ferver)<br>☀️ Cuidado na praia: chapéu + protetor solar<br>💧 Poupar água: fechar torneira ao escovar os dentes',
    trick: 'Água pura = incolor + inodora + insípida (sem cor, cheiro, sabor). 3 estados: líquido → sólido (frio) → gasoso (calor). CV tem pouca água → poupar!'
  },
  {
    icon: '💨',
    title: 'O Ar e as Experiências',
    body: '<b>O ar</b>: não se vê, mas sente-se. É partilhado por todos — devemos cuidar dele. O ar poluído faz mal à saúde.<br><b>Experiências de Ciências:</b><br>1. <b>Água</b>: água no congelador → gelo (sólido). Água ao sol → evapora (gasoso). Água + sal → dissolve.<br>2. <b>Som</b>: copos com diferentes níveis de água fazem sons diferentes quando tocados com uma colher.<br>3. <b>Ar</b>: lenço dentro de copo virado em água — o lenço não molha porque o ar fica preso no copo.',
    example: 'Experiência do ar: copo virado na água → lenço não molha → o ar não deixa a água entrar!<br>Experiência dos copos: mais água = som mais grave. Menos água = som mais agudo.<br>Ar poluído: fumo dos carros, fábricas → faz mal aos pulmões.',
    trick: 'Ar = invisível mas real (experiência do copo prova isso!). Som = depende do nível de água no copo. Ar poluído = prejudicial. Cuidar o ar = não poluir.'
  }
];
t3a.praticar = [
  { question: 'Qual destes é um ser NÃO vivo?', options: ['Gato', 'Árvore', 'Pedra', 'Mosca'], answer: 'Pedra', why: 'A pedra não nasce, não cresce, não se reproduz, nem morre — é um ser não vivo. O gato, a árvore e a mosca são seres vivos.' },
  { question: 'Quais são as propriedades da água pura?', options: ['Com cor, com cheiro, com sabor', 'Incolor, inodora e insípida', 'Azul, com cheiro a mar, doce', 'Amarela, sem cheiro, amarga'], answer: 'Incolor, inodora e insípida', why: 'A água pura é incolor (sem cor), inodora (sem cheiro) e insípida (sem sabor).' },
  { question: 'Quando a água está no estado SÓLIDO, chamamos-lhe:', options: ['Vapor', 'Gelo', 'Chuva', 'Orvalho'], answer: 'Gelo', why: 'A água no estado sólido é o gelo — forma-se quando a temperatura desce muito (como no congelador).' },
  { question: 'O que é o Sol para a vida na Terra?', options: ['Uma ameaça sem utilidade', 'A fonte de luz e calor, essencial para a vida', 'Uma estrela sem importância', 'Um planeta frio'], answer: 'A fonte de luz e calor, essencial para a vida', why: 'O Sol é a fonte de luz e calor do nosso planeta — sem ele não haveria vida na Terra.' },
  { question: 'Por que devemos poupar água em Cabo Verde?', options: ['Porque a água é muito abundante', 'Porque CV tem muita necessidade de água potável', 'Porque a água é cara', 'Porque é lei poupar água'], answer: 'Porque CV tem muita necessidade de água potável', why: 'Cabo Verde é um país árido com poucos recursos hídricos — poupar água é essencial para toda a população.' },
  { question: 'Na experiência do copo virado na água, o lenço não se molha porque:', options: ['O lenço é impermeável', 'O ar preso no copo não deixa a água entrar', 'A água não é real', 'O copo é especial'], answer: 'O ar preso no copo não deixa a água entrar', why: 'O ar ficou preso dentro do copo e não deixou a água entrar — prova que o ar existe, mesmo sendo invisível.' }
];

// ─── T3: Profissões e Cultura ─────────────────────────────────────────────────
const t3b = tema('cie1_t3_profissoes_cultura');
t3b.aprender = [
  {
    icon: '👩‍⚕️',
    title: 'Atividades Profissionais',
    body: 'A <b>profissão</b> é uma atividade produtiva que as pessoas desempenham na sociedade. Contribui para o bem-estar de cada um e de todos.<br>Exemplos de profissões e funções:<br>• <b>Professor(a)</b> → ensina<br>• <b>Médico(a)</b> → cuida dos doentes<br>• <b>Pescador(a)</b> → pesca<br>• <b>Agricultor(a)</b> → cultiva a terra<br>• <b>Pintor(a)</b> → pinta casas<br>• <b>Arquiteto(a)</b> → desenha edifícios<br>• <b>Carpinteiro(a)</b> → trabalha com madeira<br>• <b>Cozinheiro(a)</b> → faz refeições',
    example: 'Na construção de uma escola trabalham: arquiteto, engenheira, pedreiro, pintor, carpinteiro.<br>Na família podem existir: pescador, cientista, agricultor, professor...<br>Na escola: professor, diretor, cozinheiro, empregado de limpeza, guarda.',
    trick: 'Profissão = atividade que contribui para o bem-estar da sociedade. Cada profissão tem a sua função específica. Todos os trabalhos são importantes!'
  },
  {
    icon: '🎭',
    title: 'Atividades Culturais e Recreativas',
    body: 'As <b>atividades culturais e recreativas</b> fazem parte da nossa cultura e têm datas comemorativas.<br>Em Cabo Verde:<br>• <b>Batuque</b> — dança e música tradicional<br>• <b>Tabanka</b> — tradição cultural<br>• <b>Romaria</b> — procissão religiosa<br>• <b>Carnaval</b> — festa de rua<br>• <b>Natal</b> — festa cristã<br>• <b>Jogos escolares</b><br>Centros culturais: escola, jardim, praia, centro desportivo.<br>Devemos <b>cuidar</b> dos espaços culturais: mantê-los limpos.',
    example: 'Batuque = música e dança de CV com tambores e voz.<br>Tabanka = manifestação cultural tradicional de Santiago.<br>Carnaval = desfiles com máscaras e fanfarras.<br>Natal = missa do galo, jantar em família, presépio.',
    trick: 'CV tem cultura rica: batuque, tabanka, morna, coladeira, carnaval. Espaços culturais: escola, jardim, centro desportivo. Cuidar = manter limpo!'
  },
  {
    icon: '🇨🇻',
    title: 'Símbolos Nacionais de Cabo Verde',
    body: 'Os países identificam-se através dos seus <b>símbolos nacionais</b>.<br><b>A Bandeira de Cabo Verde</b>:<br>• Faixas azuis (o mar e o céu)<br>• Faixas brancas e vermelha (paz e esforço)<br>• 10 estrelas douradas em círculo (as 10 ilhas)<br><b>O Hino Nacional</b> — "Cântico da Liberdade":<br>"Canta, irmão / Canta, meu irmão / Que a liberdade é hino / E o homem a certeza."<br>Todos os países têm a sua bandeira e o seu hino.',
    example: '10 estrelas = as 10 ilhas habitadas de CV<br>Azul = o Atlântico e o céu<br>Hino: "Sentinela de mares e ventos / Entre estrelas e o Atlântico / Entoa o cântico da liberdade"',
    trick: '10 estrelas = 10 ilhas. Bandeira = faixas azuis + brancas + vermelha + estrelas douradas. Hino = "Cântico da Liberdade". Símbolos nacionais = identificam o país.'
  }
];
t3b.praticar = [
  { question: 'O que é uma profissão?', options: ['Um hobby que fazemos por diversão', 'Uma atividade produtiva que contribui para o bem-estar da sociedade', 'Uma brincadeira de crianças', 'Um desporto praticado nas escolas'], answer: 'Uma atividade produtiva que contribui para o bem-estar da sociedade', why: 'A profissão é uma atividade que as pessoas desempenham e que contribui para o bem-estar de todos.' },
  { question: 'Qual é a função do médico?', options: ['Ensinar os alunos', 'Cuidar dos doentes', 'Construir casas', 'Pescar no mar'], answer: 'Cuidar dos doentes', why: 'O médico é o profissional responsável por cuidar da saúde e tratar os doentes.' },
  { question: 'Qual destas é uma dança/música tradicional de Cabo Verde?', options: ['Samba', 'Batuque', 'Flamenco', 'Vals'], answer: 'Batuque', why: 'O batuque é uma dança e música tradicional de Cabo Verde, com grande importância cultural.' },
  { question: 'Quantas estrelas tem a bandeira de Cabo Verde?', options: ['5', '7', '10', '15'], answer: '10', why: 'A bandeira de CV tem 10 estrelas douradas em círculo, que representam as 10 ilhas habitadas do arquipélago.' },
  { question: 'Como se chama o hino nacional de Cabo Verde?', options: ['Hino da Liberdade', 'Cântico da Liberdade', 'Canção do Atlântico', 'Hino das Ilhas'], answer: 'Cântico da Liberdade', why: 'O hino de CV chama-se "Cântico da Liberdade" e começa com "Canta, irmão / Canta, meu irmão...".' },
  { question: 'O que devemos fazer para cuidar dos espaços culturais e recreativos?', options: ['Destruí-los', 'Mantê-los sujos', 'Mantê-los limpos e cuidados', 'Ignorá-los'], answer: 'Mantê-los limpos e cuidados', why: 'Devemos manter os espaços culturais e recreativos limpos e cuidados para que todos possam usufruir deles.' }
];

// ─── Escrever o JSON ─────────────────────────────────────────────────────────
fs.writeFileSync(path, JSON.stringify(cie, null, 2), 'utf8');
console.log('CIE Ano 1 atualizado.');
const cie2 = JSON.parse(fs.readFileSync(path, 'utf8'));
cie2.anos[0].trimestres.forEach((t, i) => {
  t.temas.forEach(top => {
    console.log('T'+(i+1)+' '+top.id+' | ap:'+(top.aprender||[]).length+' pr:'+(top.praticar||[]).length);
  });
});
