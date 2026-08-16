import { Module } from '../types/course';

export const modulesData: Module[] = [
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
      'Portaria GM/MS nº 2.840/2014 (Atualização e redefinição do funcionamento das SRTs no SUS)'
    ],
    contentSections: [
      {
        title: '1. Da Lógica Asilar ao Morar na Cidade: A Luta Antimanicomial',
        paragraphs: [
          'A história da psiquiatria tradicional no Brasil foi marcada pela segregação e isolamento em grandes hospitais psiquiátricos, nos quais os indivíduos perdiam seus laços familiares, sua identidade jurídica e sua autonomia cotidiana. A Reforma Psiquiátrica Brasileira, consolidada pela Lei Federal nº 10.216/2001, redirecionou o modelo assistencial: o tratamento deve ocorrer prioritariamente em serviços comunitários e em meio livre.',
          'Nesse contexto, os Serviços de Residência Terapêutica (SRTs), como o Residencial Terapêutico Salomão em Blumenau/SC, surgem como moradias inseridas na comunidade destinadas a pessoas com transtornos mentais egressas de longas internações psiquiátricas ou em situação de vulnerabilidade e dependência social.'
        ],
        keyTakeaway: 'Uma SRT não é uma clínica, não é um hospital e não é um asilo. É uma CASA de fato, um lar no território, onde o morador detém direitos civis, chaves da porta, liberdade de circulação e voz ativa.',
        normativeHighlight: 'Portaria GM/MS nº 106/2000: Define a SRT como recurso residencial de apoio para reinserção social de egressos de hospitais psiquiátricos, com capacidade para 1 a 8 moradores (Tipo I) ou até 10 moradores com suporte intensivo (Tipo II).'
      },
      {
        title: '2. Tipologias das SRTs e a Especificidade do Cuidado',
        paragraphs: [
          'A legislação brasileira divide os serviços residenciais em SRT Tipo I (voltada para moradores com maior grau de autonomia, demandando suporte técnico contínuo porém não presencial 24h) e SRT Tipo II (voltada para moradores com alto grau de dependência física ou institucional, requerendo equipe de cuidadores presencial 24 horas por dia).',
          'No Residencial Terapêutico Salomão, o trabalho da equipe de cuidadores articula-se diariamente com o Centro de Atenção Psicossocial (CAPS II e CAPS III do município de Blumenau) e com a Unidade Básica de Saúde (eSF/eMulti) do bairro. O cuidador não prescreve, não diagnostica e não isola; seu papel central é reabilitar para a vida diária.'
        ],
        practicalTips: [
          'Nunca trate os moradores como doentes incapacitados ou crianças ("meus velhinhos", "coitadinhos"). Trate-os sempre pelo nome próprio e como adultos com história de vida.',
          'Lembre-se: o cuidador trabalha NA CASA do morador. Nós somos os profissionais que entram no espaço privativo dele, e não o morador que está "visitando" nosso local de trabalho.'
        ]
      },
      {
        title: '3. O Cuidador Terapêutico como Agente de Cidadania e Reabilitação Psicossocial',
        paragraphs: [
          'A Reabilitação Psicossocial, segundo Saraceno, fundamenta-se em reconstruir três eixos centrais na vida do sujeito: Casa (habitat), Rede Social (trocas interpessoais e afeto) e Trabalho/Valor Social (ocupação e produção de sentido).',
          'O cuidador de SRT é a ponte diária para a autonomia. Cada ação rotineira — desde acompanhar uma ida à padaria na rua XV de Novembro em Blumenau até incentivar o morador a escolher a própria roupa — é uma intervenção terapêutica de resgate da cidadania violada por anos de institucionalização.'
        ],
        normativeHighlight: 'Direito Fundamental (Art. 2º da Lei 10.216/2001): Garantia de ser tratado com humanidade e respeito, no interesse exclusivo de beneficiar sua saúde, visando alcançar sua recuperação pela inserção na família, no trabalho e na comunidade.'
      }
    ],
    caseStudy: {
      title: 'O Retorno à Vida Comunitária de Seu Geraldo',
      residentContext: 'Seu Geraldo, 62 anos, viveu 31 anos continuamente internado em um hospital psiquiátrico de custódia e tratamento. Chegou ao Residencial Terapêutico Salomão há 2 meses. Apresenta marcha lenta, olhar desconfiado, hábito de guardar restos de comida embaixo do travesseiro e extrema passividade, aguardando ordens para tudo (até para ir ao banheiro ou tomar água).',
      scenarioDescription: 'Durante a manhã, a cuidadora da equipe orienta que é hora do café. Geraldo senta-se na mesa, coloca as mãos no colo e fica imóvel por 40 minutos sem tocar no pão ou na xícara de café, aguardando que alguém lhe dê permissão explícita ou lhe dê o alimento na boca. Quando um novo cuidador tenta pegar o prato dele para ajudá-lo de forma abrupta, Geraldo assusta-se, esconde a cabeça com os braços e começa a tremer, temendo punição.',
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
          'Medicação, Isolamento e Higienização.',
          'Casa (habitat), Rede Social (afeto e trocas) e Trabalho/Produção de Sentido.',
          'Diagnóstico Psiquiátrico, Tutela Judicial e Internação Contínua.',
          'Contenção Mecânica, Consulta Médica e Repouso Absoluto.'
        ],
        correctIndex: 1,
        explanation: 'Saraceno define a Reabilitação Psicossocial como um processo de reconstrução de contratualidade nos três eixos: o habitat (morar com dignidade), a rede social (reconstruir laços e afetos) e o valor social/trabalho.'
      }
    ],
    essayTask: {
      prompt: 'Considerando a história da Luta Antimanicomial no Brasil e as diretrizes do Residencial Terapêutico Salomão, elabore um texto dissertativo (de 15 a 25 linhas) explicando: 1) Por que o cuidador é considerado um "agente de cidadania" e não um mero leigo ou vigilante; 2) Como a postura diária do cuidador pode evitar que a SRT reproduza a lógica de um "mini-manicômio".',
      rubric: [
        {
          criterion: 'Articulação Normativa e Antimanicomial',
          weight: '30%',
          guideline: 'Citar explicitamente os princípios da Lei 10.216/2001 e o conceito de desinstitucionalização.'
        },
        {
          criterion: 'Papel do Cuidador na Prática',
          weight: '40%',
          guideline: 'Explicar a transição da postura de tutela/vigilância para a postura de escuta, facilitação da autonomia e apoio nas AVDs.'
        },
        {
          criterion: 'Prevenção da Lógica Asilar',
          weight: '30%',
          guideline: 'Identificar atitudes que geram institucionalização (rotinas rígidas impostas, uniformização, falta de escolha) e propor atitudes emancipatórias.'
        }
      ],
      modelAnswer: 'O cuidador em um Serviço de Residência Terapêutica (SRT) atua como um verdadeiro agente de cidadania ao operacionalizar no dia a dia os preceitos da Lei Federal nº 10.216/2001. Diferente de uma postura meramente vigilante ou assistencialista, o cuidador de saúde mental facilita a reconstrução da laço social e da autonomia de sujeitos historicamente privados de seus direitos fundamentais por longas internações asilares.\n\nPara evitar que a SRT Salomão se transforme em um "mini-manicômio", a equipe precisa combater práticas rotineiras de institucionalização, tais como: impor horários inflexíveis para dormir/acordar sem pactuação, escolher as roupas pelo morador, trancar mantimentos sem justificativa terapêutica ou referir-se aos moradores com tom infantilizado. A conduta emancipatória traduz-se no respeito à individualidade, na oferta de escolhas reais (o que comer, qual roupa vestir, onde passear no bairro), na mediação de conflitos com escuta qualificada e no incentivo contínuo às Atividades de Vida Diária (AVD), fortalecendo os eixos de habitar, conviver e pertencer à comunidade de Blumenau.'
    }
  },
  {
    id: 2,
    title: 'Módulo 2: O Cotidiano e o Cuidado Físico com Dignidade',
    shortTitle: 'Cotidiano e Cuidado Físico',
    subtitle: 'Autonomia nas AVDs, Higiene Respeitosa, Ergonomia e Rotina Domiciliar Terapêutica',
    summary: 'Aprenda a estruturar a rotina da casa promovendo a máxima autonomia dos moradores. Domine técnicas de ergonomia para preservação da coluna do cuidador, prevenção de lesões por pressão em acamados e suporte humanizado na higiene pessoal.',
    iconName: 'HeartHandshake',
    workloadHours: 8,
    normativeBase: [
      'Resolução RDC ANVISA nº 50/2002 (Critérios de acessibilidade, conforto e higiene em ambientes assistenciais)',
      'Cadernos de Atenção Básica do Ministério da Saúde (Envelhecimento e Saúde da Pessoa Idosa/Dependente)',
      'Manual de Boas Práticas de Higiene e Nutrição em Unidades Residenciais Coletivas'
    ],
    contentSections: [
      {
        title: '1. A Rotina Doméstica Terapêutica: Entre a Estrutura e a Flexibilidade',
        paragraphs: [
          'Em uma SRT, a rotina não deve ser uma imposição militar ou hospitalar, mas um organizador psíquico que traz segurança e previsibilidade aos moradores. A elaboração do cardápio, a organização da lavanderia, a limpeza dos quartos e os horários de lazer devem contar com a participação ativa dos moradores dentro de suas capacidades.',
          'Fazer COM o morador, e não FAZER PELO morador, é a regra de ouro do cuidado de reabilitação. Se um morador consegue dobrar suas próprias camisetas, ele deve ser incentivado e apoiado a fazê-lo, ainda que a dobra não fique perfeita.'
        ],
        keyTakeaway: 'A dependência funcional muitas vezes é produzida e aprofundada pela própria equipe quando esta substitui o morador em tarefas que ele teria condições de realizar com apoio.',
        practicalTips: [
          'Construa um quadro visual interativo de rotinas na cozinha com fotos ou figuras para moradores com dificuldades de leitura.',
          'Estimule o pertencimento permitindo que cada morador decore e organize seu quarto com seus objetos pessoais e memórias.'
        ]
      },
      {
        title: '2. Higiene Pessoal Respeitosa e Prevenção de Traumas no Banho',
        paragraphs: [
          'O momento do banho e da higiene íntima é frequentemente uma zona de vulnerabilidade extrema e de gatilhos pós-traumáticos para egressos de asilos psiquiátricos (onde duchas frias e duchas coletivas sob coação eram usadas como punição).',
          'A recusa ao banho não deve ser respondida com força física ou ameaças ("se não tomar banho, não vai ver TV"). Exige negociação, adequação da temperatura da água, escolha do sabonete de preferência, presença de cuidador do mesmo sexo quando solicitado e garantia de total privacidade.'
        ],
        normativeHighlight: 'Direito à Privacidade e Intimidade: Toda intervenção de higiene corporal deve ocorrer a portas fechadas, respeitando a pudicícia e a integridade física e moral do morador.'
      },
      {
        title: '3. Ergonomia do Cuidador e Mobilização Segura de Moradores Dependentes',
        paragraphs: [
          'O cuidador de SRT Tipo II frequentemente lida com moradores idosos, com sequelas neurológicas, déficit motor ou uso de psicotrópicos que alteram a marcha e o equilíbrio. A preservação da saúde física do cuidador (coluna vertebral, articulações) é indispensável para a sustentabilidade do trabalho.',
          'Mecanismos de transferência: Uso da base de apoio alargada (pés afastados na largura dos ombros), flexão dos joelhos (não dobrar a coluna), manter o peso do morador próximo ao próprio corpo e utilizar o peso corporal a seu favor durante a mudança de decúbito e transferência cama-cadeira.'
        ],
        practicalTips: [
          'Nas mudanças de decúbito a cada 2 horas para moradores acamados, utilize lençóis móbiles ("traçado") e peça ajuda a um colega de equipe para transferências pesadas.',
          'Verifique a pele do morador nas zonas de pressão (sacro, calcanhares, trocânteres) diariamente para prevenção de Lesões por Pressão (LPP).'
        ]
      }
    ],
    caseStudy: {
      title: 'A Resistência Terapêutica ao Banho Matinal de Dona Maria',
      residentContext: 'Dona Maria, 68 anos, reside na SRT Salomão há 1 ano. Possui diagnóstico de Esquizofrenia Residual e osteoartrose grave em joelhos. Pela manhã, a cuidadora da escala tenta levá-la ao banheiro às 07:00 para o banho. Maria encolhe-se na cama, agarra as cobertas, chora e grita: "A água gelada não! Não me matem!".',
      scenarioDescription: 'A cuidadora novata, com pressa para cumprir as tarefas da manhã e servir o café, tenta puxar a coberta de Dona Maria e diz em tom ríspido: "Vamos Maria, larga de drama que a água tá morna e eu tenho mais 7 moradores pra dar banho antes do plantão acabar!". A moradora reage tentando desferir um tapa na cuidadora.',
      keyDilemma: 'Como lidar com o trauma prévio de internação psiquiátrica associado à água e respeitar a autonomia temporal da moradora sem comprometer os cuidados essenciais de higiene?',
      guidedQuestions: [
        'O que a reação de alarme e choro de Dona Maria revela sobre sua história de institucionalização?',
        'Qual foi o erro de abordagem da cuidadora novata ao priorizar a pressa operacional em vez do acolhimento?',
        'Quais estratégias de pactuação e conforto físico podem ser adotadas para transformar a higiene em um momento seguro?'
      ],
      recommendedConduct: 'A cuidadora deve imediatamente cessar a aproximação física ostensiva, dar dois passos para trás, cobrir Dona Maria novamente e abaixar-se na altura dos olhos dela com tom acolhedor. Deve validar a dor: "Dona Maria, desculpe assustar a senhora. Ninguém vai te machucar e a água aqui é quentinha, mas a senhora não precisa tomar banho agora se não quiser". Oferecer adiar o banho para depois do café da manhã ou para a tarde (quando a dor articular da osteoartrose diminui), permitir que Maria teste a temperatura da água com a própria mão na torneira e escolha seu sabonete preferido.',
      normativeReference: 'Diretrizes de Humanização do SUS (PNH) e Resolução RDC 50/ANVISA - Garantia de ambiência acolhedora, autonomia do usuário e proibição de condutas coercitivas.'
    },
    quiz: [
      {
        id: 'q2-1',
        question: 'Ao planejar as Atividades de Vida Diária (AVD) dos moradores do Residencial Terapêutico Salomão, qual deve ser o princípio condutor da equipe de cuidadores?',
        options: [
          'Assumir a execução total de todas as tarefas domésticas para garantir rapidez e padrão de limpeza institucional.',
          'Estimular e acompanhar a autonomia dos moradores, incentivando que façam o máximo de tarefas possíveis por si mesmos, com apoio gradual.',
          'Permitir que os moradores façam apenas tarefas de alto risco para testar sua capacidade de responsabilidade.',
          'Proibir moradores de entrarem na cozinha ou lavanderia por motivos estritos de segurança patrimonial.'
        ],
        correctIndex: 1,
        explanation: 'O foco da reabilitação psicossocial é a máxima autonomia possível nas AVDs. O cuidador apoia e ensina, sem infantilizar ou substituir a capacidade do sujeito.'
      },
      {
        id: 'q2-2',
        question: 'Durante a transferência de um morador com dependência motora da cama para a cadeira de rodas, qual é a conduta ergonômica correta para o cuidador proteger sua coluna vertebral?',
        options: [
          'Manter as pernas totalmente esticadas e dobrar a coluna lombar para frente ao puxar o morador.',
          'Afastar os pés na largura dos ombros, dobrar os joelhos, manter o morador próximo ao tronco e girar o corpo com os pés, sem torcer o tronco.',
          'Puxar o morador rapidamente pelos braços esticados de uma só vez, sem avisá-lo previamente.',
          'Realizar a transferência sempre sozinho, independentemente do peso do morador.'
        ],
        correctIndex: 1,
        explanation: 'A biomecânica correta exige base ampla, flexão de joelhos, proximidade da carga ao centro de gravidade e rotação em bloco com os pés, evitando o cisalhamento da coluna lombar.'
      },
      {
        id: 'q2-3',
        question: 'Um morador idoso acamado na SRT necessita de mudanças de posição (decúbito) periódicas para evitar lesões por pressão (escaras). Qual é a frequência recomendada para esse procedimento?',
        options: [
          'Uma vez a cada 24 horas, preferencialmente durante a troca de plantão noturno.',
          'A cada 2 horas, alternando entre decúbito dorsal (costas), lateral esquerdo e lateral direito, inspecionando a pele.',
          'Apenas quando o morador reclamar de dores intensas nas costas.',
          'Três vezes por semana após o banho completo.'
        ],
        correctIndex: 1,
        explanation: 'A reposição a cada 2 horas é o padrão-ouro de enfermagem e cuidado continuado para aliviar a pressão isquêmica sobre proeminências ósseas e prevenir Lesões por Pressão (LPP).'
      },
      {
        id: 'q2-4',
        question: 'Frente à recusa convicta de um morador em realizar a higiene bucal antes de dormir, qual deve ser a postura adequada do cuidador?',
        options: [
          'Uso da força física para abrir a boca do morador e passar a escova.',
          'Ameaçar cortar o café da manhã do dia seguinte até que ele cumpra a higiene.',
          'Compreender o motivo da recusa com escuta calma, tentar uma abordagem lúdica/pactuada ou postergar momentaneamente, registrando a conduta no diário de bordo sem punições.',
          'Ignorar definitivamente a higiene bucal de todos os moradores que não demonstrarem vontade espontânea.'
        ],
        correctIndex: 2,
        explanation: 'Coação e punição são veementemente vedadas. A conduta correta passa pela escuta, vínculo, paciência e estratégias de pactuação, com devido registro e repasse à equipe multidisciplinar.'
      }
    ],
    essayTask: {
      prompt: 'Descreva detalhadamente a conduta de um cuidador ao realizar o banho em um morador da SRT Tipo II que apresenta limitação de mobilidade e histórico de trauma em instituições psiquiátricas fechadas. Sua resposta deve abordar obrigatoriamente: 1) As etapas de preparação do ambiente e do morador; 2) Os cuidados ergométricos do cuidador; 3) As ações para garantir a dignidade e a eliminação do sentimento de ameaça.',
      rubric: [
        {
          criterion: 'Humanização e Comunicação Prévia',
          weight: '35%',
          guideline: 'Explicar o aviso antecipado, checagem da água pelo morador, acolhimento afetivo e preservação do pudor.'
        },
        {
          criterion: 'Segurança Física e Ergonomia',
          weight: '35%',
          guideline: 'Descrever o uso de cadeira de banho apropriada, barras de apoio, antiderrapante e postura biomecânica correta do cuidador.'
        },
        {
          criterion: 'Respeito à Autonomia',
          weight: '30%',
          guideline: 'Mencionar a participação ativa do morador no processo (lavar o rosto, escolher o sabonete).'
        }
      ],
      modelAnswer: 'A realização do banho em um morador com limitação motora e histórico de trauma psiquiátrico exige planejamento rigoroso para transformar a rotina assistencial em ato de cuidado terapêutico. \n\nPrimeiramente, a preparação envolve avisar o morador com antecedência e voz calma, convidando-o e não impondo a tarefa. O banheiro deve estar pré-aquecido, com portas fechadas para garantir total privacidade, barras de apoio inspecionadas e tapetes antiderrapantes instalados. Antes de iniciar, o cuidador oferece para que o próprio morador sinta a temperatura da água na mão, desconstruindo a memória traumática de jatos frios coercitivos.\n\nEm segundo lugar, do ponto de vista ergonômico, o cuidador utiliza uma cadeira de banho adequada com travamento de rodas ativado, mantendo sua coluna ereta e joelhos flexionados durante a transferência e o auxílio. Durante a higiene, preserva-se a exposição corporal lavando uma parte do corpo de cada vez sob a toalha ou água morna.\n\nPor fim, incentiva-se a máxima autonomia possível: se o morador consegue lavar seu próprio rosto ou braços, a esponja lhe é entregue. Ao final, a secagem é suave e a escolha da roupa é feita pelo próprio morador, reforçando sua dignidade e sentimento de segurança no lar.'
    }
  },
  {
    id: 3,
    title: 'Módulo 3: Saúde Mental Prática e Manejo de Crises',
    shortTitle: 'Manejo de Crises e Desescalada',
    subtitle: 'Sinais Prodrômicos, Desescalada Verbal, Protocolos de Segurança e Articulação RAPS Blumenau',
    summary: 'Aprenda a reconhecer precocemente as alterações de comportamento que antecedem uma crise psiquiátrica. Domine técnicas avançadas de desescalada verbal (método de Richmond) e saiba como acionar o CAPS II/III e o SAMU 192 com clareza.',
    iconName: 'ShieldAlert',
    workloadHours: 10,
    normativeBase: [
      'Portaria GM/MS nº 3.088/2011 (Organização da RAPS e atenção às urgências psiquiátricas)',
      'Diretrizes de Desescalada e Manejo de Comportamento Agitado da Associação Brasileira de Psiquiatria (ABP)',
      'Protocolo de Atendimento Pré-Hospitalar do SAMU 192 Blumenau / Santa Catarina para Urgências Psiquiátricas'
    ],
    contentSections: [
      {
        title: '1. Compreendendo a Crise Psíquica: Sofrimento, Não Ameaça',
        paragraphs: [
          'A crise em saúde mental não deve ser entendida como um ato de violência intencional ou "maldade", mas sim como um momento de desorganização psíquica intensa, no qual o sujeito perde temporariamente a capacidade de reverter o sofrimento por vias verbais convencionais.',
          'No Residencial Terapêutico Salomão, o cuidador deve atuar na prevenção e identificação precoce dos sinais prodrômicos (sinais de alerta): alteração no padrão de sono, mutismo repentino, ritmo acelerado de caminhada na casa (pacing), olhar fixo, fala desconexa, respostas a alucinações auditivas ou isolamento social atípico.'
        ],
        keyTakeaway: 'A maior parte das crises graves pode ser evitada se o cuidador notar as pequenas mudanças de comportamento nas primeiras 24 a 48 horas e intervir com escuta qualificada.',
        practicalTips: [
          'Mantenha um diário de observação individualizado para identificar o "patamar normal" de cada morador.',
          'Quando notar agitação inicial, diminua os estímulos ambientais (desligue a TV em volume alto, reduza luzes fortes e evite aglomeração de pessoas ao redor).'
        ]
      },
      {
        title: '2. Técnica de Desescalada Verbal (Os 10 Princípios de Richmond)',
        paragraphs: [
          'A desescalada verbal é o conjunto de intervenções não físicas destinadas a acalmar um indivíduo agitado ou agressivo. É a PRIMEIRA e mais importante linha de resposta em qualquer situação de tensão na SRT.',
          'Princípios chave: 1) Mantenha distância física de segurança (mais de dois passos de distância); 2) Mantenha postura corporal aberta e relaxada (mãos visíveis, sem cruzar braços); 3) Fale com tom de voz calmo, baixo e pausado; 4) Estabeleça contato verbal com apenas UM interlocutor (evite falar ao mesmo tempo que outros colegas); 5) Valide os sentimentos do morador ("Percebo que você está muito chateado e assustado"); 6) Ofereça escolhas claras e simples.'
        ],
        normativeHighlight: 'Proibição Absoluta de Punição: É estritamente vedado o uso de isolamento trancado (solitária), duchas frias, agressão verbal/física ou contenção mecânica improvisada com cordas/faixas não homologadas.'
      },
      {
        title: '3. Protocolo de Acionamento da RAPS e Urgência (SAMU 192 e CAPS)',
        paragraphs: [
          'Quando a desescalada verbal não produz resultado e há risco iminente de autoagressão ou heteroagressão física incontrolável, a equipe ativa a rede externa de apoio de Blumenau.',
          'O cuidador deve contatar imediatamente a equipe de referência do CAPS (CAPS II ou CAPS III) durante o dia para suporte técnico/médico de urgência. Fora do horário do CAPS ou em crises com risco direto à vida, o SAMU (192) deve ser acionado com relato objetivo (não rotular como "louco agressivo", mas descrever condutas reais e sinais vitais).'
        ],
        practicalTips: [
          'Ao ligar para o SAMU 192, informe: "Sou cuidador da SRT Salomão. O morador X está em crise de agitação psicomotora intensa com risco de queda/ferimento, sem resposta à desescalada verbal. Não há armas. Necessitamos de apoio de saúde".'
        ]
      }
    ],
    caseStudy: {
      title: 'Surto Psicomotor e Alucinação Auditiva com Seu Antônio',
      residentContext: 'Seu Antônio, 54 anos, diagnóstico de Transtorno Espectro da Esquizofrenia, reside na SRT Salomão há 3 anos. Por volta das 22h, começa a andar velozmente pelo corredor, segurando firme um cabo de vassoura e gritando com a parede: "Eles estão vindo me pegar pela janela! Vou me defender!". Os outros moradores começam a acordar assustados.',
      scenarioDescription: 'O cuidador de plantão noturno percebe a cena. Se o cuidador tentar correr e gritar para tomar o cabo de vassoura à força, Antônio interpretará o cuidador como um dos "agressores da alucinação", aumentando drasticamente o risco de confronto físico.',
      keyDilemma: 'Como desarmar o morador sem confronto físico, proteger a casa e realizar a desescalada verbal garantindo a segurança de todos?',
      guidedQuestions: [
        'Qual foi o gatilho provável e qual o conteúdo da vivência delirante-alucinatória de Antônio?',
        'Quais são os passos exatos de posicionamento corporal e fala para a desescalada verbal neste momento?',
        'Quando e como o colega de plantão deve proceder para afastar os demais moradores e acionar o suporte médico?'
      ],
      recommendedConduct: '1) O segundo cuidador afasta calmamente os demais moradores para os quartos, fechando as portas suavemente; 2) O primeiro cuidador posiciona-se a 3 metros de distância, de lado (postura não confrontativa), com as mãos espalmadas e visíveis na altura do peito; 3) Fale com voz baixa e segura: "Antônio, sou o [Nome], seu cuidador aqui na nossa casa. Você está seguro aqui. Ninguém vai entrar pela janela"; 4) Valide sem concordar com o delírio: "Eu sei que você está ouvindo vozes e assustado, mas eu estou aqui com você para te proteger. Pode me entregar esse cabo de vassoura para eu guardar na cozinha?"; 5) Se Antônio abaixar o objeto, acolha-o com um copo de água morna em local tranquilo e avalie a medicação de resgate orientada no PTS pelo psiquiatra do CAPS.',
      normativeReference: 'Diretrizes de Manejo da Agitação Psicomotora (ABP/MS) e Portaria nº 3.088/2011.'
    },
    quiz: [
      {
        id: 'q3-1',
        question: 'Durante o processo de desescalada verbal de um morador em estado de agitação psicomotora na SRT, qual deve ser a postura física inicial do cuidador?',
        options: [
          'Aproximar-se rapidamente a menos de meio metro, segurar os punhos do morador e olhá-lo fixamente nos olhos.',
          'Manter uma distância de segurança de pelo menos 2 a 3 passos, posicionar-se num ângulo lateral, manter as mãos abertas e visíveis e usar tom de voz calmo.',
          'Cruzando os braços, encostar-se na parede e exigir em tom alto que ele pare imediatamente com o escândalo.',
          'Correr para o quarto de medicamentos e trancar a porta por dentro deixando o morador sozinho.'
        ],
        correctIndex: 1,
        explanation: 'A postura não confrontativa (distância de segurança, ângulo lateral, mãos abertas, tom baixo) reduz a sensação de ameaça no cérebro do sujeito agitado, viabilizando o diálogo de desescalada.'
      },
      {
        id: 'q3-2',
        question: 'Qual das seguintes manifestações comportamentais representa um possível SINAL PRODRÔMICO (sinal de alerta precoce) de descompensação psíquica em um morador?',
        options: [
          'Morador alimentando-se bem, dormindo 8 horas por noite e participando das conversas na varanda.',
          'Morador apresentando insônia persistente há 2 dias, caminhada rápida e sem rumo (pacing) e sussurros isolados no quarto.',
          'Morador pedindo para assistir ao jogo de futebol na TV junto com os colegas.',
          'Morador escovando os dentes espontaneamente após o almoço.'
        ],
        correctIndex: 1,
        explanation: 'Alterações no sono, inquietude motora, mutismo ou solilóquios (falar sozinho em resposta a alucinações) são clássicos sinais prodrômicos que exigem intervenção preventiva da equipe.'
      },
      {
        id: 'q3-3',
        question: 'Ao conversar com um morador que está vivenciando um delírio persecutório ("estão querendo me envenenar com a comida"), qual é a conduta correta do cuidador?',
        options: [
          'Confrontar o morador dizendo que ele está louco, que a comida não tem nada e obrigá-lo a engolir.',
          'Fingir que concorda totalmente com o delírio e inventar uma história fantástica sobre quem são os envenenadores.',
          'Não alimentar o delírio nem confrontá-lo agressivamente; validar o sentimento do morador ("Vejo que você está assustado") e oferecer alternativas seguras (permitir que ele abra uma embalagem lacrada ou sirva sua própria comida).',
          'Chamar a polícia militar imediatamente para fazer uma perícia no prato de comida.'
        ],
        correctIndex: 2,
        explanation: 'A abordagem terapêutica valida a EMOÇÃO (o medo é real para o sujeito) sem endossar nem debochar do CONTEÚDO delirante, pactuando saídas de conforto prático.'
      },
      {
        id: 'q3-4',
        question: 'Em que situação a contenção física presencial emergencial é admitida na atenção em saúde mental, segundo os conselhos profissionais e normativas vigentes?',
        options: [
          'Como forma habitual de disciplina, castigo por desobediência ou falta de funcionários no plantão.',
          'Apenas como recurso de EXCEÇÃO ABSOLUTA, em situações de extremo risco e falha da desescalada verbal, realizada por equipe treinada, por menor tempo possível e comunicada ao serviço de saúde.',
          'Sempre que o morador se recusar a tomar o banho da manhã.',
          'Livremente, desde que autorizada por vizinhos da casa.'
        ],
        correctIndex: 1,
        explanation: 'Contenção física é intervenção excepcionalíssima de emergência médica/técnica para contenção de danos graves e iminentes à integridade física, sendo banida como medida disciplinar ou corretiva.'
      }
    ],
    essayTask: {
      prompt: 'Elabore um Plano Ação de Manejo de Crise para a SRT Salomão contendo 4 etapas estruturadas: 1) Identificação e Prevenção nos Sinais Prodrômicos; 2) Protocolo de Desescalada Verbal no Espaço Comunitário da Casa; 3) Ações de Proteção dos Demais Moradores e do Ambiente; 4) Procedimento de Acionamento da RAPS Blumenau e Registro Pós-Crise.',
      rubric: [
        {
          criterion: 'Prevenção e Identificação Precoce',
          weight: '25%',
          guideline: 'Descrever sinais prodrômicos (sono, motricidade, afeto) e intervenções de alívio ambiental.'
        },
        {
          criterion: 'Técnicas de Desescalada Verbal',
          weight: '30%',
          guideline: 'Aplicar os princípios de Richmond (tom de voz, distância, escuta, interlocutor único).'
        },
        {
          criterion: 'Segurança Coletiva e Ambiente',
          weight: '20%',
          guideline: 'Mencionar a remoção de objetos perigosos e o remanejamento protetivo dos outros moradores.'
        },
        {
          criterion: 'Rede de Urgência e Notificação',
          weight: '25%',
          guideline: 'Especificar o acionamento de CAPS/SAMU 192 e o registro detalhado em prontuário.'
        }
      ],
      modelAnswer: 'O Plano de Manejo de Crise na SRT Salomão é articulado em quatro etapas operacionais rigorosas:\n\n1) Identificação e Prevenção nos Sinais Prodrômicos: A equipe monitora sinais de descompensação (insônia, perambulação, hipervigilância, respostas a estímulos internos). Ao notar esses sinais, reduz-se a estimulação sensorial da casa (TV, ruídos) e oferece-se espaço de escuta individualizada e chá calmante, comunicando o enfermeiro de referência do CAPS.\n\n2) Protocolo de Desescalada Verbal: Se a agitação se instala, um único cuidador assume a comunicação, mantendo distância mínima de 2 a 3 metros em posição não ostensiva. Com tom de voz pausado e sereno, valida o sofrimento do morador ("Percebo que você está sobrecarregado") e oferece alternativas de escolha simples (sentar na varanda, tomar água).\n\n3) Proteção dos Demais Moradores e do Ambiente: Simultaneamente, o segundo cuidador orienta com calma os demais moradores a se dirigirem à área de convivência externa ou quartos, afastando objetos perfurocortantes, vidros ou mobílias pontiagudas do raio de alcance.\n\n4) Acionamento da RAPS e Registro: Persistindo o risco iminente de violência física insuperável, contata-se o CAPS II/III de Blumenau ou o SAMU 192, fornecendo dados clínicos objetivos. Após a estabilização, o evento é registrado no diário de plantão e prontuário, seguido de debriefing com a equipe técnica para reavaliação do PTS.'
    }
  },
  {
    id: 4,
    title: 'Módulo 4: Gestão Segura de Medicamentos na SRT',
    shortTitle: 'Gestão Segura de Medicamentos',
    subtitle: 'Protocolo dos 9 Certos, Mapeamento de Efeitos Colaterais e Conduta na Recusa Medicamentosa',
    summary: 'Domine a administração segura de psicotrópicos no ambiente residencial. Saiba reconhecer reações adversas extrapiramidais graves (acatisia, parkinsonismo) e saiba agir eticamente diante da recusa de medicamentos sem recorrer a atalhos clandestinos.',
    iconName: 'Pills',
    workloadHours: 8,
    normativeBase: [
      'Decreto Federal nº 8.501/2015 e Lei de Exercício Profissional da Enfermagem (Regulamentação de administração de fármacos)',
      'Anvisa RDC nº 67/2007 e Portaria SVS/MS nº 344/1998 (Controle de substâncias psicotrópicas e sujeitas a controle especial)',
      'Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos (Ministério da Saúde/PNSP)'
    ],
    contentSections: [
      {
        title: '1. O Protocolo dos 9 Certos na Administração Residencial',
        paragraphs: [
          'A medicação psiquiátrica em uma SRT é um componente importante do tratamento, mas deve ser gerida com máximo rigor para evitar erros fatais de dosagem, medicação trocada entre moradores ou horários incorretos.',
          'A rotina de dispensação deve seguir obrigatoriamente a checagem dos 9 Certos: 1. User/Morador Certo; 2. Medicamento Certo; 3. Via Certa; 4. Dose Certa; 5. Hora Certa; 6. Tempo Certo; 7. Ação Certa; 8. Registro Certo; 9. Formato/Apresentação Certa.'
        ],
        keyTakeaway: 'O armário de medicamentos da SRT deve permanecer sempre trancado à chave, organizado por gaveteiros individuais identificados com NOME COMPLETO e FOTO do morador.',
        practicalTips: [
          'Confira a prescrição médica atualizada (emitida pelo médico do CAPS) antes de preparar a dose.',
          'Nunca estruture caixas de remédios genéricas ou soltas. Cada morador tem seu compartimento exclusivo.'
        ]
      },
      {
        title: '2. Identificação de Efeitos Colaterais Extrapiramidais e Reações Adversas',
        paragraphs: [
          'Os psicotrópicos (antipsicóticos típicos como Haloperidol/Haldol e atípicos como Risperidona, Olanzapina, além de estabilizadores de humor e ansiolíticos) possuem efeitos colaterais marcantes que o cuidador DEVE saber identificar.',
          'Principais Reações Extrapiramidais (SEP): 1) Acatisia (inquietação motora incontrolável nas pernas — o morador não consegue ficar sentado); 2) Parkinsonismo medicamentoso (rigidez muscular, tremor de repouso, marcha em bloco e sialorreia/babação); 3) Distonia aguda (contração muscular involuntária dolorosa no pescoço/olhos); 4) Impregnação por Olanzapina/Clozapina (ganho de peso acentuado, tontura postural e sedação excessiva).'
        ],
        normativeHighlight: 'Muitas vezes o morador é rotulado como "agitado" ou "não colaborativo" quando na verdade está sofrendo de ACATISIA (efeito colateral doloroso da medicação). O cuidador atento salva o morador desse sofrimento.'
      },
      {
        title: '3. A Ética da Recusa Medicamentosa: Por que NUNCA MASCARAR Remédio em Alimentos',
        paragraphs: [
          'Quando um morador se recusa a tomar o medicamento, surge um grande dilema na SRT. É estritamente PROIBIDO triturar comprimidos e escondê-los na comida, no suco ou no café do morador sem prescrição/orientação médica expressa.',
          'Esconder medicação destrói a relação de confiança e vínculo entre o morador e a equipe. Se o morador descobrir que foi enganado, desenvolverá delírios de envenenamento e recusa alimentar generalizada.',
          'Conduta na recusa: Tentar compreender o motivo (ex: "está me dando queimação no estômago", "estou ficando muito tonto", "o comprimido é muito grande"), dialogar suavemente, aguardar 30 minutos e tentar nova abordagem por outro cuidador com quem ele tenha maior vínculo. Caso persista a recusa, notificar o enfermeiro do CAPS no mesmo dia.'
        ]
      }
    ],
    caseStudy: {
      title: 'A Recusa Medicamentosa de Seu Benedito e o Efeito Colateral Oculto',
      residentContext: 'Seu Benedito, 59 anos, reside na SRT Salomão há 6 meses em uso de Haloperidol e Biperideno. Há 3 dias, recusa-se categoricamente a tomar o comprimido das 18h. A cuidadora do turno da tarde nota que Benedito fica andando de um lado para o outro na sala, bate as mãos nas coxas e parece irritado.',
      scenarioDescription: 'A cuidadora diz para o colega: "Ele está ficando rebelde. Vamos macerar o Haldol no prato de sopa dele hoje à noite, senão ele vai surtar e sobram problemas pra gente". O colega fica em dúvida se deve aceitar a sugestão.',
      keyDilemma: 'Como investigar a causa real da recusa medicamentosa sem recorrer à prática antiética de mascarar o remédio na refeição?',
      guidedQuestions: [
        'Quais sintomas físicos apresentados por Benedito sugerem a presença de um efeito colateral extrapiramidal (Acatisia)?',
        'Quais são os riscos éticos, jurídicos e de vínculo ao triturar e esconder medicação na sopa do morador?',
        'Qual deve ser o fluxo correto de comunicação com a equipe de enfermagem e médica do CAPS II Blumenau?'
      ],
      recommendedConduct: 'O colega de plantão deve impedir a ação de mascarar a medicação na sopa. O cuidador deve sentar-se com Benedito e perguntar com empatia: "Seu Benedito, o que o senhor sente quando toma esse remédio das 18h?". Benedito provavelmente expressará a sensação insuportável de agitação nas pernas (Acatisia). A cuidadora registra formalmente a recusa e a queixa física no livro de plantão, notifica a enfermagem do CAPS na manhã seguinte para reavaliação da dose do antipsicótico ou ajuste do Biperideno/Propranolol. O vínculo de confiança e o direito à integridade são preservados.',
      normativeReference: 'Código de Ética Profissional e Diretrizes da Política Nacional de Segurança do Paciente (PNSP/MS) - Proibição de administração velada de fármacos sem consentimento ou respaldo terapêutico legal.'
    },
    quiz: [
      {
        id: 'q4-1',
        question: 'O Protocolo dos 9 Certos na administração de medicamentos é uma garantia essencial de segurança. Qual das alternativas abaixo NÃO faz parte dos 9 Certos?',
        options: [
          'Morador Certo, Medicamento Certo e Dose Certa.',
          'Via Certa, Hora Certa e Registro Certo.',
          'Preço do Medicamento Certo, Marca Preferida do Cuidador Certa e Cor do Comprimido Certa.',
          'Ação Certa, Tempo Certo e Formato/Apresentação Certa.'
        ],
        correctIndex: 2,
        explanation: 'Preço, marca do fabricante e cor do comprimido não integram a lista técnica dos 9 Certos da administração segura de fármacos.'
      },
      {
        id: 'q4-2',
        question: 'Um morador da SRT em uso de antipsicóticos típicos (como Haloperidol) começa a apresentar uma inquietação motora incontrolável, dizendo que "não consegue parar as pernas quieta nem ficar sentado". Qual é o nome desse efeito colateral?',
        options: [
          'Sindrome da Fadiga Crônica.',
          'Acatisia (efeito colateral extrapiramidal).',
          'Crise Histérica Voluntária.',
          'Hipertensão Arterial Sistêmica Aguda.'
        ],
        correctIndex: 1,
        explanation: 'A Acatisia é uma reação adversa extrapiramidal extremamente angustiante caracterizada por inquietação motora objetiva e subjetiva, especialmente nos membros inferiores.'
      },
      {
        id: 'q4-3',
        question: 'Por que a prática de macerar comprimidos e escondê-los na alimentação do morador sem autorização médica expressa é terminantemente vedada nas SRTs?',
        options: [
          'Porque estraga o sabor da refeição e a cozinha fica brava.',
          'Porque viola a autonomia e dignidade do morador, destrói a relação de confiança com a equipe e pode causar intoxicações ou alteração na biodisponibilidade do fármaco.',
          'Porque os remédios psiquiátricos só funcionam se tomados com refrigerante.',
          'Porque aumenta o custo financeiro da residência terapêutica.'
        ],
        correctIndex: 1,
        explanation: 'Mascarar medicação quebra a ética do cuidado, destrói a confiança interpessoal (gerando delírios de envenenamento) e pode alterar a absorção físico-química dos fármacos.'
      },
      {
        id: 'q4-4',
        question: 'Diante da recusa de um morador em tomar a medicação prescrita para o horário das 20h, qual deve ser a PRIMEIRA atitude do cuidador?',
        options: [
          'Segurar as mãos do morador e forçar o comprimido garganta abaixo.',
          'Ouvir o motivo da recusa com empatia, checar se há desconforto físico, tentar uma nova abordagem pacífica mais tarde e registrar no diário de plantão.',
          'Ameaçar expulsar o morador do Residencial Terapêutico Salomão.',
          'Dobrar a dose da manhã seguinte sem avisar a equipe médica.'
        ],
        correctIndex: 1,
        explanation: 'Escuta afetuosa, investigação da causa (dor, queimação, vertigem), repactuação temporal e registro formal são os passos do cuidado humanizado ético.'
      }
    ],
    essayTask: {
      prompt: 'Elabore um Protocolo de Gestão de Medicamentos para o Residencial Terapêutico Salomão. O texto deve cobrir: 1) As rotinas de armazenamento, organização dos gaveteiros e conferência dos 9 Certos; 2) Os principais efeitos colaterais extrapiramidais que a equipe de cuidadores deve monitorar; 3) O fluxo de conduta diante da recusa medicamentosa persistente e articulação com a RAPS.',
      rubric: [
        {
          criterion: 'Procedimento dos 9 Certos e Armazenamento',
          weight: '35%',
          guideline: 'Detalhar o uso de armário trancado, gaveteiros individuais com nome/foto e a rotina diária de checagem.'
        },
        {
          criterion: 'Mapeamento de Efeitos Colaterais',
          weight: '30%',
          guideline: 'Citar acatisia, parkinsonismo (rigidez/sialorreia), distonia e sedação extrema.'
        },
        {
          criterion: 'Manejo Ético da Recusa e Registro',
          weight: '35%',
          guideline: 'Vedar medicação velada, descrever a pactuação, registro no livro de plantão e notificação ao CAPS.'
        }
      ],
      modelAnswer: 'O Protocolo de Gestão Segura de Medicamentos na SRT Salomão é estruturado para garantir a eficácia terapêutica e a segurança dos moradores:\n\n1) Armazenamento e Conferência: Todos os medicamentos permanecem em armário exclusivo, trancado à chave, sob responsabilidade do cuidador do turno. Os remédios são organizados em gaveteiros individuais identificados com nome completo e foto do morador. Antes da dispensação, o cuidador aplica a checagem dos 9 Certos (Morador, Medicamento, Via, Dose, Hora, Tempo, Ação, Registro e Apresentação), conferindo a prescrição médica válida emitida pelo CAPS.\n\n2) Monitoramento de Efeitos Adversos: A equipe de cuidadores realiza a vigilância diária de efeitos extrapiramidais: Acatisia (inquietação motora e incapacidade de sentar), Parkinsonismo (rigidez, marcha lenta, tremor nas mãos e salivação abundante), Distonias (espasmos musculares) e sedação excessiva. Qualquer alteração observada é anotada para discussão médica.\n\n3) Conduta Ética na Recusa: É expressamente proibido esconder medicação na comida. Diante da recusa, o cuidador investiga as razões com escuta empática. Se a recusa mantiver-se após nova tentativa pactuada em intervalo de 30 a 60 minutos por outro profissional, o fato é registrado com clareza no prontuário residencial e comunicado à enfermagem/médico do CAPS Blumenau para ajuste de esquema posológico.'
    }
  },
  {
    id: 5,
    title: 'Módulo 5: Comunicação e Passagem de Plantão Infalível',
    shortTitle: 'Passagem de Plantão e Registro',
    subtitle: 'Metodologia SBAR, Registro em Prontuário Residencial, Sigilo Ético e Prevenção de Falhas',
    summary: 'Aprenda a realizar passagens de plantão padronizadas e sem ruídos utilizando a ferramenta internacional SBAR. Estruture registros no prontuário residencial com valor legal e ético, garantindo a continuidade do cuidado na SRT.',
    iconName: 'ClipboardCheck',
    workloadHours: 6,
    normativeBase: [
      'Resolução COFEN nº 564/2017 (Código de Ética) e orientações de documentação em saúde',
      'Diretrizes da Organização Mundial da Saúde (OMS) para Comunicação Efetiva nas Transições de Cuidado',
      'Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) aplicada aos prontuários e dados de saúde'
    ],
    contentSections: [
      {
        title: '1. A Importância da Transição de Cuidado Sem Ruídos',
        paragraphs: [
          'A passagem de plantão na SRT é o momento mais crítico para a segurança do morador. Uma informação omitida ou mal comunicada ("Seu João não almoçou" ou "Dona Ana não tomou o remédio das 14h") pode desencadear erros em cadeia no turno seguinte.',
          'Passagens de plantão informais ou apressadas no portão da casa geram descontinuidade no cuidado. O momento de troca de turno deve ser sagrado, realizado em local reservado, com duração aproximada de 15 a 20 minutos entre toda a equipe que sai e a equipe que entra.'
        ],
        keyTakeaway: 'O que não está registrado, oficialmente não foi realizado. A palavra falada se perde; o registro formal no livro/prontuário protege o morador e o cuidador.',
        practicalTips: [
          'Nunca repasse informações por boatos ou "achismos" ("Acho que ele estava triste"). Descreva fatos observáveis ("Ficou em silêncio durante o café e recusou a caminhada").',
          'Inicie o plantão LENDO o relatório do turno anterior antes de assumir as rotinas.'
        ]
      },
      {
        title: '2. A Metodologia SBAR Adaptada à Residência Terapêutica',
        paragraphs: [
          'Para padronizar a fala e evitar esquecimentos, utiliza-se a metodologia SBAR internacionalmente reconhecida pela OMS:',
          '• S (Situação): Quem é o morador e qual o evento atual relevante? (Ex: "Seu Pedro, quarto 2, apresentou pico febril de 38.2ºC às 15h").',
          '• B (Breve Histórico): Qual o contexto prévio? (Ex: "Tem histórico de infecção urinária e está em uso de antibiótico há 2 dias").',
          '• A (Avaliação): O que você observou no seu turno? (Ex: "Aceitou bem os líquidos, mas reclamou de dor ao urinar e está mais sonolento").',
          '• R (Recomendação): O que o plantão seguinte precisa fazer? (Ex: "Medir temperatura novamente às 19h, incentivar ingestão de água e aguardar visita do enfermeiro do CAPS às 09h").'
        ],
        normativeHighlight: 'SBAR (Situation, Background, Assessment, Recommendation): Reduz em até 70% as falhas de comunicação interprofissional na transição de turnos de saúde.'
      },
      {
        title: '3. Registros de Prontuário, Sigilo Profissional e LGPD na SRT',
        paragraphs: [
          'Os diários de bordo e prontuários da SRT Salomão contêm dados sensíveis protegidos pela Lei Geral de Proteção de Dados (LGPD) e pelo sigilo profissional ético. É proibido fotografar moradores ou cadernos de registros para postar em redes sociais ou enviar em grupos não oficiais de WhatsApp.',
          'Regras de ouro do registro escrito: Usar caneta azul ou preta (sem uso de corretivo/branquinho), escrever com letra legível, assinar e carimbar/identificar cada anotação, sem rasuras ou folhas em branco entre os turnos.'
        ]
      }
    ],
    caseStudy: {
      title: 'A Omissão de Informação no Plantão Noturno e Suas Consequências',
      residentContext: 'Dona Clarice, 71 anos, é hipertensa e reside na SRT Salomão. Durante a madrugada, apresentou dois episódios de diarreia volumosa e recusou o copo de água oferecido pela cuidadora da noite. A cuidadora noturna estava cansada ao final do turno e, na passagem de plantão matinal de 07h, disse apenas ao colega da manhã: "Tudo tranquilo na noite, o pessoal dormiu feito anjo".',
      scenarioDescription: 'Às 11h da manhã, Dona Clarice apresenta tontura intensa, hipotensão severa (PA 80x50 mmHg) e desmaia no corredor da residência. A equipe da manhã entra em pânico sem entender o motivo da queda súbita.',
      keyDilemma: 'Como a falha na passagem de plantão verbal e a ausência de registro no livro de bordo colocaram em risco a vida da moradora?',
      guidedQuestions: [
        'Quais foram as omissões graves cometidas pela cuidadora da noite na transição de turno?',
        'Como a aplicação do método SBAR teria evitado o desmaio e a hipotensão de Dona Clarice?',
        'Quais são as implicações éticas para a equipe quando a passagem de plantão é feita de forma superficial?'
      ],
      recommendedConduct: 'A cuidadora da noite deveria ter registrado os dois episódios de diarreia e a recusa hídrica no diário de bordo e aplicado a estrutura SBAR verbalmente: "S: Dona Clarice teve diarreia de madrugada; B: Ela é idosa e toma anti-hipertensivo; A: Apresentou recusa de líquidos e pode estar desidratando; R: Plantão da manhã deve priorizar soro de reidratação oral, checar pressão arterial e avisar a enfermagem". Diante do desmaio, a equipe atual deve prestar os primeiros socorros (elevar pernas a 45º, checar sinais vitais) e acionar o SAMU/CAPS, reportando a desidratação.',
      normativeReference: 'Resolução COFEN/Conselho Profissional sobre Registro do Cuidado e Responsabilidade Ética em Saúde.'
    },
    quiz: [
      {
        id: 'q5-1',
        question: 'O que significa a sigla SBAR, utilizada como metodologia padrão para passagem de plantão efetiva em serviços de saúde mental?',
        options: [
          'Saúde, Bem-estar, Alimentação e Remédios.',
          'Situação, Breve Histórico (Background), Avaliação (Assessment) e Recomendação.',
          'Segurança, Biologia, Atividade e Restrição.',
          'Sintomas, Banhos, Almoço e Remédios.'
        ],
        correctIndex: 1,
        explanation: 'SBAR significa Situation, Background, Assessment, Recommendation — estrutura lógica padronizada para transições de cuidado.'
      },
      {
        id: 'q5-2',
        question: 'Durante o preenchimento do livro de diário de bordo ou prontuário residencial da SRT Salomão, qual das seguintes condutas é considerada CORRETA do ponto de vista ético e legal?',
        options: [
          'Anotar os fatos com caneta, letra legível, data, horário e assinatura identificada, sem rasuras ou rasuras cobertas por branquinho.',
          'Escrever a lápis para poder apagar se o enfermeiro do CAPS não gostar da anotação.',
          'Pedir para o colega assinar pelo outro cuidador que já foi embora para adiantar o serviço.',
          'Deixar várias linhas em branco no meio da página para preencher depois se lembrar de algo.'
        ],
        correctIndex: 0,
        explanation: 'O prontuário é um documento legal. Registros devem ser indelével (caneta), legíveis, datados, assinados e sem rasuras nem espaços em branco intercalaares.'
      },
      {
        id: 'q5-3',
        question: 'Um cuidador tira uma foto sorrindo ao lado de um morador da SRT durante um almoço festivo e posta no seu Instagram pessoal com a legenda "Cuidando dos meus velhinhos amados do Salomão". Essa conduta é:',
        options: [
          'Exemplar e deve ser incentivada para divulgar o trabalho bonito da SRT.',
          'Inadequada e gravíssima, pois viola o direito à imagem, a privacidade do morador, o sigilo ético e as diretrizes da LGPD sem autorização institucional formal.',
          'Permitida, desde que a foto seja apagada em 24 horas.',
          'Obrigatória por contrato de trabalho.'
        ],
        correctIndex: 1,
        explanation: 'A exposição de moradores em redes sociais sem autorização expressa e formal fere o direito de imagem, o sigilo profissional de saúde e as normas da LGPD.'
      },
      {
        id: 'q5-4',
        question: 'Qual deve ser a duração e o formato ideal da passagem de plantão entre a equipe que sai e a equipe que entra na SRT?',
        options: [
          'Uma conversa rápida de 1 minuto enquanto os cuidadores estão abrindo o portão de saída na calçada.',
          'Um momento reservado de 15 a 20 minutos dentro da casa, com leitura do diário de bordo, repasse estruturado por morador (SBAR) e checagem conjunta dos medicamentos.',
          'Uma mensagem de áudio enviada no grupo de WhatsApp enquanto o cuidador está no ônibus voltando para casa.',
          'Apenas um sinal de positivo com a mão sem necessidade de troca verbal.'
        ],
        correctIndex: 1,
        explanation: 'A passagem de plantão exige tempo dedicado, presencial, reservado e sistemático para checagem do livro, quadro de medicamentos e estado clínico de cada morador.'
      }
    ],
    essayTask: {
      prompt: 'Imagine que você é o cuidador que está encerrando o turno da tarde na SRT Salomão. O morador Seu João, 65 anos, apresentou recusa parcial do jantar, queixa de tontura ao se levantar e teve sua medicação anti-hipertensiva das 18h administrada com sucesso. Redija a passagem de plantão escrita no livro de diário de bordo e o texto verbal utilizando rigorosamente a estrutura SBAR para o cuidador do turno da noite.',
      rubric: [
        {
          criterion: 'Aplicação do Método SBAR',
          weight: '40%',
          guideline: 'Identificar explicitamente os 4 tópicos: Situação, Breve Histórico, Avaliação e Recomendação.'
        },
        {
          criterion: 'Qualidade do Registro Escrito',
          weight: '30%',
          guideline: 'Linguagem objetiva, técnica, sem julgamentos de valor, com data, hora e identificação do profissional.'
        },
        {
          criterion: 'Foco na Continuidae do Cuidado',
          weight: '30%',
          guideline: 'Indicar as ações necessárias para o turno noturno (verificação de PA, oferta de água, monitoramento de queda).'
        }
      ],
      modelAnswer: 'REGISTRO EM LIVRO DE DIÁRIO DE BORDO - SRT SALOMÃO\nData: 15/08/2026 | Horário: 19:00h | Cuidador: [Nome do Cuidador]\n\nMorador: João da Silva (65 anos, leito 3).\n- SITUAÇÃO: Apresentou queixa de tontura ortostática ao se levantar da poltrona às 17h30min e aceitou apenas 50% do jantar por relatar leve náusea.\n- BREVE HISTÓRICO: Possui histórico de Hipertensão Arterial Sistêmica. Medicação anti-hipertensiva (Enalapril 10mg) das 18h administrada conforme prescrição, sem intercorrências.\n- AVALIAÇÃO: Sinais vitais aferidos às 18h15min: PA: 110x70 mmHg (estável), FC: 72 bpm, afebril (36.4ºC). Sem episódios de queda. No momento encontra-se descansando na sala em atitude tranquila.\n- RECOMENDAÇÃO PARA O PLANTÃO NOTURNO: 1) Auxiliar no levantamento da cama/poltrona mantendo apoio físico para prevenção de quedas; 2) Ofertar xícara de chá morno com biscoito às 21h para compensar o jantar parcial; 3) Reavaliar pressão arterial caso persista a queixa de tontura e notificar a enfermagem do CAPS caso haja alteração.\n\nAssinatura/Carimbo: _______________________'
    }
  }
];
