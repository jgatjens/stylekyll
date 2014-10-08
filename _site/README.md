# {{ site.name }}

## Description

Project created with [*jekyll-gulp-sass-browser-sync*](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync).

And edited to add [*Bootstrap Sass

*](https://github.com/twbs/bootstrap-sass) 

## Dependencies

In order to work with the project, you will need to follow this instructions:

* Download and install [*Xcode command line tools *](https://developer.apple.com/xcode/)

    Install Xcode command line tools (you need to have a paid iOS developer account to be able to download it).

* Download and install [*RVM*](https://rvm.io/rvm/install)

    CM network blocks some ports, you will need to run this outside of the CM network for it to work. If you're a THI dev, you can do this joining the THIFirstClass wireless network.

* Run the following command to install it:

        $ \curl -sSL https://get.rvm.io | bash

* Then update Ruby to the 1.9.7 version 

        $ rvm install 2.0.0

    If you get the following error:

        Checking requirements for osx.

        Installing macports...............................user password required for 'make install':

        ........................

        -bash: port: command not found

    Please make sure you have the following line on your .bash_profile:

        $ export PATH="/opt/local/bin:$PATH"

    If you don't you can run the following commands:

        $ nano ~/.bash_profile

    Add the following line:

        $ export PATH="/opt/local/bin:$PATH"

    Then hit control + x, hit Y, hit enter.

    Then run:

        $ source ~/.bash_profile

    And try again.

* Choose  2.0.0 as the default Ruby for RVM

        $ rvm --default use 2.0.0

* Download and install [*Node.JS*](http://nodejs.org/)

* With this done, you have to install the following Gem:
    
        gem install bundler

* Then you can run the following command to install the Gem dependencies:
    
        $ bundle install

* After installing all the gems, you should update the bower devependencies, please run:

        $ bower install

* Then you need to install the gulp dependencies, please run:

        $ npm install

...and you're done. To see you're project running please run:

        $ gulp
