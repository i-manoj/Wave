import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from './Services/question.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wave';
  ngOnInit() {

  }
  constructor() {}





  // query!: string;
  // lisOfques:any =[];
  // lisOfLink: any = [];
  // constructor(private router: Router, private service: QuestionService) {

  // }

  // ngOnInit() {
   
  // }

  // search() {
  //   console.log("hmmmm")
  //   this.service.getAll().subscribe((data) => {
  //     console.log(data);
  //     this.lisOfques = data.items;
      
     
  //     console.log(data.items[0].title);
  //   }, (err) => {
  //     alert(err)
  //   })
  //  // this.router.navigateByUrl('?query=' + this.query);
  // }
}
