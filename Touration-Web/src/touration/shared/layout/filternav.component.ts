import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {HomeSearchService} from '../../home/home-search.service';

@Component({
  selector: 'layout-filternav',
  templateUrl: './filternav.component.html',
  styleUrls: ['./filternav.component.css'],
  providers:[HomeSearchService]
})

export class FilternavComponent {
  faSearch = faSearch;
  searchText: any;
  locations: any;

  constructor(private service: HomeSearchService) {
    this.locations = service.getLocations();
   }
}
