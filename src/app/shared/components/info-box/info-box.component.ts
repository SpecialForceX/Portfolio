import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-box',
  standalone: true,
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
  imports: [CommonModule]
})

export class InfoBoxComponent {
  @Input() firstTitle: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}

