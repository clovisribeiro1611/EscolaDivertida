const fs = require('fs');
const path = 'D:/PROJETOS/Estudo Crianças/portugues.json';
const por = JSON.parse(fs.readFileSync(path, 'utf8').replace(/^﻿/, ''));
const a1 = por.anos[0];

function tema(id) {
  for (const t of a1.trimestres) {
    const found = t.temas.find(x => x.id === id);
    if (found) return found;
  }
  throw new Error('Tema não encontrado: ' + id);
}

// ─── T1: Vogais e Sílabas (me-ni-na, me-ni-no) ───────────────────────────────
const t1a = tema('por1_t1_vogais_silabas');
t1a.aprender = [
  {
    icon: '🅰️',
    title: 'As 5 Vogais',
    body: 'As <b>vogais</b> são letras que se pronunciam sozinhas, com a boca aberta:<br><b>a · e · i · o · u</b><br>Podem ser maiúsculas (A, E, I, O, U) ou minúsculas (a, e, i, o, u).<br>Todas as sílabas têm pelo menos uma vogal.<br>As <b>consoantes</b> são as outras letras: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.',
    example: 'Palavras com vogais:<br>A: <b>a</b>na, m<b>a</b>ça, s<b>a</b>pato<br>E: d<b>e</b>do, m<b>e</b>nino<br>I: l<b>i</b>vro, f<b>i</b>lho<br>O: b<b>o</b>ta, p<b>o</b>rco<br>U: <b>u</b>va, esc<b>u</b>la',
    trick: 'A E I O U = as 5 vogais. Dica: "A Ema Ia Ouvir Uvas" — cada palavra começa com uma vogal! Todas as sílabas precisam de pelo menos uma vogal.'
  },
  {
    icon: '✂️',
    title: 'Dividir em Sílabas — m+v e n+v',
    body: 'Uma <b>sílaba</b> é uma parte de uma palavra que se pronuncia de uma vez.<br>Para dividir: bate palmas, uma por sílaba.<br><b>Quadro silábico m+v</b>: ma · me · mi · mo · mu<br><b>Quadro silábico n+v</b>: na · ne · ni · no · nu<br>Exemplo: <b>me-ni-na</b> → 3 sílabas (me, ni, na)<br>Exemplo: <b>me-ni-no</b> → 3 sílabas (me, ni, no)',
    example: 'me-ni-na → 3 sílabas ✋✋✋<br>me-ni-no → 3 sílabas ✋✋✋<br>ma-ci-ço → 3 sílabas<br>na-ve-ta → 3 sílabas<br>mi-lho → 2 sílabas ✋✋',
    trick: 'Bate palmas para contar sílabas! m+vogal = ma, me, mi, mo, mu. n+vogal = na, ne, ni, no, nu. Cada "bate" = uma sílaba.'
  },
  {
    icon: '📖',
    title: 'Ler e Escrever com m e n',
    body: 'Com as vogais e as consoantes m e n formamos muitas palavras.<br>Palavras com m: <b>mama</b>, <b>memo</b>, <b>mimi</b>, <b>mimo</b><br>Palavras com n: <b>nana</b>, <b>nene</b><br>Palavras misturadas: <b>menina</b>, <b>menino</b>, <b>nome</b>, <b>mano</b>, <b>navio</b><br>Lê sempre da <b>esquerda para a direita</b>!',
    example: 'ma + ma = mama<br>me + ni + na = menina<br>no + me = nome<br>ma + no = mano<br>na + ve = nave',
    trick: 'Para ler: vê a primeira sílaba, depois a segunda... junta-as! Para escrever: ouve as sílabas e escreve-as uma a uma.'
  }
];
t1a.praticar = [
  { question: 'Quantas vogais existem em português?', options: ['3', '4', '5', '6'], answer: '5', why: 'As vogais são: a, e, i, o, u — 5 vogais no total.' },
  { question: 'Quantas sílabas tem a palavra "menina"?', options: ['1', '2', '3', '4'], answer: '3', why: '"me-ni-na" = 3 sílabas. Bate palmas: me (1), ni (2), na (3).' },
  { question: 'Qual destas palavras tem a sílaba "mi"?', options: ['mano', 'nene', 'mimo', 'nana'], answer: 'mimo', why: '"mimo" = mi-mo. A sílaba "mi" está na primeira sílaba desta palavra.' },
  { question: 'Como se divide a palavra "nome" em sílabas?', options: ['n-o-m-e', 'no-me', 'nom-e', 'n-ome'], answer: 'no-me', why: '"nome" tem 2 sílabas: "no" e "me". Bate palmas: no (1), me (2).' },
  { question: 'Qual das seguintes é uma VOGAL?', options: ['m', 'n', 'u', 'd'], answer: 'u', why: 'As vogais são: a, e, i, o, u. O "u" é uma vogal. As letras m, n, d são consoantes.' }
];

