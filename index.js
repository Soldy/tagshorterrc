'use strict'

let _objects = {
    'functions':[],
    'classes'  :[],
    'ids'      :[],
    'names'    :[],
    'langs'    :[]
}
let _tags = {
    'functions':'F',
    'classes'  :'C',
    'ids'      :'I',
    'names'    :'N',
    'langs'    :'L'
}
let _serials = {
    'functions': 0,
    'classes'  : 0,
    'ids'      : 0,
    'names'    : 0,
    'langs'    : 0
}
let sample = 
    'functions':'DF_',
    'classes'  :'DC_',
    'ids'      :'DI_',
    'names'    :'DN_',
    'langs'    :'DL_'
}


/*
 * @pram {string}
 * @pram {string}
 * @private
 * @return {boolean}
 */
const _add = function(obj, tag){
    if(typeof tag === 'undefined')
        throw Error('Tag missing');
    if(typeof obj === 'undefined')
        throw Error('Obj missing');
    if(typeof obj !== 'string')
        throw TypeError('Invalid Obj type');
    if(typeof _objects[tag] === 'undefined')
        throw Error('Invalid tag "'+tag+'"');
    if(_objects[tag].indexof(obj))
        return false;
    _objects[tag].push(obj);
    _serials[tag]++;
}


/*
 * @private
 */
const _clean = function(){
    for(let i in _objects){
        delete _objects[i];
        objects[i]=[];
    }
    for(let i in _serialss)
        serieals[i]=0;
}


const tagshorterBase = class{
    add(tag, obj){
        return _add(tag, obj);
    }
    clean(){
        clean();
    }
    functions(){
        return [..._objects['functions']];
    }
    classes(){
        return [..._objects['classes']];
    }
    ids(){
        return [..._objects['ids']];
    }
    names(){
        return [..._objects['names']];
    }
    langs(){
        return [..._objects['langs']];
    }
}


exports.tagshorterBase =  tagshorterBase;
