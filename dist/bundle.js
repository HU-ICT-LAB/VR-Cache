/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/cache-sound.js":
/*!***************************************!*\
  !*** ./src/components/cache-sound.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vector3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/vector3d */ \"./src/utils/vector3d.js\");\n\r\n\r\nconst DISTANCE_TO_HEAR = 10;\r\n\r\n/**\r\n * Component to check interactions with the cache\r\n */\r\nwindow.AFRAME.registerComponent(\"cache-sound\", {\r\n\tinSoundDistance: false,\r\n\tinSoundDistanceTriggered: false,\r\n\r\n\t/**\r\n\t * Gets called every frame\r\n\t */\r\n\ttick() {\r\n\t\tthis.checkDistance();\r\n\t\tthis.handleSound();\r\n\t},\r\n\r\n\t/**\r\n\t * Checks if the player is in distance of the cache\r\n\t */\r\n\tcheckDistance() {\r\n\t\tconst playerPosition = document.getElementById(\"rig\").object3D.position;\r\n\t\tconst cachePosition = document.getElementById(\"cache\").object3D.position;\r\n\r\n\t\tconst result = new _utils_vector3d__WEBPACK_IMPORTED_MODULE_0__.Vector3D(\r\n\t\t\tcachePosition.x - playerPosition.x,\r\n\t\t\tcachePosition.y - playerPosition.y,\r\n\t\t\tcachePosition.z - playerPosition.z\r\n\t\t);\r\n\r\n\t\tthis.inSoundDistance = result.magnitude() <= DISTANCE_TO_HEAR;\r\n\t},\r\n\r\n\t/**\r\n\t * Handle all the events that are being emitted by this component\r\n\t */\r\n\r\n\thandleSound() {\r\n\t\tif (this.inSoundDistance && !this.inSoundDistanceTriggered) {\r\n\t\t\tdocument.querySelector(\"#cache\").components.sound.playSound();\r\n\t\t\tthis.inSoundDistanceTriggered = true;\r\n\t\t} else if (!this.inSoundDistance) {\r\n\t\t\tdocument.querySelector(\"#cache\").components.sound.stopSound();\r\n\t\t\tthis.inSoundDistanceTriggered = false;\r\n\t\t}\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/cache-sound.js?");

/***/ }),

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cache_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-sound */ \"./src/components/cache-sound.js\");\n/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer/timer */ \"./src/components/timer/timer.js\");\n/* harmony import */ var _timer_timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timer_timer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _timer_display_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer/display-timer */ \"./src/components/timer/display-timer.js\");\n/* harmony import */ var _timer_display_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_timer_display_timer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _menu_pause_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/pause-component */ \"./src/components/menu/pause-component.js\");\n/* harmony import */ var _menu_pause_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu_pause_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _world_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./world/tree */ \"./src/components/world/tree.js\");\n/* harmony import */ var _world_tree__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_world_tree__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _world_campfire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./world/campfire */ \"./src/components/world/campfire.js\");\n/* harmony import */ var _world_campfire__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_world_campfire__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _world_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world/log */ \"./src/components/world/log.js\");\n/* harmony import */ var _world_log__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_world_log__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _world_player_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./world/player/player */ \"./src/components/world/player/player.js\");\n/* harmony import */ var _world_player_player__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_world_player_player__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _world_player_oculus_oculus_input_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./world/player/oculus/oculus-input-handler */ \"./src/components/world/player/oculus/oculus-input-handler.js\");\n/* harmony import */ var _world_player_oculus_oculus_input_handler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_world_player_oculus_oculus_input_handler__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _world_player_pc_keyboard_input_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./world/player/pc/keyboard-input-handler */ \"./src/components/world/player/pc/keyboard-input-handler.js\");\n/* harmony import */ var _world_player_oculus_sonar_vibration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./world/player/oculus/sonar-vibration */ \"./src/components/world/player/oculus/sonar-vibration.js\");\n/* harmony import */ var _world_cache_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./world/cache/cache */ \"./src/components/world/cache/cache.js\");\n/* harmony import */ var _world_cache_cache__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_world_cache_cache__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _world_a11y_description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./world/a11y/description */ \"./src/components/world/a11y/description.js\");\n/* harmony import */ var _world_a11y_description__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_world_a11y_description__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _world_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./world/border */ \"./src/components/world/border.js\");\n/* harmony import */ var _world_border__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_world_border__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overlay */ \"./src/components/overlay.js\");\n/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_overlay__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _world_player_player_sound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./world/player/player-sound */ \"./src/components/world/player/player-sound.js\");\n/* harmony import */ var _world_player_player_sound__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_world_player_player_sound__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _world_player_oculus_object_sound_handler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./world/player/oculus/object-sound-handler */ \"./src/components/world/player/oculus/object-sound-handler.js\");\n/* harmony import */ var _world_player_oculus_object_sound_handler__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_world_player_oculus_object_sound_handler__WEBPACK_IMPORTED_MODULE_16__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://vr-cache/./src/components/components.js?");

