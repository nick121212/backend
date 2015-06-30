/**
 * Created by NICK on 15/6/29.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

declare module Pagination {
    interface Pagination {
        totalCount:number;
        pageSize:number;
        maxSize:number;
        currentPage:number;
        perPageOptions:number[];
        onChangeNum:(num:number)=>void;
    }
}