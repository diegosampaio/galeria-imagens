import { PhotoComponent } from './photo/photo.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ],
  imports: [ HttpClientModule ]
})

export class PhotosModule {}
