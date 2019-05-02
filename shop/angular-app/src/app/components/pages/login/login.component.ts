import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        this.http.post('http://localhost:8010/api/login', this.credential)
            .subscribe((data) => {
                this.router.navigate(['categories/list']);
            });
        return false;
    }
}
