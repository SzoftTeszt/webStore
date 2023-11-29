import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { finalize, Subject } from 'rxjs';
import { Produts } from './product';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlSubject= new Subject()
  basePath="/feltolt"
  dbRef:any
  productRef:AngularFireList<Produts>
  constructor(private storage:AngularFireStorage, private db: AngularFireDatabase) {
    this.dbRef=this.db.list(this.basePath)
    this.productRef=this.db.list("/products")
  }

getUrlSubject(){
  return this.urlSubject
}

  getProducts(){
    return this.productRef
  }
  addProduct(product:any){
    return this.productRef.push(product)
  }

  updateProduct(product:any){
    return this.productRef.update(product.key,product)
  }

  deleteProduct(product:any){
    return this.productRef.remove(product.key)
  }

  deleteAllProducts(){
    return this.productRef.remove()
  }


  getData(){
    return this.dbRef
  }

  addFileData(fname:any, fsUrl:any){
    const data= {name:fname, url:fsUrl}
    this.dbRef.push(data)

  }

  deleteFile(file:any){
    this.dbRef.remove(file.key).then(
      ()=>{
        const fullPath=this.basePath+"/"+file.name
        const storegeRef= this.storage.ref(fullPath)
        storegeRef.delete().subscribe(
          (res)=>console.log("Sikeres törlés")
        )
      }
    )
  }

  pushImage(file:any){
    const fullPath=this.basePath+"/"+file.name
    const storegeRef= this.storage.ref(fullPath)
    const uploadTask=this.storage.upload(fullPath,file)
    uploadTask.snapshotChanges().pipe(
      finalize(
        ()=>{
          storegeRef.getDownloadURL().subscribe(
            (url)=>{
             this.urlSubject.next(url)              
            }
          )
      }
      )
    ).subscribe()

    return uploadTask.percentageChanges()
  }


  pushFile(file:any){
    const fullPath=this.basePath+"/"+file.name
    const storegeRef= this.storage.ref(fullPath)
    const storegeBaseRef= this.storage.ref(this.basePath)
    const uploadTask=this.storage.upload(fullPath,file)
    storegeBaseRef.child(file.name).getDownloadURL().subscribe(
      {
        next:(res:any)=>console.log("K:",res),
        error:(err:any)=>{        
    
          uploadTask.snapshotChanges().pipe(
            finalize(
              ()=>{
                storegeRef.getDownloadURL().subscribe(
                  (url)=>{
                    this.addFileData(file.name,url)
                    // console.log(url)
                  }
                )
            }
            )
          )
          .subscribe(
            (res)=>console.log(res)
          )
        }
      }
    )

   
      return uploadTask.percentageChanges()
  }
}
