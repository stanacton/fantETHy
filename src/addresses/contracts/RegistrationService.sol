contract User {
    string firstName;
    string lastName;

    function User(string firstName, string lastName)
    {
        firstName = firstName;
        lastName = lastName;
    }
}

contract RegistrationService {

    function Register(string firstName, string lastName) returns (User) {
        return new User(firstName, lastName);
    }
}