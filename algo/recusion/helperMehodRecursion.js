 //we have function first is outer function second is rfu
 function outer(input) {
     var outerScopedVariable = []

     function helper(helperInput) {
         //modify the outerScopedVariable
         helper(helperInput--)
     }
     helper(helper)
 }