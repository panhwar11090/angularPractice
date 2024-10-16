import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  searchedValue: string = '';
  InputSerachedValue(evenData: Event){

    this.searchedValue= (<HTMLInputElement>evenData.target).value;
    console.log(this.searchedValue)
    
  }

}
