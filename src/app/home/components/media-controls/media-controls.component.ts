import { Component, inject } from '@angular/core';
import { FlowSequenceServiceService } from '../../../shared/services/flow-sequence-service.service';
import { CommonModule } from '@angular/common';
import { SettingsServiceService } from '../../../shared/services/settings-service.service';

@Component({
  selector: 'app-media-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-controls.component.html',
  styleUrl: './media-controls.component.scss',
})
export class MediaControlsComponent {
  public settingsService = inject(SettingsServiceService);
  public flowSequenceService = inject(FlowSequenceServiceService);
  public playButton: boolean = true;
  public hoveredElement: string | null = null;

  setHoverd(isHoverd: boolean, element: string) {
    this.hoveredElement = isHoverd ? element : null;
  }

  play() {
    this.playButton = false;
    this.flowSequenceService.startSequence();
  }

  pause() {
    this.playButton = true;
    this.flowSequenceService.pauseTimer();
  }

  next() {
    this.flowSequenceService.nextStep();
  }

  previous() {
    this.flowSequenceService.previousStep();
  }
}
