import Api from './Api'

export default {
    getBarefootData() {
        return Api().get('SOMEURL')
    }
}