/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */ ;(function() {
  'use strict'
  var f,
    g = []
  function l(a) {
    g.push(a)
    1 == g.length && f()
  }
  function m() {
    for (; g.length; ) g[0](), g.shift()
  }
  f = function() {
    setTimeout(m)
  }
  function n(a) {
    this.a = p
    this.b = void 0
    this.f = []
    var b = this
    try {
      a(
        function(a) {
          q(b, a)
        },
        function(a) {
          r(b, a)
        }
      )
    } catch (c) {
      r(b, c)
    }
  }
  var p = 2
  function t(a) {
    return new n(function(b, c) {
      c(a)
    })
  }
  function u(a) {
    return new n(function(b) {
      b(a)
    })
  }
  function q(a, b) {
    if (a.a == p) {
      if (b == a) throw new TypeError()
      var c = !1
      try {
        var d = b && b.then
        if (null != b && 'object' == typeof b && 'function' == typeof d) {
          d.call(
            b,
            function(b) {
              c || q(a, b)
              c = !0
            },
            function(b) {
              c || r(a, b)
              c = !0
            }
          )
          return
        }
      } catch (e) {
        c || r(a, e)
        return
      }
      a.a = 0
      a.b = b
      v(a)
    }
  }
  function r(a, b) {
    if (a.a == p) {
      if (b == a) throw new TypeError()
      a.a = 1
      a.b = b
      v(a)
    }
  }
  function v(a) {
    l(function() {
      if (a.a != p)
        for (; a.f.length; ) {
          var b = a.f.shift(),
            c = b[0],
            d = b[1],
            e = b[2],
            b = b[3]
          try {
            0 == a.a
              ? 'function' == typeof c
                ? e(c.call(void 0, a.b))
                : e(a.b)
              : 1 == a.a &&
                ('function' == typeof d ? e(d.call(void 0, a.b)) : b(a.b))
          } catch (h) {
            b(h)
          }
        }
    })
  }
  n.prototype.g = function(a) {
    return this.c(void 0, a)
  }
  n.prototype.c = function(a, b) {
    var c = this
    return new n(function(d, e) {
      c.f.push([a, b, d, e])
      v(c)
    })
  }
  function w(a) {
    return new n(function(b, c) {
      function d(c) {
        return function(d) {
          h[c] = d
          e += 1
          e == a.length && b(h)
        }
      }
      var e = 0,
        h = []
      0 == a.length && b(h)
      for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c)
    })
  }
  function x(a) {
    return new n(function(b, c) {
      for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c)
    })
  }
  window.Promise ||
    ((window.Promise = n),
    (window.Promise.resolve = u),
    (window.Promise.reject = t),
    (window.Promise.race = x),
    (window.Promise.all = w),
    (window.Promise.prototype.then = n.prototype.c),
    (window.Promise.prototype['catch'] = n.prototype.g))
})()
;(function() {
  function l(a, b) {
    document.addEventListener
      ? a.addEventListener('scroll', b, !1)
      : a.attachEvent('scroll', b)
  }
  function m(a) {
    document.body
      ? a()
      : document.addEventListener
        ? document.addEventListener('DOMContentLoaded', function c() {
            document.removeEventListener('DOMContentLoaded', c)
            a()
          })
        : document.attachEvent('onreadystatechange', function k() {
            if (
              'interactive' == document.readyState ||
              'complete' == document.readyState
            )
              document.detachEvent('onreadystatechange', k), a()
          })
  }
  function r(a) {
    this.a = document.createElement('div')
    this.a.setAttribute('aria-hidden', 'true')
    this.a.appendChild(document.createTextNode(a))
    this.b = document.createElement('span')
    this.c = document.createElement('span')
    this.h = document.createElement('span')
    this.f = document.createElement('span')
    this.g = -1
    this.b.style.cssText =
      'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'
    this.c.style.cssText =
      'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'
    this.f.style.cssText =
      'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'
    this.h.style.cssText =
      'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;'
    this.b.appendChild(this.h)
    this.c.appendChild(this.f)
    this.a.appendChild(this.b)
    this.a.appendChild(this.c)
  }
  function t(a, b) {
    a.a.style.cssText =
      'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' +
      b +
      ';'
  }
  function y(a) {
    var b = a.a.offsetWidth,
      c = b + 100
    a.f.style.width = c + 'px'
    a.c.scrollLeft = c
    a.b.scrollLeft = a.b.scrollWidth + 100
    return a.g !== b ? ((a.g = b), !0) : !1
  }
  function z(a, b) {
    function c() {
      var a = k
      y(a) && a.a.parentNode && b(a.g)
    }
    var k = a
    l(a.b, c)
    l(a.c, c)
    y(a)
  }
  function A(a, b) {
    var c = b || {}
    this.family = a
    this.style = c.style || 'normal'
    this.weight = c.weight || 'normal'
    this.stretch = c.stretch || 'normal'
  }
  var B = null,
    C = null,
    E = null,
    F = null
  function G() {
    if (null === C)
      if (J() && /Apple/.test(window.navigator.vendor)) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
          window.navigator.userAgent
        )
        C = !!a && 603 > parseInt(a[1], 10)
      } else C = !1
    return C
  }
  function J() {
    null === F && (F = !!document.fonts)
    return F
  }
  function K() {
    if (null === E) {
      var a = document.createElement('div')
      try {
        a.style.font = 'condensed 100px sans-serif'
      } catch (b) {}
      E = '' !== a.style.font
    }
    return E
  }
  function L(a, b) {
    return [a.style, a.weight, K() ? a.stretch : '', '100px', b].join(' ')
  }
  A.prototype.load = function(a, b) {
    var c = this,
      k = a || 'BESbswy',
      q = 0,
      D = b || 3e3,
      H = new Date().getTime()
    return new Promise(function(a, b) {
      if (J() && !G()) {
        var M = new Promise(function(a, b) {
            function e() {
              new Date().getTime() - H >= D
                ? b()
                : document.fonts.load(L(c, '"' + c.family + '"'), k).then(
                    function(c) {
                      1 <= c.length ? a() : setTimeout(e, 25)
                    },
                    function() {
                      b()
                    }
                  )
            }
            e()
          }),
          N = new Promise(function(a, c) {
            q = setTimeout(c, D)
          })
        Promise.race([N, M]).then(
          function() {
            clearTimeout(q)
            a(c)
          },
          function() {
            b(c)
          }
        )
      } else
        m(function() {
          function u() {
            var b
            if (
              (b =
                (-1 != f && -1 != g) ||
                (-1 != f && -1 != h) ||
                (-1 != g && -1 != h))
            )
              (b = f != g && f != h && g != h) ||
                (null === B &&
                  ((b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                    window.navigator.userAgent
                  )),
                  (B =
                    !!b &&
                    (536 > parseInt(b[1], 10) ||
                      (536 === parseInt(b[1], 10) &&
                        11 >= parseInt(b[2], 10))))),
                (b =
                  B &&
                  ((f == v && g == v && h == v) ||
                    (f == w && g == w && h == w) ||
                    (f == x && g == x && h == x)))),
                (b = !b)
            b &&
              (d.parentNode && d.parentNode.removeChild(d),
              clearTimeout(q),
              a(c))
          }
          function I() {
            if (new Date().getTime() - H >= D)
              d.parentNode && d.parentNode.removeChild(d), b(c)
            else {
              var a = document.hidden
              if (!0 === a || void 0 === a)
                (f = e.a.offsetWidth),
                  (g = n.a.offsetWidth),
                  (h = p.a.offsetWidth),
                  u()
              q = setTimeout(I, 50)
            }
          }
          var e = new r(k),
            n = new r(k),
            p = new r(k),
            f = -1,
            g = -1,
            h = -1,
            v = -1,
            w = -1,
            x = -1,
            d = document.createElement('div')
          d.dir = 'ltr'
          t(e, L(c, 'sans-serif'))
          t(n, L(c, 'serif'))
          t(p, L(c, 'monospace'))
          d.appendChild(e.a)
          d.appendChild(n.a)
          d.appendChild(p.a)
          document.body.appendChild(d)
          v = e.a.offsetWidth
          w = n.a.offsetWidth
          x = p.a.offsetWidth
          I()
          z(e, function(a) {
            f = a
            u()
          })
          t(e, L(c, '"' + c.family + '",sans-serif'))
          z(n, function(a) {
            g = a
            u()
          })
          t(n, L(c, '"' + c.family + '",serif'))
          z(p, function(a) {
            h = a
            u()
          })
          t(p, L(c, '"' + c.family + '",monospace'))
        })
    })
  }
  'object' === typeof module
    ? (module.exports = A)
    : ((window.FontFaceObserver = A),
      (window.FontFaceObserver.prototype.load = A.prototype.load))
})()

