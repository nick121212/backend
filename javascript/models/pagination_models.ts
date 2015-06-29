/**
 * Created by NICK on 15/6/29.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
///<reference path="../typescripts/angular.d.ts" />
///<reference path="pagination_models.d.ts" />

export module Pagination {
    export class Pagination {
        public totalCount:number;
        public pageSize:number;
        public maxSize:number;
        public currentPage:number;
        public onChangeNum:(num:number)=>void;

        constructor(options) {
            options = options || {};

            this.totalCount = options.totalCount || 0;
            this.pageSize = options.pageSize || 10;
            this.maxSize = options.maxSize || 5;
            this.currentPage = options.currentPage || 1;
            this.onChangeNum = options.onChangeNum;
        }

        changeNum() {
            if (angular.isFunction(this.onChangeNum)) {
                this.onChangeNum(this.currentPage);
            }
        }
    }
}