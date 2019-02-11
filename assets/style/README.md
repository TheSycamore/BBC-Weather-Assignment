#Sass bootstrap entry point.
This document attempts to describe each of the sass directories and what they
should contain.



## sass/vendor/*
CSS or Sass from third-party projects
Included first so style can be overwritten.
Overwrite vendor styles inside the \_vendor-extensions.scss file.
Not good to ever overwrite anything directly from a vendor.

## sass/base/*
The base folder holds boilerplate content.
It holds the global fundamental styles every page of your site should
receive.

## sass/helpers/*
Gathers all genreic Sass tools and helpers used across the project.
Functions as a means of keeping code DRY and also more readable/clear.

## sass/layout/*
Contains all the majors sections which make up the overall layout of the site.
Sets the general styles for the major/macro sections which make up the layout.
This includes: header, navigation, footer, forms etc.
The the grid system used to build the layout also belongs here.

## sass/components/*
The components folder styles all your minor layout sections.
Any small elements that require styling that don't fit in the layouts
folder belong here. This incluedes styles for:
   buttons and lists and similar page components / elements.
There are usually a lot of files in components since your site is should
be mostly composed of tiny modules.

## sass/pages/*
Contains page specific styles.
These files could be called on their own to avoid merging them with the
others in the resulting stylesheet, thus reducing unused code in
bundled css output file.

## sass/themes/*
Holds files that create project specific themes.

## sass/other/*
Contains miscellaneous styles that don't fit in any of the above. Also contains \_shame.scss which will have bad practice code, or code that will be review at a later date.