//
//
// Appeltaart 🍰 is our take on removing the need of jQuery
//
// Making a tiny "jQuery", utility methods that will
// make up to the majority of the functionality we need
//
//
;(function(w) {
  // find an element within another element
  var find = function(selector) {
    if (this instanceof Element) {
      return this.querySelectorAll(selector)
    }
    return document.querySelectorAll(selector)
  }

  w.$$ = find

  //
  // Utility Methods
  //

  // Extend: https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
  var extend = function() {
    // Variables
    var extended = {}
    var deep = false
    var i = 0
    var length = arguments.length

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0]
      i++
    }

    // Merge the object into the extended object
    var merge = function(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (
            deep &&
            Object.prototype.toString.call(obj[prop]) === '[object Object]'
          ) {
            extended[prop] = extend(true, extended[prop], obj[prop])
          } else {
            extended[prop] = obj[prop]
          }
        }
      }
    }

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
      var obj = arguments[i]
      merge(obj)
    }

    return extended
  }

  find.extend = extend

  //
  // Serialize an object to a string
  // Custom, based on: https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
  //
  var serialize = function(obj, prefix) {
    var str = []
    Object.keys(obj).forEach(function(p) {
      var k = prefix ? prefix + '[' + p + ']' : p
      var v = obj[p]
      str.push(
        v !== null && typeof v === 'object'
          ? serialize(v, k)
          : encodeURIComponent(k) + '=' + encodeURIComponent(v)
      )
    })
    return str.join('&')
  }

  find.serialize = serialize

  //
  // Ajax request
  //
  var ajax = function(opts) {
    var defaults = {
      type: 'GET',
      url: '',
      data: null,
    }
    var options = extend(true, defaults, opts)

    // create the http request
    var xhr = new window.XMLHttpRequest()

    if (options.type == 'GET' && options.data) {
      options.url += serialize(options.data)
    } else if (options.type == 'POST' && options.data) {
      options.data = serialize(options.data)
    }

    xhr.open(options.type, options.url)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send(options.data)

    // deal with the response
    xhr.onreadystatechange = function() {
      var DONE = 4 // done
      var ERROR = 400 // error
      // var OK = 200 // success
      var responseContentType = this.getResponseHeader('content-type')
      var result = null

      if (xhr.readyState === DONE) {
        if (xhr.status < ERROR && options.success) {
          if (responseContentType == 'application/json') {
            result = JSON.parse(xhr.responseText)
          } else {
            result = xhr.responseText
          }
          options.success(result, xhr.status)
        } else if (options.error) {
          options.error(xhr.status, xhr.responseText)
        }
      }
    }

    return xhr
  }

  //
  //
  //
  find.ajax = ajax

  // Toggling a className
  // https://www.jamestease.co.uk/blether/add-remove-or-toggle-classes-using-vanilla-javascript
  var toggleClass = function(className) {
    var el = this
    el.classList.toggle(className)
    return this
  }

  var switchClass = function(from, to) {
    var el = this
    el.removeClass(from).addClass(to)
    return this
  }

  var on = function(ev, method) {
    this.addEventListener(ev, method)
    return this
  }

  var trigger = function(ev, data) {
    var event =
      ev == 'change' ? new w.Event(ev) : new w.CustomEvent(ev, { detail: data })
    this.dispatchEvent(event)
    return this
  }

  var off = function(ev, method) {
    this.removeEventListener(ev, method)
    return this
  }

  var hasClass = function(className) {
    var spacedClassName = ' ' + className + ' '
    var rep = ' ' + this.className + ' '.replace(/[\n\t]/g, ' ')
    return rep.indexOf(spacedClassName) > -1
  }

  // forEach method, could be shipped as part of an Object Literal/Module
  // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  var forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]) // passes back stuff we need
    }
  }

  var each = function(func) {
    func(0, this)
    return this
  }

  var attr = function(attribute, val) {
    if (typeof val == 'string' || typeof val == 'number') {
      return this.setAttribute(attribute, val)
    }
    return this.getAttribute(attribute)
  }

  var text = function(val) {
    if (val) {
      this.textContent = val
    }
    return this.textContent
  }

  var toggle = function() {
    var display = w.getComputedStyle(this).display
    if (display == 'none') {
      display = 'block'
    } else {
      display = 'none'
    }
    this.style.display = display
    return this
  }

  var addClass = function(className) {
    var classes = className.split(' ')
    var classesLen = classes.length
    for (var i = 0; i < classesLen; i++) {
      this.classList.add(classes[i])
    }
    return this
  }

  var removeClass = function(className) {
    var classes = className.split(' ')
    var classesLen = classes.length
    for (var i = 0; i < classesLen; i++) {
      this.classList.remove(classes[i])
    }
    return this
  }

  var removeAttr = function(attribute) {
    this.removeAttribute(attribute)
    return this
  }

  var append = function(child) {
    this.appendChild(child)
  }

  var css = function(attribute, value) {
    this.style[attribute] = value
    return this
  }

  var inDocument = function() {
    return document.body.contains(this)
  }

  var parent = function() {
    return this.parentElement
  }

  // var index = function() {
  //   var children = this.parentNode.childNodes
  //   var num = 0
  //   for (var i = 0; i < children.length; i++) {
  //     if (children[i] == this) return num
  //     if (children[i].nodeType == 1) num++
  //   }
  //   return -1
  // }
  var index = function(el) {
    var len = this.length || 0
    var ind = false
    var num = 0
    var children
    var i

    if (el) {
      for (i = 0; i < len; i++) {
        if (this[i] == el) {
          ind = i
        }
      }
    } else {
      children = this.parentNode.childNodes
      for (i = 0; i < children.length; i++) {
        if (children[i] == this) return num
        if (children[i].nodeType == 1) num++
      }
      return -1
    }

    return ind
  }

  var parents = function(selector) {
    var el = this
    do {
      el = el.parentElement
    } while (!el.hasClass(selector) && document.body !== el)
    return el
  }

  // based on https://stackoverflow.com/questions/11805955/how-to-get-the-distance-from-the-top-for-an-element
  var offset = function() {
    var element = this
    var xPosition = 0
    var yPosition = 0

    while (element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft
      yPosition += element.offsetTop - element.scrollTop + element.clientTop
      element = element.offsetParent
    }

    return { left: xPosition, top: yPosition }
  }

  var get = function(i) {
    var len = this.length
    var el = false
    if (typeof len == 'number' && i < len) {
      el = this[i]
    } else if (!len && i === 0) {
      el = this
    }
    return el
  }

  //
  // DOM ready
  //
  var ready = function(fn, context) {
    function onReady(event) {
      document.removeEventListener('DOMContentLoaded', onReady)
      fn.call(context, event)
    }

    function onReadyIe(event) {
      if (document.readyState === 'complete') {
        document.detachEvent('onreadystatechange', onReadyIe)
        fn.call(context, event)
      }
    }

    return (
      (document.addEventListener &&
        document.addEventListener('DOMContentLoaded', onReady)) ||
      (document.attachEvent &&
        document.attachEvent('onreadystatechange', onReadyIe))
    )
  }

  $$.ready = ready

  //
  // Element attach event & callback
  //
  Element.prototype.on = on

  NodeList.prototype.on = function(ev, method) {
    forEach(this, function(idx, el) {
      el.on(ev, method)
    })
    return this
  }

  Element.prototype.trigger = trigger

  NodeList.prototype.trigger = function(ev, data) {
    forEach(this, function(idx, el) {
      el.trigger(ev, data)
    })
    return this
  }

  //
  // Element toggle classname
  //
  Element.prototype.toggleClass = toggleClass

  NodeList.prototype.toggleClass = function(className) {
    forEach(this, function(idx, el) {
      el.toggleClass(className)
    })
    return this
  }

  //
  // Element switch classname from one to another
  //
  Element.prototype.switchClass = switchClass

  NodeList.prototype.switchClass = function(from, to) {
    forEach(this, function(idx, el) {
      el.switchClass(from, to)
    })
    return this
  }

  //
  // Element has class?
  //
  Element.prototype.hasClass = hasClass

  NodeList.prototype.hasClass = function(className) {
    return this[0].classList.contains(className)
  }

  //
  // Toggle
  //
  Element.prototype.toggle = toggle

  NodeList.prototype.toggle = function() {
    forEach(this, function(idx, el) {
      el.toggle()
    })
    return this
  }

  //
  // Add Class
  //
  Element.prototype.addClass = addClass

  NodeList.prototype.addClass = function(className) {
    forEach(this, function(idx, el) {
      el.addClass(className)
    })
    return this
  }

  //
  // Remove Class
  //
  Element.prototype.removeClass = removeClass

  NodeList.prototype.removeClass = function(className) {
    forEach(this, function(idx, el) {
      el.removeClass(className)
    })
    return this
  }

  //
  // Remove Attribute
  //
  Element.prototype.removeAttr = removeAttr

  NodeList.prototype.removeAttr = function(attribute) {
    forEach(this, function(idx, el) {
      el.removeAttr(attribute)
    })
    return this
  }

  //
  // Each
  //
  Element.prototype.each = each

  NodeList.prototype.each = function(func) {
    forEach(this, function(idx, el) {
      func(index, el)
    })
    return this
  }

  //
  // Attribute
  //
  Element.prototype.attr = attr

  NodeList.prototype.attr = function(attribute, val) {
    var attributes = []
    forEach(this, function(idx, el) {
      attributes.push(el.attr(attribute, val))
    })
    return attributes
  }

  //
  // Text
  //
  Element.prototype.text = text

  //
  // update node text, return the joined text of every element
  // optional paramenter is the separator ( a|b|c )
  //
  NodeList.prototype.text = function(val, join) {
    var all = []
    var allText

    forEach(this, function(idx, el) {
      // update the node text
      el.text(val)

      all.push(el.text())
    })

    allText = all.join(join || '')

    return allText
  }

  //
  // Append element
  //
  Element.prototype.append = append

  NodeList.prototype.append = function(child) {
    forEach(this, function(idx, el) {
      el.append(child)
    })
    return this
  }

  //
  // Find element
  //
  Element.prototype.find = find

  NodeList.prototype.find = function() {
    // var list
    return false
  }

  //
  // Css attributes
  //
  Element.prototype.css = css

  NodeList.prototype.css = function(attribute, value) {
    forEach(this, function(idx, el) {
      el.css(attribute, value)
    })
    return this
  }

  //
  // Remove element
  //
  NodeList.prototype.remove = function() {
    forEach(this, function(idx, el) {
      el.remove()
    })
    return this
  }

  //
  // in DOM
  //
  Element.prototype.inDocument = inDocument

  //
  // remove event
  //
  Element.prototype.off = off

  NodeList.prototype.off = function(ev, method) {
    forEach(this, function(idx, el) {
      el.off(ev, method)
    })
    return off
  }

  //
  // parent element
  //
  Element.prototype.parent = parent

  NodeList.prototype.parent = function() {
    return this[0].parent
  }

  //
  // get Element index
  //
  Element.prototype.index = index
  NodeList.prototype.index = function() {
    return this[0].index()
  }

  //
  // offset Element
  //
  Element.prototype.offset = offset

  NodeList.prototype.offset = function() {
    return this[0].offset()
  }

  Element.prototype.parents = parents

  NodeList.prototype.parents = function(selector) {
    return this[0].parents(selector)
  }

  NodeList.prototype.index = index

  Element.prototype.get = get
  NodeList.prototype.get = get
})(this)

