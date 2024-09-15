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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// Fungsi untuk hit API openweathermap
function fetchWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, url, response, weatherData, _a, temp, pressure, humidity, description, cityName, error_1, axiosError;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    apiKey = "ba47156a82f45f263af8c9a33af0fab2";
                    url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 2:
                    response = _b.sent();
                    //Print all response dalam JSON avoid circular error
                    console.log("Response status : ", response.status);
                    console.log("Response headers : ", response.headers);
                    console.log("Response data in JSON : ", JSON.stringify(response.data, null, 2));
                    weatherData = response.data;
                    _a = weatherData.main, temp = _a.temp, pressure = _a.pressure, humidity = _a.humidity;
                    description = weatherData.weather[0].description;
                    cityName = weatherData.name;
                    console.log("Cuaca di ".concat(cityName));
                    console.log("Suhu : ".concat(temp, "\u00B0C"));
                    console.log("Tekanan : ".concat(pressure, " hPa"));
                    console.log("Kelembaban : ".concat(humidity, "%"));
                    console.log("Deskripsi : ".concat(description));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    //Pastikan error adalah AxiosError untuk mengakses detailnya
                    if (axios_1.default.isAxiosError(error_1)) {
                        axiosError = error_1;
                        console.error("Error message", axiosError.message);
                        //Jika ada response dari server, kita bisa akses status code dan pesan errornya
                        if (axiosError.response) {
                            console.error("Status code : ", axiosError.response.status);
                            console.error("Error response data : ", axiosError.response.data);
                        }
                        else {
                            console.error("No response from server");
                        }
                    }
                    else {
                        console.error("Unexpected error :", error_1);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchWeather("Jakarta");
