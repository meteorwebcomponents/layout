<!--
  Title: Meteor Webcomponents Layout for Meteor Polymer integration
  Description: Layout manager for polymer/webcomponents in meteor.
  -->
# Meteor Webcomponents Layout.

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/aruntk/meteorwebcomponents?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Donate](https://dantheman827.github.io/images/donate-button.svg)](https://www.paypal.me/arunkumartk)

## Installation

### Using meteor package. Meteor 1.3+. Depends on [synthesis](https://github.com/meteorwebcomponents/synthesis)

```sh
meteor add mwc:layout
```

### Using Bower

```sh
bower install mwc-layout --save
```

```html
<link rel="import" href="bower_components/mwc-layout/mwc-layout.html">
```

> Note. Version 1.1.12 is for meteor 1.3+ . For meteor 1.2 use mwc-layout bower components



## Usage


index.html

```html
<head>
  <title>Synthesis</title>
</head>

<body class="fullbleed">

  <mwc-layout id="demo-layout">
    <div region="main"></div>
  </mwc-layout>

</body>
```
Define a polymer element

```html
<dom-module id="test-element">
  <template>
        name : {{name}}
  </template>
</dom-module>
<script>
Polymer({
  is:"test-element",
  properties:{
    name:{
      type:String,
      value:"mwc"
    }
  }

})
</script>
```

Now use  

```js

mwcLayout.render(layout, opt, rerender);
// layout[String]
// opt[Object] one-level deep
// rerender[Boolean]

```

```js 
mwcLayout.render("demo-layout",{"main":"test-element"});
```

#### forceRender 

In mwc:layout we dont re render the layout unless the new layout is not equal to the current layout or forceRender argument is set. This is to prevent unwanted rerendering while changing routes(even if you change a param/queryparam the route gets rerun so does the render function written inside FlowRouter action). forceRender comes in handy when you have to change the rendering while keeping the current layout. 

```html
<!-- client/main.html -->
...
<mwc-layout id="demo-landing">
      <div region="header"></div>
      <div region="main"></div>
</mwc-layout>
...
```

```js
// imports/startup/client/router.js
...
  action:function(params,queryParams){
    mwcLayout.render("demo-landing",{"main":"test-layout1","header":"test-header"});
  }
...

```

Now if you try `mwcLayout.render("demo-landing",{"main":"test-layout2","header":"test-header"})` from console it wont work since layout is not changed and forceRender is not set.

This works-> `mwcLayout.render("demo-landing",{"main":"test-layout","header":"test-header"},true);`


## Links

Layout Manager for [Meteor](https://www.meteor.com/) + [Polymer - 1.0](https://www.polymer-project.org/) 

Advanced Example - https://github.com/HedCET/TorrentAlert



