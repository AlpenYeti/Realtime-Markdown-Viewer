En gros à chaque fois que l'on fait un npm run ... ça marche pas...
Donc ouvrir le fichier package.json et regarder la commande à lancer, par exemple plutôt que de faire un 'npm run test' on va regarder la commande dans script qui est `./node_modules/mocha/bin/mocha converter/tests/markdown-test.js` et la coller directment dans le terminal.

Remarque :
* avant de faire un npm run test il est obligatoire de faire "./node_modules/browserify/bin/cmd.js -r ./converter/markdown.js:markdown > public/bundle.js"

Si vous souhaitez avoir le serveur il faut taper : ''./node_modules/nodemon/bin/nodemon.js'
