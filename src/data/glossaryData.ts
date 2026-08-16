export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'RAPS' | 'Legislação' | 'Psicopatologia' | 'Farmacologia' | 'Manejo & Técnica';
  shortDefinition: string;
  detailedExplanation: string;
  practicalApplication: string;
  normativeReference?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // Dispositivos da RAPS
  {
    id: 'term-raps',
    term: 'RAPS (Rede de Atenção Psicossocial)',
    category: 'RAPS',
    shortDefinition: 'Rede articulada do SUS que integra serviços de saúde para pessoas com sofrimento mental ou necessidades decorrentes do uso de substâncias.',
    detailedExplanation: 'Criada pela Portaria GM/MS nº 3.088/2011, a RAPS organiza os cuidados em diferentes níveis: Atenção Básica (UBS), Atenção Psicossocial Especializada (CAPS), Atenção de Urgência (SAMU/UPA), Residencial de Caráter Transitório (Unidades de Acolhimento) e Atenção Residencial de Saúde Mental (SRT Tipo I e II).',
    practicalApplication: 'O cuidador da SRT interage diariamente com outros nós da RAPS, articulando consultas no CAPS e encaminhamentos para a UBS de referência do território.',
    normativeReference: 'Portaria GM/MS nº 3.088/2011'
  },
  {
    id: 'term-srt',
    term: 'SRT (Serviço de Residência Terapêutica)',
    category: 'RAPS',
    shortDefinition: 'Moradia inserida na comunidade voltada a pessoas com transtornos mentais egressas de longas internações psiquiátricas.',
    detailedExplanation: 'Dispositivo substitutivo aos hospitais psiquiátricos, com perfil residencial (e não hospitalar), destinado a resgatar a cidadania e os laços sociais. A SRT Tipo I atende até 8 moradores com maior autonomia; a SRT Tipo II atende até 10 moradores com dependência intensa e suporte contínuo 24h.',
    practicalApplication: 'A SRT Salomão funciona como um lar familiar real, onde os moradores gerenciam seu cotidiano com o apoio facilitador da equipe de cuidadores.',
    normativeReference: 'Portarias GM/MS nº 106/2000 e nº 2.840/2014'
  },
  {
    id: 'term-caps',
    term: 'CAPS (Centro de Atenção Psicossocial)',
    category: 'RAPS',
    shortDefinition: 'Serviço comunitário e aberto de referência para tratamento de transtornos mentais graves e persistentes no SUS.',
    detailedExplanation: 'Existem diferentes modalidades (CAPS I, CAPS II, CAPS III, CAPS i e CAPS ad). O CAPS III oferece atendimento 24 horas, incluindo leitos de acolhimento noturno para estabilização de crises agudas no território sem necessidade de hospitalização.',
    practicalApplication: 'É a equipe do CAPS que constrói e atualiza o Projeto Terapêutico Singular (PTS) dos moradores da SRT junto com os cuidadores.',
    normativeReference: 'Portaria GM/MS nº 336/2002'
  },
  {
    id: 'term-matriciamento',
    term: 'Apoio Matricial / Matriciamento',
    category: 'RAPS',
    shortDefinition: 'Processo de suporte técnico-pedagógico compartilhado entre equipes especialistas (CAPS) e equipes da Atenção Básica ou SRT.',
    detailedExplanation: 'Garante que o cuidado ao morador não fique isolado. A equipe do CAPS realiza reuniões de supervisão, discussão de casos e treinamentos conjuntos com os cuidadores para alinhar condutas no cotidiano.',
    practicalApplication: 'Reuniões mensais entre o enfermeiro/psicólogo do CAPS e os cuidadores da SRT Salomão para rever planos de cuidado.',
    normativeReference: 'Diretrizes Nacionais de Atenção Básica (PNAB)'
  },

  // Legislação & Princípios
  {
    id: 'term-lei-10216',
    term: 'Lei Federal nº 10.216/2001 (Lei Antimanicomial)',
    category: 'Legislação',
    shortDefinition: 'Marco legal da Reforma Psiquiátrica Brasileira que garante os direitos das pessoas com transtornos mentais.',
    detailedExplanation: 'Proíbe a internação em instituições com características asilares e determina que a pessoa em sofrimento mental deve ser tratada preferencialmente em serviços comunitários de saúde, preservando sua liberdade e dignidade.',
    practicalApplication: 'Proíbe terminantemente qualquer tipo de castigo, contenção física rotineira ou isolamento forçado dentro da SRT.',
    normativeReference: 'Lei Federal nº 10.216 de 06/04/2001'
  },
  {
    id: 'term-pts',
    term: 'PTS (Projeto Terapêutico Singular)',
    category: 'Legislação',
    shortDefinition: 'Conjunto de propostas de conduta terapêutica articuladas para um sujeito individual ou família, construído interdisciplinarmente.',
    detailedExplanation: 'O PTS substitui a prescrição rígida por um mapa dinâmico de metas de autonomia, interesses culturais, acompanhamento de saúde física e objetivos de inserção comunitária do morador.',
    practicalApplication: 'Registra objetivos como: aprender a pegar ônibus sozinho, administrar o próprio dinheiro do benefício BPC ou frequentar a oficina de artes.',
    normativeReference: 'Cadernos de Atenção Básica nº 34 - Ministério da Saúde'
  },
  {
    id: 'term-contratualidade',
    term: 'Contratualidade',
    category: 'Legislação',
    shortDefinition: 'Capacidade do sujeito de estabelecer trocas sociais, contratuais e afetivas na sociedade (habitat, rede social, mercado).',
    detailedExplanation: 'Conceito desenvolvido por Benedetto Saraceno. A reabilitação psicossocial mede o sucesso do cuidado pelo aumento do poder contratual do morador em três eixos: Moradia (Habitat), Relações Pessoais (Rede) e Trabalho/Renda (Mercado).',
    practicalApplication: 'Estimular o morador a escolher suas roupas no armário, dar opinião sobre o cardápio da semana e gerenciar seus pertences pessoais.',
    normativeReference: 'Saraceno B. - Libertando Identidades (1999)'
  },
  {
    id: 'term-desinstitucionalizacao',
    term: 'Desinstitucionalização',
    category: 'Legislação',
    shortDefinition: 'Processo ético e político de desconstrução da lógica manicomial e restauração do sujeito de direitos.',
    detailedExplanation: 'Não se resume a fechar leitos de hospitais psiquiátricos (deshospitalização física), mas sim descontaminar as práticas de cuidado das marcas de sujeição, passividade e anulação da subjetividade impostas pela instituição total.',
    practicalApplication: 'Incentivar que o morador volte a ter chave do seu quarto, escolha o horário de acordar nos fins de semana e participe das decisões da casa.',
    normativeReference: 'Franco Basaglia - A Instituição Negada'
  },

  // Psicopatologia & Sintomas
  {
    id: 'term-delirio',
    term: 'Delírio',
    category: 'Psicopatologia',
    shortDefinition: 'Juízo de valor falso e inabalável da realidade, construído sem correspondência com os fatos objetivos.',
    detailedExplanation: 'Alteração do conteúdo do pensamento. Pode ser de vertente persecutória (achar que está sendo perseguido/envenenado), de grandeza, místico ou de ruína. O sujeito vivencia o delírio com convicção absoluta.',
    practicalApplication: 'Ao atender um morador delirante, o cuidador não deve confrontar nem alimentar o delírio, mas acolher a emoção subjacente (medo, angústia).',
    normativeReference: 'Manual de Psicopatologia (Dalgalarrondo)'
  },
  {
    id: 'term-alucinacao',
    term: 'Alucinação',
    category: 'Psicopatologia',
    shortDefinition: 'Percepção sensorial clara e nítida na ausência de um estímulo externo real.',
    detailedExplanation: 'Alteração do sensopercepção. As alucinações mais comuns na esquizofrenia são as auditivas (vozes imperativas, comentários sobre o morador) e visuais.',
    practicalApplication: 'Se o morador escuta vozes assustadoras, o cuidador deve transmitir calma e segurança: "Eu não estou ouvindo essas vozes, mas percebo que elas te assustam. Estou aqui com você."',
    normativeReference: 'DSM-5 / CID-11'
  },
  {
    id: 'term-soliloquio',
    term: 'Solilóquio / Dialogismo',
    category: 'Psicopatologia',
    shortDefinition: 'Ato de falar sozinho de forma audível, frequentemente em resposta a alucinações auditivas.',
    detailedExplanation: 'Sinal frequente em quadros psicóticos. O morador gesticula e responde a estímulos auditivos que apenas ele percebe no momento.',
    practicalApplication: 'Observar a tonalidade e se o solilóquio evolui para agitação ou se permanece calmo, registrando a frequência no diário de bordo.',
    normativeReference: 'Exame do Estado Mental'
  },
  {
    id: 'term-pacing',
    term: 'Pacing (Inquietação de Deambulação)',
    category: 'Psicopatologia',
    shortDefinition: 'Comportamento repetitivo de andar de um lado para o outro sem rumo determinado, revelando ansiedade ou acatisia.',
    detailedExplanation: 'Pode ser sinal prodrômico de crise psicótica iminente ou efeito adverso neurológico grave decorrente do uso de medicação antipsicótica (Acatisia).',
    practicalApplication: 'Oferecer um copo de água, convidar para sentar com calma e verificar se o morador relata comichão interno nas pernas.',
    normativeReference: 'Protocolo de Manejo de Inquietação (Projeto BETA)'
  },
  {
    id: 'term-embotamento',
    term: 'Embotamento Afetivo',
    category: 'Psicopatologia',
    shortDefinition: 'Perda acentuada da capacidade de expressão emocional e reatividade afetiva.',
    detailedExplanation: 'Sintoma negativo da esquizofrenia ou consequência de longos anos de institucionalização. O rosto do morador apresenta pouca variação expressiva e voz monótona.',
    practicalApplication: 'Não confundir embotamento com maldade, preguiça ou desinteresse. Manter o afeto, o olhar respeitoso e a paciência na comunicação.',
    normativeReference: 'Sintomas Negativos na Esquizofrenia'
  },

  // Farmacologia & Efeitos
  {
    id: 'term-9-certos',
    term: 'Protocolo dos 9 Certos',
    category: 'Farmacologia',
    shortDefinition: 'Barreira de segurança internacional para prevenção de erros na administração de medicamentos.',
    detailedExplanation: 'Exige conferência rigorosa de: 1. Paciente Certo; 2. Medicamento Certo; 3. Dose Certa; 4. Via Certa; 5. Hora Certa; 6. Tempo Certo; 7. Ação Certa; 8. Registro Certo; 9. Orientação Certa ao usuário.',
    practicalApplication: 'Conferir o copo dosador contra a prescrição do médico do CAPS no momento exato da entrega ao morador.',
    normativeReference: 'Organização Mundial da Saúde (OMS) / Anvisa'
  },
  {
    id: 'term-acatisia',
    term: 'Acatisia Motora',
    category: 'Farmacologia',
    shortDefinition: 'Efeito adverso extrapiramidal doloroso caracterizado por inquietude motora incontrolável nas pernas.',
    detailedExplanation: 'Provocado por antipsicóticos (principalmente típicos como Haloperidol). O morador relata uma sensação de "comichão por dentro" e incapacidade de parar de mover as pernas.',
    practicalApplication: 'Avisar o enfermeiro/médico do CAPS para ajuste de dose ou adição de antiparkinsoniano (ex: Biperideno). Jamais repreender o morador por não sentar.',
    normativeReference: 'Farmacologia Clínica Psicofarmacológica'
  },
  {
    id: 'term-snm',
    term: 'Síndrome Neuroléptica Maligna (SNM)',
    category: 'Farmacologia',
    shortDefinition: 'Emergência médica rara e potencialmente fatal provocada por medicamentos antipsicóticos.',
    detailedExplanation: 'Caracteriza-se pela tríade: Febre alta súbita (>38.5ºC), Rigidez muscular extrema ("cano de chumbo") e Instabilidade autonômica (sudorese profusa, taquicardia, pressão instável).',
    practicalApplication: 'Se identificada, suspender a medicação imediatamente e acionar o SAMU 192 para remoção urgente a hospital geral.',
    normativeReference: 'Urgências e Emergências Psiquiátricas'
  },
  {
    id: 'term-impregnacao',
    term: 'Impregnação Neuroléptica (Parkinsonismo Medicamentoso)',
    category: 'Farmacologia',
    shortDefinition: 'Conjunto de efeitos motores colaterais que mimetizam a Doença de Parkinson.',
    detailedExplanation: 'Inclui rigidez muscular, tremores de repouso nas mãos, mímica facial congelada (fácies em máscara), marcha a passos curtos e sialorreia (salivação excessiva).',
    practicalApplication: 'Registrar os sintomas para o médico ajustar o antipsicótico e auxiliar o morador na alimentação caso haja rigidez motora.',
    normativeReference: 'Efeitos Colaterais Extrapiramidais (SEP)'
  },

  // Manejo & Técnica
  {
    id: 'term-desescalada',
    term: 'Desescalada Verbal (Método Richmond)',
    category: 'Manejo & Técnica',
    shortDefinition: 'Técnica de comunicação terapêutica para desacelerar a agitação e prevenir a violência em momentos de crise.',
    detailedExplanation: 'Baseia-se em 10 princípios: respeitar o espaço pessoal (2 braços de distância), não se mostrar ameaçador, estabelecer contato verbal claro, ser simples, identificar desejos e sentimentos, escutar com atenção, concordar com o que for possível, estabelecer limites claros e oferecer escolhas.',
    practicalApplication: 'Usada pelo cuidador para acalmar um morador alterado antes que a situação evolua para agressão.',
    normativeReference: 'Projeto BETA (Best Practices in Evaluation and Treatment of Agitation)'
  },
  {
    id: 'term-sbar',
    term: 'Protocolo SBAR',
    category: 'Manejo & Técnica',
    shortDefinition: 'Estrutura padronizada de comunicação clínica entre profissionais de saúde.',
    detailedExplanation: 'Sigla para: S = Situação atual; B = Background (Histórico/Contexto); A = Assessment (Avaliação técnica); R = Recomendação/Plano de ação.',
    practicalApplication: 'Utilizado na passagem de plantão entre cuidadores para garantir que nenhuma informação sobre remédios ou crises seja perdida.',
    normativeReference: 'Institute for Healthcare Improvement (IHI)'
  },
  {
    id: 'term-escuta-qualificada',
    term: 'Escuta Qualificada',
    category: 'Manejo & Técnica',
    shortDefinition: 'Atitude profissional de acolhimento focado na singularidade da fala da pessoa, sem julgamentos prévios.',
    detailedExplanation: 'Supera o mero "ouvir de passagem". Exige presença plena, validação do sofrimento alheio e disposição empática para compreender o sentido da fala do morador.',
    practicalApplication: 'Dedicar 10 minutos de atenção exclusiva para ouvir as memórias do morador tomar um café na varanda.',
    normativeReference: 'Política Nacional de Humanização (HumanizaSUS)'
  },
  {
    id: 'term-vinculo',
    term: 'Vínculo Terapêutico',
    category: 'Manejo & Técnica',
    shortDefinition: 'Relação de confiança mútua construída entre o profissional cuidador e o morador.',
    detailedExplanation: 'Constitui a ferramenta de cuidado mais eficaz na saúde mental. Sem vínculo verdadeiro, intervenções farmacológicas ou comportamentais perdem a eficácia.',
    practicalApplication: 'Cumprir as promessas feitas ao morador, demonstrar constância nas atitudes e tratar o sujeito com respeito incondicional.',
    normativeReference: 'Manual de Tecnologias Leves em Saúde (Merhy)'
  }
];
