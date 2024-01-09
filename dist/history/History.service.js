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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const History_schema_1 = require("./schemas/History.schema");
let HistoryService = class HistoryService {
    constructor(HistoryModel) {
        this.HistoryModel = HistoryModel;
    }
    async create(History) {
        const checkHistory = await this.HistoryModel.findOne(History);
        if (checkHistory) {
            throw new common_1.BadRequestException('History has been used');
        }
        const res = await this.HistoryModel.create(History);
        return res;
    }
    async findOne(History) {
        const Historyx = {
            History: History
        };
        const items = {
            address: 1,
            chain: 1,
            _id: 0
        };
        const item = await this.HistoryModel.findOne(Historyx, items);
        if (!item) {
            throw new common_1.NotFoundException('Invalid History');
        }
        return item;
    }
    async findAll(history) {
        const Historyx = {
            address: history
        };
        const items = {
            address: 1,
            code: 1,
            chain: 1,
            _id: 0
        };
        const item = await this.HistoryModel.find(Historyx, items).exec();
        if (!item || item.length === 0) {
            throw new common_1.NotFoundException('Invalid History');
        }
        return item;
    }
};
exports.HistoryService = HistoryService;
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(History_schema_1.History.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], HistoryService);
//# sourceMappingURL=History.service.js.map