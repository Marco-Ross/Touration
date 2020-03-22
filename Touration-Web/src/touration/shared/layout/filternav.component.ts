import {Component} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'layout-filternav',
    templateUrl: './filternav.component.html',
    styleUrls: ['./filternav.component.css']
  })
  
  export class FilternavComponent{
    faSearch = faSearch;
  }
  