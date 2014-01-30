[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA flexible implementation of min-, max-, min-priority, max-priority and\n custom-priority heaps based on the leftist-heaps from Chris Okasaki's book\n \"Purely Functional Data Structures\", Cambridge University Press, 1998,\n chapter 3.1.\n\u003c/p\u003e\u003cp\u003eThere are different flavours of \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003es, each of them following a different\n strategy when ordering its elements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Choose \u003ccode\u003e\u003ca\u003eMinHeap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e if you need a simple minimum or maximum heap\n    (which always keeps the minimum/maximum element at the head of the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e If you wish to manually annotate a value with a priority, e. g. an \u003ccode\u003eIO ()\u003c/code\u003e\n    action with an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003e\u003ca\u003eMinPrioHeap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaxPrioHeap\u003c/a\u003e\u003c/code\u003e. They manage\n    \u003ccode\u003e(prio, val)\u003c/code\u003e tuples so that only the priority (and not the value)\n    influences the order of elements.\n\u003c/li\u003e\u003cli\u003e If you still need something different, define a custom order for the heap\n    elements by implementing an instance of \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e and let the maintainer\n    know what's missing.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll sorts of heaps mentioned above (\u003ccode\u003e\u003ca\u003eMinHeap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMinPrioHeap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eMaxPrioHeap\u003c/a\u003e\u003c/code\u003e) are built on the same underlying type: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e prio val\u003c/code\u003e. It is\n a simple minimum priority heap. The trick is, that you never insert \u003ccode\u003e(prio,\n val)\u003c/code\u003e pairs directly: You only insert an \"external representation\", usually\n called \u003ccode\u003eitem\u003c/code\u003e, and an appropriate \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e instance is used to \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e the\n \u003ccode\u003eitem\u003c/code\u003e to a \u003ccode\u003e(prio, val)\u003c/code\u003e pair. For details refer to the documentation of\n \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "module",
        "fct-source": "src/Data-Heap.html",
        "fct-type": "module",
        "title": "Heap"
      },
      "index": {
        "description": "flexible implementation of min max min-priority max-priority and custom-priority heaps based on the leftist-heaps from Chris Okasaki book Purely Functional Data Structures Cambridge University Press chapter There are different flavours of Heap each of them following different strategy when ordering its elements Choose MinHeap or MaxHeap if you need simple minimum or maximum heap which always keeps the minimum maximum element at the head of the Heap If you wish to manually annotate value with priority an IO action with an Int use MinPrioHeap or MaxPrioHeap They manage prio val tuples so that only the priority and not the value influences the order of elements If you still need something different define custom order for the heap elements by implementing an instance of HeapItem and let the maintainer know what missing All sorts of heaps mentioned above MinHeap MaxHeap MinPrioHeap and MaxPrioHeap are built on the same underlying type HeapT prio val It is simple minimum priority heap The trick is that you never insert prio val pairs directly You only insert an external representation usually called item and an appropriate HeapItem instance is used to split the item to prio val pair For details refer to the documentation of HeapItem",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "heap",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:FstMaxPolicy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy type for a \u003ccode\u003e(prio, val)\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaxPrioHeap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "data",
        "fct-source": "src/Data-Heap-Item.html#FstMaxPolicy",
        "fct-type": "data",
        "title": "FstMaxPolicy"
      },
      "index": {
        "description": "Policy type for prio val MaxPrioHeap",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "FstMaxPolicy",
        "normalized": "",
        "package": "heap",
        "partial": "Fst Max Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:FstMinPolicy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy type for a \u003ccode\u003e(prio, val)\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMinPrioHeap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "data",
        "fct-source": "src/Data-Heap-Item.html#FstMinPolicy",
        "fct-type": "data",
        "title": "FstMinPolicy"
      },
      "index": {
        "description": "Policy type for prio val MinPrioHeap",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "FstMinPolicy",
        "normalized": "",
        "package": "heap",
        "partial": "Fst Min Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:Heap",
      "description": {
        "fct-descr": "\u003cp\u003eThis type alias is an abbreviation for a \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e which uses the \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e\n instance of \u003ccode\u003epol item\u003c/code\u003e to organise its elements.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "type",
        "fct-source": "src/Data-Heap-Item.html#Heap",
        "fct-type": "type",
        "title": "Heap"
      },
      "index": {
        "description": "This type alias is an abbreviation for HeapT which uses the HeapItem instance of pol item to organise its elements",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "Heap",
        "normalized": "",
        "package": "heap",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:HeapItem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e pol item\u003c/code\u003e is a type class for items that can be stored in a\n \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e. A raw \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e prio val\u003c/code\u003e only provides a minimum priority heap (i. e.\n \u003ccode\u003eval\u003c/code\u003e doesn't influence the ordering of elements and the pair with minimal\n \u003ccode\u003eprio\u003c/code\u003e will be extracted first, see \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e documentation). The job of this\n class is to translate between arbitrary \u003ccode\u003eitem\u003c/code\u003es and priority-value pairs\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ePrio\u003c/a\u003e\u003c/code\u003e pol item, \u003ccode\u003e\u003ca\u003eVal\u003c/a\u003e\u003c/code\u003e pol item)\u003c/code\u003e, depending on the policy \u003ccode\u003epol\u003c/code\u003e to be used.\n This way, we are able to use \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e not only as \u003ccode\u003e\u003ca\u003eMinPrioHeap\u003c/a\u003e\u003c/code\u003e, but also as\n \u003ccode\u003e\u003ca\u003eMinHeap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMaxPrioHeap\u003c/a\u003e\u003c/code\u003e or a custom implementation. In short: The\n job of this class is to deconstruct arbitrary \u003ccode\u003eitem\u003c/code\u003es into a \u003ccode\u003e(prio, val)\u003c/code\u003e\n pairs that can be handled by a minimum priority \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: Consider you want to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e prio val\u003c/code\u003e as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e. You\n would have to invert the order of \u003ccode\u003ea\u003c/code\u003e (e. g. by introducing \u003ccode\u003enewtype InvOrd a\n = InvOrd a\u003c/code\u003e along with an apropriate \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance for it) and then use a\n \u003ccode\u003etype \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e a = \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e (InvOrd a) ()\u003c/code\u003e. You'd also have to translate\n every \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003e(InvOrd x, ())\u003c/code\u003e before insertion and back after removal in\n order to retrieve your original type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis functionality is provided by the \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e class. In the above example,\n you'd use a \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e. The according instance declaration is of course\n already provided and looks like this (simplified):\n\u003c/p\u003e\u003cpre\u003edata \u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e\n\ninstance (\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e a where\n     newtype \u003ccode\u003e\u003ca\u003ePrio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e a = MaxP a deriving (\u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e)\n     type    \u003ccode\u003e\u003ca\u003eVal\u003c/a\u003e\u003c/code\u003e  \u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e a = ()\n     \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e x           = (MaxP x, ())\n     \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e (MaxP x, _) = x\n\ninstance (\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePrio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e a) where\n     \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e (MaxP x) (MaxP y) = \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e y x\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e is a phantom type describing which \u003ccode\u003e\u003ca\u003eHeapItem\u003c/a\u003e\u003c/code\u003e instance is actually\n meant (e. g. we have to distinguish between \u003ccode\u003e\u003ca\u003eMinHeap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e, which is\n done via \u003ccode\u003e\u003ca\u003eMinPolicy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaxPolicy\u003c/a\u003e\u003c/code\u003e, respectively) and \u003ccode\u003eMaxP\u003c/code\u003e inverts the\n ordering of \u003ccode\u003ea\u003c/code\u003e, so that the maximum will be on top of the \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe conversion functions \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e have to make sure that\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003eforall p v. \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e (p, v)) == (p, v)\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n     don't remove, add or alter anything)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eforall p v f. \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e (p, f v)) == \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n     (\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e (p, v)))\u003c/code\u003e (modifying the associated value \u003ccode\u003ev\u003c/code\u003e doesn't alter the\n      priority \u003ccode\u003ep\u003c/code\u003e)\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "class",
        "fct-source": "src/Data-Heap-Item.html#HeapItem",
        "fct-type": "class",
        "title": "HeapItem"
      },
      "index": {
        "description": "HeapItem pol item is type class for items that can be stored in HeapT raw HeapT prio val only provides minimum priority heap val doesn influence the ordering of elements and the pair with minimal prio will be extracted first see HeapT documentation The job of this class is to translate between arbitrary item and priority-value pairs Prio pol item Val pol item depending on the policy pol to be used This way we are able to use HeapT not only as MinPrioHeap but also as MinHeap MaxHeap MaxPrioHeap or custom implementation In short The job of this class is to deconstruct arbitrary item into prio val pairs that can be handled by minimum priority HeapT Example Consider you want to use HeapT prio val as MaxHeap You would have to invert the order of by introducing newtype InvOrd InvOrd along with an apropriate Ord instance for it and then use type MaxHeap HeapT InvOrd You also have to translate every to InvOrd before insertion and back after removal in order to retrieve your original type This functionality is provided by the HeapItem class In the above example you use MaxHeap The according instance declaration is of course already provided and looks like this simplified data MaxPolicy instance Ord HeapItem MaxPolicy where newtype Prio MaxPolicy MaxP deriving Eq type Val MaxPolicy split MaxP merge MaxP instance Ord Ord Prio MaxPolicy where compare MaxP MaxP compare MaxPolicy is phantom type describing which HeapItem instance is actually meant we have to distinguish between MinHeap and MaxHeap which is done via MinPolicy and MaxPolicy respectively and MaxP inverts the ordering of so that the maximum will be on top of the HeapT The conversion functions split and merge have to make sure that forall split merge merge and split don remove add or alter anything forall fst split merge fst split merge modifying the associated value doesn alter the priority",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "HeapItem",
        "normalized": "",
        "package": "heap",
        "partial": "Heap Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:HeapT",
      "description": {
        "fct-descr": "\u003cp\u003eThe basic heap type. It stores priority-value pairs \u003ccode\u003e(prio, val)\u003c/code\u003e and\n always keeps the pair with minimal priority on top. The value associated to\n the priority does not have any influence on the ordering of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "data",
        "fct-source": "src/Data-Heap-Internal.html#HeapT",
        "fct-type": "data",
        "title": "HeapT"
      },
      "index": {
        "description": "The basic heap type It stores priority-value pairs prio val and always keeps the pair with minimal priority on top The value associated to the priority does not have any influence on the ordering of elements",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "HeapT",
        "normalized": "",
        "package": "heap",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:MaxHeap",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e which will always extract the maximum first.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "type",
        "fct-source": "src/Data-Heap-Item.html#MaxHeap",
        "fct-type": "type",
        "title": "MaxHeap"
      },
      "index": {
        "description": "Heap which will always extract the maximum first",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "MaxHeap",
        "normalized": "",
        "package": "heap",
        "partial": "Max Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:MaxPolicy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy type for a \u003ccode\u003e\u003ca\u003eMaxHeap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "data",
        "fct-source": "src/Data-Heap-Item.html#MaxPolicy",
        "fct-type": "data",
        "title": "MaxPolicy"
      },
      "index": {
        "description": "Policy type for MaxHeap",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "MaxPolicy",
        "normalized": "",
        "package": "heap",
        "partial": "Max Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:MaxPrioHeap",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e storing priority-value pairs \u003ccode\u003e(prio, val)\u003c/code\u003e. The order of elements\n is solely determined by the priority \u003ccode\u003eprio\u003c/code\u003e, the value \u003ccode\u003eval\u003c/code\u003e has no influence.\n The priority-value pair with maximum priority will always be extracted first.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "type",
        "fct-source": "src/Data-Heap-Item.html#MaxPrioHeap",
        "fct-type": "type",
        "title": "MaxPrioHeap"
      },
      "index": {
        "description": "Heap storing priority-value pairs prio val The order of elements is solely determined by the priority prio the value val has no influence The priority-value pair with maximum priority will always be extracted first",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "MaxPrioHeap",
        "normalized": "",
        "package": "heap",
        "partial": "Max Prio Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:MinHeap",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e which will always extract the minimum first.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "type",
        "fct-source": "src/Data-Heap-Item.html#MinHeap",
        "fct-type": "type",
        "title": "MinHeap"
      },
      "index": {
        "description": "Heap which will always extract the minimum first",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "MinHeap",
        "normalized": "",
        "package": "heap",
        "partial": "Min Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:MinPolicy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy type for a \u003ccode\u003e\u003ca\u003eMinHeap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "data",
        "fct-source": "src/Data-Heap-Item.html#MinPolicy",
        "fct-type": "data",
        "title": "MinPolicy"
      },
      "index": {
        "description": "Policy type for MinHeap",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "MinPolicy",
        "normalized": "",
        "package": "heap",
        "partial": "Min Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#t:MinPrioHeap",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e storing priority-value pairs \u003ccode\u003e(prio, val)\u003c/code\u003e. The order of elements\n is solely determined by the priority \u003ccode\u003eprio\u003c/code\u003e, the value \u003ccode\u003eval\u003c/code\u003e has no influence.\n The priority-value pair with minmal priority will always be extracted first.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "type",
        "fct-source": "src/Data-Heap-Item.html#MinPrioHeap",
        "fct-type": "type",
        "title": "MinPrioHeap"
      },
      "index": {
        "description": "Heap storing priority-value pairs prio val The order of elements is solely determined by the priority prio the value val has no influence The priority-value pair with minmal priority will always be extracted first",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "MinPrioHeap",
        "normalized": "",
        "package": "heap",
        "partial": "Min Prio Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e p h\u003c/code\u003e: The longest prefix of items in \u003ccode\u003eh\u003c/code\u003e that do \u003cem\u003enot\u003c/em\u003e satisfy \u003ccode\u003ep\u003c/code\u003e\n and \u003ccode\u003eh\u003c/code\u003e, with those elements removed.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(item -\u003e Bool) -\u003e Heap pol item -\u003e ([item], Heap pol item)",
        "fct-source": "src/Data-Heap.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "break The longest prefix of items in that do not satisfy and with those elements removed",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eHeap b a-\u003e([a],Heap b a)",
        "package": "heap",
        "partial": "",
        "signature": "(item-\u003eBool)-\u003eHeap pol item-\u003e([item],Heap pol item)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eRemove first \u003ccode\u003en\u003c/code\u003e items from the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Int -\u003e Heap pol item -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Remove first items from the Heap",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "drop",
        "normalized": "Int-\u003eHeap a b-\u003eHeap a b",
        "package": "heap",
        "partial": "",
        "signature": "Int-\u003eHeap pol item-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p h\u003c/code\u003e: Remove the longest prefix of items in \u003ccode\u003eh\u003c/code\u003e that satisfy\n \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(item -\u003e Bool) -\u003e Heap pol item -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile Remove the longest prefix of items in that satisfy",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eHeap b a-\u003eHeap b a",
        "package": "heap",
        "partial": "While",
        "signature": "(item-\u003eBool)-\u003eHeap pol item-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct an empty \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "HeapT prio val",
        "fct-source": "src/Data-Heap-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty HeapT",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "empty",
        "normalized": "",
        "package": "heap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all items from a \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e not fulfilling a predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(item -\u003e Bool) -\u003e Heap pol item -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Remove all items from HeapT not fulfilling predicate",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eHeap b a-\u003eHeap b a",
        "package": "heap",
        "partial": "",
        "signature": "(item-\u003eBool)-\u003eHeap pol item-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e from a list providing its items in ascending order\n of priority (i. e. in the same order they will be removed from the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e).\n This function is faster than \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e but not as fast as \u003ccode\u003e\u003ca\u003efromDescList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe precondition is not checked\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "[item] -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Create Heap from list providing its items in ascending order of priority in the same order they will be removed from the Heap This function is faster than fromList but not as fast as fromDescList The precondition is not checked",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "fromAscList",
        "normalized": "[a]-\u003eHeap b a",
        "package": "heap",
        "partial": "Asc List",
        "signature": "[item]-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:fromDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e from a list providing its items in descending order\n of priority (i. e. they will be removed inversely from the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e). Prefer\n this function over \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/code\u003e, it's faster.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThe precondition is not checked\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "[item] -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#fromDescList",
        "fct-type": "function",
        "title": "fromDescList"
      },
      "index": {
        "description": "Create Heap from list providing its items in descending order of priority they will be removed inversely from the Heap Prefer this function over fromList and fromAscList it faster The precondition is not checked",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "fromDescList",
        "normalized": "[a]-\u003eHeap b a",
        "package": "heap",
        "partial": "Desc List",
        "signature": "[item]-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e from the given items. Assuming you have a\n sorted list, you probably want to use \u003ccode\u003e\u003ca\u003efromDescList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/code\u003e, they\n are faster than this function.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "[item] -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "log Build Heap from the given items Assuming you have sorted list you probably want to use fromDescList or fromAscList they are faster than this function",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "fromList",
        "normalized": "[a]-\u003eHeap b a",
        "package": "heap",
        "partial": "List",
        "signature": "[item]-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a single item into the \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "item -\u003e Heap pol item -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert single item into the HeapT",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "insert",
        "normalized": "a-\u003eHeap b a-\u003eHeap b a",
        "package": "heap",
        "partial": "",
        "signature": "item-\u003eHeap pol item-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "HeapT prio val -\u003e Bool",
        "fct-source": "src/Data-Heap-Internal.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Is the HeapT empty",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "isEmpty",
        "normalized": "HeapT a b-\u003eBool",
        "package": "heap",
        "partial": "Empty",
        "signature": "HeapT prio val-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eRestore the \u003ccode\u003eitem\u003c/code\u003e from a priority-value pair.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(Prio pol item, Val pol item) -\u003e item",
        "fct-source": "src/Data-Heap-Item.html#merge",
        "fct-type": "method",
        "title": "merge"
      },
      "index": {
        "description": "Restore the item from priority-value pair",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "merge",
        "normalized": "(Prio a b,Val a b)-\u003eb",
        "package": "heap",
        "partial": "",
        "signature": "(Prio pol item,Val pol item)-\u003eitem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "HeapT prio val -\u003e Bool",
        "fct-source": "src/Data-Heap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the HeapT empty",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "null",
        "normalized": "HeapT a b-\u003eBool",
        "package": "heap",
        "partial": "",
        "signature": "HeapT prio val-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003ePartition the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e into two. \u003ccode\u003e\u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e p h = (h1, h2)\u003c/code\u003e: All items in\n \u003ccode\u003eh1\u003c/code\u003e fulfil the predicate \u003ccode\u003ep\u003c/code\u003e, those in \u003ccode\u003eh2\u003c/code\u003e don't. \u003ccode\u003e\u003ccode\u003eunion\u003c/code\u003e h1 h2 = h\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(item -\u003e Bool) -\u003e Heap pol item -\u003e (Heap pol item, Heap pol item)",
        "fct-source": "src/Data-Heap.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Partition the Heap into two partition h1 h2 All items in h1 fulfil the predicate those in h2 don union h1 h2",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eHeap b a-\u003e(Heap b a,Heap b a)",
        "package": "heap",
        "partial": "",
        "signature": "(item-\u003eBool)-\u003eHeap pol item-\u003e(Heap pol item,Heap pol item)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a singleton \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "item -\u003e Heap pol item",
        "fct-source": "src/Data-Heap.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton HeapT",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "singleton",
        "normalized": "a-\u003eHeap b a",
        "package": "heap",
        "partial": "",
        "signature": "item-\u003eHeap pol item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The total number of elements in the \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "HeapT prio val -\u003e Int",
        "fct-source": "src/Data-Heap-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The total number of elements in the HeapT",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "size",
        "normalized": "HeapT a b-\u003eInt",
        "package": "heap",
        "partial": "",
        "signature": "HeapT prio val-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e p h\u003c/code\u003e: Return the longest prefix of items in \u003ccode\u003eh\u003c/code\u003e that satisfy \u003ccode\u003ep\u003c/code\u003e and\n \u003ccode\u003eh\u003c/code\u003e, with those elements removed.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(item -\u003e Bool) -\u003e Heap pol item -\u003e ([item], Heap pol item)",
        "fct-source": "src/Data-Heap.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "span Return the longest prefix of items in that satisfy and with those elements removed",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eHeap b a-\u003e([a],Heap b a)",
        "package": "heap",
        "partial": "",
        "signature": "(item-\u003eBool)-\u003eHeap pol item-\u003e([item],Heap pol item)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate an \u003ccode\u003eitem\u003c/code\u003e into a priority-value pair.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "item -\u003e (Prio pol item, Val pol item)",
        "fct-source": "src/Data-Heap-Item.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "Translate an item into priority-value pair",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "split",
        "normalized": "a-\u003e(Prio b a,Val b a)",
        "package": "heap",
        "partial": "",
        "signature": "item-\u003e(Prio pol item,Val pol item)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e n h\u003c/code\u003e: Return a list of the first \u003ccode\u003en\u003c/code\u003e items of \u003ccode\u003eh\u003c/code\u003e and \u003ccode\u003eh\u003c/code\u003e, with\n those elements removed.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Int -\u003e Heap pol item -\u003e ([item], Heap pol item)",
        "fct-source": "src/Data-Heap.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "splitAt Return list of the first items of and with those elements removed",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "splitAt",
        "normalized": "Int-\u003eHeap a b-\u003e([b],Heap a b)",
        "package": "heap",
        "partial": "At",
        "signature": "Int-\u003eHeap pol item-\u003e([item],Heap pol item)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eTake the first \u003ccode\u003en\u003c/code\u003e items from the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Int -\u003e Heap pol item -\u003e [item]",
        "fct-source": "src/Data-Heap.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Take the first items from the Heap",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "take",
        "normalized": "Int-\u003eHeap a b-\u003e[b]",
        "package": "heap",
        "partial": "",
        "signature": "Int-\u003eHeap pol item-\u003e[item]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p h\u003c/code\u003e: List the longest prefix of items in \u003ccode\u003eh\u003c/code\u003e that satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "(item -\u003e Bool) -\u003e Heap pol item -\u003e [item]",
        "fct-source": "src/Data-Heap.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile List the longest prefix of items in that satisfy",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eHeap b a-\u003e[a]",
        "package": "heap",
        "partial": "While",
        "signature": "(item-\u003eBool)-\u003eHeap pol item-\u003e[item]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. List the items of the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e in ascending order of priority.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Heap pol item -\u003e [item]",
        "fct-source": "src/Data-Heap.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "log List the items of the Heap in ascending order of priority",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "toAscList",
        "normalized": "Heap a b-\u003e[b]",
        "package": "heap",
        "partial": "Asc List",
        "signature": "Heap pol item-\u003e[item]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. List the items of the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e in descending order of priority.\n Note that this function is not especially efficient (it is implemented in\n terms of \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e), it is provided as a counterpart of the\n efficient \u003ccode\u003e\u003ca\u003efromDescList\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Heap pol item -\u003e [item]",
        "fct-source": "src/Data-Heap.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "log List the items of the Heap in descending order of priority Note that this function is not especially efficient it is implemented in terms of reverse and toAscList it is provided as counterpart of the efficient fromDescList function",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "toDescList",
        "normalized": "Heap a b-\u003e[b]",
        "package": "heap",
        "partial": "Desc List",
        "signature": "Heap pol item-\u003e[item]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. List all items of the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e in no specific order.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Heap pol item -\u003e [item]",
        "fct-source": "src/Data-Heap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "log List all items of the Heap in no specific order",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "toList",
        "normalized": "Heap a b-\u003e[b]",
        "package": "heap",
        "partial": "List",
        "signature": "Heap pol item-\u003e[item]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log max(n, m))\u003c/em\u003e. Form the union of two \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "HeapT prio val -\u003e HeapT prio val -\u003e HeapT prio val",
        "fct-source": "src/Data-Heap-Internal.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "log max Form the union of two HeapT",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "union",
        "normalized": "HeapT a b-\u003eHeapT a b-\u003eHeapT a b",
        "package": "heap",
        "partial": "",
        "signature": "HeapT prio val-\u003eHeapT prio val-\u003eHeapT prio val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eBuild the union of all given \u003ccode\u003e\u003ca\u003eHeapT\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "[HeapT prio val] -\u003e HeapT prio val",
        "fct-source": "src/Data-Heap-Internal.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Build the union of all given HeapT",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "unions",
        "normalized": "[HeapT a b]-\u003eHeapT a b",
        "package": "heap",
        "partial": "",
        "signature": "[HeapT prio val]-\u003eHeapT prio val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e for the head, \u003cem\u003eO(log n)\u003c/em\u003e for the tail. Find the item with minimal\n associated priority and remove it from the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e (i. e. find head and tail\n of the heap) if it is not empty. Otherwise, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Heap pol item -\u003e Maybe (item, Heap pol item)",
        "fct-source": "src/Data-Heap.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "for the head log for the tail Find the item with minimal associated priority and remove it from the Heap find head and tail of the heap if it is not empty Otherwise Nothing is returned",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "view",
        "normalized": "Heap a b-\u003eMaybe(b,Heap a b)",
        "package": "heap",
        "partial": "",
        "signature": "Heap pol item-\u003eMaybe(item,Heap pol item)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:viewHead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Find the item with minimal associated priority on the \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e (i. e.\n its head) if it is not empty. Otherwise, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Heap pol item -\u003e Maybe item",
        "fct-source": "src/Data-Heap.html#viewHead",
        "fct-type": "function",
        "title": "viewHead"
      },
      "index": {
        "description": "Find the item with minimal associated priority on the Heap its head if it is not empty Otherwise Nothing is returned",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "viewHead",
        "normalized": "Heap a b-\u003eMaybe b",
        "package": "heap",
        "partial": "Head",
        "signature": "Heap pol item-\u003eMaybe item"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/heap/docs/Data-Heap.html#v:viewTail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Remove the item with minimal associated priority and from the\n \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e (i. e. its tail) if it is not empty. Otherwise, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.Heap",
        "fct-package": "heap",
        "fct-signature": "Heap pol item -\u003e Maybe (Heap pol item)",
        "fct-source": "src/Data-Heap.html#viewTail",
        "fct-type": "function",
        "title": "viewTail"
      },
      "index": {
        "description": "log Remove the item with minimal associated priority and from the Heap its tail if it is not empty Otherwise Nothing is returned",
        "hierarchy": "Data Heap",
        "module": "Data.Heap",
        "name": "viewTail",
        "normalized": "Heap a b-\u003eMaybe(Heap a b)",
        "package": "heap",
        "partial": "Tail",
        "signature": "Heap pol item-\u003eMaybe(Heap pol item)"
      }
    }
  }
]