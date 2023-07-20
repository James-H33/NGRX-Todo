import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'Icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input()
  @HostBinding('style.--fill-color')
  public fillColor: string | null = null;

  @Input()
  public type: string = 'default';

  @Input()
  public size: number = 14;
}
