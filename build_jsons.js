const fs = require('fs');
function t(id, nome, icone) { return { id, nome, icone, aprender: [], praticar: [], desafios: [] }; }

const mat = { disciplina: 'matematica', anos: [
  { ano: 1, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('mat1_t1_geom_espaco', 'Geometria — Organização no Espaço', '🗺️'),
      t('mat1_t1_numeros_20', 'Números até 20 e Operações', '🔢')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('mat1_t2_figuras_medidas', 'Figuras Planas e Medidas', '📐'),
      t('mat1_t2_numeros_50', 'Números até 50 — Adição e Subtração', '➕'),
      t('mat1_t2_dados', 'Organização e Tratamento de Dados', '📊')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('mat1_t3_numeros_100', 'Números até 100 — Adição e Subtração', '💯'),
      t('mat1_t3_solidos_medidas', 'Sólidos Geométricos e Medidas', '📦')
    ]}
  ]},
  { ano: 2, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('mat2_t1_numeros_500', 'Números até 500 — Pares, Ímpares e Ordinais', '🔢'),
      t('mat2_t1_operacoes', 'Adição, Subtração, Multiplicação e Divisão', '✖️'),
      t('mat2_t1_regularidades', 'Regularidades e Sequências', '🔄')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('mat2_t2_dados', 'Organização e Tratamento de Dados', '📊'),
      t('mat2_t2_geom_figuras', 'Geometria — Figuras Planas e Comprimento', '📐')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('mat2_t3_numeros_1000', 'Números até 1000 e Frações', '½'),
      t('mat2_t3_solidos_medidas', 'Sólidos Geométricos, Massa, Tempo e Dinheiro', '⏱️')
    ]}
  ]},
  { ano: 3, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('mat3_t1_numeros_5000', 'Números até 5000 e Operações', '🔢'),
      t('mat3_t1_decimais', 'Números Decimais — Décima e Centésima', '🔟')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('mat3_t2_geom_figuras', 'Geometria — Figuras Planas, Área e Perímetro', '📐'),
      t('mat3_t2_dados', 'Organização e Tratamento de Dados', '📊')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('mat3_t3_numeros_10000', 'Números até 10000 e Numeração Romana', '🏛️'),
      t('mat3_t3_solidos_medidas', 'Sólidos Geométricos e Medidas', '📦')
    ]}
  ]},
  { ano: 4, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('mat4_t1_numeros_milhao', 'Números até ao Milhão e Operações', '🔢'),
      t('mat4_t1_multiplos', 'Múltiplos, Divisores e Regularidades', '➗'),
      t('mat4_t1_dados', 'Organização e Tratamento de Dados', '📊')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('mat4_t2_geom_angulos', 'Geometria — Ângulos, Figuras Planas e Área', '📐'),
      t('mat4_t2_fracoes', 'Frações e Números Decimais', '½')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('mat4_t3_solidos_transf', 'Sólidos Geométricos e Transformações', '📦'),
      t('mat4_t3_medidas', 'Volume, Capacidade, Tempo e Dinheiro', '⏱️')
    ]}
  ]}
]};

const por = { disciplina: 'portugues', anos: [
  { ano: 1, gramatica: [], trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('por1_t1_vogais_silabas', 'Eu e a Minha Família — Vogais e Sílabas', '👨‍👩‍👧'),
      t('por1_t1_ditongos', 'Ditongos e Quadro Silábico (m+v, n+v)', '🔤')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('por1_t2_silabas_dv', 'Como Sou Eu? — Sílabas d+v e s+v', '👟'),
      t('por1_t2_casa_janela', 'Família e Casa — Quadros Silábicos c+v e j+v', '🏠')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('por1_t3_leitura_escrita', 'Leitura e Escrita — Quadros Silábicos Avançados', '📖')
    ]}
  ]},
  { ano: 2, gramatica: [], trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('por2_t1_corpo_higiene', 'Eu e os Outros — Corpo e Higiene', '🧍')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('por2_t2_rotina', 'A Minha Rotina — Quotidiano e Férias', '⏰'),
      t('por2_t2_familia', 'A Minha Família — Membros e Alimentação', '👨‍👩‍👧')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('por2_t3_comunidade', 'A Minha Comunidade — Festas e Costumes', '🎉')
    ]}
  ]},
  { ano: 3, gramatica: [], trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('por3_t1_revisao', 'Revisão — O Que Já Sei', '📚'),
      t('por3_t1_regresso', 'Estamos de Regresso — Texto Narrativo e Gramática', '✏️')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('por3_t2_planeta', 'O Planeta é a Nossa Casa — Ambiente e Texto Informativo', '🌍')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('por3_t3_pais', 'À Descoberta do Meu País — Cabo Verde', '🇨🇻')
    ]}
  ]},
  { ano: 4, gramatica: [], trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('por4_t1_familia', 'Minha Querida Família — Texto Poético e Narrativo', '👨‍👩‍👧')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('por4_t2_historias', 'Histórias de Espantar — Texto Narrativo e Entrevista', '📖')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('por4_t3_cabo_verde', 'Cabo Verde — Cultura e Identidade', '🇨🇻')
    ]}
  ]}
]};

