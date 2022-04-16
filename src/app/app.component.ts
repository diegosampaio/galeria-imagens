import { PhotoService } from './photos/photo/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
