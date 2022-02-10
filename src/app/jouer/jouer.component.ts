import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements OnInit {
  flag:boolean = true


  apply(value:string){
    this.flag = value == "login"?true : false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
