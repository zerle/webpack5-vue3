import { createApp } from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './assets/css/index.scss'
import { ElButton, ElSelect } from 'element-plus';

const app = createApp(App)
app.use(store).use(router)

const Elcomponents = [
  ElButton,
  ElSelect
]

Elcomponents.forEach(component => {
  app.use(component)
})

app.mount('#app')