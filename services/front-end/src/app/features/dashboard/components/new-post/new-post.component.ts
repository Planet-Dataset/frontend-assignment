import { DialogPost } from './../../models/post.interface';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Post } from '../../models/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject;
  languages: string[] = ["ES", "FR", "PT"];
  form!: FormGroup;
  error: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogPost, private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  addTranslation() {
    const post: Post = {
      author: this.form.controls['author'].value,
      author_fullname: this.form.controls['author_fullname'].value,
      category: this.form.controls['category'].value,
      language: this.form.controls['language'].value,
      originalPostId: this.data.id,
      title: this.form.controls['title'].value
    }

    this.postService.newPost(post)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: () => { },
        error: (err) => {
          this.error = err.error.data;
        }
      });
  }

  buildForm() {
    const { post } = this.data;

    this.form = this.fb.group({
      author: [post.author, Validators.required],
      author_fullname: [post.author_fullname],
      category: [post.category],
      language: ['', Validators.required],
      title: [post.title, Validators.required],
    });
  }

}
