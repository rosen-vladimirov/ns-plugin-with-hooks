var Observable = require("data/observable").Observable;

console.log("ViewModel is created by your Hooks. You are out of control now.");
function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You have been caught by NativeScript CLI's hooks!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
		console.log("You've tapped on the Hooks Button. Remaining taps: " + this.counter );
        this.set("message", getMessage(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;