import { Injectable } from '@angular/core';
import { skilltemplate } from './skilltemplate';

@Injectable({
  providedIn: 'root'
})
export class UserdbService {

  public skills = [
    {"name" : "Photography", "price" : 200, "image" : "/assets/images/photography.jfif"},
    {"name" : "Dance", "price" : 500, "image" : "/assets/images/dancing.jfif"},
    {"name" : "Guitar", "price" : 350, "image" : "/assets/images/Guitar.jfif"},
    {"name" : "productivity", "price" : 340, "image" : "/assets/images/productivity.png"},
    {"name" : "Drawing", "price" : 380, "image" : "/assets/images/Drawing.jfif"},
    {"name" : "Singing", "price" : 440, "image" : "/assets/images/Singing.jfif"}

  ]

  public userhisotryskills : skilltemplate[] = [];
  constructor() { }

  getskills() {
    return this.skills;
  }

  adduserskills(userscourses : skilltemplate){
    this.userhisotryskills.push(userscourses)
  }

  getuserskills(){
    return this.userhisotryskills;
  }
}
