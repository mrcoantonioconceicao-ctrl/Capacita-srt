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

export interface UserProgress {
  completedModules: number[];
  quizScores: Record<number, number>; // moduleId -> score out of 10
  essayAnswers: Record<number, string>;
  essaySubmitted: Record<number, boolean>;
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
