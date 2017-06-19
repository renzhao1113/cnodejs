webpackJsonp([0],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(308)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(288),
  /* template */
  __webpack_require__(301),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\User\\authorDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] authorDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-029b45fa", Component.options)
  } else {
    hotAPI.reload("data-v-029b45fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(309)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(302),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\User\\collections.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] collections.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19d19d1e", Component.options)
  } else {
    hotAPI.reload("data-v-19d19d1e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(313)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(306),
  /* scopeId */
  "data-v-c27f97da",
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\User\\messages.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] messages.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c27f97da", Component.options)
  } else {
    hotAPI.reload("data-v-c27f97da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
			collectCount: 0,
			messageCount: 0,
			userInfo: {
				recent_replies: [],
				recent_topics: []
			},
			userName: ""
		};
	},
	methods: {
		abc() {
			this.$http.get(this.toChild + "/user/" + this.userName).then(result => {
				this.userInfo = result.data.data;
				this.$http.get(this.toChild + "/topic_collect/" + this.$route.params.name).then(res => {
					this.collectCount = res.data.data.length;
					console.log("收藏了" + this.collectCount);
				}).catch(err => {
					alert(err.data);
				});
			}).catch(err => {
				alert(err.data);
			});
		},
		getMessagesCount() {
			this.$http.get(this.toChild + "/message/count" + "?accesstoken=" + this.access).then(res => {
				this.messageCount = res.data.data;
				console.log(this.messageCount);
			}).catch(err => {
				alert(err.data);
			});
		}
	},
	created() {
		this.userName = this.$route.params.name;
		this.abc();
	},
	beforeRouteUpdate(to, from, next) {
		this.userName = to.params.name;
		this.abc();
		next();
	},
	props: ['toChild', 'access']
});

/***/ }),

