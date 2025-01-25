// BRJS: Custom JS Package
const BRJS = {
    // "hawk" / "tuah": Custom if-else logic
    hawk(condition) {
      if (condition) {
        return {
          tuah(callback) {
            callback();
          }
        };
      } else {
        return {
          tuah(callback) {
            callback();
          }
        };
      }
    },
  
    // "crashout": Custom error throwing
    crashout(message) {
      throw new Error(message);
    },
  
    // "yap": Custom console.log
    yap(...messages) {
      console.log(...messages);
    },
  
    // "mew" / "skibidi": Renaming true/false
    get mew() {
      return true;
    },
  
    get skibidi() {
      return false;
    },
  
    // "ohio": Renaming null
    get ohio() {
      return null;
    }
  };
  
  // Example usage
  BRJS.hawk(BRJS.mew).tuah(() => BRJS.yap("Condition is true (mew)!"));
  BRJS.hawk(BRJS.skibidi).tuah(() => BRJS.yap("Condition is false (skibidi)!"));
  
  try {
    BRJS.crashout("This is a custom error!");
  } catch (crashout) { // Rename error to crashout
    BRJS.yap("Caught crashout:", crashout.message);
  }
  
  BRJS.yap("Null is now:", BRJS.ohio);
  