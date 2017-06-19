webpackJsonp([2],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(310)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(292),
  /* template */
  __webpack_require__(303),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\TounickSPA\\App\\components\\public\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2da845d3", Component.options)
  } else {
    hotAPI.reload("data-v-2da845d3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 292:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			content: "",
			title: '',
			tab: '请选择',
			toolbars: {
				bold: true, // 粗体
				italic: true, // 斜体
				header: true, // 标题
				underline: true, // 下划线
				strikethrough: true, // 中划线
				mark: true, // 标记
				superscript: true, // 上角标
				subscript: true, // 下角标
				quote: true, // 引用
				ol: true, // 有序列表
				ul: true, // 无序列表
				link: true, // 链接
				imagelink: false, // 图片链接
				code: true, // code
				table: true, // 表格
				subfield: true, // 是否需要分栏
				fullscreen: true, // 全屏编辑
				readmodel: true, // 沉浸式阅读
				htmlcode: true, // 展示html源码
				help: true, // 帮助
				/* 1.3.5 */
				undo: true, // 上一步
				redo: true, // 下一步
				trash: true, // 清空
				save: false, // 保存（触发events中的save事件）
				/* 1.4.2 */
				navigation: true // 导航目录
			},
			disabled: true,
			id: "",
			file_img: {}
		};
	},
	props: ["toChild", "access"],
	methods: {
		change() {
			this.disabled = this.title.length < 10 || this.tab != 'dev';
		},
		submit() {
			if (!this.id) {
				this.$http.post(this.toChild + "/topics", {
					accesstoken: this.access,
					title: this.title,
					tab: this.tab,
					content: this.content
				}).then(res => {
					if (res.data.success) {
						alert('发帖成功');
						this.$router.push({
							path: '/user/' + this.$store.getters.getMyInfo.loginname
						});
					}
				}).catch(err => {
					alert(err.data);
				});
			} else {
				this.$http.post(this.toChild + "/topics/update", {
					accesstoken: this.access,
					title: this.title,
					tab: this.tab,
					content: this.content,
					topic_id: this.id
				}).then(res => {
					if (res.data.success) {
						alert('发帖成功');
						//发帖成功后调回个人中心
						this.$router.push({
							path: '/user/' + this.$store.getters.getMyInfo.loginname
						});
					}
				}).catch(err => {
					alert(err.data);
				});
			}
		},
		changeText(value, render) {
			this.content = render;
		}
	},
	created() {
		this.id = this.$route.params.id;
		if (this.id) {
			this.$http.get(this.toChild + "/topic/" + this.id + "?mdrender=false").then(res => {
				let data = res.data.data;
				this.content = data.content;
				this.title = data.title;
				this.tab = data.tab;
				this.disabled = this.title.length < 10 || this.tab != 'dev';
			}).catch(err => {
				console.log(err);
			});
		}
		this.disabled = this.title.length < 10 || this.tab != 'dev';
	}
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topic-create"
  }, [_c('div', {
    staticClass: "crumbs"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_vm._v("主页")]), _vm._v(" "), (_vm.$route.params.id) ? _c('span', [_vm._v(" / 编辑话题")]) : _c('span', [_vm._v(" / 发布话题")])], 1), _vm._v(" "), _c('div', {
    staticClass: "topic-create-content"
  }, [_vm._v("\n\t\t\t选择板块:\n\t\t\t"), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.tab),
      expression: "tab"
    }],
    attrs: {
      "name": "tab",
      "id": "select-tab"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.tab = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.change]
    }
  }, [_c('option', {
    attrs: {
      "value": "请选择",
      "selected": ""
    }
  }, [_vm._v("请选择")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "share"
    }
  }, [_vm._v("分享")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ask"
    }
  }, [_vm._v("问答")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "job"
    }
  }, [_vm._v("招聘")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dev"
    }
  }, [_vm._v("测试")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tab != 'dev' || false),
      expression: "tab != 'dev' || false"
    }],
    staticStyle: {
      "color": "red",
      "font-size": "12px"
    }
  }, [_vm._v("必须选择dev模块")]), _vm._v(" "), _c('label', {
    staticClass: "topic-title"
  }, [_vm._v("\n\t\t\t\t标题："), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    attrs: {
      "type": "text",
      "name": "title",
      "placeholder": "10字以上"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "keyup": _vm.change,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.title.length < 10),
      expression: "title.length < 10"
    }],
    staticStyle: {
      "color": "red",
      "font-size": "12px"
    }
  }, [_vm._v("必须10字以上")])]), _vm._v(" "), _c('mavon-editor', {
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
  }), _vm._v(" "), _c('input', {
    staticClass: "sub",
    attrs: {
      "type": "button",
      "value": "提交",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.submit
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2da845d3", module.exports)
  }
}

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("5f1b6561", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2da845d3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2da845d3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});