"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorySchema = exports.History = exports.Chain = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Chain;
(function (Chain) {
    Chain["Ethereum"] = "ETH";
    Chain["Polygon"] = "POLY";
    Chain["BinanceSmartChain"] = "BSC";
    Chain["Arbitrum"] = "ARB";
    Chain["Avalanche"] = "AVAX";
    Chain["Fantom"] = "FANTOM";
    Chain["Optimism"] = "OP";
    Chain["MUMBAI"] = "MUMBAI";
})(Chain || (exports.Chain = Chain = {}));
let History = class History {
};
exports.History = History;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], History.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], History.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], History.prototype, "chain", void 0);
exports.History = History = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], History);
exports.HistorySchema = mongoose_1.SchemaFactory.createForClass(History);
//# sourceMappingURL=History.schema.js.map