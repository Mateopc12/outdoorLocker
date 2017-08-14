'use strict';

angular.module('outdoorLockerMdl')
.component("outdoorLocker", {
    bindings: {
        finalCabinetSelected: '<'
    },
    controllerAs: "outdoorLockerCtrl",
    controller: ['JSON_RULES', '$scope', function(JSON_RULES, $scope) {
        this.$onInit = () => {
            this.jsonRules = JSON_RULES;
            this.totalRight = 0;
            this.totalLeft = 0;
            this.totalUnits = 0;
            this.totalLeftSatellite = 0;
            this.totalRightSatellite = 0;
            this.rulesStatus = [{
                errorCode: "MSG-E01",
                status: false,
                successCode: "MSG-S01"
            }, {
                errorCode: "MSG-E02",
                status: false,
                successCode: "MSG-S02"
            }, {
                errorCode: "MSG-E03",
                status: false,
                successCode: "MSG-S03"
            }, {
                errorCode: "MSG-E04",
                status: false,
                successCode: "MSG-S04"
            }, {
                errorCode: "MSG-E05",
                status: false,
                successCode: "MSG-S05"
            }];
            $scope.$watch("outdoorLockerCtrl.totalRight", this.onTotalRightChange.bind(this));
            $scope.$watch("outdoorLockerCtrl.totalLeft", this.onTotalLeftChange.bind(this));
            $scope.$on("resetValues", () => {
                this.totalRight = 0;
                this.totalLeft = 0;
                this.totalLeftSatellite = 0;
                this.totalRightSatellite = 0;
                this.totalUnits = 0;
                this.rulesStatus.map(rule => rule.status = false);
            });
        }

        this.onTotalRightChange = (newValue) => {
            this.rulesStatus[2].status = this.finalCabinetSelected.maxRightUnits < newValue;
        }

        this.onTotalLeftChange = (newValue) => {
            this.rulesStatus[1].status = this.finalCabinetSelected.maxLeftUnits < newValue;
        }

        this.buttonRight = (event) => {
            this.totalRight = (event.isAdding) ? this.totalRight + event.cuantityPerUnit : ((event.cuantity > 0) ? this.totalRight - event.cuantityPerUnit: this.totalRight);
            this.onTotalUnitsChange(event, true);
        }

        this.buttonLeft = (event) => {
            this.totalLeft = (event.isAdding) ? this.totalLeft + event.cuantityPerUnit : ((event.cuantity > 0) ? this.totalLeft - event.cuantityPerUnit: this.totalLeft);
            this.onTotalUnitsChange(event, false);
        }

        this.onTotalUnitsChange = (event, isRightButton) => {
            this.totalUnits = (event.isAdding) ? this.totalUnits + 1 : ((event.cuantity > 0) ? this.totalUnits - 1 : this.totalUnits);
            if (isRightButton) {
                this.totalRightSatellite = (event.isAdding) ? this.totalRightSatellite + 1 : ((event.cuantity > 0) ? this.totalRightSatellite - 1 : this.totalRightSatellite);                
            } else {
                this.totalLeftSatellite = (event.isAdding) ? this.totalLeftSatellite + 1 : ((event.cuantity > 0) ? this.totalLeftSatellite - 1 : this.totalLeftSatellite);
            }
            this.rulesStatus[3].status = (8 < this.totalUnits + 1);
            this.rulesStatus[4].status = (4 < this.totalUnits + 1);
        }
    }],
    templateUrl: "components/outdoorLockerCmp/outdoorLockerCmp.html"
})