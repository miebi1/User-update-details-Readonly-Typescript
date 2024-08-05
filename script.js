var _a;
var readOnlyUser = null;
var createUser = function (user) {
    return Object.freeze(user); // Ensure the user object is immutable
};
var displayUser = function (user) {
    var output = document.getElementById('output');
    if (output) {
        output.innerHTML = "\n            <h2>User Details:</h2>\n            <p><strong>Name:</strong> ".concat(user.name, "</p>\n            <p><strong>Age:</strong> ").concat(user.age, "</p>\n            <p><strong>Email:</strong> ").concat(user.email, "</p>\n            <p><strong>Address:</strong> ").concat(user.address, "</p>\n        ");
    }
};
(_a = document.getElementById('createForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var newUser = {
        name: formData.get('name'),
        age: Number(formData.get('age')),
        email: formData.get('email'),
        address: formData.get('address'),
    };
    if (readOnlyUser) {
        displayError('Cannot modify read-only property.');
    }
    else {
        readOnlyUser = createUser(newUser);
        displayUser(readOnlyUser);
    }
});
var displayError = function (message) {
    var output = document.getElementById('output');
    if (output) {
        output.innerHTML += "\n            <div style=\"color: red; font-weight: bold; margin-top: 10px;\">\n                ".concat(message, "\n            </div>\n        ");
    }
};
