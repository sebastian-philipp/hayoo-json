[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/luautils/docs/Scripting-LuaUtils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package is an add-on to the \u003ccode\u003eHsLua\u003c/code\u003e package by Gracjan Polak (http:\u003cem/\u003ehackage.haskell.org\u003cem\u003epackage\u003c/em\u003ehslua).\n\u003c/p\u003e\u003cp\u003eHsLua only provides a very bare-bones wrapper over the Lua API, and this package is meant to fill in the gap by providing some commonly used features.\n\u003c/p\u003e\u003cp\u003eCurrently the following features are provided -\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003eLua.StackValue\u003c/code\u003e instances for a variety of commonly used datatypes, such as Lists, Tuples, Either, Maybe etc.\n2. \u003ccode\u003eluaDoString\u003c/code\u003e and \u003ccode\u003eluaDoFile\u003c/code\u003e utility functions.\n3. A function to dump the contents of the stack for debugging purposes (\u003ccode\u003edumpStack\u003c/code\u003e).\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Scripting.LuaUtils",
        "fct-package": "luautils",
        "fct-signature": "module",
        "fct-source": "src/Scripting-LuaUtils.html",
        "fct-type": "module",
        "title": "LuaUtils"
      },
      "index": {
        "description": "This package is an add-on to the HsLua package by Gracjan Polak http hackage.haskell.org package hslua HsLua only provides very bare-bones wrapper over the Lua API and this package is meant to fill in the gap by providing some commonly used features Currently the following features are provided Lua.StackValue instances for variety of commonly used datatypes such as Lists Tuples Either Maybe etc luaDoString and luaDoFile utility functions function to dump the contents of the stack for debugging purposes dumpStack",
        "hierarchy": "Scripting LuaUtils",
        "module": "Scripting.LuaUtils",
        "name": "LuaUtils",
        "normalized": "",
        "package": "luautils",
        "partial": "Lua Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/luautils/docs/Scripting-LuaUtils.html#v:dumpStack",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the contents of the entire Lua stack in a human readable form\n\u003c/p\u003e",
        "fct-module": "Scripting.LuaUtils",
        "fct-package": "luautils",
        "fct-signature": "LuaState -\u003e IO ()",
        "fct-source": "src/Scripting-LuaUtils.html#dumpStack",
        "fct-type": "function",
        "title": "dumpStack"
      },
      "index": {
        "description": "Pretty print the contents of the entire Lua stack in human readable form",
        "hierarchy": "Scripting LuaUtils",
        "module": "Scripting.LuaUtils",
        "name": "dumpStack",
        "normalized": "LuaState-\u003eIO()",
        "package": "luautils",
        "partial": "Stack",
        "signature": "LuaState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/luautils/docs/Scripting-LuaUtils.html#v:luaDoFile",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a Lua script file\n\u003c/p\u003e",
        "fct-module": "Scripting.LuaUtils",
        "fct-package": "luautils",
        "fct-signature": "LuaState -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-LuaUtils.html#luaDoFile",
        "fct-type": "function",
        "title": "luaDoFile"
      },
      "index": {
        "description": "Execute Lua script file",
        "hierarchy": "Scripting LuaUtils",
        "module": "Scripting.LuaUtils",
        "name": "luaDoFile",
        "normalized": "LuaState-\u003eString-\u003eIO()",
        "package": "luautils",
        "partial": "Do File",
        "signature": "LuaState-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/luautils/docs/Scripting-LuaUtils.html#v:luaDoString",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a String containing Lua Code\n\u003c/p\u003e",
        "fct-module": "Scripting.LuaUtils",
        "fct-package": "luautils",
        "fct-signature": "LuaState -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-LuaUtils.html#luaDoString",
        "fct-type": "function",
        "title": "luaDoString"
      },
      "index": {
        "description": "Execute String containing Lua Code",
        "hierarchy": "Scripting LuaUtils",
        "module": "Scripting.LuaUtils",
        "name": "luaDoString",
        "normalized": "LuaState-\u003eString-\u003eIO()",
        "package": "luautils",
        "partial": "Do String",
        "signature": "LuaState-\u003eString-\u003eIO()"
      }
    }
  }
]