/***/ }),

/***/ "./src/components/menu/pause-component.js":
/*!************************************************!*\
  !*** ./src/components/menu/pause-component.js ***!
  \************************************************/
/***/ (() => {

eval("/**\r\n * Component to pause and unpause the game\r\n */\r\nwindow.AFRAME.registerComponent(\"pause-component\", {\r\n\tinit() {\r\n\t\tconst timer = document.querySelector(\"#timer\");\r\n\t\tconst display = document.querySelector(\"[display-timer]\");\r\n\t\tconst camera = this;\r\n\r\n\t\tlet pause = false;\r\n\r\n\t\tdocument.onkeydown = function menu(e) {\r\n\t\t\tif (e.key === \"Escape\") {\r\n\t\t\t\tif (!pause) {\r\n\t\t\t\t\tdisplay.setAttribute(\"visible\", \"false\");\r\n\t\t\t\t\tpause = true;\r\n\t\t\t\t\ttimer.emit(\"paused\");\r\n\t\t\t\t\tcamera.el.pause();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdisplay.setAttribute(\"visible\", \"true\");\r\n\t\t\t\t\tpause = false;\r\n\t\t\t\t\ttimer.emit(\"continued\");\r\n\t\t\t\t\tcamera.el.play();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/menu/pause-component.js?");

/***/ }),

/***/ "./src/components/overlay.js":
/*!***********************************!*\
  !*** ./src/components/overlay.js ***!
  \***********************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"overlay\", {\r\n\tdependencies: [\"material\"],\r\n\tinit: function () {\r\n\t\tthis.el.sceneEl.renderer.sortObjects = true;\r\n\t\tthis.el.object3D.renderOrder = 100;\r\n\t\tthis.el.components.material.material.depthTest = false;\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/overlay.js?");

/***/ }),

/***/ "./src/components/timer/display-timer.js":
/*!***********************************************!*\
  !*** ./src/components/timer/display-timer.js ***!
  \***********************************************/
/***/ (() => {

eval("/**\r\n * Component to show a timer UI\r\n */\r\nwindow.AFRAME.registerComponent(\"display-timer\", {\r\n\tinit: function () {\r\n\t\tconst text = document.createElement(\"a-text\");\r\n\r\n\t\ttext.setAttribute(\"value\", \"00\" + \":\" + \"00\");\r\n\t\ttext.setAttribute(\"font\", \"https://cdn.aframe.io/fonts/Monoid.fnt\");\r\n\t\ttext.setAttribute(\"color\", \"#000000\");\r\n\t\tthis.el.appendChild(text);\r\n\r\n\t\tconst component = this;\r\n\t\tthis.el.sceneEl.addEventListener(\"timeUpdated\", function (event) {\r\n\t\t\ttext.setAttribute(\"value\", component.makeNumberTwoDigits(event.detail.updatedTime.m) + \":\" + component.makeNumberTwoDigits(event.detail.updatedTime.s));\r\n\t\t});\r\n\t},\r\n\r\n\t/**\r\n\t * Put a 0 in front of a number if it is less than 10\r\n\t * @param number\r\n\t * @returns {*}\r\n\t */\r\n\tmakeNumberTwoDigits(number) {\r\n\t\treturn (number < 10 ? \"0\" : \"\") + number;\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/timer/display-timer.js?");

/***/ }),

