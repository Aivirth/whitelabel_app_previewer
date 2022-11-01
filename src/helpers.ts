const loginGradientBg = (rgb: string, bgImage: string) => {
  let backgroundColorGradient = ''

  if (rgb.length > 0) {
    backgroundColorGradient = `linear-gradient( rgba(${rgb} , 0.9), rgba(${rgb} , 0.7) ,  rgba(${rgb} , 0.5) ) ,`
  }

  return `${backgroundColorGradient} url(${bgImage})`
}

function debounce(
  func: (args: IArguments) => any,
  wait: number,
  immediate: boolean = false,
) {
  let timeout: number | undefined

  return function executedFunction(this: any) {
    const context: any = this
    const args = arguments

    const later = () => {
      timeout = undefined
      if (!immediate) {
        func.apply(context, [args])
      }
    }

    const callNow: boolean = immediate && !timeout

    clearTimeout(timeout)

    timeout = window.setTimeout(later, wait)

    console.log(callNow, timeout)

    if (callNow) {
      func.apply(context, [args])
    }
  }
}
function throttle(fn: (args: any[]) => any, wait: number) {
  let shouldWait = false

  return function () {
    if (!shouldWait) {
      fn([arguments])
      shouldWait = true
      setTimeout(() => (shouldWait = false), wait)
    }
  }
}

function navIsSmall(property: string, trueCss: string, falseCss: string) {
  return property === 'small' ? trueCss : falseCss
}

export { loginGradientBg, debounce, throttle, navIsSmall }
