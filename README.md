<div style="text-align:center">

# <img height="64" alt="Circulider" title="Circulider" src="assets/logo.png" />
![Static Badge](https://img.shields.io/badge/Written%20in-Typescript-green)
![Static Badge](https://img.shields.io/badge/Browser%20Support-Full-blue)
![Static Badge](https://img.shields.io/badge/Object%20Oriented-grey)

</div>

You can use this plugin in every js/ts project, and it will work in every browser (even the old ones).

> A circular slider written in Typescript. Circulider!

## Example

![Circulider](/assets/circulider.gif)

## Usage

1. NPM

Run this command and import the Circulider class:

```
npm install circular-slider
```

Then:

```javascript
import Circulider from "circular-slider";

const circuliderElement = document.querySelector("#circulider");
const circulider = new Circulider(circuliderElement);
```

2. CDN

```html
<script src="https://github.com/arshaan-abh/circulider/dist/circulider.js"></script>
<div id="circulider">
    <div><img src="slides/1.jpg" alt="Slide 1"></div>
    <div><img src="slides/2.jpg" alt="Slide 2"></div>
    <div><img src="slides/3.jpg" alt="Slide 3"></div>
</div>
<script>
    const circuliderElement = document.querySelector("#circulider");
    const circulider = new Circulider(circuliderElement);
</script>
```

- For Typescript people

You can use the main.js file in the "src" directory. Note that you'll need the main.css file too.

### Please see the "example" directory in this repository to see how its used.

## Support

- Feel free to contact me: arshaan.abh@gmail.com

## Roadmap

I have some ideas to make this plugin better more smooth. Some of them are:

1. There is no need to calculate the next positions (of the little circles) in each frame. We can do it every .5s and use "transition: transform .5s linear" to make the .5s gap disappear.

2. The code needs a little bit of cleaning too.

3. This plugin lacks options like turning clockwise or counterclockwise. So, we can fix that.

### There are other stuff to be done too. And since I'm a bit busy, I'll be happy to see some of you contact me about this.

## License

[MIT](https://choosealicense.com/licenses/mit/)

<div style="text-align:center"><img height="64" alt="Circulider" title="Circulider" src="assets/circulider-logo.png" /></div>
