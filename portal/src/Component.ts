import UIComponent from "sap/ui/core/UIComponent";


/**
 * @namespace sap.typescript.cf.portal
 */
export default class Component extends UIComponent{
    public static metadata ={
        manifest: "json"
    }

    public init(): void {
        super.init()

        this.getRouter().initialize()
    }
}