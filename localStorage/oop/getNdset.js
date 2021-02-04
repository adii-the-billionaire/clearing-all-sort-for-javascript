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
//jo method function ka hota vo isko hata ke property kr deta ha redable property
//Object representation nd overwrite in alternative way
//return data for setting data that is return 
//setting daata set
