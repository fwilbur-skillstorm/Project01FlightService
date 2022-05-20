const IsoConverter = {
    'toFullString': (str) => {
        try {
            return str.substring(5, 7) + '/' + str.substring(8, 10) + '/' + str.substring(0, 4) + ' ' + str.substring(11, 13) + ':' + str.substring(14, 16) + ':' + str.substring(17, 19)
        } catch (e) {
            return typeof e
        }
    },
    'toDateOnly': (str) => {
        try {
            return str.substring(5, 7) + '/' + str.substring(8, 10) + '/' + str.substring(0, 4)
        } catch (e) {
            return typeof e
        }
    },
    'toTimeOnly': (str) => {
        try {
            return str.substring(11, 13) + ':' + str.substring(14, 16) + ':' + str.substring(17, 19)
        } catch (e) {
            return typeof e
        }
    }
}

export default IsoConverter