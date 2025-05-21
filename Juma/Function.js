var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}
Object.defineProperty(exports, "__esModule", { value: true })

const axios = require("axios")
const cheerio = require("cheerio")
const { resolve } = require("path")
const util = require("util")
let BodyForm = require('form-data')
let { fromBuffer } = require('file-type')
//let fetch = require('node-fetch')
let fs = require('fs')



exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
