const data = {
    locations:[],
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }
}
data.location = ' hi mera dil'
data.location = 'sksksksk     sksks   sk    '
console.log(data.location)
console.log(data)
console.log(data.locations)
