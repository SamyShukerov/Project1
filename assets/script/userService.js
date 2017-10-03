// module design pattern
var userList = (function() {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.obyavi = [];
    }

    function UserList() {
        this.currentUser = null;
        if (localStorage.getItem('users') != null) {
            this._users = JSON.parse(localStorage.getItem('users'));
        } else {
            this._users = [new User('Sami', '123456', 'sami@abv.bg'), new User('Rali', '123456', 'rali@abv.bg')];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }

    UserList.prototype.addUser = function(username, password, email) {
        if ((typeof username === 'string') && (username.trim().length > 3) &&
            (password.trim().length > 5) && email) {
            if (!(this._users.some(user => user.username === username))) {
                this._users.push(new User(username, password, email));
                localStorage.setItem('users', JSON.stringify(this._users));

                return true;
            } else {
                return false;
            }
        }
    };

    UserList.prototype.login = function(username, password) {
        var imaLiUser = false;

        this._users.forEach(user => {
            if (user.username === username && user.password === password) {
                this.currentUser = user;
                imaLiUser = true;
            }
        }, this);

        return imaLiUser;
    };

    return new UserList();
})();
