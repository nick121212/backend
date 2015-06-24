/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
export module Passport {
    export class LoginModel {
        public username:string;
        public password:string;
        public expire_in:boolean;

        constructor(username?:string, password?:string, expireIn?:boolean) {
            this.username = username || '';
            this.password = password || '';
            this.expire_in = expireIn || false;
        }
    }

    export class RegisterModel {
        public username:string;
        public password:string;
        public password_again:string;

        constructor(username?:string, password?:string, password_again?:string) {
            this.username = username || '';
            this.password = password || '';
            this.password_again = password_again || '';
        }
    }

    export class UserModel {
        //用户名
        public username:string;
        //昵称
        public nickname:string;
        //头像
        public avatar_url:string;

        constructor() {

        }
    }
}