// ─── T1: Ditongos e letra V, D ────────────────────────────────────────────────
const t1b = tema('por1_t1_ditongos');
t1b.aprender = [
  {
    icon: '🍇',
    title: 'Ditongos — Duas Vogais Juntas',
    body: 'Um <b>ditongo</b> é quando duas vogais aparecem na mesma sílaba e se pronunciam juntas.<br>Ditongos mais comuns:<br>• <b>ai</b> (pai, mais) · <b>ei</b> (leite, rei) · <b>oi</b> (boi, coisa)<br>• <b>au</b> (mau, causa) · <b>eu</b> (meu, céu) · <b>ou</b> (pou-co, vou)<br>• <b>ia</b> (dia, família) · <b>ua</b> (lua, qual) · <b>ue</b> (que, doce)<br>Na palavra "uva" → u-va: o <b>u</b> fica sozinho na 1.ª sílaba.',
    example: 'pai → <u>ai</u> (ditongo)<br>rei → <u>ei</u> (ditongo)<br>boi → <u>oi</u> (ditongo)<br>meu → <u>eu</u> (ditongo)<br>vou → <u>ou</u> (ditongo)<br>lua → lu-a (não é ditongo — estão em sílabas separadas)',
    trick: 'Ditongo = 2 vogais na MESMA sílaba. Se cada vogal vai para uma sílaba diferente, não é ditongo (ex: vi-a-gem = 3 sílabas).'
  },
  {
    icon: '🦶',
    title: 'Sílabas com d e v — dedo, uva',
    body: '<b>Quadro silábico d+v</b>: da · de · di · do · du<br><b>Quadro silábico v+v</b>: va · ve · vi · vo · vu<br>Palavra-chave: <b>de-do</b> (2 sílabas: de + do)<br>Palavra-chave: <b>u-va</b> (2 sílabas: u + va)<br>Com estas sílabas formamos: dado, dedo, divo, vida, vela, dove, modo, dono, vivo.',
    example: 'de + do = dedo<br>u + va = uva<br>da + do = dado<br>vi + da = vida<br>ve + la = vela<br>do + no = dono',
    trick: 'da, de, di, do, du = sílabas com D. va, ve, vi, vo, vu = sílabas com V. Misturando: vida, dado, dedo, vela...'
  }
];
t1b.praticar = [
  { question: 'Qual destas palavras tem um DITONGO?', options: ['me-ni-na', 'meu', 'me-mo', 'na-ve'], answer: 'meu', why: '"meu" tem o ditongo "eu" — as duas vogais e+u estão na mesma sílaba.' },
  { question: 'Quantas sílabas tem a palavra "uva"?', options: ['1', '2', '3', '4'], answer: '2', why: '"uva" = u-va = 2 sílabas. Bate palmas: u (1), va (2).' },
  { question: 'Qual é o ditongo na palavra "pai"?', options: ['pa', 'ai', 'pi', 'ap'], answer: 'ai', why: '"pai" tem o ditongo "ai" — as vogais a+i estão na mesma sílaba.' },
  { question: 'Como se forma a palavra "dado" com sílabas?', options: ['dad + o', 'da + do', 'd + ado', 'da + d + o'], answer: 'da + do', why: '"dado" = da-do. Sílabas: "da" (d+a) e "do" (d+o).' },
  { question: 'Qual das seguintes usa a sílaba "vi"?', options: ['vela', 'vida', 'dove', 'dodo'], answer: 'vida', why: '"vida" = vi-da. A sílaba "vi" está na primeira parte da palavra.' }
];

