[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003ehappstack-foundation\u003c/code\u003e provides a type-safe environment for Haskell web development. It builds on top of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e happstack-server - an HTTP server\n\u003c/li\u003e\u003cli\u003e HSP - HTML Templating\n\u003c/li\u003e\u003cli\u003e web-routes - type-safe URL routing\n\u003c/li\u003e\u003cli\u003e reform - type-safe form composition and validation\n\u003c/li\u003e\u003cli\u003e acid-state - native Haskell persistent database\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn example application can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://patch-tag.com/r/mae/happstack/snapshot/current/content/pretty/happstack-foundation/examples/ControlV/Main.hs\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eA screencast can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.youtube.com/watch?v=7Wmszk4wZxQ\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehappstack-foundation\u003c/code\u003e itself is not yet documented in the Happstack Crash Course. However, all of the components that it uses are:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.happstack.com/docs/crashcourse/index.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "module",
        "fct-source": "src/Happstack-Foundation.html",
        "fct-type": "module",
        "title": "Foundation"
      },
      "index": {
        "description": "happstack-foundation provides type-safe environment for Haskell web development It builds on top of happstack-server an HTTP server HSP HTML Templating web-routes type-safe URL routing reform type-safe form composition and validation acid-state native Haskell persistent database An example application can be found here http patch-tag.com mae happstack snapshot current content pretty happstack-foundation examples ControlV Main.hs screencast can be found here http www.youtube.com watch Wmszk4wZxQ happstack-foundation itself is not yet documented in the Happstack Crash Course However all of the components that it uses are http www.happstack.com docs crashcourse index.html",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "Foundation",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Foundation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:AcidConfig",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration information for our acid-state database\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "data",
        "fct-source": "src/Happstack-Foundation.html#AcidConfig",
        "fct-type": "data",
        "title": "AcidConfig"
      },
      "index": {
        "description": "configuration information for our acid-state database",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "AcidConfig",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Acid Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:Data",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Data"
      },
      "index": {
        "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "Data",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:FoundationConf",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration for server\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "data",
        "fct-source": "src/Happstack-Foundation.html#FoundationConf",
        "fct-type": "data",
        "title": "FoundationConf"
      },
      "index": {
        "description": "configuration for server",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "FoundationConf",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Foundation Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:FoundationForm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFoundationForm\u003c/a\u003e\u003c/code\u003e is an alias for working with reform based Forms\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "type",
        "fct-source": "src/Happstack-Foundation.html#FoundationForm",
        "fct-type": "type",
        "title": "FoundationForm"
      },
      "index": {
        "description": "FoundationForm is an alias for working with reform based Forms",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "FoundationForm",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Foundation Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:FoundationT",
      "description": {
        "fct-descr": "\u003cp\u003ethe \u003ccode\u003e\u003ca\u003eFoundationT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eurl\u003c/code\u003e - the type-safe URL route type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eacidState\u003c/code\u003e - the type of the state value stored in acid-state\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003erequestState\u003c/code\u003e - a per-request state value that the developer can get\u003cem\u003eset\u003c/em\u003emodify\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - inner monad\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ewhereami\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetRequestState\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetRequestState\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emodifyRequestState\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esimpleApp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "type",
        "fct-source": "src/Happstack-Foundation.html#FoundationT",
        "fct-type": "type",
        "title": "FoundationT"
      },
      "index": {
        "description": "the FoundationT monad url the type-safe URL route type acidState the type of the state value stored in acid-state requestState per-request state value that the developer can get set modify inner monad see also whereami getRequestState setRequestState modifyRequestState simpleApp",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "FoundationT",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Foundation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:FoundationT-39-",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to the \u003ccode\u003e\u003ca\u003eFoundationT'\u003c/a\u003e\u003c/code\u003e type alias, but without the \u003ccode\u003e\u003ca\u003eXMLGenT\u003c/a\u003e\u003c/code\u003e wrapper. This variant is most often used in class constraints.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "type",
        "fct-source": "src/Happstack-Foundation.html#FoundationT%27",
        "fct-type": "type",
        "title": "FoundationT'"
      },
      "index": {
        "description": "similar to the FoundationT type alias but without the XMLGenT wrapper This variant is most often used in class constraints",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "FoundationT'",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Foundation T'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:HasAcidState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHasAcidState\u003c/a\u003e\u003c/code\u003e provides a single method \u003ccode\u003e\u003ca\u003egetAcidState\u003c/a\u003e\u003c/code\u003e which can be used to retrieve an \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e handle from the current monad.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "class",
        "fct-source": "src/Happstack-Foundation.html#HasAcidState",
        "fct-type": "class",
        "title": "HasAcidState"
      },
      "index": {
        "description": "HasAcidState provides single method getAcidState which can be used to retrieve an AcidState handle from the current monad",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "HasAcidState",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Has Acid State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "Typeable",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:AcidLocal",
      "description": {
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "Maybe FilePath -\u003e st -\u003e AcidConfig (AcidState st)",
        "fct-source": "src/Happstack-Foundation.html#AcidConfig",
        "fct-type": "function",
        "title": "AcidLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "AcidLocal",
        "normalized": "Maybe FilePath-\u003ea-\u003eAcidConfig(AcidState a)",
        "package": "happstack-foundation",
        "partial": "Acid Local",
        "signature": "Maybe FilePath-\u003est-\u003eAcidConfig(AcidState st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:AcidUsing",
      "description": {
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "st -\u003e AcidConfig st",
        "fct-source": "src/Happstack-Foundation.html#AcidConfig",
        "fct-type": "function",
        "title": "AcidUsing"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "AcidUsing",
        "normalized": "a-\u003eAcidConfig a",
        "package": "happstack-foundation",
        "partial": "Acid Using",
        "signature": "st-\u003eAcidConfig st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:FoundationConf",
      "description": {
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "FoundationConf",
        "fct-source": "src/Happstack-Foundation.html#FoundationConf",
        "fct-type": "function",
        "title": "FoundationConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "FoundationConf",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Foundation Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:bodyPolicy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "BodyPolicy",
        "fct-source": "src/Happstack-Foundation.html#FoundationConf",
        "fct-type": "function",
        "title": "bodyPolicy"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "bodyPolicy",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:dataCast1",
      "description": {
        "fct-descr": "\u003cp\u003eMediate types and unary type constructors.\n In \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances of the form \u003ccode\u003eT a\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edataCast1\u003c/a\u003e\u003c/code\u003e should be defined\n as \u003ccode\u003e\u003ca\u003egcast1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which is appropriate\n for non-unary type constructors.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "c (t d)) -\u003e Maybe (c a)",
        "fct-type": "method",
        "title": "dataCast1"
      },
      "index": {
        "description": "Mediate types and unary type constructors In Data instances of the form dataCast1 should be defined as gcast1 The default definition is const Nothing which is appropriate for non-unary type constructors",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "dataCast1",
        "normalized": "a(b c))-\u003eMaybe(a d)",
        "package": "happstack-foundation",
        "partial": "Cast",
        "signature": "c(t d))-\u003eMaybe(c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:dataCast2",
      "description": {
        "fct-descr": "\u003cp\u003eMediate types and binary type constructors.\n In \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances of the form \u003ccode\u003eT a b\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edataCast2\u003c/a\u003e\u003c/code\u003e should be\n defined as \u003ccode\u003e\u003ca\u003egcast2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which is appropriate\n for non-binary type constructors.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "c (t d e)) -\u003e Maybe (c a)",
        "fct-type": "method",
        "title": "dataCast2"
      },
      "index": {
        "description": "Mediate types and binary type constructors In Data instances of the form dataCast2 should be defined as gcast2 The default definition is const Nothing which is appropriate for non-binary type constructors",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "dataCast2",
        "normalized": "a(b c d))-\u003eMaybe(a e)",
        "package": "happstack-foundation",
        "partial": "Cast",
        "signature": "c(t d e))-\u003eMaybe(c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:dataTypeOf",
      "description": {
        "fct-descr": "\u003cp\u003eThe outer type constructor of the type\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "a -\u003e DataType",
        "fct-type": "method",
        "title": "dataTypeOf"
      },
      "index": {
        "description": "The outer type constructor of the type",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "dataTypeOf",
        "normalized": "a-\u003eDataType",
        "package": "happstack-foundation",
        "partial": "Type Of",
        "signature": "a-\u003eDataType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:defaultConf",
      "description": {
        "fct-descr": "\u003cp\u003econfiguration\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "FoundationConf",
        "fct-source": "src/Happstack-Foundation.html#defaultConf",
        "fct-type": "function",
        "title": "defaultConf"
      },
      "index": {
        "description": "configuration",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "defaultConf",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:defaultTemplate",
      "description": {
        "fct-descr": "\u003cp\u003edefault page template\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "Text -\u003e headers -\u003e body -\u003e FoundationT url acidState requestState m XML",
        "fct-source": "src/Happstack-Foundation.html#defaultTemplate",
        "fct-type": "function",
        "title": "defaultTemplate"
      },
      "index": {
        "description": "default page template",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "defaultTemplate",
        "normalized": "Text-\u003ea-\u003eb-\u003eFoundationT c d e f XML",
        "package": "happstack-foundation",
        "partial": "Template",
        "signature": "Text-\u003eheaders-\u003ebody-\u003eFoundationT url acidState requestState m XML"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:getAcidSt",
      "description": {
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "m acidState",
        "fct-source": "src/Happstack-Foundation.html#getAcidSt",
        "fct-type": "function",
        "title": "getAcidSt"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "getAcidSt",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Acid St",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:getAcidState",
      "description": {
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "m (AcidState st)",
        "fct-source": "src/Happstack-Foundation.html#getAcidState",
        "fct-type": "method",
        "title": "getAcidState"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "getAcidState",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Acid State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:getRequestState",
      "description": {
        "fct-descr": "\u003cp\u003eget the \u003ccode\u003erequestState\u003c/code\u003e value\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "m requestState",
        "fct-source": "src/Happstack-Foundation.html#getRequestState",
        "fct-type": "function",
        "title": "getRequestState"
      },
      "index": {
        "description": "get the requestState value",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "getRequestState",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Request State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gfoldl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-associative fold operation for constructor applications.\n\u003c/p\u003e\u003cp\u003eThe type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is a headache, but operationally it is a simple\n generalisation of a list fold.\n\u003c/p\u003e\u003cp\u003eThe default definition for \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which is\n suitable for abstract datatypes with no substructures.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "gfoldl",
        "fct-type": "method",
        "title": "gfoldl"
      },
      "index": {
        "description": "Left-associative fold operation for constructor applications The type of gfoldl is headache but operationally it is simple generalisation of list fold The default definition for gfoldl is const id which is suitable for abstract datatypes with no substructures",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gfoldl",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapM",
      "description": {
        "fct-descr": "\u003cp\u003eA generic monadic transformation that maps over the immediate subterms\n\u003c/p\u003e\u003cp\u003eThe default definition instantiates the type constructor \u003ccode\u003ec\u003c/code\u003e in\n the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e to the monad datatype constructor, defining\n injection and projection using \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e m d) -\u003e a -\u003e m a",
        "fct-type": "method",
        "title": "gmapM"
      },
      "index": {
        "description": "generic monadic transformation that maps over the immediate subterms The default definition instantiates the type constructor in the type of gfoldl to the monad datatype constructor defining injection and projection using return and",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapM",
        "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
        "package": "happstack-foundation",
        "partial": "",
        "signature": "d-\u003em d)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapMo",
      "description": {
        "fct-descr": "\u003cp\u003eTransformation of one immediate subterm with success\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e m d) -\u003e a -\u003e m a",
        "fct-type": "method",
        "title": "gmapMo"
      },
      "index": {
        "description": "Transformation of one immediate subterm with success",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapMo",
        "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
        "package": "happstack-foundation",
        "partial": "Mo",
        "signature": "d-\u003em d)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapMp",
      "description": {
        "fct-descr": "\u003cp\u003eTransformation of at least one immediate subterm does not fail\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e m d) -\u003e a -\u003e m a",
        "fct-type": "method",
        "title": "gmapMp"
      },
      "index": {
        "description": "Transformation of at least one immediate subterm does not fail",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapMp",
        "normalized": "a-\u003eb a)-\u003ec-\u003eb c",
        "package": "happstack-foundation",
        "partial": "Mp",
        "signature": "d-\u003em d)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapQ",
      "description": {
        "fct-descr": "\u003cp\u003eA generic query that processes the immediate subterms and returns a list\n of results.  The list is given in the same order as originally specified\n in the declaratoin of the data constructors.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e u) -\u003e a -\u003e [u]",
        "fct-type": "method",
        "title": "gmapQ"
      },
      "index": {
        "description": "generic query that processes the immediate subterms and returns list of results The list is given in the same order as originally specified in the declaratoin of the data constructors",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapQ",
        "normalized": "a-\u003eb)-\u003ec-\u003e[b]",
        "package": "happstack-foundation",
        "partial": "",
        "signature": "d-\u003eu)-\u003ea-\u003e[u]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapQi",
      "description": {
        "fct-descr": "\u003cp\u003eA generic query that processes one child by index (zero-based)\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e u) -\u003e a -\u003e u",
        "fct-type": "method",
        "title": "gmapQi"
      },
      "index": {
        "description": "generic query that processes one child by index zero-based",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapQi",
        "normalized": "a-\u003eb)-\u003ec-\u003eb",
        "package": "happstack-foundation",
        "partial": "Qi",
        "signature": "d-\u003eu)-\u003ea-\u003eu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapQl",
      "description": {
        "fct-descr": "\u003cp\u003eA generic query with a left-associative binary operator\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e r') -\u003e a -\u003e r",
        "fct-type": "method",
        "title": "gmapQl"
      },
      "index": {
        "description": "generic query with left-associative binary operator",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapQl",
        "normalized": "a-\u003eb)-\u003ec-\u003ed",
        "package": "happstack-foundation",
        "partial": "Ql",
        "signature": "d-\u003er')-\u003ea-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapQr",
      "description": {
        "fct-descr": "\u003cp\u003eA generic query with a right-associative binary operator\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "d -\u003e r') -\u003e a -\u003e r",
        "fct-type": "method",
        "title": "gmapQr"
      },
      "index": {
        "description": "generic query with right-associative binary operator",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapQr",
        "normalized": "a-\u003eb)-\u003ec-\u003ed",
        "package": "happstack-foundation",
        "partial": "Qr",
        "signature": "d-\u003er')-\u003ea-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gmapT",
      "description": {
        "fct-descr": "\u003cp\u003eA generic transformation that maps over the immediate subterms\n\u003c/p\u003e\u003cp\u003eThe default definition instantiates the type constructor \u003ccode\u003ec\u003c/code\u003e in the\n type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e to an identity datatype constructor, using the\n isomorphism pair as injection and projection.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "b -\u003e b) -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "gmapT"
      },
      "index": {
        "description": "generic transformation that maps over the immediate subterms The default definition instantiates the type constructor in the type of gfoldl to an identity datatype constructor using the isomorphism pair as injection and projection",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gmapT",
        "normalized": "a-\u003ea)-\u003eb-\u003eb",
        "package": "happstack-foundation",
        "partial": "",
        "signature": "b-\u003eb)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:gunfold",
      "description": {
        "fct-descr": "\u003cp\u003eUnfolding constructor applications\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "c (b -\u003e r) -\u003e c r) -\u003e (forall r.  r -\u003e c r) -\u003e Constr -\u003e c a",
        "fct-type": "method",
        "title": "gunfold"
      },
      "index": {
        "description": "Unfolding constructor applications",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "gunfold",
        "normalized": "a(b-\u003ec)-\u003ea c)-\u003e(d e c-\u003ea c)-\u003eConstr-\u003ea f",
        "package": "happstack-foundation",
        "partial": "",
        "signature": "c(b-\u003er)-\u003ec r)-\u003e(forall r. r-\u003ec r)-\u003eConstr-\u003ec a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:httpConf",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "Conf",
        "fct-source": "src/Happstack-Foundation.html#FoundationConf",
        "fct-type": "function",
        "title": "httpConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "httpConf",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:modifyRequestState",
      "description": {
        "fct-descr": "\u003cp\u003eset the \u003ccode\u003erequestState\u003c/code\u003e value\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "(requestState -\u003e requestState) -\u003e m ()",
        "fct-source": "src/Happstack-Foundation.html#modifyRequestState",
        "fct-type": "function",
        "title": "modifyRequestState"
      },
      "index": {
        "description": "set the requestState value",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "modifyRequestState",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "happstack-foundation",
        "partial": "Request State",
        "signature": "(requestState-\u003erequestState)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003ewrapper around query from acid-state\n\u003c/p\u003e\u003cp\u003eThis variant automatically gets the \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e handle from the monad\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "event -\u003e m (EventResult event)",
        "fct-source": "src/Happstack-Foundation.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "wrapper around query from acid-state This variant automatically gets the AcidState handle from the monad",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "query",
        "normalized": "a-\u003eb(EventResult a)",
        "package": "happstack-foundation",
        "partial": "",
        "signature": "event-\u003em(EventResult event)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:setRequestState",
      "description": {
        "fct-descr": "\u003cp\u003eset the \u003ccode\u003erequestState\u003c/code\u003e value\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "requestState -\u003e m ()",
        "fct-source": "src/Happstack-Foundation.html#setRequestState",
        "fct-type": "function",
        "title": "setRequestState"
      },
      "index": {
        "description": "set the requestState value",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "setRequestState",
        "normalized": "a-\u003eb()",
        "package": "happstack-foundation",
        "partial": "Request State",
        "signature": "requestState-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:simpleApp",
      "description": {
        "fct-descr": "\u003cp\u003erun the application\n\u003c/p\u003e\u003cp\u003estarts the database, listens for requests, etc.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "(forall r.  m r -\u003e IO r)-\u003e FoundationConf-\u003e AcidConfig acidState-\u003e requestState-\u003e url-\u003e Text-\u003e (url -\u003e FoundationT url acidState requestState m a)-\u003e IO ()",
        "fct-type": "function",
        "title": "simpleApp"
      },
      "index": {
        "description": "run the application starts the database listens for requests etc",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "simpleApp",
        "normalized": "(a b c d-\u003eIO d)-\u003eFoundationConf-\u003eAcidConfig e-\u003ef-\u003eg-\u003eText-\u003e(g-\u003eFoundationT g e f c h)-\u003eIO()",
        "package": "happstack-foundation",
        "partial": "App",
        "signature": "(forall r. m r-\u003eIO r)-\u003eFoundationConf-\u003eAcidConfig acidState-\u003erequestState-\u003eurl-\u003eText-\u003e(url-\u003eFoundationT url acidState requestState m a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:toConstr",
      "description": {
        "fct-descr": "\u003cp\u003eObtaining the constructor from a given datum.\n For proper terms, this is meant to be the top-level constructor.\n Primitive datatypes are here viewed as potentially infinite sets of\n values (i.e., constructors).\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "a -\u003e Constr",
        "fct-type": "method",
        "title": "toConstr"
      },
      "index": {
        "description": "Obtaining the constructor from given datum For proper terms this is meant to be the top-level constructor Primitive datatypes are here viewed as potentially infinite sets of values i.e constructors",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "toConstr",
        "normalized": "a-\u003eConstr",
        "package": "happstack-foundation",
        "partial": "Constr",
        "signature": "a-\u003eConstr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:typeOf",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a value of type \u003ccode\u003ea\u003c/code\u003e and returns a concrete representation\n of that type.  The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by\n any instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, so that it is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as\n the argument.\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "a -\u003e TypeRep",
        "fct-type": "method",
        "title": "typeOf"
      },
      "index": {
        "description": "Takes value of type and returns concrete representation of that type The value of the argument should be ignored by any instance of Typeable so that it is safe to pass undefined as the argument",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "typeOf",
        "normalized": "a-\u003eTypeRep",
        "package": "happstack-foundation",
        "partial": "Of",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003ewrapper around update from acid-state\n\u003c/p\u003e\u003cp\u003eThis variant automatically gets the \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e handle from the monad\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "event -\u003e m (EventResult event)",
        "fct-source": "src/Happstack-Foundation.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "wrapper around update from acid-state This variant automatically gets the AcidState handle from the monad",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "update",
        "normalized": "a-\u003eb(EventResult a)",
        "package": "happstack-foundation",
        "partial": "",
        "signature": "event-\u003em(EventResult event)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-foundation/docs/Happstack-Foundation.html#v:whereami",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the decoded \u003ccode\u003eurl\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Happstack.Foundation",
        "fct-package": "happstack-foundation",
        "fct-signature": "FoundationT url acidState requestState m url",
        "fct-source": "src/Happstack-Foundation.html#whereami",
        "fct-type": "function",
        "title": "whereami"
      },
      "index": {
        "description": "returns the decoded url from the Request",
        "hierarchy": "Happstack Foundation",
        "module": "Happstack.Foundation",
        "name": "whereami",
        "normalized": "",
        "package": "happstack-foundation",
        "partial": "",
        "signature": ""
      }
    }
  }
]