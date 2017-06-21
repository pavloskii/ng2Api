import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { IProduct } from '../products/product.model'

@Injectable()
export class ProductService {

    constructor(private http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get("http://localhost:53721/api/Products").map((response: Response) => {
            return <IProduct[]>response.json()
        }).catch(this.handleError)
    }

    getProduct(id: number): Observable<IProduct> {
        return this.http.get("http://localhost:53721/api/Products/" + id).map((response: Response) => {
            return <IProduct>response.json()
        }).catch(this.handleError)
    }

     postProduct(product): Observable<IProduct> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        return this.http.post('http://localhost:53721/api/Products/', JSON.stringify(product), options).map((response: Response) => {
            return response.json()
        }).catch(this.handleError)
    }

    getText(){
        return this.http.get("http://localhost:57357/Service1.svc/").map((response: Response) => {
            return response.json()
        }).catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}