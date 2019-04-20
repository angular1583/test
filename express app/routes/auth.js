const GoogleStrategy = require('passport-google-oauth')
    .OAuth2Strategy;

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: "598051490813-ffo8t2htsajmarkhl6vqc4jc1nbrjsst.apps.googleusercontent.com",
        clientSecret: "2lBRHDssg2t9w0qu4s5R9e3K",
        callbackURL: '/auth/google/callback'
    }, (token, refreshToken, profile, done) => {
        console.log('token is set',token);
        console.log('refreshToken is set',refreshToken);
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};