/***/ "./src/components/timer/timer.js":
/*!***************************************!*\
  !*** ./src/components/timer/timer.js ***!
  \***************************************/
/***/ (() => {

eval("const time = {s: 0, m: 0};\r\nlet interval;\r\n\r\n/**\r\n * Component that keeps track of the game time\r\n */\r\nwindow.AFRAME.registerComponent(\"timer\", {\r\n\tinit: function () {\r\n\t\tinterval = setInterval(this.updateTime, 1000);\r\n\r\n\t\tconst component = this;\r\n\r\n\t\tthis.el.sceneEl.addEventListener(\"paused\", component.stop);\r\n\t\tthis.el.sceneEl.addEventListener(\"continued\", function () {\r\n\t\t\tcomponent.continue();\r\n\t\t});\r\n\t},\r\n\r\n\t/**\r\n\t * Keep track of the game time\r\n\t */\r\n\tupdateTime() {\r\n\t\tif (time.s === 60) {\r\n\t\t\ttime.m++;\r\n\t\t\ttime.s = 0;\r\n\t\t}\r\n\r\n\t\ttime.s++;\r\n\r\n\t\tdocument.getElementById(\"timer\").emit(\"timeUpdated\", {updatedTime: time}, true);\r\n\t},\r\n\r\n\t/**\r\n\t * Continue timer after it has been paused\r\n\t */\r\n\tcontinue() {\r\n\t\tinterval = setInterval(this.updateTime, 1000);\r\n\t},\r\n\r\n\t/**\r\n\t * Stop the timer\r\n\t */\r\n\tstop() {\r\n\t\tclearInterval(interval);\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/timer/timer.js?");

/***/ }),

/***/ "./src/components/world/a11y/description.js":
/*!**************************************************!*\
  !*** ./src/components/world/a11y/description.js ***!
  \**************************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"description\", {\r\n\tschema: {\r\n\t\tname: {type: \"string\"}\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/a11y/description.js?");

/***/ }),

/***/ "./src/components/world/border.js":
/*!****************************************!*\
  !*** ./src/components/world/border.js ***!
  \****************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"border\", {\r\n\tinit: function () {\r\n\t\tconst element = this.el;\r\n\t\telement.setAttribute(\"material\", \"opacity: 0;\");\r\n\t\telement.setAttribute(\"width\", \"100\");\r\n\t\telement.setAttribute(\"height\", \"20\");\r\n\t\telement.setAttribute(\"depth\", \"1\");\r\n\t\telement.setAttribute(\"static-body\", null);\r\n\t\telement.setAttribute(\"Class\", \"interactable\");\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"wereldborder\");\r\n\t\t\tdocument.getElementById(\"right\").components.haptics.pulse(0.5, 50);\r\n\t\t});\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected-cleared\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"\");\r\n\t\t});\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/border.js?");

/***/ }),

/***/ "./src/components/world/cache/cache.js":
/*!*********************************************!*\
  !*** ./src/components/world/cache/cache.js ***!
  \*********************************************/
