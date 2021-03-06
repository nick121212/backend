/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


declare module Passport {
    interface LoginModel {
        username:string;
        password:string;
        expire_in:boolean;
    }
    interface RegisterModel {
        username:string;
        password:string;
        password_again:string;
    }
    interface UserModel {
        username:string;
        nickname:string;
        avatar_url:string;
        phone:string;
        email:string;
    }
    interface ForgetModel {
        username:string;
        password:string;
        new_password:string;
        new_password_again:string;
        sms_token:string;
        time_left:number;
    }
}