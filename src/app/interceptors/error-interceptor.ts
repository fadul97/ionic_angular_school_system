import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class ErrorInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('Passed on interceptor');
    return next.handle(req).pipe(catchError((error, caught) => {
      let errorObj = error;
      if(errorObj.error){
        errorObj = errorObj.error;
      }

      if(!errorObj.status){
        errorObj = JSON.parse(errorObj);
      }

      console.log('Error detected by interceptor: ');
      console.log(errorObj);
      return throwError(errorObj);
    })) as any;
  }
}

export const errorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
