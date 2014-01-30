[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "module",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html",
        "fct-type": "module",
        "title": "Leijen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "Leijen",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "Leijen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eDoc a\u003c/code\u003e represents pretty documents.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDoc a\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003e(show doc)\u003c/code\u003e pretty\n prints document \u003ccode\u003edoc\u003c/code\u003e with a page width of 100 characters and a\n ribbon width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e show (text \"hello\" \u003c$\u003e text \"world\")\n\u003c/pre\u003e\u003cp\u003eWhich would return the string \"hello\\nworld\", i.e.\n\u003c/p\u003e\u003cpre\u003e\n hello\n world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "The abstract data type Doc represents pretty documents Doc is an instance of the Show class show doc pretty prints document doc with page width of characters and ribbon width of characters show text hello text world Which would return the string hello nworld i.e hello world",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "Doc",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#t:SimpleDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type \u003ccode\u003eSimpleDoc a\u003c/code\u003e represents rendered documents and is\n used by the display functions.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e in \u003ccode\u003eSText\u003c/code\u003e contains the length of the string. The \u003ccode\u003eInt\u003c/code\u003e\n in \u003ccode\u003eSLine\u003c/code\u003e contains the indentation for that line. The library\n provides two default display functions \u003ccode\u003e\u003ca\u003edisplayS\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003edisplayIO\u003c/a\u003e\u003c/code\u003e. You can provide your own display function by writing a\n function from a \u003ccode\u003eSimpleDoc a\u003c/code\u003e to your own output format.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "data",
        "title": "SimpleDoc"
      },
      "index": {
        "description": "The data type SimpleDoc represents rendered documents and is used by the display functions The Int in SText contains the length of the string The Int in SLine contains the indentation for that line The library provides two default display functions displayS and displayIO You can provide your own display function by writing function from SimpleDoc to your own output format",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SimpleDoc",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "Simple Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#t:SpanList",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "type",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SpanList",
        "fct-type": "type",
        "title": "SpanList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SpanList",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "Span List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:-60--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c$$\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003elinebreak\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#%3C%24%24%3E",
        "fct-type": "function",
        "title": "(\u003c$$\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with linebreak in between infixr",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "(\u003c$$\u003e) \u003c$$\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c$\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#%3C%24%3E",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with line in between infixr",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c+\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003espace\u003c/code\u003e in between.  (infixr 6)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with space in between infixr",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:-60--47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c//\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with\n a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n right next to each other or underneath each other. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#%3C%2F%2F%3E",
        "fct-type": "function",
        "title": "(\u003c//\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with softbreak in between This effectively puts and either right next to each other or underneath each other infixr",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "(\u003c//\u003e) \u003c//\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c/\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with a\n \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between. This effectively puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e either\n next to each other (with a \u003ccode\u003espace\u003c/code\u003e in between) or underneath each\n other. (infixr 5)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "The document concatenates document and with softline in between This effectively puts and either next to each other with space in between or underneath each other infixr",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(x \u003c\u003e y)\u003c/code\u003e concatenates document \u003ccode\u003ex\u003c/code\u003e and document\n \u003ccode\u003ey\u003c/code\u003e. It is an associative operation having \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e as a left and\n right unit.  (infixr 6)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "The document concatenates document and document It is an associative operation having empty as left and right unit infixr",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:SAnnotStart",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SAnnotStart a (SimpleDoc a)",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "function",
        "title": "SAnnotStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SAnnotStart",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "SAnnot Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:SAnnotStop",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SAnnotStop (SimpleDoc a)",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "function",
        "title": "SAnnotStop"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SAnnotStop",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "SAnnot Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:SChar",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SChar Char (SimpleDoc a)",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "function",
        "title": "SChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SChar",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "SChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:SEmpty",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SEmpty",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "function",
        "title": "SEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SEmpty",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "SEmpty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:SLine",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SLine !Int (SimpleDoc a)",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "function",
        "title": "SLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SLine",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "SLine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:SText",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SText !Int String (SimpleDoc a)",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#SimpleDoc",
        "fct-type": "function",
        "title": "SText"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "SText",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "SText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:align",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(align x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the nesting\n level set to the current column. It is used for example to\n implement \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, we will put a document right above another one,\n regardless of the current nesting level:\n\u003c/p\u003e\u003cpre\u003e x $$ y  = align (x \u003c$\u003e y)\n\u003c/pre\u003e\u003cpre\u003e test    = text \"hi\" \u003c+\u003e (text \"nice\" $$ text \"world\")\n\u003c/pre\u003e\u003cp\u003ewhich will be layed out as:\n\u003c/p\u003e\u003cpre\u003e\n hi nice\n    world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "The document align renders document with the nesting level set to the current column It is used for example to implement hang As an example we will put document right above another one regardless of the current nesting level align test text hi text nice text world which will be layed out as hi nice world",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "align",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:angles",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(angles x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in angles, \"\u003c\" and\n \"\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#angles",
        "fct-type": "function",
        "title": "angles"
      },
      "index": {
        "description": "Document angles encloses document in angles and",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "angles",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:annotate",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#annotate",
        "fct-type": "function",
        "title": "annotate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "annotate",
        "normalized": "a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:backslash",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ebackslash\u003c/code\u003e contains a back slash, \"\\\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#backslash",
        "fct-type": "function",
        "title": "backslash"
      },
      "index": {
        "description": "The document backslash contains back slash",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "backslash",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:bool",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(bool b)\u003c/code\u003e is \u003ccode\u003etext \u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003eb\u003c/code\u003e is true, and \u003ccode\u003etext\n \u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Bool -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "The document bool is text True when is true and text False otherwise",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "bool",
        "normalized": "Bool-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Bool-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:braces",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(braces x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in braces, \"{\" and\n \"}\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "Document braces encloses document in braces and",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "braces",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(brackets x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in square brackets,\n \"[\" and \"]\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Document brackets encloses document in square brackets and",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "brackets",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(cat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003e(\u003c$$\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e cat xs  = group (vcat xs)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "The document cat xs concatenates all documents xs either horizontally with if it fits the page or vertically with cat xs group vcat xs",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "cat",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(char c)\u003c/code\u003e contains the literal character \u003ccode\u003ec\u003c/code\u003e. The\n character shouldn't be a newline (\u003ccode\u003e'\\n'\u003c/code\u003e), the function \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e\n should be used for line breaks.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Char -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "The document char contains the literal character The character shouldn be newline the function line should be used for line breaks",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "char",
        "normalized": "Char-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Char-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:colon",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ecolon\u003c/code\u003e contains a colon, \":\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "The document colon contains colon",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "colon",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:column",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "(Int -\u003e Doc a) -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#column",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "column",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "(Int-\u003eDoc a)-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:comma",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003ecomma\u003c/code\u003e contains a comma, \",\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "The document comma contains comma",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "comma",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:displayDecorated",
      "description": {
        "fct-descr": "\u003cp\u003eRender a string, where annotated regions are decorated by a user-provided function.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "(a -\u003e String -\u003e String) -\u003e SimpleDoc a -\u003e String",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#displayDecorated",
        "fct-type": "function",
        "title": "displayDecorated"
      },
      "index": {
        "description": "Render string where annotated regions are decorated by user-provided function",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "displayDecorated",
        "normalized": "(a-\u003eString-\u003eString)-\u003eSimpleDoc a-\u003eString",
        "package": "annotated-wl-pprint",
        "partial": "Decorated",
        "signature": "(a-\u003eString-\u003eString)-\u003eSimpleDoc a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:displayIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(displayIO handle simpleDoc a)\u003c/code\u003e writes \u003ccode\u003esimpleDoc a\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e. This function is used for example by 'hPutDoc a':\n\u003c/p\u003e\u003cpre\u003e hPutDoc a handle doc  = displayIO handle (renderPretty 0.4 100 doc)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Handle -\u003e SimpleDoc a -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#displayIO",
        "fct-type": "function",
        "title": "displayIO"
      },
      "index": {
        "description": "displayIO handle simpleDoc writes simpleDoc to the file handle handle This function is used for example by hPutDoc hPutDoc handle doc displayIO handle renderPretty doc",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "displayIO",
        "normalized": "Handle-\u003eSimpleDoc a-\u003eIO()",
        "package": "annotated-wl-pprint",
        "partial": "IO",
        "signature": "Handle-\u003eSimpleDoc a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:displayS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(displayS simpleDoc a)\u003c/code\u003e takes the output \u003ccode\u003esimpleDoc a\u003c/code\u003e from a\n rendering function and transforms it to a \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e type (for use in\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class).\n\u003c/p\u003e\u003cpre\u003e showWidth :: Int -\u003e Doc a -\u003e String\n showWidth w x   = displayS (renderPretty 0.4 w x) \"\"\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SimpleDoc a -\u003e ShowS",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#displayS",
        "fct-type": "function",
        "title": "displayS"
      },
      "index": {
        "description": "displayS simpleDoc takes the output simpleDoc from rendering function and transforms it to ShowS type for use in the Show class showWidth Int Doc String showWidth displayS renderPretty",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "displayS",
        "normalized": "SimpleDoc a-\u003eShowS",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "SimpleDoc a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:displaySpans",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a pair of a string and a list of source span/annotation pairs\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "SimpleDoc a -\u003e (String, SpanList a)",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#displaySpans",
        "fct-type": "function",
        "title": "displaySpans"
      },
      "index": {
        "description": "Generate pair of string and list of source span annotation pairs",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "displaySpans",
        "normalized": "SimpleDoc a-\u003e(String,SpanList a)",
        "package": "annotated-wl-pprint",
        "partial": "Spans",
        "signature": "SimpleDoc a-\u003e(String,SpanList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:dot",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003edot\u003c/code\u003e contains a single dot, \".\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "The document dot contains single dot",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "dot",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:double",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(double d)\u003c/code\u003e shows the literal double \u003ccode\u003ed\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Double -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "The document double shows the literal double using text",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "double",
        "normalized": "Double-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Double-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:dquote",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003edquote\u003c/code\u003e contains a double quote, '\"'.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#dquote",
        "fct-type": "function",
        "title": "dquote"
      },
      "index": {
        "description": "The document dquote contains double quote",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "dquote",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:dquotes",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(dquotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with double quotes\n '\"'.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#dquotes",
        "fct-type": "function",
        "title": "dquotes"
      },
      "index": {
        "description": "Document dquotes encloses document with double quotes",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "dquotes",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty document is, indeed, empty. Although \u003ccode\u003eempty\u003c/code\u003e has no\n content, it does have a 'height' of 1 and behaves exactly like\n \u003ccode\u003e(text \"\")\u003c/code\u003e (and is therefore not a unit of \u003ccode\u003e\u003c$\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty document is indeed empty Although empty has no content it does have height of and behaves exactly like text and is therefore not unit of",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "empty",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:enclose",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(enclose l r x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e between\n documents \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e using \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e enclose l r x   = l \u003c\u003e x \u003c\u003e r\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#enclose",
        "fct-type": "function",
        "title": "enclose"
      },
      "index": {
        "description": "The document enclose encloses document between documents and using enclose",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "enclose",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:encloseSep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(encloseSep l r sep xs)\u003c/code\u003e concatenates the documents\n \u003ccode\u003exs\u003c/code\u003e separated by \u003ccode\u003esep\u003c/code\u003e and encloses the resulting document by \u003ccode\u003el\u003c/code\u003e\n and \u003ccode\u003er\u003c/code\u003e. The documents are rendered horizontally if that fits the\n page. Otherwise they are aligned vertically. All separators are put\n in front of the elements. For example, the combinator \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e can be\n defined with \u003ccode\u003eencloseSep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e list xs = encloseSep lbracket rbracket comma xs\n test    = text \"list\" \u003c+\u003e (list (map int [10,200,3000]))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n list [10,200,3000]\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n list [10\n      ,200\n      ,3000]\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a -\u003e Doc a -\u003e [Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#encloseSep",
        "fct-type": "function",
        "title": "encloseSep"
      },
      "index": {
        "description": "The document encloseSep sep xs concatenates the documents xs separated by sep and encloses the resulting document by and The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All separators are put in front of the elements For example the combinator list can be defined with encloseSep list xs encloseSep lbracket rbracket comma xs test text list list map int Which is layed out with page width of as list But when the page width is it is layed out as list",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "encloseSep",
        "normalized": "Doc a-\u003eDoc a-\u003eDoc a-\u003e[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Sep",
        "signature": "Doc a-\u003eDoc a-\u003eDoc a-\u003e[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:equals",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003eequals\u003c/code\u003e contains an equal sign, \"=\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#equals",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "The document equals contains an equal sign",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "equals",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fill i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e. It than appends\n \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the width of \u003ccode\u003ex\u003c/code\u003e is\n already larger, nothing is appended. This combinator is quite\n useful in practice to output a list of bindings. The following\n example demonstrates this.\n\u003c/p\u003e\u003cpre\u003e types  = [(\"empty\",\"Doc a\")\n          ,(\"nest\",\"Int -\u003e Doc a -\u003e Doc a\")\n          ,(\"linebreak\",\"Doc a\")]\n\n ptype (name,tp)\n        = fill 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\n test   = text \"let\" \u003c+\u003e align (vcat (map ptype types))\n\u003c/pre\u003e\u003cp\u003eWhich is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc a\n     nest   :: Int -\u003e Doc a -\u003e Doc a\n     linebreak :: Doc a\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Int -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "The document fill renders document It than appends space until the width is equal to If the width of is already larger nothing is appended This combinator is quite useful in practice to output list of bindings The following example demonstrates this types empty Doc nest Int Doc Doc linebreak Doc ptype name tp fill text name text text tp test text let align vcat map ptype types Which is layed out as let empty Doc nest Int Doc Doc linebreak Doc",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "fill",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Int-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:fillBreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillBreak i x)\u003c/code\u003e first renders document \u003ccode\u003ex\u003c/code\u003e. It\n than appends \u003ccode\u003espace\u003c/code\u003es until the width is equal to \u003ccode\u003ei\u003c/code\u003e. If the\n width of \u003ccode\u003ex\u003c/code\u003e is already larger than \u003ccode\u003ei\u003c/code\u003e, the nesting level is\n increased by \u003ccode\u003ei\u003c/code\u003e and a \u003ccode\u003eline\u003c/code\u003e is appended. When we redefine \u003ccode\u003eptype\u003c/code\u003e\n in the previous example to use \u003ccode\u003efillBreak\u003c/code\u003e, we get a useful\n variation of the previous output:\n\u003c/p\u003e\u003cpre\u003e ptype (name,tp)\n        = fillBreak 6 (text name) \u003c+\u003e text \"::\" \u003c+\u003e text tp\n\u003c/pre\u003e\u003cp\u003eThe output will now be:\n\u003c/p\u003e\u003cpre\u003e\n let empty  :: Doc a\n     nest   :: Int -\u003e Doc a -\u003e Doc a\n     linebreak\n            :: Doc a\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Int -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#fillBreak",
        "fct-type": "function",
        "title": "fillBreak"
      },
      "index": {
        "description": "The document fillBreak first renders document It than appends space until the width is equal to If the width of is already larger than the nesting level is increased by and line is appended When we redefine ptype in the previous example to use fillBreak we get useful variation of the previous output ptype name tp fillBreak text name text text tp The output will now be let empty Doc nest Int Doc Doc linebreak Doc",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "fillBreak",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Break",
        "signature": "Int-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:fillCat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillCat xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e as long as its fits the page, than inserts\n a \u003ccode\u003elinebreak\u003c/code\u003e and continues doing that for all documents in \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillCat xs  = foldr (\\\u003c\\/\\/\\\u003e) empty xs\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#fillCat",
        "fct-type": "function",
        "title": "fillCat"
      },
      "index": {
        "description": "The document fillCat xs concatenates documents xs horizontally with as long as its fits the page than inserts linebreak and continues doing that for all documents in xs fillCat xs foldr empty xs",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "fillCat",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Cat",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:fillSep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(fillSep xs)\u003c/code\u003e concatenates documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e as long as its fits the page, than\n inserts a \u003ccode\u003eline\u003c/code\u003e and continues doing that for all documents in\n \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e fillSep xs  = foldr (\\\u003c\\/\\\u003e) empty xs\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#fillSep",
        "fct-type": "function",
        "title": "fillSep"
      },
      "index": {
        "description": "The document fillSep xs concatenates documents xs horizontally with as long as its fits the page than inserts line and continues doing that for all documents in xs fillSep xs foldr empty xs",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "fillSep",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Sep",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(float f)\u003c/code\u003e shows the literal float \u003ccode\u003ef\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Float -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "The document float shows the literal float using text",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "float",
        "normalized": "Float-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Float-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003egroup\u003c/code\u003e combinator is used to specify alternative\n layouts. The document \u003ccode\u003e(group x)\u003c/code\u003e undoes all line breaks in\n document \u003ccode\u003ex\u003c/code\u003e. The resulting line is added to the current line if\n that fits the page. Otherwise, the document \u003ccode\u003ex\u003c/code\u003e is rendered without\n any changes.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "The group combinator is used to specify alternative layouts The document group undoes all line breaks in document The resulting line is added to the current line if that fits the page Otherwise the document is rendered without any changes",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "group",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:hPutDoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(hPutDoc handle doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the file\n handle \u003ccode\u003ehandle\u003c/code\u003e with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main = do{ handle \u003c- openFile \"MyFile\" WriteMode\n          ; hPutDoc handle (vcat (map text\n                            [\"vertical\",\"text\"]))\n          ; hClose handle\n          }\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Handle -\u003e Doc a -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#hPutDoc",
        "fct-type": "function",
        "title": "hPutDoc"
      },
      "index": {
        "description": "hPutDoc handle doc pretty prints document doc to the file handle handle with page width of characters and ribbon width of characters main do handle openFile MyFile WriteMode hPutDoc handle vcat map text vertical text hClose handle",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "hPutDoc",
        "normalized": "Handle-\u003eDoc a-\u003eIO()",
        "package": "annotated-wl-pprint",
        "partial": "Put Doc",
        "signature": "Handle-\u003eDoc a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:hang",
      "description": {
        "fct-descr": "\u003cp\u003eThe hang combinator implements hanging indentation. The document\n \u003ccode\u003e(hang i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with a nesting level set to the\n current column plus \u003ccode\u003ei\u003c/code\u003e. The following example uses hanging\n indentation for some text:\n\u003c/p\u003e\u003cpre\u003e test  = hang 4 (fillSep (map text\n         (words \"the hang combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out on a page with a width of 20 characters as:\n\u003c/p\u003e\u003cpre\u003e\n the hang combinator\n     indents these\n     words !\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003ehang\u003c/code\u003e combinator is implemented as:\n\u003c/p\u003e\u003cpre\u003e hang i x  = align (nest i x)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Int -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "The hang combinator implements hanging indentation The document hang renders document with nesting level set to the current column plus The following example uses hanging indentation for some text test hang fillSep map text words the hang combinator indents these words Which lays out on page with width of characters as the hang combinator indents these words The hang combinator is implemented as hang align nest",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "hang",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Int-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(hcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "The document hcat xs concatenates all documents xs horizontally with",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "hcat",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(hsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "The document hsep xs concatenates all documents xs horizontally with",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "hsep",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:indent",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(indent i x)\u003c/code\u003e indents document \u003ccode\u003ex\u003c/code\u003e with \u003ccode\u003ei\u003c/code\u003e spaces.\n\u003c/p\u003e\u003cpre\u003e test  = indent 4 (fillSep (map text\n         (words \"the indent combinator indents these words !\")))\n\u003c/pre\u003e\u003cp\u003eWhich lays out with a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n     the indent\n     combinator\n     indents these\n     words !\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Int -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#indent",
        "fct-type": "function",
        "title": "indent"
      },
      "index": {
        "description": "The document indent indents document with spaces test indent fillSep map text words the indent combinator indents these words Which lays out with page width of as the indent combinator indents these words",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "indent",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Int-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(int i)\u003c/code\u003e shows the literal integer \u003ccode\u003ei\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Int -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "The document int shows the literal integer using text",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "int",
        "normalized": "Int-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Int-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:integer",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(integer i)\u003c/code\u003e shows the literal integer \u003ccode\u003ei\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Integer -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#integer",
        "fct-type": "function",
        "title": "integer"
      },
      "index": {
        "description": "The document integer shows the literal integer using text",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "integer",
        "normalized": "Integer-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Integer-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:langle",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elangle\u003c/code\u003e contains a left angle, \"\u003c\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#langle",
        "fct-type": "function",
        "title": "langle"
      },
      "index": {
        "description": "The document langle contains left angle",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "langle",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:lbrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elbrace\u003c/code\u003e contains a left brace, \"{\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#lbrace",
        "fct-type": "function",
        "title": "lbrace"
      },
      "index": {
        "description": "The document lbrace contains left brace",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "lbrace",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:lbracket",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elbracket\u003c/code\u003e contains a left square bracket, \"[\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#lbracket",
        "fct-type": "function",
        "title": "lbracket"
      },
      "index": {
        "description": "The document lbracket contains left square bracket",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "lbracket",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eline\u003c/code\u003e document advances to the next line and indents to the\n current nesting level. Doc aument \u003ccode\u003eline\u003c/code\u003e behaves like \u003ccode\u003e(text \" \")\u003c/code\u003e\n if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "The line document advances to the next line and indents to the current nesting level Doc aument line behaves like text if the line break is undone by group",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "line",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:linebreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003elinebreak\u003c/code\u003e document advances to the next line and indents to\n the current nesting level. Document \u003ccode\u003elinebreak\u003c/code\u003e behaves like\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the line break is undone by \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#linebreak",
        "fct-type": "function",
        "title": "linebreak"
      },
      "index": {
        "description": "The linebreak document advances to the next line and indents to the current nesting level Document linebreak behaves like empty if the line break is undone by group",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "linebreak",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(list xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in square brackets. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "The document list xs comma separates the documents xs and encloses them in square brackets The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "list",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:lparen",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003elparen\u003c/code\u003e contains a left parenthesis, \"(\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#lparen",
        "fct-type": "function",
        "title": "lparen"
      },
      "index": {
        "description": "The document lparen contains left parenthesis",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "lparen",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(nest i x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e with the current\n indentation level increased by i (See also \u003ccode\u003e\u003ca\u003ehang\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eindent\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e nest 2 (text \"hello\" \u003c$\u003e text \"world\") \u003c$\u003e text \"!\"\n\u003c/pre\u003e\u003cp\u003eoutputs as:\n\u003c/p\u003e\u003cpre\u003e\n hello\n   world\n !\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Int -\u003e Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "The document nest renders document with the current indentation level increased by See also hang align and indent nest text hello text world text outputs as hello world",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "nest",
        "normalized": "Int-\u003eDoc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Int-\u003eDoc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:nesting",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "(Int -\u003e Doc a) -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#nesting",
        "fct-type": "function",
        "title": "nesting"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "nesting",
        "normalized": "(Int-\u003eDoc a)-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "(Int-\u003eDoc a)-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:noAnnotate",
      "description": {
        "fct-descr": "\u003cp\u003eStrip annotations from a document. This is useful for re-using the\n textual formatting of some sub-document, but applying a different\n high-level annotation.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#noAnnotate",
        "fct-type": "function",
        "title": "noAnnotate"
      },
      "index": {
        "description": "Strip annotations from document This is useful for re-using the textual formatting of some sub-document but applying different high-level annotation",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "noAnnotate",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Annotate",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:parens",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(parens x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e in parenthesis, \"(\"\n and \")\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "Document parens encloses document in parenthesis and",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "parens",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:pipe",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003epipe\u003c/code\u003e contains a pipe character, \"|\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#pipe",
        "fct-type": "function",
        "title": "pipe"
      },
      "index": {
        "description": "The document pipe contains pipe character",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "pipe",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:punctuate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(punctuate p xs)\u003c/code\u003e concatenates all documents in \u003ccode\u003exs\u003c/code\u003e with\n document \u003ccode\u003ep\u003c/code\u003e except for the last document.\n\u003c/p\u003e\u003cpre\u003e someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n test     = parens (align (cat (punctuate comma someText)))\n\u003c/pre\u003e\u003cp\u003eThis is layed out on a page width of 20 as:\n\u003c/p\u003e\u003cpre\u003e\n (words,in,a,tuple)\n\u003c/pre\u003e\u003cp\u003eBut when the page width is 15, it is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n (words,\n  in,\n  a,\n  tuple)\n\u003c/pre\u003e\u003cp\u003e(If you want put the commas in front of their elements instead of\n at the end, you should use \u003ccode\u003e\u003ca\u003etupled\u003c/a\u003e\u003c/code\u003e or, in general, \u003ccode\u003e\u003ca\u003eencloseSep\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e [Doc a] -\u003e [Doc a]",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#punctuate",
        "fct-type": "function",
        "title": "punctuate"
      },
      "index": {
        "description": "punctuate xs concatenates all documents in xs with document except for the last document someText map text words in tuple test parens align cat punctuate comma someText This is layed out on page width of as words in tuple But when the page width is it is layed out as words in tuple If you want put the commas in front of their elements instead of at the end you should use tupled or in general encloseSep",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "punctuate",
        "normalized": "Doc a-\u003e[Doc a]-\u003e[Doc a]",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003e[Doc a]-\u003e[Doc a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:putDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThe action \u003ccode\u003e(putDoc doc)\u003c/code\u003e pretty prints document \u003ccode\u003edoc\u003c/code\u003e to the\n standard output, with a page width of 100 characters and a ribbon\n width of 40 characters.\n\u003c/p\u003e\u003cpre\u003e main :: IO ()\n main = do{ putDoc (text \"hello\" \u003c+\u003e text \"world\") }\n\u003c/pre\u003e\u003cp\u003eWhich would output\n\u003c/p\u003e\u003cpre\u003e\n hello world\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e IO ()",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#putDoc",
        "fct-type": "function",
        "title": "putDoc"
      },
      "index": {
        "description": "The action putDoc doc pretty prints document doc to the standard output with page width of characters and ribbon width of characters main IO main do putDoc text hello text world Which would output hello world",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "putDoc",
        "normalized": "Doc a-\u003eIO()",
        "package": "annotated-wl-pprint",
        "partial": "Doc",
        "signature": "Doc a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:rangle",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erangle\u003c/code\u003e contains a right angle, \"\u003e\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#rangle",
        "fct-type": "function",
        "title": "rangle"
      },
      "index": {
        "description": "The document rangle contains right angle",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "rangle",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:rational",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(rational r)\u003c/code\u003e shows the literal rational \u003ccode\u003er\u003c/code\u003e using\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Rational -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#rational",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "The document rational shows the literal rational using text",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "rational",
        "normalized": "Rational-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Rational-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:rbrace",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erbrace\u003c/code\u003e contains a right brace, \"}\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#rbrace",
        "fct-type": "function",
        "title": "rbrace"
      },
      "index": {
        "description": "The document rbrace contains right brace",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "rbrace",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:rbracket",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erbracket\u003c/code\u003e contains a right square bracket, \"]\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#rbracket",
        "fct-type": "function",
        "title": "rbracket"
      },
      "index": {
        "description": "The document rbracket contains right square bracket",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "rbracket",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:renderCompact",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(renderCompact x)\u003c/code\u003e renders document \u003ccode\u003ex\u003c/code\u003e without adding any\n indentation. Since no 'pretty' printing is involved, this\n renderer is very fast. The resulting output contains fewer\n characters than a pretty printed version and can be used for output\n that is read by other programs.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e SimpleDoc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#renderCompact",
        "fct-type": "function",
        "title": "renderCompact"
      },
      "index": {
        "description": "renderCompact renders document without adding any indentation Since no pretty printing is involved this renderer is very fast The resulting output contains fewer characters than pretty printed version and can be used for output that is read by other programs",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "renderCompact",
        "normalized": "Doc a-\u003eSimpleDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Compact",
        "signature": "Doc a-\u003eSimpleDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:renderPretty",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the default pretty printer which is used by \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eputDoc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehPutDoc\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e(renderPretty ribbonfrac width x)\u003c/code\u003e renders\n document \u003ccode\u003ex\u003c/code\u003e with a page width of \u003ccode\u003ewidth\u003c/code\u003e and a ribbon width of\n \u003ccode\u003e(ribbonfrac * width)\u003c/code\u003e characters. The ribbon width is the maximal\n amount of non-indentation characters on a line. The parameter\n \u003ccode\u003eribbonfrac\u003c/code\u003e should be between \u003ccode\u003e0.0\u003c/code\u003e and \u003ccode\u003e1.0\u003c/code\u003e. If it is lower or\n higher, the ribbon width will be 0 or \u003ccode\u003ewidth\u003c/code\u003e respectively.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Float -\u003e Int -\u003e Doc a -\u003e SimpleDoc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#renderPretty",
        "fct-type": "function",
        "title": "renderPretty"
      },
      "index": {
        "description": "This is the default pretty printer which is used by show putDoc and hPutDoc renderPretty ribbonfrac width renders document with page width of width and ribbon width of ribbonfrac width characters The ribbon width is the maximal amount of non-indentation characters on line The parameter ribbonfrac should be between and If it is lower or higher the ribbon width will be or width respectively",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "renderPretty",
        "normalized": "Float-\u003eInt-\u003eDoc a-\u003eSimpleDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Pretty",
        "signature": "Float-\u003eInt-\u003eDoc a-\u003eSimpleDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:rparen",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003erparen\u003c/code\u003e contains a right parenthesis, \")\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#rparen",
        "fct-type": "function",
        "title": "rparen"
      },
      "index": {
        "description": "The document rparen contains right parenthesis",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "rparen",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:semi",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esemi\u003c/code\u003e contains a semi colon, \";\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#semi",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "The document semi contains semi colon",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "semi",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:semiBraces",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(semiBraces xs)\u003c/code\u003e separates the documents \u003ccode\u003exs\u003c/code\u003e with\n semi colons and encloses them in braces. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All semi colons are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#semiBraces",
        "fct-type": "function",
        "title": "semiBraces"
      },
      "index": {
        "description": "The document semiBraces xs separates the documents xs with semi colons and encloses them in braces The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All semi colons are put in front of the elements",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "semiBraces",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "Braces",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(sep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e either\n horizontally with \u003ccode\u003e(\u003c+\u003e)\u003c/code\u003e, if it fits the page, or vertically with\n \u003ccode\u003e(\u003c$\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e sep xs  = group (vsep xs)\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "The document sep xs concatenates all documents xs either horizontally with if it fits the page or vertically with sep xs group vsep xs",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "sep",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:softbreak",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esoftbreak\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softbreak  = group linebreak\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#softbreak",
        "fct-type": "function",
        "title": "softbreak"
      },
      "index": {
        "description": "The document softbreak behaves like empty if the resulting output fits the page otherwise it behaves like line softbreak group linebreak",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "softbreak",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:softline",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esoftline\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e if the resulting\n output fits the page, otherwise it behaves like \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e softline = group line\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#softline",
        "fct-type": "function",
        "title": "softline"
      },
      "index": {
        "description": "The document softline behaves like space if the resulting output fits the page otherwise it behaves like line softline group line",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "softline",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003espace\u003c/code\u003e contains a single space, \" \".\n\u003c/p\u003e\u003cpre\u003e x \u003c+\u003e y   = x \u003c\u003e space \u003c\u003e y\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "The document space contains single space space",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "space",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:squote",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003esquote\u003c/code\u003e contains a single quote, \"'\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#squote",
        "fct-type": "function",
        "title": "squote"
      },
      "index": {
        "description": "The document squote contains single quote",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "squote",
        "normalized": "",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:squotes",
      "description": {
        "fct-descr": "\u003cp\u003eDocument \u003ccode\u003e(squotes x)\u003c/code\u003e encloses document \u003ccode\u003ex\u003c/code\u003e with single quotes\n \"'\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#squotes",
        "fct-type": "function",
        "title": "squotes"
      },
      "index": {
        "description": "Document squotes encloses document with single quotes",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "squotes",
        "normalized": "Doc a-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(string s)\u003c/code\u003e concatenates all characters in \u003ccode\u003es\u003c/code\u003e\n using \u003ccode\u003eline\u003c/code\u003e for newline characters and \u003ccode\u003echar\u003c/code\u003e for all other\n characters. It is used instead of \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e whenever the text contains\n newline characters.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "String -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "The document string concatenates all characters in using line for newline characters and char for all other characters It is used instead of text whenever the text contains newline characters",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "string",
        "normalized": "String-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "String-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(text s)\u003c/code\u003e contains the literal string \u003ccode\u003es\u003c/code\u003e. The\n string shouldn't contain any newline (\u003ccode\u003e'\\n'\u003c/code\u003e) characters. If the\n string contains newline characters, the function \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e should be\n used.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "String -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "The document text contains the literal string The string shouldn contain any newline characters If the string contains newline characters the function string should be used",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "text",
        "normalized": "String-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "String-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:tupled",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(tupled xs)\u003c/code\u003e comma separates the documents \u003ccode\u003exs\u003c/code\u003e and\n encloses them in parenthesis. The documents are rendered\n horizontally if that fits the page. Otherwise they are aligned\n vertically. All comma separators are put in front of the elements.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#tupled",
        "fct-type": "function",
        "title": "tupled"
      },
      "index": {
        "description": "The document tupled xs comma separates the documents xs and encloses them in parenthesis The documents are rendered horizontally if that fits the page Otherwise they are aligned vertically All comma separators are put in front of the elements",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "tupled",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(vcat xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003e(\u003c$$\u003e)\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evcat\u003c/code\u003e, all documents are directly concatenated.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "The document vcat xs concatenates all documents xs vertically with If group undoes the line breaks inserted by vcat all documents are directly concatenated",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "vcat",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:vsep",
      "description": {
        "fct-descr": "\u003cp\u003eThe document \u003ccode\u003e(vsep xs)\u003c/code\u003e concatenates all documents \u003ccode\u003exs\u003c/code\u003e\n vertically with \u003ccode\u003e(\u003c$\u003e)\u003c/code\u003e. If a \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e undoes the line breaks\n inserted by \u003ccode\u003evsep\u003c/code\u003e, all documents are separated with a space.\n\u003c/p\u003e\u003cpre\u003e someText = map text (words (\"text to lay out\"))\n\n test     = text \"some\" \u003c+\u003e vsep someText\n\u003c/pre\u003e\u003cp\u003eThis is layed out as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n to\n lay\n out\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e combinator can be used to align the documents under\n their first element\n\u003c/p\u003e\u003cpre\u003e test     = text \"some\" \u003c+\u003e align (vsep someText)\n\u003c/pre\u003e\u003cp\u003eWhich is printed as:\n\u003c/p\u003e\u003cpre\u003e\n some text\n      to\n      lay\n      out\n\u003c/pre\u003e",
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "[Doc a] -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#vsep",
        "fct-type": "function",
        "title": "vsep"
      },
      "index": {
        "description": "The document vsep xs concatenates all documents xs vertically with If group undoes the line breaks inserted by vsep all documents are separated with space someText map text words text to lay out test text some vsep someText This is layed out as some text to lay out The align combinator can be used to align the documents under their first element test text some align vsep someText Which is printed as some text to lay out",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "vsep",
        "normalized": "[Doc a]-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "[Doc a]-\u003eDoc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/annotated-wl-pprint/docs/Text-PrettyPrint-Annotated-Leijen.html#v:width",
      "description": {
        "fct-module": "Text.PrettyPrint.Annotated.Leijen",
        "fct-package": "annotated-wl-pprint",
        "fct-signature": "Doc a -\u003e (Int -\u003e Doc a) -\u003e Doc a",
        "fct-source": "src/Text-PrettyPrint-Annotated-Leijen.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrettyPrint Annotated Leijen",
        "module": "Text.PrettyPrint.Annotated.Leijen",
        "name": "width",
        "normalized": "Doc a-\u003e(Int-\u003eDoc a)-\u003eDoc a",
        "package": "annotated-wl-pprint",
        "partial": "",
        "signature": "Doc a-\u003e(Int-\u003eDoc a)-\u003eDoc a"
      }
    }
  }
]