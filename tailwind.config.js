/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          // 'yellow': '#F1CA0F',
          // 'blue': '#149BFE',
          // 'orange100': '#FFDAB4',
          // 'orange200': '#FFCB9A',
          // 'orange300': '#FFB365',
          // 'red100': '#FA6427',
          // 'red200': '#FF4D00',
          // 'cyan': '#116466',
          // 'purple': '#CC99FF',
          // 'green100': '#D1E8E2',
          // 'green200': '#21FFC5',
          // 'green300': '#69E147',
          'yellow': '#856C2D',
          'yellow100': '#766210',
          'yellow200': '#F1CA0F',
          'green': '#4F6947',
          'green100': '#385331',
          'blue': '#477880',
          'blue100': '#204C71',
          'orange': '#88522E',
          'red': '#813731',
          'pink': '#6D3265',
          'purple': '#483F60',
          'black100': '#1D1D1D',
          'black200': '#212121',
          'black': '#121212'
        }
      },
      backgroundImage: {
        'tech': "url('@/assets/images/bg.jpg')",
        'sidebar': "url('@/assets/images/sidebar.jpg')",
        'tree': "url('@/assets/images/tree.jpg')",
      }
    }
  }
}
