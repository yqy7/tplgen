"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var fs = require("fs");
var path = require("path");
var Handlebars = require("handlebars");
var TplGenOptions = /** @class */ (function () {
    function TplGenOptions() {
    }
    return TplGenOptions;
}());
function walk(dirname, outDir, context) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var dir, dir_1, dir_1_1, dirent, direntPath, outPath, text, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fs.promises.opendir(dirname)];
                case 1:
                    dir = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 12, 13, 18]);
                    dir_1 = __asyncValues(dir);
                    _b.label = 3;
                case 3: return [4 /*yield*/, dir_1.next()];
                case 4:
                    if (!(dir_1_1 = _b.sent(), !dir_1_1.done)) return [3 /*break*/, 11];
                    dirent = dir_1_1.value;
                    direntPath = path.resolve(dirname, dirent.name);
                    outPath = path.resolve(outDir, dirent.name);
                    outPath = compile(outPath, context);
                    if (!dirent.isDirectory()) return [3 /*break*/, 7];
                    return [4 /*yield*/, fs.promises.mkdir(outPath, { recursive: true })["catch"](function (e) { return console.log(e); })];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, walk(direntPath, outPath, context)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 7: return [4 /*yield*/, fs.promises.readFile(direntPath, 'utf8')];
                case 8:
                    text = _b.sent();
                    text = compile(text, context);
                    return [4 /*yield*/, fs.promises.writeFile(outPath, text, 'utf8')];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 3];
                case 11: return [3 /*break*/, 18];
                case 12:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 18];
                case 13:
                    _b.trys.push([13, , 16, 17]);
                    if (!(dir_1_1 && !dir_1_1.done && (_a = dir_1["return"]))) return [3 /*break*/, 15];
                    return [4 /*yield*/, _a.call(dir_1)];
                case 14:
                    _b.sent();
                    _b.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 17: return [7 /*endfinally*/];
                case 18: return [2 /*return*/];
            }
        });
    });
}
function compile(text, context) {
    var tpl = Handlebars.compile(text);
    return tpl(context);
}
module.exports = function (options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, walk(options.templateDir, options.outDir, options.context)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXlCO0FBQ3pCLDJCQUE2QjtBQUM3Qix1Q0FBeUM7QUFFekM7SUFBQTtJQUlBLENBQUM7SUFBRCxvQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBTUQsU0FBZSxJQUFJLENBQUMsT0FBZSxFQUFFLE1BQWMsRUFBRSxPQUFZOzs7Ozs7d0JBQ2pELHFCQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOztvQkFBeEMsR0FBRyxHQUFHLFNBQWtDOzs7O29CQUVuQixRQUFBLGNBQUEsR0FBRyxDQUFBOzs7OztvQkFBYixNQUFNLGdCQUFBLENBQUE7b0JBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFaEQsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBRWhDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBcEIsd0JBQW9CO29CQUNwQixxQkFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxPQUFLLENBQUEsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLEVBQUE7O29CQUE5RSxTQUE4RSxDQUFDO29CQUMvRSxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7O3dCQUU5QixxQkFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUE7O29CQUFyRCxJQUFJLEdBQUcsU0FBOEM7b0JBQ3pELElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM5QixxQkFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFBOztvQkFBbEQsU0FBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRzlEO0FBRUQsU0FBUyxPQUFPLENBQUMsSUFBWSxFQUFFLE9BQVk7SUFDdkMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBM0JELGlCQUFTLFVBQWUsT0FBc0I7Ozs7d0JBQzFDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOztvQkFBaEUsU0FBZ0UsQ0FBQzs7Ozs7Q0FDcEUsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBIYW5kbGViYXJzIGZyb20gJ2hhbmRsZWJhcnMnO1xuXG5jbGFzcyBUcGxHZW5PcHRpb25zIHtcbiAgICB0ZW1wbGF0ZURpcjogc3RyaW5nO1xuICAgIG91dERpcjogc3RyaW5nO1xuICAgIGNvbnRleHQ6IGFueTtcbn1cblxuZXhwb3J0ID0gYXN5bmMgZnVuY3Rpb24ob3B0aW9uczogVHBsR2VuT3B0aW9ucykge1xuICAgIGF3YWl0IHdhbGsob3B0aW9ucy50ZW1wbGF0ZURpciwgb3B0aW9ucy5vdXREaXIsIG9wdGlvbnMuY29udGV4dCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdhbGsoZGlybmFtZTogc3RyaW5nLCBvdXREaXI6IHN0cmluZyAsY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgZGlyID0gYXdhaXQgZnMucHJvbWlzZXMub3BlbmRpcihkaXJuYW1lKTtcblxuICAgIGZvciBhd2FpdCAoY29uc3QgZGlyZW50IG9mIGRpcikge1xuICAgICAgICBsZXQgZGlyZW50UGF0aCA9IHBhdGgucmVzb2x2ZShkaXJuYW1lLCBkaXJlbnQubmFtZSk7XG4gICAgXG4gICAgICAgIGxldCBvdXRQYXRoID0gcGF0aC5yZXNvbHZlKG91dERpciwgZGlyZW50Lm5hbWUpO1xuICAgICAgICBvdXRQYXRoID0gY29tcGlsZShvdXRQYXRoLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGlyZW50LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKG91dFBhdGgsIHtyZWN1cnNpdmU6IHRydWV9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICAgICAgICAgIGF3YWl0IHdhbGsoZGlyZW50UGF0aCwgb3V0UGF0aCwgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGRpcmVudFBhdGgsICd1dGY4Jyk7XG4gICAgICAgICAgICB0ZXh0ID0gY29tcGlsZSh0ZXh0LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLndyaXRlRmlsZShvdXRQYXRoLCB0ZXh0LCAndXRmOCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21waWxlKHRleHQ6IHN0cmluZywgY29udGV4dDogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgdHBsID0gSGFuZGxlYmFycy5jb21waWxlKHRleHQpO1xuICAgIHJldHVybiB0cGwoY29udGV4dCk7XG59Il19
