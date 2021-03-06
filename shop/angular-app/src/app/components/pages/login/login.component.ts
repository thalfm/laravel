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
        email: 'admin@user.com',
        password: 'password'
    };

    showMessageError:boolean = false;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        this.http.post<any>('http://localhost:8010/api/login', this.credential)
            .subscribe((data) => {
                const token = data.token;
                window.localStorage.setItem('token', token);
                this.router.navigate(['categories/list']);
            }, () => this.showMessageError = true);

        return false;
    }
}