// ─── T2: Sílabas com D, S, B, P, T ───────────────────────────────────────────
const t2a = tema('por1_t2_silabas_dv');
t2a.aprender = [
  {
    icon: '👟',
    title: 'Sílabas com S, P, T — sapato, bota',
    body: '<b>Quadro silábico s+v</b>: sa · se · si · so · su<br><b>Quadro silábico b+v</b>: ba · be · bi · bo · bu<br><b>Quadro silábico p+v</b>: pa · pe · pi · po · pu<br><b>Quadro silábico t+v</b>: ta · te · ti · to · tu<br>Palavra-chave: <b>sa-pa-to</b> (3 sílabas: sa + pa + to)<br>Palavra-chave: <b>bo-ta</b> (2 sílabas: bo + ta)',
    example: 'sa + pa + to = sapato<br>bo + ta = bota<br>to + ma + te = tomate<br>ba + ta + ta = batata<br>pe + di + do = pedido<br>so + pa = sopa<br>ti + po = tipo',
    trick: 'sa, se, si, so, su = S+vogal. ba, be, bi, bo, bu = B+vogal. pa, pe, pi, po, pu = P+vogal. ta, te, ti, to, tu = T+vogal.'
  },
  {
    icon: '🔑',
    title: 'Sílabas com QU — leque',
    body: 'As sílabas <b>que</b> e <b>qui</b> usam sempre a letra Q seguida de U:<br>• que → som de "ke" (a letra U não se lê)<br>• qui → som de "ki"<br>Palavra-chave: <b>le-que</b> (2 sílabas: le + que)<br>Outros exemplos: <b>quilo</b> (qui-lo), <b>esquilo</b> (es-qui-lo), <b>aqui</b> (a-qui).<br><b>Atenção</b>: antes de <b>a</b> e <b>o</b>, o Q não usa U: qua, quo → o U pronuncia-se (quadro = qua-dro).',
    example: 'le + que = leque<br>qui + lo = quilo<br>a + qui = aqui<br>es + qui + lo = esquilo<br>Mas: qua + dro = quadro (o U lê-se)',
    trick: '"que" e "qui" = U mudo (não se pronuncia). "qua" e "quo" = U pronuncia-se. Dica: "Que é que tu quiseste?" — que e qui sem som de U!'
  },
  {
    icon: '🔠',
    title: 'Letras Maiúsculas — quando usar',
    body: 'As letras <b>maiúsculas</b> (grandes) usam-se:<br>• No início de uma frase: "A Ana gosta de uvas."<br>• Nos nomes próprios (de pessoas e lugares): <b>A</b>na, <b>A</b>irton, <b>M</b>indelo, <b>C</b>abo <b>V</b>erde, <b>F</b>ogo.<br>• Depois de ponto final.<br>• No início de cada verso de um poema.<br>As letras minúsculas (pequenas) usam-se no resto do texto.',
    example: 'A Ana mora no Mindelo. (A = início de frase; Ana = nome próprio; Mindelo = nome próprio)<br>O Airton é de Porto Mosquito. (O = início; Airton e Porto Mosquito = nomes próprios)<br>Cabo Verde é lindo! (C e V = início de nome de país)',
    trick: 'Maiúscula: início de frase + nomes próprios (pessoas e lugares). Minúscula: todo o resto. Dica: se é o NOME de alguém ou de um lugar, escreve em maiúscula!'
  }
];
t2a.praticar = [
  { question: 'Quantas sílabas tem "sapato"?', options: ['2', '3', '4', '1'], answer: '3', why: '"sa-pa-to" = 3 sílabas. Bate palmas: sa (1), pa (2), to (3).' },
  { question: 'Como se escreve o som "ke" em português?', options: ['ce', 'se', 'que', 'ke'], answer: 'que', why: 'Em português, o som "ke" escreve-se "que". O U não se pronuncia em "que" e "qui".' },
  { question: 'Qual palavra começa com letra maiúscula corretamente?', options: ['meu livro é bonito.', 'A Ana gosta de dançar.', 'o sapato da bota.', 'a casa é grande'], answer: 'A Ana gosta de dançar.', why: 'As frases começam com letra maiúscula. "A" no início da frase e "Ana" é nome próprio — ambos em maiúscula.' },
  { question: 'Qual é a sílaba com B na palavra "bota"?', options: ['ta', 'bo', 'ot', 'a'], answer: 'bo', why: '"bota" = bo-ta. A primeira sílaba "bo" começa com a consoante B.' },
  { question: 'Completa: "to + ma + te =?"', options: ['tomaste', 'tomate', 'tómate', 'tomato'], answer: 'tomate', why: 'Juntando as sílabas to+ma+te formamos a palavra "tomate".' }
];

