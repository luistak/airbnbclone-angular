import { PropertyService } from './../../property.service';
import { Component, OnInit } from '@angular/core';
import { Property } from '../property/property.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  properties: Property[] = null;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService
      .getProperties()
      .subscribe((properties: Property[]) => {
        this.properties = properties;
      });
  }

}
