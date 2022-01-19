import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CorpoComponent } from './corpo/corpo.component';
import { HttpClientModule} from '@angular/common/http';
import { RecipeDataService } from './_data-services/recipes';
import { SobreComponent } from './sobre/sobre.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CorpoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecipeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