/***/ (() => {

eval("const positions = [{position: \"-13.43007 -0.00483 -5.78539\", rotation: \"0 37.83 0\"},\r\n\t{position: \"-6.52414 -0.00483 -9.61352\", rotation: \"0 37.83 0\"},\r\n\t{position: \"0.97651 -0.00483 -11.41705\", rotation: \"0 0 0\"},\r\n\t{position: \"9.16316 -0.00483 -12.47704\", rotation: \"0 -36.94 0\"},\r\n\t{position: \"13.40126 -0.00483 -7.60519\", rotation: \"0 -60.94 0\"},\r\n\t{position: \"12.07774 -0.00483 8.65857\", rotation: \"0 -127.14 0\"},\r\n\t{position: \"5.349 -0.00483 8.002\", rotation: \"0 -127.140 0\"},\r\n\t{position: \"-7.877 -0.00483 11.000\", rotation: \"0 -216.710 0\"}];\r\n\r\nwindow.AFRAME.registerComponent(\"cache\", {\r\n\tinit() {\r\n\t\tconst random = Math.floor(Math.random() * positions.length);\r\n\t\tthis.el.setAttribute(\"position\", positions[random].position);\r\n\t\tthis.el.setAttribute(\"rotation\", positions[random].rotation);\r\n\t\tthis.el.setAttribute(\"gltf-model\", \"assets/cache.gltf\");\r\n\t\tthis.el.setAttribute(\"scale\", \"0.2 0.2 0.2\");\r\n\t\tthis.el.setAttribute(\"sound\", \"src: assets/CacheGeluid.mp3; autoplay: true; loop: true; maxDistance: 10000; rolloffFactor: 3; volume: 1;\");\r\n\r\n\t\tconst hitbox = document.createElement(\"a-sphere\");\r\n\r\n\t\thitbox.setAttribute(\"position\", positions[random].position);\r\n\t\thitbox.setAttribute(\"radius\", \"0.75\");\r\n\t\thitbox.setAttribute(\"opacity\", \"0\");\r\n\t\thitbox.setAttribute(\"class\", \"interactable\");\r\n\r\n\t\thitbox.addEventListener(\"raycaster-intersected\", function () {\r\n\t\t\tsessionStorage.setItem(\"interacting\", \"true\");\r\n\t\t\tdocument.getElementById(\"cacheSoundAsset\").components.sound.playSound();\r\n\t\t\tdocument.getElementById(\"right\").components.haptics.pulse(0.5, 50);\r\n\t\t});\r\n\r\n\t\thitbox.addEventListener(\"raycaster-intersected-cleared\", function () {\r\n\t\t\tsessionStorage.setItem(\"interacting\", \"false\");\r\n\t\t});\r\n\r\n\t\tdocument.getElementById(\"scene\").appendChild(hitbox);\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/cache/cache.js?");

/***/ }),

/***/ "./src/components/world/campfire.js":
/*!******************************************!*\
  !*** ./src/components/world/campfire.js ***!
  \******************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"campfire\", {\r\n\tinit: function () {\r\n\t\tconst element = this.el;\r\n\r\n\t\telement.setAttribute(\"geometry\", \"height: 5.06; radiusBottom: 4.30; radiusTop: 1.56\");\r\n\t\telement.setAttribute(\"material\", \"opacity: 0;\");\r\n\t\telement.setAttribute(\"sound\", \"src: assets/KampvuurGeluid.mp3; autoplay: true; loop: true; volume: 3.5\");\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"kampvuur\");\r\n\t\t\tdocument.getElementById(\"right\").components.haptics.pulse(0.5, 50);\r\n\t\t});\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected-cleared\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"\");\r\n\t\t});\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/campfire.js?");

/***/ }),

/***/ "./src/components/world/log.js":
/*!*************************************!*\
  !*** ./src/components/world/log.js ***!
  \*************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"log\", {\r\n\tinit: function () {\r\n\t\tconst element = this.el;\r\n\r\n\t\telement.setAttribute(\"geometry\", \"height: 6; radius: 1.5;\");\r\n\t\telement.setAttribute(\"material\", \"opacity: 0;\");\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"kleineBoomstam\");\r\n\t\t\tdocument.getElementById(\"right\").components.haptics.pulse(0.5, 50);\r\n\t\t});\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected-cleared\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"\");\r\n\t\t});\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/log.js?");

/***/ }),

/***/ "./src/components/world/player/oculus/object-sound-handler.js":
/*!********************************************************************!*\
  !*** ./src/components/world/player/oculus/object-sound-handler.js ***!
  \********************************************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"object-sound-handler\", {\r\n\tinit() {\r\n\t\tthis.el.addEventListener(\"triggerdown\", function () {\r\n\t\t\tswitch (sessionStorage.getItem(\"object\")) {\r\n\t\t\tcase \"boom\":\r\n\t\t\t\tdocument.getElementById(\"boomSoundAsset\").components.sound.playSound();\r\n\t\t\t\tbreak;\r\n\t\t\tcase \"kleineBoomstam\":\r\n\t\t\t\tdocument.getElementById(\"kleineBoomstamSoundAsset\").components.sound.playSound();\r\n\t\t\t\tbreak;\r\n\t\t\tcase \"kampvuur\":\r\n\t\t\t\tdocument.getElementById(\"kampvuurSoundAsset\").components.sound.playSound();\r\n\t\t\t\tbreak;\r\n\t\t\tcase \"wereldborder\":\r\n\t\t\t\tdocument.getElementById(\"wereldborderSoundAsset\").components.sound.playSound();\r\n\t\t\t\tbreak;\r\n\t\t\tdefault:\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/player/oculus/object-sound-handler.js?");

/***/ }),