;(function(w) {
  // init FontFace Observer
  const font1 = new w.FontFaceObserver('Eina01-SemiBold-webfont')
  const font2 = new w.FontFaceObserver('Eina01-Bold')

  Promise.all([font1.load(), font2.load()])
    .then(function() {
      w.document.documentElement.classList.add('fonts-loaded')
      if (typeof Event === 'function') {
        window.dispatchEvent(new w.Event('resize'))
      }
    })
    .catch(function() {})

  $$.ready(function() {
    // Main navigation logic
    $$('.main-nav .nav-toggle').on('click', function() {
      if (w.navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        $$('body').toggleClass('ios')
      }

      $$('body').toggleClass('stop-scrolling')
      $$('.overlay').toggleClass('active')
      this.toggleClass('active')
      $$('.main-nav ul').toggleClass('active')
    })

    // TOC navigation logic
    $$('.toc-nav .nav-toggle').on('click', function() {
      if (window.innerWidth > 767) {
        return
      }
      this.toggleClass('active')
      $$('.toc-nav nav').toggleClass('active')
      $$('.toc-nav ol').toggle()
    })

    // Overlay logic (dismiss everything when you click it)
    $$('.overlay').on('click', function() {
      // iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
      if (w.navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        $$('body').removeClass('ios')
      }
      $$('body').removeClass('stop-scrolling')
      $$('.overlay').removeClass('active cover-all')
      $$('.main-nav .nav-toggle').removeClass('active')
      $$('.main-nav ul').removeClass('active')
    })

    window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
        // iOS only workaround to prevent scrolling when we have the modal open, as overflow doesn't work on iOS. Scrolling position is saved in a JS variable, then restored when we remove the class so we can keep the scroll position
        if (
          w.navigator.userAgent.match(/(iPhone|iPod|iPad)/i) &&
          $$('body')[0].hasClass('ios')
        ) {
          $$('body').removeClass('ios')
        }
        $$('body').removeClass('stop-scrolling')
        $$('.overlay.active').removeClass('active')
        $$('.main-nav ul').removeClass('active')
        $$('.toc-nav ol').removeAttr('style')
        $$('.toc-nav nav').removeClass('active')
        $$('.nav-toggle').removeClass('active')
      }
    })

    //
    // Footer mobile click
    //
    $$('.main-footer .mobile-collapsible').on('click', function() {
      if (window.innerWidth > 767) {
        return
      }
      this.toggleClass('active')
    })

    //
    // prevent scrolling when menu is open in mobile on iOS
    //
    window.addEventListener('touchmove', function(e) {
      if ($$('.stop-scrolling.ios').length) {
        e.preventDefault()
      }
    })
  })
})(window)

