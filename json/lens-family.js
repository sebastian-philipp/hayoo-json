[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses allow you to use fields of the state of a state monad as if they were variables in an imperative language.\n \u003ccode\u003e\u003ca\u003euse\u003c/a\u003e\u003c/code\u003e is used to retrieve the value of a variable, and \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e%=\u003c/a\u003e\u003c/code\u003e allow you to set and modify a variable.\n C-style compound assignments are also provided.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2-State-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lenses allow you to use fields of the state of state monad as if they were variables in an imperative language use is used to retrieve the value of variable and and allow you to set and modify variable C-style compound assignments are also provided",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:FoldLike",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FoldLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "FoldLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Fold Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:LensLike",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "LensLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:LensLike-39-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "LensLike'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:MonadState",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "MonadState",
        "normalized": "",
        "package": "lens-family",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "Monoid",
        "normalized": "",
        "package": "lens-family",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:Setter",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "Setter",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:Setter-39-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "Setter'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:StateT",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "StateT",
        "normalized": "",
        "package": "lens-family",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:Writer",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Writer"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "Writer",
        "normalized": "",
        "package": "lens-family",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#t:Zooming",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Zooming"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "Zooming",
        "normalized": "",
        "package": "lens-family",
        "partial": "Zooming",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-124--124--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a Bool -\u003e Bool -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%7C%7C%3D",
        "fct-type": "function",
        "title": "(||=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(||=) ||=",
        "normalized": "Setter' a Bool-\u003eBool-\u003eb()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a Bool-\u003eBool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-37--37--61-",
      "description": {
        "fct-descr": "\u003cpre\u003e\n (%%=) :: MonadState a m =\u003e Lens a a b b' -\u003e (b -\u003e (c, b')) -\u003e m c\n\u003c/pre\u003e\u003cp\u003eModify a field of the state while returning another value.\n\u003c/p\u003e\u003cpre\u003e\n (%%=) :: (MonadState a m, Monoid c) =\u003e Traversal a a b b' -\u003e (b -\u003e (c, b')) -\u003e m c\n\u003c/pre\u003e\u003cp\u003eModify each field of the state and return the \u003ccode\u003emconcat\u003c/code\u003e of the other values.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "LensLike (Writer c) a a b b' -\u003e (b -\u003e (c, b')) -\u003e m c",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%25%25%3D",
        "fct-type": "function",
        "title": "(%%=)"
      },
      "index": {
        "description": "MonadState Lens Modify field of the state while returning another value MonadState Monoid Traversal Modify each field of the state and return the mconcat of the other values",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(%%=) %%=",
        "normalized": "LensLike(Writer a)b b c d-\u003e(c-\u003e(a,d))-\u003ee a",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike(Writer c)a a b b'-\u003e(b-\u003e(c,b'))-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eModify a field of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a b b' -\u003e (b -\u003e b') -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Modify field of the state",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(%=) %=",
        "normalized": "Setter a a b c-\u003e(b-\u003ec)-\u003ed()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a b b'-\u003e(b-\u003eb')-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-38--38--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a Bool -\u003e Bool -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%26%26%3D",
        "fct-type": "function",
        "title": "(&&=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(&&=) &&=",
        "normalized": "Setter' a Bool-\u003eBool-\u003eb()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a Bool-\u003eBool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-42--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%2A%3D",
        "fct-type": "function",
        "title": "(*=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(*=) *=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-43--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%2B%3D",
        "fct-type": "function",
        "title": "(+=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(+=) +=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-45--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#-%3D",
        "fct-type": "function",
        "title": "(-=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(-=) -=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-47--47--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%2F%2F%3D",
        "fct-type": "function",
        "title": "(//=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(//=) //=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:-60--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eMonoidally append a value to all referenced fields of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a o -\u003e o -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#%3C%3E%3D",
        "fct-type": "function",
        "title": "(\u003c\u003e=)"
      },
      "index": {
        "description": "Monoidally append value to all referenced fields of the state",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(\u003c\u003e=) \u003c\u003e=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a o-\u003eo-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a b b' -\u003e b' -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#.%3D",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Set field of the state",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "(.=) .=",
        "normalized": "Setter a a b c-\u003ec-\u003ed()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a b b'-\u003eb'-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:assign",
      "description": {
        "fct-descr": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a b b' -\u003e b' -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Lazy.html#assign",
        "fct-type": "function",
        "title": "assign"
      },
      "index": {
        "description": "Set field of the state",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "assign",
        "normalized": "Setter a a b c-\u003ec-\u003ed()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a b b'-\u003eb'-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:use",
      "description": {
        "fct-descr": "\u003cpre\u003e\n use :: MonadState a m =\u003e Getter a a' b b' -\u003e m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state\n\u003c/p\u003e\u003cpre\u003e\n use :: (Monoid b, MonadState a m) =\u003e Fold a a' b b' -\u003e m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a monoidal summary of all the referenced fields from the state\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "FoldLike b a a' b b' -\u003e m b",
        "fct-source": "src/Lens-Family2-State-Lazy.html#use",
        "fct-type": "function",
        "title": "use"
      },
      "index": {
        "description": "use MonadState Getter Retrieve field of the state use Monoid MonadState Fold Retrieve monoidal summary of all the referenced fields from the state",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "use",
        "normalized": "FoldLike a b c a d-\u003ee a",
        "package": "lens-family",
        "partial": "",
        "signature": "FoldLike b a a' b b'-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:uses",
      "description": {
        "fct-descr": "\u003cpre\u003e\n uses :: (MonadState a m, Monoid r) =\u003e Fold a a' b b' -\u003e (b -\u003e r) -\u003e m r\n\u003c/pre\u003e\u003cp\u003eRetrieve all the referenced fields from the state and foldMap the results together with \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n uses :: MonadState a m =\u003e Getter a a' b b' -\u003e (b -\u003e r) -\u003e m r\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state and pass it through the function \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003euses l f = f \u003ca\u003e$\u003c/a\u003e use l\u003c/pre\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "FoldLike r a a' b b' -\u003e (b -\u003e r) -\u003e m r",
        "fct-source": "src/Lens-Family2-State-Lazy.html#uses",
        "fct-type": "function",
        "title": "uses"
      },
      "index": {
        "description": "uses MonadState Monoid Fold Retrieve all the referenced fields from the state and foldMap the results together with uses MonadState Getter Retrieve field of the state and pass it through the function uses use",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "uses",
        "normalized": "FoldLike a b c d e-\u003e(d-\u003ea)-\u003ef a",
        "package": "lens-family",
        "partial": "",
        "signature": "FoldLike r a a' b b'-\u003e(b-\u003er)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Lazy.html#v:zoom",
      "description": {
        "fct-descr": "\u003cpre\u003e\n zoom :: Monad m =\u003e Lens' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eLift a stateful operation on a field to a stateful operation on the whole state.\n This is a good way to call a \"subroutine\" that only needs access to part of the state.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: (Monoid c, Moand m) =\u003e Traversal' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element of the traversal in turn and \u003ccode\u003emconcat\u003c/code\u003e all the results together.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: Monad m =\u003e Traversal' a b -\u003e StateT b m () -\u003e StateT a m ()\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element the traversal in turn.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Lazy",
        "fct-package": "lens-family",
        "fct-signature": "LensLike' (Zooming m c) a b -\u003e StateT b m c -\u003e StateT a m c",
        "fct-type": "function",
        "title": "zoom"
      },
      "index": {
        "description": "zoom Monad Lens StateT StateT Lift stateful operation on field to stateful operation on the whole state This is good way to call subroutine that only needs access to part of the state zoom Monoid Moand Traversal StateT StateT Run the subroutine on each element of the traversal in turn and mconcat all the results together zoom Monad Traversal StateT StateT Run the subroutine on each element the traversal in turn",
        "hierarchy": "Lens Family2 State Lazy",
        "module": "Lens.Family2.State.Lazy",
        "name": "zoom",
        "normalized": "LensLike'(Zooming a b)c d-\u003eStateT d a b-\u003eStateT c a b",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike'(Zooming m c)a b-\u003eStateT b m c-\u003eStateT a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLenses allow you to use fields of the state of a state monad as if they were variables in an imperative language.\n \u003ccode\u003e\u003ca\u003euse\u003c/a\u003e\u003c/code\u003e is used to retrieve the value of a variable, and \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e%=\u003c/a\u003e\u003c/code\u003e allow you to set and modify a variable.\n C-style compound assignments are also provided.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2-State-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Lenses allow you to use fields of the state of state monad as if they were variables in an imperative language use is used to retrieve the value of variable and and allow you to set and modify variable C-style compound assignments are also provided",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "lens-family",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:FoldLike",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FoldLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "FoldLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Fold Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:LensLike",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "LensLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:LensLike-39-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "LensLike'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:MonadState",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "MonadState",
        "normalized": "",
        "package": "lens-family",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "Monoid",
        "normalized": "",
        "package": "lens-family",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:Setter",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "Setter",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:Setter-39-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "Setter'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:StateT",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "StateT",
        "normalized": "",
        "package": "lens-family",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:Writer",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Writer"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "Writer",
        "normalized": "",
        "package": "lens-family",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#t:Zooming",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Zooming"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "Zooming",
        "normalized": "",
        "package": "lens-family",
        "partial": "Zooming",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-124--124--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a Bool -\u003e Bool -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%7C%7C%3D",
        "fct-type": "function",
        "title": "(||=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(||=) ||=",
        "normalized": "Setter' a Bool-\u003eBool-\u003eb()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a Bool-\u003eBool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-37--37--61-",
      "description": {
        "fct-descr": "\u003cpre\u003e\n (%%=) :: MonadState a m =\u003e Lens a a b b' -\u003e (b -\u003e (c, b')) -\u003e m c\n\u003c/pre\u003e\u003cp\u003eModify a field of the state while returning another value.\n\u003c/p\u003e\u003cpre\u003e\n (%%=) :: (MonadState a m, Monoid c) =\u003e Traversal a a b b' -\u003e (b -\u003e (c, b')) -\u003e m c\n\u003c/pre\u003e\u003cp\u003eModify each field of the state and return the \u003ccode\u003emconcat\u003c/code\u003e of the other values.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "LensLike (Writer c) a a b b' -\u003e (b -\u003e (c, b')) -\u003e m c",
        "fct-source": "src/Lens-Family2-State-Strict.html#%25%25%3D",
        "fct-type": "function",
        "title": "(%%=)"
      },
      "index": {
        "description": "MonadState Lens Modify field of the state while returning another value MonadState Monoid Traversal Modify each field of the state and return the mconcat of the other values",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(%%=) %%=",
        "normalized": "LensLike(Writer a)b b c d-\u003e(c-\u003e(a,d))-\u003ee a",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike(Writer c)a a b b'-\u003e(b-\u003e(c,b'))-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-37--61-",
      "description": {
        "fct-descr": "\u003cp\u003eModify a field of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a b b' -\u003e (b -\u003e b') -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%25%3D",
        "fct-type": "function",
        "title": "(%=)"
      },
      "index": {
        "description": "Modify field of the state",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(%=) %=",
        "normalized": "Setter a a b c-\u003e(b-\u003ec)-\u003ed()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a b b'-\u003e(b-\u003eb')-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-38--38--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a Bool -\u003e Bool -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%26%26%3D",
        "fct-type": "function",
        "title": "(&&=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(&&=) &&=",
        "normalized": "Setter' a Bool-\u003eBool-\u003eb()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a Bool-\u003eBool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-42--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%2A%3D",
        "fct-type": "function",
        "title": "(*=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(*=) *=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-43--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%2B%3D",
        "fct-type": "function",
        "title": "(+=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(+=) +=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-45--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#-%3D",
        "fct-type": "function",
        "title": "(-=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(-=) -=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-47--47--61-",
      "description": {
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%2F%2F%3D",
        "fct-type": "function",
        "title": "(//=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(//=) //=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:-60--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eMonoidally append a value to all referenced fields of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a o -\u003e o -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#%3C%3E%3D",
        "fct-type": "function",
        "title": "(\u003c\u003e=)"
      },
      "index": {
        "description": "Monoidally append value to all referenced fields of the state",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(\u003c\u003e=) \u003c\u003e=",
        "normalized": "Setter' a b-\u003eb-\u003ec()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a o-\u003eo-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a b b' -\u003e b' -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#.%3D",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Set field of the state",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "(.=) .=",
        "normalized": "Setter a a b c-\u003ec-\u003ed()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a b b'-\u003eb'-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:assign",
      "description": {
        "fct-descr": "\u003cp\u003eSet a field of the state.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a b b' -\u003e b' -\u003e m ()",
        "fct-source": "src/Lens-Family2-State-Strict.html#assign",
        "fct-type": "function",
        "title": "assign"
      },
      "index": {
        "description": "Set field of the state",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "assign",
        "normalized": "Setter a a b c-\u003ec-\u003ed()",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a b b'-\u003eb'-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:use",
      "description": {
        "fct-descr": "\u003cpre\u003e\n use :: MonadState a m =\u003e Getter a a' b b' -\u003e m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state\n\u003c/p\u003e\u003cpre\u003e\n use :: (Monoid b, MonadState a m) =\u003e Fold a a' b b' -\u003e m b\n\u003c/pre\u003e\u003cp\u003eRetrieve a monoidal summary of all the referenced fields from the state\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "FoldLike b a a' b b' -\u003e m b",
        "fct-source": "src/Lens-Family2-State-Strict.html#use",
        "fct-type": "function",
        "title": "use"
      },
      "index": {
        "description": "use MonadState Getter Retrieve field of the state use Monoid MonadState Fold Retrieve monoidal summary of all the referenced fields from the state",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "use",
        "normalized": "FoldLike a b c a d-\u003ee a",
        "package": "lens-family",
        "partial": "",
        "signature": "FoldLike b a a' b b'-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:uses",
      "description": {
        "fct-descr": "\u003cpre\u003e\n uses :: (MonadState a m, Monoid r) =\u003e Fold a a' b b' -\u003e (b -\u003e r) -\u003e m r\n\u003c/pre\u003e\u003cp\u003eRetrieve all the referenced fields from the state and foldMap the results together with \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n uses :: MonadState a m =\u003e Getter a a' b b' -\u003e (b -\u003e r) -\u003e m r\n\u003c/pre\u003e\u003cp\u003eRetrieve a field of the state and pass it through the function \u003ccode\u003ef :: b -\u003e r\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003euses l f = f \u003ca\u003e$\u003c/a\u003e use l\u003c/pre\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "FoldLike r a a' b b' -\u003e (b -\u003e r) -\u003e m r",
        "fct-source": "src/Lens-Family2-State-Strict.html#uses",
        "fct-type": "function",
        "title": "uses"
      },
      "index": {
        "description": "uses MonadState Monoid Fold Retrieve all the referenced fields from the state and foldMap the results together with uses MonadState Getter Retrieve field of the state and pass it through the function uses use",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "uses",
        "normalized": "FoldLike a b c d e-\u003e(d-\u003ea)-\u003ef a",
        "package": "lens-family",
        "partial": "",
        "signature": "FoldLike r a a' b b'-\u003e(b-\u003er)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State-Strict.html#v:zoom",
      "description": {
        "fct-descr": "\u003cpre\u003e\n zoom :: Monad m =\u003e Lens' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eLift a stateful operation on a field to a stateful operation on the whole state.\n This is a good way to call a \"subroutine\" that only needs access to part of the state.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: (Monoid c, Moand m) =\u003e Traversal' a b -\u003e StateT b m c -\u003e StateT a m c\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element of the traversal in turn and \u003ccode\u003emconcat\u003c/code\u003e all the results together.\n\u003c/p\u003e\u003cpre\u003e\n zoom :: Monad m =\u003e Traversal' a b -\u003e StateT b m () -\u003e StateT a m ()\n\u003c/pre\u003e\u003cp\u003eRun the \"subroutine\" on each element the traversal in turn.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.State.Strict",
        "fct-package": "lens-family",
        "fct-signature": "LensLike' (Zooming m c) a b -\u003e StateT b m c -\u003e StateT a m c",
        "fct-type": "function",
        "title": "zoom"
      },
      "index": {
        "description": "zoom Monad Lens StateT StateT Lift stateful operation on field to stateful operation on the whole state This is good way to call subroutine that only needs access to part of the state zoom Monoid Moand Traversal StateT StateT Run the subroutine on each element of the traversal in turn and mconcat all the results together zoom Monad Traversal StateT StateT Run the subroutine on each element the traversal in turn",
        "hierarchy": "Lens Family2 State Strict",
        "module": "Lens.Family2.State.Strict",
        "name": "zoom",
        "normalized": "LensLike'(Zooming a b)c d-\u003eStateT d a b-\u003eStateT c a b",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike'(Zooming m c)a b-\u003eStateT b m c-\u003eStateT a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-State.html#",
      "description": {
        "fct-module": "Lens.Family2.State",
        "fct-package": "lens-family",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 State",
        "module": "Lens.Family2.State",
        "name": "State",
        "normalized": "",
        "package": "lens-family",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains lenses and traversals for common structures in Haskell.\n It also contains the combinators for lenses and traversals.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2-Stock.html",
        "fct-type": "module",
        "title": "Stock"
      },
      "index": {
        "description": "This module contains lenses and traversals for common structures in Haskell It also contains the combinators for lenses and traversals",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "Stock",
        "normalized": "",
        "package": "lens-family",
        "partial": "Stock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:AlongsideLeft",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AlongsideLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "AlongsideLeft",
        "normalized": "",
        "package": "lens-family",
        "partial": "Alongside Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:AlongsideRight",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AlongsideRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "AlongsideRight",
        "normalized": "",
        "package": "lens-family",
        "partial": "Alongside Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:Applicative",
      "description": {
        "fct-descr": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Applicative"
      },
      "index": {
        "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "Applicative",
        "normalized": "",
        "package": "lens-family",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:Lens",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Lens",
        "fct-type": "type",
        "title": "Lens"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "Lens",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:Lens-39-",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Lens%27",
        "fct-type": "type",
        "title": "Lens'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "Lens'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:LensLike",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "LensLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:LensLike-39-",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "LensLike'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:Traversal",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Traversal",
        "fct-type": "type",
        "title": "Traversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "Traversal",
        "normalized": "",
        "package": "lens-family",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#t:Traversal-39-",
      "description": {
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Traversal%27",
        "fct-type": "type",
        "title": "Traversal'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "Traversal'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Traversal'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:_1",
      "description": {
        "fct-descr": "\u003cp\u003eLens on the first element of a pair.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Lens (a, b) (a', b) a a'",
        "fct-source": "src/Lens-Family2-Stock.html#_1",
        "fct-type": "function",
        "title": "_1"
      },
      "index": {
        "description": "Lens on the first element of pair",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "_1",
        "normalized": "Lens(a,b)(c,b)a c",
        "package": "lens-family",
        "partial": "",
        "signature": "Lens(a,b)(a',b)a a'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:_2",
      "description": {
        "fct-descr": "\u003cp\u003eLens on the second element of a pair.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Lens (a, b) (a, b') b b'",
        "fct-source": "src/Lens-Family2-Stock.html#_2",
        "fct-type": "function",
        "title": "_2"
      },
      "index": {
        "description": "Lens on the second element of pair",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "_2",
        "normalized": "Lens(a,b)(a,c)b c",
        "package": "lens-family",
        "partial": "",
        "signature": "Lens(a,b)(a,b')b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:_Just",
      "description": {
        "fct-descr": "\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e element of a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Traversal (Maybe a) (Maybe a') a a'",
        "fct-source": "src/Lens-Family2-Stock.html#_Just",
        "fct-type": "function",
        "title": "_Just"
      },
      "index": {
        "description": "Traversal on the Just element of Maybe",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "_Just",
        "normalized": "",
        "package": "lens-family",
        "partial": "Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:_Left",
      "description": {
        "fct-descr": "\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e element of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Traversal (Either a b) (Either a' b) a a'",
        "fct-source": "src/Lens-Family2-Stock.html#_Left",
        "fct-type": "function",
        "title": "_Left"
      },
      "index": {
        "description": "Traversal on the Left element of an Either",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "_Left",
        "normalized": "",
        "package": "lens-family",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:_Nothing",
      "description": {
        "fct-descr": "\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e element of a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Traversal' (Maybe a) ()",
        "fct-source": "src/Lens-Family2-Stock.html#_Nothing",
        "fct-type": "function",
        "title": "_Nothing"
      },
      "index": {
        "description": "Traversal on the Nothing element of Maybe",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "_Nothing",
        "normalized": "Traversal'(Maybe a)()",
        "package": "lens-family",
        "partial": "Nothing",
        "signature": "Traversal'(Maybe a)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:_Right",
      "description": {
        "fct-descr": "\u003cp\u003eTraversal on the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e element of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Traversal (Either a b) (Either a b') b b'",
        "fct-source": "src/Lens-Family2-Stock.html#_Right",
        "fct-type": "function",
        "title": "_Right"
      },
      "index": {
        "description": "Traversal on the Right element of an Either",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "_Right",
        "normalized": "",
        "package": "lens-family",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:alongside",
      "description": {
        "fct-descr": "\u003cpre\u003e\n alongside :: Lens a1 a1' b1 b1' -\u003e Lens a2 a2' b2 b2' -\u003e Lens (a1, a2) (a1', a2') (b1, b2) (b1', b2')\n\u003c/pre\u003e\u003cpre\u003e\n alongside :: Getter a1 a1' b1 b1' -\u003e Getter a2 a2' b2 b2' -\u003e Getter (a1, a2) (a1', a2') (b1, b2) (b1', b2')\n\u003c/pre\u003e\u003cp\u003eGiven two lens/getter families, make a new lens/getter on their product.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "LensLike (AlongsideLeft f b2') a1 a1' b1 b1' -\u003e LensLike (AlongsideRight f a1') a2 a2' b2 b2' -\u003e LensLike f (a1, a2) (a1', a2') (b1, b2) (b1', b2')",
        "fct-type": "function",
        "title": "alongside"
      },
      "index": {
        "description": "alongside Lens a1 a1 b1 b1 Lens a2 a2 b2 b2 Lens a1 a2 a1 a2 b1 b2 b1 b2 alongside Getter a1 a1 b1 b1 Getter a2 a2 b2 b2 Getter a1 a2 a1 a2 b1 b2 b1 b2 Given two lens getter families make new lens getter on their product",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "alongside",
        "normalized": "LensLike(AlongsideLeft a b)c c b b-\u003eLensLike(AlongsideRight a c)c c b b-\u003eLensLike a(c,c)(c,c)(b,b)(b,b)",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike(AlongsideLeft f b)a a b b-\u003eLensLike(AlongsideRight f a)a a b b-\u003eLensLike f(a,a)(a,a)(b,b)(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "k -\u003e Lens' (Map k v) (Maybe v)",
        "fct-source": "src/Lens-Family2-Stock.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "Lens on given point of Map",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "at",
        "normalized": "a-\u003eLens'(Map a b)(Maybe b)",
        "package": "lens-family",
        "partial": "",
        "signature": "k-\u003eLens'(Map k v)(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:beside",
      "description": {
        "fct-descr": "\u003cpre\u003e\n beside :: Traversal a a' c c' -\u003e Traversal b' b' c c' -\u003e Traversal (a,b) (a',b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n beside :: Fold a a' c c' -\u003e Fold b' b' c c' -\u003e Fold (a,b) (a',b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n beside :: Setter a a' c c' -\u003e Setter b' b' c c' -\u003e Setter (a,b) (a',b') c c'\n\u003c/pre\u003e\u003cp\u003eGiven two traversals/folds/setters referencing a type \u003ccode\u003ec\u003c/code\u003e, create a traversal/fold/setter on the pair referencing \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "LensLike f a a' c c' -\u003e LensLike f b b' c c' -\u003e LensLike f (a, b) (a', b') c c'",
        "fct-type": "function",
        "title": "beside"
      },
      "index": {
        "description": "beside Traversal Traversal Traversal beside Fold Fold Fold beside Setter Setter Setter Given two traversals folds setters referencing type create traversal fold setter on the pair referencing",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "beside",
        "normalized": "LensLike a b c d e-\u003eLensLike a f g d e-\u003eLensLike a(b,f)(c,g)d e",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike f a a' c c'-\u003eLensLike f b b' c c'-\u003eLensLike f(a,b)(a',b')c c'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:both",
      "description": {
        "fct-descr": "\u003cp\u003eTraversals on both elements of a pair \u003ccode\u003e(a,a)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Traversal (a, a) (b, b) a b",
        "fct-source": "src/Lens-Family2-Stock.html#both",
        "fct-type": "function",
        "title": "both"
      },
      "index": {
        "description": "Traversals on both elements of pair",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "both",
        "normalized": "Traversal(a,a)(b,b)a b",
        "package": "lens-family",
        "partial": "",
        "signature": "Traversal(a,a)(b,b)a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:choosing",
      "description": {
        "fct-descr": "\u003cpre\u003e\n choosing :: Lens a a' c c' -\u003e Lens b b' c c' -\u003e Lens (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Traversal a a' c c' -\u003e Traversal b b' c c' -\u003e Traversal (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Getter a a' c c' -\u003e Getter b b' c c' -\u003e Getter (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Fold a a' c c' -\u003e Fold b b' c c' -\u003e Fold (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cpre\u003e\n choosing :: Setter a a' c c' -\u003e Setter b b' c c' -\u003e Setter (Either a b) (Either a' b') c c'\n\u003c/pre\u003e\u003cp\u003eGiven two lens/traversal/getter/fold/setter families with the same substructure, make a new lens/traversal/getter/fold/setter on \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "LensLike f a a' c c' -\u003e LensLike f b b' c c' -\u003e LensLike f (Either a b) (Either a' b') c c'",
        "fct-type": "function",
        "title": "choosing"
      },
      "index": {
        "description": "choosing Lens Lens Lens Either Either choosing Traversal Traversal Traversal Either Either choosing Getter Getter Getter Either Either choosing Fold Fold Fold Either Either choosing Setter Setter Setter Either Either Given two lens traversal getter fold setter families with the same substructure make new lens traversal getter fold setter on Either",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "choosing",
        "normalized": "LensLike a b c d e-\u003eLensLike a f g d e-\u003eLensLike a(Either b f)(Either c g)d e",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike f a a' c c'-\u003eLensLike f b b' c c'-\u003eLensLike f(Either a b)(Either a' b')c c'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:chosen",
      "description": {
        "fct-descr": "\u003cp\u003eLens on the Left or Right element of an (\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a a).\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Lens (Either a a) (Either b b) a b",
        "fct-source": "src/Lens-Family2-Stock.html#chosen",
        "fct-type": "function",
        "title": "chosen"
      },
      "index": {
        "description": "Lens on the Left or Right element of an Either",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "chosen",
        "normalized": "",
        "package": "lens-family",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "k -\u003e Lens' (Set k) Bool",
        "fct-source": "src/Lens-Family2-Stock.html#contains",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "Lens on given point of Set",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "contains",
        "normalized": "a-\u003eLens'(Set a)Bool",
        "package": "lens-family",
        "partial": "",
        "signature": "k-\u003eLens'(Set k)Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:ignored",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty traveral on any type.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Traversal a a b b'",
        "fct-source": "src/Lens-Family2-Stock.html#ignored",
        "fct-type": "function",
        "title": "ignored"
      },
      "index": {
        "description": "The empty traveral on any type",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "ignored",
        "normalized": "",
        "package": "lens-family",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:intAt",
      "description": {
        "fct-descr": "\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Int -\u003e Lens' (IntMap v) (Maybe v)",
        "fct-source": "src/Lens-Family2-Stock.html#intAt",
        "fct-type": "function",
        "title": "intAt"
      },
      "index": {
        "description": "Lens on given point of IntMap",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "intAt",
        "normalized": "Int-\u003eLens'(IntMap a)(Maybe a)",
        "package": "lens-family",
        "partial": "At",
        "signature": "Int-\u003eLens'(IntMap v)(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:intContains",
      "description": {
        "fct-descr": "\u003cp\u003eLens on a given point of a \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "Int -\u003e Lens' IntSet Bool",
        "fct-source": "src/Lens-Family2-Stock.html#intContains",
        "fct-type": "function",
        "title": "intContains"
      },
      "index": {
        "description": "Lens on given point of IntSet",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "intContains",
        "normalized": "Int-\u003eLens' IntSet Bool",
        "package": "lens-family",
        "partial": "Contains",
        "signature": "Int-\u003eLens' IntSet Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Stock.html#v:ix",
      "description": {
        "fct-descr": "\u003cp\u003eLens on a given point of a function.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Stock",
        "fct-package": "lens-family",
        "fct-signature": "k -\u003e Lens' (k -\u003e v) v",
        "fct-source": "src/Lens-Family2-Stock.html#ix",
        "fct-type": "function",
        "title": "ix"
      },
      "index": {
        "description": "Lens on given point of function",
        "hierarchy": "Lens Family2 Stock",
        "module": "Lens.Family2.Stock",
        "name": "ix",
        "normalized": "a-\u003eLens'(a-\u003eb)b",
        "package": "lens-family",
        "partial": "",
        "signature": "k-\u003eLens'(k-\u003ev)v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: Improper use of this module can lead to unexpected behaviour if the preconditions of the functions are not met.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2-Unchecked.html",
        "fct-type": "module",
        "title": "Unchecked"
      },
      "index": {
        "description": "Caution Improper use of this module can lead to unexpected behaviour if the preconditions of the functions are not met",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Unchecked",
        "normalized": "",
        "package": "lens-family",
        "partial": "Unchecked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Applicative",
      "description": {
        "fct-descr": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Applicative"
      },
      "index": {
        "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Applicative",
        "normalized": "",
        "package": "lens-family",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Lens",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Lens",
        "fct-type": "type",
        "title": "Lens"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Lens",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Lens-39-",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Lens%27",
        "fct-type": "type",
        "title": "Lens'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Lens'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:LensLike",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "LensLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:LensLike-39-",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "LensLike'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Setter",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Setter",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Setter-39-",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Setter'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Setting",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Setting"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Setting",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Traversal",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Traversal",
        "fct-type": "type",
        "title": "Traversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Traversal",
        "normalized": "",
        "package": "lens-family",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#t:Traversal-39-",
      "description": {
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Traversal%27",
        "fct-type": "type",
        "title": "Traversal'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "Traversal'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Traversal'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a lens from isomorphism families.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: In order for the generated lens family to be well-defined, you must ensure that the two isomorphism laws hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eyin . yang === id\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eyang . yin === id\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "(a -\u003e b)-\u003e (b' -\u003e a')-\u003e Lens a a' b b'",
        "fct-type": "function",
        "title": "iso"
      },
      "index": {
        "description": "Build lens from isomorphism families Caution In order for the generated lens family to be well-defined you must ensure that the two isomorphism laws hold yin yang id yang yin id",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "iso",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eLens a d b c",
        "package": "lens-family",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b'-\u003ea')-\u003eLens a a' b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a lens from a \u003ccode\u003egetter\u003c/code\u003e and \u003ccode\u003esetter\u003c/code\u003e families.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: In order for the generated lens family to be well-defined, you must ensure that the three lens laws hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003egetter (setter a b) === b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esetter a (getter a) === a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esetter (setter a b1) b2) === setter a b2\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "(a -\u003e b)-\u003e (a -\u003e b' -\u003e a')-\u003e Lens a a' b b'",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "Build lens from getter and setter families Caution In order for the generated lens family to be well-defined you must ensure that the three lens laws hold getter setter setter getter setter setter b1 b2 setter b2",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "lens",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec-\u003ed)-\u003eLens a d b c",
        "package": "lens-family",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a-\u003eb'-\u003ea')-\u003eLens a a' b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2-Unchecked.html#v:setting",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esetting\u003c/a\u003e\u003c/code\u003e promotes a \"semantic editor combinator\" to a modify-only lens.\n To demote a lens to a semantic edit combinator, use the section \u003ccode\u003e(l %~)\u003c/code\u003e or \u003ccode\u003esec l\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esetting map . fstL %~ length $ [(\"The\",0),(\"quick\",1),(\"brown\",1),(\"fox\",2)]\n\u003c/code\u003e\u003c/strong\u003e[(3,0),(5,1),(5,1),(3,2)]\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eCaution\u003c/em\u003e: In order for the generated setter family to be well-defined, you must ensure that the two functors laws hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003esec id === id\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003esec f . sec g === sec (f . g)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Lens.Family2.Unchecked",
        "fct-package": "lens-family",
        "fct-signature": "((b -\u003e b') -\u003e a -\u003e a')-\u003e Setter a a' b b'",
        "fct-type": "function",
        "title": "setting"
      },
      "index": {
        "description": "setting promotes semantic editor combinator to modify-only lens To demote lens to semantic edit combinator use the section or sec setting map fstL length The quick brown fox Caution In order for the generated setter family to be well-defined you must ensure that the two functors laws hold sec id id sec sec sec",
        "hierarchy": "Lens Family2 Unchecked",
        "module": "Lens.Family2.Unchecked",
        "name": "setting",
        "normalized": "((a-\u003eb)-\u003ec-\u003ed)-\u003eSetter c d a b",
        "package": "lens-family",
        "partial": "",
        "signature": "((b-\u003eb')-\u003ea-\u003ea')-\u003eSetter a a' b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main module for end-users of lens-families.\n If you are not building your own lenses or traversals, but just using functional references made by others, this is the only module you need.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "module",
        "fct-source": "src/Lens-Family2.html",
        "fct-type": "module",
        "title": "Family2"
      },
      "index": {
        "description": "This is the main module for end-users of lens-families If you are not building your own lenses or traversals but just using functional references made by others this is the only module you need",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Family2",
        "normalized": "",
        "package": "lens-family",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Applicative",
      "description": {
        "fct-descr": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Applicative"
      },
      "index": {
        "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Applicative",
        "normalized": "",
        "package": "lens-family",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Backwards",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Backwards"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Backwards",
        "normalized": "",
        "package": "lens-family",
        "partial": "Backwards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Fold",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2.html#Fold",
        "fct-type": "type",
        "title": "Fold"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Fold",
        "normalized": "",
        "package": "lens-family",
        "partial": "Fold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Fold-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2.html#Fold%27",
        "fct-type": "type",
        "title": "Fold'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Fold'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Fold'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:FoldLike",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FoldLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "FoldLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Fold Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:FoldLike-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FoldLike'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "FoldLike'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Fold Like'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Foldable",
      "description": {
        "fct-descr": "\u003cp\u003eData structures that can be folded.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldMap f Empty = mempty\n    foldMap f (Leaf x) = f x\n    foldMap f (Node l k r) = foldMap f l `mappend` f k `mappend` foldMap f r\n\u003c/pre\u003e\u003cp\u003eThis is suitable even for abstract types, as the monoid is assumed\n to satisfy the monoid laws.  Alternatively, one could define \u003ccode\u003efoldr\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance Foldable Tree where\n    foldr f z Empty = z\n    foldr f z (Leaf x) = f x z\n    foldr f z (Node l k r) = foldr f (f k (foldr f z r)) l\n\u003c/pre\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Foldable"
      },
      "index": {
        "description": "Data structures that can be folded Minimal complete definition foldMap or foldr For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Foldable Tree where foldMap Empty mempty foldMap Leaf foldMap Node foldMap mappend mappend foldMap This is suitable even for abstract types as the monoid is assumed to satisfy the monoid laws Alternatively one could define foldr instance Foldable Tree where foldr Empty foldr Leaf foldr Node foldr foldr",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Foldable",
        "normalized": "",
        "package": "lens-family",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Getter",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2.html#Getter",
        "fct-type": "type",
        "title": "Getter"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Getter",
        "normalized": "",
        "package": "lens-family",
        "partial": "Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Getter-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2.html#Getter%27",
        "fct-type": "type",
        "title": "Getter'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Getter'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Getter'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Getting",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Getting"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Getting",
        "normalized": "",
        "package": "lens-family",
        "partial": "Getting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Lens",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Lens",
        "fct-type": "type",
        "title": "Lens"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Lens",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Lens-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Lens%27",
        "fct-type": "type",
        "title": "Lens'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Lens'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:LensLike",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "LensLike",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:LensLike-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "LensLike'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "LensLike'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Lens Like'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Monoid",
        "normalized": "",
        "package": "lens-family",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Phantom",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Phantom"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Phantom",
        "normalized": "",
        "package": "lens-family",
        "partial": "Phantom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Setter",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Setter",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Setter-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Setter'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Setter'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setter'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Setting",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Setting"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Setting",
        "normalized": "",
        "package": "lens-family",
        "partial": "Setting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Traversal",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Traversal",
        "fct-type": "type",
        "title": "Traversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Traversal",
        "normalized": "",
        "package": "lens-family",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#t:Traversal-39-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "type",
        "fct-source": "src/Lens-Family2-Unchecked.html#Traversal%27",
        "fct-type": "type",
        "title": "Traversal'"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "Traversal'",
        "normalized": "",
        "package": "lens-family",
        "partial": "Traversal'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-124--124--126-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a Bool -\u003e Bool -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(||~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(||~) ||~",
        "normalized": "Setter' a Bool-\u003eBool-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a Bool-\u003eBool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-37--126-",
      "description": {
        "fct-descr": "\u003cp\u003eModify all referenced fields.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a' b b' -\u003e (b -\u003e b') -\u003e a -\u003e a'",
        "fct-type": "function",
        "title": "(%~)"
      },
      "index": {
        "description": "Modify all referenced fields",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(%~) %~",
        "normalized": "Setter a b c d-\u003e(c-\u003ed)-\u003ea-\u003eb",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a' b b'-\u003e(b-\u003eb')-\u003ea-\u003ea'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eA flipped version of \u003ccode\u003e($)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "a -\u003e (a -\u003e b) -\u003e b",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "flipped version of",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(&) &",
        "normalized": "a-\u003e(a-\u003eb)-\u003eb",
        "package": "lens-family",
        "partial": "",
        "signature": "a-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-38--38--126-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a Bool -\u003e Bool -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(&&~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(&&~) &&~",
        "normalized": "Setter' a Bool-\u003eBool-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a Bool-\u003eBool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-42--126-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(*~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(*~) *~",
        "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-43--126-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(+~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(+~) +~",
        "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-45--126-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(-~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(-~) -~",
        "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-47--47--126-",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a b -\u003e b -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(//~)"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(//~) //~",
        "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-60--62--126-",
      "description": {
        "fct-descr": "\u003cp\u003eMonoidally append a value to all referenced fields.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter' a o -\u003e o -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(\u003c\u003e~)"
      },
      "index": {
        "description": "Monoidally append value to all referenced fields",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(\u003c\u003e~) \u003c\u003e~",
        "normalized": "Setter' a b-\u003eb-\u003ea-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter' a o-\u003eo-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-94--63-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the first referenced value.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no referenced values.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "a -\u003e Fold a a' b b' -\u003e Maybe b",
        "fct-source": "src/Lens-Family2.html#%5E%3F",
        "fct-type": "function",
        "title": "(^?)"
      },
      "index": {
        "description": "Returns Just the first referenced value Returns Nothing if there are no referenced values",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(^?) ^?",
        "normalized": "a-\u003eFold a b c d-\u003eMaybe c",
        "package": "lens-family",
        "partial": "",
        "signature": "a-\u003eFold a a' b b'-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-94-.",
      "description": {
        "fct-descr": "\u003cpre\u003e\n (^.) :: a -\u003e Getter a a' b b' -\u003e b\n\u003c/pre\u003e\u003cp\u003eAccess the value referenced by a getter or lens.\n\u003c/p\u003e\u003cpre\u003e\n (^.) :: Monoid b =\u003e a -\u003e Fold a a' b b' -\u003e b\n\u003c/pre\u003e\u003cp\u003eAccess the monoidal summary referenced by a getter or lens.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "a -\u003e FoldLike b a a' b b' -\u003e b",
        "fct-type": "function",
        "title": "(^.)"
      },
      "index": {
        "description": "Getter Access the value referenced by getter or lens Monoid Fold Access the monoidal summary referenced by getter or lens",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(^.) ^.",
        "normalized": "a-\u003eFoldLike b a c b d-\u003eb",
        "package": "lens-family",
        "partial": "",
        "signature": "a-\u003eFoldLike b a a' b b'-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:-94-..",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all of the referenced values in order.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "a -\u003e Fold a a' b b' -\u003e [b]",
        "fct-source": "src/Lens-Family2.html#%5E..",
        "fct-type": "function",
        "title": "(^..)"
      },
      "index": {
        "description": "Returns list of all of the referenced values in order",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(^..) ^..",
        "normalized": "a-\u003eFold a b c d-\u003e[c]",
        "package": "lens-family",
        "partial": "",
        "signature": "a-\u003eFold a a' b b'-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:.-126-",
      "description": {
        "fct-descr": "\u003cp\u003eSet all referenced fields to the given value.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a' b b' -\u003e b' -\u003e a -\u003e a'",
        "fct-type": "function",
        "title": "(.~)"
      },
      "index": {
        "description": "Set all referenced fields to the given value",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "(.~) .~",
        "normalized": "Setter a b c d-\u003ed-\u003ea-\u003eb",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a' b b'-\u003eb'-\u003ea-\u003ea'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:allOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if all of the referenced values satisfy the given predicate.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
        "fct-source": "src/Lens-Family2.html#allOf",
        "fct-type": "function",
        "title": "allOf"
      },
      "index": {
        "description": "Returns true if all of the referenced values satisfy the given predicate",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "allOf",
        "normalized": "Fold a b c d-\u003e(c-\u003eBool)-\u003ea-\u003eBool",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003e(b-\u003eBool)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:anyOf",
      "description": {
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e (b -\u003e Bool) -\u003e a -\u003e Bool",
        "fct-source": "src/Lens-Family2.html#anyOf",
        "fct-type": "function",
        "title": "anyOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "anyOf",
        "normalized": "Fold a b c d-\u003e(c-\u003eBool)-\u003ea-\u003eBool",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003e(b-\u003eBool)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:backwards",
      "description": {
        "fct-descr": "\u003cpre\u003e\n backwards :: Traversal a a' b b' -\u003e Traversal a a' b b'\n backwards :: Fold a a' b b' -\u003e Fold a a' b b'\n\u003c/pre\u003e\u003cp\u003eGiven a traversal or fold, reverse the order that elements are traversed.\n\u003c/p\u003e\u003cpre\u003e\n backwards :: Lens a a' b b' -\u003e Lens a a' b b'\n backwards :: Getter a a' b b' -\u003e Getter a a' b b'\n\u003c/pre\u003e\u003cp\u003eNo effect on lenses or getters.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "LensLike (Backwards f) a a' b b' -\u003e LensLike f a a' b b'",
        "fct-type": "function",
        "title": "backwards"
      },
      "index": {
        "description": "backwards Traversal Traversal backwards Fold Fold Given traversal or fold reverse the order that elements are traversed backwards Lens Lens backwards Getter Getter No effect on lenses or getters",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "backwards",
        "normalized": "LensLike(Backwards a)b c d e-\u003eLensLike a b c d e",
        "package": "lens-family",
        "partial": "",
        "signature": "LensLike(Backwards f)a a' b b'-\u003eLensLike f a a' b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:firstOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the first referenced value.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no referenced values.\n See \u003ccode\u003e\u003ca\u003e^?\u003c/a\u003e\u003c/code\u003e for an infix version of \u003ccode\u003e\u003ca\u003efirstOf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e Maybe b",
        "fct-source": "src/Lens-Family2.html#firstOf",
        "fct-type": "function",
        "title": "firstOf"
      },
      "index": {
        "description": "Returns Just the first referenced value Returns Nothing if there are no referenced values See for an infix version of firstOf",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "firstOf",
        "normalized": "Fold a b c d-\u003ea-\u003eMaybe c",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:folding",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efolding\u003c/a\u003e\u003c/code\u003e promotes a \"toList\" function to a read-only traversal called a fold.\n\u003c/p\u003e\u003cp\u003eTo demote a traversal or fold to a \"toList\" function use the section \u003ccode\u003e(^..l)\u003c/code\u003e or \u003ccode\u003etoListOf l\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "(a -\u003e f b) -\u003e Fold a a' b b'",
        "fct-source": "src/Lens-Family2.html#folding",
        "fct-type": "function",
        "title": "folding"
      },
      "index": {
        "description": "folding promotes toList function to read-only traversal called fold To demote traversal or fold to toList function use the section or toListOf",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "folding",
        "normalized": "(a-\u003eb c)-\u003eFold a d c e",
        "package": "lens-family",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eFold a a' b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:lastOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the last referenced value.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no referenced values.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e Maybe b",
        "fct-source": "src/Lens-Family2.html#lastOf",
        "fct-type": "function",
        "title": "lastOf"
      },
      "index": {
        "description": "Returns Just the last referenced value Returns Nothing if there are no referenced values",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "lastOf",
        "normalized": "Fold a b c d-\u003ea-\u003eMaybe c",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:lengthOf",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of references in a traversal or fold for the input.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e r",
        "fct-source": "src/Lens-Family2.html#lengthOf",
        "fct-type": "function",
        "title": "lengthOf"
      },
      "index": {
        "description": "Counts the number of references in traversal or fold for the input",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "lengthOf",
        "normalized": "Fold a b c d-\u003ea-\u003ee",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003ea-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:nullOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the number of references in the input is zero.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e Bool",
        "fct-source": "src/Lens-Family2.html#nullOf",
        "fct-type": "function",
        "title": "nullOf"
      },
      "index": {
        "description": "Returns true if the number of references in the input is zero",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "nullOf",
        "normalized": "Fold a b c d-\u003ea-\u003eBool",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:over",
      "description": {
        "fct-descr": "\u003cp\u003eDemote a setter to a semantic editor combinator.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a' b b' -\u003e (b -\u003e b') -\u003e a -\u003e a'",
        "fct-type": "function",
        "title": "over"
      },
      "index": {
        "description": "Demote setter to semantic editor combinator",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "over",
        "normalized": "Setter a b c d-\u003e(c-\u003ed)-\u003ea-\u003eb",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a' b b'-\u003e(b-\u003eb')-\u003ea-\u003ea'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:productOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the product of all the referenced values.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e b",
        "fct-source": "src/Lens-Family2.html#productOf",
        "fct-type": "function",
        "title": "productOf"
      },
      "index": {
        "description": "Returns the product of all the referenced values",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "productOf",
        "normalized": "Fold a b c d-\u003ea-\u003ec",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet all referenced fields to the given value.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Setter a a' b b' -\u003e b' -\u003e a -\u003e a'",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set all referenced fields to the given value",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "set",
        "normalized": "Setter a b c d-\u003ed-\u003ea-\u003eb",
        "package": "lens-family",
        "partial": "",
        "signature": "Setter a a' b b'-\u003eb'-\u003ea-\u003ea'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:sumOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the sum of all the referenced values.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e b",
        "fct-source": "src/Lens-Family2.html#sumOf",
        "fct-type": "function",
        "title": "sumOf"
      },
      "index": {
        "description": "Returns the sum of all the referenced values",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "sumOf",
        "normalized": "Fold a b c d-\u003ea-\u003ec",
        "package": "lens-family",
        "partial": "Of",
        "signature": "Fold a a' b b'-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:to",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e promotes a projection function to a read-only lens called a getter.\n To demote a lens to a projection function, use the section \u003ccode\u003e(^.l)\u003c/code\u003e or \u003ccode\u003eview l\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(3 :+ 4, \"example\")^._1.to(abs)\n\u003c/code\u003e\u003c/strong\u003e5.0 :+ 0.0\n\u003c/pre\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "(a -\u003e b) -\u003e Getter a a' b b'",
        "fct-source": "src/Lens-Family2.html#to",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "to promotes projection function to read-only lens called getter To demote lens to projection function use the section or view example to abs",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "to",
        "normalized": "(a-\u003eb)-\u003eGetter a c b d",
        "package": "lens-family",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eGetter a a' b b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:toListOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all of the referenced values in order.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "Fold a a' b b' -\u003e a -\u003e [b]",
        "fct-source": "src/Lens-Family2.html#toListOf",
        "fct-type": "function",
        "title": "toListOf"
      },
      "index": {
        "description": "Returns list of all of the referenced values in order",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "toListOf",
        "normalized": "Fold a b c d-\u003ea-\u003e[c]",
        "package": "lens-family",
        "partial": "List Of",
        "signature": "Fold a a' b b'-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:view",
      "description": {
        "fct-descr": "\u003cpre\u003e\n view :: Getter a a' b b' -\u003e a -\u003e b\n\u003c/pre\u003e\u003cp\u003eDemote a lens or getter to a projection function.\n\u003c/p\u003e\u003cpre\u003e\n view :: Monoid b =\u003e Fold a a' b b' -\u003e a -\u003e b\n\u003c/pre\u003e\u003cp\u003eReturns the monoidal summary of a traversal or a fold.\n\u003c/p\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "FoldLike b a a' b b' -\u003e a -\u003e b",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "view Getter Demote lens or getter to projection function view Monoid Fold Returns the monoidal summary of traversal or fold",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "view",
        "normalized": "FoldLike a b c a d-\u003eb-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "FoldLike b a a' b b'-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-family/docs/Lens-Family2.html#v:views",
      "description": {
        "fct-descr": "\u003cpre\u003e\n views :: Monoid r =\u003e Fold a a' b b' -\u003e (b -\u003e r) -\u003e a -\u003e r\n\u003c/pre\u003e\u003cp\u003eGiven a fold or traversal, return the \u003ccode\u003efoldMap\u003c/code\u003e of all the values using the given function.\n\u003c/p\u003e\u003cpre\u003e\n views :: Getter a a' b b' -\u003e (b -\u003e r) -\u003e a -\u003e r\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eviews\u003c/a\u003e\u003c/code\u003e is not particularly useful for getters or lenses, but given a getter or lens, it returns the referenced value passed through the given function.\n\u003c/p\u003e\u003cpre\u003e\n views l f a = f (view l a)\n\u003c/pre\u003e",
        "fct-module": "Lens.Family2",
        "fct-package": "lens-family",
        "fct-signature": "FoldLike r a a' b b' -\u003e (b -\u003e r) -\u003e a -\u003e r",
        "fct-type": "function",
        "title": "views"
      },
      "index": {
        "description": "views Monoid Fold Given fold or traversal return the foldMap of all the values using the given function views Getter views is not particularly useful for getters or lenses but given getter or lens it returns the referenced value passed through the given function views view",
        "hierarchy": "Lens Family2",
        "module": "Lens.Family2",
        "name": "views",
        "normalized": "FoldLike a b c d e-\u003e(d-\u003ea)-\u003eb-\u003ea",
        "package": "lens-family",
        "partial": "",
        "signature": "FoldLike r a a' b b'-\u003e(b-\u003er)-\u003ea-\u003er"
      }
    }
  }
]