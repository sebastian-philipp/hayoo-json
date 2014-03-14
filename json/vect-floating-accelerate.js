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
        "word": "vect-floating-accelerate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports vect-floating instances to make Vec2, Normal2, Vec3, Normal3, Vec4, Normal4, Quaternion, and UnitQuaternion\ncompatible with accelerate.\n\u003c/p\u003e\u003cp\u003eThe instances are defined:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eNormal2\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal2\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal2\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a), \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal2\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eIsFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eNormal3\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal3\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal3\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a), \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal3\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eIsFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal3\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eNormal4\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal4\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal4\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a), \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal4\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eIsFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNormal4\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eQuaternion\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnitQuaternion\u003c/a\u003e\u003c/code\u003e Accelerate Instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eUnitQuaternion\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003eIsTuple\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eUnitQuaternion\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a), \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ePlain\u003c/a\u003e\u003c/code\u003e a)) =\u003e \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eUnitQuaternion\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einstance (\u003ccode\u003e\u003ca\u003eElt\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eIsFloating\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eUnlift\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eUnitQuaternion\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e a))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Vect.Floating.Accelerate.Instances",
          "name": "Instances",
          "package": "vect-floating-accelerate",
          "source": "src/Data-Vect-Floating-Accelerate-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports vect-floating instances to make Vec2 Normal2 Vec3 Normal3 Vec4 Normal4 Quaternion and UnitQuaternion compatible with accelerate The instances are defined Vec2 Accelerate Instances instance Elt Elt Vec2 instance IsTuple Vec2 instance Lift Exp Elt Plain Lift Exp Vec2 instance Elt Unlift Exp Vec2 Exp Normal2 Accelerate Instances instance Elt Floating Elt Normal2 instance Floating IsTuple Normal2 instance Lift Exp Elt Plain Floating Floating Plain Lift Exp Normal2 instance Elt Floating IsFloating Unlift Exp Normal2 Exp Vec3 Accelerate Instances instance Elt Elt Vec3 instance IsTuple Vec3 instance Lift Exp Elt Plain Lift Exp Vec3 instance Elt Unlift Exp Vec3 Exp Normal3 Accelerate Instances instance Elt Floating Elt Normal3 instance Floating IsTuple Normal3 instance Lift Exp Elt Plain Floating Floating Plain Lift Exp Normal3 instance Elt Floating IsFloating Unlift Exp Normal3 Exp Vec4 Accelerate Instances instance Elt Elt Vec4 instance IsTuple Vec4 instance Lift Exp Elt Plain Lift Exp Vec4 instance Elt Unlift Exp Vec4 Exp Normal4 Accelerate Instances instance Elt Floating Elt Normal4 instance Floating IsTuple Normal4 instance Lift Exp Elt Plain Floating Floating Plain Lift Exp Normal4 instance Elt Floating IsFloating Unlift Exp Normal4 Exp Quaternion Accelerate Instances instance Elt Elt Quaternion instance IsTuple Quaternion instance Lift Exp Elt Plain Lift Exp Quaternion instance Elt Unlift Exp Quaternion Exp UnitQuaternion Accelerate Instances instance Elt Floating Elt UnitQuaternion instance Floating IsTuple UnitQuaternion instance Lift Exp Elt Plain Floating Floating Plain Lift Exp UnitQuaternion instance Elt IsFloating Unlift Exp UnitQuaternion Exp",
          "hierarchy": "Data Vect Floating Accelerate Instances",
          "module": "Data.Vect.Floating.Accelerate.Instances",
          "name": "Instances",
          "package": "vect-floating-accelerate",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vect-floating-accelerate/docs/Data-Vect-Floating-Accelerate-Instances.html#"
      }
    }
  ]
]