# Stylekyll  

Many of companys that make web design do styleguides to keep standars of colors, fonts, components, etc. We as web developers take those styleguides to actual code (html, css, js). For this reason is that stylekyll was created.

Stylekyll help you keep track on how many pages have you build, crossbrowser control, generate svg sprites, generate the actual styleguide through *kss-node* and much more.

This template was created with [*jekyll*](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync),
[*kss-node*](https://github.com/kss-node/kss-node),
[*github-styleguide-template*](https://github.com/1026/kss-node-template-such-as-github) and edited to add 
[*bootstrap-sass*](https://github.com/twbs/bootstrap-sass).

## Todo List

* Organized gulp task in it's own folder. Maybe somethings like this:
``` 
gulp
   ├── build.js
   ├── server.js
   ├── watch.js
   └── wiredep.js
```
* Create an template without bootstrap-sass. (susy, skeleton, other)


## Dependencies

In order to work with the template, you will need to follow tools:
- [*Ruby*](https://www.ruby-lang.org/en/).
- [*Nodejs*](http://nodejs.org/).
- [*Xcode command line tools *](https://developer.apple.com/xcode/). (if you are on Mac)


## Instructions:

* Download and install [*Xcode command line tools *](https://developer.apple.com/xcode/). (if you are on Mac)

* Download and install [*RVM*](https://rvm.io/rvm/install) (Ruby version Manager is optional)

    Run the following command to install rvm it:

        $ \curl -sSL https://get.rvm.io | bash

* Then update Ruby to the 2.2.0 or higer version 

        $ rvm install 2.2.0

* Choose ^2.2.0 as the default Ruby for RVM

        $ rvm --default use 2.2.0

* Download and install [*Node.JS*](http://nodejs.org/) **v0.10.33**.

* With this done, you have to install the following Gem:
    
        gem install bundler

* Then you can run the following command to install ruby dependencies:
    
        $ bundle install

* Then you need to install the node dependencies, so run:

        $ npm install -g gulp && npm install -g bower && npm install

* Then install kss node version:

        npm install --global kss@1.3.0

* After installing all ruby and nodes dependencies, you should update the front-end dependencies, so run:

        $ bower install
        
    ...and you're done. 
    
### How to run it

To see your project running please run:

    $ gulp

Compiling styleguides 
    
    $ kss-node assets/_scss _site/styleguide --sass --template _template-kss 

[*Kss documentation*](http://warpspire.com/kss/syntax/)


### Deploy to github pages


We have created a rake task to build the styleguide locally.

    $ rake stylekyll:kss

We have created a rake task to deploy the templates and the styleguide to github.

    $ rake stylekyll:publish


Thanks
