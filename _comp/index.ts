import rehypeComponents from 'npm:rehype-components';
import {h} from 'https://esm.sh/hastscript@9?pin=v135';

const wrapIt = (props, children) => {
  return h(`div.wikkel ${props.className.join(' ')}`, [...children]);
}

//wrap two block-level children side by side.
const sideBySide = (props, children) => {
  return h(`div.wikkel naast-elkaar ${props.className ? props.className.join(' ') : ''}`, [...children]);
}

const imgFloatRight = (props, children) => {
  return h(`img.imgfloatright ${props.className ? props.className.join(' ') : ''}`, {src: props.src});
}
const buttonAlone = (props, children) => {
  return h(`button.button-alone ${props.className ? props.className.join(' ') : ''}`, [...children]);
}

const figFloatRight = (props, children) => {
  return h(`figure.imgfloatright ${props.className ? props.className.join(' ') : ''}`, [
    h(`img`, {src: props.src}),
    h(`figcaption`, [children[0].value])
  ]);
}

const nav = (props, children) => {
  return h(`div.wikkel wikkel-nav ${props.className ? props.className.join(' ') : ''}`, [
    ...children
  ]);
}
const note = (props, children) => {
  return h(`div.wikkel wikkel-note ${props.className ? props.className.join(' ') : ''}`, [
    ...children
  ]);
}


//the first set is a 'wrapper' that defines blocks with certain classnames.
//This is reusable as a
export default function componentIze() {
  return [rehypeComponents, {
    components: {
      'wikkel': wrapIt,
      'wikkel-side-by-side': sideBySide,
      'wikkel-img-right': imgFloatRight,
      'wikkel-fig-right': figFloatRight,
      'wikkel-button-alone': buttonAlone,
      'wikkel-nav': nav,
      'wikkel-note': note
    }
  }]
};
