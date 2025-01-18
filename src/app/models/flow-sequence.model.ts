import { FlowTime } from './flow-time.model';
import { LongBreak } from './long-break.model';
import { ShortBreak } from './short-break.model';
import { Step, StepData } from './step.model';

export interface flowSequenceData {
  id: number;
  name: string;
  description: string;
  steps?: Step[];
}

export class FlowSequence {
  id: number;
  name: string = '';
  description: string = '';
  steps: Step[];

  constructor(data?: flowSequenceData) {
    this.id = data?.id || -1;
    this.name = data?.name || '';
    this.description = data?.description || '';
    this.steps = data?.steps || [];

    if (data?.steps) {
      this.steps = this.resolveSteps(data.steps);
    }
  }

  addStep(step: Step) {
    this.steps.push(step);
  }

  sortSteps() {
    this.steps.sort((a, b) => a.position - b.position);
  }

  resolveSteps(stepsData: StepData[]) {
    return stepsData
      .map((stepData) => {
        switch (stepData.type) {
          case 'flowTime':
            return new FlowTime(stepData);
          case 'shortBreak':
            return new ShortBreak(stepData);
          case 'longBreak':
            return new LongBreak(stepData);
          default:
            console.error('Unknown step Type');
            return null;
        }
      })
      .filter((step) => step !== null);
  }

  asJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      steps: this.steps.map((step) => step.asJson()),
    };
  }
}
