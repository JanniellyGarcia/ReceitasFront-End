import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeDataService{
  
    module: string = 'https://localhost:44365/api/Recipe';

    constructor(private http: HttpClient){
      
    }
    get() {
        return this.http.get(this.module);
    }
}