// ─── T2: Casa, Janela — dígrafos ch, lh; j+v ─────────────────────────────────
const t2b = tema('por1_t2_casa_janela');
t2b.aprender = [
  {
    icon: '🏠',
    title: 'Sílabas ca/co/cu e o S — casa',
    body: '<b>Quadro silábico c+v</b>: ca · co · cu (som de "k")<br>⚠️ Atenção: ce e ci têm som de "s" (não de "k")!<br>Palavra-chave: <b>ca-sa</b> (2 sílabas: ca + sa)<br><b>O S entre vogais</b>: quando S fica entre duas vogais, lê-se como "z". Ex: <b>ca-sa</b> (o s lê-se "z"), <b>ro-sa</b>.<br><b>O S no início das palavras</b>: lê-se como "s". Ex: <b>sa-pa-to</b>, <b>so-pa</b>.',
    example: 'ca + sa = casa (o S entre vogais = som de z)<br>ro + sa = rosa (s entre o e a = som de z)<br>so + pa = sopa (s no início = som de s)<br>ca + no = cano<br>ce → som de "s": <b>ce</b>noura, <b>ce</b>la',
    trick: 'ca, co, cu = som de K. ce, ci = som de S. S entre vogais (a_a) = som de Z. S no início da palavra = som de S.'
  },
  {
    icon: '🪟',
    title: 'Dígrafo LH e Sílabas J — janela, telhado',
    body: 'Um <b>dígrafo</b> são 2 letras que juntas fazem 1 único som.<br><b>LH</b>: lha · lhe · lhi · lho · lhu → som de "lh" (como em "talha")<br><b>Quadro silábico j+v</b>: ja · je · ji · jo · ju → som de "j" (como em "jardim")<br>Palavra-chave: <b>ja-ne-la</b> (3 sílabas: ja + ne + la)<br>Palavra-chave: <b>te-lha-do</b> (3 sílabas: te + lha + do)',
    example: 'ja + ne + la = janela (j+v)<br>te + lha + do = telhado (dígrafo lh)<br>fi + lho = filho (lh)<br>mu + lher = mulher (lh)<br>jo + go = jogo (j+v)<br>ju + da = juda (j+v)',
    trick: 'LH = dígrafo (lh forma 1 som especial). J+vogal = ja, je, ji, jo, ju. "janela" = ja-ne-la (j). "telhado" = te-lha-do (lh).'
  },
  {
    icon: '🗝️',
    title: 'Dígrafo CH — chave, escada',
    body: '<b>CH</b>: cha · che · chi · cho · chu → som de "x" (como em "chuva")<br>Palavra-chave: <b>cha-ve</b> (2 sílabas: cha + ve)<br>Sílabas iniciadas com vogal: <b>es-ca-da</b> (3 sílabas: es + ca + da)<br>Outras sílabas com vogal no início: an, em, in, on, un, al, el, il, ol, ul.',
    example: 'cha + ve = chave (ch+v)<br>chu + va = chuva (ch+v)<br>es + ca + da = escada (es = vogal+s)<br>en + tra + da = entrada<br>al + mo + ço = almoço<br>cho + co + la + te = chocolate',
    trick: 'CH = dígrafo (som de "x"): cha, che, chi, cho, chu. Sílabas com vogal+consoante: es, an, em, in, al, etc. "escada" começa com "es".'
  }
];
t2b.praticar = [
  { question: 'Na palavra "casa", como se lê o S entre as vogais a e a?', options: ['Como S (sopa)', 'Como Z (zebra)', 'Não se lê', 'Como X'], answer: 'Como Z (zebra)', why: 'O S entre duas vogais lê-se como Z. "casa" = ca-za (o s do meio soa como z).' },
  { question: 'Quantas sílabas tem "janela"?', options: ['2', '3', '4', '1'], answer: '3', why: '"ja-ne-la" = 3 sílabas: ja, ne, la.' },
  { question: 'Qual dígrafo está na palavra "filho"?', options: ['ch', 'lh', 'nh', 'rr'], answer: 'lh', why: '"filho" = fi-lho. O dígrafo LH forma um som especial — é diferente de L+H em separado.' },
  { question: 'Qual dígrafo está na palavra "chuva"?', options: ['lh', 'nh', 'ch', 'qu'], answer: 'ch', why: '"chuva" = chu-va. O dígrafo CH forma um som como em "chave", "chocolate", "cheiro".' },
  { question: 'O som da sílaba "ja" é como em:', options: ['caça', 'jardim', 'gato', 'quilo'], answer: 'jardim', why: '"ja" tem o som J, como em "jardim", "janela", "jogo". É diferente do som G (gato).' }
];

