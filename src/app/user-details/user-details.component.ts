import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input() item2:{name:string,email:string}={name:'',email:''};
}
