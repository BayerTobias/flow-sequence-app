import { Component, inject } from '@angular/core';
import { FlowSequenceServiceService } from '../../../shared/services/flow-sequence-service.service';

@Component({
  selector: 'app-media-controls',
  standalone: true,
  imports: [],
  templateUrl: './media-controls.component.html',
  styleUrl: './media-controls.component.scss',
})
export class MediaControlsComponent {
  public flowSequenceService = inject(FlowSequenceServiceService);

  play() {
    this.flowSequenceService.startSequence();
  }

  pause() {
    this.flowSequenceService.pauseTimer();
  }

  next() {
    this.flowSequenceService.nextStep();
  }

  previous() {
    this.flowSequenceService.previousStep();
  }
}
