import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { SignInComponent } from '../sign-in/sign-in.component';


  var formObject = [{}]; 
  @Injectable({
    providedIn: 'root'
  })  
export class RestService {
 

    constructor(private http: HttpClient) {
        
    }
    private extractData(res: Response) {
        let body = res;
        return body || { };
      }
        // clear alert message on route change
        getUsers(): Observable<any> {
            return this.http.get('/users/all')
            // .pipe(
            //   map(this.extractData));
          }
          
          addUser(user): Observable<any> {
            return this.http.post('/users/signup', user)
            // .pipe(
              // map(this.extractData));
          }
          
          updateUser (id, user): Observable<any> {
            return this.http.put('users/' + id, JSON.stringify(user), httpOptions).pipe(
              tap(_ => console.log(`updated user id=${id}`)),
              catchError(this.handleError<any>('updateUser'))
            );
          }
          
          deleteUser (id): Observable<any> {
            return this.http.delete<any>('users/' + id, httpOptions).pipe(
              tap(_ => console.log(`deleted user id=${id}`)),
              catchError(this.handleError<any>('deleteUser'))
            );
          }
          private handleError<T> (operation = 'operation', result?: T) {
            return (error: any): Observable<T> => {
          
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
          
              // TODO: better job of transforming error for user consumption
              console.log(`${operation} failed: ${error.message}`);
          
              // Let the app keep running by returning an empty result.
              return of(result as T);
            };
          }
        
    }
const endpoint = `/`;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};