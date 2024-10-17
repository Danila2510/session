export const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else {
        res.redirect("/user/signin");
    }
};

export const ensureGuest = (req, res, next) => {
    if (!req.session.user) {
        return next();
    } else {
        res.redirect("/");
    }
};