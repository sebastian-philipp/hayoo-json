[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#",
      "description": {
        "fct-module": "Test.Tasty.Golden.Advanced",
        "fct-package": "tasty-golden",
        "fct-signature": "module",
        "fct-source": "src/Test-Tasty-Golden-Advanced.html",
        "fct-type": "module",
        "title": "Advanced"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Tasty Golden Advanced",
        "module": "Test.Tasty.Golden.Advanced",
        "name": "Advanced",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Advanced",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#t:ValueGetter",
      "description": {
        "fct-descr": "\u003cp\u003eAn action that yields a value (either golden or tested).\n\u003c/p\u003e\u003cp\u003eCPS allows closing the file handle when using lazy IO to read data.\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden.Advanced",
        "fct-package": "tasty-golden",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Tasty-Golden-Internal.html#ValueGetter",
        "fct-type": "newtype",
        "title": "ValueGetter"
      },
      "index": {
        "description": "An action that yields value either golden or tested CPS allows closing the file handle when using lazy IO to read data",
        "hierarchy": "Test Tasty Golden Advanced",
        "module": "Test.Tasty.Golden.Advanced",
        "name": "ValueGetter",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Value Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:ValueGetter",
      "description": {
        "fct-module": "Test.Tasty.Golden.Advanced",
        "fct-package": "tasty-golden",
        "fct-signature": "ValueGetter",
        "fct-source": "src/Test-Tasty-Golden-Internal.html#ValueGetter",
        "fct-type": "function",
        "title": "ValueGetter"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Tasty Golden Advanced",
        "module": "Test.Tasty.Golden.Advanced",
        "name": "ValueGetter",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Value Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:goldenTest",
      "description": {
        "fct-descr": "\u003cp\u003eA very general testing function.\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden.Advanced",
        "fct-package": "tasty-golden",
        "fct-signature": "TestName-\u003e (forall r.  ValueGetter r a)-\u003e (forall r.  ValueGetter r a)-\u003e (a -\u003e a -\u003e IO (Maybe String))-\u003e (a -\u003e IO ())-\u003e TestTree",
        "fct-type": "function",
        "title": "goldenTest"
      },
      "index": {
        "description": "very general testing function",
        "hierarchy": "Test Tasty Golden Advanced",
        "module": "Test.Tasty.Golden.Advanced",
        "name": "goldenTest",
        "normalized": "TestName-\u003e(a b ValueGetter c d)-\u003e(a b ValueGetter c d)-\u003e(d-\u003ed-\u003eIO(Maybe String))-\u003e(d-\u003eIO())-\u003eTestTree",
        "package": "tasty-golden",
        "partial": "Test",
        "signature": "TestName-\u003e(forall r. ValueGetter r a)-\u003e(forall r. ValueGetter r a)-\u003e(a-\u003ea-\u003eIO(Maybe String))-\u003e(a-\u003eIO())-\u003eTestTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:runValueGetter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Tasty.Golden.Advanced",
        "fct-package": "tasty-golden",
        "fct-signature": "ContT r IO a",
        "fct-source": "src/Test-Tasty-Golden-Internal.html#ValueGetter",
        "fct-type": "function",
        "title": "runValueGetter"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Tasty Golden Advanced",
        "module": "Test.Tasty.Golden.Advanced",
        "name": "runValueGetter",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Value Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:vgReadFile",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read a file. The file handle will be closed after the\n \u003ccode\u003e\u003ca\u003eValueGetter\u003c/a\u003e\u003c/code\u003e action is run.\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden.Advanced",
        "fct-package": "tasty-golden",
        "fct-signature": "FilePath -\u003e ValueGetter r ByteString",
        "fct-source": "src/Test-Tasty-Golden-Internal.html#vgReadFile",
        "fct-type": "function",
        "title": "vgReadFile"
      },
      "index": {
        "description": "Lazily read file The file handle will be closed after the ValueGetter action is run",
        "hierarchy": "Test Tasty Golden Advanced",
        "module": "Test.Tasty.Golden.Advanced",
        "name": "vgReadFile",
        "normalized": "FilePath-\u003eValueGetter a ByteString",
        "package": "tasty-golden",
        "partial": "Read File",
        "signature": "FilePath-\u003eValueGetter r ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGolden test management\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Tasty.Golden.Manage",
        "fct-package": "tasty-golden",
        "fct-signature": "module",
        "fct-source": "src/Test-Tasty-Golden-Manage.html",
        "fct-type": "module",
        "title": "Manage"
      },
      "index": {
        "description": "Golden test management",
        "hierarchy": "Test Tasty Golden Manage",
        "module": "Test.Tasty.Golden.Manage",
        "name": "Manage",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Manage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#t:AcceptTests",
      "description": {
        "fct-descr": "\u003cp\u003eThis option, when set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, specifies that we should run in the\n &#171;accept tests&#187; mod\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden.Manage",
        "fct-package": "tasty-golden",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Tasty-Golden-Manage.html#AcceptTests",
        "fct-type": "newtype",
        "title": "AcceptTests"
      },
      "index": {
        "description": "This option when set to True specifies that we should run in the accept tests mod",
        "hierarchy": "Test Tasty Golden Manage",
        "module": "Test.Tasty.Golden.Manage",
        "name": "AcceptTests",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Accept Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:AcceptTests",
      "description": {
        "fct-module": "Test.Tasty.Golden.Manage",
        "fct-package": "tasty-golden",
        "fct-signature": "AcceptTests Bool",
        "fct-source": "src/Test-Tasty-Golden-Manage.html#AcceptTests",
        "fct-type": "function",
        "title": "AcceptTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Tasty Golden Manage",
        "module": "Test.Tasty.Golden.Manage",
        "name": "AcceptTests",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Accept Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:acceptGoldenTests",
      "description": {
        "fct-descr": "\u003cp\u003eAccept all golden tests in the test tree\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden.Manage",
        "fct-package": "tasty-golden",
        "fct-signature": "OptionSet -\u003e TestTree -\u003e IO ()",
        "fct-source": "src/Test-Tasty-Golden-Manage.html#acceptGoldenTests",
        "fct-type": "function",
        "title": "acceptGoldenTests"
      },
      "index": {
        "description": "Accept all golden tests in the test tree",
        "hierarchy": "Test Tasty Golden Manage",
        "module": "Test.Tasty.Golden.Manage",
        "name": "acceptGoldenTests",
        "normalized": "OptionSet-\u003eTestTree-\u003eIO()",
        "package": "tasty-golden",
        "partial": "Golden Tests",
        "signature": "OptionSet-\u003eTestTree-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:acceptingTests",
      "description": {
        "fct-module": "Test.Tasty.Golden.Manage",
        "fct-package": "tasty-golden",
        "fct-signature": "Ingredient",
        "fct-source": "src/Test-Tasty-Golden-Manage.html#acceptingTests",
        "fct-type": "function",
        "title": "acceptingTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Tasty Golden Manage",
        "module": "Test.Tasty.Golden.Manage",
        "name": "acceptingTests",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:defaultMain",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003edefaultMain\u003c/code\u003e from the main tasty package, but also includes the\n golden test management capabilities.\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden.Manage",
        "fct-package": "tasty-golden",
        "fct-signature": "TestTree -\u003e IO ()",
        "fct-source": "src/Test-Tasty-Golden-Manage.html#defaultMain",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "Like defaultMain from the main tasty package but also includes the golden test management capabilities",
        "hierarchy": "Test Tasty Golden Manage",
        "module": "Test.Tasty.Golden.Manage",
        "name": "defaultMain",
        "normalized": "TestTree-\u003eIO()",
        "package": "tasty-golden",
        "partial": "Main",
        "signature": "TestTree-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simplified interface. If you want more, see\n\u003ca\u003eTest.Tasty.Golden.Advanced\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Tasty.Golden",
        "fct-package": "tasty-golden",
        "fct-signature": "module",
        "fct-source": "src/Test-Tasty-Golden.html",
        "fct-type": "module",
        "title": "Golden"
      },
      "index": {
        "description": "This module provides simplified interface If you want more see Test.Tasty.Golden.Advanced",
        "hierarchy": "Test Tasty Golden",
        "module": "Test.Tasty.Golden",
        "name": "Golden",
        "normalized": "",
        "package": "tasty-golden",
        "partial": "Golden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsFile",
      "description": {
        "fct-descr": "\u003cp\u003eCompare a given file contents against the golden file contents\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden",
        "fct-package": "tasty-golden",
        "fct-signature": "TestName-\u003e FilePath-\u003e FilePath-\u003e IO ()-\u003e TestTree",
        "fct-type": "function",
        "title": "goldenVsFile"
      },
      "index": {
        "description": "Compare given file contents against the golden file contents",
        "hierarchy": "Test Tasty Golden",
        "module": "Test.Tasty.Golden",
        "name": "goldenVsFile",
        "normalized": "TestName-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree",
        "package": "tasty-golden",
        "partial": "Vs File",
        "signature": "TestName-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsFileDiff",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egoldenVsFile\u003c/a\u003e\u003c/code\u003e, but invokes an external diff command.\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden",
        "fct-package": "tasty-golden",
        "fct-signature": "TestName-\u003e (FilePath -\u003e FilePath -\u003e [String])-\u003e FilePath-\u003e FilePath-\u003e IO ()-\u003e TestTree",
        "fct-type": "function",
        "title": "goldenVsFileDiff"
      },
      "index": {
        "description": "Same as goldenVsFile but invokes an external diff command",
        "hierarchy": "Test Tasty Golden",
        "module": "Test.Tasty.Golden",
        "name": "goldenVsFileDiff",
        "normalized": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree",
        "package": "tasty-golden",
        "partial": "Vs File Diff",
        "signature": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsString",
      "description": {
        "fct-descr": "\u003cp\u003eCompare a given string against the golden file contents\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden",
        "fct-package": "tasty-golden",
        "fct-signature": "TestName-\u003e FilePath-\u003e IO ByteString-\u003e TestTree",
        "fct-type": "function",
        "title": "goldenVsString"
      },
      "index": {
        "description": "Compare given string against the golden file contents",
        "hierarchy": "Test Tasty Golden",
        "module": "Test.Tasty.Golden",
        "name": "goldenVsString",
        "normalized": "TestName-\u003eFilePath-\u003eIO ByteString-\u003eTestTree",
        "package": "tasty-golden",
        "partial": "Vs String",
        "signature": "TestName-\u003eFilePath-\u003eIO ByteString-\u003eTestTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsStringDiff",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egoldenVsString\u003c/a\u003e\u003c/code\u003e, but invokes an external diff command.\n\u003c/p\u003e",
        "fct-module": "Test.Tasty.Golden",
        "fct-package": "tasty-golden",
        "fct-signature": "TestName-\u003e (FilePath -\u003e FilePath -\u003e [String])-\u003e FilePath-\u003e IO ByteString-\u003e TestTree",
        "fct-type": "function",
        "title": "goldenVsStringDiff"
      },
      "index": {
        "description": "Same as goldenVsString but invokes an external diff command",
        "hierarchy": "Test Tasty Golden",
        "module": "Test.Tasty.Golden",
        "name": "goldenVsStringDiff",
        "normalized": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eIO ByteString-\u003eTestTree",
        "package": "tasty-golden",
        "partial": "Vs String Diff",
        "signature": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eIO ByteString-\u003eTestTree"
      }
    }
  }
]