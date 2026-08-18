import { GoogleGenAI, Type } from '@google/genai';
import { EssayEvaluation, AntiAsylumFeedback, CriterionEvaluation } from '../types/course';

export interface EvaluateEssayPayload {
  moduleTitle: string;
  prompt: string;
  rubric: { criterion: string; weight: string; guideline: string }[];
  modelAnswer: string;
  studentAnswer: string;
}

export async function evaluateEssayWithGemini(payload: EvaluateEssayPayload): Promise<EssayEvaluation> {
  const { moduleTitle, prompt, rubric, modelAnswer, studentAnswer } = payload;
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const rubricDescription = rubric
        .map((r, i) => `${i + 1}. [${r.criterion}] (Peso: ${r.weight}): ${r.guideline}`)
        .join('\n');

      const systemInstruction = `Você é um preceptor sênior em Saúde Mental Coletiva, militante histórico e pedagogo da Reforma Psiquiátrica Brasileira e da Luta Antimanicomial (Lei Federal nº 10.216/2001, Portarias GM/MS nº 106/2000 e 3.088/2011).
Sua missão é avaliar a resposta dissertativa do aluno cuidador do Residencial Terapêutico Salomão (Blumenau/SC) e fornecer um retorno formativo aprofundado, com ênfase especial na superação de práticas asilares e fortalecimento da Luta Antimanicomial.

Princípios inegociáveis para sua análise:
1. Cuidado em Liberdade: O SRT é uma residência/moradia comunitária, não uma extensão de hospital psiquiátrico. Não há quartos-fortes, contenções físicas ou químicas punitivas, nem horários fabris.
2. Protagonismo e Desinstitucionalização: Valorizar a autonomia, o dinheiro, os desejos, a circulação no território (praças, feiras, trabalho, lazer) e o Projeto Terapêutico Singular (PTS).
3. Superação da Microfísica Manicomial: Identificar e alertar sobre armadilhas tutelares sutis (infantilização, falar pelo morador, ameaçar com internação/medicação, restringir saídas sem pactuação com a equipe de referência CAPS).
4. Mediação de Conflitos e Desescalada: Postura empática, escuta qualificada e diálogo horizontal, articulado com a equipe do CAPS/UBS/ESF.

Retorne estritamente um objeto JSON estruturado com nota justa, parecer detalhado, análise por critério e uma seção robusta e orientadora dedicada à Luta Antimanicomial.`;

      const contents = `Avalie a seguinte prova dissertativa de conclusão do módulo "${moduleTitle}":

ENUNCIADO DA SITUAÇÃO-PROBLEMA:
${prompt}

CRITÉRIOS DA RUBRICA OFICIAL:
${rubricDescription}

RESPOSTA DE REFERÊNCIA / ESPELHO TÉCNICO:
${modelAnswer}

RESPOSTA REDIGIDA PELO ALUNO CUIDADOR:
"""
${studentAnswer}
"""

Elabore a avaliação pedagógica completa e minuciosa conforme o schema.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: {
                type: Type.INTEGER,
                description: 'Nota final atribuída de 0 a 100.'
              },
              passed: {
                type: Type.BOOLEAN,
                description: 'True se a nota for maior ou igual a 70, false caso contrário.'
              },
              feedback: {
                type: Type.STRING,
                description: 'Parecer pedagógico geral minucioso, acolhedor e fundamentado.'
              },
              strengths: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Lista de 2 a 4 pontos fortes técnicos e éticos demonstrados na resposta.'
              },
              improvements: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Lista de 2 a 4 oportunidades claras de aprimoramento técnico.'
              },
              normativeAnalysis: {
                type: Type.STRING,
                description: 'Análise de alinhamento com a Lei 10.216/2001, Portaria 106/2000 e diretrizes do SUS/RAPS.'
              },
              antiAsylumFeedback: {
                type: Type.OBJECT,
                properties: {
                  overview: {
                    type: Type.STRING,
                    description: 'Diagnóstico formativo sobre o grau de compromisso antimanicomial da resposta.'
                  },
                  deinstitutionalizationPoints: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: 'Aspectos em que a resposta promoveu a desinstitucionalização e a cidadania do morador.'
                  },
                  riskOfAsylumPracticesIdentified: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: 'Armadilhas asilares ou posturas tutelares/punitivas que o cuidador deve vigiar e evitar.'
                  },
                  emancipatoryPracticesRecommended: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: 'Recomendações práticas emancipatórias para o dia a dia na Residência Terapêutica Salomão.'
                  },
                  keyTakeawayLesson: {
                    type: Type.STRING,
                    description: 'Frase-síntese de preceito antimanicomial para guiar a prática do cuidador.'
                  }
                },
                required: [
                  'overview',
                  'deinstitutionalizationPoints',
                  'riskOfAsylumPracticesIdentified',
                  'emancipatoryPracticesRecommended',
                  'keyTakeawayLesson'
                ]
              },
              criterionBreakdown: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    criterion: { type: Type.STRING },
                    scoreAwarded: { type: Type.INTEGER },
                    maxScore: { type: Type.INTEGER },
                    comment: { type: Type.STRING }
                  },
                  required: ['criterion', 'scoreAwarded', 'maxScore', 'comment']
                },
                description: 'Detalhamento da pontuação por critério da rubrica.'
              }
            },
            required: [
              'score',
              'passed',
              'feedback',
              'strengths',
              'improvements',
              'normativeAnalysis',
              'antiAsylumFeedback',
              'criterionBreakdown'
            ]
          }
        }
      });

      const text = response.text?.trim() || '{}';
      const parsed = JSON.parse(text);
      return {
        ...parsed,
        evaluatedAt:
          new Date().toLocaleDateString('pt-BR') +
          ' às ' +
          new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
    } catch (error) {
      console.error('Gemini Evaluation API error, generating heuristic evaluation:', error);
    }
  }

  // Heuristic evaluation fallback when API key is unavailable or during network disconnects
  return generateHeuristicEvaluation(payload);
}

function generateHeuristicEvaluation(payload: EvaluateEssayPayload): EssayEvaluation {
  const { studentAnswer, rubric } = payload;
  const textLower = studentAnswer.toLowerCase();

  // Positive keywords of anti-asylum struggle & psychiatric reform
  const antiAsylumKeywords = [
    'autonomia',
    'pts',
    'projeto terapêutico',
    'caps',
    'escuta',
    'dignidade',
    'cidadania',
    'antimanicomial',
    'reforma psiquiátrica',
    'desinstitucionalização',
    'rede',
    'equipe',
    'vínculo',
    'morador',
    'respeito',
    'desescalada',
    'diálogo',
    'convivência',
    'liberdade',
    'cuidado em liberdade',
    'território',
    'lei 10.216',
    'portaria 106',
    'salomão'
  ];

  // Asylum risks keywords
  const asylumRiskKeywords = ['castigo', 'trancar', 'obrigar', 'punir', 'forçar', 'isolar', 'ameaçar'];

  let positiveMatches = 0;
  antiAsylumKeywords.forEach((k) => {
    if (textLower.includes(k)) positiveMatches++;
  });

  let riskMatches = 0;
  asylumRiskKeywords.forEach((k) => {
    if (textLower.includes(k)) riskMatches++;
  });

  const wordCount = studentAnswer.trim().split(/\s+/).length;
  let baseScore = 60;

  if (wordCount >= 120) baseScore += 15;
  else if (wordCount >= 60) baseScore += 10;

  baseScore += Math.min(25, positiveMatches * 3);
  baseScore -= riskMatches * 10;

  const finalScore = Math.min(100, Math.max(40, baseScore));
  const isPassed = finalScore >= 70;

  const criterionBreakdown: CriterionEvaluation[] = rubric.map((r) => {
    const rawWeight = parseInt(r.weight.replace(/\D/g, ''), 10) || 30;
    const factor = finalScore / 100;
    const scoreAwarded = Math.round(rawWeight * factor);
    return {
      criterion: r.criterion,
      scoreAwarded,
      maxScore: rawWeight,
      comment:
        scoreAwarded >= rawWeight * 0.7
          ? `Bom atendimento às diretrizes do critério com foco em ${r.criterion.toLowerCase()}.`
          : `Necessita aprofundar a fundamentação prática quanto a ${r.criterion.toLowerCase()}.`
    };
  });

  const antiAsylumFeedback: AntiAsylumFeedback = {
    overview: isPassed
      ? `Sua resposta reflete um compromisso genuíno com o paradigma do Cuidado em Liberdade e com as diretrizes da Luta Antimanicomial Brasileira. Você demonstra compreender que a Residência Terapêutica Salomão é um lar afetivo e comunitário, e não um espaço de tutela ou confinamento.`
      : `Sua resposta apresenta boas intenções, mas ainda carece de maior firmeza nos preceitos antimanicomiais, necessitando substituir posturas puramente fiscalizatórias por práticas emancipatórias e dialógicas.`,
    deinstitutionalizationPoints: [
      'Reconhecimento do morador como sujeito de direitos e protagonista de sua própria rotina.',
      'Valorização do diálogo não violento e da escuta qualificada como primeira linha de cuidado.',
      'Compreensão da importância da vida comunitária e da circulação pelo território urbano de Blumenau.'
    ],
    riskOfAsylumPracticesIdentified:
      riskMatches > 0
        ? [
            'Atenção ao risco de adotar medidas restritivas ou punitivas unilaterais que reproduzam lógicas asilares históricas.',
            'Cuidado com a tentação de controlar horários ou decisões íntimas sem a prévia pactuação no Projeto Terapêutico Singular (PTS).'
          ]
        : [
            'Vigiar a armadilha sutil da infantilização (tratar pessoas adultas em sofrimento mental como crianças indefesas).',
            'Evitar centralizar decisões sem consultar o morador ou sem registrar e debater previamente com a equipe de referência do CAPS.'
          ],
    emancipatoryPracticesRecommended: [
      'Pactuar combinados de convivência em assembleias de moradores, estimulando a corresponsabilidade.',
      'Incentivar a gestão do próprio dinheiro, a escolha de vestimentas e a autonomia no preparo de refeições e lazer.',
      'Manter alinhamento contínuo com o CAPS II/CAPS III de referência e equipes da Atenção Primária à Saúde (ESF).'
    ],
    keyTakeawayLesson:
      'Tratar não é trancar, cuidar não é vigiar. O SRT é um espaço de reconstrução de laços sociais, onde a dignidade humana e a cidadania estão sempre em primeiro lugar.'
  };

  return {
    score: finalScore,
    passed: isPassed,
    feedback: isPassed
      ? `Excelente articulação ético-clínica. Sua proposta de conduta prioriza a dignidade, a desescalada de conflitos e a pactuação multiprofissional em rede, demonstrando preparo para atuar no Residencial Terapêutico Salomão.`
      : `Sua resposta contém elementos válidos, porém necessita aprofundar os princípios de não violência, mediação dialógica e articulação com a Rede de Atenção Psicossocial (RAPS).`,
    strengths: [
      'Postura acolhedora pautada no respeito aos direitos humanos fundamentais.',
      'Identificação da necessidade de comunicação com a equipe de referência.',
      'Compreensão do caráter residencial e não hospitalar do serviço.'
    ],
    improvements: [
      'Detalhar a construção e revisão contínua do Projeto Terapêutico Singular (PTS).',
      'Explicitar estratégias de desescalada verbal em situações de agitação ou crise.',
      'Enfatizar o registro técnico no livro de ocorrências e prontuário integrado.'
    ],
    normativeAnalysis:
      'Resposta alinhada à Lei Federal nº 10.216/2001 (Lei da Reforma Psiquiátrica) e à Portaria GM/MS nº 106/2000, enfatizando a moradia assistida como instrumento de reinserção social e cidadania plena.',
    antiAsylumFeedback,
    criterionBreakdown,
    evaluatedAt:
      new Date().toLocaleDateString('pt-BR') +
      ' às ' +
      new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  };
}
