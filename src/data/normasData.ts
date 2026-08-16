export interface NormativeDocument {
  id: string;
  title: string;
  type: 'Lei' | 'Portaria' | 'Resolução' | 'Diretriz';
  sphere: 'Federal' | 'Estadual/Municipal' | 'Conselho Profissional';
  summary: string;
  keyArticles: {
    articleNumber: string;
    description: string;
  }[];
  applicationForCaregivers: string;
}

export const normasData: NormativeDocument[] = [
  {
    id: 'lei-10216',
    title: 'Lei Federal nº 10.216 / 2001 (Lei da Reforma Psiquiátrica)',
    type: 'Lei',
    sphere: 'Federal',
    summary: 'Dispõe sobre a proteção e os direitos das pessoas portadoras de transtornos mentais e redireciona o modelo assistencial em saúde mental no Brasil.',
    keyArticles: [
      {
        articleNumber: 'Art. 2º',
        description: 'São direitos da pessoa portadora de transtorno mental: ter acesso ao melhor tratamento do sistema de saúde; ser tratada com humanidade e respeito; ser protegida contra qualquer forma de abuso e exploração; ter garantia de sigilo sobre as informações prestadas.'
      },
      {
        articleNumber: 'Art. 3º',
        description: 'É responsabilidade do Estado o desenvolvimento da política de saúde mental, a assistência e a promoção de ações de saúde aos portadores de transtornos mentais, com a devida participação da sociedade e da família.'
      },
      {
        articleNumber: 'Art. 4º',
        description: 'A internação, em qualquer de suas modalidades, só será indicada quando os recursos extra-hospitalares se mostrarem insuficientes.'
      }
    ],
    applicationForCaregivers: 'A lei assegura que os moradores da SRT Salomão possuem plenos direitos civis. O cuidador é o garantidor desses direitos no cotidiano, devendo rechaçar qualquer conduta que isole, puna ou retire a autonomia dos moradores.'
  },
  {
    id: 'portaria-106-2000',
    title: 'Portaria GM/MS nº 106 / 2000 (Criação dos Serviços de Residências Terapêuticas)',
    type: 'Portaria',
    sphere: 'Federal',
    summary: 'Cria os Serviços de Residência Terapêutica em Saúde Mental no âmbito do Sistema Único de Saúde (SUS) para o atendimento a egressos de hospitais psiquiátricos.',
    keyArticles: [
      {
        articleNumber: 'Art. 1º',
        description: 'Definição de Serviços de Residência Terapêutica como moradias inseridas na comunidade, destinadas a cuidar de portadores de transtornos mentais egressos de internações psiquiátricas de longa permanência.'
      },
      {
        articleNumber: 'Art. 2º',
        description: 'Determina que cada SRT deve ser vinculada a um Centro de Atenção Psicossocial (CAPS) de referência para suporte técnico e elaboração do Projeto Terapêutico Singular.'
      }
    ],
    applicationForCaregivers: 'Fundamenta que a SRT Salomão é um lar e não um anexo hospitalar. Define a articulação contínua e obrigatória com o CAPS II/III de Blumenau.'
  },
  {
    id: 'portaria-3088-2011',
    title: 'Portaria GM/MS nº 3.088 / 2011 (Institui a RAPS)',
    type: 'Portaria',
    sphere: 'Federal',
    summary: 'Institui a Rede de Atenção Psicossocial (RAPS) para pessoas com sofrimento ou transtorno mental e com necessidades decorrentes do uso de crack, álcool e outras drogas, no âmbito do SUS.',
    keyArticles: [
      {
        articleNumber: 'Eixo 1',
        description: 'Atenção Básica em Saúde (Unidades Básicas de Saúde, Equipes de Saúde da Família e eMulti).'
      },
      {
        articleNumber: 'Eixo 2',
        description: 'Atenção Psicossocial Especializada (CAPS I, CAPS II, CAPS III, CAPS i e CAPS ad).'
      },
      {
        articleNumber: 'Eixo 3',
        description: 'Atenção Residencial de Caráter Transitório e Moradias (SRT Tipo I, SRT Tipo II e Unidades de Acolhimento).'
      },
      {
        articleNumber: 'Eixo 4',
        description: 'Atenção de Urgência e Emergência (SAMU 192, UPA 24h e Prontos-Socorros).'
      }
    ],
    applicationForCaregivers: 'Ensina o cuidador a situar a SRT Salomão no mapa da RAPS em Blumenau, sabendo exatamente quando acionar o CAPS, a Unidade de Saúde da Família ou o SAMU 192.'
  },
  {
    id: 'rdc-50-anvisa',
    title: 'Resolução ANVISA RDC nº 50 / 2002 e Normas de Conforto Domiciliar',
    type: 'Resolução',
    sphere: 'Federal',
    summary: 'Regulamenta os padrões de infraestrutura física, acessibilidade, sanitização e segurança para estabelecimentos assistenciais e residências assistidas.',
    keyArticles: [
      {
        articleNumber: 'Seção de Acessibilidade',
        description: 'Exigência de barras de apoio em banheiros, iluminação adequada de corredores, ausência de obstáculos e piso antiderrapante em áreas molhadas.'
      },
      {
        articleNumber: 'Seção de Higiene Alimentar',
        description: 'Acondicionamento de alimentos em geladeira com controle de temperatura, rotulagem de produtos abertos e higienização de utensílios.'
      }
    ],
    applicationForCaregivers: 'Norteia o manuseio seguro de alimentos, prevenção de quedas e manutenção da higiene física e sanitária na SRT Salomão.'
  },
  {
    id: 'diretriz-blumenau',
    title: 'Diretrizes Operacionais do CAPS e RAPS de Blumenau / SC',
    type: 'Diretriz',
    sphere: 'Estadual/Municipal',
    summary: 'Organização da Rede de Atenção Psicossocial no município de Blumenau/SC, integrando os CAPS locais, o Hospital Santo Antônio / Hospital Santa Isabel e os Serviços Residenciais Terapêuticos.',
    keyArticles: [
      {
        articleNumber: 'CAPS III Blumenau',
        description: 'Serviço de atenção continuada 24 horas, responsável por acolher crises e prestar retaguarda técnica para as SRTs da região.'
      },
      {
        articleNumber: 'Fluxo SAMU 192',
        description: 'Protocolo de regulação médica e transporte pré-hospitalar para urgências psiquiátricas e clínicas dos moradores da SRT.'
      }
    ],
    applicationForCaregivers: 'Guia o cuidador na rotina diária no município de Blumenau, garantindo o correto encaminhamento de exames, consultas e atendimento de urgência.'
  }
];
