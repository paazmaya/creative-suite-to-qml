# CS2QML - Adobe Creative Suite to Qt QML

[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/creative-suite-to-qml/index?flat)](https://github.com/igrigorik/ga-beacon)

Scripts for exporting things from different Adobe Creative Suite programs to Qt Quick prototypes.

* Adobe Creative Suite http://www.adobe.com/products/creativesuite.html
* Qt Project http://qt.io/

## How come?

Pretty often designers tend to work with tools such as Photoshop, Illustrator,
After Effects and other similar software while creating User Interfaces and User Interactions.

Most of the time these would more properly communicated via working prototype that behaves
like the final product. This is where QML comes along.

The scripts collected to this repository are to be used in this work flow.

## Before getting started

Please note that recent versions of Adobe tools, such as After Effects for example,
require to change certain settings in order to allow scripts such as found in this project,
to write any files. The given setting can be found from:

```
Preferences > General > Allow scripts to write to files and access network
```

## Status

The following scripts, JavaScript with `jsx` extension, are available:

* After Effects - transitions
* Photoshop (from http://qt.gitorious.org/qt-labs/photoshop-qmlexporter, where no changes since 16th Dec 2010)

It would be nice to have the following:

* Illustrator
* Flash Catalyst
* InDesign