//
// This file has constants & common functions
//
;(function() {
  var w = window

  //
  // Keyboard keys codes
  //
  var KEYS = {
    tab: 9,
    enter: 13,
    space: 32,
  }

  w.KEYS = KEYS

  var Strings = {
    dates: {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  }

  w.Strings = Strings

  var niceDateFromTimestamp = function(timestamp, opts) {
    var options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }

    options = Object.assign(options, opts)
    return new Date(timestamp * 1000).toLocaleDateString(
      window.navigator.language,
      options
    )
  }

  w.niceDateFromTimestamp = niceDateFromTimestamp

  //
  // @carlosgavina
  // We should use an object that stores our common / global functions, so we don't overpopulate the window object (with the risk of breaking other scripts)
  //
  w.Sketch = w.Sketch || {}

  Sketch.funcs = {
    // http://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript
    monthDiff: function(d1, d2) {
      var months
      months = (d2.getFullYear() - d1.getFullYear()) * 12
      months -= d1.getMonth() + 1
      months += d2.getMonth()
      return months <= 0 ? 0 : months
    },
    isEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    //
    // https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
    //
    isScrolledIntoView: function(el) {
      var rect = el.getBoundingClientRect()
      var halfHeight = rect.height / 2
      var elemTop = rect.top + halfHeight
      var elemBottom = rect.bottom - halfHeight

      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight

      return isVisible
    },

    isVideoAutoplaySupported: function() {
      var video = document.createElement('video')
      var supported

      video.muted = true

      try {
        video.play()
        supported = !video.paused
      } catch (e) {
        supported = false
      } finally {
        return supported
      }
    },

    isTouchDevice: function() {
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
      var mq = function(query) {
        return window.matchMedia(query).matches
      }

      if (
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      ) {
        return true
      }

      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(
        ''
      )
      return mq(query)
    },

    calculateDistance: function(lat1, lng1, lat2, lng2, unit) {
      //  https://stackoverflow.com/questions/26836146/how-to-sort-array-items-by-longitude-latitude-distance-in-javascripts
      var radlat1 = (Math.PI * lat1) / 180
      var radlat2 = (Math.PI * lat2) / 180
      var theta = lng1 - lng2
      var radtheta = (Math.PI * theta) / 180
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      dist = Math.acos(dist)
      dist = (dist * 180) / Math.PI
      dist = dist * 60 * 1.1515
      if (unit == 'K' || !unit) {
        dist *= 1.609344
      }
      if (unit == 'N') {
        dist *= 0.8684
      }
      return dist
    },
  }

  //
  // Function to get url parameters in javascript:
  // http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  //
  var QueryString = function(string) {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var queryString = {}
    var query = string || window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      // If first entry with this name
      if (typeof queryString[pair[0]] === 'undefined') {
        queryString[pair[0]] = decodeURIComponent(pair[1])
        // If second entry with this name
      } else if (typeof queryString[pair[0]] === 'string') {
        var arr = [queryString[pair[0]], decodeURIComponent(pair[1])]
        queryString[pair[0]] = arr
        // If third or later entry with this name
      } else {
        queryString[pair[0]].push(decodeURIComponent(pair[1]))
      }
    }
    return queryString
  }

  w.QueryString = QueryString

  //
  // This utility function makes it run after a certain amount of time
  //
  var runAsyncFunction = function(func, t) {
    w.runAsyncFunctionTimer = setTimeout(function() {
      func()
    }, t || 250)
  }

  w.runAsyncFunction = runAsyncFunction

  //
  // based on http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  //
  var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  w.numberWithCommas = numberWithCommas
})()