// ─── T3: Leitura e Escrita — dígrafos avançados ───────────────────────────────
const t3 = tema('por1_t3_leitura_escrita');
t3.aprender = [
  {
    icon: '🐔',
    title: 'Dígrafo NH, GE/GI, CE/CI — galinha, gema, cenoura',
    body: '<b>NH</b>: nha · nhe · nhi · nho · nhu → som nasal (como em "vinho")<br>Palavra-chave: <b>ga-li-nha</b> (3 sílabas: ga + li + nha)<br><b>GE e GI</b>: som suave de J → <b>ge</b>la, <b>gi</b>rafa<br>Palavra-chave: <b>ge-ma</b> (2 sílabas: ge + ma)<br><b>CE e CI</b>: som de S → <b>ce</b>noura, <b>ci</b>dade<br>Palavra-chave: <b>ce-nou-ra</b> (3 sílabas: ce + nou + ra)<br><b>R entre vogais</b> (v+r+v): som suave de R → ca<b>r</b>o, co<b>r</b>o.',
    example: 'nha, nhe, nhi, nho, nhu = dígrafo NH<br>ga-li-nha (nha), vi-nho (nho), ba-nho (nho)<br>ge + ma = gema (ge = som suave J)<br>ce + nou + ra = cenoura (ce = som S)<br>cara → ca + ra (r entre vogais = suave)',
    trick: 'NH = dígrafo nasal (galinha, vinho). GE/GI = som de J (gema, girafa). CE/CI = som de S (cenoura, cidade). r entre vogais = suave (caro, cara).'
  },
  {
    icon: '🐀',
    title: 'R Forte e M/N antes de P/B/D/T — rato, bandeira',
    body: '<b>R no início das palavras</b>: som forte (vibra muito) → <b>ra-to</b>, <b>ri-o</b>, <b>ro-sa</b><br><b>RR entre vogais</b>: também é som forte → car<b>r</b>o, er<b>r</b>o<br><b>N antes de D e T</b>: o N modifica o som da vogal anterior → ban-dei-ra (<b>an</b>), en-tra-da (<b>en</b>)<br><b>M no fim das palavras ou antes de P e B</b>: modifica a vogal → pa<b>m</b> → pa<b>n</b>o; tam<b>b</b>ém, cam<b>p</b>o.',
    example: 'R forte: rato (rr+a+to), rio (r+i+o), rosa (r+o+sa)<br>RR forte: carro (car+ro), errou (er+rou)<br>N antes de D: ban + dei + ra = bandeira<br>M antes de B: tam + bém = também<br>M antes de P: cam + po = campo',
    trick: 'R no início = sempre forte (rato, rio). RR no meio = sempre forte (carro). N antes de D/T + M antes de P/B = modificam a vogal anterior (como se nasalizam).'
  },
  {
    icon: '🌸',
    title: 'Letra F, QU+A/O, Grupos FL, CL e Letras K/W/Y',
    body: '<b>Quadro silábico f+v</b>: fa · fe · fi · fo · fu → Palavra: <b>fu-nil</b><br><b>QU+A e QU+O</b>: nestes casos, o U pronuncia-se → <b>qua</b>-dro, <b>quo</b>-ta<br><b>Grupo FL</b>: fla · fle · fli · flo · flu → <b>flor</b>, <b>flu-tu-ar</b><br><b>Grupo CL</b>: cla · cle · cli · clo · clu → <b>clas-se</b><br><b>Letras estrangeiras</b>: k (kilo), w (web), y (yoga) — usadas sobretudo em palavras de outras línguas.',
    example: 'fu + nil = funil (f+v)<br>qua + dro = quadro (qu+a, U pronuncia-se)<br>flo + r = flor (grupo fl)<br>clas + se = classe (grupo cl)<br>ki + lo = kilo (letra k)',
    trick: 'f = fa, fe, fi, fo, fu. qu+a/o = U pronuncia-se (qua-dro). qu+e/i = U mudo (que-lo). FL e CL = grupos consonantais. k/w/y = letras de palavras estrangeiras.'
  }
];
t3.praticar = [
  { question: 'Qual dígrafo está na palavra "galinha"?', options: ['CH', 'LH', 'NH', 'RR'], answer: 'NH', why: '"galinha" = ga-li-nha. O dígrafo NH forma um som nasal especial, como em "vinho" e "banho".' },
  { question: 'O som das sílabas GE e GI é parecido com o som de:', options: ['G de gato', 'J de jardim', 'K de kilo', 'S de sapato'], answer: 'J de jardim', why: 'GE e GI têm um som suave parecido com J (jardim). Exemplo: gema, girafa.' },
  { question: 'Na palavra "cenoura", CE tem o som de:', options: ['K (cano)', 'S (sopa)', 'Z (casa)', 'J (janela)'], answer: 'S (sopa)', why: 'CE e CI têm sempre o som de S. "cenoura" = se-nou-ra (o ce soa como s).' },
  { question: 'Na palavra "rato", o R do início tem um som:', options: ['Suave como em "caro"', 'Forte e vibrante', 'Igual ao RR no meio', 'Não se pronuncia'], answer: 'Forte e vibrante', why: 'O R no início das palavras tem sempre um som forte e vibrante (como RR). Exemplo: rato, rio, rosa.' },
  { question: 'Em "quadro", o U pronuncia-se porque:', options: ['Q está sempre seguido de U mudo', 'QU+A = o U pronuncia-se', 'O QU não tem som', 'Todas as palavras com Q têm U mudo'], answer: 'QU+A = o U pronuncia-se', why: 'Regra: QU+E e QU+I = U mudo (que, qui). QU+A e QU+O = U pronuncia-se (quadro, quarto).' },
  { question: 'Qual é o dígrafo na palavra "vinho"?', options: ['LH', 'CH', 'NH', 'RR'], answer: 'NH', why: '"vinho" = vi-nho. O dígrafo NH aparece em palavras como vinho, banho, ganhar, ninho.' }
];

// ─── Escrever o JSON ─────────────────────────────────────────────────────────
fs.writeFileSync(path, JSON.stringify(por, null, 2), 'utf8');
console.log('POR Ano 1 atualizado.');
const por2 = JSON.parse(fs.readFileSync(path, 'utf8'));
por2.anos[0].trimestres.forEach((t, i) => {
  t.temas.forEach(top => {
    console.log('T'+(i+1)+' '+top.id+' | ap:'+(top.aprender||[]).length+' pr:'+(top.praticar||[]).length);
  });
});
