webpackJsonp([3],{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(314)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(287),
  /* template */
  __webpack_require__(307),
  /* scopeId */
  "data-v-e400f9dc",
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\Home\\home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e400f9dc", Component.options)
  } else {
    hotAPI.reload("data-v-e400f9dc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			baseUrl: this.toChild,
			titleList: [],
			loading: false,
			page: 0,
			tab: ""
		};
	},
	methods: {
		loadMore() {
			this.loading = true;
			this.page++;
			setTimeout(() => {
				this.loadList({ page: this.page, tab: this.tab }, list => {
					this.titleList = this.titleList.concat(list);
				});
			}, 1000);
		},
		loadList(config, fn) {
			var page = config.page || 1;
			var tab = config.tab || '';
			this.$http.get('https://cnodejs.org/api/v1/topics?page=' + page + "&tab=" + tab).then(res => {
				this.loading = false;
				//						console.log(res);
				fn(res.data.data);
			}).catch(err => {
				console.log(err);
			});
		}
	},
	created() {
		this.tab = this.$route.params.id;
	},
	beforeRouteUpdate(to, from, next) {
		//			console.log('路由更新了');
		this.loading = true;
		this.tab = to.params.id || "";
		this.page = 1;
		this.titleList = [];
		next();
		this.loadList({ page: this.page, tab: this.tab }, res => {
			this.titleList = this.titleList.concat(res);
			this.loading = false;
		});
	},
	props: ['toChild'],
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Spinner"]
	}
});

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.home-main[data-v-e400f9dc]{\n\tmargin-top: 20px;\n\tpadding: 0 5px;\n\tbackground-color: #fff;\n\tbackground-clip: content-box;\n\tmargin-bottom: 20px;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n}\n.home-navs[data-v-e400f9dc]{\n\tmargin: 10px auto;\n\tpadding: 0 20px;\n\tbackground-color: #f6f6f6;\n\tbackground-clip: border-box;\n}\n.home-nav[data-v-e400f9dc]{\n\tfloat: left;\n\twidth: 80px;\n\ttext-align: left;\n\theight: 30px;\n\tline-height: 30px;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n}\n.home-nav > a[data-v-e400f9dc]{\n\tfont-size: 14px;\n\tcolor: #80bd01;\n\tpadding: 0 10px;\n}\n.home-nav > a.nav-active[data-v-e400f9dc]{\n\tcolor: #fff;\n\tpadding: 0 10px;\n\tbackground-color: yellowgreen;\n}\n", ""]);

// exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-main"
  }, [_c('ul', {
    staticClass: "home-navs clearfix"
  }, [_c('li', {
    staticClass: "home-nav"
  }, [_c('router-link', {
    class: {
      'nav-active': _vm.tab == 'all'
    },
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: 'all'
        }
      }
    }
  }, [_vm._v("全部")])], 1), _vm._v(" "), _c('li', {
    staticClass: "home-nav"
  }, [_c('router-link', {
    class: {
      'nav-active': _vm.tab == 'good'
    },
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: 'good'
        }
      }
    }
  }, [_vm._v("精华")])], 1), _vm._v(" "), _c('li', {
    staticClass: "home-nav"
  }, [_c('router-link', {
    class: {
      'nav-active': _vm.tab == 'share'
    },
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: 'share'
        }
      }
    }
  }, [_vm._v("分享")])], 1), _vm._v(" "), _c('li', {
    staticClass: "home-nav"
  }, [_c('router-link', {
    class: {
      'nav-active': _vm.tab == 'ask'
    },
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: 'ask'
        }
      }
    }
  }, [_vm._v("问答")])], 1), _vm._v(" "), _c('li', {
    staticClass: "home-nav"
  }, [_c('router-link', {
    class: {
      'nav-active': _vm.tab == 'job'
    },
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: 'job'
        }
      }
    }
  }, [_vm._v("招聘")])], 1), _vm._v(" "), _c('li', {
    staticClass: "home-nav"
  }, [_c('router-link', {
    class: {
      'nav-active': _vm.tab == 'dev'
    },
    attrs: {
      "to": {
        name: 'home',
        params: {
          id: 'dev'
        }
      }
    }
  }, [_vm._v("测试")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "home-content"
  }, [_c('ul', {
    directives: [{
      name: "infinite-scroll",
      rawName: "v-infinite-scroll",
      value: (_vm.loadMore),
      expression: "loadMore"
    }],
    staticClass: "home-content-ul",
    attrs: {
      "infinite-scroll-disabled": "loading",
      "infinite-scroll-distance": "0"
    }
  }, _vm._l((_vm.titleList), function(item) {
    return _c('li', {
      staticClass: "home-content-list"
    }, [_c('router-link', {
      staticClass: "touxiang",
      attrs: {
        "to": {
          name: 'user',
          params: {
            name: item.author.loginname
          }
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.author.avatar_url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      class: {
        'list-title': true, top: item.top, ask: item.tab == 'ask', share: item.tab == 'share', good: item.good, job: item.tab == 'job'
      }
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'topicDetail',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('h1', [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.reply_count) + "/" + _vm._s(item.visit_count))]), _c('br'), _vm._v(" "), _c('span', [_vm._v("最新回复：" + _vm._s(_vm._f("dateFormat")(item.last_reply_at)))])], 1)], 1)
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "loading"
  }, [_c('loading', {
    attrs: {
      "color": "#47b1ff",
      "type": 1
    }
  }), _vm._v(" "), _c('em', [_vm._v("加载中.......")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e400f9dc", module.exports)
  }
}

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("5955e633", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e400f9dc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e400f9dc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});