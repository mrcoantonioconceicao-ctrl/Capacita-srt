import { Module } from '../types/course';

export const modulesData: Module[] = [
  // ==========================================
  // MÓDULO 1: MARCO LEGAL E FILOSÓFICO
  // ==========================================
  {
    id: 1,
    title: 'Módulo 1: Marco Legal e Filosófico das SRTs e o Papel do Cuidador',
    shortTitle: 'Marco Legal e Filosófico',
    subtitle: 'Reforma Psiquiátrica, Lei Antimanicomial nº 10.216/2001 e Cidadania no Residencial Salomão',
    summary: 'Compreenda a evolução histórica do cuidado em saúde mental no Brasil, as normativas do Ministério da Saúde para Serviços de Residência Terapêutica (SRT Tipo I e II) e o papel emancipador do cuidador como agente social de desinstitucionalização.',
    iconName: 'Scale',
    workloadHours: 8,
    normativeBase: [
      'Lei Federal nº 10.216/2001 (Lei da Reforma Psiquiátrica e Direitos das Pessoas com Transtornos Mentais)',
      'Portaria GM/MS nº 106/2000 (Criação dos Serviços de Residência Terapêutica em Saúde Mental)',
      'Portaria GM/MS nº 3.088/2011 (Institui a Rede de Atenção Psicossocial - RAPS)',
      'Portaria GM/MS nº 2.840/2014 (Atualização e redefinição do funcionamento das SRTs no SUS)',
      'Diretrizes de Saúde Mental da RAPS Blumenau / SC (CAPS II, CAPS III e Atenção Primária à Saúde)'
    ],
    contentSections: [
      {
        title: '1. Da Lógica Asilar ao Morar na Cidade: A Luta Antimanicomial no Brasil',
        paragraphs: [
          'A história da assistência psiquiátrica tradicional no Brasil e no mundo foi alicerçada no paradigma asilar e segregador. Hospitais psiquiátricos gigantescos (como o antigo Hospital Colônia de Barbacena em Minas Gerais) funcionavam como depósitos humanos, onde o sujeito diagnosticado com transtorno mental era despojado de sua identidade civil, suas roupas, suas memórias familiares, seus bens e seus direitos fundamentais. A internação tornava-se perpétua, gerando o fenômeno da "institucionalização": o indivíduo perdia a capacidade de escolher quando comer, vestir, circular ou falar.',
          'A Reforma Psiquiátrica Brasileira, consolidada com a promulgação da Lei Federal nº 10.216 em 6 de abril de 2001, provocou uma revolução ética, jurídica e sanitária: transferiu o eixo do cuidado do hospital psiquiátrico fechado para serviços territoriais, abertos, comunitários e de base territorial no SUS (como os CAPS, SRTs, Centros de Convivência e Unidades de Acolhimento).',
          'Nesse cenário, os Serviços de Residência Terapêutica (SRTs), como o modelo pioneiro do Residencial Terapêutico Salomão em Blumenau/SC, foram instituídos pela Portaria GM/MS nº 106/2000. Trata-se de moradias acolhedoras inseridas no tecido urbano comum, destinadas prioritariamente a pessoas que vivenciaram longos períodos de internação psiquiátrica (2 anos ou mais ininterruptos) e que perderam referências familiares ou suporte social autônomo.'
        ],
        keyTakeaway: 'Uma SRT NUNCA é um hospital em miniatura, uma clínica particular ou um asilo disfarçado. É um LAR no território, com endereço civil, onde os moradores detêm a chave da porta, poder de escolha e liberdade cidadã.',
        normativeHighlight: 'Art. 2º da Lei 10.216/2001: É direito da pessoa portadora de transtorno mental ter livre acesso aos melhores meios terapêuticos pelos serviços de saúde, ser tratada com humanidade e respeito e ser protegida contra qualquer forma de abuso, exploração e tratamento desumano ou degradante.'
      },
      {
        title: '2. Tipologias das SRTs (Tipo I e Tipo II) e Estrutura Operacional',
        paragraphs: [
          'O Ministério da Saúde, por meio da Portaria GM/MS nº 2.840/2014, regulamenta duas tipologias operacionais de SRT no âmbito do Sistema Único de Saúde:',
          '• SRT Tipo I: Moradia destinada a até 8 moradores que apresentam maior grau de autonomia e independência nas atividades instrumentais e básicas de vida diária (ABVD e AIVD). Essa modalidade conta com suporte técnico de referência, acompanhamento periódico do CAPS e da Atenção Primária, mas não demanda presença física contínua de cuidadores 24 horas por dia.',
          '• SRT Tipo II: Moradia destinada a até 10 moradores com severo grau de dependência física, motora, cognitiva ou institucional crônica. Exige estrutura física adaptada (acessibilidade para cadeirantes, barras de apoio, portas alargadas conforme NBR 9050) e equipe presencial de cuidadores e técnicos de enfermagem 24 horas por dia, 7 dias por semana, em escala contínua de revezamento.',
          'No Residencial Terapêutico Salomão, o fluxo de cuidado é estritamente articulado com a Rede de Atenção Psicossocial (RAPS) de Blumenau/SC: os moradores são acompanhados pela equipe multidisciplinar do CAPS de referência (psiquiatra, psicólogo, assistente social, terapeuta ocupacional, enfermeiro) e vinculados à Unidade Básica de Saúde (eSF/eMulti) do bairro para prevenção em saúde geral (hipertensão, diabetes, vacinação).'
        ],
        practicalTips: [
          'O cuidador não prescreve, não faz diagnósticos médicos e não impõe castigos. Sua missão precípua é a mediação do cotidiano, a reabilitação psicossocial e a garantia de direitos.',
          'A casa pertence aos moradores. Ao entrar em seus quartos, bata na porta e peça licença. Nós somos profissionais autorizados a trabalhar no espaço privado deles.'
        ]
      },
      {
        title: '3. A Reabilitação Psicossocial e a Teoria dos 3 Eixos de Benedetto Saraceno',
        paragraphs: [
          'A Reabilitação Psicossocial, formulada pelo psiquiatra italiano Benedetto Saraceno e adotada pelas diretrizes da OMS e do SUS, define que reabilitar não é curar uma doença incurável, mas restituir o poder de contratualidade e valor social ao sujeito. Saraceno estrutura a reabilitação em 3 eixos indissociáveis:',
          '1. Eixo do Habitat (A Casa): Ter um espaço com intimidade, segurança, cama própria, guarda-roupa individual, fotos na parede e objetos pessoais sem risco de expropriação.',
          '2. Eixo da Rede Social (Os Afetos e a Troca): Construir vínculos reais com a vizinhança, ir à padaria, à praça, participar de celebrações comunitárias, restabelecer contatos com familiares quando possível e conviver com amigos fora do circuito asilar.',
          '3. Eixo do Trabalho e Produção de Sentido (O Valor Social): Ter uma ocupação que faça sentido para o morador (artesanato, cuidados com o jardim, horta, oficinas de geração de renda, música ou voluntariado), resgatando o sentimento de utilidade e realização pessoal.'
        ],
        normativeHighlight: 'Portaria GM/MS nº 3.088/2011 (Diretriz da RAPS): Respeito aos direitos humanos, garantindo a autonomia e a liberdade das pessoas, combatendo estigmas e preconceitos e promovendo a equidade e a inclusão social no SUS.'
      },
      {
        title: '4. Postura Ética do Cuidador: Desconstruindo a Tutela e o Paternalismo',
        paragraphs: [
          'Um dos maiores desafios no cotidiano da SRT é o combate ao "paternalismo tutelar". Por boa intenção mal direcionada, alguns cuidadores acabam fazendo tudo pelos moradores (escolhendo as roupas, servindo o prato já montado, proibindo pequenas iniciativas), reproduzindo a mesma invalidação da autonomia que o manicômio praticava.',
          'Outro desvio grave é a infantilização: tratar adultos de 50 ou 60 anos como "crianças", "meus velhinhos" ou "anjinhos inocentes". O cuidador antimanicomial acolhe a fragilidade, mas trata o morador com a dignidade de sua condição adulta, respeitando sua história pregressa, seus gostos, sua sexualidade, sua religiosidade e suas escolhas individuais.'
        ],
        practicalTips: [
          'Em vez de perguntar: "Quer que eu escolha sua camisa?", estimule: "Seu Geraldo, hoje está fazendo calor. Você prefere a camisa azul ou a verde para o almoço?".',
          'Sempre ofereça opções reais de escolha dentro dos limites de segurança e autocuidado.'
        ]
      }
    ],
    caseStudy: {
      title: 'O Retorno à Vida Comunitária de Seu Geraldo',
      residentContext: 'Seu Geraldo, 62 anos, viveu 31 anos continuamente internado em um hospital psiquiátrico de custódia e tratamento. Chegou ao Residencial Terapêutico Salomão há 2 meses. Apresenta marcha lenta, olhar desconfiado, hábito de guardar restos de comida embaixo do travesseiro e extrema passividade, aguardando ordens para tudo (até para ir ao banheiro ou tomar água).',
      scenarioDescription: 'Durante a manhã, a cuidadora da equipe orienta que é hora do café. Geraldo senta-se na mesa, coloca as mãos no colo e fica imóvel por 40 minutos sem tocar no pão ou na xícara de café, aguardando que alguém lhe dê permissão explícita ou lhe dê o alimento na boca. Quando um novo cuidador tenta pegar o prato dele para ajudá-lo de forma abrupta, Geraldo assusta-se, esconde a cabeça com os braços e começa a tremer, temendo punição física.',
      keyDilemma: 'Como desconstruir o automatismo da institucionalização asilar sem gerar angústia, respeitando o tempo do morador e estimulando a autonomia sem tutoramento excessivo?',
      guidedQuestions: [
        'Quais marcas da institucionalização hospitalar (asilamento) estão presentes no comportamento de Geraldo?',
        'Qual deve ser a conduta ética do cuidador frente ao medo de punição e à passividade do morador?',
        'De que maneira o Plano Terapêutico Singular (PTS) pactuado com o CAPS pode orientar a rotina do café da manhã?'
      ],
      recommendedConduct: 'O cuidador deve acolher o sentimento de medo com voz calma e postura não ameaçadora, dizendo claramente: "Geraldo, aqui é a sua casa. O café é seu e você pode comer no seu tempo, quando quiser". Deve-se sentar ao lado (sem invadir espaço físico) e realizar a ação conjuntamente ("Vamos passar manteiga juntos no pão?"), validando a escolha do morador. O hábito de guardar comida no travesseiro deve ser abordado com pactuação suave (criando um pote próprio na cozinha de acesso livre 24h), mostrando que não haverá privação alimentar.',
      normativeReference: 'Lei nº 10.216/2001, Art. 2º, Parágrafo Único, Inciso II: Proteção contra qualquer forma de abuso, exploração e tratamento desumano ou degradante.'
    },
    quiz: [
      {
        id: 'q1-1',
        question: 'Segundo a Lei Federal nº 10.216/2001 e as diretrizes da Reforma Psiquiátrica Brasileira, qual é o principal objetivo de um Serviço de Residência Terapêutica (SRT)?',
        options: [
          'Oferecer internação de longa permanência para tratamento intensivo de crises agudas em ambiente fechado.',
          'Promover a reinserção social e o resgate da cidadania de pessoas com transtornos mentais em moradia comunitária.',
          'Substituir o hospital psiquiátrico por uma clínica privada com isolamento protetivo temporário.',
          'Servir como abrigo temporário enquanto a equipe de saúde busca vaga em hospital especializado.'
        ],
        correctIndex: 1,
        explanation: 'A SRT criada pela Portaria MS nº 106/2000 e fundamentada na Lei 10.216/2001 é uma moradia inserida no território urbano focada na reabilitação psicossocial e reinserção comunitária, contrapondo-se à lógica do isolamento asilar.'
      },
      {
        id: 'q1-2',
        question: 'Qual é a principal diferença entre uma SRT Tipo I e uma SRT Tipo II, conforme as portarias normativas do Ministério da Saúde?',
        options: [
          'SRT Tipo I atende apenas crianças; SRT Tipo II atende exclusivamente idosos em acamamento.',
          'SRT Tipo I destina-se a pessoas com maior autonomia e suporte técnico pontual; SRT Tipo II destina-se a moradores com maior grau de dependência física/psíquica, exigindo equipe de cuidados 24 horas.',
          'SRT Tipo I fica localizada dentro do hospital geral; SRT Tipo II fica na zona rural.',
          'SRT Tipo I possui médicos de plantão permanente; SRT Tipo II conta apenas com enfermeiros.'
        ],
        correctIndex: 1,
        explanation: 'A diretriz nacional (Portaria 2.840/2014) especifica que a SRT Tipo II conta com suporte presencial contínuo de cuidadores de saúde 24h/dia devido às necessidades elevadas de suporte diário e limitações funcionais graves dos moradores.'
      },
      {
        id: 'q1-3',
        question: 'Um cuidador do Residencial Terapêutico Salomão percebe que o portão da frente precisa permanecer trancado por segurança em determinado horário. Como deve ser encarada a autonomia dos moradores em relação ao espaço da casa?',
        options: [
          'Os moradores nunca podem ter chaves ou liberdade de sair, pois são considerados incapazes perante a lei.',
          'A casa deve funcionar com regras hospitalares rígidas, definindo horários fixos de tranca e proibição de visitas.',
          'A SRT é a residência dos moradores; restrições de mobilidade devem ser mínimas, pactuadas individualmente no PTS e fundadas na proteção, mantendo a atmosfera de lar e liberdade de circulação.',
          'A chave da casa deve ficar restrita exclusivamente ao médico do CAPS regional.'
        ],
        correctIndex: 2,
        explanation: 'O ambiente da SRT é domiciliar. Qualquer limitação deve ser estritamente pactuada no Plano Terapêutico Singular (PTS) com o CAPS e com o próprio morador, garantindo o máximo de liberdade, circulação e dignidade comunitária.'
      },
      {
        id: 'q1-4',
        question: 'O conceito de Reabilitação Psicossocial desenvolvido por Benedetto Saraceno fundamenta-se em três eixos essenciais. Quais são eles?',
        options: [
          'Medicação, Isolamento e Contenção Física.',
          'Casa (Habitat), Rede Social (Trocas/Afeto) e Trabalho/Valor Social (Sentido da Vida).',
          'Diagnóstico Psiquiátrico, Eletroconvulsoterapia e Internação Judicial.',
          'Higiene, Alimentação e Repouso Obrigatório.'
        ],
        correctIndex: 1,
        explanation: 'Para Saraceno, reabilitar é reconstruir a cidadania a partir do habitar (casa digna), do pertencer (rede de relações interpessoais) e do produzir sentido (trabalho, cultura e valor social).'
      },
      {
        id: 'q1-5',
        question: 'Ao ingressar no quarto de um morador da SRT para organizar a roupa de cama, qual atitude demonstra respeito ao espaço privado e aos princípios da Reforma Psiquiátrica?',
        options: [
          'Entrar sem aviso a qualquer hora, pois o cuidador tem livre acesso a todas as dependências.',
          'Bater na porta, pedir licença, cumprimentar o morador e explicar com gentileza o objetivo da entrada.',
          'Exigir que o morador saia do quarto imediatamente para a limpeza ser feita.',
          'Revistar as gavetas e bolsos do morador sem justificativa técnica ou consentimento.'
        ],
        correctIndex: 1,
        explanation: 'Na SRT, o quarto é o espaço privativo e sagrado do morador. O cuidador trabalha na casa do morador, devendo sempre pedir licença, respeitar a privacidade e a posse dos objetos pessoais.'
      },
      {
        id: 'q1-6',
        question: 'Por que o termo "institucionalização" ou "asilamento" é considerado nocivo ao desenvolvimento do indivíduo?',
        options: [
          'Porque reduz o custo de manutenção da rede municipal de saúde.',
          'Porque atrofia a capacidade decisória do sujeito, tornando-o dependente de ordens externas e apagando sua subjetividade.',
          'Porque aumenta a resistência física do paciente a medicamentos psicotrópicos.',
          'Porque impede que o morador assista televisão no horário nobre.'
        ],
        correctIndex: 1,
        explanation: 'A vida asilar retira a capacidade de escolha e autodeterminação. O sujeito acostuma-se à passividade forçada, perdendo as referências mínimas de autonomia e cuidado pessoal.'
      },
      {
        id: 'q1-7',
        question: 'Qual é o papel do Plano Terapêutico Singular (PTS) na rotina de uma Residência Terapêutica?',
        options: [
          'Um documento punitivo aplicado quando o morador quebra uma regra interna da casa.',
          'Um planejamento de metas individualizadas construído conjuntamente pelo morador, equipe da SRT e equipe do CAPS para promover autonomia e projetos de vida.',
          'Uma lista de horários fixos de banho e remédios igual para todos os moradores da casa.',
          'Um formulário contábil para cobrança de aluguel dos moradores.'
        ],
        correctIndex: 1,
        explanation: 'O PTS é um instrumento clínico e pedagógico de pactuação contínua, onde se definem ações singulares para o resgate de habilidades, sonhos e autonomia de cada sujeito.'
      },
      {
        id: 'q1-8',
        question: 'De que forma a equipe do Residencial Salomão em Blumenau/SC deve se articular com a Atenção Primária à Saúde (eSF/UBS)?',
        options: [
          'A SRT não deve ter contato com a UBS, pois atende apenas saúde mental e não saúde física.',
          'Cadastrando os moradores na UBS do bairro para acompanhamento integral (vacinação, controle de diabetes, hipertensão, saúde bucal e exames preventivos).',
          'Encaminhando os moradores para o hospital apenas quando estiverem em estado terminal.',
          'Exigindo que a UBS forneça alimentação diária pronta para os cuidadores.'
        ],
        correctIndex: 1,
        explanation: 'O morador da SRT é cidadão do território e usuário pleno do SUS. O acompanhamento de saúde física deve ser garantido pela Estratégia Saúde da Família (eSF) da UBS do bairro.'
      },
      {
        id: 'q1-9',
        question: 'Tratar moradores adultos de uma SRT com termos diminutivos e infantilizantes ("meus bebês", "anjinhos") constitui um desvio ético conhecido como:',
        options: [
          'Comunicação assertiva qualificada.',
          'Paternalismo infantilizador, que anula a condição adulta e cidadã do sujeito.',
          'Protocolo padrão de humanização hospitalar.',
          'Técnica avançada de reabilitação motora.'
        ],
        correctIndex: 1,
        explanation: 'A infantilização reforça a tutela e a menoridade social. Cuidadores antimanicomiais devem tratar os moradores com afeto e respeito compatíveis com sua idade adulta e dignidade civil.'
      },
      {
        id: 'q1-10',
        question: 'Se um morador da SRT manifestar o desejo de administrar seu próprio Benefício de Prestação Continuada (BPC / Lei Orgânica da Assistência Social) ou aposentadoria, qual deve ser a orientação da equipe?',
        options: [
          'A equipe deve confiscar o cartão bancário e proibir o morador de ver seu extrato.',
          'Apoiar e trabalhar gradativamente a educação financeira com o apoio do assistente social do CAPS, estimulando o morador a gerenciar suas compras pessoais.',
          'Entregar todo o dinheiro a vizinhos para que eles administrem.',
          'Dizer ao morador que pessoas com diagnóstico psiquiátrico não têm direito a dinheiro.'
        ],
        correctIndex: 1,
        explanation: 'O dinheiro do benefício pertence ao morador. A equipe da SRT e do CAPS deve estimular o manejo financeiro autônomo (comprar suas roupas, seus doces, seus passeios), resgatando o valor de troca social.'
      }
    ],
    essayTask: {
      prompt: 'Analise criticamente a diferença entre a "lógica asilar/tutelar" e a "lógica antimanicomial emancipatória" no cotidiano de uma Residência Terapêutica. Cite dois exemplos práticos de como o cuidador do Residencial Salomão pode transformar uma atividade rotineira (como a escolha da alimentação ou do vestuário) em um ato de reabilitação psicossocial e cidadania.',
      rubric: [
        {
          criterion: 'Fundamentação na Lei 10.216/2001 e Reforma Psiquiátrica',
          weight: '30%',
          guideline: 'Demonstrar clareza sobre o papel da desinstitucionalização e superação do modelo manicomial segregador.'
        },
        {
          criterion: 'Aplicação prática aos 3 eixos de Saraceno (Habitat, Rede Social, Sentido)',
          weight: '40%',
          guideline: 'Descrever como o cotidiano domiciliar promove a autonomia sem paternalismo ou infantilização.'
        },
        {
          criterion: 'Clareza técnica e postura ética profissional',
          weight: '30%',
          guideline: 'Redação clara, respeitosa, propositiva e focada no papel pedagógico e acolhedor do cuidador.'
        }
      ],
      modelAnswer: 'A lógica asilar baseia-se na padronização, no isolamento, na imposição de horários rígidos e na perda da identidade individual, onde o usuário é mero objeto passivo de cuidados. Em contraste, a lógica antimanicomial e emancipatória do Residencial Salomão (fundamentada na Lei 10.216/2001) reconhece o morador como sujeito de direitos e protagonista de sua própria vida. No cotidiano, o cuidador aplica essa emancipação de forma prática: 1) Na alimentação, em vez de servir o prato pronto sem consulta, o cuidador convida o morador para a cozinha, apresenta as opções de alimentos disponíveis, incentiva-o a servir a quantidade desejada ou a temperar sua salada, transformando o ato de comer em exercício de escolha; 2) No vestuário, o cuidador respeita o gosto pessoal e o estilo de cada um, estimulando o morador a abrir o guarda-roupa, escolher a combinação de cores para sair à rua e guardar suas roupas limpas, reconstruindo o senso de posse e autoestima corporal.'
    }
  },

  // ==========================================
  // MÓDULO 2: COTIDIANO E CUIDADO FÍSICO COM DIGNIDADE
  // ==========================================
  {
    id: 2,
    title: 'Módulo 2: O Cotidiano e o Cuidado Físico com Dignidade',
    shortTitle: 'Cotidiano e Cuidado Físico',
    subtitle: 'Autonomia nas ABVDs, Higiene Humanizada, Prevenção de Lesões por Pressão e Nutrição Afetiva',
    summary: 'Aprenda a estruturar a rotina de um lar terapêutico sem reproduzir a rigidez asilar. Domine técnicas humanizadas de auxílio nas Atividades Básicas de Vida Diária (ABVD), prevenção de lesões de pele, hidratação e biossegurança domiciliar segundo a RDC ANVISA nº 50/2002.',
    iconName: 'HeartHandshake',
    workloadHours: 8,
    normativeBase: [
      'RDC ANVISA nº 50/2002 (Critérios de infraestrutura física e sanitária em serviços coletivos de saúde)',
      'Cadernos de Atenção Básica nº 39 do Ministério da Saúde (Núcleo de Apoio à Saúde da Família e Reabilitação)',
      'Protocolos Clínicos e Diretrizes Terapêuticas (PCDT) para Prevenção e Tratamento de Lesões por Pressão (LPP/MS)',
      'Guia Alimentar para a População Brasileira (Ministério da Saúde)'
    ],
    contentSections: [
      {
        title: '1. A Rotina Domiciliar: Do Controle Hospitalar à Flexibilidade do Lar',
        paragraphs: [
          'No ambiente asilar tradicional, a rotina é militarizada: todos acordam ao toque de campainha, tomam banho em fila no mesmo horário e comem em mesas coletivas de aço inox. Na Residência Terapêutica Salomão, a rotina é viva, humana e adaptada às necessidades e ritmos biológicos dos moradores.',
          'Construir uma rotina doméstica saudável não significa impor horários ditatoriais, mas estabelecer uma previsibilidade tranquilizadora que ajude os moradores a se organizarem no tempo e no espaço. Quem gosta de acordar mais cedo tem seu café servido com calma; quem precisa de repouso adicional tem seu sono respeitado, desde que as necessidades nutricionais e medicamentosas sejam atendidas com segurança.'
        ],
        keyTakeaway: 'A regra de ouro do cotidiano é: "FAZER COM E NÃO FAZER POR". Se um morador consegue segurar a escova de dentes, o cuidador guia e estimula o movimento, mas não toma a escova da mão dele por pressa.',
        normativeHighlight: 'Diretriz de Humanização do SUS: O cuidado cotidiano deve promover a co-responsabilidade e a autonomia dos sujeitos, valorizando a dimensão subjetiva e singular de cada indivíduo.'
      },
      {
        title: '2. Higiene e Banho Humanizado: Manejo de Traumas e Recusas',
        paragraphs: [
          'O momento do banho é uma das atividades mais delicadas na SRT. Muitos moradores que passaram décadas em manicômios têm memórias de abusos associadas à água (duchas frias de mangueira usadas como castigo, banhos coletivos forçados sem privacidade). Por essa razão, a recusa ao banho não deve ser interpretada como "birra" ou "falta de higiene", mas frequentemente como resposta a um gatilho de dor e medo.',
          'Passos para o Banho Humanizado:',
          '1. Preparação Ambiental: Manter o banheiro aquecido, privativo (portas e cortinas fechadas), com toalha macia e sabonete preferido à disposição.',
          '2. Comunicação Prévia: Nunca despir o morador subitamente. Explique com calma o que vai acontecer: "Dona Ivone, a água está morninha e bem gostosa. Vamos lavar os braços primeiro?".',
          '3. Respeito ao Pudor: Manter o morador coberto com uma toalha seca durante a transição e permitir que ele mesmo lave as partes íntimas quando capaz.',
          '4. Alternativas em caso de Recusa Aguda: Se houver recusa severa com angústia, não force. Negocie a higienização facial e das mãos, ou banho de leito/bacia com água morna e toalhas úmidas, retomando a tentativa mais tarde.'
        ],
        practicalTips: [
          'Teste sempre a temperatura da água no dorso da sua mão antes de direcionar o chuveiro para o corpo do morador.',
          'Utilize tapetes de borracha antiderrapantes e verifique a firmeza das barras de apoio no box.'
        ]
      },
      {
        title: '3. Prevenção e Manejo de Lesões por Pressão (LPP) e Cuidados Posturais',
        paragraphs: [
          'Moradores com limitações de mobilidade ou que passam longos períodos sentados em cadeiras de rodas ou deitados estão em alto risco de desenvolver Lesões por Pressão (LPP), antigamente chamadas de escaras. A prevenção é um dever técnico primário da equipe de cuidadores:',
          '• Mudança de Decúbito Sistemática: Em moradores acamados, alternar a posição corporal a cada 2 horas (decúbito dorsal, decúbito lateral direito e lateral esquerdo em ângulo de 30º para não sobrecarregar o trocânter).',
          '• Alívio de Pressão na Poltrona: Em moradores cadeirantes, reposicionar o peso corporal a cada 30 a 60 minutos e utilizar almofadas de redistribuição de ar ou gel.',
          '• Inspeção Diária da Pele: Durante o banho e a troca de fraldas, inspecionar rigorosamente as proeminências ósseas: região sacral, calcanhares, cotovelos, escápulas e trocânteres.',
          '• Hidratação Cutânea: Aplicar loções hidratantes suaves e AGE (Ácidos Graxos Essenciais). ATENÇÃO: NUNCA massagear áreas que já apresentem vermelhidão fixa (hiperemia não branqueável), pois a massagem agrava a isquemia tecidual.'
        ],
        normativeHighlight: 'Protocolo de Prevenção de Úlcera por Pressão (MS/ANVISA): Medidas preventivas adequadas reduzem em até 95% a incidência de lesões graves de pele em ambientes de acolhimento e saúde.'
      },
      {
        title: '4. Nutrição Afetiva, Hidratação e Prevenção de Engasgos (Disfagia)',
        paragraphs: [
          'A alimentação na SRT tem função terapêutica, social e biológica. Preparar bolos, escolher o tempero do almoço e sentar juntos à mesa são atos de celebração da vida comunitária.',
          'No entanto, moradores em uso crônico de antipsicóticos ou com doenças neurológicas associadas frequentemente apresentam disfagia (dificuldade de deglutição) e lentificação motora, aumentando o risco de engasgos e pneumonia aspirativa.',
          'Cuidados Vitais na Alimentação:',
          '• Postura Ergonômica: O morador deve se alimentar sempre sentado com a coluna a 90º. NUNCA alimentar morador deitado.',
          '• Ritmo Calmo: Respeite o tempo de mastigação e deglutição. Aguarde a deglutição completa antes de oferecer nova garfada.',
          '• Adaptação de Consistência: Se orientado pela fonoaudióloga ou equipe de saúde, utilizar espessantes alimentares para líquidos e adaptar alimentos sólidos para consistência pastosa ou branda.',
          '• Oferta Hídrica Ativa: Manter oferta regular de água fresca ao longo de todo o dia (mínimo de 1,5 a 2 litros por morador, salvo contraindicação renal/cardíaca).'
        ]
      }
    ],
    caseStudy: {
      title: 'O Conflito do Banho e a Higiene de Dona Valdete',
      residentContext: 'Dona Valdete, 58 anos, diagnosticada com esquizofrenia paranoide e sequela de AVC com hemiparesia leve à direita, reside no Residencial Salomão há 1 ano. É extremamente apegada às suas bolsas velhas e casacos grossos, mesmo em dias de calor intenso de verão em Blumenau.',
      scenarioDescription: 'Às 16h, durante a escala de banho, o cuidador avisa Valdete que ela precisa tomar banho e tirar os três casacos que está vestindo. Valdete agarra as roupas com força, senta no chão da sala e grita que não vai tirar as roupas porque "vão roubar suas joias e jogar água de mangueira nela". O cuidador novato perde a paciência, puxa o braço de Valdete para levantá-la e ameaça deixá-la sem jantar.',
      keyDilemma: 'Como mediar a necessidade real de higiene corporal e troca de roupas sem cometer violência verbal/física e sem desrespeitar os medos arcaicos da moradora?',
      guidedQuestions: [
        'Qual o erro grave de conduta cometido pelo cuidador no manejo da situação?',
        'Como a equipe pode negociar a segurança das roupas e pertences de Valdete para que ela se sinta protegida?',
        'Quais estratégias de cuidado físico respeitam a dignidade e a integridade da moradora?'
      ],
      recommendedConduct: 'O cuidador deve cessar imediatamente qualquer contato físico forçado, ajoelhar-se na altura dos olhos de Valdete e pedir desculpas pelo susto. Deve validar seu sentimento: "Dona Valdete, suas coisas são suas e ninguém vai mexer nelas". A equipe pode propor que as bolsas e os casacos fiquem dentro de uma cesta visível dentro do banheiro ao alcance dos olhos dela durante o banho. O banho deve ser realizado em etapas tranquilas, adaptado para a hemiparesia, permitindo que ela escolha roupas limpas e confortáveis.',
      normativeReference: 'RDC ANVISA nº 50/2002 e Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015): Garantia de acessibilidade, respeito à integridade física e moral e proibição de tratamento coercitivo.'
    },
    quiz: [
      {
        id: 'q2-1',
        question: 'Qual é o lema central da reabilitação psicossocial no suporte às Atividades Básicas de Vida Diária (ABVD)?',
        options: [
          'Fazer o mais rápido possível pelo morador para economizar tempo da equipe.',
          'Fazer COM o morador e não PELO morador, estimulando cada pequeno gesto de autonomia.',
          'Exigir que o morador faça tudo sozinho sem qualquer ajuda ou supervisão.',
          'Delegar todas as tarefas de higiene para a família nos finais de semana.'
        ],
        correctIndex: 1,
        explanation: 'O cuidado reabilitador estimula a autonomia residual do sujeito. O cuidador apoia, orienta e compartilha a tarefa ("fazer com"), evitando a substituição desnecessária ("fazer por").'
      },
      {
        id: 'q2-2',
        question: 'Durante o auxílio no banho de um morador com histórico de longa internação asilar, ele começa a chorar e recusa entrar no box. Qual deve ser a atitude imediata do cuidador?',
        options: [
          'Despir o morador à força e colocá-lo debaixo da água fria para interromper a crise.',
          'Acolher com voz calma, interromper a ação que causa sofrimento, respeitar o espaço e propor alternativas como banho de bacia morno ou retomar mais tarde.',
          'Trancar a porta do banheiro até que ele decida tomar o banho sozinho.',
          'Avisar que ele perderá a sobremesa do almoço caso não tome banho imediatamente.'
        ],
        correctIndex: 1,
        explanation: 'O banho forçado reproduz a violência asilar. A recusa deve ser tratada com acolhimento empático, diálogo paciente e adaptações que garantam a dignidade do morador.'
      },
      {
        id: 'q2-3',
        question: 'Para a prevenção eficaz de Lesões por Pressão (LPP) em moradores com mobilidade reduzida acamados, qual é o intervalo máximo recomendado para mudança de decúbito?',
        options: [
          'A cada 2 horas ao longo de todo o dia e noite.',
          'Apenas uma vez ao dia pela manhã.',
          'A cada 12 horas durante a troca de plantão.',
          'Somente quando o morador solicitar ajuda verbalmente.'
        ],
        correctIndex: 0,
        explanation: 'Diretrizes internacionais e o Ministério da Saúde estabelecem a mudança sistemática de posição a cada 2 horas para aliviar a isquemia tecidual sobre proeminências ósseas.'
      },
      {
        id: 'q2-4',
        question: 'Ao inspecionar a pele de um morador idoso durante o banho, o cuidador nota uma área avermelhada na região sacral que não embranquece ao toque. Qual conduta é expressamente CONTRAINDICADA?',
        options: [
          'Aliviar a pressão sobre o local e reposicionar o morador.',
          'Massagear com força a região avermelhada com álcool ou cremes.',
          'Comunicar a enfermagem do CAPS/UBS para avaliação e conduta tópica.',
          'Hidratar a pele intacta ao redor sem fricção mecânica direta na lesão.'
        ],
        correctIndex: 1,
        explanation: 'A massagem vigorosa sobre áreas de hiperemia não branqueável (estágio 1 de LPP) é contraindicada, pois rompe os capilares já fragilizados e acelera a necrose tecidual.'
      },
      {
        id: 'q2-5',
        question: 'Qual é a posição corporal correta para oferecer alimentação e hidratação a um morador com queixa de dificuldade de engolir (disfagia)?',
        options: [
          'Deitado de costas com a cabeça baixa para relaxar o pescoço.',
          'Sentado ereto com a coluna a 90 graus (posição de Fowler alta) e tronco alinhado.',
          'Deitado de lado com o prato colocado na altura dos pés.',
          'Em pé correndo pelo corredor da residência.'
        ],
        correctIndex: 1,
        explanation: 'Alimentar o morador sentado a 90º com apoio para a cabeça e tronco é essencial para prevenir broncoaspiração de alimentos para os pulmões e engasgos fatais.'
      },
      {
        id: 'q2-6',
        question: 'De acordo com a RDC ANVISA nº 50/2002 sobre biossegurança e infraestrutura, como devem ser acondicionados os lençóis e roupas sujas com fluidos corporais na SRT?',
        options: [
          'Jogados diretamente no chão do corredor para serem recolhidos depois.',
          'Acondicionados em sacos impermeáveis (hamper) devidamente identificados e lavados separadamente com desinfetante adequado.',
          'Misturados com os panos de prato da cozinha na mesma bacia.',
          'Guardados úmidos dentro do armário do morador.'
        ],
        correctIndex: 1,
        explanation: 'Roupas com presença de fluidos corporais exigem manejo higiênico seguro em sacos impermeáveis para evitar contaminação cruzada no ambiente domiciliar coletivo.'
      },
      {
        id: 'q2-7',
        question: 'Um morador com disfagia leve engasga frequentemente com água pura. Qual é a intervenção correta após avaliação fonoaudiológica e médica?',
        options: [
          'Suspender completamente a oferta de qualquer líquido para o morador.',
          'Utilizar espessante alimentar na dosagem prescrita para conferir consistência adequada (néctar, mel ou pudim) aos líquidos oferecidos.',
          'Obrigar o morador a beber água rapidamente com um canudo largo.',
          'Oferecer refrigerante com bastante gás para desobstruir a garganta.'
        ],
        correctIndex: 1,
        explanation: 'O uso de espessantes alimentares padronizados permite que líquidos atinjam a consistência segura recomendada por fonoaudiólogos, prevenindo a aspiração pulmonar.'
      },
      {
        id: 'q2-8',
        question: 'Por que o incentivo à higiene bucal (escovação dos dentes e limpeza de próteses dentárias) após cada refeição é crucial na saúde mental?',
        options: [
          'Apenas por exigência estética da coordenação da casa.',
          'Porque a má higiene bucal combinada com a boca seca (efeito colateral de antipsicóticos) gera cáries severas, infecções fúngicas e risco de endocardite e pneumonias.',
          'Porque substitui o uso de medicamentos psiquiátricos diários.',
          'Para evitar que os moradores conversem durante a tarde.'
        ],
        correctIndex: 1,
        explanation: 'Medicamentos psicotrópicos reduzem o fluxo salivar (xerostomia), tornando dentes e gengivas altamente suscetíveis a infecções bacterianas e pneumonias por aspiração bacteriana oral.'
      },
      {
        id: 'q2-9',
        question: 'Ao auxiliar um morador cadeirante na transferência da cama para a cadeira de rodas, qual cuidado ergonômico o cuidador deve adotar para proteger sua própria coluna e a segurança do morador?',
        options: [
          'Dobrar a coluna lombar mantendo as pernas esticadas e puxar o morador pelo pescoço.',
          'Travar as rodas da cadeira, flexionar os joelhos, manter a coluna ereta, posicionar a cadeira próxima à cama e solicitar auxílio de outro colega se necessário.',
          'Deixar a cadeira de rodas solta para que ela deslize livremente durante o movimento.',
          'Realizar o movimento com apenas uma das mãos enquanto segura o celular na outra.'
        ],
        correctIndex: 1,
        explanation: 'Ergonomia do cuidador exige joelhos flexionados, coluna preservada, base de apoio ampla e travamento firme dos equipamentos de mobilidade.'
      },
      {
        id: 'q2-10',
        question: 'Qual é a conduta correta em relação à alimentação saudável e afetiva dos moradores no Residencial Terapêutico Salomão?',
        options: [
          'Servir refeições ultraprocessadas todos os dias para evitar o trabalho de cozinhar.',
          'Construir cardápios balanceados com alimentos frescos, respeitando restrições clínicas (diabetes, hipertensão) e incluindo pratos típicos e preferências culturais dos moradores.',
          'Proibir que qualquer morador coma doces ou frutas sob qualquer circunstância.',
          'Obrigar todos os moradores a comer exatamente a mesma quantidade de comida sem respeitar a saciedade individual.'
        ],
        correctIndex: 1,
        explanation: 'A alimentação humanizada equilibra o rigor nutricional preventivo com o afeto, a memória alimentar e o prazer gastronômico do viver comunitário.'
      }
    ],
    essayTask: {
      prompt: 'Descreva um protocolo de atuação do cuidador para a realização do Banho Humanizado em um morador de SRT que apresenta resistência e medo decorrentes de vivências traumáticas em hospitais psiquiátricos. Destaque: 1) A preparação do ambiente; 2) A abordagem comunicacional; 3) A conduta ética caso a recusa persista.',
      rubric: [
        {
          criterion: 'Domínio das técnicas de banho humanizado e acolhimento',
          weight: '40%',
          guideline: 'Demonstrar passos detalhados de ambientação, respeito ao pudor e prevenção de quedas.'
        },
        {
          criterion: 'Sensibilidade ao trauma asilar e postura não punitiva',
          weight: '35%',
          guideline: 'Explicitar a proibição de coerção física e apresentar alternativas suaves e respeitosas.'
        },
        {
          criterion: 'Registro técnico e articulação com a equipe',
          weight: '25%',
          guideline: 'Explicar como o evento deve ser registrado no diário de bordo e comunicado à referência técnica.'
        }
      ],
      modelAnswer: 'O protocolo do Banho Humanizado estrutura-se em 3 etapas: 1) Preparação Ambiental: O cuidador verifica previamente a temperatura da água no dorso da mão, garante que portas e cortinas estejam fechadas para assegurar privacidade, separa toalhas secas, roupas limpas escolhidas pelo próprio morador e produtos de higiene de sua preferência, além de checar barras de apoio e tapete antiderrapante; 2) Abordagem Comunicacional: O cuidador aproxima-se com tom de voz calmo e acolhedor, explica o procedimento sem pressa, convida o morador a acompanhar o preparo e estimula que ele participe lavando partes do corpo acessíveis, mantendo-o coberto com toalha para preservar o pudor; 3) Conduta em caso de Recusa Persistente: Caso o morador apresente intensa angústia, o cuidador NUNCA utiliza força física ou ameaças. Acolhe o medo, interrompe a tentativa no chuveiro e propõe higienização facial e das mãos ou banho de leito morno com toalhas úmidas, pactuando uma nova tentativa mais tarde. Ao término, registra o comportamento de forma técnica no diário de bordo e compartilha com a equipe do CAPS para atualização do PTS.'
    }
  },

  // ==========================================
  // MÓDULO 3: SAÚDE MENTAL PRÁTICA E MANEJO DE CRISES
  // ==========================================
  {
    id: 3,
    title: 'Módulo 3: Saúde Mental Prática e Manejo de Crises',
    shortTitle: 'Manejo de Crises e Desescalada',
    subtitle: 'Sinais Prodrômicos, Desescalada Verbal (Método Richmond), Não-Violência e Articulação na RAPS',
    summary: 'Domine a identificação precoce de desestabilizações psíquicas, técnicas avançadas de desescalada verbal sem coerção física e a atuação articulada com CAPS III, SAMU 192 e a rede de urgência de Blumenau/SC.',
    iconName: 'ShieldAlert',
    workloadHours: 8,
    normativeBase: [
      'Lei Federal nº 10.216/2001 (Proteção contra violência e tratamento desumano em saúde mental)',
      'Protocolo de Desescalada Verbal em Situações de Agitação Psicomotora (Projeto BETA / Richmond Consensus)',
      'Portaria GM/MS nº 3.088/2011 (Articulação da Rede de Atenção às Urgências e Emergências Psiquiátricas na RAPS)',
      'Diretrizes do Ministério da Saúde para o Manejo de Comportamento Suicida e Autolesão'
    ],
    contentSections: [
      {
        title: '1. Compreendendo a Crise em Saúde Mental: Sofrimento, Não Delito',
        paragraphs: [
          'A crise psíquica não é um ato de desobediência civil nem um crime; é a expressão aguda de um sofrimento psíquico insuportável no qual os mecanismos habituais de autorregulação do sujeito entram em colapso temporário. Na SRT, o objetivo da equipe não é "reprimir" a crise com violência, mas ser o continente seguro e afetivo que ajuda o morador a restabelecer o equilíbrio.',
          'Sinais Prodrômicos (Precursores da Crise):',
          'Raramente uma crise grave irrompe sem avisos prévios. Cuidadores atentos reconhecem os pródromos dias ou horas antes:',
          '• Alteração abrupta no padrão de sono (insônia terminal, inversão dia/noite);',
          '• Inquietação psicomotora contínua ("pacing" - andar de um lado para o outro sem parar);',
          '• Aumento de solilóquios (falar sozinho em tom alterado ou discutir com vozes alucinatórias);',
          '• Isolamento social repentino ou recusa de refeições;',
          '• Postura de hipervigilância, olhar assustado ou desconfiança intensa.'
        ],
        keyTakeaway: 'Identificar o pródromo e intervir precocemente com escuta, acolhimento e ajuste de rotina evita 80% das crises agudas graves com necessidade de encaminhamento externo.',
        normativeHighlight: 'Art. 2º da Lei 10.216/2001: É direito do usuário ter atendimento em ambiente terapêutico menos invasivo possível, visando primordialmente sua reinserção comunitária.'
      },
      {
        title: '2. Os 10 Princípios da Desescalada Verbal (Método de Richmond / Projeto BETA)',
        paragraphs: [
          'O Projeto BETA (Best Practices in Evaluation and Treatment of Agitation) e o Consenso de Richmond estabelecem 10 passos fundamentais para a desescalada verbal em situações de agitação psicomotora:',
          '1. Respeite o Espaço Pessoal: Mantenha pelo menos dois braços de distância do morador. Não se posicione encurralando-o nem fique de costas para uma parede fechada.',
          '2. Não Seja Provocador: Mantenha postura corporal aberta, mãos visíveis, sem cruzar os braços, sem cerrar os punhos e sem apontar o dedo.',
          '3. Estabeleça Contato Verbal: Apenas UM cuidador deve falar de cada vez. Múltiplas vozes falando juntas aumentam a sobrecarga cognitiva e a desorganização do morador.',
          '4. Seja Conciso e Claro: Use frases curtas, objetivas e em vocabulário simples. Pessoas em crise têm dificuldade de processar raciocínios complexos.',
          '5. Identifique Desejos e Sentimentos: Valide a emoção: "Seu Carlos, percebo que o senhor está muito irritado com o barulho da TV. Eu quero te ajudar".',
          '6. Escute Atentamente: Ouça o que o morador diz sem interrompê-lo a cada frase.',
          '7. Concorde ou Concorde em Discordar: Encontre pontos de verdade ("O senhor tem razão, a casa está barulhenta hoje") sem alimentar delírios delirantes graves.',
          '8. Estabeleça Limites Claros de Segurança: Informe os limites com firmeza serena: "Seu Carlos, eu estou aqui para te proteger, mas não posso permitir que o senhor quebre o prato na sala".',
          '9. Ofereça Opções e Esperança: Dê escolhas reais: "O senhor prefere sentar um pouco no jardim para respirar ou quer tomar um copo de água fresca no quarto?".',
          '10. Debriefing com o Morador e a Equipe: Após a crise passar, converse com o morador sobre o que aconteceu e discuta com a equipe para prevenir novos episódios.'
        ],
        practicalTips: [
          'Mantenha o tom de voz mais baixo e mais lento do que o do morador em crise. O tom de voz do cuidador atua como modulador biológico do estresse.',
          'Nunca ria, não faça ironias e nunca descarte o sofrimento dizendo: "Isso é bobagem sua".'
        ]
      },
      {
        title: '3. Manejo de Delírios, Alucinações e Crises de Ansiedade Aguda',
        paragraphs: [
          'Como se comunicar diante de conteúdos psicóticos?',
          '• Diante de Delírios (Crenças falsas inabaláveis, ex: "Estão envenenando a comida"): NUNCA debata ou tente provar com lógica cartesiana que o delírio é falso (isso aumenta a desconfiança). Também NUNCA finja que vê ou acredita no delírio. Foque no afeto e na segurança: "Eu compreendo que você está com muito medo de comer. Eu mesmo preparei esse almoço e garanto que ele está fresco e seguro. Vamos almoçar juntos?".',
          '• Diante de Alucinações (Percepções sensoriais sem objeto, ex: ouvir vozes): Reconheça a experiência do morador sem validar a realidade externa das vozes: "Eu não escuto essas vozes, mas percebo que o que elas estão te dizendo te deixa muito assustado. O que podemos fazer para você se sentir mais calmo agora?".'
        ]
      },
      {
        title: '4. Fluxo de Emergência e Articulação na RAPS de Blumenau/SC',
        paragraphs: [
          'Quando a desescalada verbal não for suficiente e houver risco iminente de autoagressão severa ou violência física descontrolada que coloque em perigo a vida dos moradores e da equipe:',
          '1. Priorize a segurança física de todos os presentes, retirando os outros moradores da área de conflito.',
          '2. Faça contato imediato com a equipe técnica de referência do CAPS II / CAPS III de Blumenau.',
          '3. Se houver risco vital agudo, acione o SAMU 192 informando com clareza: Trata-se de urgência psiquiátrica em Serviço de Residência Terapêutica (SRT), histórico de saúde, sinais vitais e ausência de resposta à desescalada.',
          '4. É terminantemente proibida a utilização de amarras improvisadas, cordas, agressões físicas ou trancafiamento punitivo de moradores em quartos escuros (crime de maus-tratos e cárcere privado).'
        ]
      }
    ],
    caseStudy: {
      title: 'A Crise Persecutória Noturna de Seu Marcos',
      residentContext: 'Seu Marcos, 52 anos, residente na SRT Salomão há 2 anos, tem diagnóstico de Esquizofrenia Paranoide. Há 2 dias apresenta insônia e não toma a medicação noturna devido a um desentendimento com outro colega de quarto.',
      scenarioDescription: 'Às 23h30, Marcos surge no corredor com um cabo de vassoura na mão, gritando que "homens armados invadiram o telhado para matá-lo" e ameaça quebrar a janela da sala. Os demais moradores acordam assustados. Um dos cuidadores pega outro cabo de vassoura para enfrentá-lo e começa a gritar para ele largar o pedaço de madeira.',
      keyDilemma: 'Como desarmar uma situação de risco iminente de violência sem confronto físico, reduzindo o pânico dos moradores e estabilizando o sujeito em crise?',
      guidedQuestions: [
        'Qual o erro grave cometido pelo cuidador ao pegar outro pedaço de pau e gritar?',
        'Como aplicar os princípios de Richmond para desarmar Marcos verbalmente?',
        'Qual o fluxo de apoio e medicação de resgate previsto com o CAPS de Blumenau?'
      ],
      recommendedConduct: 'O segundo cuidador deve intervir imediatamente, solicitando que o colega abaixe o pedaço de madeira e recue. Deve acalmar os outros moradores e conduzi-los aos seus quartos em segurança. Em seguida, posiciona-se a 3 metros de Marcos, com as mãos abertas para cima, tom de voz sereno e firme: "Seu Marcos, sou o Paulo. Estou aqui e estou desarmado. Aqui na casa não há nenhum invasor e nós estamos protegendo as portas. Abaixe o cabo para podermos conversar; ninguém vai te machucar". Ao demonstrar proteção e não ameaça, Marcos tende a ceder. Após a entrega do objeto, oferece-se água, escuta-se o relato e administra-se a medicação de resgate SOS prescrita pelo psiquiatra do CAPS.',
      normativeReference: 'Lei nº 10.216/2001, Art. 2º, Parágrafo Único, Inciso I: Direito ao melhor tratamento de saúde mental de acordo com as necessidades, em ambiente menos restritivo possível.'
    },
    quiz: [
      {
        id: 'q3-1',
        question: 'O que são sinais prodrômicos no contexto do cuidado em saúde mental em uma Residência Terapêutica?',
        options: [
          'Sintomas de doenças dermatológicas graves na pele.',
          'Sinais e alterações comportamentais precoces que indicam o início de uma desestabilização psíquica antes da eclosão da crise aguda.',
          'Procedimentos burocráticos exigidos pelo SUS para internação hospitalar.',
          'Exames de sangue laboratoriais de rotina semestrais.'
        ],
        correctIndex: 1,
        explanation: 'Sinais prodrômicos são alterações precoces (insônia, agitação, isolamento, solilóquios) que alertam a equipe sobre uma crise iminente, permitindo intervenções preventivas oportunas.'
      },
      {
        id: 'q3-2',
        question: 'Segundo o Protocolo de Richmond de Desescalada Verbal (Projeto BETA), qual é a primeira medida ao abordar uma pessoa em estado de agitação psicomotora?',
        options: [
          'Segurar os braços da pessoa imediatamente para evitar movimentos bruscos.',
          'Garantir a segurança do ambiente, manter distância física segura (2 braços) e adotar postura corporal aberta e não ameaçadora.',
          'Gritar ordens claras com voz autoritária para demonstrar autoridade.',
          'Apagar todas as luzes da casa para forçar o morador a dormir.'
        ],
        correctIndex: 1,
        explanation: 'A segurança espacial mútua e uma postura corporal serena e desarmada são a base do primeiro princípio de Richmond para reduzir a reatividade do sujeito agitado.'
      },
      {
        id: 'q3-3',
        question: 'Quantos profissionais da equipe devem liderar o diálogo verbal principal com um morador em crise?',
        options: [
          'Todos os cuidadores presentes devem falar ao mesmo tempo para convencer o morador.',
          'Apenas UM profissional designado deve conduzir a fala, evitando sobrecarga sensorial e confusão mental no morador.',
          'Nenhum profissional pode falar; a comunicação deve ser apenas por gestos silenciosos.',
          'O diálogo deve ser feito obrigatoriamente por um policial militar fardado.'
        ],
        correctIndex: 1,
        explanation: 'Várias pessoas falando ao mesmo tempo geram sobrecarga cognitiva e aumentam o pânico do sujeito em crise. Apenas um cuidador deve conduzir a comunicação verbal.'
      },
      {
        id: 'q3-4',
        question: 'Ao atender um morador que afirma com convicção que "há câmeras escondidas no espelho do banheiro para filmá-lo" (delírio persecutório), qual é a conduta comunicacional correta?',
        options: [
          'Rir da situação e dizer que ele está louco.',
          'Desmontar o espelho na frente dele para provar cientificamente que ele está errado.',
          'Não confrontar de forma agressiva nem confirmar a existência das câmeras; acolher o sentimento de medo e garantir que o ambiente é seguro.',
          'Dizer que você também viu as câmeras e que a casa toda está sendo vigiada.'
        ],
        correctIndex: 2,
        explanation: 'Não se deve alimentar o delírio nem bater de frente com a crença psicótica. Deve-se focar na emoção gerada (o medo) e oferecer segurança afetiva e ambiental.'
      },
      {
        id: 'q3-5',
        question: 'Por que o uso de contenção física (amarras na cama) como rotina ou punição disciplinar é expressamente proibido na Residência Terapêutica?',
        options: [
          'Porque amarras são caras e faltam no estoque da prefeitura.',
          'Porque a contenção punitiva viola a Lei 10.216/2001, constitui crime de maus-tratos/tortura e resgata a violência manicomial que a SRT visa superar.',
          'Porque a contenção física só pode ser feita na sala de jantar.',
          'Porque os moradores preferem ser contidos com cadeados.'
        ],
        correctIndex: 1,
        explanation: 'A contenção mecânica punitiva é ilegal, antiética e causadora de traumas profundos. A desescalada verbal e o manejo humanizado são os pilares do cuidado antimanicomial.'
      },
      {
        id: 'q3-6',
        question: 'O tom de voz utilizado pelo cuidador durante a desescalada verbal deve ser:',
        options: [
          'Mais alto e estridente que o do morador para impor autoridade.',
          'Mais calmo, sereno, lento e em tom mais baixo que o do morador, atuando como regulador biológico de tranquilidade.',
          'Irônico e sussurrado para confundir o pensamento do morador.',
          'Totalmente mudo sem emitir qualquer som durante 1 hora.'
        ],
        correctIndex: 1,
        explanation: 'O tom de voz calmo e ritmado ativa mecanismos neurológicos de segurança, auxiliando o indivíduo em pânico a desacelerar sua frequência cardíaca e sua reatividade.'
      },
      {
        id: 'q3-7',
        question: 'Se um morador em crise verbalizar intenção de tirar a própria vida e apresentar histórico de tentativas anteriores, qual deve ser a postura da equipe?',
        options: [
          'Dizer que é apenas uma tentativa de chamar a atenção e deixá-lo sozinho no quarto trancado.',
          'Levar a queixa com máxima seriedade, manter vigilância compassiva e contínua, retirar objetos cortantes do alcance e acionar imediatamente a referência técnica do CAPS.',
          'Desafiar o morador a provar o que está dizendo.',
          'Aguardar 1 semana para ver se a ideia de suicídio desaparece espontaneamente.'
        ],
        correctIndex: 1,
        explanation: 'Toda ideação ou ameaça suicida exige intervenção imediata, acolhimento sem julgamentos morais, proteção do ambiente e mobilização da rede de saúde mental.'
      },
      {
        id: 'q3-8',
        question: 'Qual é o papel do CAPS III (que funciona 24 horas com leitos de acolhimento noturno) na retaguarda do Residencial Salomão em Blumenau?',
        options: [
          'O CAPS III serve apenas para emitir receitas de medicamentos uma vez por ano.',
          'Oferecer suporte técnico contínuo, matriciamento da equipe e, em casos de crises severas refratárias, acolhimento noturno temporário em leito de atenção à crise sem necessidade de internação em hospital geral.',
          'Cobrar mensalidades dos cuidadores da residência.',
          'Substituir a moradia permanente do morador definitivamente.'
        ],
        correctIndex: 1,
        explanation: 'O CAPS III é o serviço de referência da RAPS para acolhimento de crises 24h, garantindo cuidado territorial intensivo e evitando internações psiquiátricas hospitalares.'
      },
      {
        id: 'q3-9',
        question: 'O que significa o termo "Debriefing" após o encerramento de um episódio de crise na SRT?',
        options: [
          'Aplicação de suspensão disciplinar ao morador que entrou em crise.',
          'Momento de diálogo acolhedor com o morador e reunião reflexiva da equipe para avaliar o que desencadeou a crise e como aprimorar as intervenções futuras.',
          'Limpeza geral do chão da residência com água sanitária.',
          'Registro de boletim de ocorrência policial contra o morador.'
        ],
        correctIndex: 1,
        explanation: 'O debriefing é uma ferramenta pedagógica e terapêutica pós-crise para processar emoções, aprender com o ocorrido e fortalecer os planos preventivos no PTS.'
      },
      {
        id: 'q3-10',
        question: 'Em caso de agitação psicomotora grave em que haja agressão física com arma branca e risco de vida iminente incontrolável por desescalada verbal, qual serviço de emergência do SUS deve ser acionado?',
        options: [
          'Guarda de Trânsito Municipal.',
          'SAMU 192 com apoio integrado de segurança pública e articulação imediata com a equipe de sobreaviso do CAPS.',
          'Funerária municipal.',
          'Empresa privada de segurança armada patrimonial.'
        ],
        correctIndex: 1,
        explanation: 'Situações de emergência médica e psiquiátrica com risco vital demandam acionamento do SAMU 192, com comunicação transparente sobre o histórico de saúde mental do paciente.'
      }
    ],
    essayTask: {
      prompt: 'Descreva detalhadamente como aplicar os 10 Princípios de Desescalada Verbal de Richmond em um morador de Residência Terapêutica que se encontra em estado de agitação psicomotora na sala de estar. Destaque a linguagem corporal do cuidador, o tom de voz, a validação de sentimentos e o estabelecimento de limites seguros.',
      rubric: [
        {
          criterion: 'Aplicação técnica dos princípios de Richmond',
          weight: '40%',
          guideline: 'Citar e descrever os passos práticos de desescalada verbal de forma estruturada.'
        },
        {
          criterion: 'Postura não violenta e comunicação empática',
          weight: '35%',
          guideline: 'Demonstrar clareza sobre linguagem corporal aberta, tom de voz modulador e validação de emoções.'
        },
        {
          criterion: 'Segurança ambiental e fechamento pós-crise (debriefing)',
          weight: '25%',
          guideline: 'Explicar o manejo de segurança dos outros moradores e o acompanhamento posterior.'
        }
      ],
      modelAnswer: 'A aplicação prática dos princípios de Richmond na sala de estar compreende: 1) Respeito ao espaço e segurança: O cuidador posiciona-se a 2 braços de distância, mantendo a saída desobstruída e solicitando que os demais moradores se desloquem com calma para outro cômodo; 2) Postura corporal não provocadora: O profissional mantém as mãos abertas e visíveis, tronco relaxado e evita cruzar os braços ou apontar dedos; 3) Comunicação única e clara: Apenas UM cuidador fala, utilizando frases curtas, objetivas e tom de voz calmo e compassivo, que atua modulando a ansiedade do morador; 4) Validação dos sentimentos: O cuidador acolhe a aflição ("Percebo que você está muito chateado e assustado com essa situação; estou aqui ao seu lado para te apoiar"); 5) Concordância e limites seguros: Encontra pontos de contato sem confrontar o conteúdo delirante e estabelece limites claros ("Eu quero te ajudar, mas preciso que você solte esse objeto para que possamos conversar com calma e segurança"); 6) Oferta de escolhas: Apresenta alternativas reais ("Você prefere sentar um instante na varanda ou tomar um copo de água fresca no quarto?"); 7) Debriefing pós-crise: Após a estabilização, conversa calmamente com o morador para compreender os gatilhos e reúne a equipe para atualizar as estratégias no PTS.'
    }
  },

  // ==========================================
  // MÓDULO 4: GESTÃO SEGURA DE MEDICAMENTOS NA SRT
  // ==========================================
  {
    id: 4,
    title: 'Módulo 4: Gestão Segura de Medicamentos na SRT',
    shortTitle: 'Gestão de Medicamentos',
    subtitle: 'Os 9 Certos, Efeitos Extrapiramidais, Psicotrópicos Comuns e Proibição do Mascaramento',
    summary: 'Aprenda os protocolos internacionais de segurança farmacológica, a identificação rápida de efeitos adversos extrapiramidais (acatisia, parkinsonismo, distonias), os cuidados com psicofármacos comuns e a conduta ética diante da recusa medicamentosa.',
    iconName: 'Pill',
    workloadHours: 8,
    normativeBase: [
      'Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos (Ministério da Saúde / ANVISA / Fiocruz)',
      'Resolução COFEN nº 564/2017 (Código de Ética dos Profissionais de Enfermagem)',
      'Formulário Terapêutico Nacional e Rename (Relação Nacional de Medicamentos Essenciais do SUS)',
      'Diretrizes de Farmacovigilância em Serviços de Residência Terapêutica (MS/SVS)'
    ],
    contentSections: [
      {
        title: '1. O Protocolo Internacional dos 9 Certos na Administração de Fármacos',
        paragraphs: [
          'A administração de medicamentos em uma SRT Tipo II é uma das responsabilidades mais críticas da equipe de cuidados. Erros de medicação em saúde mental podem provocar intoxicações severas, crises agudas ou sequelas neurológicas irreversíveis.',
          'Os 9 Certos de Segurança:',
          '1. Paciente Certo: Confirmar o nome completo do morador (nunca confiar apenas em apelidos ou entregar por suposição).',
          '2. Medicamento Certo: Conferir o nome comercial e o princípio ativo na receita médica e na embalagem antes de dosar.',
          '3. Dose Certa: Verificar a dosagem exata (miligramas, gotas, comprimidos). ATENÇÃO a dosagens decimais (ex: Haloperidol 5mg vs 1mg).',
          '4. Via Certa: Confirmar se a via é oral, sublingual, intramuscular ou tópica.',
          '5. Hora Certa: Administrar nos horários estipulados pela prescrição médica para manter o nível plasmático terapêutico.',
          '6. Tempo Certo / Velocidade: Respeitar o intervalo de deglutição e não apressar a ingestão.',
          '7. Validade e Conservação Certa: Verificar data de validade, integridade da embalagem e armazenamento adequado (temperatura ambiente fresca ou refrigeração entre 2ºC e 8ºC para itens específicos).',
          '8. Orientação Certa: Explicar ao morador qual medicamento ele está tomando e para que serve, estimulando sua coparticipação no tratamento.',
          '9. Registro Certo: Checar e assinar a planilha de medicação IMEDIATAMENTE após a administração presenciada (NUNCA checar antes de o morador engolir).'
        ],
        keyTakeaway: 'Medicamento preparado é medicamento administrado. NUNCA deixe copos com remédios em cima de mesas ou na cabeceira da cama para o morador "tomar depois".',
        normativeHighlight: 'Meta 3 da OMS de Segurança do Paciente: Redução global de 50% dos danos graves e evitáveis relacionados a erros de medicação nos serviços de saúde.'
      },
      {
        title: '2. Principais Classes de Psicotrópicos Utilizados na RAPS',
        paragraphs: [
          'Cuidadores de SRT devem conhecer os efeitos terapêuticos e os principais efeitos adversos das classes farmacológicas mais comuns no SUS:',
          '• Antipsicóticos Típicos (1ª Geração - ex: Haloperidol, Clorpromazina): Alto poder de controle de delírios e alucinações, mas elevado risco de efeitos motores extrapiramidais.',
          '• Antipsicóticos Atípicos (2ª Geração - ex: Risperidona, Olanzapina, Quetiapina, Clozapina): Menor incidência de efeitos motores, porém maior risco de ganho de peso, síndrome metabólica, sonolência e hipotensão.',
          '• Estabilizadores do Humor (ex: Carbonato de Lítio, Ácido Valproico, Carbamazepina): Utilizados no Transtorno Bipolar. Exigem controle hídrico rigoroso (risco de intoxicação por lítio em caso de desidratação).',
          '• Antidepressivos (ex: Fluoxetina, Sertralina, Amitriptilina): Utilizados em depressão e ansiedade crônica. Podem causar boca seca, constipação e náuseas iniciais.',
          '• Benzodiazepínicos / Ansiolíticos (ex: Clonazepam, Diazepam): Medicamentos de tarja preta. Risco de sedação excessiva, quedas em idosos e tolerância/dependência.'
        ]
      },
      {
        title: '3. Efeitos Adversos Extrapiramidais e Emergências Farmacológicas',
        paragraphs: [
          'A identificação precoce de reações adversas graves pode salvar a vida do morador:',
          '1. Acatisia: Inquietação motora e angústia interna insuportável; o morador não consegue ficar parado, bate os pés no chão, cruza e descruza as pernas ("comichão interior"). Frequentemente confundida com agitação da doença. Conduta: Notificar o médico do CAPS para ajuste de dose ou associação com Biperideno.',
          '2. Distonia Aguda: Espasmos musculares dolorosos súbitos no pescoço (torcicolo espasmódico), língua protrusa (dificuldade de fechar a boca) ou revirar involuntário dos olhos (crise oculógira). Conduta: Emergência que causa pânico. Administrar anticolinérgico prescrito (Biperideno) conforme orientação médica.',
          '3. Parkinsonismo Medicamentoso: Tremores de extremidades em repouso ("contar moedas"), rigidez muscular em roda denteada, marcha com passos curtos e salivação excessiva (sialorreia).',
          '4. Síndrome Neuroléptica Maligna (SNM): EMERGÊNCIA MÉDICA GRAVE E POTENCIALMENTE FATAL! Sinais: Febre alta inexplicada (>38,5ºC), rigidez muscular severa ("cano de chumbo"), alteração da consciência, taquicardia e sudorese intensa. Conduta: Suspender medicação e ACIONAR IMEDIATAMENTE O SAMU 192 para transferência a hospital geral.'
        ],
        practicalTips: [
          'Monitore sempre a hidratação de moradores em uso de Lítio em dias quentes em Blumenau. A perda de líquidos pelo suor pode elevar perigosamente a concentração do lítio no sangue (litemia tóxica).'
        ]
      },
      {
        title: '4. Conduta Ética Diante da Recusa Medicamentosa e Proibição do Mascaramento',
        paragraphs: [
          'O que fazer quando o morador recusa o medicamento?',
          '• O Mascaramento de Remédios é PROIBIDO: Triturar comprimidos e misturá-los secretamente na comida, no suco ou no café sem o conhecimento do morador é expressamente vedado pelo código de ética em saúde e pelas diretrizes da RAPS. Essa prática quebra o vínculo de confiança, pode alterar a farmacocinética da substância (reação química com o alimento) e viola a dignidade civil.',
          '• Conduta Recomendada:',
          '1. Escutar a razão da recusa: O comprimido é grande? Causa azia? Dá sonolência excessiva? Dá tontura?',
          '2. Explicar a importância terapêutica com respeito e paciência;',
          '3. Se a recusa persistir, não forçar fisicamente nem fazer ameaças;',
          '4. Registrar a recusa e o motivo declarado na planilha de checagem;',
          '5. Comunicar a enfermeira e o médico do CAPS para reavaliação da posologia ou apresentação farmacológica (gotas, xarope, troca de molécula).'
        ]
      }
    ],
    caseStudy: {
      title: 'A Angústia Motora Incompreendida de Seu Cláudio',
      residentContext: 'Seu Cláudio, 49 anos, morador da SRT há 6 meses, faz uso de Haloperidol 5mg (2 vezes ao dia) e Prometazina 25mg. Há 4 dias sua dose de Haloperidol foi aumentada pelo psiquiatra do ambulatório para 15mg/dia.',
      scenarioDescription: 'Durante a tarde, Cláudio anda incessantemente de um lado para o outro na sala, senta-se por 10 segundos, levanta-se abruptamente balançando as pernas, chora e diz que "suas pernas estão pegando fogo por dentro". Um cuidador acredita que Cláudio está tendo uma "crise de malcriação" e manda que ele se deite e pare de incomodar. Cláudio fica desesperado e tenta pular o muro da residência.',
      keyDilemma: 'Como diferenciar a acatisia medicamentosa de um comportamento desafiador ou agitação psicótica, garantindo o socorro farmacológico correto?',
      guidedQuestions: [
        'Qual o quadro clínico neurológico apresentado por Cláudio decorrente do aumento da medicação?',
        'Qual o erro grave de interpretação cometido pelo cuidador?',
        'Qual é a conduta farmacológica e de suporte imediato a ser adotada com a equipe do CAPS?'
      ],
      recommendedConduct: 'A equipe deve reconhecer imediatamente os sintomas clássicos de acatisia motora induzida por antipsicóticos de alta potência (Haloperidol). O cuidador deve acolher Cláudio com empatia: "Seu Cláudio, nós sabemos que essa angústia nas pernas é efeito do remédio e não é culpa sua. Vamos te ajudar". Deve-se fazer contato urgente com o médico/enfermeiro do CAPS para administração de Biperideno (anticolinérgico) ou ajuste imediato da dosagem do antipsicótico, oferecendo caminhada leve acompanhada e massagem suave até que a medicação corretora faça efeito.',
      normativeReference: 'Protocolo de Farmacovigilância do Ministério da Saúde / ANVISA: Notificação e manejo imediato de eventos adversos medicamentosos graves em serviços de saúde.'
    },
    quiz: [
      {
        id: 'q4-1',
        question: 'Qual é a regra correta sobre o registro e checagem de medicamentos administrados na planilha da SRT?',
        options: [
          'Checar todos os medicamentos logo no início do plantão antes mesmo de preparar as doses.',
          'Checar e assinar a planilha de medicação IMEDIATAMENTE APÓS presenciar a ingestão completa do medicamento pelo morador.',
          'Assinar a planilha apenas no final da semana se sobrar tempo.',
          'Não precisa registrar medicação em residências terapêuticas.'
        ],
        correctIndex: 1,
        explanation: 'A checagem de medicamentos só pode ser realizada após a administração confirmada. Checar antes gera risco grave de duplicação de dose ou falsa confirmação de administração.'
      },
      {
        id: 'q4-2',
        question: 'Um morador em uso de antipsicótico típico (Haloperidol) relata sensação insuportável de inquietação interna nas pernas e não consegue permanecer sentado por mais de alguns segundos. Qual é o nome desse efeito colateral?',
        options: [
          'Acatisia motora.',
          'Preguiça muscular seletiva.',
          'Sonambulismo acordado.',
          'Disfagia alimentar congênita.'
        ],
        correctIndex: 0,
        explanation: 'A acatisia é um efeito adverso extrapiramidal caracterizado por inquietação motora e sofrimento psíquico intenso, necessitando de ajuste médico imediato.'
      },
      {
        id: 'q4-3',
        question: 'Por que o ato de triturar comprimidos e misturá-los secretamente na comida do morador (mascaramento) é proibido na prática do cuidador?',
        options: [
          'Porque a comida fica muito saborosa e o morador come demais.',
          'Porque viola a autonomia do paciente, pode alterar a eficácia química do fármaco e quebra o vínculo de confiança terapêutica.',
          'Porque a ANVISA proíbe que moradores de SRT comam comida quente.',
          'Porque comprimidos só podem ser tomados com refrigerante de cola.'
        ],
        correctIndex: 1,
        explanation: 'O mascaramento de medicação é antiético e ilegal. A recusa deve ser respeitada, acolhida, dialogada, registrada e comunicada à equipe do CAPS para revisão terapêutica.'
      },
      {
        id: 'q4-4',
        question: 'Quais são os sinais clínicos clássicos da Síndrome Neuroléptica Maligna (SNM), uma emergência médica rara e potencialmente fatal associada ao uso de antipsicóticos?',
        options: [
          'Manchas roxas nos pés e coceira nos olhos.',
          'Febre alta súbita inexplicada, rigidez muscular severa ("cano de chumbo"), sudorese excessiva e alteração do nível de consciência.',
          'Fome excessiva e vontade de praticar esportes de corrida.',
          'Aumento do crescimento de unhas e cabelos.'
        ],
        correctIndex: 1,
        explanation: 'A SNM é uma emergência médica que cursa com hipertermia severa, rigidez muscular rígida e instabilidade autonômica, exigindo socorro imediato via SAMU 192.'
      },
      {
        id: 'q4-5',
        question: 'Em dias de calor intenso de verão, qual cuidado especial a equipe de cuidadores deve ter com moradores que utilizam Carbonato de Lítio?',
        options: [
          'Proibir a ingestão de água para concentrar o sal no corpo.',
          'Garantir oferta hídrica abundante e hidratação contínua, pois a desidratação e perda de sais pelo suor elevam os níveis de lítio no sangue a patamares tóxicos perigosos.',
          'Aumentar a dose de lítio por conta própria sem receita médica.',
          'Substituir o lítio por xarope de guaraná.'
        ],
        correctIndex: 1,
        explanation: 'O lítio tem margem terapêutica estreita. A desidratação reduz a excreção renal do lítio, elevando a litemia e provocando intoxicação grave (tremores, confusão, coma).'
      },
      {
        id: 'q4-6',
        question: 'O que caracteriza a Distonia Aguda induzida por psicofármacos e como a equipe deve agir?',
        options: [
          'Sensação de felicidade súbita e riso descontrolado.',
          'Espasmos musculares dolorosos súbitos na língua, pescoço (torcicolo) ou olhos virados para cima (crise oculógira), exigindo uso de anticolinérgico (Biperideno) e suporte médico.',
          'Manchas brancas na pele após exposição solar.',
          'Aumento repentino do apetite por doces.'
        ],
        correctIndex: 1,
        explanation: 'A distonia aguda é uma contração muscular espasmódica dolorosa e angustiante que responde rapidamente à administração de medicação anticolinérgica corretora.'
      },
      {
        id: 'q4-7',
        question: 'Qual dos itens abaixo NÃO faz parte do protocolo de segurança dos 9 Certos na medicação?',
        options: [
          'Medicamento Certo e Dose Certa.',
          'Paciente Certo e Hora Certa.',
          'Administrar qualquer comprimido que estiver sobrando no chão para não desperdiçar.',
          'Via Certa e Registro Certo.'
        ],
        correctIndex: 2,
        explanation: 'Nunca se deve administrar medicamentos sem identificação, caídos no chão ou de procedência incerta. Todo medicamento deve ser rigorosamente identificado e conferido.'
      },
      {
        id: 'q4-8',
        question: 'Ao constatar que um morador engoliu acidentalmente a medicação do colega de quarto por engano na bancada, qual é a conduta imediata do cuidador?',
        options: [
          'Esconder o fato da coordenação e rezar para que nada aconteça.',
          'Comunicar imediatamente o enfermeiro/médico do CAPS ou ligar para o Centro de Informações Toxicológicas (CIT/SAMU 192), monitorar sinais vitais e relatar com transparência o ocorrido.',
          'Dar um copo de leite fervendo com vinagre para o morador vomitar.',
          'Fazer o morador correr no jardim para queimar o remédio.'
        ],
        correctIndex: 1,
        explanation: 'Erros de medicação exigem transparência ética e conduta clínica imediata: notificação à equipe técnica, contato com centro toxicológico e vigilância dos sinais vitais.'
      },
      {
        id: 'q4-9',
        question: 'Medicamentos da classe dos benzodiazepínicos (ex: Clonazepam/Rivotril, Diazepam) aumentam significativamente qual risco em moradores idosos na SRT?',
        options: [
          'Risco de crescimento acelerado de dentes.',
          'Risco de sedação excessiva, tontura, hipotensão postural e quedas graves com fraturas ósseas.',
          'Risco de insônia permanente.',
          'Risco de miopia aguda.'
        ],
        correctIndex: 1,
        explanation: 'Benzodiazepínicos causam sedação residual e relaxamento muscular, sendo uma das principais causas de quedas e fraturas de fêmur em idosos institucionalizados.'
      },
      {
        id: 'q4-10',
        question: 'Qual é o armazenamento correto de medicamentos psicotrópicos e controlados no ambiente de uma Residência Terapêutica Tipo II?',
        options: [
          'Espalhados em cima da mesa da sala de jantar ao alcance de qualquer pessoa.',
          'Armazenados em armário próprio, limpo, ventilado, protegido de luz solar direta e umidade, trancado à chave sob responsabilidade direta da equipe de cuidadores/enfermagem.',
          'Guardados no congelador da geladeira junto com os sorvetes.',
          'Guardados dentro das mochilas dos visitantes.'
        ],
        correctIndex: 1,
        explanation: 'Normas sanitárias da ANVISA determinam que medicamentos de controle especial fiquem sob guarda trancada, com controle de estoque e em ambiente com temperatura adequada.'
      }
    ],
    essayTask: {
      prompt: 'Explique por que o mascaramento de medicamentos em alimentos (triturar remédios e misturar secretamente em sopas, sucos ou cafés) é uma prática eticamente inaceitável na perspectiva da Luta Antimanicomial e da segurança do paciente. Descreva a conduta técnica e ética correta que o cuidador do Residencial Salomão deve adotar quando um morador recusa sua medicação prescrita.',
      rubric: [
        {
          criterion: 'Fundamentação ética e antimanicomial contra o mascaramento',
          weight: '40%',
          guideline: 'Demonstrar compreensão sobre autonomia, consentimento informado e vínculo de confiança.'
        },
        {
          criterion: 'Riscos farmacológicos e sanitários da prática',
          weight: '30%',
          guideline: 'Explicitar alterações farmacocinéticas, interação química e perda de controle de dosagem.'
        },
        {
          criterion: 'Protocolo de manejo da recusa medicamentosa',
          weight: '30%',
          guideline: 'Apresentar os passos de escuta, diálogo, registro em prontuário e acionamento da equipe do CAPS.'
        }
      ],
      modelAnswer: 'O mascaramento de medicamentos é eticamente inaceitável porque reproduz a violência asilar da tutela e do engano, violando frontalmente a dignidade, a autonomia e o direito à informação do usuário previstos na Lei 10.216/2001. Quando o cuidador esconde o remédio na comida e o morador descobre, o vínculo de confiança terapêutica é quebrado de forma muitas vezes irreparável, gerando delírios de envenenamento e recusa alimentar generalizada. Além disso, há riscos farmacológicos graves: a trituração de comprimidos de liberação prolongada ou revestimento entérico altera a absorção, pode inativar o princípio ativo em contato com o pH do alimento ou causar irritação gástrica severa. Diante da recusa medicamentosa, a conduta correta consiste em: 1) Acolher a recusa com calma e investigar a causa (o morador sente dor de estômago? tem dificuldade de engolir comprimido grande? está com medo?); 2) Explicar a importância daquele tratamento com respeito e sem chantagens; 3) Se a recusa for mantida, não utilizar coação física nem ameaças; 4) Registrar formalmente a recusa e a justificativa na folha de checagem; 5) Comunicar a equipe de enfermagem e o médico psiquiatra do CAPS para avaliar adequações na dosagem, substituição por formulação líquida ou revisão do PTS.'
    }
  },

  // ==========================================
  // MÓDULO 5: COMUNICAÇÃO E PASSAGEM DE PLANTÃO
  // ==========================================
  {
    id: 5,
    title: 'Módulo 5: Comunicação e Passagem de Plantão Infalível',
    shortTitle: 'Comunicação e Passagem de Plantão',
    subtitle: 'Metodologia SBAR, Diário de Bordo Técnico, Sigilo Profissional (LGPD) e Trabalho Interdisciplinar',
    summary: 'Aprenda a estruturar passagens de turno sem falhas de informação com a metodologia internacional SBAR. Domine a escrita técnica no Diário de Bordo, os limites éticos do sigilo profissional em saúde mental e a comunicação não-violenta no trabalho em equipe.',
    iconName: 'FileText',
    workloadHours: 8,
    normativeBase: [
      'Ferramenta SBAR (Situation, Background, Assessment, Recommendation) - Institute for Healthcare Improvement (IHI / OMS)',
      'Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD no contexto de saúde)',
      'Código de Ética dos Profissionais de Saúde e Cuidadores',
      'Portaria GM/MS nº 3.088/2011 (Comunicação intersetorial e matriciamento na RAPS)'
    ],
    contentSections: [
      {
        title: '1. A Importância Crítica da Comunicação Interdisciplinar nas SRTs',
        paragraphs: [
          'Em uma Residência Terapêutica Tipo II com funcionamento ininterrupto 24 horas por dia, a passagem de plantão é o momento de maior vulnerabilidade para a ocorrência de falhas no cuidado. Uma informação omitida (como um remédio não administrado, uma recusa alimentar persistente, um corte no pé ou uma alteração de humor no turno anterior) pode levar a consequências graves para a saúde do morador.',
          'A comunicação profissional na SRT deve ser contínua, padronizada, técnica e empática, conectando a equipe de cuidadores, a coordenação da residência, os técnicos de enfermagem e os profissionais do CAPS e da Atenção Primária.'
        ],
        keyTakeaway: 'A passagem de plantão não é um bate-papo informal de corredor; é um ato profissional solene de transferência de responsabilidade sobre a vida dos moradores.',
        normativeHighlight: 'Meta 2 Internacional de Segurança do Paciente (OMS/MS): Melhorar a eficácia da comunicação entre os profissionais de saúde durante transições de cuidados.'
      },
      {
        title: '2. A Metodologia Internacional SBAR Aplicada à Saúde Mental',
        paragraphs: [
          'O método SBAR (Situation, Background, Assessment, Recommendation) foi desenvolvido para padronizar a transmissão de dados clínicos críticos em 4 etapas estruturadas:',
          '• S - Situação (Situation): O que está acontecendo agora de forma clara e imediata. Identifique o morador, sua idade e o problema atual em 1 ou 2 frases.',
          '• B - Breve Histórico (Background): Contexto clínico e psicossocial relevante (diagnóstico principal, histórico de crises semelhantes, medicamentos recentes, eventos desencadeantes nas últimas 24h).',
          '• A - Avaliação (Assessment): A sua leitura técnica da situação atual (sinais vitais, estado emocional, comportamento observado, sintomas físicos, recusas).',
          '• R - Recomendação (Recommendation): O que precisa ser feito no próximo turno (cuidados específicos, monitoramentos agendados, exames, consultas no CAPS, atenção a gatilhos).'
        ],
        practicalTips: [
          'Utilize sempre a estrutura SBAR verbalmente e por escrito ao transmitir informações para o colega que está assumindo o turno ou ao ligar para a equipe técnica do CAPS.'
        ]
      },
      {
        title: '3. Redação Técnica no Livro de Diário de Bordo e Prontuário',
        paragraphs: [
          'O Livro de Ocorrências / Diário de Bordo é o documento jurídico e técnico da residência. Deve ser redigido com clareza, objetividade, precisão cronológica e respeito aos princípios éticos.',
          'O que NUNCA escrever no Diário de Bordo:',
          '• Julgamentos morais e adjetivos pejorativos: "O morador estava chato, insuportável, fazendo manha, birra ou fingindo dor".',
          '• Opiniões leigas não fundamentadas: "Acho que ele está endemoniado ou querendo nos sacanear".',
          'O que SEMPRE escrever:',
          '• Descrição objetiva dos fatos observados com horários: "Às 14h20, o morador apresentou choro contínuo, recusou a refeição da tarde relatando dor abdominal e deitou-se na cama. Pressão arterial aferida: 120x80 mmHg. Comunicada a enfermeira do CAPS às 14h40".'
        ],
        normativeHighlight: 'Resolução CFM nº 1.638/2002 e COFEN: Os registros em prontuários e diários de saúde são documentos legais auditáveis que comprovam a assistência prestada.'
      },
      {
        title: '4. Sigilo Ético Profissional e a Lei Geral de Proteção de Dados (LGPD)',
        paragraphs: [
          'O diagnóstico, o histórico de vida, as fotos, a rotina e os dados de saúde dos moradores de uma SRT são dados pessoais sensíveis protegidos pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e pelo Código de Ética Profissional.',
          'Regras de Ouro do Sigilo:',
          '• NUNCA tire fotos ou grave vídeos dos moradores para publicar em redes sociais pessoais (Instagram, TikTok, WhatsApp), mesmo que pareça uma "homenagem carinhosa".',
          '• NUNCA comente sobre a vida íntima, diagnósticos ou comportamentos dos moradores com vizinhos, amigos ou familiares seus fora do ambiente profissional.',
          '• O sigilo só pode ser quebrado em situações de determinação legal, dever ético profissional para com a equipe de saúde ou risco iminente de morte.'
        ]
      }
    ],
    caseStudy: {
      title: 'A Falha de Comunicação na Passagem de Turno de Dona Lúcia',
      residentContext: 'Dona Lúcia, 67 anos, diabética e hipertensa, reside na SRT Salomão. Faz uso de insulina NPH matinal e Metformina.',
      scenarioDescription: 'No plantão da tarde, Lúcia queixa-se de tontura e suor frio às 17h. A cuidadora afere o HGT (glicemia capilar), que marca 52 mg/dL (hipoglicemia moderada). A cuidadora oferece suco de laranja com açúcar e Lúcia melhora. No entanto, na passagem de plantão das 19h, a cuidadora conversa sobre assuntos pessoais com o colega que está chegando, esquece de relatar o episódio de hipoglicemia e não faz o registro no diário de bordo. Na madrugada, Lúcia entra em coma hipoglicêmico.',
      keyDilemma: 'Como a ausência de um método estruturado de passagem de plantão e a falta de registro técnico quase provocaram o óbito de uma moradora?',
      guidedQuestions: [
        'Quais falhas de comunicação e quebra de protocolo ocorreram nessa passagem de plantão?',
        'Como esse episódio deveria ter sido comunicado utilizando a metodologia SBAR?',
        'Qual a responsabilidade ética e jurídica da equipe no registro de ocorrências clínicas?'
      ],
      recommendedConduct: 'A situação evidencia uma grave quebra de segurança do paciente. O episódio de hipoglicemia deveria ter sido transmitido prioritariamente com a metodologia SBAR: S (Situação: Dona Lúcia apresentou hipoglicemia de 52 mg/dL às 17h com sudorese e tontura); B (Histórico: Diabética em uso de insulina NPH e metformina); A (Avaliação: Recuperou nível glicêmico para 98 mg/dL após suco de laranja, mas permanece sonolenta); R (Recomendação: Realizar controle obrigatório de HGT às 22h e 03h da madrugada e oferecer ceia reforçada). O registro completo no livro de bordo é mandatório com assinatura e horário.',
      normativeReference: 'Portaria GM/MS nº 3.088/2011 e Metas Internacionais de Segurança do Paciente (OMS/MS): Garantia de comunicação efetiva nas transições de cuidados.'
    },
    quiz: [
      {
        id: 'q5-1',
        question: 'O que significa a sigla da metodologia de comunicação clínica SBAR?',
        options: [
          'Saúde, Biologia, Alimentação e Repouso.',
          'Situação (Situation), Breve Histórico (Background), Avaliação (Assessment) e Recomendação (Recommendation).',
          'Segurança, Bloqueio, Alerta e Resgate.',
          'Supervisão, Banho, Almoço e Remédio.'
        ],
        correctIndex: 1,
        explanation: 'O SBAR é uma ferramenta padronizada internacional para transmissão estruturada de informações clínicas entre equipes de saúde.'
      },
      {
        id: 'q5-2',
        question: 'Qual das opções abaixo representa um registro técnico e ético ADEQUADO no Livro de Diário de Bordo da SRT?',
        options: [
          '"O morador hoje estava insuportável e com muita preguiça de almoçar."',
          '"Às 12h30, o morador verbalizou recusa ao almoço alegando náusea. Foi oferecido repouso e às 13h40 ele aceitou sopa e suco. Sem queixas no momento."',
          '"Acho que o morador está fingindo dor de cabeça para não arrumar a cama."',
          '"Plantão tranquilo, sem novidades (mesmo tendo ocorrido uma briga na sala)."'
        ],
        correctIndex: 1,
        explanation: 'Registros profissionais devem ser objetivos, descritivos, conter horários exatos e ser isentos de adjetivos pejorativos e julgamentos morais leigos.'
      },
      {
        id: 'q5-3',
        question: 'De acordo com a Lei Geral de Proteção de Dados (LGPD) e o Código de Ética Profissional, qual é a conduta correta sobre fotografar moradores da SRT?',
        options: [
          'Pode postar fotos e vídeos nas redes sociais pessoais livremente desde que coloque uma legenda bonita.',
          'É expressamente proibido tirar e publicar fotos/vídeos de moradores em redes sociais pessoais, pois a imagem e os dados de saúde são protegidos por sigilo legal e privacidade.',
          'Pode vender fotos dos moradores para jornais da cidade.',
          'Pode postar fotos se o morador for menor de idade.'
        ],
        correctIndex: 1,
        explanation: 'A divulgação de fotos e dados de saúde de usuários da RAPS em redes sociais pessoais viola o sigilo profissional, a LGPD e o direito constitucional à imagem e privacidade.'
      },
      {
        id: 'q5-4',
        question: 'Durante a passagem de plantão, qual atitude dos profissionais garante a segurança do cuidado dos moradores?',
        options: [
          'Fazer a passagem de forma rápida enquanto arruma as malas para ir embora.',
          'Realizar a passagem de plantão em local reservado, com atenção focada, conferindo a planilha de medicação e percorrendo a casa para visualizar todos os moradores antes de sair.',
          'Deixar um bilhete de papel rasgado em cima da geladeira com recados ilegíveis.',
          'Não conversar com o colega que está assumindo o turno por desavença pessoal.'
        ],
        correctIndex: 1,
        explanation: 'A passagem de plantão efetiva exige foco total, ambiente calmo, conferência de planilhas e visualização presencial dos moradores na troca de guarda.'
      },
      {
        id: 'q5-5',
        question: 'Se um vizinho do bairro abordar o cuidador no ponto de ônibus perguntando qual é o diagnóstico psiquiátrico de um morador da SRT, qual deve ser a resposta do cuidador?',
        options: [
          'Contar detalhadamente todas as doenças e remédios que o morador toma.',
          'Explicar educadamente que as informações de saúde são estritamente confidenciais e protegidas por sigilo profissional, convidando-o cordialmente para as atividades comunitárias abertas da residência.',
          'Inventar que o morador é um espião secreto do governo.',
          'Gritar e agredir verbalmente o vizinho.'
        ],
        correctIndex: 1,
        explanation: 'O sigilo profissional é um dever ético legal inegociável. Dados de saúde nunca devem ser divulgados a terceiros não autorizados.'
      },
      {
        id: 'q5-6',
        question: 'Na metodologia SBAR, o que deve ser apresentado na etapa "R" (Recomendação / Recommendation)?',
        options: [
          'A lista de compras do supermercado pessoal do cuidador.',
          'As ações práticas, encaminhamentos e monitoramentos específicos que o próximo turno ou o médico devem executar para solucionar o problema.',
          'Uma bronca por escrito no colega do turno anterior.',
          'A previsão do tempo para a semana seguinte.'
        ],
        correctIndex: 1,
        explanation: 'A letra "R" encerra a comunicação clínica com clareza sobre o plano de ação: o que precisa ser feito, observado ou encaminhado para dar seguimento ao cuidado.'
      },
      {
        id: 'q5-7',
        question: 'Quando um cuidador identifica um conflito interpessoal entre colegas de equipe na SRT, qual é a postura profissional esperada segundo a Comunicação Não-Violenta (CNV)?',
        options: [
          'Fazer fofocas nos grupos de WhatsApp e boicotar o trabalho do colega.',
          'Buscar o diálogo direto, maduro e respeitoso, expondo os fatos sem ataques pessoais e focando no bem-estar e na segurança dos moradores da casa.',
          'Abandonar o plantão no meio da noite sem avisar ninguém.',
          'Pedir para os moradores escolherem qual funcionário eles preferem.'
        ],
        correctIndex: 1,
        explanation: 'A maturidade da equipe reflete diretamente na segurança dos moradores. Conflitos devem ser resolvidos com diálogo transparente e comunicação não-violenta.'
      },
      {
        id: 'q5-8',
        question: 'Em que circunstância o sigilo profissional do cuidador PODE ser quebrado legalmente?',
        options: [
          'Para fofocar com amigos no almoço de domingo.',
          'Em situações de risco iminente de suicídio, violência grave contra terceiros ou por ordem judicial expressa fundamentada em lei.',
          'Sempre que o cuidador achar que o morador está mentindo.',
          'Quando um curioso oferecer dinheiro por informações.'
        ],
        correctIndex: 1,
        explanation: 'A quebra do sigilo é uma exceção ética e jurídica estrita, permitida apenas para salvar vidas, prevenir danos irreparáveis ou cumprir determinações judiciais legais.'
      },
      {
        id: 'q5-9',
        question: 'Por que o uso de gírias, deboches e apelidos pejorativos ("o doidão da sala", "a birrenta") nos relatórios da SRT é considerado infração ética?',
        options: [
          'Apenas porque a prefeitura não gosta de palavras compridas.',
          'Porque desumaniza o usuário, desqualifica o trabalho da equipe, fere os direitos humanos e compromete a validade jurídica dos registros do SUS.',
          'Porque os livros de ocorrência são lidos apenas pelos próprios moradores.',
          'Porque a tinta da caneta azul gasta mais rápido.'
        ],
        correctIndex: 1,
        explanation: 'Linguagem pejorativa perpetua o estigma manicomial e viola os códigos de ética e as diretrizes do SUS sobre o respeito à dignidade humana.'
      },
      {
        id: 'q5-10',
        question: 'Ao final do curso de 40 horas do Capacita SRT Salomão, qual é o compromisso ético fundamental assumido pelo cuidador de saúde mental?',
        options: [
          'Trancar os moradores no quarto para não ter trabalho durante a noite.',
          'Ser um agente de transformação social, garantindo dignidade, autonomia, escuta humanizada, segurança e defesa intransigente dos direitos humanos no SUS.',
          'Substituir os médicos do CAPS e alterar receitas por conta própria.',
          'Tornar a residência terapêutica idêntica a um hospital psiquiátrico fechado.'
        ],
        correctIndex: 1,
        explanation: 'O cuidador capacitado é o guardião cotidiano da Luta Antimanicomial, trabalhando com afeto e técnica para que cada morador viva com liberdade e cidadania plena.'
      }
    ],
    essayTask: {
      prompt: 'Escreva um exemplo completo de Passagem de Plantão utilizando estritamente a metodologia SBAR para um morador da SRT Salomão que apresentou febre de 38,4ºC e tosse produtiva no turno da tarde, destacando: 1) Situação (S); 2) Breve Histórico (B); 3) Avaliação (A); 4) Recomendação (R). Em seguida, justifique por que esse método previne erros graves na assistência.',
      rubric: [
        {
          criterion: 'Estruturação precisa e completa dos 4 eixos do método SBAR',
          weight: '45%',
          guideline: 'Descrever separadamente e com rigor técnico os campos Situation, Background, Assessment e Recommendation.'
        },
        {
          criterion: 'Qualidade técnica da linguagem e dados clínicos',
          weight: '30%',
          guideline: 'Uso de termos claros, objetivos, com sinais vitais, horários e condutas assertivas.'
        },
        {
          criterion: 'Justificativa sobre segurança do paciente e comunicação eficaz',
          weight: '25%',
          guideline: 'Explicar como a padronização elimina ruídos e previne a descontinuidade do cuidado.'
        }
      ],
      modelAnswer: 'Exemplo prático de Passagem de Plantão SBAR: \n\n• S (Situação): Seu Antônio, 64 anos, apresentou febre de 38,4ºC às 15h30 e tosse produtiva com secreção esverdeada durante o período da tarde.\n• B (Breve Histórico): Morador com histórico de DPOC (Doença Pulmonar Obstrutiva Crônica) e tabagismo de longa data. Fez uso de Dipirona 500mg VO às 15h45 conforme prescrição médica de SOS.\n• A (Avaliação): Às 17h, a temperatura corporal normalizou para 36,6ºC, porém mantém frequência respiratória de 22 irpm e discreta prostração. Aceitou boa hidratação e ceia.\n• R (Recomendação): O plantão noturno deve monitorar a temperatura axilar a cada 4 horas (às 21h, 01h e 05h), manter o morador agasalhado, incentivar a ingesta de água morna e, caso haja novo pico febril ou piora do padrão respiratório, contatar o enfermeiro de sobreaviso do CAPS ou acionar o SAMU 192.\n\nJustificativa de Segurança: O método SBAR elimina a subjetividade e a ambiguidade na troca de turnos. Ao organizar o raciocínio em uma sequência lógica padronizada (Situação, Histórico, Avaliação e Recomendação), garante-se que nenhuma informação clínica vital seja omitida, permitindo que a equipe entrante tome decisões preventivas rápidas e mantenha a continuidade ininterrupta da assistência segura.'
    }
  }
];
