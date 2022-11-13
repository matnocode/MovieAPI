let mix = require("laravel-mix");
mix.js("src/app.js","public").sass("src/scss/style.scss","style.css").setPublicPath("public")
mix.js("src/footer.js","public").setPublicPath("public")
mix.js("src/header.js","public").setPublicPath("public")
mix.js("src/main.js","public").setPublicPath("public")
mix.js("src/WeeksTop.js","public").setPublicPath("public")