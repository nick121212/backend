/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
export module Passport {
    /*
     * 登录模型
     * */
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

    /*
     * 注册模型
     * */
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

    /*
     * 用户模型
     * */
    export class UserModel {
        //用户名
        public username:string;
        //昵称
        public nickname:string;
        //头像
        public avatar_url:string;
        //手机
        public phone:string;
        //邮箱
        public email:string;

        constructor(username?:string, nickname?:string, avatar_url?:string) {
            this.username = username || '';
            this.nickname = nickname || '';
            this.avatar_url = avatar_url || '';
        }
    }

    /*
     * 找回密码
     * */
    export class ForgetModel {
        public username:string;
        public password:string;
        public new_password:string;
        public new_password_again:string;
        public sms_token:string;
        public time_left:number;
    }
}