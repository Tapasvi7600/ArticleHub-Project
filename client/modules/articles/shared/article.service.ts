import {Injectable} from "@angular/core";
import {Http,Response,Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService{
    constructor(private http:Http){
    }

    createComment(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = data;
        return this.http.post('/api/comment/', body, headers).map((res: Response) => res.json());
    }

     getComment(id,articleType){
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         return this.http.get('/api/comment/'+articleType+'/'+id).toPromise()
             .then(res=>res.json())
             .catch(this.handleError);
     }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);

    }

}