import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import Diagram from './components/Diagram.vue';
import Screenshot from './components/Screenshot.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Diagram', Diagram);
    app.component('Screenshot', Screenshot);
  },
} satisfies Theme;
