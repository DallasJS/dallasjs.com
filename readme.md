# Welcome to the DallasJS website!

### Contributing

The stack is as follows:

Server

- node.js
- express

Client

- requirejs
- canjs
- hasher
- hoganjs
- lessjs
- jQuery

Code configuration(eg: spaces vs tabs) is outlined in .editorconfig

The wireframes folder contains visual descriptions of new pages, widgets or services we will need for this project.

## 8/20/13

Server notes:

- We don't currently have any services setup in this project. We'll need to abstract the meetup.com API into a set of local services, such as: /meetups, /photos, /sponsors, etc.

- Express will be used to provide a restful layer to the client application, however all views will be rendered client side(thin server architecture).

- Parent folder for all node code should be /src

Client notes:

- Parent folder for all client code is /static

- RequireJS configuration and starting point is already set(index.html is the main application). Each new widget should reside in it's own folder, nested within /static/components.

- The Events widget(started) and Meetup model is setup currently as an example and starting point. Services do not need to exist to test widgets, just be sure to require can/util/fixture to mock up services. Feel free to create a test page within each widget's subfolder to test the widget apart from the main application.

- We'll be using HoganJS to power our mustache views. View the events widget to see an example.

- Don't worry about Hasher just yet, but we'll be using that for our routing.

- Read documentation for CanJS, RequireJS and HoganJS if needed!
