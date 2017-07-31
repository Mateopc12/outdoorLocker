angular.module('outdoorLockerMdl')
    .component("satelliteCounter", {
        controllerAs: "satelliteCounterCtrl",
        bindings: {
            name: "<",
            onButtonRight: "&",
            onButtonLeft: "&",
            cuantityPerUnit: "<"
        },
        controller: ['$scope', function ($scope) {
            this.$onInit = () => {
                this.totalLeft = 0;
                this.totalRight = 0;
                $scope.$on("resetValues", () => {
                    this.totalRight = 0;
                    this.totalLeft = 0;
                })
            }

            this.onLeftLocalButton = (isAdding) => {
                this.onButtonLeft({
                        $event: {
                            isAdding: isAdding,
                            cuantity: this.totalLeft,
                            cuantityPerUnit: this.cuantityPerUnit
                        }
                    }
                );
                this.totalLeft = (isAdding) ? this.totalLeft + 1 : ((this.totalLeft > 0) ? this.totalLeft - 1: this.totalLeft);
            }

            this.onRightLocalButton = (isAdding) => {
                this.onButtonRight(
                    {
                        $event: {
                            isAdding: isAdding,
                            cuantity: this.totalRight,
                            cuantityPerUnit: this.cuantityPerUnit,
                        }
                    }
                );
                this.totalRight = (isAdding) ? this.totalRight + 1 : ((this.totalRight > 0) ? this.totalRight - 1: this.totalRight);
            }
        }],
        templateUrl: "components/satelliteCounterCmp/satelliteCounterCmp.html"
    })