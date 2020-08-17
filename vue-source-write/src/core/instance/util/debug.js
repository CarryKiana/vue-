/* @flow */

import config from '../config'
import { noop } from 'shared/util'

export let warn = noop
export let tip = noop
export let generateComponentTrace = (noop: any) // work around flow check
export let formatComponentName = (noop: any)

if (process.env.NODE_ENV !== 'production') {
    const hasConsole = typeof console !== 'undefined'
    const classifyRE = /(?:^|[-_])(\w)/g
    const classify = str => str
    .replace(classifyRE, c => c.toUpperCase())
    .replace(/[-_]/g, '')
    
    warn = (msg, vm) => {
        const trace = vm ? generateComponentTrace(vm) : ''

        if (config.warnHandler) {
            config
        }
    }
}