//
// FastSpring common functions
//
;(function(w) {
  w.Sketch = w.Sketch || {}
  w.Sketch.FS = w.Sketch.FS || {}

  //
  // Overcome FS limit of $20.000
  //
  // instead of sending one number with total, sending integer separate from decimals
  //
  // Solution: https://github.com/BohemianCoding/Sketch/issues/14021#issuecomment-309026123
  // <input type="hidden" name="tags" data-field="payment_info_total" value="total_integer=29051,total_fraction=34">
  //
  // The following happens in this function, for total_integer and total_fraction respectively:
  //
  // a total of 2,01 is 2 and 1
  // a total of 2,10 is 2 and 10
  // a total of 2,54 is 2 and 54
  //
  var fsDataTreatmentBeforeRender = function(data) {
    var treatedData = data
    var fs_total_str = ''
    var total = data.data.total
    var total_integer = Math.floor(total)
    var total_fraction = Math.floor((total * 100) % 100)

    fs_total_str = 'total_integer=' + total_integer
    fs_total_str += ',total_fraction=' + total_fraction

    treatedData.data.fs_total_str = fs_total_str

    return treatedData
  }

  w.Sketch.FS.fsDataTreatmentBeforeRender = fsDataTreatmentBeforeRender
})(window)

;(function(w) {
  //
  //
  //
  var Api = function() {
    var defaults = {
      url: 'https://api.sketchapp.com/',
      version: 1,
    }

    var get = function(name, opts) {
      var options = $.extend({}, defaults, { method: 'GET' }, opts)
      return request(name, options)
    }

    var post = function(name, opts) {
      var options = $.extend({}, defaults, { method: 'POST' }, opts)
      return request(name, options)
    }

    var put = function(name, opts) {
      var options = $.extend({}, defaults, { method: 'PUT' }, opts)
      return request(name, options)
    }

    var del = function(name, opts) {
      var options = $.extend({}, defaults, { method: 'DELETE' }, opts)
      return request(name, options)
    }

    var request = function(name, opts) {
      var $req

      opts.url = opts.url + opts.version + name

      $req = $.ajax(opts)

      return $req
    }

    return {
      get: get,
      post: post,
      put: put,
      del: del,
    }
  }

  w.Api = new Api()
})(this)

