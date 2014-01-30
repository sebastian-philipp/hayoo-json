[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Prim.html#",
      "description": {
        "fct-module": "Data.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "module",
        "fct-source": "src/Data-Unique-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Prim",
        "module": "Data.Unique.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Prim.html#t:RealWorld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RealWorld"
      },
      "index": {
        "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
        "hierarchy": "Data Unique Prim",
        "module": "Data.Unique.Prim",
        "name": "RealWorld",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Real World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Prim.html#t:Uniq",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e is a value that can only be constructed under controlled \n conditions (in IO or ST, basically), and once constructed can only be\n compared to \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e values created under the same conditions (in the same\n monad).  Upon comparison, a \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e is ONLY ever equal to itself.  Beyond\n that, no promises regarding ordering are made except that once constructed\n the order is deterministic and a proper ordering relation (eg, \u003e is \n transitive and irreflexive, etc.)\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-source": "src/Unsafe-Unique-Prim.html#Uniq",
        "fct-type": "data",
        "title": "Uniq"
      },
      "index": {
        "description": "Uniq is value that can only be constructed under controlled conditions in IO or ST basically and once constructed can only be compared to Uniq values created under the same conditions in the same monad Upon comparison Uniq is ONLY ever equal to itself Beyond that no promises regarding ordering are made except that once constructed the order is deterministic and proper ordering relation eg is transitive and irreflexive etc",
        "hierarchy": "Data Unique Prim",
        "module": "Data.Unique.Prim",
        "name": "Uniq",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Uniq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Prim.html#v:getUniq",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e that is equal to itself, unequal to every other\n \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e constructed in the same monad, and incomparable to every \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e \n constructed in any other monad.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "m (Uniq (PrimState m))",
        "fct-source": "src/Unsafe-Unique-Prim.html#getUniq",
        "fct-type": "function",
        "title": "getUniq"
      },
      "index": {
        "description": "Construct new Uniq that is equal to itself unequal to every other Uniq constructed in the same monad and incomparable to every Uniq constructed in any other monad",
        "hierarchy": "Data Unique Prim",
        "module": "Data.Unique.Prim",
        "name": "getUniq",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Uniq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#",
      "description": {
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "module",
        "fct-source": "src/Data-Unique-Tag.html",
        "fct-type": "module",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#t::-61-",
      "description": {
        "fct-descr": "\u003cp\u003eA GADT witnessing equality of two types.  Its only inhabitant is \u003ccode\u003e\u003ca\u003eRefl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-type": "data",
        "title": ":="
      },
      "index": {
        "description": "GADT witnessing equality of two types Its only inhabitant is Refl",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": ":=",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#t:GCompare",
      "description": {
        "fct-descr": "\u003cp\u003eType class for orderable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (GEQ).\n |Type class for comparable GADT-like structures.  When 2 things are equal,\n must return a witness that their parameter types are equal as well (\u003ccode\u003e\u003ca\u003eGEQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "GCompare"
      },
      "index": {
        "description": "Type class for orderable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ Type class for comparable GADT-like structures When things are equal must return witness that their parameter types are equal as well GEQ",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "GCompare",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "GCompare",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#t:GEq",
      "description": {
        "fct-descr": "\u003cp\u003eA class for type-contexts which contain enough information\n to (at least in some cases) decide the equality of types \n occurring within them.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "GEq"
      },
      "index": {
        "description": "class for type-contexts which contain enough information to at least in some cases decide the equality of types occurring within them",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "GEq",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "GEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#t:GOrdering",
      "description": {
        "fct-descr": "\u003cp\u003eA type for the result of comparing GADT constructors; the type parameters\n of the GADT values being compared are included so that in the case where \n they are equal their parameter types can be unified.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "GOrdering"
      },
      "index": {
        "description": "type for the result of comparing GADT constructors the type parameters of the GADT values being compared are included so that in the case where they are equal their parameter types can be unified",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "GOrdering",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "GOrdering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#t:RealWorld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRealWorld\u003c/code\u003e is deeply magical.  It is \u003cem\u003eprimitive\u003c/em\u003e, but it is not\n \t\u003cem\u003eunlifted\u003c/em\u003e (hence \u003ccode\u003eptrArg\u003c/code\u003e).  We never manipulate values of type\n \t\u003ccode\u003eRealWorld\u003c/code\u003e; it's only used in the type system, to parameterise \u003ccode\u003eState#\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RealWorld"
      },
      "index": {
        "description": "RealWorld is deeply magical It is primitive but it is not unlifted hence ptrArg We never manipulate values of type RealWorld it only used in the type system to parameterise State",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "RealWorld",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Real World",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e type is like an ad-hoc GADT allowing runtime creation of new \n constructors.  Specifically, it is like a GADT \"enumeration\" with one\n phantom type.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e constructor can be generated in any primitive monad (but only tags\n from the same one can be compared).  Every tag is equal to itself and to \n no other.  The \u003ccode\u003e\u003ca\u003eGOrdering\u003c/a\u003e\u003c/code\u003e class allows rediscovery of a tag's phantom type,\n so that \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003es and values of type \u003ccode\u003e\u003ccode\u003eDSum\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e s)\u003c/code\u003e can be tested for\n equality even when their types are not known to be equal.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e uses a \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e as a witness of type equality, which is sound as long\n as the \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e is truly unique and only one \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is ever constructed from\n any given \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e.  The type of \u003ccode\u003e\u003ca\u003enewTag\u003c/a\u003e\u003c/code\u003e enforces these conditions.\n \u003ccode\u003e\u003ca\u003everyUnsafeMkTag\u003c/a\u003e\u003c/code\u003e provides a way for adventurous (or malicious!) users to \n assert that they know better than the type system.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-source": "src/Unsafe-Unique-Tag.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "The Tag type is like an ad-hoc GADT allowing runtime creation of new constructors Specifically it is like GADT enumeration with one phantom type Tag constructor can be generated in any primitive monad but only tags from the same one can be compared Every tag is equal to itself and to no other The GOrdering class allows rediscovery of tag phantom type so that Tag and values of type DSum Tag can be tested for equality even when their types are not known to be equal Tag uses Uniq as witness of type equality which is sound as long as the Uniq is truly unique and only one Tag is ever constructed from any given Uniq The type of newTag enforces these conditions veryUnsafeMkTag provides way for adventurous or malicious users to assert that they know better than the type system",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:GEQ",
      "description": {
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "GOrdering t t",
        "fct-type": "function",
        "title": "GEQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "GEQ",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "GEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:GGT",
      "description": {
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "GOrdering a b",
        "fct-type": "function",
        "title": "GGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "GGT",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "GGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:GLT",
      "description": {
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "GOrdering a b",
        "fct-type": "function",
        "title": "GLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "GLT",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "GLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:Refl",
      "description": {
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": ":= a a",
        "fct-type": "function",
        "title": "Refl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "Refl",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Refl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:gcompare",
      "description": {
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "f a -\u003e f b -\u003e GOrdering a b",
        "fct-type": "method",
        "title": "gcompare"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "gcompare",
        "normalized": "a b-\u003ea c-\u003eGOrdering b c",
        "package": "prim-uniq",
        "partial": "",
        "signature": "f a-\u003ef b-\u003eGOrdering a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:geq",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a witness of type-equality, if one exists.\n\u003c/p\u003e\u003cp\u003eA handy idiom for using this would be to pattern-bind in the Maybe monad, eg.:\n\u003c/p\u003e\u003cpre\u003e extract :: GEq tag =\u003e tag a -\u003e DSum tag -\u003e Maybe a\n extract t1 (t2 :=\u003e x) = do\n     Refl \u003c- geq t1 t2\n     return x\n\u003c/pre\u003e\u003cp\u003eOr in a list comprehension:\n\u003c/p\u003e\u003cpre\u003e extractMany :: GEq tag =\u003e tag a -\u003e [DSum tag] -\u003e [a]\n extractMany t1 things = [ x | (t2 :=\u003e x) \u003c- things, Refl \u003c- maybeToList (geq t1 t2)]\n\u003c/pre\u003e\u003cp\u003e(Making use of the \u003ccode\u003eDSum\u003c/code\u003e type from \u003ca\u003eData.Dependent.Sum\u003c/a\u003e in both examples)\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "f a -\u003e f b -\u003e Maybe (:= a b)",
        "fct-type": "method",
        "title": "geq"
      },
      "index": {
        "description": "Produce witness of type-equality if one exists handy idiom for using this would be to pattern-bind in the Maybe monad eg extract GEq tag tag DSum tag Maybe extract t1 t2 do Refl geq t1 t2 return Or in list comprehension extractMany GEq tag tag DSum tag extractMany t1 things t2 things Refl maybeToList geq t1 t2 Making use of the DSum type from Data.Dependent.Sum in both examples",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "geq",
        "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
        "package": "prim-uniq",
        "partial": "",
        "signature": "f a-\u003ef b-\u003eMaybe(a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Data-Unique-Tag.html#v:newTag",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new tag witnessing a type \u003ccode\u003ea\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eGEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eGOrdering\u003c/a\u003e\u003c/code\u003e instance \n can be used to discover type equality of two occurrences of the same tag.\n\u003c/p\u003e\u003cp\u003e(I'm not sure whether the recovery is sound if \u003ccode\u003ea\u003c/code\u003e is instantiated as a\n polymorphic type, so I'd advise caution if you intend to try it.  I suspect \n it is, but I have not thought through it very deeply and certainly have not\n proved it.)\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "m (Tag (PrimState m) a)",
        "fct-source": "src/Unsafe-Unique-Tag.html#newTag",
        "fct-type": "function",
        "title": "newTag"
      },
      "index": {
        "description": "Create new tag witnessing type The GEq or GOrdering instance can be used to discover type equality of two occurrences of the same tag not sure whether the recovery is sound if is instantiated as polymorphic type so advise caution if you intend to try it suspect it is but have not thought through it very deeply and certainly have not proved it",
        "hierarchy": "Data Unique Tag",
        "module": "Data.Unique.Tag",
        "name": "newTag",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Prim.html#",
      "description": {
        "fct-module": "Unsafe.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "module",
        "fct-source": "src/Unsafe-Unique-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Unsafe Unique Prim",
        "module": "Unsafe.Unique.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Prim.html#t:Uniq",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e is a value that can only be constructed under controlled \n conditions (in IO or ST, basically), and once constructed can only be\n compared to \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e values created under the same conditions (in the same\n monad).  Upon comparison, a \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e is ONLY ever equal to itself.  Beyond\n that, no promises regarding ordering are made except that once constructed\n the order is deterministic and a proper ordering relation (eg, \u003e is \n transitive and irreflexive, etc.)\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-source": "src/Unsafe-Unique-Prim.html#Uniq",
        "fct-type": "data",
        "title": "Uniq"
      },
      "index": {
        "description": "Uniq is value that can only be constructed under controlled conditions in IO or ST basically and once constructed can only be compared to Uniq values created under the same conditions in the same monad Upon comparison Uniq is ONLY ever equal to itself Beyond that no promises regarding ordering are made except that once constructed the order is deterministic and proper ordering relation eg is transitive and irreflexive etc",
        "hierarchy": "Unsafe Unique Prim",
        "module": "Unsafe.Unique.Prim",
        "name": "Uniq",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Uniq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Prim.html#v:getUniq",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e that is equal to itself, unequal to every other\n \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e constructed in the same monad, and incomparable to every \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e \n constructed in any other monad.\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "m (Uniq (PrimState m))",
        "fct-source": "src/Unsafe-Unique-Prim.html#getUniq",
        "fct-type": "function",
        "title": "getUniq"
      },
      "index": {
        "description": "Construct new Uniq that is equal to itself unequal to every other Uniq constructed in the same monad and incomparable to every Uniq constructed in any other monad",
        "hierarchy": "Unsafe Unique Prim",
        "module": "Unsafe.Unique.Prim",
        "name": "getUniq",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Uniq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Prim.html#v:unsafeMkUniq",
      "description": {
        "fct-descr": "\u003cp\u003eFor the implementation of \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e construction in new monads, this operation\n is exposed.  Users must accept responsibility for ensuring true uniqueness \n across the lifetime of the resulting \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e value.  Failure to do so could\n lead to type unsoundness in code depending on uniqueness as a type witness\n (eg, \u003ca\u003eData.Unique.Tag\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "Integer -\u003e Uniq s",
        "fct-source": "src/Unsafe-Unique-Prim.html#unsafeMkUniq",
        "fct-type": "function",
        "title": "unsafeMkUniq"
      },
      "index": {
        "description": "For the implementation of Uniq construction in new monads this operation is exposed Users must accept responsibility for ensuring true uniqueness across the lifetime of the resulting Uniq value Failure to do so could lead to type unsoundness in code depending on uniqueness as type witness eg Data.Unique.Tag",
        "hierarchy": "Unsafe Unique Prim",
        "module": "Unsafe.Unique.Prim",
        "name": "unsafeMkUniq",
        "normalized": "Integer-\u003eUniq a",
        "package": "prim-uniq",
        "partial": "Mk Uniq",
        "signature": "Integer-\u003eUniq s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Prim.html#v:unsafeShowUniq",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eunsafeShowsPrecUniq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "Uniq s -\u003e String",
        "fct-source": "src/Unsafe-Unique-Prim.html#unsafeShowUniq",
        "fct-type": "function",
        "title": "unsafeShowUniq"
      },
      "index": {
        "description": "See unsafeShowsPrecUniq",
        "hierarchy": "Unsafe Unique Prim",
        "module": "Unsafe.Unique.Prim",
        "name": "unsafeShowUniq",
        "normalized": "Uniq a-\u003eString",
        "package": "prim-uniq",
        "partial": "Show Uniq",
        "signature": "Uniq s-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Prim.html#v:unsafeShowsPrecUniq",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e would not be sound, but for debugging\n purposes we occasionally will want to do it anyway.  Its unsoundness is \n nicely demonstrated by:\n\u003c/p\u003e\u003cpre\u003e runST (fmap show getUniq) :: String\n\u003c/pre\u003e\u003cp\u003eWhich, despite having type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, is not referentially transparent.\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Prim",
        "fct-package": "prim-uniq",
        "fct-signature": "Int -\u003e Uniq s -\u003e ShowS",
        "fct-source": "src/Unsafe-Unique-Prim.html#unsafeShowsPrecUniq",
        "fct-type": "function",
        "title": "unsafeShowsPrecUniq"
      },
      "index": {
        "description": "Show instance for Uniq would not be sound but for debugging purposes we occasionally will want to do it anyway Its unsoundness is nicely demonstrated by runST fmap show getUniq String Which despite having type String is not referentially transparent",
        "hierarchy": "Unsafe Unique Prim",
        "module": "Unsafe.Unique.Prim",
        "name": "unsafeShowsPrecUniq",
        "normalized": "Int-\u003eUniq a-\u003eShowS",
        "package": "prim-uniq",
        "partial": "Shows Prec Uniq",
        "signature": "Int-\u003eUniq s-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Tag.html#",
      "description": {
        "fct-module": "Unsafe.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "module",
        "fct-source": "src/Unsafe-Unique-Tag.html",
        "fct-type": "module",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Unsafe Unique Tag",
        "module": "Unsafe.Unique.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Tag.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e type is like an ad-hoc GADT allowing runtime creation of new \n constructors.  Specifically, it is like a GADT \"enumeration\" with one\n phantom type.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e constructor can be generated in any primitive monad (but only tags\n from the same one can be compared).  Every tag is equal to itself and to \n no other.  The \u003ccode\u003e\u003ca\u003eGOrdering\u003c/a\u003e\u003c/code\u003e class allows rediscovery of a tag's phantom type,\n so that \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003es and values of type \u003ccode\u003e\u003ccode\u003eDSum\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e s)\u003c/code\u003e can be tested for\n equality even when their types are not known to be equal.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e uses a \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e as a witness of type equality, which is sound as long\n as the \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e is truly unique and only one \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e is ever constructed from\n any given \u003ccode\u003e\u003ca\u003eUniq\u003c/a\u003e\u003c/code\u003e.  The type of \u003ccode\u003e\u003ca\u003enewTag\u003c/a\u003e\u003c/code\u003e enforces these conditions.\n \u003ccode\u003e\u003ca\u003everyUnsafeMkTag\u003c/a\u003e\u003c/code\u003e provides a way for adventurous (or malicious!) users to \n assert that they know better than the type system.\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "data",
        "fct-source": "src/Unsafe-Unique-Tag.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "The Tag type is like an ad-hoc GADT allowing runtime creation of new constructors Specifically it is like GADT enumeration with one phantom type Tag constructor can be generated in any primitive monad but only tags from the same one can be compared Every tag is equal to itself and to no other The GOrdering class allows rediscovery of tag phantom type so that Tag and values of type DSum Tag can be tested for equality even when their types are not known to be equal Tag uses Uniq as witness of type equality which is sound as long as the Uniq is truly unique and only one Tag is ever constructed from any given Uniq The type of newTag enforces these conditions veryUnsafeMkTag provides way for adventurous or malicious users to assert that they know better than the type system",
        "hierarchy": "Unsafe Unique Tag",
        "module": "Unsafe.Unique.Tag",
        "name": "Tag",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Tag.html#v:newTag",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new tag witnessing a type \u003ccode\u003ea\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eGEq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eGOrdering\u003c/a\u003e\u003c/code\u003e instance \n can be used to discover type equality of two occurrences of the same tag.\n\u003c/p\u003e\u003cp\u003e(I'm not sure whether the recovery is sound if \u003ccode\u003ea\u003c/code\u003e is instantiated as a\n polymorphic type, so I'd advise caution if you intend to try it.  I suspect \n it is, but I have not thought through it very deeply and certainly have not\n proved it.)\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "m (Tag (PrimState m) a)",
        "fct-source": "src/Unsafe-Unique-Tag.html#newTag",
        "fct-type": "function",
        "title": "newTag"
      },
      "index": {
        "description": "Create new tag witnessing type The GEq or GOrdering instance can be used to discover type equality of two occurrences of the same tag not sure whether the recovery is sound if is instantiated as polymorphic type so advise caution if you intend to try it suspect it is but have not thought through it very deeply and certainly have not proved it",
        "hierarchy": "Unsafe Unique Tag",
        "module": "Unsafe.Unique.Tag",
        "name": "newTag",
        "normalized": "",
        "package": "prim-uniq",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prim-uniq/docs/Unsafe-Unique-Tag.html#v:veryUnsafeMkTag",
      "description": {
        "fct-descr": "\u003cp\u003eVery dangerous! This is essentially a deferred \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e: by creating\n a tag with this function, the user accepts responsibility for ensuring \n uniqueness of the \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e across the lifetime of the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e (including\n properly controlling the lifetime of the \u003ccode\u003e\u003ca\u003eTag\u003c/a\u003e\u003c/code\u003e if necessary \n by universal quantification when discharging the \u003ccode\u003es\u003c/code\u003e phantom type)\n\u003c/p\u003e",
        "fct-module": "Unsafe.Unique.Tag",
        "fct-package": "prim-uniq",
        "fct-signature": "Integer -\u003e Tag s a",
        "fct-source": "src/Unsafe-Unique-Tag.html#veryUnsafeMkTag",
        "fct-type": "function",
        "title": "veryUnsafeMkTag"
      },
      "index": {
        "description": "Very dangerous This is essentially deferred unsafeCoerce by creating tag with this function the user accepts responsibility for ensuring uniqueness of the Integer across the lifetime of the Tag including properly controlling the lifetime of the Tag if necessary by universal quantification when discharging the phantom type",
        "hierarchy": "Unsafe Unique Tag",
        "module": "Unsafe.Unique.Tag",
        "name": "veryUnsafeMkTag",
        "normalized": "Integer-\u003eTag a b",
        "package": "prim-uniq",
        "partial": "Unsafe Mk Tag",
        "signature": "Integer-\u003eTag s a"
      }
    }
  }
]