/***/ "./src/components/world/player/oculus/oculus-input-handler.js":
/*!********************************************************************!*\
  !*** ./src/components/world/player/oculus/oculus-input-handler.js ***!
  \********************************************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"oculus-input-handler\", {\r\n\tinit() {\r\n\t\tthis.el.addEventListener(\"abuttondown\", function () {\r\n\t\t\tif (sessionStorage.getItem(\"interacting\") === \"true\") {\r\n\t\t\t\tdocument.getElementById(\"cacheGevondenSoundAsset\").components.sound.playSound();\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://vr-cache/./src/components/world/player/oculus/oculus-input-handler.js?");

/***/ }),

/***/ "./src/components/world/player/oculus/sonar-vibration.js":
/*!***************************************************************!*\
  !*** ./src/components/world/player/oculus/sonar-vibration.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vector3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/vector3d */ \"./src/utils/vector3d.js\");\n\r\n\r\nwindow.AFRAME.registerComponent(\"vibration\", {\r\n\tpressed: false,\r\n\tinit() {\r\n\t\tthis.el.addEventListener(\"gripdown\", () => {\r\n\t\t\tthis.pressed = true;\r\n\t\t});\r\n\t\tthis.el.addEventListener(\"gripup\", () => {\r\n\t\t\tthis.pressed = false;\r\n\t\t});\r\n\t\tsetInterval(this.sonar.bind(this), 1500);\r\n\t},\r\n\tsonar() {\r\n\t\tlet pulse;\r\n\t\tif (this.pressed) {\r\n\t\t\tconst cachePosition = document.getElementById(\"rig\").object3D.position;\r\n\t\t\tconst playerPosition = document.getElementById(\"cache\").object3D.position;\r\n\r\n\t\t\tconst result = new _utils_vector3d__WEBPACK_IMPORTED_MODULE_0__.Vector3D(\r\n\t\t\t\tcachePosition.x - playerPosition.x,\r\n\t\t\t\tcachePosition.y - playerPosition.y,\r\n\t\t\t\tcachePosition.z - playerPosition.z\r\n\t\t\t);\r\n\r\n\t\t\tpulse = 1300 - result.magnitude() * 65;\r\n\t\t\tif (pulse > 0) {\r\n\t\t\t\tthis.el.components.haptics.pulse(0.5, pulse);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/player/oculus/sonar-vibration.js?");

/***/ }),

/***/ "./src/components/world/player/pc/keyboard-input-handler.js":
/*!******************************************************************!*\
  !*** ./src/components/world/player/pc/keyboard-input-handler.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vector3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/vector3d */ \"./src/utils/vector3d.js\");\n\r\n\r\nwindow.AFRAME.registerComponent(\"keyboard-input-handler\", {\r\n\tinit() {\r\n\t\tdocument.addEventListener(\"keydown\", this.interact);\r\n\t},\r\n\r\n\tinteract: function (e) {\r\n\t\tif (e.key === \"e\") {\r\n\t\t\tconst playerPosition = document.querySelector(\"[camera]\").object3D.position;\r\n\t\t\tconst cachePosition = document.getElementById(\"cache\").object3D.position;\r\n\r\n\t\t\tconst result = new _utils_vector3d__WEBPACK_IMPORTED_MODULE_0__.Vector3D(\r\n\t\t\t\tcachePosition.x - playerPosition.x,\r\n\t\t\t\tcachePosition.y - playerPosition.y,\r\n\t\t\t\tcachePosition.z - playerPosition.z\r\n\t\t\t);\r\n\r\n\t\t\tif (result.magnitude() <= 3) {\r\n\t\t\t\twindow.location.href = \"./succes.html\";\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://vr-cache/./src/components/world/player/pc/keyboard-input-handler.js?");

