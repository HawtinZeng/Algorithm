// vdom
/**
 * arguements: vnode
 * {
 *  tag: string or object,
 *  props:{
 *    class = 'hello'
 *  },
 *  children: [
 *    vnode1, vnode2, vnode3
 *  ]
 * }
 * return: html
 */

function vdomRender(vnode) {
  const { tag, props, children } = vnode
  if (typeof tag === 'string') {
    const el = document.createElement(tag)
    for (const k in props) {
      el.setAttribute(k, props[k])
    }
    // children???
    (children || []).forEach((vn) => {
      el.appendChild(vdomRender(vn))
    })
    return el
  } else if (typeof tag.name === 'function') {
    // get component vnodes
    const ins = new tag.name(props)
    const vnodeCom = ins.render(ins.props)
    // render these vnodes
    const currentEl = vdomRender(vnodeCom)
    // currentEl.appendChild()
    (children || []).forEach((vn) => {
      currentEl.appendChild(vdomRender(vn))
    })
    return currentEl
  }
}
const testVnode = {
  tag: 'p',
  props: {
    class:'hello',
    style: "color: red;"
  },
  children: [
    {
      tag: 'a',
      props: {},
      children: []
    },
    {
      tag: 's',
      props: {},
      children: []
    }
  ]
}
vdomRender(testVnode)