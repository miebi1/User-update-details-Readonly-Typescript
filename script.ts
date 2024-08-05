interface User {
    name: string;
    age: number;
    email: string;
    address: string;
}

let readOnlyUser: Readonly<User> | null = null;

const createUser = (user: User): Readonly<User> => {
    return Object.freeze(user);  // Ensure the user object is immutable
};

const displayUser = (user: Readonly<User>): void => {
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = `
            <h2>User Details:</h2>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address}</p>
        `;
    }
};

document.getElementById('createForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newUser: User = {
        name: formData.get('name') as string,
        age: Number(formData.get('age')),
        email: formData.get('email') as string,
        address: formData.get('address') as string,
    };

    if (readOnlyUser) {
        displayError('Cannot modify read-only property.');
    } else {
        readOnlyUser = createUser(newUser);
        displayUser(readOnlyUser);
    }
});

const displayError = (message: string): void => {
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML += `
            <div style="color: red; font-weight: bold; margin-top: 10px;">
                ${message}
            </div>
        `;
    }
};