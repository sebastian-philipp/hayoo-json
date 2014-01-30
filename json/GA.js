[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGA, a Haskell library for working with genetic algoritms.\n\u003c/p\u003e\u003cp\u003eAug. 2011 - Sept. 2011, by Kenneth Hoste\n\u003c/p\u003e\u003cp\u003eversion: 1.0\n\u003c/p\u003e\u003cp\u003eMajor features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e flexible user-friendly API for working with genetic algorithms\n\u003c/li\u003e\u003cli\u003e Entity type class to let user define entity definition, scoring, etc.\n\u003c/li\u003e\u003cli\u003e abstraction over monad, resulting in a powerful yet simple interface\n\u003c/li\u003e\u003cli\u003e support for scoring entire population at once\n\u003c/li\u003e\u003cli\u003e support for checkpointing each generation, \n    and restoring from last checkpoint\n\u003c/li\u003e\u003cli\u003e convergence detection, as defined by user\n\u003c/li\u003e\u003cli\u003e also available: random searching, user-defined progress output\n\u003c/li\u003e\u003cli\u003e illustrative toy examples included\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHello world example:\n\u003c/p\u003e\u003cpre\u003e -- Example for GA package\n -- see http://hackage.haskell.org/package/GA\n --\n -- Evolve the string \"Hello World!\"\n\n{-# LANGUAGE FlexibleInstances #-}\n{-# LANGUAGE MultiParamTypeClasses #-}\n{-# LANGUAGE TypeSynonymInstances #-}\n\nimport Data.Char (chr,ord)\nimport Data.List (foldl')\nimport System.Random (mkStdGen, random, randoms)\nimport System.IO(IOMode(..), hClose, hGetContents, openFile)\n\nimport GA (Entity(..), GAConfig(..), \n           evolveVerbose, randomSearch)\n\n-- efficient sum\nsum' :: (Num a) =\u003e [a] -\u003e a\nsum' = foldl' (+) 0\n\n--\n-- GA TYPE CLASS IMPLEMENTATION\n--\n\ntype Sentence = String\ntype Target = String\ntype Letter = Char\n\ninstance Entity Sentence Double Target [Letter] IO where\n \n  -- generate a random entity, i.e. a random string\n  -- assumption: max. 100 chars, only 'printable' ASCII (first 128)\n  genRandom pool seed = return $ take n $ map ((!!) pool) is\n    where\n        g = mkStdGen seed\n        n = (fst $ random g) `mod` 101\n        k = length pool\n        is = map (flip mod k) $ randoms g\n\n  -- crossover operator: mix (and trim to shortest entity)\n  crossover _ _ seed e1 e2 = return $ Just e\n    where\n      g = mkStdGen seed\n      cps = zipWith (\\x y -\u003e [x,y]) e1 e2\n      picks = map (flip mod 2) $ randoms g\n      e = zipWith (!!) cps picks\n\n  -- mutation operator: use next or previous letter randomly and add random characters (max. 9)\n  mutation pool p seed e = return $ Just $ (zipWith replace tweaks e) \n                                         ++ addChars\n    where\n      g = mkStdGen seed\n      k = round (1 / p) :: Int\n      tweaks = randoms g :: [Int]\n      replace i x = if (i `mod` k) == 0\n        then if even i\n          then if x \u003e (minBound :: Char) then pred x else succ x\n          else if x \u003c (maxBound :: Char) then succ x else pred x\n        else x\n      is = map (flip mod $ length pool) $ randoms g\n      addChars = take (seed `mod` 10) $ map ((!!) pool) is\n\n  -- score: distance between current string and target\n  -- sum of 'distances' between letters, large penalty for additional/short letters\n  -- NOTE: lower is better\n  score fn e = do\n    h \u003c- openFile fn ReadMode\n    x \u003c- hGetContents h\n    length x `seq` hClose h\n    let e' = map ord e\n        x' = map ord x\n        d = sum' $ map abs $ zipWith (-) e' x'\n        l = abs $ (length x) - (length e)\n    return $ Just $ fromIntegral $ d + 100*l\n\n  -- whether or not a scored entity is perfect\n  isPerfect (_,s) = s == 0.0\n\n\nmain :: IO() \nmain = do\n        let cfg = GAConfig \n                    100 -- population size\n                    25 -- archive size (best entities to keep track of)\n                    300 -- maximum number of generations\n                    0.8 -- crossover rate (% of entities by crossover)\n                    0.2 -- mutation rate (% of entities by mutation)\n                    0.0 -- parameter for crossover (not used here)\n                    0.2 -- parameter for mutation (% of replaced letters)\n                    False -- whether or not to use checkpointing\n                    False -- don't rescore archive in each generation\n\n            g = mkStdGen 0 -- random generator\n\n            -- pool of characters to pick from: printable ASCII characters\n            charsPool = map chr [32..126]\n\n            fileName = \"goal.txt\"\n\n        -- write string to file, pretend that we don't know what it is\n        -- goal is to let genetic algorithm evolve this string\n        writeFile fileName \"Hello World!\"\n\n        -- Do the evolution!\n        -- Note: if either of the last two arguments is unused, just use () as a value\n        es \u003c- evolveVerbose g cfg charsPool fileName\n        let e = snd $ head es :: String\n        \n        putStrLn $ \"best entity (GA): \" ++ (show e)\n\n        -- Compare with random search with large budget\n        -- 100k random entities, equivalent to 1000 generations of GA\n        es' \u003c- randomSearch g 100000 charsPool fileName\n        let e' = snd $ head es' :: String\n       \n        putStrLn $ \"best entity (random search): \" ++ (show e')\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "module",
        "fct-source": "src/GA.html",
        "fct-type": "module",
        "title": "GA"
      },
      "index": {
        "description": "GA Haskell library for working with genetic algoritms Aug Sept by Kenneth Hoste version Major features flexible user-friendly API for working with genetic algorithms Entity type class to let user define entity definition scoring etc abstraction over monad resulting in powerful yet simple interface support for scoring entire population at once support for checkpointing each generation and restoring from last checkpoint convergence detection as defined by user also available random searching user-defined progress output illustrative toy examples included Hello world example Example for GA package see http hackage.haskell.org package GA Evolve the string Hello World LANGUAGE FlexibleInstances LANGUAGE MultiParamTypeClasses LANGUAGE TypeSynonymInstances import Data.Char chr ord import Data.List foldl import System.Random mkStdGen random randoms import System.IO IOMode hClose hGetContents openFile import GA Entity GAConfig evolveVerbose randomSearch efficient sum sum Num sum foldl GA TYPE CLASS IMPLEMENTATION type Sentence String type Target String type Letter Char instance Entity Sentence Double Target Letter IO where generate random entity i.e random string assumption max chars only printable ASCII first genRandom pool seed return take map pool is where mkStdGen seed fst random mod length pool is map flip mod randoms crossover operator mix and trim to shortest entity crossover seed e1 e2 return Just where mkStdGen seed cps zipWith e1 e2 picks map flip mod randoms zipWith cps picks mutation operator use next or previous letter randomly and add random characters max mutation pool seed return Just zipWith replace tweaks addChars where mkStdGen seed round Int tweaks randoms Int replace if mod then if even then if minBound Char then pred else succ else if maxBound Char then succ else pred else is map flip mod length pool randoms addChars take seed mod map pool is score distance between current string and target sum of distances between letters large penalty for additional short letters NOTE lower is better score fn do openFile fn ReadMode hGetContents length seq hClose let map ord map ord sum map abs zipWith abs length length return Just fromIntegral whether or not scored entity is perfect isPerfect main IO main do let cfg GAConfig population size archive size best entities to keep track of maximum number of generations crossover rate of entities by crossover mutation rate of entities by mutation parameter for crossover not used here parameter for mutation of replaced letters False whether or not to use checkpointing False don rescore archive in each generation mkStdGen random generator pool of characters to pick from printable ASCII characters charsPool map chr fileName goal.txt write string to file pretend that we don know what it is goal is to let genetic algorithm evolve this string writeFile fileName Hello World Do the evolution Note if either of the last two arguments is unused just use as value es evolveVerbose cfg charsPool fileName let snd head es String putStrLn best entity GA show Compare with random search with large budget random entities equivalent to generations of GA es randomSearch charsPool fileName let snd head es String putStrLn best entity random search show",
        "hierarchy": "GA",
        "module": "GA",
        "name": "GA",
        "normalized": "",
        "package": "GA",
        "partial": "GA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#t:Archive",
      "description": {
        "fct-descr": "\u003cp\u003eArchive of scored entities.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "type",
        "fct-source": "src/GA.html#Archive",
        "fct-type": "type",
        "title": "Archive"
      },
      "index": {
        "description": "Archive of scored entities",
        "hierarchy": "GA",
        "module": "GA",
        "name": "Archive",
        "normalized": "",
        "package": "GA",
        "partial": "Archive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#t:Entity",
      "description": {
        "fct-descr": "\u003cp\u003eType class for entities that represent a candidate solution.\n\u003c/p\u003e\u003cp\u003eFive parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e data structure representing an entity (e)\n\u003c/li\u003e\u003cli\u003e score type (s), e.g. Double\n\u003c/li\u003e\u003cli\u003e data used to score an entity, e.g. a list of numbers (d)\n\u003c/li\u003e\u003cli\u003e some kind of pool used to generate random entities, \n   e.g. a Hoogle database (p)\n\u003c/li\u003e\u003cli\u003e monad to operate in (m)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal implementation should include \u003ccode\u003e\u003ca\u003egenRandom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecrossover\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emutation\u003c/a\u003e\u003c/code\u003e, \n and either \u003ccode\u003e\u003ca\u003escore'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escore\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003escorePop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisPerfect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eshowGeneration\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehasConverged\u003c/a\u003e\u003c/code\u003e functions are optional.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "class",
        "fct-source": "src/GA.html#Entity",
        "fct-type": "class",
        "title": "Entity"
      },
      "index": {
        "description": "Type class for entities that represent candidate solution Five parameters data structure representing an entity score type e.g Double data used to score an entity e.g list of numbers some kind of pool used to generate random entities e.g Hoogle database monad to operate in Minimal implementation should include genRandom crossover mutation and either score score or scorePop The isPerfect showGeneration and hasConverged functions are optional",
        "hierarchy": "GA",
        "module": "GA",
        "name": "Entity",
        "normalized": "",
        "package": "GA",
        "partial": "Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#t:GAConfig",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration for genetic algorithm.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "data",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "data",
        "title": "GAConfig"
      },
      "index": {
        "description": "Configuration for genetic algorithm",
        "hierarchy": "GA",
        "module": "GA",
        "name": "GAConfig",
        "normalized": "",
        "package": "GA",
        "partial": "GAConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#t:ScoredEntity",
      "description": {
        "fct-descr": "\u003cp\u003eA scored entity.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "type",
        "fct-source": "src/GA.html#ScoredEntity",
        "fct-type": "type",
        "title": "ScoredEntity"
      },
      "index": {
        "description": "scored entity",
        "hierarchy": "GA",
        "module": "GA",
        "name": "ScoredEntity",
        "normalized": "",
        "package": "GA",
        "partial": "Scored Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:GAConfig",
      "description": {
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "GAConfig",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "GAConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "GA",
        "module": "GA",
        "name": "GAConfig",
        "normalized": "",
        "package": "GA",
        "partial": "GAConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:crossover",
      "description": {
        "fct-descr": "\u003cp\u003eCrossover operator: combine two entities into a new entity. [required]\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "crossover",
        "fct-source": "src/GA.html#crossover",
        "fct-type": "method",
        "title": "crossover"
      },
      "index": {
        "description": "Crossover operator combine two entities into new entity required",
        "hierarchy": "GA",
        "module": "GA",
        "name": "crossover",
        "normalized": "",
        "package": "GA",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:evolve",
      "description": {
        "fct-descr": "\u003cp\u003eDo the evolution!\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "StdGen-\u003e GAConfig-\u003e p-\u003e d-\u003e m (Archive e s)",
        "fct-type": "function",
        "title": "evolve"
      },
      "index": {
        "description": "Do the evolution",
        "hierarchy": "GA",
        "module": "GA",
        "name": "evolve",
        "normalized": "StdGen-\u003eGAConfig-\u003ea-\u003eb-\u003ec(Archive d e)",
        "package": "GA",
        "partial": "",
        "signature": "StdGen-\u003eGAConfig-\u003ep-\u003ed-\u003em(Archive e s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:evolveVerbose",
      "description": {
        "fct-descr": "\u003cp\u003eDo the evolution, verbosely.\n\u003c/p\u003e\u003cp\u003ePrints progress to stdout, and supports checkpointing. \n\u003c/p\u003e\u003cp\u003eNote: requires support for liftIO in monad used.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "StdGen-\u003e GAConfig-\u003e p-\u003e d-\u003e m (Archive e s)",
        "fct-type": "function",
        "title": "evolveVerbose"
      },
      "index": {
        "description": "Do the evolution verbosely Prints progress to stdout and supports checkpointing Note requires support for liftIO in monad used",
        "hierarchy": "GA",
        "module": "GA",
        "name": "evolveVerbose",
        "normalized": "StdGen-\u003eGAConfig-\u003ea-\u003eb-\u003ec(Archive d e)",
        "package": "GA",
        "partial": "Verbose",
        "signature": "StdGen-\u003eGAConfig-\u003ep-\u003ed-\u003em(Archive e s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:genRandom",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a random entity. [required]\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "genRandom",
        "fct-source": "src/GA.html#genRandom",
        "fct-type": "method",
        "title": "genRandom"
      },
      "index": {
        "description": "Generate random entity required",
        "hierarchy": "GA",
        "module": "GA",
        "name": "genRandom",
        "normalized": "",
        "package": "GA",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getArchiveSize",
      "description": {
        "fct-descr": "\u003cp\u003esize of archive (best entities so far)\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Int",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getArchiveSize"
      },
      "index": {
        "description": "size of archive best entities so far",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getArchiveSize",
        "normalized": "",
        "package": "GA",
        "partial": "Archive Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getCrossoverParam",
      "description": {
        "fct-descr": "\u003cp\u003eparameter for crossover (semantics depend on crossover operator)\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Float",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getCrossoverParam"
      },
      "index": {
        "description": "parameter for crossover semantics depend on crossover operator",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getCrossoverParam",
        "normalized": "",
        "package": "GA",
        "partial": "Crossover Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getCrossoverRate",
      "description": {
        "fct-descr": "\u003cp\u003efraction of entities generated by crossover (tip: \u003e= 0.80)\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Float",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getCrossoverRate"
      },
      "index": {
        "description": "fraction of entities generated by crossover tip",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getCrossoverRate",
        "normalized": "",
        "package": "GA",
        "partial": "Crossover Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getMaxGenerations",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of generations to evolve\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Int",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getMaxGenerations"
      },
      "index": {
        "description": "maximum number of generations to evolve",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getMaxGenerations",
        "normalized": "",
        "package": "GA",
        "partial": "Max Generations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getMutationParam",
      "description": {
        "fct-descr": "\u003cp\u003eparameter for mutation (semantics depend on mutation operator)\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Float",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getMutationParam"
      },
      "index": {
        "description": "parameter for mutation semantics depend on mutation operator",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getMutationParam",
        "normalized": "",
        "package": "GA",
        "partial": "Mutation Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getMutationRate",
      "description": {
        "fct-descr": "\u003cp\u003efraction of entities generated by mutation (tip: \u003c= 0.20)\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Float",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getMutationRate"
      },
      "index": {
        "description": "fraction of entities generated by mutation tip",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getMutationRate",
        "normalized": "",
        "package": "GA",
        "partial": "Mutation Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getPopSize",
      "description": {
        "fct-descr": "\u003cp\u003epopulation size\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Int",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getPopSize"
      },
      "index": {
        "description": "population size",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getPopSize",
        "normalized": "",
        "package": "GA",
        "partial": "Pop Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getRescoreArchive",
      "description": {
        "fct-descr": "\u003cp\u003erescore archive in each generation?\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Bool",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getRescoreArchive"
      },
      "index": {
        "description": "rescore archive in each generation",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getRescoreArchive",
        "normalized": "",
        "package": "GA",
        "partial": "Rescore Archive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:getWithCheckpointing",
      "description": {
        "fct-descr": "\u003cp\u003eenable/disable built-in checkpointing mechanism\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "Bool",
        "fct-source": "src/GA.html#GAConfig",
        "fct-type": "function",
        "title": "getWithCheckpointing"
      },
      "index": {
        "description": "enable disable built-in checkpointing mechanism",
        "hierarchy": "GA",
        "module": "GA",
        "name": "getWithCheckpointing",
        "normalized": "",
        "package": "GA",
        "partial": "With Checkpointing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:hasConverged",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether evolution should continue or not, \n  based on lists of archive fitnesses of previous generations.\n\u003c/p\u003e\u003cp\u003eNote: most recent archives are at the head of the list.\n\u003c/p\u003e\u003cp\u003eDefault implementation always returns False.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "hasConverged",
        "fct-source": "src/GA.html#hasConverged",
        "fct-type": "method",
        "title": "hasConverged"
      },
      "index": {
        "description": "Determine whether evolution should continue or not based on lists of archive fitnesses of previous generations Note most recent archives are at the head of the list Default implementation always returns False",
        "hierarchy": "GA",
        "module": "GA",
        "name": "hasConverged",
        "normalized": "",
        "package": "GA",
        "partial": "Converged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:isPerfect",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether a score indicates a perfect entity. [optional]\n\u003c/p\u003e\u003cp\u003eDefault implementation returns always False.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "isPerfect",
        "fct-source": "src/GA.html#isPerfect",
        "fct-type": "method",
        "title": "isPerfect"
      },
      "index": {
        "description": "Determines whether score indicates perfect entity optional Default implementation returns always False",
        "hierarchy": "GA",
        "module": "GA",
        "name": "isPerfect",
        "normalized": "",
        "package": "GA",
        "partial": "Perfect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:mutation",
      "description": {
        "fct-descr": "\u003cp\u003eMutation operator: mutate an entity into a new entity. [required]\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "mutation",
        "fct-source": "src/GA.html#mutation",
        "fct-type": "method",
        "title": "mutation"
      },
      "index": {
        "description": "Mutation operator mutate an entity into new entity required",
        "hierarchy": "GA",
        "module": "GA",
        "name": "mutation",
        "normalized": "",
        "package": "GA",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:randomSearch",
      "description": {
        "fct-descr": "\u003cp\u003eRandom searching.\n\u003c/p\u003e\u003cp\u003eUseful to compare with results from genetic algorithm.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "StdGen-\u003e Int-\u003e p-\u003e d-\u003e m (Archive e s)",
        "fct-type": "function",
        "title": "randomSearch"
      },
      "index": {
        "description": "Random searching Useful to compare with results from genetic algorithm",
        "hierarchy": "GA",
        "module": "GA",
        "name": "randomSearch",
        "normalized": "StdGen-\u003eInt-\u003ea-\u003eb-\u003ec(Archive d e)",
        "package": "GA",
        "partial": "Search",
        "signature": "StdGen-\u003eInt-\u003ep-\u003ed-\u003em(Archive e s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:score",
      "description": {
        "fct-descr": "\u003cp\u003eScore an entity (lower is better), monadic version. [optional]\n\u003c/p\u003e\u003cp\u003eDefault implementation hoists score' into monad, \n overriden if scorePop is implemented.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "score",
        "fct-source": "src/GA.html#score",
        "fct-type": "method",
        "title": "score"
      },
      "index": {
        "description": "Score an entity lower is better monadic version optional Default implementation hoists score into monad overriden if scorePop is implemented",
        "hierarchy": "GA",
        "module": "GA",
        "name": "score",
        "normalized": "",
        "package": "GA",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:score-39-",
      "description": {
        "fct-descr": "\u003cp\u003eScore an entity (lower is better), pure version. [optional]\n\u003c/p\u003e\u003cp\u003eOverridden if score or scorePop are implemented.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "score'",
        "fct-source": "src/GA.html#score%27",
        "fct-type": "method",
        "title": "score'"
      },
      "index": {
        "description": "Score an entity lower is better pure version optional Overridden if score or scorePop are implemented",
        "hierarchy": "GA",
        "module": "GA",
        "name": "score'",
        "normalized": "",
        "package": "GA",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:scorePop",
      "description": {
        "fct-descr": "\u003cp\u003eScore an entire population of entites. [optional]\n\u003c/p\u003e\u003cp\u003eDefault implementation returns Nothing, \n and triggers indivual of entities.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "scorePop",
        "fct-source": "src/GA.html#scorePop",
        "fct-type": "method",
        "title": "scorePop"
      },
      "index": {
        "description": "Score an entire population of entites optional Default implementation returns Nothing and triggers indivual of entities",
        "hierarchy": "GA",
        "module": "GA",
        "name": "scorePop",
        "normalized": "",
        "package": "GA",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GA/docs/GA.html#v:showGeneration",
      "description": {
        "fct-descr": "\u003cp\u003eShow progress made in this generation.\n\u003c/p\u003e\u003cp\u003eDefault implementation shows best entity.\n\u003c/p\u003e",
        "fct-module": "GA",
        "fct-package": "GA",
        "fct-signature": "showGeneration",
        "fct-source": "src/GA.html#showGeneration",
        "fct-type": "method",
        "title": "showGeneration"
      },
      "index": {
        "description": "Show progress made in this generation Default implementation shows best entity",
        "hierarchy": "GA",
        "module": "GA",
        "name": "showGeneration",
        "normalized": "",
        "package": "GA",
        "partial": "Generation",
        "signature": ""
      }
    }
  }
]