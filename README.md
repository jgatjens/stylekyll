# CafeBritt Styleguide 
--------------

## Description

Template created with [*jekyll*](http://jekyllrb.com/),
[*kss-node*](https://github.com/kss-node/kss-node),
[*github-styleguide-template*](https://github.com/1026/kss-node-template-such-as-github) and 
[*gulp*](http://gulpjs.com).

## Dependencies

In order to run stylekyll, you will need the following tools:
- [*Ruby*](https://www.ruby-lang.org/en/).
- [*Nodejs*](http://nodejs.org/).
- [*Xcode command line tools *](https://developer.apple.com/xcode/). (if you are on Mac)


## Instructions:

* Download and install [*Xcode command line tools *](https://developer.apple.com/xcode/). (if you are on Mac)

* Download and install [*RVM*](https://rvm.io/rvm/install) (Ruby version Manager is optional)

    Run the following command to install rvm it:

        $ \curl -sSL https://get.rvm.io | bash

* Then update Ruby to the 2.0.0 or higer version 

        $ rvm install 2.0.0

* Choose ^2.0.0 as the default Ruby for RVM

        $ rvm --default use 2.0.0

* Download and install [*Node.JS*](http://nodejs.org/)

* With this done, you have to install the following Gem:
    
        gem install bundler

* Then you can run the following command to install the Gem dependencies:
    
        $ bundle install

* After installing all the gems, you should update the bower devependencies, please run:

        $ bower install

* Then you need to install the node dependencies, please run:

        $ npm install

    ...and you're done. 
    
### How to run it

To see your project running please run:

    $ gulp serve

Compiling styleguides 
    
    $ kss-node public/_scss _site/styleguide --sass --template _template-kss 

[*Kss documentation*](http://warpspire.com/kss/syntax/)


### Deploy to github pages

We have created a rake task to deploy the templates and the styleguide to gitgub.

    $ rake stylekyll:publish


Thanks

