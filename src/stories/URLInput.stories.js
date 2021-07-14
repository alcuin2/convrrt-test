import URLInput from '../components/URLInput.vue'

export default {
  title: 'Custom URL box',
}


export const withJSX = () => ({
  render() {
    return <URLInput />;
  }
})
