import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})

export class Page404Component implements OnInit {

  constructor(private location: Location) 
  {}
  ngOnInit(): void {
 
  }

  @HostListener('click')
  onClick() {
      this.location.back();
  }

}
