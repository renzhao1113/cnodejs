webpackJsonp([1],{

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(311)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(286),
  /* template */
  __webpack_require__(304),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\Detail\\topicDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topicDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3237d3af", Component.options)
  } else {
    hotAPI.reload("data-v-3237d3af", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_comment_vue__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_comment_vue__);
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
			data: {
				author: {
					loginname: '未知用户'
				}
			},
			collected: false,
			zan: 0,
			//此属性用来记录用户将要回复哪条评论，点击回复按钮时，相应的下标index会赋值给replyIndex，
			//show方法会返回当前这个replyIndex
			//通过v-if判断show()的返回值是否等于index，这种方式可以保证每次只会显示一个文本框，也就只调用一次comment组件
			//试想一下，点击第1条评论的回复按钮，show()返回1，index==1，第一个文本框显示
			//点击第二条评论的回复按钮，index==2， show()也返回2，固第一条评论不满足条件，该文本框就不会被渲染
			replyIndex: -1
		};
	},
	methods: {
		collect() {
			this.$http.post(this.toChild + "/topic_collect/collect", {
				accesstoken: this.access,
				topic_id: this.data.id
			}).then(res => {
				if (res.data.success) {
					this.collected = true;
				}
			}).catch(err => {
				alert(err);
			});
		},
		cancelCollect() {
			this.$http.post(this.toChild + "/topic_collect/de_collect", {
				accesstoken: this.access,
				topic_id: this.data.id
			}).then(res => {
				if (res.data.success) {
					this.collected = false;
				}
			}).catch(err => {
				alert(err);
			});
		},
		//此方法返回评论的下标，如果下标对应点击的回复按钮所在的评论
		show() {
			return this.replyIndex;
		},
		//点赞
		dianZan(replyId) {
			this.$http.post(this.toChild + "/reply/" + replyId + "/ups", {
				accesstoken: this.access
			}).then(res => {
				this.getTopics();
			}).catch(err => {
				alert('不能点赞');
			});
		},
		//回复评论
		replayComment(index, replyId) {
			this.replyIndex = index;
		},
		//获取话题详情
		getTopics() {
			this.$http.get(this.toChild + '/topic/' + this.$route.params.id + "?accesstoken=" + this.access, true).then(res => {
				this.loading = false;
				this.data = res.data.data;
				this.collected = this.data.is_collect;
			}).catch(err => {
				console.log(err);
			});
		}
	},
	created() {
		this.getTopics();
		//评论成功之后更新列表
		this.$on("commentSuccess", data => {
			this.data = data;
			this.replyIndex = -1;
		});
	},
	computed: {},
	props: ["toChild", "access"],
	components: {
		comment: __WEBPACK_IMPORTED_MODULE_0__public_comment_vue___default.a
	}
});

/***/ }),

