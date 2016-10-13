import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Article } from "../models";
import { Observable } from "rxjs";
import { ApiConfiguration } from "../configuration";

@Injectable()
export class ArticleService {
    constructor(private _http: Http, private _apiConfiguration: ApiConfiguration) { }

    public add(entity: Article): Observable<void> | Observable<boolean> {
        return this._http
            .post(`${this._baseUrl}/api/article/add`, entity)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get(): Observable<Array<Article>> | Observable<boolean> {
        return this._http
            .get(`${this._baseUrl}/api/article/get`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }): Observable<Article> | Observable<boolean> {
        return this._http
            .get(`${this._baseUrl}/api/article/getById?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public remove(options: { id: number }): Observable<void> | Observable<boolean> {
        return this._http
            .delete(`${this._baseUrl}/api/article/remove?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    private get _baseUrl() { return this._apiConfiguration.baseUrl; }

}
