angular.module("customDirectives", [])
.directive("triButton", function(){
	return {
		scope: {
			counter: "=counter"
		},
		link: function(scope, element, attrs) {
			element.on("click", function(event){
				var buttonText = event.target.innerText || event.target.textContent;
				console.log("Button click: " + buttonText);

				scope.$apply(function(){
					scope.counter++;
                });
			});
		}
	};
});
