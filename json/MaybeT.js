[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MaybeT/docs/Control-Monad-Maybe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e monad.  See\n\u003ca\u003ehttp://www.haskell.org/haskellwiki/New_monads/MaybeT\u003c/a\u003e for more widely-used\nversion.  Our \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance and our implementation of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e are\nborrowed from there.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations which may fail or return nothing.\n\u003c/dd\u003e\u003cdt\u003eBinding strategy:\u003c/dt\u003e\u003cdd\u003e Failure returns the value \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, bypassing any\nbound functions which follow.  Success returns a value wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Building computations from steps which may fail.  No error\ninformation is returned.  (If error information is required, see\n\u003ccode\u003eControl.Monad.Error\u003c/code\u003e.)\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Maybe",
        "fct-package": "MaybeT",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Maybe.html",
        "fct-type": "module",
        "title": "Maybe"
      },
      "index": {
        "description": "The MaybeT monad See http www.haskell.org haskellwiki New monads MaybeT for more widely-used version Our Functor instance and our implementation of are borrowed from there Computation type Computations which may fail or return nothing Binding strategy Failure returns the value Nothing bypassing any bound functions which follow Success returns value wrapped in Just Useful for Building computations from steps which may fail No error information is returned If error information is required see Control.Monad.Error",
        "hierarchy": "Control Monad Maybe",
        "module": "Control.Monad.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "MaybeT",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MaybeT/docs/Control-Monad-Maybe.html#t:MaybeT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer which adds Maybe semantics to an existing monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Maybe",
        "fct-package": "MaybeT",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Maybe.html#MaybeT",
        "fct-type": "newtype",
        "title": "MaybeT"
      },
      "index": {
        "description": "monad transformer which adds Maybe semantics to an existing monad",
        "hierarchy": "Control Monad Maybe",
        "module": "Control.Monad.Maybe",
        "name": "MaybeT",
        "normalized": "",
        "package": "MaybeT",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MaybeT/docs/Control-Monad-Maybe.html#v:MaybeT",
      "description": {
        "fct-module": "Control.Monad.Maybe",
        "fct-package": "MaybeT",
        "fct-signature": "MaybeT",
        "fct-source": "src/Control-Monad-Maybe.html#MaybeT",
        "fct-type": "function",
        "title": "MaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Maybe",
        "module": "Control.Monad.Maybe",
        "name": "MaybeT",
        "normalized": "",
        "package": "MaybeT",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MaybeT/docs/Control-Monad-Maybe.html#v:runMaybeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Maybe",
        "fct-package": "MaybeT",
        "fct-signature": "m (Maybe a)",
        "fct-source": "src/Control-Monad-Maybe.html#MaybeT",
        "fct-type": "function",
        "title": "runMaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Maybe",
        "module": "Control.Monad.Maybe",
        "name": "runMaybeT",
        "normalized": "",
        "package": "MaybeT",
        "partial": "Maybe",
        "signature": ""
      }
    }
  }
]