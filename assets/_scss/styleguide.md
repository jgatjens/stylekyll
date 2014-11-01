# Stylekyll  

Welcome to Stylekyll CSS Styleguide staring point for developers.

## Organization

The styleguide should be organized by numbered sections. These sections can go as deep as you like. Every component should have a numbered section to refer to. For example:

    1. Navbar
    2. Buttons
      2.1 Form Buttons
        2.1.1 Generic form button
      2.2 Social buttons
    3. Carousel
      3.1 Carousel type 1
    4.Dropdown
    5.Modals

We are using [*bootstrap-sass*](https://github.com/twbs/bootstrap-sass) as starting point to speed up the process of building the styleguide as we can see bootstrap already has some components we need. 

## Theme

We are only including the components we need and not the all bootstrap framework. After including a component we create a file with the same name as the one that we just included and override the styles as needed.

After making a new file for overriding a new component please check Bootstrap [*_variables*](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss). You can change the styles for almost all the components by overriding a variable to the theme **_variables.scss** file.

Please try to follow these standars as possible. [*Github coding style*](https://github.com/styleguide/css).

## Dependecies 

We are using [*bower*](https://github.com/bower/bower) to manage all the frontend dependecies. You can find a list of dependencies in the *bower.json* file.
Whenever you need an external component please use bower to include it as follow.
    
    $ bower install jquery --save

### Kss-node

We are using a [*github template*](https://github.com/1026/kss-node-template-such-as-github) to generate the styleguide. 
If you are new to Kss please read it's [*documentation*](http://warpspire.com/kss/syntax/).


#### How to add documentation ?

KSS’s documentation syntax is human readable, but just structured enough to be machine parsable. And it takes less than 5 minutes to [*learn the syntax*](http://warpspire.com/kss/syntax/).



#### How to generate the styleguide ?

*We are using a custom template to make the generated styleguide look better. You can find the template in **_template-kss** folder.*

Compiling the styleguide
    
    $ kss-node public/_scss _site/styleguide --sass --template _template-kss 