const cie = { disciplina: 'ciencias', anos: [
  { ano: 1, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('cie1_t1_familia_escola', 'A Família e a Escola', '👨‍👩‍👧'),
      t('cie1_t1_alimentacao_vestuario', 'Alimentação e Vestuário', '🍎')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('cie1_t2_habitacao_transportes', 'Habitação, Educação e Transportes', '🏠'),
      t('cie1_t2_seres_vivos', 'Seres Vivos — Animais e Plantas', '🌿')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('cie1_t3_ambiente', 'Ambiente — Sol, Água e Ar', '☀️'),
      t('cie1_t3_profissoes_cultura', 'Profissões e Cultura em Cabo Verde', '🎭')
    ]}
  ]},
  { ano: 2, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('cie2_t1_familia_comunidade', 'Família, Escola e Comunidade', '👨‍👩‍👧'),
      t('cie2_t1_saude_corpo', 'Saúde do Corpo — Órgãos dos Sentidos e Higiene', '🏥')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('cie2_t2_habitacao_transportes', 'Habitação, Educação e Transportes', '🏠'),
      t('cie2_t2_ambiente_seres', 'Ambiente — Seres Vivos e Ecossistemas', '🌿')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('cie2_t3_experiencias', 'As Minhas Experiências Científicas', '🔬'),
      t('cie2_t3_profissoes_cultura', 'Profissões, Economia e Cultura', '🎭')
    ]}
  ]},
  { ano: 3, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('cie3_t1_cidadania', 'Relações Sociais e Cidadania', '🏗️'),
      t('cie3_t1_corpo_humano', 'A Ciência do Meu Corpo', '🧬')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('cie3_t2_saude_seres', 'Saúde, Seres Vivos e Cadeias Alimentares', '🌿'),
      t('cie3_t2_ambiente_astros', 'Ambiente — Solo, Clima e Astros', '🌍')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('cie3_t3_economia_cv', 'Atividades Econômicas em Cabo Verde', '⚓')
    ]}
  ]},
  { ano: 4, trimestres: [
    { id: 't1', nome: '1º Trimestre', temas: [
      t('cie4_t1_cidadania', 'Relações Sociais e Cidadania', '🏗️'),
      t('cie4_t1_cultura_cv', 'Cultura e Identidade de Cabo Verde', '🇨🇻')
    ]},
    { id: 't2', nome: '2º Trimestre', temas: [
      t('cie4_t2_economia', 'Atividades Econômicas', '💼'),
      t('cie4_t2_celula_animais', 'A Célula, os Animais e o Corpo Humano', '🧬')
    ]},
    { id: 't3', nome: '3º Trimestre', temas: [
      t('cie4_t3_plantas_ambiente', 'As Plantas e o Ambiente', '🌱'),
      t('cie4_t3_experiencias', 'Alterações Climáticas e Ciências Experimentais', '🔬')
    ]}
  ]}
]};

fs.writeFileSync('matematica.json', JSON.stringify(mat, null, 2), 'utf8');
fs.writeFileSync('portugues.json', JSON.stringify(por, null, 2), 'utf8');
fs.writeFileSync('ciencias.json', JSON.stringify(cie, null, 2), 'utf8');
console.log('JSONs criados');