/***/ }),

/***/ "./src/components/world/player/player-sound.js":
/*!*****************************************************!*\
  !*** ./src/components/world/player/player-sound.js ***!
  \*****************************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"player-sound\", {\r\n\twalking: false,\r\n\talreadyWalking: false,\r\n\tinit() {\r\n\t\tthis.el.addEventListener(\"thumbstickmoved\", this.isWalking.bind(this));\r\n\t},\r\n\r\n\tisWalking(e) {\r\n\t\tthis.walking = e.detail.y !== 0 || e.detail.x !== 0;\r\n\t},\r\n\r\n\ttick() {\r\n\t\tconsole.log(this.walking);\r\n\t\tif (this.walking && !this.alreadyWalking) {\r\n\t\t\tdocument.getElementById(\"playerWalkingsoundAsset\").components.sound.playSound();\r\n\t\t\tthis.alreadyWalking = true;\r\n\t\t} else if (!this.walking) {\r\n\t\t\tdocument.getElementById(\"playerWalkingsoundAsset\").components.sound.stopSound();\r\n\t\t\tthis.alreadyWalking = false;\r\n\t\t}\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/player/player-sound.js?");

/***/ }),

/***/ "./src/components/world/player/player.js":
/*!***********************************************!*\
  !*** ./src/components/world/player/player.js ***!
  \***********************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"player\", {\r\n\tschema: {\r\n\t\tdevice: {type: \"string\"},\r\n\t\tvisual: {type: \"string\"}\r\n\t},\r\n\tinit: function () {\r\n\t\tconst element = this.el;\r\n\t\tconst displaytimer = document.createElement(\"a-entity\");\r\n\t\tconst timer = document.createElement(\"a-entity\");\r\n\r\n\t\tdisplaytimer.setAttribute(\"display-timer\", null);\r\n\t\tdisplaytimer.setAttribute(\"position\", \"1 0.72 -1\");\r\n\t\ttimer.setAttribute(\"timer\", null);\r\n\t\ttimer.setAttribute(\"position\", \"0 0 -1\");\r\n\t\ttimer.setAttribute(\"id\", \"timer\");\r\n\r\n\t\tlet visual = \"\";\r\n\r\n\t\tif (sessionStorage.getItem(\"gamemode\") === \"blind\") {\r\n\t\t\tvisual = \"<a-plane id=\\\"hud\\\" overlay rotation=\\\"0 0 0\\\" position=\\\"0 0 -0.1\\\" width=\\\"1\\\" height=\\\"1\\\" color=\\\"black\\\" shadow></a-plane>\";\r\n\t\t}\r\n\t\tif (sessionStorage.getItem(\"gamemode\") === \"tunnel\") {\r\n\t\t\tvisual = \"<a-image src='assets/tunnel.png' id=\\\"hud\\\" overlay rotation=\\\"0 0 0\\\" position=\\\"0 0 -0.25\\\"></a-image>\";\r\n\t\t}\r\n\r\n\t\tswitch (this.data.device) {\r\n\t\tcase \"pc\" :\r\n\t\t\telement.innerHTML =\r\n                    \"<a-entity id=\\\"camera\\\" position=\\\"0 1.6 0\\\">\\n\" +\r\n                    \"     <a-entity camera keyboard-input-handler kinematic-body look-controls wasd-controls pause-component>\\n\" +\r\n                    \"         <a-entity position=\\\"1 0.72 -1\\\" display-timer></a-entity>\\n\" +\r\n                    \"         <a-entity position=\\\"0 0 -1\\\" id=\\\"timer\\\" timer></a-entity>\\n\" +\r\n                    \"     </a-entity>\\n\" +\r\n                    \"</a-entity>\";\r\n\t\t\tbreak;\r\n\t\tcase \"oculus\" :\r\n\t\t\telement.innerHTML =\r\n\t\t\t\t\"            <a-entity display-timer></a-entity>\\n\" +\r\n\t\t\t\t\"            <a-entity id=\\\"timer\\\" timer></a-entity>\\n\" +\r\n\t\t\t\t\"<a-entity id=\\\"rig\\\" kinematic-body=\\\"shape:mesh\\\">\\n\" +\r\n\t\t\t\t\"    <a-entity id=\\\"camera\\\" position=\\\"0 0 0\\\">\\n\" +\r\n\t\t\t\t\"        <a-entity camera look-controls cache-interaction pause-component>\"+ visual +\"</a-entity>\\n\" +\r\n\t\t\t\t\"    </a-entity>\\n\" +\r\n\t\t\t\t\"    <a-entity id=\\\"left\\\" haptics vibration oculus-touch-controls=\\\"hand: left\\\" ></a-entity>\\n\" +\r\n\t\t\t\t\"    <a-entity id=\\\"right\\\" haptics vibration oculus-touch-controls=\\\"hand: right\\\" laser-controls raycaster=\\\"lineColor: red; lineOpacity: 0.5; far: 1.6; objects: .interactable\\\" oculus-input-handler object-sound-handler player-sound cache-sound oculus-thumbstick-controls=\\\"acceleration: 20\\\"></a-entity>\\n\" +\r\n\t\t\t\t\"</a-entity>\";\r\n\t\t\tbreak;\r\n\t\tcase \"mobile\" :\r\n\t\t\telement.innerHTML =\r\n                \"<a-entity id=\\\"camera\\\" position=\\\"0 0 0\\\">\\n\" +\r\n                \"     <a-entity camera kinematic-body universal-controls cache-interaction pause-component>\\n\" +\r\n                \"         <a-entity position=\\\"1 0.72 -1\\\" display-timer></a-entity>\\n\" +\r\n                \"         <a-entity position=\\\"0 0 -1\\\" id=\\\"timer\\\" timer></a-entity>\\n\" +\r\n                \"     </a-entity>\\n\" +\r\n                \"</a-entity>\";\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\r\n\t\t}\r\n\t}\r\n})\r\n;\n\n//# sourceURL=webpack://vr-cache/./src/components/world/player/player.js?");

/***/ }),

