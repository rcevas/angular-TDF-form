import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  placeholderUser = new User('Rob', 'rob@rob.com', 9999999999, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) {}
  
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.placeholderUser)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMsg = error.statusText
          );
  }
}
