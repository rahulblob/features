<a href="https://www.buymeacoffee.com/coffeeforahul"><img style="pointer-events:none;cursor:default;" src="https://img.buymeacoffee.com/button-api/?text=Buy Me A Coffee&emoji=&button_colour=5F7FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00"/></a>

# What is Features?
a css / js precoded with enreach features, every week we update and add something new <a href="https://features.rahul.eu.org">See Documentations</a>!
> ⚠️ don't forget to change the cdn version according to <a href="https://github.com/rahulblob/features/tree/main/js">JavaScript</a>/<a href="https://github.com/rahulblob/features/tree/main/css">CSS</a> file name to get updated features!

# Import css/js

Add this ```JavaScript``` before ```</body>```
```html
<script src="https://cdn.jsdelivr.net/gh/rahulblob/features/js/script.v1.js"></script>
```

Add this ```CSS``` before ```</head>```
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rahulblob/features/css/style.v2.3.css"/>
```

# Toast Notification
```html free!```<br>
To Trigger Toast Using ```Button```:
```html
<button onClick="toast('message here!')">toast button</button>
```
or Use It In a ```Function```:
```js
function myfunction(){
toast("message")
}
```

# Progress Bar
> ⚠️ might buggy in some sites.

paste this code in your ```<header>``` tag:
```html
<div class='progress' id='PreLoaderBar'>
        <div class='indeterminate'/>
    </div>
```
# Popup modal
```html free!```<br>
To trigger popup using ```button``` use:
```html
<button onClick='popupTrigger("message here!")'>popup button</button>
```
or trigger using in a ```function```:
```js
function myfunction(){
popupTrigger("message")
}
```
# loading rotation svg
use this code to display:
```html
<div class="rota"></div>
```

to change ```colour``` use:

```css
.rota{
border:3px solid red;
border-bottom:3px solid rgba(255,255,255,.0);
}
```

change ```red``` to any colour you want!

> ⚠️ don't forget to add ```border-bottom:3px solid rgba(255,255,255,.0);``` in css if you changing colour or might it be buggy.

# Tooltip
tooltip ```up```:
```html
  <div>
    <span tooltip="I'm up above it!">Up</span>
  </div>
```

tooltip ```left```:

```html
  <div>
    <span tooltip="Slide to the left" flow="left">Left</span>
    <span tooltip="Slide to the right" flow="right">Right</span>
  </div>
```

tooltip ```down```:

```html
  <div>
    <span tooltip="Get Down." flow="down">Down</span>
  </div>
```

> ℹ️ flow shows ```direction``` of tooltip, ```tooltip=""``` shows content whenever hover.

# Supporters
<a href="https://www.buymeacoffee.com/coffeeforahul"><img style="pointer-events:none;cursor:default;" src="https://img.buymeacoffee.com/button-api/?text=Total Coffees&emoji=&slug=coffeeforahul&button_colour=5F7FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00"/></a>
