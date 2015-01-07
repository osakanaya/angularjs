angular.module("customDirectives", ["customServices"])
.directive("triButton", function(errorService){
	return {
		scope: {
			counter: "=counter"
		},
		link: function(scope, element, attrs) {
			element.on("click", function(event){
				var buttonText = event.target.innerText || event.target.textContent;
				errorService.log("Button click: " + buttonText);

				scope.$apply(function(){
					scope.counter++;
                });
			});
		}
	};
});
