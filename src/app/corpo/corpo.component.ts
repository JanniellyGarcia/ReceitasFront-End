import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../_data-services/recipes';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  recipes: any;
  constructor(private recipeDataService: RecipeDataService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    //here
    this.recipeDataService.get().subscribe((dados:any) =>  {
    this.recipes = dados;
    }, error =>{
        console.log(error);
        alert('erro interno do sistema');
    })
  }
 

}
