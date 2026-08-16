import { FinalExamQuestion } from '../types/course';

export const finalExamQuestions: FinalExamQuestion[] = [
  {
    id: 'fe-01',
    moduleSource: 1,
    moduleLabel: 'Módulo 1: Marco Legal e Filosófico',
    scenario: 'Durante uma reunião de equipe do Residencial Terapêutico Salomão, discute-se o conceito fundamental que diferencia a residência de um antigo hospital psiquiátrico.',
    question: 'De acordo com a Lei Federal nº 10.216/2001 e as diretrizes da Reforma Psiquiátrica Brasileira, qual é o princípio orientador inegociável da SRT?',
    options: [
      'A SRT deve funcionar como uma enfermaria psiquiátrica de retaguarda, com regras disciplinares de internação contínua.',
      'A SRT é um dispositivo residencial substitutivo, focado na reconstrução de laços sociais, garantia de direitos civis e moradia em meio comunitário livre.',
      'A residência tem como finalidade primordial isolar os usuários com diagnósticos graves para poupar as famílias do convívio comunitário.',
      'O morador deve ser tutelado em tempo integral, sem permissão para tomar decisões sobre sua rotina doméstica.'
    ],
    correctIndex: 1,
    explanation: 'A Lei 10.216/2001 e a Portaria GM/MS 106/2000 consagram a SRT como moradia inserida na comunidade para reinserção social e reabilitação psicossocial, garantindo pleno exercício da cidadania e superação do isolamento asilar.'
  },
  {
    id: 'fe-02',
    moduleSource: 1,
    moduleLabel: 'Módulo 1: Marco Legal e Filosófico',
    scenario: 'Uma cuidadora novata pergunta à coordenação qual a diferença prática entre uma SRT Tipo I e uma SRT Tipo II segundo as portarias ministeriais vigentes.',
    question: 'Qual a distinção regulamentar entre SRT Tipo I e Tipo II no SUS?',
    options: [
      'A SRT Tipo I atende exclusivamente crianças e adolescentes, enquanto a Tipo II atende apenas idosos acamados.',
      'A SRT Tipo I atende até 8 moradores com maior autonomia e suporte técnico não presencial 24h; a Tipo II atende até 10 moradores com elevado grau de dependência que necessitam de equipe de cuidadores 24h presenciais.',
      'A SRT Tipo I é privada e paga pelos moradores; a SRT Tipo II é custeada integralmente pelo Ministério da Justiça.',
      'A SRT Tipo I possui grades nas janelas para contenção; a Tipo II é de portas abertas.'
    ],
    correctIndex: 1,
    explanation: 'Conforme a Portaria GM/MS nº 2.840/2014, a SRT Tipo II destina-se a pessoas com alto grau de dependência institucional ou motora, demandando equipe profissional contínua 24 horas por dia.'
  },
  {
    id: 'fe-03',
    moduleSource: 1,
    moduleLabel: 'Módulo 1: Marco Legal e Filosófico',
    scenario: 'Um morador deseja visitar a feira livre do bairro aos sábados, mas um cuidador teme que ele se perca e sugere proibir qualquer saída desacompanhada.',
    question: 'Com base no conceito de contratualidade e nos 3 eixos de Saraceno (Habitat, Rede Social, Sentido de Vida), qual é a conduta correta?',
    options: [
      'Proibir sumariamente a saída para evitar qualquer risco administrativo para a instituição.',
      'Trancar o morador no quarto nos dias de feira para que ele esqueça a vontade de sair.',
      'Construir a autonomia de forma gradativa e pactuada no PTS com o CAPS, acompanhando inicialmente o morador no trajeto até que ele ganhe segurança.',
      'Exigir que o médico do CAPS assine uma autorização judicial para cada ida à feira.'
    ],
    correctIndex: 2,
    explanation: 'A reabilitação psicossocial prevê a expansão da circulação no território e a apropriação dos espaços públicos, desenvolvendo a autonomia através de pactuações terapêuticas progressivas no Plano Terapêutico Singular (PTS).'
  },
  {
    id: 'fe-04',
    moduleSource: 1,
    moduleLabel: 'Módulo 1: Marco Legal e Filosófico',
    scenario: 'Um profissional de apoio insiste em se referir aos moradores adultos do Residencial Salomão como "coitadinhos", "meus velhinhos" e "meus doentinhos".',
    question: 'Por que essa linguagem infantilizadora contraria a ética do cuidado antimanicomial?',
    options: [
      'Porque atrasa o fechamento da folha de pagamento do cuidador.',
      'Porque reproduz a lógica asilar de menorização do sujeito, desprovendo o adulto de sua identidade, dignidade e autoridade sobre a própria vida.',
      'Porque a lei do SUS só permite tratar os moradores pelo número de prontuário.',
      'Porque reduz a quantidade de medicação que o médico pode prescrever.'
    ],
    correctIndex: 1,
    explanation: 'O cuidado antimanicomial exige o reconhecimento do morador como cidadão pleno e sujeito de direitos. A infantilização reforça a tutela e anula a singularidade e a história de vida do sujeito.'
  },
  {
    id: 'fe-05',
    moduleSource: 2,
    moduleLabel: 'Módulo 2: Cotidiano e Cuidado Físico',
    scenario: 'No horário matinal de higiene, um morador com histórico de 20 anos de manicômio recusa veementemente tomar banho no chuveiro e apresenta taquicardia quando vê o box molhado.',
    question: 'Qual deve ser a intervenção prioritária da equipe de cuidadores?',
    options: [
      'Arrastar o morador à força para o chuveiro, pois a higiene não pode ser negociada sob nenhuma hipótese.',
      'Compreender que o chuveiro pode ser um gatilho de torturas asilares passadas (como duchas frias forçadas), acolher a recusa, negociar banho de bacia/toalha aquecida e respeitar o tempo do morador.',
      'Ameaçar cortar o almoço ou suspender o cigarro caso ele não entre no banho imediatamente.',
      'Amarrar o morador em uma cadeira higiênica e ligar a água gelada para acalmá-lo.'
    ],
    correctIndex: 1,
    explanation: 'Muitos moradores institucionalizados sofreram violências traumáticas em hospitais psiquiátricos. O banho deve ser humanizado, com negociação empática, adaptação de rotina e jamais coerção física.'
  },
  {
    id: 'fe-06',
    moduleSource: 2,
    moduleLabel: 'Módulo 2: Cotidiano e Cuidado Físico',
    scenario: 'Durante a preparação do almoço coletivo, a equipe debate como organizar as tarefas culinárias entre os moradores e a equipe.',
    question: 'Qual é o princípio orientador da rotina doméstica no modelo de Residência Terapêutica?',
    options: [
      'Os cuidadores devem fazer tudo sozinhos a portas fechadas na cozinha, proibindo qualquer entrada de moradores.',
      'O trabalho deve seguir a máxima "fazer COM o morador e não PELO morador", estimulando pequenas etapas de participação conforme o interesse e habilidade de cada um.',
      'Os moradores devem ser obrigados a cozinhar para os funcionários sob pena de advertência.',
      'A comida deve ser entregue pronta em marmitas plásticas lacradas para manter o padrão hospitalar.'
    ],
    correctIndex: 1,
    explanation: 'A reabilitação no cotidiano valoriza os gestos da vida doméstica: descascar um legume, arrumar a mesa ou escolher temperos são exercícios diários de cidadania, afeto e resgate funcional.'
  },
  {
    id: 'fe-07',
    moduleSource: 2,
    moduleLabel: 'Módulo 2: Cotidiano e Cuidado Físico',
    scenario: 'Um morador idoso que passa a maior parte do dia sentado em poltrona apresenta hiperemia (vermelhidão fixa) na região sacral que não desaparece após alívio da pressão.',
    question: 'Qual é a conduta técnica imediata para prevenção e manejo de Lesão por Pressão (LPP)?',
    options: [
      'Massagear vigorosamente a área avermelhada com álcool 70%.',
      'Instituir mudança de decúbito e alívio de pressão a cada 2 horas, usar almofadas de redistribuição, manter a pele hidratada/seca e comunicar imediatamente a enfermagem do CAPS/UBS.',
      'Deixar o morador deitado na mesma posição por 12 horas seguidas.',
      'Aplicar pomadas com antibiótico sem qualquer avaliação ou prescrição da equipe técnica.'
    ],
    correctIndex: 1,
    explanation: 'Vermelhidão que não embranquece é estágio 1 de LPP. Massagem sobre proeminências ósseas é contraindicada. Deve-se fazer mudança sistemática de decúbito (2h/2h), hidratação da pele e avaliação da equipe técnica.'
  },
  {
    id: 'fe-08',
    moduleSource: 2,
    moduleLabel: 'Módulo 2: Cotidiano e Cuidado Físico',
    scenario: 'No manejo diário de resíduos e cuidados de enfermagem na Residência Terapêutica, surgem dúvidas sobre descarte de materiais perfurocortantes.',
    question: 'Segundo as normas higiênico-sanitárias da RDC ANVISA nº 50/2002 aplicadas ao ambiente residencial de saúde coletiva, qual é a conduta correta para o descarte de resíduos perfurocortantes (como agulhas e lancetas de glicemia)?',
    options: [
      'Jogar no lixo comum da cozinha dentro de sacola plástica preta.',
      'Reencapar as agulhas com as duas mãos e jogá-las no vaso sanitário.',
      'Descartar imediatamente sem reencapar em coletor rígido específico para perfurocortantes (Descarpack) até o limite de 3/4 da capacidade.',
      'Guardar as agulhas usadas na gaveta de meias do morador para descarte mensal.'
    ],
    correctIndex: 2,
    explanation: 'Normas de biossegurança proíbem reencape manual e exigem descarte em recipiente rígido apropriado até o limite de preenchimento de segurança (3/4).'
  },
  {
    id: 'fe-09',
    moduleSource: 3,
    moduleLabel: 'Módulo 3: Saúde Mental e Manejo de Crises',
    scenario: 'Um morador começa a andar inquieto pelo corredor ("pacing"), fala alto com vozes inaudíveis e cerra os punhos demonstrando intensa angústia.',
    question: 'De acordo com o Protocolo de Richmond de Desescalada Verbal, qual deve ser a PRIMEIRA atitude do cuidador?',
    options: [
      'Gritar ordens severas exigindo que o morador cale a boca e vá para o quarto.',
      'Garantir a segurança do ambiente, manter distância física segura (2 braços), adotar postura aberta, tom de voz baixo e calmo e validar o sofrimento do morador.',
      'Chamar três cuidadores para pular em cima do morador e amarrá-lo na cama.',
      'Sair correndo da casa e deixar os outros moradores desassistidos.'
    ],
    correctIndex: 1,
    explanation: 'O primeiro princípio de Richmond consiste em garantir a segurança espacial mútua, manter a calma, usar linguagem corporal não ameaçadora e oferecer escuta empática para abaixar a ativação emocional.'
  },
  {
    id: 'fe-10',
    moduleSource: 3,
    moduleLabel: 'Módulo 3: Saúde Mental e Manejo de Crises',
    scenario: 'Um morador com esquizofrenia apresenta uma crise de delírio persecutório agudo e afirma agitado: "Tem espiões na TV querendo me envenenar!".',
    question: 'Em uma situação de delírio persecutório agudo, como o cuidador deve se comunicar terapeuticamente?',
    options: [
      'Zombar do morador dizendo que ele está inventando histórias bobas.',
      'Concordar com o delírio e dizer que também viu os espiões armados na janela.',
      'Não confrontar de forma agressiva a crença delirante nem alimentá-la falsamente; focar no afeto que o delírio gera ("Percebo que você está com medo e angustiado; eu estou aqui para te proteger").',
      'Desligar a energia geral da casa e trancar o morador na despensa.'
    ],
    correctIndex: 2,
    explanation: 'A técnica de comunicação terapêutica preconiza validar a emoção (medo, angústia) sem chancelar o conteúdo psicótico e sem confrontar bruscamente a realidade interna do sujeito em crise.'
  },
  {
    id: 'fe-11',
    moduleSource: 3,
    moduleLabel: 'Módulo 3: Saúde Mental e Manejo de Crises',
    scenario: 'A contenção mecânica (amarras físicas no leito) foi historicamente utilizada como instrumento de punição em manicômios.',
    question: 'Qual é a diretriz normativa e ética da RAPS e do Residencial Salomão sobre contenção física no ambiente da SRT?',
    options: [
      'A contenção física pode ser realizada livremente pelo cuidador sempre que um morador desobedecer uma regra da casa.',
      'É terminantemente proibida a contenção física punitiva ou rotineira na SRT; em situações excepcionais de risco iminente de auto/heteroagressão, a prioridade absoluta é a desescalada verbal e o acionamento de suporte de urgência (CAPS III / SAMU 192).',
      'O cuidador deve manter amarras de couro fixas em todas as camas por precaução noturna.',
      'A contenção mecânica só é permitida se gravada em vídeo para as redes sociais.'
    ],
    correctIndex: 1,
    explanation: 'A contenção física é medida de exceção médica hospitalar. Na SRT, qualquer contenção como rotina ou punição configura crime de tortura/maus-tratos conforme a Lei 10.216/2001 e Código de Ética.'
  },
  {
    id: 'fe-12',
    moduleSource: 3,
    moduleLabel: 'Módulo 3: Saúde Mental e Manejo de Crises',
    scenario: 'Um morador com histórico de depressão grave entrega seus pertences mais queridos para outro morador, despede-se em tom incomum e diz que "amanhã o sofrimento de todos vai acabar".',
    question: 'Como a equipe de cuidadores deve proceder diante desses sinais de alerta para risco de autoextermínio (suicídio)?',
    options: [
      'Ignorar o comentário, acreditando no mito popular de que "quem fala que vai fazer, não faz".',
      'Acolher com escuta atenta, não deixar o morador desacompanhado, retirar objetos de risco do alcance imediato e acionar imediatamente a referência técnica do CAPS e rede de suporte.',
      'Dar uma bronca no morador dizendo que suicídio é fraqueza moral.',
      'Fazer o morador jurar perante a bíblia que não fará nada.'
    ],
    correctIndex: 1,
    explanation: 'Expressões de despedida, doação de pertences e desesperança são sinais de alerta crítico. Exigem acolhimento imediato, vigilância compassiva e acionamento célere da rede multidisciplinar de saúde mental.'
  },
  {
    id: 'fe-13',
    moduleSource: 4,
    moduleLabel: 'Módulo 4: Gestão Segura de Medicamentos',
    scenario: 'Durante o horário da medicação das 20h, o cuidador organiza os copos dosadores na bancada.',
    question: 'Qual das opções abaixo NÃO faz parte do protocolo internacional de segurança dos "9 Certos" na administração de medicamentos?',
    options: [
      'Paciente Certo, Medicamento Certo, Dose Certa e Via Certa.',
      'Hora Certa, Tempo Certo, Ação Certa e Registro Certo.',
      'Misturar remédios de todos os moradores em um único copo para agilizar a entrega.',
      'Orientação Certa ao morador sobre o que ele está tomando.'
    ],
    correctIndex: 2,
    explanation: 'A administração de medicamentos deve ser individualizada, conferida três vezes contra a prescrição médica oficial e registrada imediatamente após a ingestão.'
  },
  {
    id: 'fe-14',
    moduleSource: 4,
    moduleLabel: 'Módulo 4: Gestão Segura de Medicamentos',
    scenario: 'Um morador que iniciou uso de Haloperidol há 3 dias começa a apresentar uma incapacidade incontrolável de permanecer parado, anda de um lado para outro sem cessar e relata extrema angústia nas pernas ("comichão interno").',
    question: 'Qual é o nome desse efeito adverso extrapiramidal grave e qual a conduta da equipe?',
    options: [
      'Acatisia motora; deve-se acolher a queixa, não repreender a agitação e comunicar imediatamente o médico/enfermeiro do CAPS para ajuste de dose ou associação com biperideno.',
      'Preguiça seletiva; deve-se mandar o morador deitar e descansar.',
      'Sintoma exclusivo de malcriação; deve-se suspender o café.',
      'Refluxo gastroesofágico; deve-se oferecer chá de hortelã.'
    ],
    correctIndex: 0,
    explanation: 'A acatisia é um efeito adverso motor e psíquico penoso dos antipsicóticos típicos. Frequentemente é confundida com piora do quadro psicótico; requer ajuste imediato com o médico psiquiatra.'
  },
  {
    id: 'fe-15',
    moduleSource: 4,
    moduleLabel: 'Módulo 4: Gestão Segura de Medicamentos',
    scenario: 'Um cuidador tem pressa para ir embora e resolve triturar comprimidos controlados e misturá-los secretamente no prato de sopa do morador que recusa o comprimido.',
    question: 'Por que o mascaramento de medicamentos em alimentos é expressamente vedado na prática ética da SRT?',
    options: [
      'Porque estraga o sabor da comida apenas.',
      'Porque viola a autonomia e o direito à informação do paciente, pode alterar a farmacocinética da medicação e quebra irreversivelmente o vínculo de confiança terapêutica.',
      'Porque a lei do SUS exige que todo remédio seja administrado por via injetável.',
      'Porque o morador pode pedir repeteco do prato de sopa.'
    ],
    correctIndex: 1,
    explanation: 'Mascarar medicação em alimentos fere os princípios éticos da saúde e a legislação sanitária. A recusa deve ser acolhida, dialogada e, se mantida, registrada no prontuário para discussão com o CAPS.'
  },
  {
    id: 'fe-16',
    moduleSource: 4,
    moduleLabel: 'Módulo 4: Gestão Segura de Medicamentos',
    scenario: 'Ao atender um morador no período da tarde, o cuidador nota rigidez muscular severa em "cano de chumbo", febre alta súbita (39,2ºC), sudorese profusa e confusão mental.',
    question: 'Diante da suspeita de Síndrome Neuroléptica Maligna (SNM), qual é a conduta de emergência mandatória?',
    options: [
      'Dar mais uma dose do antipsicótico para acalmar os tremores.',
      'Colocar o morador para dormir e reavaliar apenas no dia seguinte.',
      'Trata-se de emergência médica potencialmente fatal: interromper imediatamente a medicação antipsicótica e acionar com urgência o SAMU 192 para transferência a hospital geral.',
      'Oferecer banho quente e massagem nas pernas.'
    ],
    correctIndex: 2,
    explanation: 'A Síndrome Neuroléptica Maligna (SNM) é uma complicação rara mas potencialmente fatal do uso de antipsicóticos. Febre alta inexplicada e rigidez severa exigem socorro médico imediato (SAMU 192).'
  },
  {
    id: 'fe-17',
    moduleSource: 5,
    moduleLabel: 'Módulo 5: Comunicação e Passagem de Plantão',
    scenario: 'Na troca de turno das 07h00, a equipe utiliza a metodologia internacional de comunicação clínica padronizada SBAR.',
    question: 'O que significa a sigla SBAR e qual a sua sequência estruturada?',
    options: [
      'Saúde, Biologia, Anatomia e Remédio.',
      'Situação (Situation), Breve Histórico/Contexto (Background), Avaliação/Estado Atual (Assessment) e Recomendação/Plano (Recommendation).',
      'Segurança, Bloqueio, Alarme e Resgate.',
      'Separação, Banho, Almoço e Repouso.'
    ],
    correctIndex: 1,
    explanation: 'O SBAR (Situation, Background, Assessment, Recommendation) é a ferramenta padrão-ouro recomendada pela OMS e Ministério da Saúde para transferências de plantão claras, concisas e livres de erros.'
  },
  {
    id: 'fe-18',
    moduleSource: 5,
    moduleLabel: 'Módulo 5: Comunicação e Passagem de Plantão',
    scenario: 'Ao preencher o Livro de Diário de Bordo da SRT, um cuidador escreve: "Dona Maria ficou muito chata, histérica e birrenta durante o almoço".',
    question: 'Qual é a crítica técnica e ética a esse registro profissional?',
    options: [
      'O registro está correto porque expressa a opinião pessoal do funcionário.',
      'O registro é inadequado por conter juízos de valor pejorativos e linguagem leiga. Deve-se descrever objetivamente os fatos: "Moradora apresentou agitação psicomotora, verbalizou recusa ao cardápio às 12h15 e aceitou alimentação alternativa às 13h após acolhimento".',
      'O livro de ocorrências não deve ser preenchido para economizar papel.',
      'O registro deveria ter sido feito no quadro de avisos da sala de estar.'
    ],
    correctIndex: 1,
    explanation: 'Registros em saúde devem ser técnicos, objetivos, isentos de adjetivos desqualificadores e fundamentados na observação clínica e comportamental factual.'
  },
  {
    id: 'fe-19',
    moduleSource: 5,
    moduleLabel: 'Módulo 5: Comunicação e Passagem de Plantão',
    scenario: 'Um vizinho curioso da rua do Residencial Salomão pergunta ao cuidador no portão qual é o diagnóstico psiquiátrico de um morador e se ele "é perigoso".',
    question: 'Considerando a Lei Geral de Proteção de Dados (LGPD) e o sigilo profissional em saúde mental, qual é a resposta correta?',
    options: [
      'Contar detalhadamente todo o histórico clínico e familiar do morador.',
      'Dizer que o morador tem esquizofrenia e mostrar a receita médica no celular.',
      'Manter sigilo ético absoluto sobre dados de saúde, informando cordialmente que a residência é um lar comunitário e que as informações de saúde são estritamente confidenciais e protegidas por lei.',
      'Cobrar uma taxa em dinheiro para revelar o prontuário.'
    ],
    correctIndex: 2,
    explanation: 'O sigilo profissional e a proteção de dados sensíveis de saúde são deveres éticos e legais inderrogáveis (Código de Ética e LGPD). Informações médicas pertencem exclusivamente ao morador.'
  },
  {
    id: 'fe-20',
    moduleSource: 5,
    moduleLabel: 'Módulo 5: Comunicação e Passagem de Plantão',
    scenario: 'Ao final do processo de formação de 40 horas no Capacita SRT Salomão, o cuidador reflete sobre a essência do trabalho na desinstitucionalização.',
    question: 'Qual é o maior indicador de sucesso do trabalho do cuidador em uma Residência Terapêutica?',
    options: [
      'Garantir que os moradores nunca saiam de casa e fiquem em silêncio o dia todo.',
      'Transformar a casa em uma filial do hospital psiquiátrico com prontuários nas portas.',
      'A ampliação progressiva da autonomia do morador, sua participação na vida da comunidade, o fortalecimento de sua dignidade e o resgate do poder de escolha sobre a própria existência.',
      'Fazer com que todos os moradores durmam 16 horas por dia com auxílio de sedativos.'
    ],
    correctIndex: 2,
    explanation: 'A reabilitação psicossocial e a Reforma Psiquiátrica têm como meta suprema a produção de vida, cidadania, autonomia e inserção social no território comunitário.'
  }
];
