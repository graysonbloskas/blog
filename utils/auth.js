const auth = (req, data, next) => {
    if (!req.session.loggedIn) {
        data.redirect('/login');
    } else {
        next();
    }
};
module.exports = auth;