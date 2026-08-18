export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CaseStudy {
  title: string;
  residentContext: string;
  scenarioDescription: string;
  keyDilemma: string;
  guidedQuestions: string[];
  recommendedConduct: string;
  normativeReference: string;
}

export interface EssayTask {
  prompt: string;
  rubric: {
    criterion: string;
    weight: string;
    guideline: string;
  }[];
  modelAnswer: string;
}

export interface Module {
  id: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  iconName: string;
  normativeBase: string[];
  workloadHours: number;
  contentSections: {
    title: string;
    paragraphs: string[];
    keyTakeaway?: string;
    practicalTips?: string[];
    normativeHighlight?: string;
  }[];
  caseStudy: CaseStudy;
  quiz: QuizQuestion[];
  essayTask: EssayTask;
}

export interface FinalExamQuestion {
  id: string;
  moduleSource: number;
  moduleLabel: string;
  question: string;
  scenario?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CriterionEvaluation {
  criterion: string;
  scoreAwarded: number;
  maxScore: number;
  comment: string;
}

export interface AntiAsylumFeedback {
  overview: string;
  deinstitutionalizationPoints: string[];
  riskOfAsylumPracticesIdentified: string[];
  emancipatoryPracticesRecommended: string[];
  keyTakeawayLesson: string;
}

export interface EssayEvaluation {
  score: number; // 0 to 100
  passed: boolean;
  feedback: string;
  strengths: string[];
  improvements: string[];
  normativeAnalysis: string;
  antiAsylumFeedback?: AntiAsylumFeedback;
  criterionBreakdown?: CriterionEvaluation[];
  evaluatedAt: string;
}

export interface UserProgress {
  completedModules: number[];
  quizScores: Record<number, number>; // moduleId -> score out of 10
  quizAnswers?: Record<number, Record<string, number>>; // moduleId -> questionId -> selectedOptionIndex
  essayAnswers: Record<number, string>;
  essaySubmitted: Record<number, boolean>;
  essayEvaluations?: Record<number, EssayEvaluation>;
  finalExamScore?: number; // score out of 20
  finalExamPassed?: boolean;
  finalExamAnswers?: Record<string, number>;
  userName: string;
  userRole: string;
  userEmail?: string;
  cpfOrRegistration?: string;
  srtUnit?: string;
  isRegistered?: boolean;
  startDate: string;
  completionDate?: string;
}
