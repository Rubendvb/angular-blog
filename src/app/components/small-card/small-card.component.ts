import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  photoCover: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM179mS-6WFd3NFVpjZzR7LDB3G1jMm_x1CA&usqp=CAU';

  @Input()
  cardTitle: string = 'Não definido';

  @Input()
  Id: string = '0';
}
