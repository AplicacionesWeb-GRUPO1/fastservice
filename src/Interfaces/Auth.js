class LoginData {
    constructor(name, lastName, phone, birthdayDate, money, rating, avatar, specialty, role) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.birthdayDate = birthdayDate;
        this.money = money || Math.floor(Math.random() * (1001 - 400)) + 400;
        this.rating = rating || Math.floor(Math.random() * 5) + 1;
        this.avatar = avatar;
        this.specialty = specialty;
        this.role = role;
    }
}

export default class SignUpData {

    constructor(name, lastName, userName, password, phone, birthdayDate, role) {
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.phone = phone;
        this.birthdayDate = birthdayDate;
        this.role = role;
    }
}
