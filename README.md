# Email templates

Requires Grunt and NPM.

Is built upon [grunt-email-templates](https://github.com/ertrzyiks/grunt-email-templates) which uses [node-email-templates](https://github.com/niftylettuce/node-email-templates) for email templating and also [juice](https://github.com/Automattic/juice) to inline CSS.

## To use

In the root of the project run
```command
    grunt             // runs email_templates which is used to combine the css and html together to create a template.
```

## Directory structure

Node email templates is expecting the directory structure to follow the pattern
```
src/templates/<campaign name>/html.ejs (or any templating engine of your choice that is supported by node-email-templates)
src/templates/<campaign name>/style.css (optional)
src/templates/<campaign name>/text.txt (optional)
```
The template is then outputted into the target directory following the naming convention followed with the directory structure.

