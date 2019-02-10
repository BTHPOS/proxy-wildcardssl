var proxy = require('redbird')({
    port: 80,
    secure: true,
    ssl: {
        port: 443,
        key: "./ssl/private.key",
        cert: "./ssl/certificate.cer",
    }
});

proxy.register("domain.com", "http://localhost:8000", {ssl: true});
proxy.register("domain.com", "http://localhost:8001", {ssl: true});
