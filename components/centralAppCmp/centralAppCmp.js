angular.module('outdoorLockerMdl')
.component("centralApp", {
    controllerAs: "centralAppCtrl",
    controller: [function() {
        this.$onInit = () => {
            this.finalCabinetSelected = undefined;
        }
    }],
    templateUrl: "components/centralAppCmp/centralAppCmp.html"
});