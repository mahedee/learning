/**
 * BookStore APIs
 * BookStore APIs exposed from a Java EE back-end to an Angular front-end
 *
 * OpenAPI spec version: 1.0.0
 * Contact: antonio.goncalves@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class BooksApi {
    protected basePath = 'http://localhost:8080/pbookstore-back-1.0/api';
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Returns the number of books
     *
     */
    public countBooks (extraHttpRequestParams?: any ): Observable<number> {
        const path = this.basePath + '/books/count';

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        const requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Creates a book given a JSon Book representation
     *
     * @param body Book to be created
     */
    public createBook (body: models.Book, extraHttpRequestParams?: any ): Observable<{}> {
        const path = this.basePath + '/books';

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createBook.');
        }
        const requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Deletes a book given an id
     *
     * @param id
     */
    public deleteBook (id: number, extraHttpRequestParams?: any ): Observable<{}> {
        const path = this.basePath + '/books/{id}'
            .replace('{' + 'id' + '}', String(id));

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteBook.');
        }
        const requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Return a book given by an Id
     *
     * @param id
     */
    public getBook (id: number, extraHttpRequestParams?: any ): Observable<models.Book> {
        const path = this.basePath + '/books/{id}'
            .replace('{' + 'id' + '}', String(id));

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBook.');
        }
        const requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns all the books
     *
     */
    public getBooks (extraHttpRequestParams?: any ): Observable<Array<models.Book>> {
        const path = this.basePath + '/books';

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        const requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}