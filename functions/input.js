const filterName = (name) => {
    if (name == undefined) return name = "unKnown"
    if (name.length > 10) return name.substring(0,10)
    return name.trim();
}

module.exports = filterName;