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

export interface UserProgress {
  completedModules: number[];
  quizScores: Record<number, number>; // moduleId -> score out of quiz length
  essayAnswers: Record<number, string>;
  essaySubmitted: Record<number, boolean>;
  userName: string;
  userRole: string;
  startDate: string;
  completionDate?: string;
}