;(function(w) {
  var $w = w
  $w.CookieConsent = {
    isSeen: function() {
      var storedData = window.localStorage.getItem('cookieConsent')
      var storedDataJSON = storedData ? JSON.parse(storedData) : {}
      return storedDataJSON && storedDataJSON.seen == true
    },

    showBanner: function() {
      var $banner = $$('.cookie-consent')[0]

      var obj = {
        seen: true,
      }

      // update local storage with the video version that was seen
      window.localStorage.setItem('cookieConsent', JSON.stringify(obj))
      setTimeout(function() {
        $banner.removeClass('hide-banner')
      }, 1000)
      setTimeout(function() {
        $banner.addClass('hide-banner')
      }, 15000)
    },

    init: function() {
      var $banner = $$('.cookie-consent')[0]
      var $close = $$('.cookie-consent .close')[0]

      if (!this.isSeen()) {
        this.showBanner()
      }

      $close.on('click', function() {
        $banner.addClass('hide-banner')
      })
    },
  }

  if (document.readyState != 'loading') {
    $w.CookieConsent.init()
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      $w.CookieConsent.init.bind($w.CookieConsent)
    )
  }
})(this)

;(function() {
  var $w = window
  $w.NewsletterSignup = {
    init: function() {
      var $forms = $$('.newsletter-form')
      $forms.each(function(index, el) {
        var $form = el
        var $email = $form.find('input')[0]
        var $button = $form.find('button')[0]
        var $errorMsg = $form.find('.errorMsg')[0]

        $form.addEventListener(
          'submit',
          function(e) {
            e.preventDefault()
            $button.addClass('busy loading')
            $email.removeClass('invalid')
            $email.setAttribute('disabled', 'disabled')
            $errorMsg.removeClass('invalid')
            $errorMsg.innerHTML = ''
            var data = { email64: window.btoa($email.value) }
            $$.ajax({
              type: 'POST',
              url: this.action,
              success: $w.NewsletterSignup.success.bind(this),
              error: $w.NewsletterSignup.error.bind(this),
              data: data,
            })
          }.bind($form)
        )
      })
    },
    success: function() {
      var $button = this.find('button')[0]
      var $email = this.find('input')[0]
      $button.removeClass('loading')
      $button.addClass('success')

      setTimeout(function() {
        $button.removeClass('busy success')
        $email.removeAttribute('disabled')

        $email.value = ''
      }, 3000)
    },

    error: function() {
      var $email = this.find('input')[0]
      var $button = this.find('button')[0]
      var $errorMsg = this.find('.errorMsg')[0]

      $email.removeAttribute('disabled')
      $email.focus()
      $email.addClass('invalid')
      $errorMsg.innerHTML = 'You must use a valid email address.'
      $errorMsg.addClass('invalid')

      $button.removeClass('loading')
      $button.addClass('error')

      setTimeout(function() {
        $button.removeClass('busy error')
        $email.removeClass('invalid')
      }, 2000)
    },
  }

  if (document.readyState != 'loading') {
    $w.NewsletterSignup.init()
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      $w.NewsletterSignup.init.bind($w.NewsletterSignup)
    )
  }
})()

