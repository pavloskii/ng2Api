import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { IProduct } from '../products/product.model'

@Injectable()
export class ProductService {

    constructor(private http: Http) {

    }
    // url = "http://localhost:53721/api/Products"
    getProducts(url:string): Observable<IProduct[]> {
        return this.http.get(url).map((response: Response) => {
            return <IProduct[]>response.json()
        }).catch(this.handleError)
    }

    getProduct(url:string, id: number): Observable<IProduct> {
        return this.http.get(url +"/"+ id).map((response: Response) => {
            return <IProduct>response.json()
        }).catch(this.handleError)
    }

     postProduct(url:string, product): Observable<IProduct> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        return this.http.post(url, JSON.stringify(product), options).map((response: Response) => {
            return response.json()
        }).catch(this.handleError)
    }

    getText(url:string){
        return this.http.get(url).map((response: Response) => {
            return response.json()
        }).catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}