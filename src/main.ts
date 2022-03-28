import { createApp } from 'vue'
import App from './App'
import router from './router';
import 'element-plus/dist/index.css'

import {eleComponents,elePlugins} from './components/element';

const app = createApp(App)
eleComponents.forEach(component => {
    console.log(component);
    
    app.component(component.name,component)
})
elePlugins.forEach(plugin => {
    app.use(plugin)
})
app.use(router)
app.mount('#app')