;(function(w) {
  var $w = w
  $w.GATrackOutboundLinks = {
    redirects: ['/store/', '/mirror/download'],

    trackOutboundLinks: function(link) {
      if (
        (link.host && link.host != window.location.host) ||
        (link.host == window.location.host &&
          this.redirects.indexOf(link.pathname) != -1)
      ) {
        link.on('click', function(e) {
          var isBlank = false
          var timeout
          var newWindow
          var node = this
          var url = this.href

          e.preventDefault()

          if (link.target == '_blank' || e.metaKey || e.ctrlKey) {
            isBlank = true
            newWindow = window.open('', '_blank')
          }
          timeout = setTimeout(function() {
            if (isBlank) {
              newWindow.location = url
            } else {
              document.location = url
            }
          }, 1000)
          ga('send', 'event', 'outbound', 'click', url, {
            transport: 'beacon',
            hitCallback: function() {
              clearTimeout(timeout)
              if (!node.hasClass('button-social')) {
                if (isBlank) {
                  newWindow.location = url
                } else {
                  document.location = url
                }
              }
            },
          })
        })
      }
    },

    init: function() {
      Array.from($$('a')).forEach(
        function(el) {
          this.trackOutboundLinks(el)
        }.bind(this)
      )
    },
  }

  if (document.readyState != 'loading') {
    $w.GATrackOutboundLinks.init()
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      $w.GATrackOutboundLinks.init.bind($w.GATrackOutboundLinks)
    )
  }
})(this)

;(function() {
  //
  // check window.location string to get some Sketch app related data if passed
  var w = window

  w.SKETCH_VERSION_INFORMATION = 'sketchVersionInformation'
  var urlQueryString = w.QueryString()
  if (
    Object.keys(urlQueryString).length > 0 &&
    urlQueryString.bundleIdentifier
  ) {
    w.localStorage.setItem(
      w.SKETCH_VERSION_INFORMATION,
      JSON.stringify(urlQueryString)
    )
  }
})()

;(function() {
  var $w = window

  $w.GAButtonEvents = {
    init: function() {
      // Find any elements with data-event-type attributes
      Array.from($$('[data-event-type]')).forEach(function(elm) {
        elm.on('click', function() {
          var category = this.dataset.eventType
          var action = this.dataset.eventAction
            ? this.dataset.eventAction
            : 'click'

          var label = this.dataset.eventLabel
            ? this.dataset.eventLabel
            : this.innerText

          ga('send', 'event', {
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            transport: 'beacon',
          })
        })
      })
    },
  }

  if (document.readyState != 'loading') {
    $w.GAButtonEvents.init()
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      $w.GAButtonEvents.init.bind($w.GAButtonEvents)
    )
  }
})()