/***/ "./src/components/world/tree.js":
/*!**************************************!*\
  !*** ./src/components/world/tree.js ***!
  \**************************************/
/***/ (() => {

eval("window.AFRAME.registerComponent(\"tree\", {\r\n\tschema: {\r\n\t\tsize: {type: \"string\"}\r\n\t},\r\n\tinit: function () {\r\n\t\tconst element = this.el;\r\n\r\n\t\telement.setAttribute(\"geometry\", \"height: 30; radius: 3.33;\");\r\n\t\telement.setAttribute(\"material\", \"opacity: 0;\");\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"boom\");\r\n\t\t\tdocument.getElementById(\"right\").components.haptics.pulse(0.5, 50);\r\n\t\t});\r\n\r\n\t\tthis.el.addEventListener(\"raycaster-intersected-cleared\", function () {\r\n\t\t\tsessionStorage.setItem(\"object\", \"\");\r\n\t\t});\r\n\t}\r\n});\n\n//# sourceURL=webpack://vr-cache/./src/components/world/tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components */ \"./src/components/components.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://vr-cache/./src/index.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vector3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector3d */ \"./src/utils/vector3d.js\");\n\n\n//# sourceURL=webpack://vr-cache/./src/utils/utils.js?");

/***/ }),

/***/ "./src/utils/vector3d.js":
/*!*******************************!*\
  !*** ./src/utils/vector3d.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector3D\": () => (/* binding */ Vector3D)\n/* harmony export */ });\n/**\r\n * Vector3D class with functionalities to do calculations\r\n */\r\nclass Vector3D {\r\n\tconstructor(x, y, z) {\r\n\t\tthis.x = x;\r\n\t\tthis.y = y;\r\n\t\tthis.z = z;\r\n\t}\r\n\r\n\t/**\r\n\t * Get the magnitude of the vector\r\n\t * @returns {number}\r\n\t */\r\n\tmagnitude() {\r\n\t\treturn Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));\r\n\t}\r\n}\n\n//# sourceURL=webpack://vr-cache/./src/utils/vector3d.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;