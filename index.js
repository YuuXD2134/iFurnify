function _0x262b(){const _0x458c71=['users','Listening\x20on\x20PORT\x203000','get','item','status','</h1>','static','name','replace','Password\x20is\x20required','\x27\x20telah\x20ditambahkan\x20ke\x20keranjang.','MONGODB_URL','use','Invalid\x20information','24390070yhtiMt','<h1\x20class=\x22welcome\x22>Welcome</h1>','Error:','Error\x20in\x20Connecting\x20to\x20Database','body-parser','4502060WyvPdC','Password\x20incorrect','error','body','Record\x20Inserted\x20Successfully','listen','log','mongoose','<h1\x20class=\x22welcome\x22>Welcome\x20','/sign_in','post','cart_items','5hXMzqH','6123047AsCHio','680986lhZerw','toArray','findOne','8FTDwDq','Gagal\x20menambahkan\x20item\x20\x27','566690vIsztZ','12efXOLi','collection','compare','send','redirect','dotenv','Internal\x20Server\x20Error','connect','insertOne','json','Connected\x20to\x20Database','connection','readFile','7780752oBXyWa','email','once','view/index.html','Error\x20during\x20login:','index.html','password','login.html','3470283suTkOu','/sign_up','/get_cart_items','Error\x20hashing\x20password:','hash','env'];_0x262b=function(){return _0x458c71;};return _0x262b();}const _0x2d13db=_0x30bb;(function(_0x5db1b1,_0x8e0177){const _0x2902b5=_0x30bb,_0x5521c2=_0x5db1b1();while(!![]){try{const _0xc8e302=-parseInt(_0x2902b5(0x1b9))/0x1+-parseInt(_0x2902b5(0x1be))/0x2*(parseInt(_0x2902b5(0x1bf))/0x3)+-parseInt(_0x2902b5(0x1ab))/0x4*(-parseInt(_0x2902b5(0x1b7))/0x5)+-parseInt(_0x2902b5(0x1cc))/0x6+parseInt(_0x2902b5(0x1b8))/0x7+-parseInt(_0x2902b5(0x1bc))/0x8*(parseInt(_0x2902b5(0x192))/0x9)+parseInt(_0x2902b5(0x1a6))/0xa;if(_0xc8e302===_0x8e0177)break;else _0x5521c2['push'](_0x5521c2['shift']());}catch(_0x4d7a3b){_0x5521c2['push'](_0x5521c2['shift']());}}}(_0x262b,0xe61a2),require(_0x2d13db(0x1c4))['config']());var express=require('express'),bodyParser=require(_0x2d13db(0x1aa)),mongoose=require(_0x2d13db(0x1b2)),bcrypt=require('bcrypt');const fs=require('fs'),app=express();function _0x30bb(_0x52064d,_0x86fe77){const _0x262b66=_0x262b();return _0x30bb=function(_0x30bbd2,_0x598558){_0x30bbd2=_0x30bbd2-0x191;let _0x53b3d4=_0x262b66[_0x30bbd2];return _0x53b3d4;},_0x30bb(_0x52064d,_0x86fe77);}app['use'](bodyParser[_0x2d13db(0x1c8)]()),app[_0x2d13db(0x1a4)](express[_0x2d13db(0x19e)]('view')),app['use'](bodyParser['urlencoded']({'extended':!![]})),mongoose[_0x2d13db(0x1c6)](process[_0x2d13db(0x197)][_0x2d13db(0x1a3)],{'useNewUrlParser':!![],'useUnifiedTopology':!![]});var db=mongoose[_0x2d13db(0x1ca)];db['on'](_0x2d13db(0x1ad),()=>console[_0x2d13db(0x1b1)](_0x2d13db(0x1a9))),db[_0x2d13db(0x1ce)]('open',()=>console[_0x2d13db(0x1b1)](_0x2d13db(0x1c9))),app[_0x2d13db(0x1b5)](_0x2d13db(0x193),async(_0x36e24d,_0x4b8c80)=>{const _0x2be0fb=_0x2d13db;var _0x3b1ba9=_0x36e24d[_0x2be0fb(0x1ae)]['name'],_0xcb06ce=_0x36e24d[_0x2be0fb(0x1ae)][_0x2be0fb(0x1cd)],_0x54f803=_0x36e24d[_0x2be0fb(0x1ae)][_0x2be0fb(0x1d2)];if(!_0x54f803)return _0x4b8c80[_0x2be0fb(0x19c)](0x190)[_0x2be0fb(0x1c8)]({'error':_0x2be0fb(0x1a1)});try{const _0x84551e=await bcrypt[_0x2be0fb(0x196)](_0x54f803,0xa);var _0x10dda2={'name':_0x3b1ba9,'email':_0xcb06ce,'password':_0x84551e};return db[_0x2be0fb(0x1c0)]('users')[_0x2be0fb(0x1c7)](_0x10dda2,(_0xe1387d,_0x385d50)=>{const _0x234853=_0x2be0fb;if(_0xe1387d)throw _0xe1387d;console['log'](_0x234853(0x1af));}),_0x4b8c80[_0x2be0fb(0x1c3)](_0x2be0fb(0x1d1));}catch(_0x2e2752){return console[_0x2be0fb(0x1ad)](_0x2be0fb(0x195),_0x2e2752),_0x4b8c80[_0x2be0fb(0x19c)](0x1f4)[_0x2be0fb(0x1c8)]({'error':_0x2be0fb(0x1c5)});}}),app[_0x2d13db(0x1b5)](_0x2d13db(0x1b4),async(_0x3c372e,_0xbb95a6)=>{const _0x4c0bc2=_0x2d13db;try{const _0x677a42=_0x3c372e['body']['email'],_0x5482b5=_0x3c372e[_0x4c0bc2(0x1ae)][_0x4c0bc2(0x1d2)],_0x10ed7a=await db[_0x4c0bc2(0x1c0)](_0x4c0bc2(0x198))[_0x4c0bc2(0x1bb)]({'email':_0x677a42});if(!_0x10ed7a)return _0xbb95a6[_0x4c0bc2(0x19c)](0x194)[_0x4c0bc2(0x1c2)](_0x4c0bc2(0x1a5));const _0x7eb474=await bcrypt[_0x4c0bc2(0x1c1)](_0x5482b5,_0x10ed7a[_0x4c0bc2(0x1d2)]);if(_0x7eb474){console['log']('Login\x20success');const _0x45a72d=_0x10ed7a[_0x4c0bc2(0x19f)];fs[_0x4c0bc2(0x1cb)](_0x4c0bc2(0x1cf),'utf8',(_0x5617a3,_0x3944a0)=>{const _0xe40681=_0x4c0bc2;if(_0x5617a3)return console[_0xe40681(0x1ad)]('Error\x20reading\x20index.html:',_0x5617a3),_0xbb95a6[_0xe40681(0x19c)](0x1f4)[_0xe40681(0x1c8)]({'error':_0xe40681(0x1c5)});_0x3944a0=_0x3944a0[_0xe40681(0x1a0)](_0xe40681(0x1a7),_0xe40681(0x1b3)+_0x45a72d+_0xe40681(0x19d)),_0xbb95a6[_0xe40681(0x1c2)](_0x3944a0);});}else return console[_0x4c0bc2(0x1b1)]('Password\x20incorrect'),_0xbb95a6[_0x4c0bc2(0x19c)](0x191)[_0x4c0bc2(0x1c2)](_0x4c0bc2(0x1ac));}catch(_0x56ffb6){return console[_0x4c0bc2(0x1ad)](_0x4c0bc2(0x1d0),_0x56ffb6),_0xbb95a6[_0x4c0bc2(0x19c)](0x1f4)['json']({'error':_0x4c0bc2(0x1c5)});}}),app['post']('/add_to_cart',async(_0x46876a,_0x2d9ccb)=>{const _0x1f3e3a=_0x2d13db,_0x20de23=_0x46876a[_0x1f3e3a(0x1ae)][_0x1f3e3a(0x19b)];try{const _0x3ecb4a=await db[_0x1f3e3a(0x1c0)](_0x1f3e3a(0x1b6))['insertOne']({'item':_0x20de23});return _0x3ecb4a['insertedCount']===0x1?(console[_0x1f3e3a(0x1b1)]('Item\x20\x27'+_0x20de23+_0x1f3e3a(0x1a2)),_0x2d9ccb[_0x1f3e3a(0x1c8)]({'success':!![]})):(console[_0x1f3e3a(0x1ad)](_0x1f3e3a(0x1bd)+_0x20de23+'\x27\x20ke\x20keranjang.'),_0x2d9ccb[_0x1f3e3a(0x1c8)]({'success':![]}));}catch(_0x3bf218){return console[_0x1f3e3a(0x1ad)](_0x1f3e3a(0x1a8),_0x3bf218),_0x2d9ccb['status'](0x1f4)[_0x1f3e3a(0x1c8)]({'error':_0x1f3e3a(0x1c5)});}}),app[_0x2d13db(0x19a)](_0x2d13db(0x194),async(_0x4b3972,_0x30dddb)=>{const _0x17261f=_0x2d13db;try{const _0x250021=db['collection'](_0x17261f(0x1b6))['find'](),_0x4c5a2a=await _0x250021[_0x17261f(0x1ba)]();return _0x30dddb['json']({'success':!![],'cartItems':_0x4c5a2a});}catch(_0x4ca883){return console[_0x17261f(0x1ad)](_0x17261f(0x1a8),_0x4ca883),_0x30dddb['status'](0x1f4)['json']({'error':_0x17261f(0x1c5)});}}),app['get']('/',(_0x29d73f,_0x5b049a)=>{const _0x7bf2e7=_0x2d13db;return _0x5b049a['set']({'Access-Control-Allow-Origin':'*'}),_0x5b049a[_0x7bf2e7(0x1c3)](_0x7bf2e7(0x191));})[_0x2d13db(0x1b0)](0xbb8),console[_0x2d13db(0x1b1)](_0x2d13db(0x199));
