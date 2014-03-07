[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "vacuum-opengl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSince GLUT+GHCi is problematic at best, after some very frustating\n experiments I decided on a client-server architecture.\n\u003c/p\u003e\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre\u003e $ vacuum-opengl-server &\n vacuum-opengl server started - press ESC to exit. \n listening on port 55961\n \n $ ghci\n Prelude\u003e :m + System.Vacuum.OpenGL \n Prelude System.Vacuum.OpenGL\u003e view [1..5]\n Prelude System.Vacuum.OpenGL\u003e view $ zip \"foobar\" [1..6]\n Prelude System.Vacuum.OpenGL\u003e :m + Data.Set\n Prelude System.Vacuum.OpenGL Data.Set\u003e view $ fromList [1..10]\n\u003c/pre\u003e\u003cp\u003eNote: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e we need the graphviz executable (called \"dot\") being in the path.\n\u003c/li\u003e\u003cli\u003e we need the server running\n\u003c/li\u003e\u003cli\u003e the image generated by graphviz may be bigger than the maximum texture \n    size your video card supports (eg. 2048). In this case you will see\n    a white rectangle. TODO: handle this better.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTODO:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e zooming & panning with mouse\n\u003c/li\u003e\u003cli\u003e nicer graph labels\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Vacuum.OpenGL.Client",
          "name": "Client",
          "package": "vacuum-opengl",
          "source": "src/System-Vacuum-OpenGL-Client.html",
          "type": "module"
        },
        "index": {
          "description": "Since GLUT GHCi is problematic at best after some very frustating experiments decided on client-server architecture Usage example vacuum-opengl-server vacuum-opengl server started press ESC to exit listening on port ghci Prelude System.Vacuum.OpenGL Prelude System.Vacuum.OpenGL view Prelude System.Vacuum.OpenGL view zip foobar Prelude System.Vacuum.OpenGL Data.Set Prelude System.Vacuum.OpenGL Data.Set view fromList Note we need the graphviz executable called dot being in the path we need the server running the image generated by graphviz may be bigger than the maximum texture size your video card supports eg In this case you will see white rectangle TODO handle this better TODO zooming panning with mouse nicer graph labels",
          "hierarchy": "System Vacuum OpenGL Client",
          "module": "System.Vacuum.OpenGL.Client",
          "name": "Client",
          "package": "vacuum-opengl",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-opengl/docs/System-Vacuum-OpenGL-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Vacuum.OpenGL.Client",
          "name": "changeHost",
          "package": "vacuum-opengl",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Vacuum-OpenGL-Client.html#changeHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Vacuum OpenGL Client",
          "module": "System.Vacuum.OpenGL.Client",
          "name": "changeHost",
          "normalized": "String-\u003eIO()",
          "package": "vacuum-opengl",
          "partial": "Host",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-opengl/docs/System-Vacuum-OpenGL-Client.html#v:changeHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Vacuum.OpenGL.Client",
          "name": "changePort",
          "package": "vacuum-opengl",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Vacuum-OpenGL-Client.html#changePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Vacuum OpenGL Client",
          "module": "System.Vacuum.OpenGL.Client",
          "name": "changePort",
          "normalized": "Int-\u003eIO()",
          "package": "vacuum-opengl",
          "partial": "Port",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-opengl/docs/System-Vacuum-OpenGL-Client.html#v:changePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Vacuum.OpenGL.Client",
          "name": "view",
          "package": "vacuum-opengl",
          "signature": "a -\u003e IO ()",
          "source": "src/System-Vacuum-OpenGL-Client.html#view",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Vacuum OpenGL Client",
          "module": "System.Vacuum.OpenGL.Client",
          "name": "view",
          "normalized": "a-\u003eIO()",
          "package": "vacuum-opengl",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-opengl/docs/System-Vacuum-OpenGL-Client.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Vacuum.OpenGL",
          "name": "OpenGL",
          "package": "vacuum-opengl",
          "source": "src/System-Vacuum-OpenGL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Vacuum OpenGL",
          "module": "System.Vacuum.OpenGL",
          "name": "OpenGL",
          "package": "vacuum-opengl",
          "partial": "Open GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-opengl/docs/System-Vacuum-OpenGL.html#"
      }
    }
  ]
]