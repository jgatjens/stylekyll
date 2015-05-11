# Rquire jekyll to compile the site.
require "jekyll"

# Github pages publishing.
namespace :task do
  #
  # Because we are using 3rd party plugins for jekyll to manage the asset pipeline
  # and suchlike we are unable to just branch the code, we have to process the site
  # localy before pushing it to the branch to publish.
  #
  # We built this little rake task to help make that a little bit eaiser.
  #

  # Usaage:
  task :build do
    desc "Build site"
    # Compile the Jekyll site using the config.
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "config" => "_config.yml"
    })).process

    system "gulp styles" # compile sass

    system "gulp svg" # Generate svg sprite symbols

    system "kss-node assets/_scss _site/styleguide --sass --template _template-kss" # compile styleguide

    # Done.
  end

  task :kss do
    desc "Create styleguide localy"
    system "kss-node assets/_scss _site/styleguide --sass --template _template-kss" # compile styleguide
  end

end
