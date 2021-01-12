var path = require("path")

// normalizes path for unix and windows
console.log(path.normalize("C:\\Users\\tomcr\\Desktop\\node\\3_ global vars"))

// joins a number of paths together
console.log(path.join("start", "\mid", "end"))

//dirname, basename, extname
let samplePath = "C:\Program Files (x86)\Microsoft\EdgeUpdate\MicrosoftEdgeUpdate.exe"
console.log(path.dirname(samplePath))
console.log(path.basename(samplePath))
console.log(path.extname(samplePath))
// result
// C:
// Program Files (x86)MicrosoftEdgeUpdateMicrosoftEdgeUpdate.exe
// .exe