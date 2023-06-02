import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiViewDashboardOutline, mdiCast, mdiMagnify, mdiOpenInNew, mdiHelpCircleOutline, mdiLogout   } from '@mdi/js'

// https://pictogrammers.github.io/@mdi/font/3.6.95/
// https://ionicframework.com/docs/vue/quickstart

// https://learnvue.co/articles/creating-vue-3-plugins

export default {
    install : (app, options) =>{
        app.component("svg-icon", SvgIcon );
        app.config.globalProperties.$iconAccount = mdiAccount
        app.config.globalProperties.$iconDashboard = mdiViewDashboardOutline
        app.config.globalProperties.$iconCast = mdiCast
        app.config.globalProperties.$iconMagnify = mdiMagnify
        app.config.globalProperties.$iconOpenInNew = mdiOpenInNew
        app.config.globalProperties.$iconHelp = mdiHelpCircleOutline
        app.config.globalProperties.$iconLogout  = mdiLogout 
        // app.directive('pathss', (el, binding) => {
        //     // SvgIcon.props.path = binding.pathss
        //     // console.log(el.querySelector('path'), binding.value)
        //     el.querySelector('path').setAttribute('d', binding.value) 
        //     // inserted: ()=>{
        //     // }
        // })
        
        // app.mixin({
        //     data(){
        //         return{
        //             paths:[mdiAccount]
        //         }
        //     },
        //     created(el, binding){
        //         console.log("왜::: ",el, binding)
        //         SvgIcon.props.path = mdiAccount
        //     }
        // })
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $iconAccount: string;
        $iconDashboard: string;
        $iconCast: string;
        $iconMagnify : string;
        $iconOpenInNew : string;
        $iconHelp : string;
        $iconLogout  : string;
    }
}