/***/ 291:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			toolbars: {
				bold: true, // 粗体
				italic: true, // 斜体
				header: false, // 标题
				underline: false, // 下划线
				strikethrough: false, // 中划线
				mark: false, // 标记
				superscript: false, // 上角标
				subscript: false, // 下角标
				quote: false, // 引用
				ol: true, // 有序列表
				ul: true, // 无序列表
				link: true, // 链接
				imagelink: false, // 图片链接
				code: false, // code
				table: false, // 表格
				subfield: false, // 是否需要分栏
				fullscreen: false, // 全屏编辑
				readmodel: false, // 沉浸式阅读
				htmlcode: false, // 展示html源码
				help: false, // 帮助
				/* 1.3.5 */
				undo: false, // 上一步
				redo: false, // 下一步
				trash: true, // 清空
				save: false, // 保存（触发events中的save事件）
				/* 1.4.2 */
				navigation: false // 导航目录
			},
			content: '',
			data: {}
		};
	},
	methods: {
		huifu() {
			//点击回复按钮，立即调用回复接口
			this.$http.post(this.toChild + "/topic/" + this.topic_id + "/replies", {
				accesstoken: this.access,
				content: this.content,
				reply_id: this.reply_id || ''
			}).then(res => {
				//如果回复成功，重新获取话题详情，并将获取到的数据发送给父组件，最后，清空文本框
				if (res.data.success) {
					this.getTopics(data => {
						this.$parent.$emit('commentSuccess', data);
						this.content = "";
					});
				}
			}).catch(err => {
				alert(err.data);
			});
		},
		changeText(val, render) {
			this.content = render;
		},
		//获取话题详情
		getTopics(fn) {
			this.$http.get(this.toChild + '/topic/' + this.topic_id + "?accesstoken=" + this.access).then(res => {
				this.data = res.data.data;
				fn(this.data);
			}).catch(err => {
				console.log(err);
			});
		}
	},
	computed: {},
	components: ['Spinner'],
	props: ["toChild", 'access', 'reply_id', 'topic_id', 'reply_to_name'],
	created() {
		//组件创建是，判断是否由父组件传来了reply_id
		//如果有，说明当前回复的是一条评论，而非话题，就将文本框内填充上@****的文本内容，并添加相应用户的路由
		if (this.reply_id) {
			this.content = "[@" + this.reply_to_name + "](#/user/" + this.reply_to_name + ")";
		}
	}
});

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(312)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(305),
  /* scopeId */
  "data-v-500825a6",
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\public\\comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-500825a6", Component.options)
  } else {
    hotAPI.reload("data-v-500825a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topic-detail"
  }, [_c('div', {
    staticClass: "topic-detail-title"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.data.title)
    }
  }), _vm._v(" "), (!_vm.collected) ? _c('button', {
    staticClass: "collect fr",
    on: {
      "click": _vm.collect
    }
  }, [_vm._v("收藏")]) : _c('button', {
    staticClass: "cancel-collect fr",
    on: {
      "click": _vm.cancelCollect
    }
  }, [_vm._v("取消收藏")]), _vm._v(" "), (_vm.data.author_id == '59410c7e8ce045ee166a1534') ? _c('div', {
    staticClass: "edit-del"
  }, [_c('router-link', {
    staticClass: "edit",
    attrs: {
      "to": {
        name: 'edit',
        params: {
          id: _vm.data.id
        }
      }
    }
  }, [_vm._v("编辑")]), _vm._v(" "), _c('router-link', {
    staticClass: "del",
    attrs: {
      "to": {}
    }
  }, [_vm._v("删除")])], 1) : _vm._e(), _vm._v(" "), _c('div', [_vm._v("作者 : "), _c('router-link', {
    attrs: {
      "to": {
        name: 'user',
        params: {
          name: _vm.data.author.loginname
        },
        query: {
          id: _vm.data.author_id
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.data.author.loginname))])], 1), _vm._v(" "), _c('div', [_vm._v("创建时间 : " + _vm._s(_vm._f("timeFormat")(_vm.data.create_at)))]), _vm._v(" "), _c('div', [_vm._v("最近回复 : " + _vm._s(_vm._f("timeFormat")(_vm.data.last_reply_at)))])]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.data.content)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "replies"
  }, [_c('div', {
    staticClass: "replies-amount"
  }, [_vm._v(_vm._s(_vm.data.reply_count) + "回复")]), _vm._v(" "), _vm._l((_vm.data.replies), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "reply-id": item.id,
        "id": item.id,
        "reply-to-id": item.reply_id
      }
    }, [_c('div', {
      staticClass: "replies-author-info"
    }, [_c('router-link', {
      staticClass: "touxiang fl",
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
    })]), _vm._v(" "), _c('span', {
      staticClass: "fr zan",
      on: {
        "click": function($event) {
          _vm.dianZan(item.id)
        }
      }
    }, [_vm._v("赞" + _vm._s(item.ups.length))]), _vm._v(" "), _c('span', {
      staticClass: "fr replay-comment",
      on: {
        "click": function($event) {
          _vm.replayComment(index)
        }
      }
    }, [_vm._v("回复")]), _vm._v(" "), _c('div', [_c('span', [_vm._v(_vm._s(item.author.loginname))]), _c('br'), _vm._v(" "), _c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(index + 1) + "楼 · " + _vm._s(_vm._f("toDay")(new Date().getTime() - new Date(item.create_at).getTime())))]), _vm._v(" "), _c('br')])], 1), _vm._v(" "), _c('div', {
      staticClass: "replies-content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), (_vm.show() == index) ? _c('comment', {
      attrs: {
        "reply_id": item.id,
        "topic_id": _vm.data.id,
        "reply_to_name": item.author.loginname,
        "toChild": _vm.toChild,
        "access": _vm.access
      }
    }) : _vm._e()], 1)
  })], 2), _vm._v(" "), _c('comment', {
    attrs: {
      "topic_id": _vm.data.id,
      "toChild": _vm.toChild,
      "access": _vm.access
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3237d3af", module.exports)
  }
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('mavon-editor', {
    attrs: {
      "toolbars": _vm.toolbars
    },
    on: {
      "change": _vm.changeText
    },
    model: {
      value: (_vm.content),
      callback: function($$v) {
        _vm.content = $$v
      },
      expression: "content"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "release-btn",
    on: {
      "click": _vm.huifu
    }
  }, [_vm._v("回复")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-500825a6", module.exports)
  }
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("2d71c027", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3237d3af\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./topicDetail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3237d3af\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./topicDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("2220536e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-500825a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comment.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-500825a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});