/***/ 289:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			baseUrl: this.toChild,
			titleList: []
		};
	},
	props: ['toChild'],
	components: {
		'loading': __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Spinner"]
	},
	created() {
		this.$http.get(this.toChild + '/topic_collect/' + this.$route.params.name).then(res => {
			this.titleList = res.data.data;
			console.log(this.titleList);
		}).catch(err => {
			alert(err);
		});
	}
});

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			data: {
				hasnot_read_messages: [],
				has_read_messages: []
			}
		};
	},
	created() {
		this.getAllMessages();
	},
	methods: {
		getAllMessages() {
			this.$http.get(this.toChild + "/messages?accesstoken=" + this.access).then(res => {
				console.log(res);
				this.data = res.data.data;
			}).catch(err => {
				console.log(err);
			});
		},
		markAll() {
			this.$http.post(this.toChild + "/message/mark_all", {
				accesstoken: this.access
			}).then(res => {
				//						console.log(res);
				if (res.data.success) {
					alert('标记成功');
					this.getAllMessages();
				}
			}).catch(err => {
				console.log(err);
			});
		},
		markOne(id) {
			this.$http.post(this.toChild + "/message/mark_one/" + id, {
				accesstoken: this.access
			}).then(res => {
				//						console.log(res);
				if (res.data.success) {
					alert('标记成功');
					this.getAllMessages();
				}
			}).catch(err => {
				console.log(err);
			});
		}
	},
	props: ["toChild", "access"]
});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.message[data-v-c27f97da]{\n\tpadding: 10px 5px;\n\tbackground-color: #fff;\n}\n.message li[data-v-c27f97da]:nth-of-type(1){\n\tline-height: 40px;\n\tbackground-color: #f6f6f6;\n\ttext-align: center;\n}\n.message li[data-v-c27f97da],.new-message-no li[data-v-c27f97da]{\n\theight: 50px;\n\tline-height: 20px;\n\tpadding: 5px 0;\n\tborder-bottom: 1px dotted #ccc;\n}\n.mark-all[data-v-c27f97da], .mark-one[data-v-c27f97da]{\n\tbackground-color: #80bd01;\n\tpadding: 2px 4px;\n\tborder-radius: 4px;\n\tcolor: #fff;\n\tborder: none;\n}\n.mark-all[data-v-c27f97da]:active, .mark-one[data-v-c27f97da]:active{\n\tbackground-color: #01bd3d;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "author-detail"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_vm._v("主页/")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$route.params.name))])], 1), _vm._v(" "), _c('div', {
    staticClass: "author-base"
  }, [(_vm.$route.params.name == _vm.$store.getters.getMyInfo.loginname) ? _c('router-link', {
    staticClass: "fr release-btn",
    attrs: {
      "to": {
        name: 'edit'
      }
    }
  }, [_vm._v("发布话题")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "author-face"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatar_url,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.userInfo.loginname))])]), _vm._v(" "), _c('div', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.userInfo.score) + "积分")]), _vm._v(" "), _c('router-link', {
    staticClass: "collect-count",
    attrs: {
      "to": {
        name: 'collections',
        params: {
          name: _vm.userInfo.loginname
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.collectCount) + "个收藏")]), _vm._v(" "), _c('div', {
    staticClass: "register"
  }, [_vm._v("注册于 " + _vm._s(_vm._f("dateFormat")(_vm.userInfo.create_at)))]), _vm._v(" "), (_vm.$route.params.name == _vm.$store.getters.getMyInfo.loginname) ? _c('div', [_c('router-link', {
    staticStyle: {
      "padding": "2px 4px",
      "background": "#80bd01",
      "border-radius": "5px",
      "color": "#fff"
    },
    attrs: {
      "to": {
        name: 'userMessages',
        params: {
          name: _vm.userInfo.loginname
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.getMessagesCount()) + _vm._s(_vm.messageCount))]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("条消息未读")])], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "recent-create"
  }, [(_vm.userInfo.recent_topics.length != 0) ? _c('div', [_c('div', {
    staticClass: "recent-title"
  }, [_vm._v("最近创建的话题")]), _vm._v(" "), _c('div', {
    staticClass: "recent-create-content"
  }, [_c('ul', _vm._l((_vm.userInfo.recent_topics), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('router-link', {
      staticClass: "touxiang fl",
      attrs: {
        "to": {
          name: 'user',
          params: {
            name: item.author.loginname
          },
          query: {
            id: item.author_id
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
    }, [_c('h1', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm._f("timeFormat")(item.last_reply_at)))])])], 1)], 1)
  }))])]) : _vm._e(), _vm._v(" "), (_vm.userInfo.recent_replies.length != 0) ? _c('div', [_c('div', {
    staticClass: "recent-title"
  }, [_vm._v("最近参与的话题")]), _vm._v(" "), _c('div', {
    staticClass: "recent-create-content"
  }, [_c('ul', _vm._l((_vm.userInfo.recent_replies), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('router-link', {
      staticClass: "touxiang fl",
      attrs: {
        "to": {
          name: 'user',
          params: {
            name: item.author.loginname
          },
          query: {
            id: item.author_id
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
    }, [_c('h1', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm._f("timeFormat")(item.last_reply_at)))])])], 1)], 1)
  }))])]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-029b45fa", module.exports)
  }
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-content"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_vm._v("主页 / ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$route.params.name) + " 的收藏列表")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "home-content-ul"
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
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19d19d1e", module.exports)
  }
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "message"
  }, [(_vm.data.hasnot_read_messages.length > 0) ? _c('ul', {
    staticClass: "new-message"
  }, [_c('li', [_vm._v("未读消息 "), _c('button', {
    staticClass: "mark-all",
    on: {
      "click": _vm.markAll
    }
  }, [_vm._v("标记全部为已读")])]), _vm._v(" "), _vm._l((_vm.data.hasnot_read_messages), function(mes, index) {
    return _c('li', {
      key: index
    }, [_c('button', {
      staticClass: "fr mark-one",
      on: {
        "click": function($event) {
          _vm.markOne(mes.id)
        }
      }
    }, [_vm._v("标记")]), _vm._v(" "), _c('router-link', {
      attrs: {
        "to": {
          name: 'user',
          params: {
            name: mes.author.loginname
          }
        }
      },
      domProps: {
        "textContent": _vm._s(mes.author.loginname)
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "font-size": "12px"
      }
    }, [_vm._v("回复了你的话题")]), _vm._v(" "), _c('router-link', {
      staticClass: "topic-title",
      attrs: {
        "to": {
          name: 'topicDetail',
          params: {
            id: mes.topic.id
          }
        }
      },
      domProps: {
        "textContent": _vm._s(mes.topic.title)
      }
    })], 1)
  })], 2) : _c('ul', {
    staticClass: "new-message-no"
  }, [_c('li', [_vm._v("未读消息")]), _vm._v(" "), _c('li', {
    staticStyle: {
      "text-align": "center",
      "line-height": "40px"
    }
  }, [_vm._v("无消息")])]), _vm._v(" "), (_vm.data.has_read_messages.length > 0) ? _c('ul', {
    staticClass: "old-message"
  }, [_c('li', [_vm._v("已读消息")]), _vm._v(" "), _vm._l((_vm.data.has_read_messages), function(mes, index) {
    return _c('li', {
      key: index
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'user',
          params: {
            name: mes.author.loginname
          }
        }
      },
      domProps: {
        "textContent": _vm._s(mes.author.loginname)
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "font-size": "12px"
      }
    }, [_vm._v("回复了你的话题")]), _vm._v(" "), _c('router-link', {
      staticClass: "topic-title",
      attrs: {
        "to": {
          name: 'topicDetail',
          params: {
            id: mes.topic.id
          }
        }
      },
      domProps: {
        "textContent": _vm._s(mes.topic.title)
      }
    })], 1)
  })], 2) : _c('ul', {
    staticClass: "old-message"
  }, [_c('li', [_vm._v("已读消息")]), _vm._v(" "), _c('li', {
    staticStyle: {
      "text-align": "center",
      "line-height": "40px"
    }
  }, [_vm._v("无消息")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c27f97da", module.exports)
  }
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("fdb5743e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-029b45fa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./authorDetail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-029b45fa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./authorDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1f41be22", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-19d19d1e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./collections.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-19d19d1e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./collections.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("31821e04", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c27f97da\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messages.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-c27f97da\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});