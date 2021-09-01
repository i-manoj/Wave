import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  list_of_ques: any = []
  constructor(private fb: FormBuilder, private qservice: QuestionService) { }
  profileForm!: FormGroup
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      page: [''],
      pagesize: [''],
      fromdate: [''],
      todate: [''],
      min: [''],
      max: [''],
      order: [''],
      tagged: ['']
    });


  }
  mySubmit(form: FormGroup) {
    if (form.value != null) {
      this.qservice.getPage(form.value).subscribe((data) => {
        this.list_of_ques = data.items
        //console.log(form.value.order);
      }, (err) => {
        console.log(err)
      })
    }
  }



}
