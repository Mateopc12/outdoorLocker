angular.module('outdoorLockerMdl')
.component("mainCabinet", {
    bindings: {
        finalCabinetSelected: '='
    },
    controllerAs: "mainCabinetCtrl",
    controller: ["JSON_RULES", function(JSON_RULES) {
        this.$onInit = () => {
            this.mainCabinettes = JSON_RULES.mainCabinetType;
            this.cabinetSelected = undefined;
        }

        this.selectCurrentCabinet = (mainCabinet) => {
            if (this.cabinetSelected === mainCabinet) ? undefined : mainCabinet;
        }

        this.sendCurrentCabinet = () => {
            if (this.cabinetSelected) {
                this.finalCabinetSelected = this.cabinetSelected;
            }
        }
    }],
    templateUrl: "components/mainCabinetCmp/mainCabinetCmp.html"
});