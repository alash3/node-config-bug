module.exports = {
    session: {
        cookieName: 'session',
        requestKey: 'session',
        duration: 86400 * 1000,
        activeDuration: 300 * 1000,
        secret: 'shhhhhh',
        cookie: {
            ephemeral: true,
            httpOnly: true,
            secure: false,
            secureProxy: false
        }
    },
    daemons: {
        http: {
            enabled: true
        },
        https: {
            enabled: true
        }
    },
}
