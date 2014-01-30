[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements various cursor datatypes for iterating over collections\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CC-Cursor.html",
        "fct-type": "module",
        "title": "Cursor"
      },
      "index": {
        "description": "Implements various cursor datatypes for iterating over collections",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "Cursor",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eA generalized type that represents a reified data structure traversal.\n The other traversal data types in this module are special cases of this\n general type. Cursor is parameterized by four types:\n\u003c/p\u003e\u003cp\u003em : The monad in which the Cursor object is usable.\n\u003c/p\u003e\u003cp\u003er : The result type, which will be stored in the cursor once the traversal\n     has been completed.\n\u003c/p\u003e\u003cp\u003eb : The type that the cursor expects to receive before moving on to the\n     next element in the traversal.\n\u003c/p\u003e\u003cp\u003ea : The element type to which the Cursor provides access at each step in\n     the traversal.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Cursor.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "generalized type that represents reified data structure traversal The other traversal data types in this module are special cases of this general type Cursor is parameterized by four types The monad in which the Cursor object is usable The result type which will be stored in the cursor once the traversal has been completed The type that the cursor expects to receive before moving on to the next element in the traversal The element type to which the Cursor provides access at each step in the traversal",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "Cursor",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#t:Iterator",
      "description": {
        "fct-descr": "\u003cp\u003eA simple iterator, which provides a way to view each of the elements of\n a data structure in order.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-CC-Cursor.html#Iterator",
        "fct-type": "type",
        "title": "Iterator"
      },
      "index": {
        "description": "simple iterator which provides way to view each of the elements of data structure in order",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "Iterator",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Iterator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:Current",
      "description": {
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "a -\u003e (b -\u003e m (Cursor m r b a)) -\u003e Cursor m r b a",
        "fct-source": "src/Control-Monad-CC-Cursor.html#Cursor",
        "fct-type": "function",
        "title": "Current"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "Current",
        "normalized": "a-\u003e(b-\u003ec(Cursor c d b a))-\u003eCursor c d b a",
        "package": "CC-delcont",
        "partial": "Current",
        "signature": "a-\u003e(b-\u003em(Cursor m r b a))-\u003eCursor m r b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:Done",
      "description": {
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "r -\u003e Cursor m r b a",
        "fct-source": "src/Control-Monad-CC-Cursor.html#Cursor",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "Done",
        "normalized": "a-\u003eCursor b a c d",
        "package": "CC-delcont",
        "partial": "Done",
        "signature": "r-\u003eCursor m r b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:current",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the current element from a cursor, if applicable.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "Cursor m r b a -\u003e Maybe a",
        "fct-source": "src/Control-Monad-CC-Cursor.html#current",
        "fct-type": "function",
        "title": "current"
      },
      "index": {
        "description": "Extracts the current element from cursor if applicable",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "current",
        "normalized": "Cursor a b c d-\u003eMaybe d",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Cursor m r b a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:generator",
      "description": {
        "fct-descr": "\u003cp\u003eA function for making a cursor out of a free form generator, similar to\n using \u003ccode\u003eyield\u003c/code\u003e in Ruby or Python. For example:\n\u003c/p\u003e\u003cpre\u003e generator $ \\yield -\u003e do a \u003c- yield 1 ; yield 2 ; b \u003c- yield 3 ; return [a,b]\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "((a -\u003e m b) -\u003e m r) -\u003e m (Cursor m r b a)",
        "fct-source": "src/Control-Monad-CC-Cursor.html#generator",
        "fct-type": "function",
        "title": "generator"
      },
      "index": {
        "description": "function for making cursor out of free form generator similar to using yield in Ruby or Python For example generator yield do yield yield yield return",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "generator",
        "normalized": "((a-\u003eb c)-\u003eb d)-\u003eb(Cursor b d c a)",
        "package": "CC-delcont",
        "partial": "",
        "signature": "((a-\u003em b)-\u003em r)-\u003em(Cursor m r b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:iterator",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an Iterator that will yield each of the elements of a Foldable in\n order.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "t a -\u003e m (Iterator m a)",
        "fct-source": "src/Control-Monad-CC-Cursor.html#iterator",
        "fct-type": "function",
        "title": "iterator"
      },
      "index": {
        "description": "Creates an Iterator that will yield each of the elements of Foldable in order",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "iterator",
        "normalized": "a b-\u003ec(Iterator c b)",
        "package": "CC-delcont",
        "partial": "",
        "signature": "t a-\u003em(Iterator m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eAdvances an Iterator to the next element (has no effect on a finished Iterator).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "Iterator m a -\u003e m (Iterator m a)",
        "fct-source": "src/Control-Monad-CC-Cursor.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Advances an Iterator to the next element has no effect on finished Iterator",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "next",
        "normalized": "Iterator a b-\u003ea(Iterator a b)",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Iterator m a-\u003em(Iterator m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eBegins an updating traversal over a Traversable structure. At each step,\n the cursor will hold an element of type a, and providing an element of type\n b will move on to the next step. When done, a new Traversable object holding\n elements of type b will be available.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "t a -\u003e m (Cursor m (t b) b a)",
        "fct-source": "src/Control-Monad-CC-Cursor.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "Begins an updating traversal over Traversable structure At each step the cursor will hold an element of type and providing an element of type will move on to the next step When done new Traversable object holding elements of type will be available",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "open",
        "normalized": "a b-\u003ec(Cursor c(a d)d b)",
        "package": "CC-delcont",
        "partial": "",
        "signature": "t a-\u003em(Cursor m(t b)b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Cursor.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eProvides an item to a Cursor, moving on to the next step in the traversal.\n (has no effect on a finished Cursor).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Cursor",
        "fct-package": "CC-delcont",
        "fct-signature": "b -\u003e Cursor m r b a -\u003e m (Cursor m r b a)",
        "fct-source": "src/Control-Monad-CC-Cursor.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Provides an item to Cursor moving on to the next step in the traversal has no effect on finished Cursor",
        "hierarchy": "Control Monad CC Cursor",
        "module": "Control.Monad.CC.Cursor",
        "name": "update",
        "normalized": "a-\u003eCursor b c a d-\u003eb(Cursor b c a d)",
        "package": "CC-delcont",
        "partial": "",
        "signature": "b-\u003eCursor m r b a-\u003em(Cursor m r b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of dynamically scoped variables using multi-prompt\n delimited control operators. This implementation follows that of the\n paper \u003cem\u003eDelimited Dynamic Binding\u003c/em\u003e, by Oleg Kiselyov, Chung-chieh Shan and\n Amr Sabry (\u003ca\u003ehttp://okmij.org/ftp/papers/DDBinding.pdf\u003c/a\u003e), adapting the\n Haskell implementation (available at\n \u003ca\u003ehttp://okmij.org/ftp/packages/DBplusDC.tar.gz\u003c/a\u003e) to any delimited control\n monad (in practice, this is likely just CC and CCT m).\n\u003c/p\u003e\u003cp\u003eSee below for usage examples.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CC-Dynvar.html",
        "fct-type": "module",
        "title": "Dynvar"
      },
      "index": {
        "description": "An implementation of dynamically scoped variables using multi-prompt delimited control operators This implementation follows that of the paper Delimited Dynamic Binding by Oleg Kiselyov Chung-chieh Shan and Amr Sabry http okmij.org ftp papers DDBinding.pdf adapting the Haskell implementation available at http okmij.org ftp packages DBplusDC.tar.gz to any delimited control monad in practice this is likely just CC and CCT See below for usage examples",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "Dynvar",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Dynvar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#t:Dynvar",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of dynamically scoped variables in a given monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#Dynvar",
        "fct-type": "data",
        "title": "Dynvar"
      },
      "index": {
        "description": "The type of dynamically scoped variables in given monad",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "Dynvar",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Dynvar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#v:dlet",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduces a new value to the dynamic variable over a block\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "Dynvar m a -\u003e a -\u003e m b -\u003e m b",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#dlet",
        "fct-type": "function",
        "title": "dlet"
      },
      "index": {
        "description": "Introduces new value to the dynamic variable over block",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "dlet",
        "normalized": "Dynvar a b-\u003eb-\u003ea c-\u003ea c",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Dynvar m a-\u003ea-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#v:dmod",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the value of a dynamically scoped variable\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "Dynvar m a -\u003e (a -\u003e a) -\u003e m a",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#dmod",
        "fct-type": "function",
        "title": "dmod"
      },
      "index": {
        "description": "Modifies the value of dynamically scoped variable",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "dmod",
        "normalized": "Dynvar a b-\u003e(b-\u003eb)-\u003ea b",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Dynvar m a-\u003e(a-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#v:dnew",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new dynamically scoped variable\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "m (Dynvar m a)",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#dnew",
        "fct-type": "function",
        "title": "dnew"
      },
      "index": {
        "description": "Creates new dynamically scoped variable",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "dnew",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#v:dref",
      "description": {
        "fct-descr": "\u003cp\u003eReads the value of a dynamically scoped variable\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "Dynvar m a -\u003e m a",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#dref",
        "fct-type": "function",
        "title": "dref"
      },
      "index": {
        "description": "Reads the value of dynamically scoped variable",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "dref",
        "normalized": "Dynvar a b-\u003ea b",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Dynvar m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#v:dset",
      "description": {
        "fct-descr": "\u003cp\u003eAssigns a value to a dynamically scoped variable\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "Dynvar m a -\u003e a -\u003e m a",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#dset",
        "fct-type": "function",
        "title": "dset"
      },
      "index": {
        "description": "Assigns value to dynamically scoped variable",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "dset",
        "normalized": "Dynvar a b-\u003eb-\u003ea b",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Dynvar m a-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Dynvar.html#v:dupp",
      "description": {
        "fct-descr": "\u003cp\u003eCalls the function, g, with the value of the given Dynvar\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Dynvar",
        "fct-package": "CC-delcont",
        "fct-signature": "Dynvar m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-CC-Dynvar.html#dupp",
        "fct-type": "function",
        "title": "dupp"
      },
      "index": {
        "description": "Calls the function with the value of the given Dynvar",
        "hierarchy": "Control Monad CC Dynvar",
        "module": "Control.Monad.CC.Dynvar",
        "name": "dupp",
        "normalized": "Dynvar a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "CC-delcont",
        "partial": "",
        "signature": "Dynvar m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monadic treatment of delimited continuations.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n      \u003cem\u003eA Monadic Framework for Delimited Continuations\u003c/em\u003e,\n    by R. Kent Dybvig, Simon Peyton Jones and Amr Sabry\n      (\u003ca\u003ehttp://www.cs.indiana.edu/~sabry/papers/monadicDC.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eThis module implements the generation of unique prompt names to be used\n as delimiters.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CC-Prompt.html",
        "fct-type": "module",
        "title": "Prompt"
      },
      "index": {
        "description": "monadic treatment of delimited continuations Adapted from the paper Monadic Framework for Delimited Continuations by Kent Dybvig Simon Peyton Jones and Amr Sabry http www.cs.indiana.edu sabry papers monadicDC.pdf This module implements the generation of unique prompt names to be used as delimiters",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "Prompt",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#t:Equal",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype representing type equality. The EQU constructor can\n be used to provide evidence that two types are equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Prompt.html#Equal",
        "fct-type": "data",
        "title": "Equal"
      },
      "index": {
        "description": "datatype representing type equality The EQU constructor can be used to provide evidence that two types are equivalent",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "Equal",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#t:P",
      "description": {
        "fct-descr": "\u003cp\u003eThe prompt generation monad. Represents the type of computations that\n make use of a supply of unique prompts.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Prompt.html#P",
        "fct-type": "data",
        "title": "P"
      },
      "index": {
        "description": "The prompt generation monad Represents the type of computations that make use of supply of unique prompts",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "P",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#t:Prompt",
      "description": {
        "fct-descr": "\u003cp\u003eThe prompt type, parameterized by two types:\n * ans : The region identifier, used to ensure that prompts are only used\n within the same context in which they are created.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a : The type of values that may be returned \u003ccode\u003ethrough\u003c/code\u003e a given prompt.\n For instance, only prompts of type 'Prompt r a' may be pushed onto a\n computation of type 'CC r a'.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Prompt.html#Prompt",
        "fct-type": "data",
        "title": "Prompt"
      },
      "index": {
        "description": "The prompt type parameterized by two types ans The region identifier used to ensure that prompts are only used within the same context in which they are created The type of values that may be returned through given prompt For instance only prompts of type Prompt may be pushed onto computation of type CC",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "Prompt",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#v:EQU",
      "description": {
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "Equal a a",
        "fct-source": "src/Control-Monad-CC-Prompt.html#Equal",
        "fct-type": "function",
        "title": "EQU"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "EQU",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "EQU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#v:NEQ",
      "description": {
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "Equal a b",
        "fct-source": "src/Control-Monad-CC-Prompt.html#Equal",
        "fct-type": "function",
        "title": "NEQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "NEQ",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "NEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#v:eqPrompt",
      "description": {
        "fct-descr": "\u003cp\u003eTests to determine if two prompts are equal. If so, it provides\n evidence of that fact, in the form of an \u003cem\u003eEqual\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "Prompt ans a -\u003e Prompt ans b -\u003e Equal a b",
        "fct-source": "src/Control-Monad-CC-Prompt.html#eqPrompt",
        "fct-type": "function",
        "title": "eqPrompt"
      },
      "index": {
        "description": "Tests to determine if two prompts are equal If so it provides evidence of that fact in the form of an Equal",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "eqPrompt",
        "normalized": "Prompt a b-\u003ePrompt a c-\u003eEqual b c",
        "package": "CC-delcont",
        "partial": "Prompt",
        "signature": "Prompt ans a-\u003ePrompt ans b-\u003eEqual a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#v:newPromptName",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a new, unique prompt\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "P ans m (Prompt ans a)",
        "fct-source": "src/Control-Monad-CC-Prompt.html#newPromptName",
        "fct-type": "function",
        "title": "newPromptName"
      },
      "index": {
        "description": "Generates new unique prompt",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "newPromptName",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Prompt Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Prompt.html#v:runP",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a computation that makes use of prompts, yielding a result in the\n underlying monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Prompt",
        "fct-package": "CC-delcont",
        "fct-signature": "P ans m ans -\u003e m ans",
        "fct-source": "src/Control-Monad-CC-Prompt.html#runP",
        "fct-type": "function",
        "title": "runP"
      },
      "index": {
        "description": "Runs computation that makes use of prompts yielding result in the underlying monad",
        "hierarchy": "Control Monad CC Prompt",
        "module": "Control.Monad.CC.Prompt",
        "name": "runP",
        "normalized": "P a b a-\u003eb a",
        "package": "CC-delcont",
        "partial": "",
        "signature": "P ans m ans-\u003em ans"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monadic treatment of delimited continuations.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n      \u003cem\u003eA Monadic Framework for Delimited Continuations\u003c/em\u003e,\n    by R. Kent Dybvig, Simon Peyton Jones and Amr Sabry\n      (\u003ca\u003ehttp://www.cs.indiana.edu/~sabry/papers/monadicDC.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eThis module implements the generalized sequence type used as a stack of\n frames representation of the delimited continuations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CC-Seq.html",
        "fct-type": "module",
        "title": "Seq"
      },
      "index": {
        "description": "monadic treatment of delimited continuations Adapted from the paper Monadic Framework for Delimited Continuations by Kent Dybvig Simon Peyton Jones and Amr Sabry http www.cs.indiana.edu sabry papers monadicDC.pdf This module implements the generalized sequence type used as stack of frames representation of the delimited continuations",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "Seq",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#t:Seq",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a generalized sequence datatype, parameterized by three types:\n seg : A constructor for segments of the sequence. \n\u003c/p\u003e\u003cp\u003eans : the type resulting from applying all the segments of the sequence.\n Also used as a region parameter.\n\u003c/p\u003e\u003cp\u003ea   : The type expected as input to the sequence of segments.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Seq.html#Seq",
        "fct-type": "data",
        "title": "Seq"
      },
      "index": {
        "description": "This is generalized sequence datatype parameterized by three types seg constructor for segments of the sequence ans the type resulting from applying all the segments of the sequence Also used as region parameter The type expected as input to the sequence of segments",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "Seq",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#t:SubSeq",
      "description": {
        "fct-descr": "\u003cp\u003eA type representing a sub-sequence, which may be appended to a sequence\n of appropriate type. It represents a sequence that takes values of type\n a to values of type b, and may be pushed onto a sequence that takes values\n of type b to values of type ans.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-CC-Seq.html#SubSeq",
        "fct-type": "type",
        "title": "SubSeq"
      },
      "index": {
        "description": "type representing sub-sequence which may be appended to sequence of appropriate type It represents sequence that takes values of type to values of type and may be pushed onto sequence that takes values of type to values of type ans",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "SubSeq",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Sub Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#v:EmptyS",
      "description": {
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "Seq seg ans ans",
        "fct-source": "src/Control-Monad-CC-Seq.html#Seq",
        "fct-type": "function",
        "title": "EmptyS"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "EmptyS",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#v:PushP",
      "description": {
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "Prompt ans a -\u003e Seq seg ans a -\u003e Seq seg ans a",
        "fct-source": "src/Control-Monad-CC-Seq.html#Seq",
        "fct-type": "function",
        "title": "PushP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "PushP",
        "normalized": "Prompt a b-\u003eSeq c a b-\u003eSeq c a b",
        "package": "CC-delcont",
        "partial": "Push",
        "signature": "Prompt ans a-\u003eSeq seg ans a-\u003eSeq seg ans a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#v:PushSeg",
      "description": {
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "seg ans a b -\u003e Seq seg ans b -\u003e Seq seg ans a",
        "fct-source": "src/Control-Monad-CC-Seq.html#Seq",
        "fct-type": "function",
        "title": "PushSeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "PushSeg",
        "normalized": "a b c d-\u003eSeq a b d-\u003eSeq a b c",
        "package": "CC-delcont",
        "partial": "Push Seg",
        "signature": "seg ans a b-\u003eSeq seg ans b-\u003eSeq seg ans a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#v:appendSubSeq",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate two subsequences\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "SubSeq seg ans a b -\u003e SubSeq seg ans b c -\u003e SubSeq seg ans a c",
        "fct-source": "src/Control-Monad-CC-Seq.html#appendSubSeq",
        "fct-type": "function",
        "title": "appendSubSeq"
      },
      "index": {
        "description": "Concatenate two subsequences",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "appendSubSeq",
        "normalized": "SubSeq a b c d-\u003eSubSeq a b d e-\u003eSubSeq a b c e",
        "package": "CC-delcont",
        "partial": "Sub Seq",
        "signature": "SubSeq seg ans a b-\u003eSubSeq seg ans b c-\u003eSubSeq seg ans a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#v:pushSeq",
      "description": {
        "fct-descr": "\u003cp\u003ePush a sub-sequence onto the front of a sequence\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "SubSeq seg ans a b -\u003e Seq seg ans b -\u003e Seq seg ans a",
        "fct-source": "src/Control-Monad-CC-Seq.html#pushSeq",
        "fct-type": "function",
        "title": "pushSeq"
      },
      "index": {
        "description": "Push sub-sequence onto the front of sequence",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "pushSeq",
        "normalized": "SubSeq a b c d-\u003eSeq a b d-\u003eSeq a b c",
        "package": "CC-delcont",
        "partial": "Seq",
        "signature": "SubSeq seg ans a b-\u003eSeq seg ans b-\u003eSeq seg ans a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC-Seq.html#v:splitSeq",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a sequence at the given prompt into a sub-sequence, and\n the rest of the sequence\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.Seq",
        "fct-package": "CC-delcont",
        "fct-signature": "Prompt ans b -\u003e Seq seg ans a -\u003e (SubSeq seg ans a b, Seq seg ans b)",
        "fct-source": "src/Control-Monad-CC-Seq.html#splitSeq",
        "fct-type": "function",
        "title": "splitSeq"
      },
      "index": {
        "description": "Splits sequence at the given prompt into sub-sequence and the rest of the sequence",
        "hierarchy": "Control Monad CC Seq",
        "module": "Control.Monad.CC.Seq",
        "name": "splitSeq",
        "normalized": "Prompt a b-\u003eSeq c a d-\u003e(SubSeq c a d b,Seq c a b)",
        "package": "CC-delcont",
        "partial": "Seq",
        "signature": "Prompt ans b-\u003eSeq seg ans a-\u003e(SubSeq seg ans a b,Seq seg ans b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monadic treatment of delimited continuations.\n\u003c/p\u003e\u003cp\u003eAdapted from the paper\n      \u003cem\u003eA Monadic Framework for Delimited Continuations\u003c/em\u003e,\n    by R. Kent Dybvig, Simon Peyton Jones and Amr Sabry\n      (\u003ca\u003ehttp://www.cs.indiana.edu/~sabry/papers/monadicDC.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eThis module implements the delimited continuation monad and transformer,\n using the sequence-of-frames implementation from the original paper.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CC.html",
        "fct-type": "module",
        "title": "CC"
      },
      "index": {
        "description": "monadic treatment of delimited continuations Adapted from the paper Monadic Framework for Delimited Continuations by Kent Dybvig Simon Peyton Jones and Amr Sabry http www.cs.indiana.edu sabry papers monadicDC.pdf This module implements the delimited continuation monad and transformer using the sequence-of-frames implementation from the original paper",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "CC",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#t:CC",
      "description": {
        "fct-descr": "\u003cp\u003eThe CC monad may be used to execute computations with delimited control.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC.html#CC",
        "fct-type": "data",
        "title": "CC"
      },
      "index": {
        "description": "The CC monad may be used to execute computations with delimited control",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "CC",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#t:CCT",
      "description": {
        "fct-descr": "\u003cp\u003eThe CCT monad transformer allows you to layer delimited control\n effects over an arbitrary monad.\n\u003c/p\u003e\u003cp\u003eThe CCT transformer is parameterized by the following types\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ans : A region parameter, so that prompts and subcontinuations\n         may only be used in the same region they are created.\n\u003c/li\u003e\u003cli\u003e m   : the underlying monad\n\u003c/li\u003e\u003cli\u003e a   : The contained value. A value of type CCT ans m a can be though\n         of as a computation that calls its continuation with a value of\n         type \u003ccode\u003ea\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC.html#CCT",
        "fct-type": "data",
        "title": "CCT"
      },
      "index": {
        "description": "The CCT monad transformer allows you to layer delimited control effects over an arbitrary monad The CCT transformer is parameterized by the following types ans region parameter so that prompts and subcontinuations may only be used in the same region they are created the underlying monad The contained value value of type CCT ans can be though of as computation that calls its continuation with value of type",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "CCT",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "CCT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#t:MonadDelimitedCont",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass for monads that support delimited control operators.\n The type varibles represent the following:\n\u003c/p\u003e\u003cp\u003em : The monad itself\n\u003c/p\u003e\u003cp\u003ep : The associated type of prompts that may delimit computations in the monad\n\u003c/p\u003e\u003cp\u003es : The associated type of sub-continuations that may be captured\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-CC.html#MonadDelimitedCont",
        "fct-type": "class",
        "title": "MonadDelimitedCont"
      },
      "index": {
        "description": "typeclass for monads that support delimited control operators The type varibles represent the following The monad itself The associated type of prompts that may delimit computations in the monad The associated type of sub-continuations that may be captured",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "MonadDelimitedCont",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Monad Delimited Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#t:Prompt",
      "description": {
        "fct-descr": "\u003cp\u003eThe prompt type, parameterized by two types:\n * ans : The region identifier, used to ensure that prompts are only used\n within the same context in which they are created.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a : The type of values that may be returned \u003ccode\u003ethrough\u003c/code\u003e a given prompt.\n For instance, only prompts of type 'Prompt r a' may be pushed onto a\n computation of type 'CC r a'.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-Prompt.html#Prompt",
        "fct-type": "data",
        "title": "Prompt"
      },
      "index": {
        "description": "The prompt type parameterized by two types ans The region identifier used to ensure that prompts are only used within the same context in which they are created The type of values that may be returned through given prompt For instance only prompts of type Prompt may be pushed onto computation of type CC",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "Prompt",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#t:SubCont",
      "description": {
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC.html#SubCont",
        "fct-type": "data",
        "title": "SubCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "SubCont",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Sub Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eAborts the current continuation up to the given prompt.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p b -\u003e m b -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#abort",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "Aborts the current continuation up to the given prompt",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "abort",
        "normalized": "a b-\u003ec b-\u003ec d",
        "package": "CC-delcont",
        "partial": "",
        "signature": "p b-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:control",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003econtrol\u003c/em\u003e operator, traditionally the counterpart of \u003cem\u003eprompt\u003c/em\u003e. It does\n not delimit the reified subcontinuation, so control effects therein can\n escape. The corresponding prompt is performed equally well by \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e above.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p b -\u003e ((m a -\u003e m b) -\u003e m b) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#control",
        "fct-type": "function",
        "title": "control"
      },
      "index": {
        "description": "The control operator traditionally the counterpart of prompt It does not delimit the reified subcontinuation so control effects therein can escape The corresponding prompt is performed equally well by reset above",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "control",
        "normalized": "a b-\u003e((c d-\u003ec b)-\u003ec b)-\u003ec d",
        "package": "CC-delcont",
        "partial": "",
        "signature": "p b-\u003e((m a-\u003em b)-\u003em b)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:control0",
      "description": {
        "fct-descr": "\u003cp\u003eAbortively captures the current subcontinuation, delimiting neither it nor\n the resulting computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p b -\u003e ((m a -\u003e m b) -\u003e m b) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#control0",
        "fct-type": "function",
        "title": "control0"
      },
      "index": {
        "description": "Abortively captures the current subcontinuation delimiting neither it nor the resulting computation",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "control0",
        "normalized": "a b-\u003e((c d-\u003ec b)-\u003ec b)-\u003ec d",
        "package": "CC-delcont",
        "partial": "",
        "signature": "p b-\u003e((m a-\u003em b)-\u003em b)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:newPrompt",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new, unique prompt.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "m (p a)",
        "fct-source": "src/Control-Monad-CC.html#newPrompt",
        "fct-type": "method",
        "title": "newPrompt"
      },
      "index": {
        "description": "Creates new unique prompt",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "newPrompt",
        "normalized": "",
        "package": "CC-delcont",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:pushPrompt",
      "description": {
        "fct-descr": "\u003cp\u003eDelimits a computation with a given prompt.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#pushPrompt",
        "fct-type": "method",
        "title": "pushPrompt"
      },
      "index": {
        "description": "Delimits computation with given prompt",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "pushPrompt",
        "normalized": "a b-\u003ec b-\u003ec b",
        "package": "CC-delcont",
        "partial": "Prompt",
        "signature": "p a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:pushSubCont",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a sub-continuation, reinstating it as part of the continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "s a b -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-CC.html#pushSubCont",
        "fct-type": "method",
        "title": "pushSubCont"
      },
      "index": {
        "description": "Pushes sub-continuation reinstating it as part of the continuation",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "pushSubCont",
        "normalized": "a b c-\u003ed b-\u003ed c",
        "package": "CC-delcont",
        "partial": "Sub Cont",
        "signature": "s a b-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:reset",
      "description": {
        "fct-descr": "\u003cp\u003eAn approximation of the traditional \u003cem\u003ereset\u003c/em\u003e operator. Creates a new prompt,\n calls the given function with it, and delimits the resulting computation\n with said prompt.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "(p a -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#reset",
        "fct-type": "function",
        "title": "reset"
      },
      "index": {
        "description": "An approximation of the traditional reset operator Creates new prompt calls the given function with it and delimits the resulting computation with said prompt",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "reset",
        "normalized": "(a b-\u003ec b)-\u003ec b",
        "package": "CC-delcont",
        "partial": "",
        "signature": "(p a-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:runCC",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a CC computation, yielding a resulting value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "(forall ans.  CC ans a) -\u003e a",
        "fct-source": "src/Control-Monad-CC.html#runCC",
        "fct-type": "function",
        "title": "runCC"
      },
      "index": {
        "description": "Executes CC computation yielding resulting value",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "runCC",
        "normalized": "(a b CC c d)-\u003ed",
        "package": "CC-delcont",
        "partial": "CC",
        "signature": "(forall ans. CC ans a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:runCCT",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a CCT computation, yielding a value in the underlying monad\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "(forall ans.  CCT ans m a) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#runCCT",
        "fct-type": "function",
        "title": "runCCT"
      },
      "index": {
        "description": "Executes CCT computation yielding value in the underlying monad",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "runCCT",
        "normalized": "(a b CCT c d e)-\u003ed e",
        "package": "CC-delcont",
        "partial": "CCT",
        "signature": "(forall ans. CCT ans m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:shift",
      "description": {
        "fct-descr": "\u003cp\u003eThe traditional \u003cem\u003eshift\u003c/em\u003e counterpart to the above \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e. Reifies the\n subcontinuation into a function, keeping both the subcontinuation, and\n the resulting computation delimited by the given prompt.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p b -\u003e ((m a -\u003e m b) -\u003e m b) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "The traditional shift counterpart to the above reset Reifies the subcontinuation into function keeping both the subcontinuation and the resulting computation delimited by the given prompt",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "shift",
        "normalized": "a b-\u003e((c d-\u003ec b)-\u003ec b)-\u003ec d",
        "package": "CC-delcont",
        "partial": "",
        "signature": "p b-\u003e((m a-\u003em b)-\u003em b)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:shift0",
      "description": {
        "fct-descr": "\u003cp\u003eAbortively captures the current subcontinuation, delimiting it in a reified\n function. The resulting computation, however, is undelimited.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p b -\u003e ((m a -\u003e m b) -\u003e m b) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#shift0",
        "fct-type": "function",
        "title": "shift0"
      },
      "index": {
        "description": "Abortively captures the current subcontinuation delimiting it in reified function The resulting computation however is undelimited",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "shift0",
        "normalized": "a b-\u003e((c d-\u003ec b)-\u003ec b)-\u003ec d",
        "package": "CC-delcont",
        "partial": "",
        "signature": "p b-\u003e((m a-\u003em b)-\u003em b)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont/docs/Control-Monad-CC.html#v:withSubCont",
      "description": {
        "fct-descr": "\u003cp\u003eAbortively capture the sub-continuation delimited by the given\n prompt, and call the given function with it. The prompt does not appear\n delimiting the sub-continuation, nor the resulting computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC",
        "fct-package": "CC-delcont",
        "fct-signature": "p b -\u003e (s a b -\u003e m b) -\u003e m a",
        "fct-source": "src/Control-Monad-CC.html#withSubCont",
        "fct-type": "method",
        "title": "withSubCont"
      },
      "index": {
        "description": "Abortively capture the sub-continuation delimited by the given prompt and call the given function with it The prompt does not appear delimiting the sub-continuation nor the resulting computation",
        "hierarchy": "Control Monad CC",
        "module": "Control.Monad.CC",
        "name": "withSubCont",
        "normalized": "a b-\u003e(c d b-\u003ee b)-\u003ee d",
        "package": "CC-delcont",
        "partial": "Sub Cont",
        "signature": "p b-\u003e(s a b-\u003em b)-\u003em a"
      }
    }
  }
]