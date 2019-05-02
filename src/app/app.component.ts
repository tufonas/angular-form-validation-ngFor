import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Observable, Subscription, Subject, asapScheduler, pipe, of, from } from 'rxjs';
import { catchError, map, tap, filter, scan } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl, NgForm } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  posts: any[] = [
    {"post_id":1,"user_id":1,"description":" Hi How are you ","created_date":"2019-01-21T05:50:51.000Z"},{"post_id":2,"user_id":1,"description":" Hello hi","created_date":"2019-01-21T05:51:16.000Z"},
    {"post_id":3,"user_id":1,"description":" Working a Fine ","created_date":"2019-01-25T11:40:41.000Z"},{"post_id":8,"user_id":1,"description":" Hi How are you ","created_date":"2019-01-30T16:45:53.000Z"}]; 



  comments: Comment[];
  comment_text: string;
  formsArr = [];
  commentForm: FormGroup;

   get f() { 
    // console.log(this.commentForm.controls);
     return this.commentForm.controls; }

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
      this.comments = new Array<Comment>();
      this.commentFormValidation();

  }

  ngOnInit() {   }

    commentFormValidation() {
      // debugger
      this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(8)] ]
     });
    let i=0;
    this.posts.forEach(post => {
      this.commentForm.addControl('comment'+String(post.post_id),new FormControl( this.comments[i++],[Validators.required, Validators.minLength(8)]));
    });

  }
  checkForError(post: any){

      const inputForm = this.commentForm.get('comment'+post.post_id) ;
     if(inputForm.errors && (inputForm.dirty || inputForm.touched )) {
         return true;
       }
      return false;
  }
  


  
}
