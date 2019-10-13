
/**
 * Asset is a Base class of all the Raw asset
 */
class Asset {

    /**
     * Returns the Random Asset value
     */
    static getRandom() {
        throw new Error("abstract method error");
    }

    /**
     * check Asset is valid or not
     */
    static isValid() {
        throw new Error("abstract method error");
    }
}
module.exports = Asset;
