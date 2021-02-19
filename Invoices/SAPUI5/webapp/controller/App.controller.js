// @ts-nocheck
sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast",
"sap/ui/model/json/JSONModel"
],

/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast
 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
 */
    function (Controller, MessageToast, JSONModel) {
    
        return Controller.extend("logaligroup.SAPUI5.controller.App",{

            onInit: function() {
                var oData = {
                    recipient : {
                        name: "World"
                    }
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onShowHello: function() {
                MessageToast.show("Hello Word");
            }
                   
        });
    });