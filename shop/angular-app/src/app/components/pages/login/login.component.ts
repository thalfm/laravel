import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credential = {
        email: '',
        password: ''
    };

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    submit() {

        return false;
    }
}
