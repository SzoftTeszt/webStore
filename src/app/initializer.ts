import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";

export function onAppInit(config:ConfigService, http:HttpClient)
{
    return () => {
        return new Promise( 
            (resolve, reject) => {
                http.get("../assets/config.json").subscribe(
                    (res:any)=>{
                        config.setConfig(res.fontosDolog)
                        resolve(true)
                    }
                )
            }

        )
    }
}