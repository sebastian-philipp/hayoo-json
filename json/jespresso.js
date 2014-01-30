[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Network-Browser-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper around Network.HTTP to present a simpler interface for\n requesting pages via HTTP\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Browser.Simple",
        "fct-package": "jespresso",
        "fct-signature": "module",
        "fct-source": "src/Network-Browser-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "wrapper around Network.HTTP to present simpler interface for requesting pages via HTTP",
        "hierarchy": "Network Browser Simple",
        "module": "Network.Browser.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "jespresso",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Network-Browser-Simple.html#v:download",
      "description": {
        "fct-descr": "\u003cp\u003eRequests a web page specified by the URI, including optional\n cookies. Returns the contents of the page as a \u003ccode\u003eString\u003c/code\u003e and new\n cookies. Follows redirects, decodes the response body, if\n possible. Can fail if decoding is impossible.\n\u003c/p\u003e",
        "fct-module": "Network.Browser.Simple",
        "fct-package": "jespresso",
        "fct-signature": "URI -\u003e [Cookie] -\u003e IO (String, [Cookie])",
        "fct-source": "src/Network-Browser-Simple.html#download",
        "fct-type": "function",
        "title": "download"
      },
      "index": {
        "description": "Requests web page specified by the URI including optional cookies Returns the contents of the page as String and new cookies Follows redirects decodes the response body if possible Can fail if decoding is impossible",
        "hierarchy": "Network Browser Simple",
        "module": "Network.Browser.Simple",
        "name": "download",
        "normalized": "URI-\u003e[Cookie]-\u003eIO(String,[Cookie])",
        "package": "jespresso",
        "partial": "",
        "signature": "URI-\u003e[Cookie]-\u003eIO(String,[Cookie])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtraction and consolidation of JavaScript code in an HTML page.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "module",
        "fct-source": "src/Text-Html-Consolidate.html",
        "fct-type": "module",
        "title": "Consolidate"
      },
      "index": {
        "description": "Extraction and consolidation of JavaScript code in an HTML page",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "Consolidate",
        "normalized": "",
        "package": "jespresso",
        "partial": "Consolidate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#t:ConsState",
      "description": {
        "fct-descr": "\u003cp\u003eConsolidation state\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "data",
        "fct-source": "src/Text-Html-Consolidate.html#ConsState",
        "fct-type": "data",
        "title": "ConsState"
      },
      "index": {
        "description": "Consolidation state",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "ConsState",
        "normalized": "",
        "package": "jespresso",
        "partial": "Cons State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#t:TArr",
      "description": {
        "fct-descr": "\u003cp\u003eOur XML transformation arrow type\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "type",
        "fct-source": "src/Text-Html-Consolidate.html#TArr",
        "fct-type": "type",
        "title": "TArr"
      },
      "index": {
        "description": "Our XML transformation arrow type",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "TArr",
        "normalized": "",
        "package": "jespresso",
        "partial": "TArr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:consolidate",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an HTML page source as a string and an optional base URI\n (for resolving relative URI's) and produces an HTML page with all\n the scripts consolidated in one inline script element.\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "String -\u003e Maybe URI -\u003e IO String",
        "fct-source": "src/Text-Html-Consolidate.html#consolidate",
        "fct-type": "function",
        "title": "consolidate"
      },
      "index": {
        "description": "Takes an HTML page source as string and an optional base URI for resolving relative URI and produces an HTML page with all the scripts consolidated in one inline script element",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "consolidate",
        "normalized": "String-\u003eMaybe URI-\u003eIO String",
        "package": "jespresso",
        "partial": "",
        "signature": "String-\u003eMaybe URI-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:consolidateArr",
      "description": {
        "fct-descr": "\u003cp\u003eThe consolidation function with an arrow interface.\n\u003c/p\u003e\u003cpre\u003e consolidateArr = extractJSArr \u003e\u003e\u003e insertJSArr\n\u003c/pre\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "TArr XmlTree XmlTree",
        "fct-source": "src/Text-Html-Consolidate.html#consolidateArr",
        "fct-type": "function",
        "title": "consolidateArr"
      },
      "index": {
        "description": "The consolidation function with an arrow interface consolidateArr extractJSArr insertJSArr",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "consolidateArr",
        "normalized": "",
        "package": "jespresso",
        "partial": "Arr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eExtacts all JavaScript code in the given\n HTML page source as a single program. Takes an optional base URI\n for resolving relative URI's.\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "String -\u003e Maybe URI -\u003e IO (JavaScript ())",
        "fct-source": "src/Text-Html-Consolidate.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "Extacts all JavaScript code in the given HTML page source as single program Takes an optional base URI for resolving relative URI",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "extract",
        "normalized": "String-\u003eMaybe URI-\u003eIO(JavaScript())",
        "package": "jespresso",
        "partial": "",
        "signature": "String-\u003eMaybe URI-\u003eIO(JavaScript())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:extractJSArr",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts all JavaScript from HTML. There shouldn't be any\n JavaScript in the resulting XmlTree\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "TArr XmlTree (XmlTree, JavaScript ())",
        "fct-source": "src/Text-Html-Consolidate.html#extractJSArr",
        "fct-type": "function",
        "title": "extractJSArr"
      },
      "index": {
        "description": "Extracts all JavaScript from HTML There shouldn be any JavaScript in the resulting XmlTree",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "extractJSArr",
        "normalized": "TArr XmlTree(XmlTree,JavaScript())",
        "package": "jespresso",
        "partial": "JSArr",
        "signature": "TArr XmlTree(XmlTree,JavaScript())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:extractPretty",
      "description": {
        "fct-descr": "\u003cp\u003eExtacts and pretty-prints all JavaScript code in the given\n HTML page source as a single program. Takes an optional base URI\n for resolving relative URI's.\n\u003c/p\u003e\u003cpre\u003e extractPretty s muri = liftM (show . prettyPrint) $ extract s muri\n\u003c/pre\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "String -\u003e Maybe URI -\u003e IO String",
        "fct-source": "src/Text-Html-Consolidate.html#extractPretty",
        "fct-type": "function",
        "title": "extractPretty"
      },
      "index": {
        "description": "Extacts and pretty-prints all JavaScript code in the given HTML page source as single program Takes an optional base URI for resolving relative URI extractPretty muri liftM show prettyPrint extract muri",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "extractPretty",
        "normalized": "String-\u003eMaybe URI-\u003eIO String",
        "package": "jespresso",
        "partial": "Pretty",
        "signature": "String-\u003eMaybe URI-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:initialConsState",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor function for making an initial consolidation state\n (needed for running the arrows in the advanced API). Example usage:\n\u003c/p\u003e\u003cpre\u003e runXIOState (initialState $ initialConsState ignoreErrors muri []) $ someArrow\n\u003c/pre\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "Bool-\u003e Maybe URI-\u003e [Cookie]-\u003e ConsState",
        "fct-type": "function",
        "title": "initialConsState"
      },
      "index": {
        "description": "constructor function for making an initial consolidation state needed for running the arrows in the advanced API Example usage runXIOState initialState initialConsState ignoreErrors muri someArrow",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "initialConsState",
        "normalized": "Bool-\u003eMaybe URI-\u003e[Cookie]-\u003eConsState",
        "package": "jespresso",
        "partial": "Cons State",
        "signature": "Bool-\u003eMaybe URI-\u003e[Cookie]-\u003eConsState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:insertJSArr",
      "description": {
        "fct-descr": "\u003cp\u003eInserts JavaScript at the end of the HTML body.\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "TArr (XmlTree, JavaScript a) XmlTree",
        "fct-source": "src/Text-Html-Consolidate.html#insertJSArr",
        "fct-type": "function",
        "title": "insertJSArr"
      },
      "index": {
        "description": "Inserts JavaScript at the end of the HTML body",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "insertJSArr",
        "normalized": "TArr(XmlTree,JavaScript a)XmlTree",
        "package": "jespresso",
        "partial": "JSArr",
        "signature": "TArr(XmlTree,JavaScript a)XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:parseHTML",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around the hxt parser with commonly used arguments\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "String -\u003e Maybe URI -\u003e TArr a XmlTree",
        "fct-source": "src/Text-Html-Consolidate.html#parseHTML",
        "fct-type": "function",
        "title": "parseHTML"
      },
      "index": {
        "description": "wrapper around the hxt parser with commonly used arguments",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "parseHTML",
        "normalized": "String-\u003eMaybe URI-\u003eTArr a XmlTree",
        "package": "jespresso",
        "partial": "HTML",
        "signature": "String-\u003eMaybe URI-\u003eTArr a XmlTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jespresso/docs/Text-Html-Consolidate.html#v:renderHTML",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around hxt to pretty print html out of the arrow\n\u003c/p\u003e",
        "fct-module": "Text.Html.Consolidate",
        "fct-package": "jespresso",
        "fct-signature": "ConsState -\u003e TArr XmlTree XmlTree -\u003e IO String",
        "fct-source": "src/Text-Html-Consolidate.html#renderHTML",
        "fct-type": "function",
        "title": "renderHTML"
      },
      "index": {
        "description": "wrapper around hxt to pretty print html out of the arrow",
        "hierarchy": "Text Html Consolidate",
        "module": "Text.Html.Consolidate",
        "name": "renderHTML",
        "normalized": "ConsState-\u003eTArr XmlTree XmlTree-\u003eIO String",
        "package": "jespresso",
        "partial": "HTML",
        "signature": "ConsState-\u003eTArr XmlTree XmlTree-\u003eIO String"
      }
    }
  }
]