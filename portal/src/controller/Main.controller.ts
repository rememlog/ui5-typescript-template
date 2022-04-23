import Controller from "sap/ui/core/mvc/Controller";


interface ITranslationToken {
    access_token: string;
    token_type:string; 
    expires_in:number;
    scope:string;
    jti:string;
}
/**
 * @namespace sap.typescript.cf.portal
 */
export default class Main extends Controller{
    
    public onInit() : void{
        console.log("Main")
        const test:string ="aa"
        const a:string = `asdsadad ${test}`;
        
    }


}