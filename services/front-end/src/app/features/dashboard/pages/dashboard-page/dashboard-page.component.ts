import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PostService } from '../../services/post.service';

import { NewPostComponent } from '../../components/new-post/new-post.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject;
  posts: [] = [];
  form!: FormGroup;
  limit: number = 10;
  page: number = 1;

  constructor(public dialog: MatDialog, private postService: PostService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPosts();
    this.buildForm();
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  buildForm() {
    this.form = this.fb.group({
      limit: 10,
      page: 1
    });
  }

  addTranslation(post: any) {
    this.dialog.open(NewPostComponent, {
      width: '700px',
      data: { post: post.data, id: post.data.id }
    })
  }

  getPosts() {
    this.postService.getPosts(this.limit, this.page)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(resp => {
        this.posts = resp.data.data;
        this.page = resp.data.page;
        this.limit = resp.data.limit;
      });
  }

  filter() {
    this.limit = this.form.controls['limit'].value;
    this.page = this.form.controls['page'].value;
    this.getPosts();
  }

}
